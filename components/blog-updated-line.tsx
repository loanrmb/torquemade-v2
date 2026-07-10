'use client'

import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'
import { posts } from '@/lib/blog'

/**
 * "Dernière mise à jour / Last updated" freshness line for blog articles.
 * Renders nothing unless the post has an `updatedAt` (ISO 8601) in lib/blog.ts.
 * Dates are formatted from the single ISO source of truth (UTC, so the
 * displayed day never shifts with the visitor's timezone).
 */
export function BlogUpdatedLine({ slug }: { slug: string }) {
  const lang = useLang()
  const post = posts.find((p) => p.slug === slug)
  if (!post?.updatedAt) return null

  const formatted = new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(post.updatedAt))

  return (
    <p className="blog-article-updated">
      {strings[lang].blog.updatedLabel} {formatted}
    </p>
  )
}
