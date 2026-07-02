import { MetadataRoute } from 'next'

const baseUrl = 'https://www.torquemade.com'

/**
 * Services sitemap → /services/sitemap.xml
 *
 * The three service offerings. Referenced by the sitemap index
 * at /sitemap_index.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return ['web-dev', 'crm', 'erp-ecommerce'].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))
}
