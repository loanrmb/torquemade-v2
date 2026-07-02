import { posts } from './blog'

/**
 * Topic clusters map a stable cluster id to the blog category (or categories)
 * it groups. Articles are flat routes (`/blog/<slug>`), so revalidating a
 * cluster revalidates every article path in that topic plus the `/blog` index.
 */
export const TOPIC_CLUSTERS = {
  'erp-sync': ['ERP & Gestion de stock'],
  crm: ['crm'],
  seo: ['SEO & Contenu'],
} as const

export type ClusterId = keyof typeof TOPIC_CLUSTERS

/**
 * Returns the list of paths belonging to a cluster: the `/blog` index followed
 * by every `/blog/<slug>` whose category is part of the cluster. Pure — no side
 * effects — so it can be unit tested without a Next.js request context.
 */
export function getClusterPaths(cluster: ClusterId): string[] {
  const categories = TOPIC_CLUSTERS[cluster] as readonly string[]
  const articlePaths = posts
    .filter((post) => categories.includes(post.category))
    .map((post) => `/blog/${post.slug}`)

  return ['/blog', ...articlePaths]
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
