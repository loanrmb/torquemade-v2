'use client'

import { motion } from 'framer-motion'
import type { CSSProperties, ReactNode } from 'react'
import { EASE_OUT, useReducedMotionSafe } from '@/lib/motion'

/**
 * Mount-triggered "arrival" reveal for above-the-fold hero H1s: blur, a
 * small upward settle, and opacity animate together (not sequenced) so the
 * headline reads as one soft object coming into focus rather than a wipe or
 * slide. Not scroll-gated: these headings are always in the initial
 * viewport, so it plays once on mount and never replays. filter: blur(6px)
 * is well under the skill's 20px cost guideline, and this runs once on a
 * single hero-sized element rather than looping, so the cost is negligible.
 *
 * Reduced motion renders a plain, fully-visible <h1> with no wrapper and no
 * filter/transform transition at all — per the "instant render, not instant
 * fade" rule, since this reveal has no partial-motion fallback.
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
      initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, delay: 0.08, ease: EASE_OUT }}
    >
      {children}
    </motion.h1>
  )
}
