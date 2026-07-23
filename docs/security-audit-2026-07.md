# Security Audit — torquemade-v2

**Date:** 2026-07-23
**Scope:** Full codebase audit (secrets, API routes, data layer, Next.js/Vercel config, dependencies)
**Type:** Read-only report. No code was modified as part of this audit.

## Scope correction (read this first)

The audit brief assumed a Supabase + Prisma stack. The actual `torquemade-v2` repo has **no Supabase, no Prisma, no Stripe** anywhere in `package.json` or the source tree — dependencies are limited to Next.js, `resend`, `google-auth-library`, and UI/animation libs (`framer-motion`, MDX tooling, etc.). There are only **3 API routes** total: `app/api/contact`, `app/api/indexing`, `app/api/revalidate` (plus `app/api/og`, a static image generator). Section 3 of the requested scope (Supabase RLS) is **not applicable** to this repo — that stack likely belongs to the separate `moto-crm-demo` project mentioned in `CLAUDE.md`, which isn't present in this working directory. Everything below reflects what's actually in `torquemade-v2`.

---

## Critical

### 1. Live Resend API key committed to git history
- **Where:** commit `575bd37` ("Create .env.local", 2026-05-15), reverted in `6b7828c` ("chore: remove .env.local from git tracking", 2026-07-02)
- **Finding:** `.env.local` was committed containing `RESEND_API_KEY=re_Gka7wUjd...` (redacted, rotated) in plaintext. It was later removed from tracking, but git history is immutable by default — the key was readable by anyone with clone access to the repo (`git show 575bd37`), and since this repo has a GitHub remote (per `CLAUDE.md` workflow), the key was likely visible on GitHub. Key has since been rotated.
- **Fix:** Treat this key as **compromised — rotate it in the Resend dashboard immediately**, regardless of anything else in this report. Afterward, if you want it fully scrubbed from history (not just current HEAD), that requires `git filter-repo` or BFG plus a force-push and is a separate, disruptive operation — discuss with Loan before doing that; rotating the key is the actually load-bearing fix.

### 2. `/api/indexing` has zero authentication — open relay for Google's Indexing API
- **File:** [app/api/indexing/route.ts](app/api/indexing/route.ts)
- **Finding:** The route accepts any `POST` with `{ url }` (only checked for `https://` prefix) and uses the server's own Google service-account credentials (`GOOGLE_SERVICE_ACCOUNT_JSON`) to submit that URL to Google's Indexing API — no session check, no shared secret, no rate limiting. It isn't referenced anywhere else in the codebase (no UI caller, no script caller), so it's a purely internal/ops tool that shipped with no access control at all, unlike its sibling `/api/revalidate` which does gate on a secret header.
- **Failure scenario:** Anyone who discovers the endpoint (`curl -X POST https://torquemade.com/api/indexing -d '{"url":"https://example.com"}'`) can burn the service account's daily Google Indexing API quota (submitting arbitrary URLs, including ones you don't own), causing a denial-of-service on your own indexing pipeline, and potentially getting the service account flagged for abuse by Google.
- **Fix:** Add the same `x-revalidate-secret`-style header check used in `/api/revalidate` before doing any work.

---

## High

