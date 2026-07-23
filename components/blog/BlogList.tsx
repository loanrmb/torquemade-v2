'use client'

import { Fragment, useEffect, useRef, useState, type CSSProperties } from 'react'
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

  const filterBarRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Local, controlled value for typing responsiveness — the URL (urlQuery)
  // is what actually drives filtering, synced from this with a debounce.
  const [inputValue, setInputValue] = useState(urlQuery)

  // Mobile-only filter sheet (category + sort). Presentation state only —
  // filtering/sorting itself still flows through handleFilter/handleSort.
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  useEffect(() => {
    if (!mobileFilterOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileFilterOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileFilterOpen])

  useEffect(() => {
    if (mobileFilterOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileFilterOpen])

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
      router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    }, SEARCH_DEBOUNCE_MS)
    return () => clearTimeout(timer)
  }, [inputValue, urlQuery, pathname, router])

  // Scroll the filter/sort bar to its sticky resting spot (top-20 = 80px)
  // rather than the list top, which would slide the first articles behind
  // the sticky bar. Fixed offset → consistent across viewport heights.
  const STICKY_OFFSET = 80
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
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    scrollToFilterBar()
  }

  function handleClear() {
    setInputValue('')
    const params = new URLSearchParams(searchParams.toString())
    params.delete('q')
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    searchInputRef.current?.focus()
  }

  function handleReset() {
    setInputValue('')
    router.replace(pathname, { scroll: false })
  }

  const allCategories = Array.from(new Set(posts.map((p) => p.category)))
  const categories = [
    ALL,
    ...CATEGORY_ORDER.filter((c) => allCategories.includes(c)),
    ...allCategories.filter((c) => !CATEGORY_ORDER.includes(c)),
  ]

  const featuredPosts = posts.filter((p) => p.featured)
  const showFeatured = activeKey === 'all' && !isSearching

  const nq = normalize(urlQuery)
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
      if (!nq) return true
      return normalize(p.title[lang]).includes(nq) || normalize(p.description[lang]).includes(nq)
    })
    .sort((a, b) => {
      const diff = a.publishedAt.localeCompare(b.publishedAt)
      return sortOrder === 'oldest' ? diff : -diff
    })

  return (
    <section className="px-4 pb-24 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-7xl">

        {/* ── À LA UNE — visible uniquement sur "Tous", hors recherche ── */}
        {/* Desktop only: hidden on mobile per mobile-layout scope */}
        {showFeatured && (
          <div className="hidden md:block">
            <FeaturedPosts posts={featuredPosts} />
          </div>
        )}

        {/* ── FILTRES — pill sticky liquid glass + recherche sur la même ligne ── */}
        <div ref={filterBarRef} className="sticky top-20 z-40 mb-16 flex flex-wrap items-start gap-x-3 gap-y-3">
          {/* ── Trigger mobile — remplace pills catégories + tri par un sheet ── */}
          <button
            type="button"
            onClick={() => setMobileFilterOpen(true)}
            className="flex md:hidden items-center gap-2 rounded-full px-4 py-1.5 shrink-0 transition-colors duration-150"
            style={{
              background: 'hsl(var(--bg-secondary))',
              border: '1px solid hsl(var(--border-subtle))',
              boxShadow: '0 2px 16px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.5) inset',
              color: 'hsl(var(--text-secondary))',
            }}
            aria-haspopup="dialog"
            aria-expanded={mobileFilterOpen}
            aria-controls="blog-mobile-filters"
          >
            <FilterIcon />
            <span className="font-mono text-xs uppercase tracking-widest">{tBlog.filterTrigger}</span>
            {activeKey !== 'all' && (
              <span
                className="flex items-center justify-center rounded-full font-mono text-[10px] font-semibold"
                style={{
                  minWidth: '18px',
                  height: '18px',
                  padding: '0 5px',
                  background: 'hsl(var(--bg-inverse))',
                  color: 'hsl(var(--bg-primary))',
                }}
              >
                1
              </span>
            )}
          </button>

          <div className="hidden md:flex md:flex-1 md:justify-center">
            <div
              className="flex flex-wrap items-center gap-1 rounded-full px-2 py-1.5"
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
                    className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors duration-150 whitespace-nowrap ${
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
            className="hidden md:inline-flex items-center gap-1 rounded-full px-1.5 py-1 shrink-0"
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

          {/* ── RECHERCHE — toujours visible, aucun état caché ── */}
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

        {/* ── SHEET FILTRES MOBILE — sort + catégories, mêmes handlers que le bar desktop ── */}
        <div
          id="blog-mobile-filters"
          className="fixed inset-0 z-[70] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-hidden={!mobileFilterOpen}
          style={{ pointerEvents: mobileFilterOpen ? 'auto' : 'none' }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              opacity: mobileFilterOpen ? 1 : 0,
              transition: 'opacity 220ms ease',
              pointerEvents: mobileFilterOpen ? 'auto' : 'none',
            }}
            onClick={() => setMobileFilterOpen(false)}
          />

          <div
            className="absolute left-1/2 top-20 w-[calc(100%-2rem)] max-w-md rounded-3xl border p-4 max-h-[calc(100vh-6rem)] overflow-y-auto"
            style={{
              background: 'hsl(var(--bg-primary))',
              borderColor: 'hsl(var(--border-subtle))',
              boxShadow: '0 12px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
              opacity: mobileFilterOpen ? 1 : 0,
              transform: mobileFilterOpen
                ? 'translateX(-50%) translateY(0) scale(1)'
                : 'translateX(-50%) translateY(-8px) scale(0.98)',
              transition: mobileFilterOpen
                ? 'opacity 220ms ease, transform 220ms ease'
                : 'opacity 180ms ease, transform 180ms ease',
              pointerEvents: mobileFilterOpen ? 'auto' : 'none',
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {tBlog.filterTrigger}
              </span>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-150 hover:bg-bg-secondary"
                style={{ color: 'hsl(var(--text-secondary))' }}
                aria-label={tBlog.closeLabel}
              >
                <CloseIcon />
              </button>
            </div>

            {/* Tri — même toggle exclusif, mêmes handlers que la barre desktop */}
            <div className="mb-5">
              <p
                className="mb-2 font-mono text-[10px] uppercase tracking-widest opacity-40"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {tBlog.filterSortLabel}
              </p>
              <div
                className="inline-flex items-center gap-1 rounded-full p-1"
                style={{ background: 'hsl(var(--bg-secondary))', border: '1px solid hsl(var(--border-subtle))' }}
              >
                {(['newest', 'oldest'] as const).map((order) => {
                  const isActive = sortOrder === order
                  return (
                    <button
                      key={order}
                      type="button"
                      onClick={() => handleSort(order)}
                      aria-pressed={isActive}
                      className={`rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors duration-150 ${
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
            </div>

            {/* Catégories — présentées en checkbox, mais toujours mono-sélection
                (même handleFilter que la barre desktop : "Tous" = reset) */}
            <div>
              <p
                className="mb-2 font-mono text-[10px] uppercase tracking-widest opacity-40"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {tBlog.filterCategoriesLabel}
              </p>
              <div className="flex flex-col gap-1">
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
                      type="button"
                      onClick={() => handleFilter(key)}
                      role="checkbox"
                      aria-checked={isActive}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-150 hover:bg-[hsl(var(--bg-tertiary))]"
                    >
                      <span
                        className="flex items-center justify-center rounded-md flex-shrink-0"
                        style={{
                          width: '18px',
                          height: '18px',
                          border: `1.5px solid ${isActive ? 'hsl(var(--bg-inverse))' : 'hsl(var(--border-subtle))'}`,
                          background: isActive ? 'hsl(var(--bg-inverse))' : 'transparent',
                        }}
                      >
                        {isActive && <CheckIcon />}
                      </span>
                      <span
                        className="flex-1 font-mono text-xs uppercase tracking-widest"
                        style={{ color: 'hsl(var(--text-primary))' }}
                      >
                        {CATEGORY_LABELS[cat]?.[lang] ?? cat}
                      </span>
                      <span
                        className="font-mono text-[10px] opacity-40"
                        style={{ color: 'hsl(var(--text-primary))' }}
                      >
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── LISTE D'ARTICLES ── */}
        {/* min-h prevents the empty state from shrinking the page enough that
            position:sticky's pinning overlaps this section once scrolled to
            the bottom (only reachable when filtering leaves few/no results). */}
        <div className="min-h-[60vh]" style={{ borderTop: '1px solid hsl(var(--border-subtle))' }}>
          {/* Keyed on category + sort + query so the reveal observer re-scans
              freshly-mounted cards whenever the filtered set changes. */}
          <ScrollRevealGroup resetKey={`${activeKey}|${sortOrder}|${urlQuery}`}>
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
          {filtered.map((post, i) => {
            const href =
              activeKey !== 'all'
                ? `/blog/${post.slug}?from=${encodeURIComponent(activeKey)}`
                : `/blog/${post.slug}`
            return (
              <Fragment key={post.slug}>
                {/* ── Mobile card — category badge top, date moved below title ── */}
                <Link
                  key={`${post.slug}-mobile`}
                  href={href}
                  className="group flex md:hidden flex-col py-8 sm:py-10 px-4 -mx-4 transition-colors duration-150 rounded-sm fade-up stagger-up"
                  style={{ borderBottom: '1px solid hsl(var(--border-subtle))', '--stagger-i': i } as CSSProperties}
                >
                  <span
                    className="inline-block self-start font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 border mb-3"
                    style={{
                      borderColor: 'hsl(var(--border-subtle))',
                      color: 'hsl(var(--text-tertiary))',
                    }}
                  >
                    {post.category.split(' & ')[0]}
                  </span>

                  <div className="w-[90%]">
                    <h2
                      className="text-xl font-bold leading-snug mb-2 transition-opacity duration-150 group-hover:opacity-60"
                      style={{ color: 'hsl(var(--text-primary))' }}
                    >
                      {post.title[lang]}
                    </h2>
                    <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-3">
                      {post.date[lang]}
                    </p>
                    <p className="text-base leading-relaxed mb-5 opacity-50">
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

                {/* ── Desktop card — unchanged original markup ── */}
                <Link
                  key={`${post.slug}-desktop`}
                  href={href}
                  className="group hidden md:flex gap-12 md:gap-16 py-8 sm:py-10 px-4 -mx-4 transition-colors duration-150 rounded-sm fade-up stagger-up"
                  style={{ borderBottom: '1px solid hsl(var(--border-subtle))', '--stagger-i': i } as CSSProperties}
                >
                  {/* Gauche : numéro + date + catégorie */}
                  <div className="w-24 sm:w-32 flex-shrink-0">
                    <p
                      className="font-mono text-4xl md:text-5xl font-bold mb-2 opacity-15"
                      style={{ color: 'hsl(var(--text-primary))' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <p className="font-mono text-xs uppercase tracking-widest opacity-40 mb-2">
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
                      className="text-xl md:text-2xl font-bold leading-snug mb-3 transition-opacity duration-150 group-hover:opacity-60"
                      style={{ color: 'hsl(var(--text-primary))' }}
                    >
                      {post.title[lang]}
                    </h2>
                    <p className="text-base leading-relaxed mb-5 max-w-xl opacity-50">
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
              </Fragment>
            )
          })}
          </ScrollRevealGroup>
        </div>

      </div>
    </section>
  )
}

function FilterIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="7" y1="12" x2="17" y2="12" />
      <line x1="10" y1="18" x2="14" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: 'hsl(var(--bg-primary))' }}
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}
