import { posts } from './blog'

/**
 * Topic clusters map a stable cluster id to the blog categories it groups and
 * the static (non-article) routes that surface those articles — chiefly the
 * matching service page. Articles are flat routes (`/blog/<slug>`), so
 * revalidating a cluster revalidates every article path in that topic, the
 * `/blog` index, and the cluster's static pages.
 */
export const TOPIC_CLUSTERS = {
  'erp-sync': {
    categories: ['ERP & Gestion de stock'],
    staticPaths: ['/services/erp-ecommerce'],
  },
  crm: {
    categories: ['crm'],
    staticPaths: ['/services/crm'],
  },
  seo: {
    categories: ['SEO & Contenu'],
    staticPaths: [],
  },
} as const

export type ClusterId = keyof typeof TOPIC_CLUSTERS

/**
 * Returns the list of paths belonging to a cluster: the `/blog` index, the
 * cluster's static pages, then every `/blog/<slug>` whose category is part of
 * the cluster. Pure — no side effects — so it can be unit tested without a
 * Next.js request context.
 */
export function getClusterPaths(cluster: ClusterId): string[] {
  const { categories, staticPaths } = TOPIC_CLUSTERS[cluster]
  const cats = categories as readonly string[]
  const articlePaths = posts
    .filter((post) => cats.includes(post.category))
    .map((post) => `/blog/${post.slug}`)

  return ['/blog', ...staticPaths, ...articlePaths]
}

/**
 * Revalidates every path in the given topic cluster. Returns the paths that
 * were revalidated. `next/cache` is imported lazily so `getClusterPaths` and
 * `TOPIC_CLUSTERS` stay importable outside a server runtime.
 */
export async function revalidateCluster(cluster: ClusterId): Promise<string[]> {
  const { revalidatePath } = await import('next/cache')
  const paths = getClusterPaths(cluster)

  for (const path of paths) {
    revalidatePath(path)
  }

  return paths
}
