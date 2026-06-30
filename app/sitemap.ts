import { MetadataRoute } from 'next'
import { posts } from '@/lib/blog'

const baseUrl = 'https://www.torquemade.com'

// Post dates in lib/blog.ts are localized display strings (e.g. "June 2026"),
// not ISO dates. Parse the English form where possible; fall back to build
// time when the string can't be parsed (e.g. French-only month names).
function postLastModified(enDate: string): Date {
  const parsed = new Date(enDate)
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed
}

export default function sitemap(): MetadataRoute.Sitemap {
  const homepage: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = [
    'web-dev',
    'crm',
    'erp-ecommerce',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
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

  const projectSlugs = [
    'sprint-motors',
    'motopassion-65',
    'cyclone-bordeaux',
    'voge-bordeaux',
    'orcal-bordeaux',
    'bordeaux-ride',
    'spicy-beauty',
  ]

  const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: postLastModified(post.date.en),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [
    ...homepage,
    ...servicePages,
    ...blogIndex,
    ...otherStaticPages,
    ...projectPages,
    ...blogPages,
  ]
}
