'use client'

/**
 * TraceabilityTimelineDemo — static UI mockup of a shipment traceability
 * record, embedded in the litige-poisson-mort-doa article to illustrate how
 * a serialized inventory system builds a chargeback evidence trail.
 *
 * Demo only: no backend, no real PDF generation. The export button is inert.
 *
 * Reduced motion: renders a fully static tree (no whileInView subscription,
 * no stagger) rather than a softened fade, matching the differentiator-timeline
 * pattern of branching before the animation is wired up.
 */

import { motion } from 'framer-motion'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'
import { useReducedMotionSafe, EASE_OUT_EXPO } from '@/lib/motion'

type TimelineStep = {
  title: string
  detail: string
  time: string
  file?: string
}

export function TraceabilityTimelineDemo() {
  const lang = useLang()
  const t = strings[lang].blog.traceabilityDemo
  const reducedMotion = useReducedMotionSafe()

  return (
    <div className="not-prose my-10 overflow-hidden rounded-2xl border border-border-subtle bg-bg-secondary/70 shadow-card backdrop-blur-lg">
      <div className="flex items-center justify-between border-b border-border-subtle px-5 py-4 md:px-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-secondary">
          {t.label}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-tertiary">
          {t.ref}
        </span>
      </div>

      <div className="px-5 py-7 md:px-8 md:py-8">
        {reducedMotion ? (
          <StaticSteps steps={t.steps} />
        ) : (
          <AnimatedSteps steps={t.steps} />
        )}
      </div>

      <button
        type="button"
        disabled
        aria-disabled="true"
        className="flex w-full cursor-not-allowed items-center justify-center gap-2 border-t border-border-subtle px-6 py-4 text-sm font-medium text-text-primary opacity-70 transition-colors md:hover:bg-bg-tertiary"
      >
        <DocumentIcon />
        {t.exportButton}
      </button>
    </div>
  )
}

function StaticSteps({ steps }: { steps: readonly TimelineStep[] }) {
  return (
    <ol className="relative flex flex-col gap-7">
      <span className="absolute bottom-1 left-[7px] top-1 w-px bg-border-subtle" aria-hidden="true" />
      {steps.map((step, i) => (
        <StepRow key={step.title} step={step} isLast={i === steps.length - 1} />
      ))}
    </ol>
  )
}

function AnimatedSteps({ steps }: { steps: readonly TimelineStep[] }) {
  return (
    <ol className="relative flex flex-col gap-7">
      <span className="absolute bottom-1 left-[7px] top-1 w-px bg-border-subtle" aria-hidden="true" />
      {steps.map((step, i) => (
        <motion.li
          key={step.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: EASE_OUT_EXPO, delay: Math.min(i * 0.08, 0.32) }}
        >
          <StepRow step={step} isLast={i === steps.length - 1} />
        </motion.li>
      ))}
    </ol>
  )
}

function StepRow({ step, isLast }: { step: TimelineStep; isLast: boolean }) {
  return (
    <div className="relative flex items-start gap-4">
      <span
        className={`relative z-10 mt-1 h-[13px] w-[13px] shrink-0 rounded-full border-2 border-text-primary ${
          isLast ? 'bg-text-primary' : 'bg-bg-primary'
        }`}
        aria-hidden="true"
      />
      <div className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
        <div className="min-w-0">
          <div className="text-sm font-medium text-text-primary">{step.title}</div>
          <div className="text-sm text-text-secondary">{step.detail}</div>
          {step.file && (
            <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-border-subtle px-2 py-0.5 text-[11px] text-text-secondary">
              <AttachmentIcon />
              {step.file}
            </span>
          )}
        </div>
        <span className="shrink-0 font-mono text-xs text-text-tertiary">{step.time}</span>
      </div>
    </div>
  )
}

function AttachmentIcon() {
  return (
    <svg viewBox="0 0 16 16" width="11" height="11" fill="none" aria-hidden="true">
      <path
        d="M11 4.5v6a3 3 0 1 1-6 0v-7a2 2 0 1 1 4 0v6.5a1 1 0 1 1-2 0V5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
      <path
        d="M4 1.5h5.5L13 5v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M9.5 1.5V5H13" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path
        d="M8 12.5V8m0 0 2 2M8 8 6 10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
