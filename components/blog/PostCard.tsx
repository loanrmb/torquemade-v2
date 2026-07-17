'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { useLang } from '@/components/app-provider'
import type { Post } from '@/lib/blog'

export function PostCard({
  post,
  activeFilter,
  index = 0,
}: {
  post: Post
  activeFilter?: string
  index?: number
}) {
  const lang = useLang()
  const href = activeFilter
    ? `/blog/${post.slug}?from=${encodeURIComponent(activeFilter)}`
    : `/blog/${post.slug}`

  return (
    <Link
      href={href}
      className="group block bg-white p-8 transition-colors duration-200 hover:bg-black hover:text-white fade-up stagger-up"
      style={{ '--stagger-i': index } as CSSProperties}
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 transition-opacity group-hover:opacity-60">
          {post.category}
        </span>
        <span className="font-mono text-[10px] opacity-30 transition-opacity group-hover:opacity-50">
          {post.date[lang]}
        </span>
      </div>
      <h2 className="mb-4 text-lg font-bold leading-snug">
        {post.title[lang]}
      </h2>
      <p className="mb-8 text-sm leading-relaxed opacity-50 transition-opacity group-hover:opacity-70">
        {post.description[lang]}
      </p>
      <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
        {lang === 'fr' ? "Lire l'article" : 'Read article'}
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  )
}
