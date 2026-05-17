'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { useLang } from '@/components/app-provider'
import { posts } from '@/lib/blog'

const LABELS = {
  fr: {
    all: 'Tous',
    read: "Lire l'article",
    empty: 'Aucun article dans cette catégorie.',
  },
  en: {
    all: 'All',
    read: 'Read article',
    empty: 'No articles in this category.',
  },
}

const LIQUID_GLASS_KEYFRAMES = `
  @keyframes liquidShift {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`

export function BlogList() {
  const lang = useLang()
  const t = LABELS[lang]
  const ALL = t.all

  const categories = [ALL, ...Array.from(new Set(posts.map((p) => p.category)))]
  const [activeKey, setActiveKey] = useState<string>('all')
  const listRef = useRef<HTMLDivElement>(null)

  function handleFilter(key: string) {
    setActiveKey(key)
    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const filtered =
    activeKey === 'all' ? posts : posts.filter((p) => p.category === activeKey)

  return (
    <section className="px-6 pb-24 md:px-12 lg:px-24">
      <style>{LIQUID_GLASS_KEYFRAMES}</style>
      <div className="mx-auto max-w-4xl">

        {/* ── FILTRES — pill sticky liquid glass ── */}
        <div className="sticky top-20 z-40 mb-16">
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 md:flex md:justify-center scrollbar-hide">
            <div
              className="inline-flex items-center gap-1 rounded-full px-2 py-1.5 flex-shrink-0"
              style={{
                /* Gradient plus saturé pour lisibilité sur fond blanc */
                background: 'linear-gradient(-45deg, rgba(140,60,255,0.72), rgba(60,130,255,0.68), rgba(255,100,60,0.62), rgba(230,50,170,0.68), rgba(40,200,255,0.65), rgba(140,60,255,0.72))',
                backgroundSize: '400% 400%',
                animation: 'liquidShift 8s ease infinite',
                /* Verre */
                backdropFilter: 'blur(20px) saturate(160%)',
                WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                /* Bordure */
                border: '1px solid rgba(255,255,255,0.5)',
                /* Ombres */
                boxShadow: '0 4px 28px rgba(120,60,255,0.25), 0 1.5px 0 rgba(255,255,255,0.25) inset, 0 -1px 0 rgba(0,0,0,0.1) inset',
              }}
            >
              {categories.map((cat) => {
                const key = cat === ALL ? 'all' : cat
                const isActive = activeKey === key
                const count =
                  cat === ALL
                    ? posts.length
                    : posts.filter((p) => p.category === cat).length
                return (
                  <button
                    key={key}
                    onClick={() => handleFilter(key)}
                    className="flex items-center gap-1.5 rounded-full px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-all duration-200 whitespace-nowrap"
                    style={{
                      background: isActive
                        ? 'rgba(255,255,255,0.32)'
                        : 'transparent',
                      /* Texte blanc sur gradient sombre = bonne lisibilité */
                      color: isActive
                        ? 'rgba(255,255,255,1)'
                        : 'rgba(255,255,255,0.88)',
                      fontWeight: isActive ? '600' : '500',
                      boxShadow: isActive
                        ? '0 1px 6px rgba(0,0,0,0.15), 0 1px 0 rgba(255,255,255,0.25) inset'
                        : 'none',
                      textShadow: '0 1px 3px rgba(0,0,0,0.25)',
                    }}
                  >
                    {cat}
                    <span style={{ opacity: 0.7 }}>{count}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── LISTE D'ARTICLES ── */}
        <div ref={listRef} style={{ borderTop: '1px solid hsl(var(--border-subtle))' }}>
          {filtered.length === 0 && (
            <p className="py-20 text-center font-mono text-sm opacity-40">
              {t.empty}
            </p>
          )}
          {filtered.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex gap-4 sm:gap-8 py-8 sm:py-10 px-4 -mx-4 transition-colors duration-150 rounded-sm"
              style={{ borderBottom: '1px solid hsl(var(--border-subtle))' }}
            >
              {/* Gauche : numéro + date + catégorie */}
              <div className="w-24 sm:w-32 flex-shrink-0">
                <p
                  className="font-mono text-2xl sm:text-3xl font-bold mb-2 opacity-15"
                  style={{ color: 'hsl(var(--text-primary))' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-2">
                  {post.date[lang]}
                </p>
                <span
                  className="inline-block font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 border"
                  style={{
                    borderColor: 'hsl(var(--border-subtle))',
                    color: 'hsl(var(--text-tertiary))',
                  }}
                >
                  {post.category.split(' & ')[0]}
                </span>
              </div>

              {/* Droite : titre + description + lien */}
              <div className="flex-1 min-w-0">
                <h2
                  className="text-lg sm:text-xl font-bold leading-snug mb-3 transition-opacity duration-150 group-hover:opacity-60"
                  style={{ color: 'hsl(var(--text-primary))' }}
                >
                  {post.title[lang]}
                </h2>
                <p className="text-sm leading-relaxed mb-5 max-w-xl opacity-50">
                  {post.description[lang]}
                </p>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest opacity-40 transition-all duration-150 group-hover:opacity-100">
                  {t.read}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
