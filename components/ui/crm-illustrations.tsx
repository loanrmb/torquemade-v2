/**
 * Custom inline SVG illustrations for /services/crm (build-vs-buy page).
 * True SVGs, strictly monochrome: every stroke/fill inherits `currentColor`,
 * with the root <svg> setting color from the design-system tokens
 * (hsl(var(--text-primary))). Secondary tones use stroke/fill-opacity so the
 * illustrations stay legible in both light and dark token sets. No hardcoded
 * hex, no color, no words baked in (captions live in lib/strings.ts).
 *
 * Scroll-triggered reveals below use the site's Framer Motion conventions
 * (lib/motion.ts) — `initial={reducedMotion ? false : ...}` so the reduced
 * tree mounts already in its settled `whileInView` state (no subscription,
 * no animation), matching the bar-draw in app/tanklogic/_mocks.tsx.
 */

'use client'

import { motion } from 'framer-motion'
import { EASE_OUT, EASE_OUT_EXPO, springSnappy, useReducedMotionSafe } from '@/lib/motion'

const LINE_DRAW_DURATION = 1.1
const MARKER_DELAY = LINE_DRAW_DURATION
const MARKER_DURATION = 0.35

/* Break-even over time: a subscription cost that starts near zero and keeps
   accelerating upward (curve + soft area), versus a custom build paid once
   (flat threshold line). The marked point is where the running subscription
   cost overtakes the one-time build cost. */
export function CostCurveIllustration() {
  const reducedMotion = useReducedMotionSafe()
  const gradId = 'crm-cost-grad'
  const clipId = 'crm-cost-reveal'
  const curve = 'M70 250 C210 246 320 186 442 68'
  return (
    <svg
      viewBox="0 0 480 300"
      role="img"
      aria-hidden="true"
      className="h-auto w-full"
      style={{ color: 'hsl(var(--text-primary))' }}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.16" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        {/* Left-to-right reveal for the two comparison lines below. A clipped
            rect scaling on X (not stroke-dasharray/pathLength) — the custom
            line keeps its "5 6" dash pattern, which Framer's pathLength would
            otherwise flatten into a single solid dash. */}
        <clipPath id={clipId}>
          <motion.rect
            x="66"
            y="58"
            width="392"
            height="200"
            style={{ transformOrigin: '66px 0px' }}
            initial={reducedMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: LINE_DRAW_DURATION, ease: EASE_OUT }}
          />
        </clipPath>
      </defs>

      {/* subscription area */}
      <path d={`${curve} L442 250 Z`} fill={`url(#${gradId})`} />

      {/* baseline */}
      <path d="M70 250 L452 250" fill="none" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1.5" strokeLinecap="round" />

      {/* year ticks */}
      {[1, 2, 3, 4, 5].map((yr) => {
        const x = 70 + yr * 74
        return (
          <g key={yr}>
            <path d={`M${x} 250 L${x} 256`} stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.5" />
            <text x={x} y={273} textAnchor="middle" fontSize="12" fill="currentColor" fillOpacity="0.42">
              {yr}
            </text>
          </g>
        )
      })}

      {/* the two comparison lines draw left to right together */}
      <g clipPath={`url(#${clipId})`}>
        <path d="M70 198 L442 198" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="2" strokeDasharray="5 6" strokeLinecap="round" />
        <circle cx="70" cy="198" r="4.5" fill="currentColor" />
        <path d={curve} fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" />
      </g>

      {/* break-even marker — settles in after the lines finish drawing */}
      <motion.path
        d="M262 198 L262 250"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1.5"
        strokeDasharray="3 4"
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: MARKER_DURATION, delay: MARKER_DELAY, ease: EASE_OUT }}
      />
      <motion.circle
        cx="262"
        cy="198"
        r="6.5"
        fill="hsl(var(--bg-secondary))"
        stroke="currentColor"
        strokeWidth="2.5"
        style={{ transformOrigin: '262px 198px' }}
        initial={reducedMotion ? false : { opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: MARKER_DURATION, delay: MARKER_DELAY + 0.08, ease: EASE_OUT }}
      />
    </svg>
  )
}

const OWNERSHIP_BOX_STAGGER = 0.12
const OWNERSHIP_BOX_DURATION = 0.5
const OWNERSHIP_BADGE_DELAY = OWNERSHIP_BOX_STAGGER + OWNERSHIP_BOX_DURATION

/* Ownership: a rented database lives on someone else's infrastructure behind a
   lock the vendor controls (dashed boundary, left); an owned database lives on
   your own infrastructure with the key in hand and verified (solid, right). */
export function OwnershipIllustration() {
  const reducedMotion = useReducedMotionSafe()
  return (
    <svg
      viewBox="0 0 460 240"
      role="img"
      aria-hidden="true"
      className="h-auto w-full"
      style={{ color: 'hsl(var(--text-primary))' }}
    >
      {/* LEFT — rented */}
      <motion.g
        initial={reducedMotion ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 0.85, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: OWNERSHIP_BOX_DURATION, ease: EASE_OUT_EXPO }}
      >
        <rect x="34" y="46" width="158" height="152" rx="18" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="8 7" />
        <Padlock cx={113} cy={82} />
        <Database cx={113} top={132} />
      </motion.g>

      {/* RIGHT — owned */}
      <motion.g
        initial={reducedMotion ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: OWNERSHIP_BOX_DURATION, delay: OWNERSHIP_BOX_STAGGER, ease: EASE_OUT_EXPO }}
      >
        <rect x="268" y="46" width="158" height="152" rx="18" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <Database cx={347} top={94} />
        <Key cx={347} cy={168} />
      </motion.g>

      {/* verified badge — pops in after the "owned" box settles, drawing the eye to it as the correct choice */}
      <motion.g
        style={{ transformOrigin: '412px 58px' }}
        initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ ...springSnappy, delay: OWNERSHIP_BADGE_DELAY }}
      >
        <circle cx="412" cy="58" r="15" fill="currentColor" />
        <path d="M405 58 l5 5 l9 -10" fill="none" stroke="hsl(var(--bg-secondary))" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
    </svg>
  )
}

