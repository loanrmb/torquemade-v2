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

export function middleware(request: NextRequest) {
  const { nextUrl } = request
  const original = nextUrl.searchParams

  // Nothing to canonicalize — fast path.
  if (original.toString() === '') {
    return NextResponse.next()
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
    return NextResponse.next()
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
