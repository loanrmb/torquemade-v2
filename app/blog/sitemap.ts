import { MetadataRoute } from 'next'
import { posts } from '@/lib/blog'
import { SITE_URL as baseUrl } from '@/lib/site'

/**
 * Blog sitemap → /blog/sitemap.xml
 *
 * Blog index + every article. lastModified uses the machine-readable
 * updatedAt when present, otherwise publishedAt (ISO 8601). Referenced by
 * the sitemap index at /sitemap_index.xml.
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
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: 'daily',
    priority: 0.7,
  }))

  return [...blogIndex, ...blogPages]
}
