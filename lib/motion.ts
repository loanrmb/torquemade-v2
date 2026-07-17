'use client'

import { useReducedMotion, type Variants } from 'framer-motion'

/**
 * Canonical easing curves — single source of truth for the Framer Motion
 * layer. Mirror the CSS custom properties in app/globals.css exactly:
 *
 *   EASE_OUT    ↔ --ease-out    (cubic-bezier(0.23, 1, 0.32, 1))
 *   EASE_IN_OUT ↔ --ease-in-out (cubic-bezier(0.77, 0, 0.175, 1))
 *
 * The remaining exports below are NOT interchangeable with EASE_OUT despite
 * looking similar — they were found duplicated verbatim at multiple call
 * sites with distinct numeric values, so each keeps its own name here rather
 * than being silently coalesced into EASE_OUT (that would shift timing on
 * every call site). See the motion-shared-easing-consolidation PR for the
 * full before/after map.
 */
export const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1]
export const EASE_IN_OUT: [number, number, number, number] = [0.77, 0, 0.175, 1]

/** Steeper ease-out — seo-feature-carousel, situation-diagnostic panel/accordion, erp-ecommerce stat cards. */
export const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1]

/** CSS `ease` keyword equivalent — shared fadeUpVariants, services-section heading. */
export const EASE_STANDARD: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

/** Material "decelerate" curve — services-section stage crossfade (single call site). */
export const EASE_DECELERATE: [number, number, number, number] = [0, 0, 0.2, 1]

/**
 * Spring presets — Apple's { duration, bounce } form (see emil-design-eng
 * skill's spring-physics section). Two presets is the intended ceiling per
 * the micro-interactions audit; do not add a third without revisiting that
 * audit.
 */
export const springSnappy = { type: 'spring', duration: 0.35, bounce: 0.15 } as const
export const springSoft = { type: 'spring', duration: 0.5, bounce: 0.2 } as const

/**
 * Shared fade-up-on-scroll pattern — formalizes the identical
 * workContainerVariants/workCardVariants (app/page.tsx) and
 * revealContainer/revealItem (components/erp-feature-section.tsx) pairs.
 */
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_STANDARD } },
}

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