### 3. `/api/contact` has no rate limiting and no CAPTCHA — only a honeypot
- **File:** [app/api/contact/route.ts:6-12](app/api/contact/route.ts#L6-L12)
- **Finding:** The only bot mitigation is a hidden `website` honeypot field. There is no IP/session rate limit, no CAPTCHA, no request-size cap. Any script can hammer this endpoint.
- **Failure scenario:** A targeted attacker (not a naive bot — honeypots don't stop anyone who reads the form HTML) can script thousands of POSTs, exhausting the Resend sending quota/reputation and flooding `loanswipe@gmail.com` with spam, or using the endpoint as a low-cost SMTP-relay-style spam vector via a legitimate-looking `from` address.
- **Fix:** Add rate limiting (e.g. Vercel Firewall / `@upstash/ratelimit` by IP) and consider a CAPTCHA (hCaptcha/Turnstile) on top of the existing honeypot.

### 4. `/api/contact` interpolates unescaped user input into HTML email body
- **File:** [app/api/contact/route.ts:19-28](app/api/contact/route.ts#L19-L28)
- **Finding:** `firstName`, `lastName`, `email`, `phone`, `company`, `storeUrl`, `service`, `budget`, `message` are all interpolated directly into an HTML string passed to `resend.emails.send({ html })` with no escaping (no `encodeURIComponent`/HTML-entity escaping, no sanitizer).
- **Failure scenario:** A submitter can inject arbitrary HTML/CSS into the email Loan receives — e.g. `message: '<img src=x onerror=...>'` or hidden phishing links styled to look legitimate, or content that breaks the email layout. Most modern mail clients strip `<script>`, but injected `<a>`/`<img>`/tracking pixels and visual spoofing are not blocked.
- **Fix:** HTML-escape each field before interpolation (or switch to Resend's `react`/template-based send with values passed as props rather than raw string interpolation).

### 5. No security headers configured anywhere
- **Files checked:** [next.config.ts](next.config.ts) (no `headers()` export), no `vercel.json`, [middleware.ts](middleware.ts) (only sets `x-is-crawler`/`x-crawler-name`, matcher explicitly excludes `/api`)
- **Finding:** Zero instances of `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Strict-Transport-Security`, `Referrer-Policy`, or `Permissions-Policy` found anywhere in the codebase.
- **Failure scenario:** Site can be framed by third parties (clickjacking), no CSP means any injected script (e.g. via a future XSS) runs unrestricted, no HSTS means the browser won't enforce HTTPS on repeat visits.
- **Fix:** Add a `headers()` function in `next.config.ts` (or a `vercel.json` `headers` block) setting at minimum `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY` (or `frame-ancestors 'none'` via CSP), `Referrer-Policy: strict-origin-when-cross-origin`, `Strict-Transport-Security`, and a CSP scoped to the actual script/style/image sources in use.

### 6. Dependency vulnerabilities — `npm audit` (5 high)
- **`next@15.5.18`** (installed, resolved via `^15.3.2`): flagged for multiple advisories including SSRF in Server Actions/rewrites, cache-confusion of response bodies, unbounded Server Action payload on Edge runtime, DoS via Image Optimization SVGs, and unauthenticated disclosure of internal Server Function endpoints. `npm audit fix` (non-breaking) does **not** resolve this — a newer Next.js release is needed; check the advisories' "patched versions" and plan an upgrade.
  - Advisories: GHSA-89xv-2m56-2m9x, GHSA-68g3-v927-f742, GHSA-4633-3j49-mh5q, GHSA-4c39-4ccg-62r3, GHSA-p9j2-gv94-2wf4, GHSA-q8wf-6r8g-63ch, GHSA-955p-x3mx-jcvp
- **`postcss` (bundled inside `next`, `<=8.5.11`)**: XSS via unescaped `</style>` in stringify output; arbitrary file read via attacker-controlled `sourceMappingURL`. (GHSA-qx2v-qp2m-jg93, GHSA-6g55-p6wh-862q)
- **`sharp` (bundled inside `next`, `<0.35.0`)**: inherited libvips CVEs (CVE-2026-33327/33328/35590/35591). (GHSA-f88m-g3jw-g9cj)
- **`js-yaml@4.0.0-4.2.0`** (transitive, likely via a devDependency toolchain): quadratic-complexity DoS. (GHSA-h67p-54hq-rp68, GHSA-52cp-r559-cp3m) — `npm audit fix` resolves this one non-breaking.
- **`brace-expansion`** (transitive, via `@typescript-eslint`): DoS via exponential regex expansion. `npm audit fix` resolves this non-breaking.
- **Fix:** Run `npm audit fix` for the two safely-fixable transitive issues, then separately plan a Next.js minor/patch bump (verify against the advisories' fixed-version ranges) since it pulls in the vulnerable `postcss`/`sharp`.

---

## Medium

### 7. `/api/revalidate` secret comparison is not constant-time
- **File:** [app/api/revalidate/route.ts:21](app/api/revalidate/route.ts#L21)
- **Finding:** `req.headers.get('x-revalidate-secret') !== secret` is a standard string comparison, not timing-safe (e.g. `crypto.timingSafeEqual`).
- **Failure scenario:** Theoretical timing side-channel to brute-force the secret byte-by-byte; in practice, network jitter over the internet makes this very hard to exploit remotely, and the secret observed in local tooling is a 64-char hex string (high entropy), which further limits practical risk.
- **Fix:** Low urgency given the entropy of the secret, but consider `crypto.timingSafeEqual` (with a length check first) as defense-in-depth. No rate limiting or lockout exists on repeated wrong-secret attempts either.

### 8. Google service-account key file sits unencrypted in the project root
- **File:** `torquemade-indexing-key.json` (repo root)
- **Finding:** Real service-account credentials (`client_email: torquemade-indexing@torquemade.iam.gserviceaccount.com`, `project_id: torquemade`) live as a plaintext JSON file on disk. It is correctly excluded via two separate `.gitignore` rules (`*-key.json` and `.env*`... actually matched by the explicit `torquemade-indexing-key.json` and `*-key.json` lines) and `git ls-files`/history confirm it has never been tracked. Still, it's a real secret sitting in the working directory rather than a secrets manager or environment variable, so any accidental `git add -f`, zip-and-share of the folder, or misconfigured backup could leak it.
- **Fix:** No urgent action since it's correctly gitignored and untracked. Consider migrating this to an env-injected value (base64 in `GOOGLE_SERVICE_ACCOUNT_JSON`-style, which `/api/indexing` already expects) rather than a standalone file, to remove the file-based attack surface entirely.

---

## Low / Info

### 9. `productionBrowserSourceMaps` not explicitly set
- **File:** [next.config.ts](next.config.ts)
- **Finding:** The option isn't present, so it uses the Next.js default (`false` — source maps are not shipped to the browser in production). No actual exposure today; flagged as **Info** because the setting isn't explicit, so a future edit could silently enable it without anyone noticing in review.
- **Fix:** Optionally add `productionBrowserSourceMaps: false` explicitly to make the intent self-documenting.

### 10. No `NEXT_PUBLIC_`-prefixed secrets — confirmed clean
- **Finding:** Zero `NEXT_PUBLIC_` env vars exist in the codebase at all (verified via full-tree grep). All three `process.env` reads (`RESEND_API_KEY`, `GOOGLE_SERVICE_ACCOUNT_JSON`, `REVALIDATE_SECRET`) are server-only, inside `app/api/**/route.ts` files, never touched by client components. No action needed.

### 11. ERP demo mockup (`Bearer sk_live_***`) confirmed static/cosmetic
- **Files:** [components/services-section.tsx:249](components/services-section.tsx#L249), [components/erp-feature-section.tsx:490](components/erp-feature-section.tsx#L490)
- **Finding:** Both instances of `sk_live_***` (literal asterisks, not a real key) are hardcoded JSX strings inside the homepage "Connexion ERP" visual mockup. Neither reads from `process.env`, props, or an API response — confirmed by reading full surrounding component code. Not a real secret, not a vulnerability. No action needed.

### 12. No webhook receivers in this repo
- **Finding:** No Stripe or Resend inbound webhook endpoint exists (the only Resend usage is outbound `emails.send` from `/api/contact`). Signature verification is therefore not applicable today — flagging only so that if a webhook receiver is added later (e.g. Resend delivery-event webhooks), signature verification (`svix`/Resend's webhook secret) should be added at that time.

### 13. `.claude/settings.local.json` contains a real revalidate secret in plaintext
- **File:** `.claude/settings.local.json` (repo-local but not part of the deployed app)
- **Finding:** This local Claude Code permissions file (not committed — protected by a **global** `~/.config/git/ignore` rule, not a repo-local `.gitignore` entry) has a literal `REVALIDATE_SECRET` value baked into an allow-listed `curl` command from a prior session.
- **Fix:** Low priority since it's already untracked globally, but consider adding `.claude/settings.local.json` to this repo's own `.gitignore` too, so protection doesn't depend solely on a global git config that could differ on another machine/clone.

---

## Summary table

| # | Severity | Finding | File |
|---|----------|---------|------|
| 1 | Critical | Live Resend API key in git history | git history (`575bd37`) |
| 2 | Critical | `/api/indexing` unauthenticated | app/api/indexing/route.ts |
| 3 | High | `/api/contact` no rate limit / CAPTCHA | app/api/contact/route.ts |
| 4 | High | `/api/contact` unescaped HTML injection into email | app/api/contact/route.ts |
| 5 | High | No security headers configured | next.config.ts / vercel.json (absent) |
| 6 | High | 5 high-severity npm vulnerabilities (next/postcss/sharp/js-yaml/brace-expansion) | package-lock.json |
| 7 | Medium | Non-constant-time secret comparison | app/api/revalidate/route.ts |
| 8 | Medium | Service-account key file on disk (unencrypted, but gitignored) | torquemade-indexing-key.json |
| 9 | Info | `productionBrowserSourceMaps` implicit default | next.config.ts |
| 10 | Info | No `NEXT_PUBLIC_` secrets — confirmed clean | — |
| 11 | Info | ERP mockup `sk_live_***` confirmed static/cosmetic | components/services-section.tsx, erp-feature-section.tsx |
| 12 | Info | No webhook receivers exist yet | — |
| 13 | Info | Local Claude settings file has plaintext secret (globally gitignored only) | .claude/settings.local.json |

**Most urgent action, independent of everything else:** rotate the Resend API key (#1) — it is exposed in git history right now.

This report has not been committed or pushed. Nothing in the codebase was modified.
