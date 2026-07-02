import { NextRequest, NextResponse } from 'next/server'

/**
 * Query-string canonicalization middleware.
 *
 * ÉTAPE 1 — Whitelist meaningful params (page, sort, filter), drop everything
 *           else, sort the survivors alphabetically for a single canonical URL.
 * ÉTAPE 2 — Strip tracking params (UTM, click ids). These are a subset of the
 *           non-whitelisted params above, but we enumerate them so intent is
 *           explicit and easy to audit.
 *
 * When canonicalization changes the query string we issue a 301 (permanent)
 * redirect so crawlers consolidate ranking signals onto the clean URL.
 */

// ÉTAPE 1 — only these params survive canonicalization
const WHITELIST = new Set(['page', 'sort', 'filter'])

// ÉTAPE 2 — tracking params we explicitly strip (documented for audits)
const TRACKING_PARAMS = new Set([
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'gclid',
  'fbclid',
  'msclkid',
  'mc_cid',
  'mc_eid',
  'ref',
])

/**
 * Crawler detection — ordered patterns matched against the User-Agent.
 * ÉTAPE 1 — Googlebot. ÉTAPE 2 — AhrefsBot, SemrushBot.
 * Patterns are case-insensitive and anchored on the bot token; order only
 * matters when a UA could match several (first match wins).
 */
const CRAWLER_PATTERNS: ReadonlyArray<{ name: string; test: RegExp }> = [
  { name: 'Googlebot', test: /Googlebot/i },
  { name: 'AhrefsBot', test: /AhrefsBot/i },
  { name: 'SemrushBot', test: /SemrushBot/i },
]

function detectCrawler(userAgent: string | null): string | null {
  if (!userAgent) return null
  for (const { name, test } of CRAWLER_PATTERNS) {
    if (test.test(userAgent)) return name
  }
  return null
}

export function middleware(request: NextRequest) {
  const { nextUrl } = request
  const original = nextUrl.searchParams

  // Crawler detection runs on every request. We forward the result as request
  // headers (readable by Server Components via next/headers `headers()`), and
  // mirror it onto the response so the signal is observable at the edge / via
  // curl. Detection is a header-only side effect: it never blocks or rewrites.
  const crawlerName = detectCrawler(request.headers.get('user-agent'))
  const requestHeaders = new Headers(request.headers)
  if (crawlerName) {
    requestHeaders.set('x-is-crawler', 'true')
    requestHeaders.set('x-crawler-name', crawlerName)
  }

  const passThrough = () => {
    const response = NextResponse.next({ request: { headers: requestHeaders } })
    if (crawlerName) {
      response.headers.set('x-is-crawler', 'true')
      response.headers.set('x-crawler-name', crawlerName)
    }
    return response
  }

  // Nothing to canonicalize — fast path.
  if (original.toString() === '') {
    return passThrough()
  }

  // Build the canonical param set: keep whitelisted keys only, sorted, with
  // stable value ordering. TRACKING_PARAMS are removed here implicitly (they
  // are never whitelisted) — enumerated above only for documentation/audit.
  const canonical = new URLSearchParams()
  const keys = Array.from(new Set(original.keys()))
    .filter((key) => WHITELIST.has(key))
    .sort()

  for (const key of keys) {
    for (const value of original.getAll(key).sort()) {
      canonical.append(key, value)
    }
  }

  // No change → let the request through untouched.
  if (canonical.toString() === original.toString()) {
    return passThrough()
  }

  const url = nextUrl.clone()
  url.search = canonical.toString()
  return NextResponse.redirect(url, 301)
}

export const config = {
  // Run on real pages only. Exclude API routes (the OG image route relies on
  // ?title=&category= query params), Next internals, and static assets.
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images).*)',
  ],
}
