'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { EASE_OUT, useReducedMotionSafe } from '@/lib/motion'

/**
 * `/blog/(articles)/[slug]` articles render at `/blog/<slug>` (route groups
 * don't appear in the pathname) and are excluded from this wrapper, same as
 * every prior motion pass — they keep their own ArticleLayout transitions.
 */
const BLOG_ARTICLE_PATH = /^\/blog\/.+/

const ENTER_MS = 1000
const EXIT_MS = 800
const EASE_OUT_CSS = `cubic-bezier(${EASE_OUT.join(',')})`

type Phase = 'visible' | 'exiting' | 'entering'

/**
 * Framer Motion's AnimatePresence was tried here first, but its exit/enter
 * lifecycle is JS-scheduled (mount-time effects deciding when to apply
 * `initial`/`animate` styles) and proved unreliable against Next's App
 * Router transitions on these WaveBackground/ShaderBackground-heavy
 * routes — intermittently the incoming page flashed at full opacity for a
 * frame, then snapped invisible, before the real fade played (or never
 * recovered at all). A small explicit state machine driving a plain CSS
 * `opacity` transition sidesteps that: the browser's compositor owns the
 * animation once the inline style is set, independent of React/Framer's
 * own effect timing.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const reducedMotion = useReducedMotionSafe()

  const [rendered, setRendered] = useState({ pathname, children })
  const [phase, setPhase] = useState<Phase>('visible')
  const exitTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const enterFrame = useRef<number | null>(null)

  useEffect(() => {
    if (pathname === rendered.pathname) {
      // Same route (e.g. a query-string-only change) — swap content in place, no transition.
      setRendered({ pathname, children })
      return
    }

    setPhase('exiting')
    exitTimeout.current = setTimeout(() => {
      setRendered({ pathname, children })
      setPhase('entering')
      // Two rAFs: let the browser paint the opacity:0 frame before flipping to
      // visible, otherwise both states can collapse into a single frame with
      // no visible transition.
      enterFrame.current = requestAnimationFrame(() => {
        enterFrame.current = requestAnimationFrame(() => setPhase('visible'))
      })
    }, EXIT_MS)

    return () => {
      if (exitTimeout.current) clearTimeout(exitTimeout.current)
      if (enterFrame.current) cancelAnimationFrame(enterFrame.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  if (reducedMotion || BLOG_ARTICLE_PATH.test(pathname)) {
    return <>{children}</>
  }

  const opacity = phase === 'visible' ? 1 : 0
  const duration = phase === 'exiting' ? EXIT_MS : ENTER_MS

  return (
    <div style={{ opacity, transition: `opacity ${duration}ms ${EASE_OUT_CSS}` }}>
      {rendered.children}
    </div>
  )
}
