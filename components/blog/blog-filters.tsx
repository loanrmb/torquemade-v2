'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  Suspense,
  type ReactNode,
} from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

/**
 * Blog filter state, deliberately split away from `useSearchParams()`.
 *
 * WHY THIS EXISTS — `useSearchParams()` forces Next.js to bail out of
 * prerendering for the whole Suspense boundary it sits in. `BlogList` used to
 * call it directly while wrapped in `<Suspense fallback={null}>`, so the static
 * build wrote the fallback — `null` — into /blog. The 89 article cards existed
 * only after hydration: zero article links in the server HTML.
 *
 * The fix is not to remove the hook (the URL is still the source of truth for
 * filters, and `?cat=` must survive a shared link) but to confine it to
 * `SearchParamsSync`, which renders nothing. That component alone bails out;
 * the provider and the list prerender normally with the default state
 * (all categories, newest first, no query) — which is exactly what `/blog`
 * renders anyway. Landing on `/blog?cat=X` applies the filter on hydration.
 *
 * Writes still go through the URL (`router.replace`), so back/forward, shared
 * links and the `?from=` back-link on articles keep working unchanged.
 */

export type SortOrder = 'newest' | 'oldest'

interface BlogFilterState {
  /** Raw category key from lib/blog.ts, or 'all'. */
  activeKey: string
  sortOrder: SortOrder
  /** Committed search query (debounced, mirrored in ?q=). */
  query: string
  /** Uncommitted input value, for typing responsiveness. */
  inputValue: string
  setInputValue: (value: string) => void
  setCategory: (key: string) => void
  setSort: (order: SortOrder) => void
  clearQuery: () => void
  reset: () => void
}

const BlogFilterContext = createContext<BlogFilterState | null>(null)

export function useBlogFilters(): BlogFilterState {
  const ctx = useContext(BlogFilterContext)
  if (!ctx) {
    throw new Error('useBlogFilters must be used inside <BlogFilterProvider>')
  }
  return ctx
}

const SEARCH_DEBOUNCE_MS = 300

/** Defaults must match what `/blog` (no query string) renders. */
const DEFAULT_CATEGORY = 'all'
const DEFAULT_SORT: SortOrder = 'newest'

export function BlogFilterProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  const [activeKey, setActiveKey] = useState(DEFAULT_CATEGORY)
  const [sortOrder, setSortOrder] = useState<SortOrder>(DEFAULT_SORT)
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')

  // Mirrors the live URL so writes can merge into params they don't own
  // (e.g. changing category while ?q= is set) without reading searchParams
  // here — that hook is confined to SearchParamsSync.
  const paramsRef = useRef('')

  const syncFromUrl = useCallback((search: string) => {
    paramsRef.current = search
    const params = new URLSearchParams(search)
    setActiveKey(params.get('cat') ?? DEFAULT_CATEGORY)
    setSortOrder(params.get('sort') === 'oldest' ? 'oldest' : DEFAULT_SORT)
    const q = params.get('q') ?? ''
    setQuery(q)
    setInputValue(q)
  }, [])

  const writeParams = useCallback(
    (mutate: (params: URLSearchParams) => void) => {
      const params = new URLSearchParams(paramsRef.current)
      mutate(params)
      paramsRef.current = params.toString()
      const qs = params.toString()
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
    },
    [pathname, router]
  )

  const setCategory = useCallback(
    (key: string) => {
      setActiveKey(key)
      writeParams((params) => {
        if (key === DEFAULT_CATEGORY) params.delete('cat')
        else params.set('cat', key)
      })
    },
    [writeParams]
  )

  const setSort = useCallback(
    (order: SortOrder) => {
      setSortOrder(order)
      writeParams((params) => {
        // Newest is the default — keep the URL clean (matches middleware canon).
        if (order === 'newest') params.delete('sort')
        else params.set('sort', 'oldest')
      })
    },
    [writeParams]
  )

  const clearQuery = useCallback(() => {
    setInputValue('')
    setQuery('')
    writeParams((params) => params.delete('q'))
  }, [writeParams])

  const reset = useCallback(() => {
    setActiveKey(DEFAULT_CATEGORY)
    setSortOrder(DEFAULT_SORT)
    setQuery('')
    setInputValue('')
    paramsRef.current = ''
    router.replace(pathname, { scroll: false })
  }, [pathname, router])

  // Debounced commit of the search box into both state and the URL.
  useEffect(() => {
    if (inputValue === query) return
    const timer = setTimeout(() => {
      setQuery(inputValue)
      writeParams((params) => {
        if (inputValue.trim()) params.set('q', inputValue)
        else params.delete('q')
      })
    }, SEARCH_DEBOUNCE_MS)
    return () => clearTimeout(timer)
  }, [inputValue, query, writeParams])

  return (
    <BlogFilterContext.Provider
      value={{
        activeKey,
        sortOrder,
        query,
        inputValue,
        setInputValue,
        setCategory,
        setSort,
        clearQuery,
        reset,
      }}
    >
      {/* The only subtree that reads useSearchParams, so the only one that
          drops out of the static prerender. It renders nothing, so nothing
          is lost from the server HTML. */}
      <Suspense fallback={null}>
        <SearchParamsSync onSync={syncFromUrl} />
      </Suspense>
      {children}
    </BlogFilterContext.Provider>
  )
}

function SearchParamsSync({ onSync }: { onSync: (search: string) => void }) {
  const searchParams = useSearchParams()
  const search = searchParams.toString()

  // Covers first hydration on a filtered URL (/blog?cat=X) and back/forward.
  useEffect(() => {
    onSync(search)
  }, [search, onSync])

  return null
}
