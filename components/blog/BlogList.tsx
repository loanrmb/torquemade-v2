'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { posts } from '@/lib/blog'

const ALL = 'Tous'

export function BlogList() {
  const categories = [ALL, ...Array.from(new Set(posts.map((p) => p.category)))]
  const [active, setActive] = useState(ALL)
  const listRef = useRef<HTMLDivElement>(null)

  function handleFilter(cat: string) {
    setActive(cat)
    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const filtered = active === ALL ? posts : posts.filter((p) => p.category === active)

  return (
    <section className="px-6 pb-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">

        {/* ── FILTRES — pill flottant sticky (desktop + mobile) ── */}
        <div className="sticky top-20 z-40 mb-16 flex justify-center">
          <div
            className="inline-flex items-center gap-1 rounded-full border px-2 py-1.5"
            style={{
              background: 'rgba(var(--nav-bg-raw, 255 255 255), 0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderColor: 'hsl(var(--border-subtle))',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            }}
          >
            {categories.map((cat) => {
              const count = cat === ALL ? posts.length : posts.filter((p) => p.category === cat).length
              return (
                <button
                  key={cat}
                  onClick={() => handleFilter(cat)}
                  className="flex items-center gap-1.5 rounded-full px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-all duration-150 whitespace-nowrap"
                  style={{
                    background: active === cat ? 'hsl(var(--bg-inverse))' : 'transparent',
                    color: active === cat ? 'hsl(var(--text-inverse))' : 'hsl(var(--text-tertiary))',
                  }}
                >
                  {cat}
                  <span style={{ opacity: 0.5 }}>{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ── LISTE D'ARTICLES ── */}
        <div ref={listRef} style={{ borderTop: '1px solid hsl(var(--border-subtle))' }}>
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
