import { MetadataRoute } from 'next'
import { SITE_URL as baseUrl } from '@/lib/site'

/**
 * Dynamic robots.txt (Next.js Metadata Route).
 *
 * robots.txt is a single canonical document: every crawler reads the
 * User-agent block that matches its own token. We therefore emit one file
 * with multiple rule groups rather than sniffing the request User-Agent and
 * serving different bodies (that would be cloaking-adjacent and fragile).
 *
 * ÉTAPE 1 — Googlebot: aggressive crawl, full access (minus /admin).
 * ÉTAPE 2 — AhrefsBot / SemrushBot: Disallow all (keep SEO scrapers out).
 * ÉTAPE 3 — Everyone else: default allow (minus /admin), strip UTM-tagged URLs.
 */


export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ÉTAPE 1 — Googlebot: aggressive crawl rules
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: '/admin',
      },
      // ÉTAPE 2 — SEO scrapers: full block
      {
        userAgent: ['AhrefsBot', 'SemrushBot'],
        disallow: '/',
      },
      // ÉTAPE 3 — Default policy for all other crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/*?*utm_'],
      },
    ],
    sitemap: `${baseUrl}/sitemap_index.xml`,
    host: baseUrl,
  }
}
