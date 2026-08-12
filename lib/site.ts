/**
 * Single source of truth for the site's canonical origin.
 *
 * The host was previously written out by hand in ~15 places, and had drifted:
 * the sitemaps, robots.txt and every per-page canonical used the `www` host,
 * while `metadataBase` and the homepage `og:url` used the bare apex. Two hosts
 * describing one site is an entity-resolution ambiguity — search and generative
 * engines have to guess which origin owns the content.
 *
 * `www` won because it was already the majority, so unifying on it changed the
 * fewest published URLs.
 *
 * Import this constant instead of writing a URL literal — this file is meant to
 * be the only place in the codebase where the origin appears spelled out.
 */
export const SITE_URL = 'https://www.torquemade.com'

/**
 * Absolute URL for a site-relative path. Accepts paths with or without the
 * leading slash; `siteUrl()` returns the origin itself (no trailing slash),
 * which is what the homepage canonical and the sitemap's root entry need.
 */
export function siteUrl(path = ''): string {
  if (!path || path === '/') return SITE_URL
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
