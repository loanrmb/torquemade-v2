'use client'

import { useEffect, useRef } from 'react'

/**
 * Attaches IntersectionObserver to add .is-visible to all .fade-up elements
 * inside the document. Call once at the page level.
 */
export function useScrollReveal() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const els = document.querySelectorAll<HTMLElement>('.fade-up')
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
  }, [])
}
