import { headers } from 'next/headers'

/**
 * OPTIONAL crawler-conditional JSON-LD.
 *
 * Renders an Organization schema block ONLY when `middleware.ts` has flagged
 * the request as a crawler (`x-is-crawler: true`). It is intentionally NOT
 * wired into any layout by default: serving structured data conditionally on
 * User-Agent is UA-based differentiation, which Google's guidelines discourage.
 *
 * If you opt in, prefer rendering this for everyone (drop the header check) so
 * the markup is not crawler-only. Kept here as a building block per request.
 *
 * Usage (server component / layout):
 *   import { CrawlerSchema } from '@/components/crawler-schema'
 *   ...
 *   <CrawlerSchema />
 */
export async function CrawlerSchema() {
  const headerList = await headers()
  if (headerList.get('x-is-crawler') !== 'true') return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Torquemade',
    url: 'https://torquemade.com',
    description:
      'Agence web spécialisée en Next.js, CRM sur mesure et synchronisation ERP↔ecommerce.',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
