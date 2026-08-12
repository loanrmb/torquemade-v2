import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
// Relative, not the `@/` alias: next.config.ts is loaded by Next's own config
// loader, which does not apply the tsconfig path aliases.
import { SITE_URL } from './lib/site'

// script-src needs 'unsafe-inline': Next.js App Router streams the RSC
// hydration payload as multiple `self.__next_f.push(...)` inline <script>
// tags whose content is unique per request, so they can't be pinned with a
// static hash (tried a hash for just our one custom inline script — CSP3
// browsers then ignore 'unsafe-inline' entirely whenever *any* hash/nonce
// source is present in the directive, which blocked every other Next.js
// hydration script and rendered the page blank). A correct hash-free policy
// would need per-request nonces threaded through middleware.ts; out of scope
// here, so this is the deliberate tradeoff — same one most Next.js App
// Router sites make without a nonce pipeline.
//
// style-src needs 'unsafe-inline' too: the app uses React inline
// `style={{...}}` attributes throughout (opengraph-image.tsx, work-grid.tsx,
// etc.), which render as HTML `style="..."` attributes and are gated by
// style-src the same as `<style>` tags. Hashing/noncing 50+ call sites
// individually isn't practical here.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: CSP },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  },
]

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.torquemade.com' },
      { protocol: 'https', hostname: 'www.spicybeautybyt.com' },
      { protocol: 'https', hostname: 'spicybeautybyt.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      // Apex → www, path preserved. The site canonicalizes on the www host
      // (see lib/site.ts), so the apex must not serve a 200.
      //
      // NOTE: as of this commit the apex answers 307 (temporary), which comes
      // from Vercel's *domain-level* redirect in Project Settings → Domains.
      // That runs at the edge, before the request reaches this app, so it
      // takes precedence over the rule below and the rule alone will not
      // change the observed status code. Either set that domain redirect to
      // 308, or remove it so apex requests fall through to this rule. No loop
      // risk in the meantime: the rule only matches the apex host.
      //
      // `statusCode: 301` rather than `permanent: true` (which emits 308)
      // purely because 301 is the status the redirect was specified as.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'torquemade.com' }],
        destination: `${SITE_URL}/:path*`,
        statusCode: 301,
      },
      {
        source: '/blog/preuves-litige-paiement-poisson-vivant',
        destination: '/blog/litige-poisson-mort-doa',
        permanent: true,
      },
      {
        source: '/blog/prouver-poisson-arrive-vivant-retrofacturation',
        destination: '/blog/litige-poisson-mort-doa',
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX({})
export default withMDX(nextConfig)
