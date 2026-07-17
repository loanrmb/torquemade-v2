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

/**
 * Movement-based reveal pattern (infra only — not wired up anywhere yet).
 * ---------------------------------------------------------------------
 * Fades and translate-entrances degrade fine by just zeroing out the x/y
 * distance under reduced motion — see the gated components in this branch
 * (seo-feature-carousel, situation-diagnostic, erp-diagnostic-cta, etc.).
 *
 * But some patterns — a word-by-word text reveal, a mask/clip-path wipe, a
 * scroll-scrubbed reveal — don't have a "fade" to fall back to. The movement
 * itself IS the effect: a "reduced" version that keeps the wipe but makes it
 * shorter, or keeps the scroll-scrub but compresses the range, still reads as
 * motion. It doesn't satisfy "remove movement and position animations."
 *
 * The pattern: branch BEFORE wiring the scroll/animation subscription, not
 * after, and render two different trees. A conditional duration/distance is
 * not enough — the reduced-motion tree must never subscribe to scroll/frame
 * updates at all, so it renders once, in its final state, instantly.
 *
 * Example (for a future word-reveal/mask-wipe hero):
 *
 *   function WordReveal({ text }: { text: string }) {
 *     const reducedMotion = useReducedMotionSafe()
 *
 *     if (reducedMotion) {
 *       // Plain, fully-settled node. No useScroll/useTransform subscription,
 *       // no motion.span — the words are just there, already revealed.
 *       return <p>{text}</p>
 *     }
 *
 *     return <AnimatedWordReveal text={text} /> // existing scroll-linked implementation
 *   }
 *
 * Contrast with the "collapse the range" trick used elsewhere in this file's
 * call sites (e.g. useTransform(progress, range, reducedMotion ? [1, 1] : [0, 1])):
 * that works for a single opacity/transform value because the output is
 * always a constant either way. It does NOT work for a reveal made of many
 * sequential/staggered movement steps — there, render a static node instead.
 */
