const baseUrl = 'https://www.torquemade.com'

/**
 * Sitemap index → /sitemap_index.xml
 *
 * Next.js does not auto-generate an index for route-segment sitemaps,
 * so we emit a <sitemapindex> by hand. It stitches together the three
 * child sitemaps:
 *   - /sitemap.xml           (homepage + static + projects)
 *   - /services/sitemap.xml  (service offerings)
 *   - /blog/sitemap.xml      (blog index + articles)
 *
 * robots.txt points crawlers here.
 */
const sitemaps = [
  `${baseUrl}/sitemap.xml`,
  `${baseUrl}/services/sitemap.xml`,
  `${baseUrl}/blog/sitemap.xml`,
]

export function GET() {
  const lastmod = new Date().toISOString()

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map((loc) => `  <sitemap>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>`)
  .join('\n')}
</sitemapindex>`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
