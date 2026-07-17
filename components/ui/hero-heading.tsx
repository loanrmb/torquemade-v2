'use client'

import { motion } from 'framer-motion'
import type { CSSProperties, ReactNode } from 'react'
import { EASE_OUT, useReducedMotionSafe } from '@/lib/motion'

const HERO_ARRIVAL_DURATION = 1.4

/**
 * Shared "arrival" keyframes for hero titles and the content immediately
 * below them. Blur, a top-to-bottom shutter (clip-path), a small upward
 * settle, and opacity all animate together (not sequenced) so content reads
 * as one soft object coming into focus — closer to a linear.app-style
 * blur-shutter than a uniform blur-in or a hard directional wipe. The
 * clip-path starts fully closed from the bottom (`inset(0 0 100% 0)`, per
 * the emil-design-eng skill's "hidden from bottom" pattern) and opens
 * downward as the blur clears, so the reveal boundary itself travels
 * top-to-bottom instead of fading in uniformly everywhere at once.
 */
const HERO_ARRIVAL_INITIAL = {
  opacity: 0,
  y: 10,
  filter: 'blur(6px)',
  clipPath: 'inset(0 0 100% 0)',
}

const HERO_ARRIVAL_ANIMATE = {
  opacity: 1,
  y: 0,
  filter: 'blur(0px)',
  clipPath: 'inset(0 0 0% 0)',
}

/**
 * Mount-triggered arrival reveal for above-the-fold hero H1s. Not
 * scroll-gated: these headings are always in the initial viewport, so it
 * plays once on mount and never replays. filter: blur(6px) is well under
 * the skill's 20px cost guideline, and this runs once on a single
 * hero-sized element rather than looping, so the cost is negligible.
 *
 * Reduced motion renders a plain, fully-visible <h1> with no wrapper and no
 * filter/transform/clip-path transition at all — per the "instant render,
 * not instant fade" rule, since this reveal has no partial-motion fallback.
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
      initial={HERO_ARRIVAL_INITIAL}
      animate={HERO_ARRIVAL_ANIMATE}
      transition={{ duration: HERO_ARRIVAL_DURATION, delay: 0.08, ease: EASE_OUT }}
    >
      {children}
    </motion.h1>
  )
}

/**
 * Same arrival treatment as HeroHeading, for the text/numbering/table
 * content that sits immediately below a hero title (the homepage's subhead
 * + pillar grid, and the /erp /crm /web-dev intro paragraphs) — so the hero
 * block reads as one cohesive reveal instead of the title animating
 * differently from what follows it directly. `delay` lets call sites keep
 * the existing stagger rhythm (title at 0.08s, this typically at
 * 0.16s/0.32s) rather than everything landing in the same instant.
 */
export function HeroRevealBlock({
  as = 'div',
  className,
  style,
  children,
  delay = 0.16,
}: {
  as?: 'div' | 'p'
  className?: string
  style?: CSSProperties
  children: ReactNode
  delay?: number
}) {
  const reducedMotion = useReducedMotionSafe()
  const StaticTag = as

  if (reducedMotion) {
    return (
      <StaticTag className={className} style={style}>
        {children}
      </StaticTag>
    )
  }

  const MotionTag = as === 'p' ? motion.p : motion.div

  return (
    <MotionTag
      className={className}
      style={style}
      initial={HERO_ARRIVAL_INITIAL}
      animate={HERO_ARRIVAL_ANIMATE}
      transition={{ duration: HERO_ARRIVAL_DURATION, delay, ease: EASE_OUT }}
    >
      {children}
    </MotionTag>
  )
}
