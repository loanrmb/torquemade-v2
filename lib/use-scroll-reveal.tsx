'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/**
 * Attaches IntersectionObserver to reveal .fade-up elements on scroll. The
 * inline script in app/layout.tsx already reveals above-the-fold elements
 * before hydration (for fast LCP), so we only observe the ones still hidden —
 * i.e. below-the-fold elements and pages reached via client-side navigation.
 * Call once at the page level.
 *
 * Pass `resetKey` when the subtree's content can be replaced in place (e.g. a
 * filtered card grid) — the effect re-scans for new `.fade-up` elements each
 * time it changes. Without it, the scan only ever runs once on mount.
 */
export function useScrollReveal(resetKey?: string | number) {
  const initialized = useRef(false)

  useEffect(() => {
    if (resetKey === undefined) {
      if (initialized.current) return
      initialized.current = true
    }

    const els = document.querySelectorAll<HTMLElement>('.fade-up:not(.is-visible)')
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [resetKey])
}

/**
 * Wraps a group of `.fade-up` elements whose contents get replaced (not just
 * hidden) — e.g. a filtered card grid. Pass `resetKey` (the value(s) that
 * determine the filtered set, e.g. `${activeFilter}`) so the reveal scan
 * re-runs for freshly-mounted cards whenever it changes.
 */
export function ScrollRevealGroup({
  resetKey,
  children,
}: {
  resetKey: string | number
  children: ReactNode
}) {
  useScrollReveal(resetKey)
  return <>{children}</>
}
