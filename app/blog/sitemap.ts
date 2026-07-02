import { MetadataRoute } from 'next'
import { posts } from '@/lib/blog'

const baseUrl = 'https://www.torquemade.com'

/**
 * Blog sitemap → /blog/sitemap.xml
 *
 * Blog index + every article. lastModified uses the machine-readable
 * publishedAt (ISO 8601). Referenced by the sitemap index at
 * /sitemap_index.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'daily',
    priority: 0.7,
  }))

  return [...blogIndex, ...blogPages]
}
