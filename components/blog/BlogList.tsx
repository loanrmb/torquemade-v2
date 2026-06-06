'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useLang } from '@/components/app-provider'
import { posts } from '@/lib/blog'
import { FeaturedPosts } from '@/components/blog/FeaturedPosts'

const LABELS = {
  fr: {
    all: 'Tous',
    read: "Lire l'article",
    empty: 'Aucun article ne correspond à votre recherche.',
    searchPlaceholder: 'Rechercher…',
    searchAria: 'Rechercher',
    clearAria: 'Effacer',
  },
  en: {
    all: 'All',
    read: 'Read article',
    empty: 'No articles match your search.',
    searchPlaceholder: 'Search…',
    searchAria: 'Search',
    clearAria: 'Clear',
  },
}

// Display labels for filter pills (raw category key → bilingual label).
// Keys MUST match the exact category string used in lib/blog.ts — matching
// logic still relies on the raw key, only the displayed text is translated.
const CATEGORY_LABELS: Record<string, { fr: string; en: string }> = {
  'ERP & Gestion de stock': {
    fr: 'Connexion Stock > Site',
    en: 'Stock > Site Connection',
  },
  'SEO & Contenu': {
    fr: 'SEO & Contenu',
    en: 'SEO & Content',
  },
  'Web & Développement': {
    fr: 'Web & Développement',
    en: 'Web & Development',
  },
  crm: {
    fr: 'crm',
    en: 'crm',
  },
  projets: {
    fr: 'projets',
    en: 'projects',
  },
}

export function BlogList() {
  const lang = useLang()
  const t = LABELS[lang]
  const ALL = t.all

  const CATEGORY_ORDER = [
    'SEO & Contenu',
    'ERP & Gestion de stock',
    'crm',
    'Web & Développement',
    'projets',
  ]

  const allCategories = Array.from(new Set(posts.map((p) => p.category)))
  const categories = [
    ALL,
    ...CATEGORY_ORDER.filter((c) => allCategories.includes(c)),
    ...allCategories.filter((c) => !CATEGORY_ORDER.includes(c)),
  ]
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeKey = searchParams.get('cat') ?? 'all'
  const listRef = useRef<HTMLDivElement>(null)

  const [search, setSearch] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)

  function handleFilter(key: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (key === 'all') {
      params.delete('cat')
    } else {
      params.set('cat', key)
    }
    router.push(`/blog?${params.toString()}`, { scroll: false })
    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const featuredPosts = posts.filter((p) => p.featured)
  const isSearching = search.trim().length > 0

  const filtered = posts
    .filter((p) => {
      if (activeKey === 'all') {
        // Include featured posts only when searching, otherwise they're shown
        // in the FeaturedPosts section above and would be duplicated below.
        return isSearching || !p.featured
      }
      return p.category === activeKey
    })
    .filter((p) => {
      if (!isSearching) return true
      const q = search.toLowerCase()
      return (
        p.title[lang].toLowerCase().includes(q) ||
        p.description[lang].toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
    })

  return (
    <section className="px-6 pb-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">

        {/* ── À LA UNE — visible uniquement sur "Tous", hors recherche ── */}
        {activeKey === 'all' && !isSearching && <FeaturedPosts posts={featuredPosts} />}

        {/* ── FILTRES — pill sticky liquid glass ── */}
        <div className="sticky top-20 z-40 mb-16">
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 md:flex md:justify-center scrollbar-hide">
            <div
              className="inline-flex items-center gap-1 rounded-full px-2 py-1.5 flex-shrink-0"
              style={{
                background: 'rgba(var(--nav-bg-raw, 255 255 255), 0.72)',
                backdropFilter: 'blur(20px) saturate(150%)',
                WebkitBackdropFilter: 'blur(20px) saturate(150%)',
                border: '1px solid rgba(var(--nav-bg-raw, 255 255 255), 0.25)',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.5) inset',
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
                    className="flex items-center gap-1.5 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-all duration-150 whitespace-nowrap"
                    style={{
                      background: isActive ? 'hsl(var(--bg-inverse))' : 'transparent',
                      color: isActive ? 'hsl(var(--bg-primary))' : 'hsl(var(--text-primary))',
                      opacity: isActive ? 1 : 0.6,
                    }}
                  >
                    {CATEGORY_LABELS[cat]?.[lang] ?? cat}
                    <span style={{ opacity: 0.5 }}>{count}</span>
                  </button>
                )
              })}

              {/* Séparateur vertical */}
              <div
                className="h-4 w-px mx-1 shrink-0"
                style={{ background: 'hsl(var(--border-subtle))' }}
              />

              {/* Zone recherche */}
              <div className="flex items-center relative">

                {/* Bouton loupe */}
                <button
                  onClick={() => {
                    setSearchOpen((prev) => {
                      if (prev) setSearch('')
                      setTimeout(() => {
                        if (!prev) searchInputRef.current?.focus()
                      }, 50)
                      return !prev
                    })
                  }}
                  aria-label={t.searchAria}
                  className="p-1.5 rounded-full transition-colors"
                  style={{ color: 'hsl(var(--text-secondary))' }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>

                {/* Input animé — s'ouvre vers la droite */}
                <div
                  style={{
                    width: searchOpen ? '160px' : '0px',
                    opacity: searchOpen ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'width 250ms ease, opacity 200ms ease',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={t.searchPlaceholder}
                    className="w-full text-sm outline-none bg-transparent px-2"
                    style={{ color: 'hsl(var(--text-primary))' }}
                  />
                </div>

                {/* Bouton clear */}
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="p-1 rounded-full shrink-0 transition-colors"
                    style={{ color: 'hsl(var(--text-secondary))' }}
                    aria-label={t.clearAria}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── LISTE D'ARTICLES ── */}
        <div ref={listRef} style={{ borderTop: '1px solid hsl(var(--border-subtle))' }}>
          {filtered.length === 0 && (
            <p
              className="text-center py-16 text-sm"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {t.empty}
            </p>
          )}
          {filtered.map((post, i) => (
            <Link
              key={post.slug}
              href={
                activeKey !== 'all'
                  ? `/blog/${post.slug}?from=${encodeURIComponent(activeKey)}`
                  : `/blog/${post.slug}`
              }
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
