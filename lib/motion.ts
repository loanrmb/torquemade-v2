'use client'

import { useReducedMotion } from 'framer-motion'

/**
 * Single source of truth for reduced-motion checks across the Framer Motion
 * layer. Thin wrapper around Framer's useReducedMotion() — that hook returns
 * `boolean | null` (null until mount, to avoid an SSR/client mismatch), this
 * coerces it to a plain boolean so call sites don't each repeat the `?? false`.
 *
 * Import this instead of calling useReducedMotion()/matchMedia directly so
 * every component reacts to the same source and stays in sync if the
 * detection strategy ever changes.
 */
export function useReducedMotionSafe(): boolean {
  return useReducedMotion() ?? false
}

/**
 * Press feedback for any tappable control (buttons, chips). Spread onto a
 * motion.button. Not gated behind reduced motion — it's a discrete tap
 * acknowledgment tied directly to a user gesture, not ambient movement, and
 * matches the plain-CSS `:active { transform: scale(0.97) }` already used
 * unconditionally on .btn-primary/.btn-outline/.btn-liquid-glass.
 */
export const pressable = {
  whileHover: { scale: 1.015 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.12, ease: [0.23, 1, 0.32, 1] as const },
}
