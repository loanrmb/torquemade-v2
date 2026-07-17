'use client'

import { motion } from 'framer-motion'
import type { CSSProperties, ReactNode } from 'react'
import { EASE_OUT, useReducedMotionSafe } from '@/lib/motion'

/**
 * Mount-triggered mask-wipe reveal for above-the-fold hero H1s. Single
 * element, single animated property (clip-path) — see the emil-design-eng
 * skill's clip-path reveal pattern and the WordReveal example in
 * lib/motion.ts. Not scroll-gated: these headings are always in the initial
 * viewport, so the wipe plays once on mount and never replays.
 *
 * Reduced motion renders a plain, fully-visible <h1> with no wrapper and no
 * clip-path transition at all — per the "instant render, not instant fade"
 * rule, since a wipe has no fade fallback.
 */
export function HeroHeading({
  className,
  style,
  children,
}: {
  className?: string
  style?: CSSProperties
  children: ReactNode
}) {
  const reducedMotion = useReducedMotionSafe()

  if (reducedMotion) {
    return (
      <h1 className={className} style={style}>
        {children}
      </h1>
    )
  }

  return (
    <motion.h1
      className={className}
      style={style}
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={{ clipPath: 'inset(0 0% 0 0)' }}
      transition={{ duration: 0.6, delay: 0.08, ease: EASE_OUT }}
    >
      {children}
    </motion.h1>
  )
}
