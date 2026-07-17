'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { EASE_OUT, useReducedMotionSafe } from '@/lib/motion'

/**
 * `/blog/(articles)/[slug]` articles render at `/blog/<slug>` (route groups
 * don't appear in the pathname) and are excluded from this wrapper, same as
 * every prior motion pass — they keep their own ArticleLayout transitions.
 */
const BLOG_ARTICLE_PATH = /^\/blog\/.+/

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const reducedMotion = useReducedMotionSafe()

  if (reducedMotion || BLOG_ARTICLE_PATH.test(pathname)) {
    return <>{children}</>
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, ease: EASE_OUT } }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: EASE_OUT } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
