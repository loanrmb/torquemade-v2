import { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'

const baseUrl = 'https://www.torquemade.com'

/**
 * Root sitemap → /sitemap.xml
 *
 * Homepage + static pages + portfolio projects.
 * Blog and services live in their own segment sitemaps
 * (app/blog/sitemap.ts, app/services/sitemap.ts) and are stitched
 * together by the sitemap index at /sitemap_index.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const homepage: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]

  const otherStaticPages: MetadataRoute.Sitemap = [
    'work',
    'about',
    'contact',
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...homepage, ...otherStaticPages, ...projectPages]
}
