'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'
import { useScrollReveal } from '@/lib/use-scroll-reveal'
import type { Post } from '@/lib/blog'

export function FeaturedPosts({ posts }: { posts: Post[] }) {
  const lang = useLang()
  const t = strings[lang].blog
  useScrollReveal()

  if (posts.length === 0) return null

  return (
    <div className="mb-16">
      {/* Section label */}
      <p
        className="mb-6 font-mono text-[10px] uppercase tracking-widest"
        style={{ color: 'hsl(var(--text-tertiary))' }}
      >
        {t.featuredTitle}
      </p>

      {/* Grid */}
      <div
        className="grid grid-cols-1 gap-px md:grid-cols-3"
        style={{ background: 'hsl(var(--border-subtle))' }}
      >
        {posts.map((post, index) => (
          <FeaturedCard key={post.slug} post={post} readLabel={t.featuredRead} lang={lang} index={index} />
        ))}
      </div>
    </div>
  )
}

function FeaturedCard({
  post,
  readLabel,
  lang,
  index,
}: {
  post: Post
  readLabel: string
  lang: 'fr' | 'en'
  index: number
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block p-8 transition-colors duration-200 hover:bg-black hover:text-white fade-up stagger-up"
      style={{ background: 'hsl(var(--bg-primary))', '--stagger-i': index } as CSSProperties}
    >
      {/* Meta row */}
      <div className="mb-8 flex items-center justify-between">
        <span
          className="font-mono text-[10px] uppercase tracking-widest opacity-40 transition-opacity group-hover:opacity-60"
          style={{ color: 'hsl(var(--text-primary))' }}
        >
          {post.category}
        </span>
        <span
          className="font-mono text-[10px] opacity-30 transition-opacity group-hover:opacity-50"
          style={{ color: 'hsl(var(--text-primary))' }}
        >
          {post.date[lang]}
        </span>
      </div>

      {/* Title */}
      <h3
        className="mb-4 text-lg font-bold leading-snug"
        style={{ color: 'hsl(var(--text-primary))' }}
      >
        {post.title[lang]}
      </h3>

      {/* Description */}
      <p
        className="mb-8 text-sm leading-relaxed opacity-50 transition-opacity group-hover:opacity-70"
        style={{ color: 'hsl(var(--text-secondary))' }}
      >
        {post.description[lang]}
      </p>

      {/* Read link */}
      <span
        className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest opacity-40 transition-all duration-150 group-hover:opacity-100"
        style={{ color: 'hsl(var(--text-primary))' }}
      >
        {readLabel}
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          &rarr;
        </span>
      </span>
    </Link>
  )
}
