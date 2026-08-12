'use client'

/**
 * SeoFeatureCarousel — animated 5-step feature carousel for /services/web-dev.
 * ─────────────────────────────────────────────────────────────────────────
 * Adapted from the 21st.dev "FeatureCarousel" (animated-feature-carousel.tsx).
 * Renamed to avoid clashing with any future "FeatureCarousel" in the project.
 *
 * Changes from the source component:
 *  - TOTAL_STEPS 4 → 5, steps content passed in as a prop (bilingual copy
 *    lives in lib/strings.ts, resolved by the caller via useLang).
 *  - Two stacked Unsplash-style images per step replaced with a single
 *    centered monochrome SVG illustration per step (one concept per step).
 *    ImageSet / step1img1 etc. replaced by a single `illustrations` array.
 *  - All dark: classes and the sky-blue accent removed. Colors now come
 *    from the site's CSS vars (--text-primary/secondary/tertiary,
 *    --border-subtle, --bg-primary/secondary). The active state inverts
 *    to a solid --text-primary pill (black-on-white in light mode) instead
 *    of blue, matching the site's strict monochrome rule.
 */

import {
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import {
  AnimatePresence,
  motion,
  type Variants,
} from 'framer-motion'
import { useReducedMotionSafe, EASE_OUT_EXPO } from '@/lib/motion'

interface Step {
  name: string
  title: string
  desc: string
  /** Optional "read more" link rendered under the step copy. Only the active
   *  step is mounted, so a link here is not guaranteed to be in the server
   *  HTML — pair it with a persistent link outside the carousel when the
   *  destination matters for crawling. */
  linkHref?: string
  linkLabel?: string
}

interface SeoFeatureCarouselProps {
  steps: readonly Step[]
  illustrations: readonly ReactNode[]
  /** Autoplay interval in ms. */
  interval?: number
}

const ANIMATION_PRESETS = {
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { type: 'spring', stiffness: 300, damping: 25, mass: 0.5 },
  },
} as const

const stepVariants: Variants = {
  inactive: { scale: 0.9, opacity: 0.7 },
  active: { scale: 1, opacity: 1 },
}

function useStepCycler(totalSteps: number, interval: number) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % totalSteps)
    }, interval)
    return () => clearTimeout(timerId)
  }, [current, totalSteps, interval])

  const setStep = useCallback(
    (stepIndex: number) => setCurrent(stepIndex % totalSteps),
    [totalSteps]
  )

  return { current, setStep }
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={clsx('h-3.5 w-3.5', className)}
      aria-hidden="true"
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

function FeatureCard({
  children,
  step,
}: {
  children: ReactNode
  step: Step
  stepsCount: number
  stepIndex: number
}) {
  const reducedMotion = useReducedMotionSafe()
  const y = reducedMotion ? 0 : 20
  const x = reducedMotion ? 0 : -20
  return (
    <div
      className="w-full overflow-hidden rounded-3xl"
      style={{
        border: '1px solid hsl(var(--border-subtle))',
        background: 'hsl(var(--bg-primary))',
      }}
    >
      <div className="flex h-[700px] flex-col items-center gap-6 p-6 min-720:h-[400px] min-720:flex-row min-720:gap-10 min-720:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.name}
            className="flex min-h-0 w-full flex-1 flex-col gap-4 overflow-y-auto min-720:h-full"
            initial={{ opacity: 0, y }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -y }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
          >
            <motion.div
              className="text-caption font-mono font-semibold tracking-widest uppercase"
              style={{ color: 'hsl(var(--text-tertiary))' }}
              initial={{ opacity: 0, x }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05, duration: 0.3, ease: EASE_OUT_EXPO }}
            >
              {step.name}
            </motion.div>
            <motion.h2
              className="text-headline font-semibold tracking-tight min-720:text-title-2"
              style={{ color: 'hsl(var(--text-primary))' }}
              initial={{ opacity: 0, x }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.3, ease: EASE_OUT_EXPO }}
            >
              {step.title}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.3, ease: EASE_OUT_EXPO }}
            >
              <p
                className="text-body leading-relaxed"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {step.desc}
              </p>
              {step.linkHref && step.linkLabel && (
                <Link
                  href={step.linkHref}
                  className="mt-3 inline-flex w-fit items-center gap-1.5 text-sm font-semibold underline-offset-4 transition-opacity duration-150 hover:opacity-70 hover:underline"
                  style={{ color: 'hsl(var(--text-primary))' }}
                >
                  {step.linkLabel} →
                </Link>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div className="flex shrink-0 items-center justify-center">{children}</div>
      </div>
    </div>
  )
}

function StepsNav({
  steps,
  current,
  onChange,
}: {
  steps: readonly Step[]
  current: number
  onChange: (index: number) => void
}) {
  return (
    <nav aria-label="Progress" className="flex justify-center px-4">
      <ol className="flex w-full flex-wrap items-center justify-center gap-2" role="list">
        {steps.map((step, stepIdx) => {
          const isCompleted = current > stepIdx
          const isCurrent = current === stepIdx
          return (
            <motion.li
              key={step.name}
              initial="inactive"
              animate={isCurrent ? 'active' : 'inactive'}
              variants={stepVariants}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <button
                type="button"
                aria-current={isCurrent ? 'step' : undefined}
                className="group flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-opacity duration-150 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  background: isCurrent ? 'hsl(var(--text-primary))' : 'hsl(var(--bg-secondary))',
                  color: isCurrent ? 'hsl(var(--bg-primary))' : 'hsl(var(--text-secondary))',
                  ['--tw-ring-color' as string]: 'hsl(var(--text-primary))',
                }}
                onClick={() => onChange(stepIdx)}
              >
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors duration-150"
                  style={{
                    background: isCompleted || isCurrent ? 'hsl(var(--text-primary))' : 'hsl(var(--border-subtle))',
                    color: isCompleted || isCurrent ? 'hsl(var(--bg-primary))' : 'hsl(var(--text-tertiary))',
                  }}
                >
                  {isCompleted ? <IconCheck /> : <span>{stepIdx + 1}</span>}
                </span>
                <span className="hidden min-720:inline-block">{step.name}</span>
              </button>
            </motion.li>
          )
        })}
      </ol>
    </nav>
  )
}

export function SeoFeatureCarousel({ steps, illustrations, interval = 5000 }: SeoFeatureCarouselProps) {
  const { current: step, setStep } = useStepCycler(steps.length, interval)

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-4 min-720:gap-12">
      <FeatureCard step={steps[step]} stepIndex={step} stepsCount={steps.length}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            {...ANIMATION_PRESETS.fadeInScale}
            className="flex h-36 w-36 shrink-0 items-center justify-center min-720:h-44 min-720:w-44"
          >
            {illustrations[step]}
          </motion.div>
        </AnimatePresence>
      </FeatureCard>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <StepsNav current={step} onChange={setStep} steps={steps} />
      </motion.div>
    </div>
  )
}
