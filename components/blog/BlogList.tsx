'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'
import { posts } from '@/lib/blog'
import { FeaturedPosts } from '@/components/blog/FeaturedPosts'
import { ScrollRevealGroup } from '@/lib/use-scroll-reveal'

const LABELS = {
  fr: {
    all: 'Tous',
    read: "Lire l'article",
    searchPlaceholder: 'Rechercher…',
    searchAria: 'Rechercher',
    clearAria: 'Effacer',
    newest: 'Plus récent',
    oldest: 'Plus ancien',
  },
  en: {
    all: 'All',
    read: 'Read article',
    searchPlaceholder: 'Search…',
    searchAria: 'Search',
    clearAria: 'Clear',
    newest: 'Newest',
    oldest: 'Oldest',
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

const CATEGORY_ORDER = [
  'SEO & Contenu',
  'ERP & Gestion de stock',
  'crm',
  'Web & Développement',
  'projets',
]

const SEARCH_DEBOUNCE_MS = 300
const PAGE_SIZE = 15

// Case- and accent-insensitive comparison key: strip diacritics via NFD so
// "esthéticienne" matches "estheticienne".
function normalize(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

export function BlogList() {
  const lang = useLang()
  const t = LABELS[lang]
  const tBlog = strings[lang].blog
  const ALL = t.all

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  // Lets the debounce timeout read the freshest searchParams (e.g. an
  // in-flight category change) without re-arming the timer on every render.
  const searchParamsRef = useRef(searchParams)
  searchParamsRef.current = searchParams

  const activeKey = searchParams.get('cat') ?? 'all'
  const urlQuery = searchParams.get('q') ?? ''
  // 'oldest' = ascending by publishedAt; default (no param) = newest first.
  const sortOrder = searchParams.get('sort') === 'oldest' ? 'oldest' : 'newest'
  const isSearching = urlQuery.trim().length > 0
  const requestedPage = Number(searchParams.get('page'))
  const requestedPageValid = Number.isInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1

  const filterBarRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Local, controlled value for typing responsiveness — the URL (urlQuery)
  // is what actually drives filtering, synced from this with a debounce.
  const [inputValue, setInputValue] = useState(urlQuery)

  // "À la une" only exists as a separate block on desktop (md:) — on mobile
  // it's removed entirely and its posts fold into the single list instead.
  // Drives whether featured posts get excluded from the list below, so
  // pagination math stays correct on both breakpoints.
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const sync = () => setIsDesktop(mq.matches)
    sync()
    // Both listeners re-read mq.matches on fire — belt and suspenders across
    // browsers/emulators where the MediaQueryList 'change' event alone can be
    // unreliable (e.g. some devtools viewport overrides).
    mq.addEventListener('change', sync)
    window.addEventListener('resize', sync)
    return () => {
      mq.removeEventListener('change', sync)
      window.removeEventListener('resize', sync)
    }
  }, [])

  // Reconcile the input with the URL when it changes from outside typing:
  // back/forward navigation, a direct link with ?q=, or our own debounced
  // commit landing.
  useEffect(() => {
    setInputValue(urlQuery)
  }, [urlQuery])

  useEffect(() => {
    if (inputValue === urlQuery) return
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParamsRef.current.toString())
      if (inputValue.trim()) {
        params.set('q', inputValue)
      } else {
        params.delete('q')
      }
      params.delete('page')
      router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    }, SEARCH_DEBOUNCE_MS)
    return () => clearTimeout(timer)
  }, [inputValue, urlQuery, pathname, router])

  // Scroll the filter/sort bar to its sticky resting spot (top-24 = 96px)
  // rather than the list top, which would slide the first articles behind
  // the sticky bar. Fixed offset → consistent across viewport heights.
  const STICKY_OFFSET = 96
  function scrollToFilterBar() {
    const bar = filterBarRef.current
    if (!bar) return
    const top = bar.getBoundingClientRect().top + window.scrollY - STICKY_OFFSET
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
  }

  function handleFilter(key: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (key === 'all') {
      params.delete('cat')
    } else {
      params.set('cat', key)
    }
    params.delete('page')
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    scrollToFilterBar()
  }

  function handleSort(order: 'newest' | 'oldest') {
    const params = new URLSearchParams(searchParams.toString())
    if (order === 'newest') {
      // Newest is the default — keep the URL clean (matches middleware canon).
      params.delete('sort')
    } else {
      params.set('sort', 'oldest')
    }
    params.delete('page')
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    scrollToFilterBar()
  }

  function handleClear() {
    setInputValue('')
    const params = new URLSearchParams(searchParams.toString())
    params.delete('q')
    params.delete('page')
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    searchInputRef.current?.focus()
  }

  function handleReset() {
    setInputValue('')
    router.replace(pathname, { scroll: false })
  }

  function handlePageChange(page: number) {
    const params = new URLSearchParams(searchParams.toString())
    if (page <= 1) {
      params.delete('page')
    } else {
      params.set('page', String(page))
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    scrollToFilterBar()
  }

  const allCategories = Array.from(new Set(posts.map((p) => p.category)))
  const categories = [
    ALL,
    ...CATEGORY_ORDER.filter((c) => allCategories.includes(c)),
    ...allCategories.filter((c) => !CATEGORY_ORDER.includes(c)),
  ]

  const featuredPosts = posts.filter((p) => p.featured)
  // "À la une" only renders on desktop — on mobile it's removed entirely,
  // so its posts must fold into the list instead of vanishing.
  const showFeatured = isDesktop && activeKey === 'all' && !isSearching

  const nq = normalize(urlQuery)
  const filtered = posts
    .filter((p) => {
      if (activeKey === 'all') {
        // Exclude featured posts only when they're actually shown above
        // (desktop, "all", no search) — otherwise they'd be duplicated.
        return !showFeatured || !p.featured
      }
      return p.category === activeKey
    })
    .filter((p) => {
      if (!nq) return true
      return normalize(p.title[lang]).includes(nq) || normalize(p.description[lang]).includes(nq)
    })
    .sort((a, b) => {
      const diff = a.publishedAt.localeCompare(b.publishedAt)
      return sortOrder === 'oldest' ? diff : -diff
    })

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(requestedPageValid, totalPages)
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  return (
    <section className="px-4 pb-24 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-7xl flex flex-col">

        {/* ── FILTRES + RECHERCHE — mobile : pills plein-bleed (leur propre ligne), tri en dessous,
            recherche flottante séparée ; desktop : tout sur une ligne (comportement d'origine).
            Un seul conteneur sticky, sinon deux sticky indépendants au même offset se superposent. ── */}
        <div
          ref={filterBarRef}
          className="order-1 md:order-2 sticky top-24 z-40 mb-16 flex flex-col items-start gap-3 md:flex-row md:flex-wrap md:items-center"
        >
          {/* ── FILTRES — pills, scroll horizontal plein-bleed, chaque pill atteignable ── */}
          <div className="w-full min-w-0 overflow-x-auto -mx-4 px-4 snap-x snap-mandatory scrollbar-hide md:w-auto md:flex-1 md:mx-0 md:px-0 md:flex md:justify-center md:snap-none">
            <div
              className="inline-flex items-center gap-1 rounded-full px-2 py-1.5 flex-shrink-0"
              style={{
                background: 'hsl(var(--bg-secondary))',
                border: '1px solid hsl(var(--border-subtle))',
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
                    className={`snap-start flex items-center gap-1.5 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors duration-150 whitespace-nowrap ${
                      isActive ? '' : 'hover:bg-[hsl(var(--bg-tertiary))]'
                    }`}
                    style={{
                      background: isActive ? 'hsl(var(--bg-inverse))' : undefined,
                      color: isActive ? 'hsl(var(--bg-primary))' : 'hsl(var(--text-secondary))',
                    }}
                  >
                    {CATEGORY_LABELS[cat]?.[lang] ?? cat}
                    <span style={{ opacity: 0.5 }}>{count}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* ── TRI — bascule récent / ancien, même style liquid glass ── */}
          <div
            className="inline-flex items-center gap-1 rounded-full px-1.5 py-1 shrink-0"
            style={{
              background: 'hsl(var(--bg-secondary))',
              border: '1px solid hsl(var(--border-subtle))',
              boxShadow: '0 2px 16px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.5) inset',
            }}
          >
            {(['newest', 'oldest'] as const).map((order) => {
              const isActive = sortOrder === order
              return (
                <button
                  key={order}
                  onClick={() => handleSort(order)}
                  aria-pressed={isActive}
                  className={`rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors duration-150 whitespace-nowrap ${
                    isActive ? '' : 'hover:bg-[hsl(var(--bg-tertiary))]'
                  }`}
                  style={{
                    background: isActive ? 'hsl(var(--bg-inverse))' : undefined,
                    color: isActive ? 'hsl(var(--bg-primary))' : 'hsl(var(--text-secondary))',
                  }}
                >
                  {t[order]}
                </button>
              )
            })}
          </div>

          {/* ── RECHERCHE — pill flottante, toujours visible, séparée de la barre de filtres ── */}
          <div
            className="flex items-center gap-1.5 rounded-full pl-3 pr-1.5 py-1.5 shrink-0"
            style={{
              background: 'hsl(var(--bg-secondary))',
              border: '1px solid hsl(var(--border-subtle))',
              boxShadow: '0 2px 16px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.5) inset',
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: 'hsl(var(--text-secondary))', opacity: 0.5, flexShrink: 0 }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchAria}
              className="w-24 sm:w-40 md:w-48 text-sm outline-none bg-transparent"
              style={{ color: 'hsl(var(--text-primary))' }}
            />
            {inputValue && (
              <button
                onClick={handleClear}
                className="p-1.5 rounded-full shrink-0 transition-colors hover:bg-[hsl(var(--bg-tertiary))]"
                style={{ color: 'hsl(var(--text-secondary))' }}
                aria-label={t.clearAria}
              >
                <svg
                  width="11"
                  height="11"
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

        {/* ── À LA UNE — desktop uniquement (showFeatured est déjà false sur mobile, donc
            FeaturedPosts n'est jamais monté là : pas de rendu, pas d'espace réservé).
            Ses articles rejoignent la liste unique en dessous sur mobile à la place. ── */}
        <div className="md:order-1">
          {showFeatured && <FeaturedPosts posts={featuredPosts} />}
        </div>

        {/* ── LISTE D'ARTICLES ── */}
        {/* min-h prevents the empty state from shrinking the page enough that
            position:sticky's pinning overlaps this section once scrolled to
            the bottom (only reachable when filtering leaves few/no results). */}
        <div className="order-3">
        <div className="min-h-[60vh]" style={{ borderTop: '1px solid hsl(var(--border-subtle))' }}>
          {/* Keyed on category + sort + query + page so the reveal observer
              re-scans freshly-mounted cards whenever the visible set changes. */}
          <ScrollRevealGroup resetKey={`${activeKey}|${sortOrder}|${urlQuery}|${currentPage}`}>
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p
                className="text-sm mb-4"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {tBlog.emptyResults}
              </p>
              <button
                onClick={handleReset}
                className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border transition-colors hover:bg-[hsl(var(--bg-tertiary))]"
                style={{ borderColor: 'hsl(var(--border-subtle))', color: 'hsl(var(--text-primary))' }}
              >
                {tBlog.resetFilters}
              </button>
            </div>
          )}
          {paginated.map((post, i) => (
            <Link
              key={post.slug}
              href={
                activeKey !== 'all'
                  ? `/blog/${post.slug}?from=${encodeURIComponent(activeKey)}`
                  : `/blog/${post.slug}`
              }
              className="group block py-8 sm:py-10 px-4 -mx-4 transition-colors duration-150 rounded-sm fade-up stagger-up"
              style={{ borderBottom: '1px solid hsl(var(--border-subtle))', '--stagger-i': i } as CSSProperties}
            >
              {/* Catégorie + date — au-dessus du titre, plus de colonne dédiée */}
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="inline-block font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 border"
                  style={{
                    borderColor: 'hsl(var(--border-subtle))',
                    color: 'hsl(var(--text-tertiary))',
                  }}
                >
                  {post.category.split(' & ')[0]}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest opacity-40">
                  {post.date[lang]}
                </span>
              </div>

              {/* Titre + description pleine largeur */}
              <h2
                className="text-xl md:text-2xl font-bold leading-snug mb-3 transition-opacity duration-150 group-hover:opacity-60"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {post.title[lang]}
              </h2>
              <p className="text-base leading-relaxed mb-5 opacity-50">
                {post.description[lang]}
              </p>
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest opacity-40 transition-all duration-150 group-hover:opacity-100">
                {t.read}
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
          </ScrollRevealGroup>
        </div>

        {totalPages > 1 && (
          <nav
            aria-label={tBlog.paginationAriaLabel}
            className="mt-12 flex flex-wrap items-center justify-center gap-2"
          >
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors duration-150 disabled:opacity-30 disabled:cursor-not-allowed hover:enabled:bg-[hsl(var(--bg-tertiary))]"
              style={{ border: '1px solid hsl(var(--border-subtle))', color: 'hsl(var(--text-secondary))' }}
            >
              {tBlog.prevPage}
            </button>

            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => {
              const isActive = page === currentPage
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={`${tBlog.pageAriaPrefix} ${page}`}
                  className="min-w-9 rounded-full px-3 py-1.5 font-mono text-xs transition-colors duration-150"
                  style={{
                    background: isActive ? 'hsl(var(--bg-inverse))' : undefined,
                    color: isActive ? 'hsl(var(--bg-primary))' : 'hsl(var(--text-secondary))',
                    border: isActive ? 'none' : '1px solid hsl(var(--border-subtle))',
                  }}
                >
                  {page}
                </button>
              )
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors duration-150 disabled:opacity-30 disabled:cursor-not-allowed hover:enabled:bg-[hsl(var(--bg-tertiary))]"
              style={{ border: '1px solid hsl(var(--border-subtle))', color: 'hsl(var(--text-secondary))' }}
            >
              {tBlog.nextPage}
            </button>
          </nav>
        )}
        </div>

      </div>
    </section>
  )
}