function Database({ cx, top }: { cx: number; top: number }) {
  const rx = 30
  const ry = 10
  const h = 46
  return (
    <g fill="none" stroke="currentColor" strokeWidth="2.25">
      <path d={`M${cx - rx} ${top} L${cx - rx} ${top + h} A${rx} ${ry} 0 0 0 ${cx + rx} ${top + h} L${cx + rx} ${top}`} />
      <ellipse cx={cx} cy={top} rx={rx} ry={ry} />
      <path d={`M${cx - rx} ${top + h / 2} A${rx} ${ry} 0 0 0 ${cx + rx} ${top + h / 2}`} strokeOpacity="0.4" />
    </g>
  )
}

function Padlock({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
      {/* shackle */}
      <path d={`M${cx - 9} ${cy} v-7 a9 9 0 0 1 18 0 v7`} />
      {/* body */}
      <rect x={cx - 15} y={cy} width="30" height="22" rx="4" />
      {/* keyhole */}
      <circle cx={cx} cy={cy + 9} r="2.4" fill="currentColor" stroke="none" />
      <path d={`M${cx} ${cy + 11} v4`} />
    </g>
  )
}

function Key({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g stroke="currentColor" strokeWidth="2.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* bow */}
      <circle cx={cx - 16} cy={cy} r="7.5" />
      <circle cx={cx - 16} cy={cy} r="2.6" fill="currentColor" stroke="none" />
      {/* shaft + teeth */}
      <path d={`M${cx - 8.5} ${cy} L${cx + 18} ${cy} M${cx + 9} ${cy} v6 M${cx + 16} ${cy} v6`} />
    </g>
  )
}

/* Five-phase build sequence: a single flowing path threading five numbered
   nodes, each carrying a distinct glyph, laid out as a real progression rather
   than an icon-arrow-icon row. */
const PHASE_NODES = [
  { x: 100, y: 158 },
  { x: 300, y: 96 },
  { x: 500, y: 158 },
  { x: 700, y: 96 },
  { x: 900, y: 158 },
]

const BUILD_LINE_DURATION = 1.1
const BUILD_NODE_BASE_DELAY = 0.16
const BUILD_NODE_STAGGER = 0.18
const BUILD_NODE_DURATION = 0.4

export function BuildFlowDiagram() {
  const reducedMotion = useReducedMotionSafe()
  return (
    <svg
      viewBox="0 0 1000 240"
      role="img"
      aria-hidden="true"
      className="h-auto w-full"
      style={{ color: 'hsl(var(--text-primary))' }}
    >
      {/* connecting flow — draws left to right (no dasharray on this path, so
          Framer's pathLength stroke-draw applies cleanly) */}
      <motion.path
        d="M100 158 C 180 158, 200 96, 300 96 S 420 158, 500 158 S 620 96, 700 96 S 820 158, 900 158"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.28"
        strokeWidth="2"
        strokeLinecap="round"
        initial={reducedMotion ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: BUILD_LINE_DURATION, ease: EASE_OUT }}
      />
      {PHASE_NODES.map((n, i) => (
        <motion.g
          key={i}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: BUILD_NODE_DURATION,
            delay: BUILD_NODE_BASE_DELAY + i * BUILD_NODE_STAGGER,
            ease: EASE_OUT,
          }}
        >
          <circle cx={n.x} cy={n.y} r="38" fill="hsl(var(--bg-primary))" stroke="currentColor" strokeWidth="2" />
          <g transform={`translate(${n.x}, ${n.y})`} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <PhaseGlyph index={i} />
          </g>
          {/* number badge */}
          <circle cx={n.x + 27} cy={n.y - 27} r="13" fill="currentColor" />
          <text
            x={n.x + 27}
            y={n.y - 27}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="12"
            fontWeight="600"
            fill="hsl(var(--bg-primary))"
          >
            {i + 1}
          </text>
        </motion.g>
      ))}
    </svg>
  )
}

function PhaseGlyph({ index }: { index: number }) {
  switch (index) {
    case 0: // Discovery — magnifier
      return (
        <>
          <circle cx="-4" cy="-4" r="10" />
          <path d="M4 4 L12 12" />
        </>
      )
    case 1: // Architecture — grid
      return (
        <>
          <rect x="-12" y="-12" width="10" height="10" rx="1.5" />
          <rect x="2" y="-12" width="10" height="10" rx="1.5" />
          <rect x="-12" y="2" width="10" height="10" rx="1.5" />
          <rect x="2" y="2" width="10" height="10" rx="1.5" />
        </>
      )
    case 2: // Build — stacked layers
      return (
        <>
          <path d="M0 -13 L13 -6 L0 1 L-13 -6 Z" />
          <path d="M-13 1 L0 8 L13 1" />
          <path d="M-13 8 L0 15 L13 8" strokeOpacity="0.5" />
        </>
      )
    case 3: // Handover — open box with outgoing arrow
      return (
        <>
          <path d="M-13 2 L-13 12 L13 12 L13 2" />
          <path d="M0 -13 L0 2 M-6 -6 L0 -13 L6 -6" />
        </>
      )
    case 4: // Evolution — upward trend
      return (
        <>
          <path d="M-13 8 L-3 -2 L3 4 L13 -8" />
          <path d="M6 -8 L13 -8 L13 -1" />
        </>
      )
    default:
      return null
  }
}
