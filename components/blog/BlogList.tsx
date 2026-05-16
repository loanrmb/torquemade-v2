'use client'

import { useState } from 'react'
import Link from 'next/link'
import { posts } from '@/lib/blog'

const ALL = 'Tous'

export function BlogList() {
  const categories = [ALL, ...Array.from(new Set(posts.map((p) => p.category)))]
  const [active, setActive] = useState(ALL)

  const filtered = active === ALL ? posts : posts.filter((p) => p.category === active)

  return (
    <section className="px-6 pb-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => {
            const count = cat === ALL ? posts.length : posts.filter((p) => p.category === cat).length
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors duration-150"
                style={{
                  background: active === cat ? 'hsl(var(--bg-inverse))' : 'transparent',
                  color: active === cat ? 'hsl(var(--text-inverse))' : 'hsl(var(--text-tertiary))',
                  borderColor: active === cat ? 'hsl(var(--bg-inverse))' : 'hsl(var(--border-subtle))',
                }}
              >
                {cat}
                <span className="opacity-50">{count}</span>
              </button>
            )
          })}
        </div>

        {/* Liste d'articles */}
        <div style={{ borderTop: '1px solid hsl(var(--border-subtle))' }}>
          {filtered.length === 0 && (
            <p className="py-20 text-center font-mono text-sm opacity-40">
              Aucun article dans cette catégorie.
            </p>
          )}
          {filtered.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex gap-8 py-10 px-4 -mx-4 transition-colors duration-150 rounded-sm"
              style={{ borderBottom: '1px solid hsl(var(--border-subtle))' }}
            >
              {/* Gauche : numéro + date + catégorie */}
              <div className="w-32 flex-shrink-0">
                <p className="font-mono text-3xl font-bold mb-3 opacity-15" style={{ color: 'hsl(var(--text-primary))' }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-3">
                  {post.date}
                </p>
                <span
                  className="inline-block font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 border"
                  style={{ borderColor: 'hsl(var(--border-subtle))', color: 'hsl(var(--text-tertiary))' }}
                >
                  {post.category.split(' & ')[0]}
                </span>
              </div>

              {/* Droite : titre + description + lien */}
              <div className="flex-1 min-w-0">
                <h2
                  className="text-xl font-bold leading-snug mb-3 transition-opacity duration-150 group-hover:opacity-60"
                  style={{ color: 'hsl(var(--text-primary))' }}
                >
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed mb-5 max-w-xl opacity-50">
                  {post.description}
                </p>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest opacity-40 transition-all duration-150 group-hover:opacity-100">
                  Lire l&apos;article
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
