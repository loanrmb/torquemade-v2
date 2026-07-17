'use client'

/**
 * SituationDiagnostic — "pick your situation" selector for /services/erp-ecommerce.
 * Desktop: sticky rail (numbered situations) + detail panel, Linear.app-style
 * settings-nav pattern. Mobile: single-open accordion, same data, same component.
 */

import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useReducedMotionSafe } from '@/lib/motion'

interface Situation {
  number: string
  question: string
  answerTitle: string
  body: string
  delivery?: readonly string[]
  linkHref?: string
  linkLabel?: string
}

interface SituationDiagnosticProps {
  situations: readonly Situation[]
}

const chipContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
} as const

function getChipItemVariants(reducedMotion: boolean) {
  return {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' as const } },
  }
}

function IconCheck() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className="h-3 w-3 shrink-0"
      aria-hidden="true"
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-1 shrink-0 transition-transform duration-200 ease-out"
      style={{
        color: 'hsl(var(--text-tertiary))',
        transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
      }}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function SituationPanel({ situation }: { situation: Situation }) {
  const reducedMotion = useReducedMotionSafe()
  const chipItemVariants = getChipItemVariants(reducedMotion)
  return (
    <div className="flex flex-col gap-5">
      <p
        className="text-caption font-semibold tracking-widest uppercase"
        style={{ color: 'hsl(var(--text-primary))' }}
      >
        {situation.answerTitle}
      </p>
      <p
        className="text-body leading-relaxed"
        style={{ color: 'hsl(var(--text-secondary))' }}
      >
        {situation.body}
      </p>
      {situation.delivery && (
        <motion.div
          className="flex flex-wrap gap-2"
          variants={chipContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {situation.delivery.map((item) => (
            <motion.span
              key={item}
              variants={chipItemVariants}
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm"
              style={{
                border: '1px solid hsl(var(--border-subtle))',
                color: 'hsl(var(--text-primary))',
              }}
            >
              <IconCheck />
              {item}
            </motion.span>
          ))}
        </motion.div>
      )}
      {situation.linkHref && situation.linkLabel && (
        <Link
          href={situation.linkHref}
          className="inline-flex w-fit items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-150 hover:-translate-y-0.5 hover:opacity-70"
          style={{
            border: '1px solid hsl(var(--border-subtle))',
            color: 'hsl(var(--text-primary))',
          }}
        >
          {situation.linkLabel} →
        </Link>
      )}
    </div>
  )
}

export function SituationDiagnostic({ situations }: SituationDiagnosticProps) {
  const [active, setActive] = useState(0)
  const current = situations[active] ?? situations[0]
  const reducedMotion = useReducedMotionSafe()

  return (
    <div className="mx-auto max-w-5xl">
      {/* DESKTOP: rail + detail panel */}
      <div
        className="hidden overflow-hidden rounded-3xl min-1024:grid min-1024:grid-cols-[minmax(0,300px)_1fr]"
        style={{
          border: '1px solid hsl(var(--border-subtle))',
          background: 'hsl(var(--bg-primary))',
        }}
      >
        <nav aria-label="Situations" style={{ borderRight: '1px solid hsl(var(--border-subtle))' }}>
          {situations.map((situation, i) => {
            const isActive = active === i
            return (
              <motion.button
                key={situation.number}
                type="button"
                onClick={() => setActive(i)}
                aria-current={isActive || undefined}
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="flex w-full flex-col gap-2 p-6 text-left transition-colors duration-150"
                style={{
                  borderTop: i === 0 ? 'none' : '1px solid hsl(var(--border-subtle))',
                  borderLeft: isActive ? '2px solid hsl(var(--text-primary))' : '2px solid transparent',
                  background: isActive ? 'hsl(var(--bg-secondary))' : 'transparent',
                }}
              >
                <span
                  className="font-mono text-caption font-semibold tracking-widest"
                  style={{ color: isActive ? 'hsl(var(--text-primary))' : 'hsl(var(--text-tertiary))' }}
                >
                  {situation.number}
                </span>
                <span
                  className="text-sm font-semibold leading-snug"
                  style={{ color: isActive ? 'hsl(var(--text-primary))' : 'hsl(var(--text-secondary))' }}
                >
                  {situation.question}
                </span>
              </motion.button>
            )
          })}
        </nav>
        <div className="relative overflow-hidden p-10 min-1024:p-12">
          <motion.div
            key={current.number}
            initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <SituationPanel situation={current} />
          </motion.div>
        </div>
      </div>

      {/* MOBILE / TABLET: single-open accordion */}
      <div
        className="overflow-hidden rounded-3xl min-1024:hidden"
        style={{
          border: '1px solid hsl(var(--border-subtle))',
          background: 'hsl(var(--bg-primary))',
        }}
      >
        {situations.map((situation, i) => {
          const isOpen = active === i
          return (
            <div
              key={situation.number}
              style={{ borderTop: i === 0 ? 'none' : '1px solid hsl(var(--border-subtle))' }}
            >
              <motion.button
                type="button"
                onClick={() => setActive(i)}
                aria-expanded={isOpen}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 p-6 text-left transition-colors duration-150 hover:bg-[hsl(var(--bg-secondary))]"
              >
                <span
                  className="pt-0.5 font-mono text-caption font-semibold tracking-widest"
                  style={{ color: 'hsl(var(--text-tertiary))' }}
                >
                  {situation.number}
                </span>
                <span
                  className="text-body font-semibold leading-snug"
                  style={{ color: 'hsl(var(--text-primary))' }}
                >
                  {situation.question}
                </span>
                <ChevronIcon isOpen={isOpen} />
              </motion.button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-7">
                      <SituationPanel situation={situation} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
