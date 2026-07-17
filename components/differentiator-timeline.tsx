'use client'

/**
 * DifferentiatorTimeline — About page "Ce qui nous différencie" section.
 * ─────────────────────────────────────────────────────────────────────
 * Vertical scroll-drawn timeline: a connecting line grows down the section
 * as the user scrolls through it, numbered cards (01–07) revealing in a
 * staggered fade as each enters the viewport. Alternates left/right of the
 * line on desktop, single column with the line on the left on mobile.
 *
 * Distinct from every other scroll pattern on the site (ShaderBackground,
 * WaveBackground, ContainerScroll 3D tilt, SeoFeatureCarousel autoplay).
 *
 * Reduced motion: renders a static tree with no scroll subscription and no
 * stagger — the line is fully drawn and every card is already visible.
 */

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotionSafe, EASE_OUT_EXPO } from '@/lib/motion'

interface DifferentiatorItem {
  title: string
  text: string
}

interface DifferentiatorTimelineProps {
  items: readonly DifferentiatorItem[]
  icons: readonly string[]
}

export function DifferentiatorTimeline({ items, icons }: DifferentiatorTimelineProps) {
  const reducedMotion = useReducedMotionSafe()

  if (reducedMotion) {
    return <StaticTimeline items={items} icons={icons} />
  }

  return <AnimatedTimeline items={items} icons={icons} />
}

function StaticTimeline({ items, icons }: DifferentiatorTimelineProps) {
  return (
    <div className="relative">
      <div
        className="absolute left-5 top-0 bottom-0 w-0.5 min-1024:left-1/2"
        style={{ background: 'hsl(var(--text-primary))' }}
        aria-hidden="true"
      />
      <div className="flex flex-col gap-16 min-720:gap-20">
        {items.map((item, i) => (
          <TimelineCard key={i} index={i} item={item} icon={icons[i]} static />
        ))}
      </div>
    </div>
  )
}

function AnimatedTimeline({ items, icons }: DifferentiatorTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.75', 'end 0.6'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={containerRef} className="relative">
      <div
        className="absolute left-5 top-0 bottom-0 w-0.5 min-1024:left-1/2"
        style={{ background: 'hsl(var(--border-subtle))' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute left-5 top-0 w-0.5 min-1024:left-1/2"
        style={{
          background: 'hsl(var(--text-primary))',
          height: '100%',
          scaleY: lineScale,
          transformOrigin: 'top',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
      <div className="flex flex-col gap-16 min-720:gap-20">
        {items.map((item, i) => (
          <TimelineCard key={i} index={i} item={item} icon={icons[i]} />
        ))}
      </div>
    </div>
  )
}

function TimelineCard({
  index,
  item,
  icon,
  static: isStatic,
}: {
  index: number
  item: DifferentiatorItem
  icon: string
  static?: boolean
}) {
  const num = String(index + 1).padStart(2, '0')
  const alignRight = index % 2 === 1

  const content = (
    <>
      <div
        className="absolute left-5 top-0 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full text-sm font-semibold min-1024:left-1/2"
        style={{
          background: 'hsl(var(--bg-primary))',
          border: '1px solid hsl(var(--text-primary))',
          color: 'hsl(var(--text-primary))',
        }}
      >
        {num}
      </div>
      <div
        className={`pl-16 min-1024:w-[calc(50%-3rem)] min-1024:pl-0 ${
          alignRight ? 'min-1024:ml-auto min-1024:pl-16' : 'min-1024:mr-auto min-1024:pr-16'
        }`}
      >
        <div className="mb-4 flex items-center gap-4">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-xl"
            style={{ background: 'hsl(var(--bg-secondary))' }}
          >
            {icon}
          </div>
          <h3
            className="text-xl font-semibold tracking-tight"
            style={{ color: 'hsl(var(--text-primary))' }}
          >
            {item.title}
          </h3>
        </div>
        <p
          className="text-base leading-relaxed"
          style={{ color: 'hsl(var(--text-secondary))' }}
        >
          {item.text}
        </p>
      </div>
    </>
  )

  if (isStatic) {
    return <div className="relative">{content}</div>
  }

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: Math.min(index * 0.05, 0.25) }}
    >
      {content}
    </motion.div>
  )
}
