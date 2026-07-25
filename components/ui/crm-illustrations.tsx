/**
 * Custom inline SVG illustrations for /services/crm (build-vs-buy page).
 * True SVGs, strictly monochrome: every stroke/fill inherits `currentColor`,
 * with the root <svg> setting color from the design-system tokens
 * (hsl(var(--text-primary))). Secondary tones use stroke/fill-opacity so the
 * illustrations stay legible in both light and dark token sets. No hardcoded
 * hex, no color, and no words baked in — every label is passed in as a prop
 * from lib/strings.ts so the illustrations stay bilingual.
 *
 * ── Scroll trigger ────────────────────────────────────────────────────────
 * The viewport observer is declared ONCE, on the <motion.svg> root, and every
 * animated child is driven by `variants`.
 *
 * This matters: Framer's `whileInView` puts an IntersectionObserver on the very
 * node it is declared on, and SVG *children* cannot be observed reliably —
 * a <g> has no CSS layout box, and anything inside <defs>/<clipPath> is never
 * rendered at all, so the threshold reads as satisfied at mount and the
 * animation plays on page load instead of on scroll. The <svg> root, by
 * contrast, is a replaced element with a real box. Variants then reach the
 * children through React context (not the DOM tree), so even the clip-path
 * rect inside <defs> stays in lockstep without its own observer.
 *
 * ── Reduced motion ────────────────────────────────────────────────────────
 * Under prefers-reduced-motion the root swaps the scroll trigger for a plain
 * `initial={false} animate="visible"` — every child resolves to its settled
 * state on mount with no transition and no observer. Fully static, not a
 * softened fade. (Same "branch before wiring" rule as lib/motion.ts.)
 */

'use client'

import { motion, type Variants } from 'framer-motion'
import { EASE_OUT, springSnappy, springSoft, useReducedMotionSafe } from '@/lib/motion'

/** Trigger once, as soon as ~a third of the illustration has entered view. */
const VIEWPORT = { once: true, amount: 0.3 } as const

type RevealRootProps = {
  initial: 'hidden' | false
  animate?: 'visible'
  whileInView?: 'visible'
  viewport?: typeof VIEWPORT
}

/* `fill-box` scopes the transform origin to the element's own geometry, so a
   scaled element grows about its own centre rather than the SVG viewBox origin.
   No explicit origin needed with this — Framer's default (50% 50%) is already
   the centre. Anything off-centre must use originX/originY, NOT the CSS
   `transformOrigin`, which Framer overwrites. */
const groupOrigin = { transformBox: 'fill-box' } as const

function revealRoot(reducedMotion: boolean): RevealRootProps {
  // `initial={false}` means "mount straight at the animate target, don't play
  // the enter animation" — so the reduced tree is settled and static.
  //
  // It must be an explicit `animate="visible"`, not merely the absence of
  // initial/whileInView: useReducedMotion() returns null on the first render
  // (to stay SSR-safe) and only flips to true after mount, so the children
  // have already mounted into `hidden`. With no target to resolve to they
  // would stay hidden forever and the illustrations would render blank.
  if (reducedMotion) return { initial: false, animate: 'visible' }
  return { initial: 'hidden', whileInView: 'visible', viewport: VIEWPORT }
}

/* ══════════════════════════════════════════════════════════════════════════
   COST CURVE — cost (y) over years (x)
   ══════════════════════════════════════════════════════════════════════════
   A subscription cost that starts near zero and keeps accelerating upward
   (curve + soft area), versus a custom build paid once (flat threshold line).
   The marked point is where the running subscription cost overtakes the
   one-time build cost.

   Geometry: plot area spans x 76→446 (year 0 → year 5) and y 246→58.
   The break-even x=282 is the computed intersection of the cubic with y=190.
*/
const PLOT_LEFT = 76
const PLOT_BASELINE = 246
const TICK_STEP = 70
const CUSTOM_LINE_Y = 190
const BREAK_EVEN_X = 282

const COST_CURVE = 'M76 246 C216 242, 326 182, 426 72'

const LINE_DRAW_DURATION = 1.1
const MARKER_DELAY = LINE_DRAW_DURATION
const MARKER_DURATION = 0.35

/* Left-to-right sweep, pinned to the rect's own left edge.
   `transformBox: 'fill-box'` scopes the origin to the rect's geometry, and the
   origin itself MUST be set with Framer's `originX`/`originY` — Framer builds
   `transform-origin` from those and overwrites any raw CSS `transformOrigin`
   with its 50% 50% default, which is what made the sweep expand outward from
   the middle of the chart instead of drawing from year 0. */
const sweepVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: LINE_DRAW_DURATION, ease: EASE_OUT } },
}

const breakEvenLineVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: MARKER_DURATION, delay: MARKER_DELAY, ease: EASE_OUT },
  },
}

const breakEvenDotVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...springSnappy, delay: MARKER_DELAY + 0.06 },
  },
}

export function CostCurveIllustration({
  axisCost,
  axisYears,
}: {
  axisCost: string
  axisYears: string
}) {
  const reducedMotion = useReducedMotionSafe()
  const gradId = 'crm-cost-grad'
  const clipId = 'crm-cost-reveal'

  return (
    <motion.svg
      viewBox="0 0 480 308"
      role="img"
      aria-hidden="true"
      className="h-auto w-full"
      style={{ color: 'hsl(var(--text-primary))' }}
      {...revealRoot(reducedMotion)}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.16" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <clipPath id={clipId}>
          <motion.rect
            x="70"
            y="50"
            width="384"
            height="204"
            style={{ transformBox: 'fill-box', originX: 0, originY: 0.5 }}
            variants={sweepVariants}
          />
        </clipPath>
      </defs>

      {/* ── axes ───────────────────────────────────────────────────────── */}
      {/* y axis */}
      <path
        d={`M${PLOT_LEFT} 58 L${PLOT_LEFT} ${PLOT_BASELINE}`}
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* x axis */}
      <path
        d={`M${PLOT_LEFT} ${PLOT_BASELINE} L446 ${PLOT_BASELINE}`}
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* y axis label — reads bottom-to-top alongside the axis */}
      <text
        transform="rotate(-90 26 152)"
        x="26"
        y="152"
        textAnchor="middle"
        fontSize="13"
        fontWeight="600"
        letterSpacing="0.08em"
        fill="currentColor"
        fillOpacity="0.5"
      >
        {axisCost}
      </text>

      {/* year ticks */}
      {[1, 2, 3, 4, 5].map((yr) => {
        const x = PLOT_LEFT + yr * TICK_STEP
        return (
          <g key={yr}>
            <path
              d={`M${x} ${PLOT_BASELINE} L${x} ${PLOT_BASELINE + 6}`}
              stroke="currentColor"
              strokeOpacity="0.28"
              strokeWidth="1.5"
            />
            <text
              x={x}
              y={PLOT_BASELINE + 22}
              textAnchor="middle"
              fontSize="12"
              fill="currentColor"
              fillOpacity="0.42"
            >
              {yr}
            </text>
          </g>
        )
      })}

      {/* x axis label */}
      <text
        x="261"
        y={PLOT_BASELINE + 48}
        textAnchor="middle"
        fontSize="13"
        fontWeight="600"
        letterSpacing="0.08em"
        fill="currentColor"
        fillOpacity="0.5"
      >
        {axisYears}
      </text>

      {/* ── data, revealed left to right from year 0 ───────────────────── */}
      <g clipPath={`url(#${clipId})`}>
        {/* subscription area */}
        <path d={`${COST_CURVE} L426 ${PLOT_BASELINE} Z`} fill={`url(#${gradId})`} />
        {/* custom build: flat one-time threshold */}
        <path
          d={`M${PLOT_LEFT} ${CUSTOM_LINE_Y} L426 ${CUSTOM_LINE_Y}`}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="2"
          strokeDasharray="5 6"
          strokeLinecap="round"
        />
        <circle cx={PLOT_LEFT} cy={CUSTOM_LINE_Y} r="4.5" fill="currentColor" />
        {/* subscription curve */}
        <path
          d={COST_CURVE}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.75"
          strokeLinecap="round"
        />
      </g>

      {/* break-even: where the running subscription cost passes the build cost */}
      <motion.path
        d={`M${BREAK_EVEN_X} ${CUSTOM_LINE_Y} L${BREAK_EVEN_X} ${PLOT_BASELINE}`}
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1.5"
        strokeDasharray="3 4"
        variants={breakEvenLineVariants}
      />
      <motion.circle
        cx={BREAK_EVEN_X}
        cy={CUSTOM_LINE_Y}
        r="6.5"
        fill="hsl(var(--bg-secondary))"
        stroke="currentColor"
        strokeWidth="2.5"
        style={groupOrigin}
        variants={breakEvenDotVariants}
      />
    </motion.svg>
  )
}

/* ══════════════════════════════════════════════════════════════════════════
   OWNERSHIP — renting access vs owning the tool
   ══════════════════════════════════════════════════════════════════════════
   A rented database lives on someone else's infrastructure behind a lock the
   vendor controls (dashed boundary, left); an owned database lives on your own
   infrastructure with the key in hand and verified (solid, right).
*/
const OWN_STAGGER = 0.12
const OWN_CAPTION_DELAY = 0.34
const OWN_BADGE_DELAY = 0.74

function boxVariants(settledOpacity: number, delay: number): Variants {
  return {
    hidden: { opacity: 0, scale: 0.92, y: 12 },
    visible: {
      opacity: settledOpacity,
      scale: 1,
      y: 0,
      transition: { ...springSoft, delay },
    },
  }
}

function captionVariants(delay: number): Variants {
  return {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay, ease: EASE_OUT } },
  }
}

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { ...springSnappy, delay: OWN_BADGE_DELAY } },
}

export function OwnershipIllustration({
  rentedLabel,
  rentedSub,
  ownedLabel,
  ownedSub,
}: {
  rentedLabel: string
  rentedSub: string
  ownedLabel: string
  ownedSub: string
}) {
  const reducedMotion = useReducedMotionSafe()

  return (
    <motion.svg
      viewBox="0 0 460 262"
      role="img"
      aria-hidden="true"
      className="h-auto w-full"
      style={{ color: 'hsl(var(--text-primary))' }}
      {...revealRoot(reducedMotion)}
    >
      {/* LEFT — rented */}
      <motion.g opacity={0.85} style={groupOrigin} variants={boxVariants(0.85, 0)}>
        <rect
          x="34"
          y="46"
          width="158"
          height="152"
          rx="18"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeDasharray="8 7"
        />
        <Padlock cx={113} cy={82} />
        <Database cx={113} top={132} />
      </motion.g>

      {/* RIGHT — owned */}
      <motion.g style={groupOrigin} variants={boxVariants(1, OWN_STAGGER)}>
        <rect
          x="268"
          y="46"
          width="158"
          height="152"
          rx="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <Database cx={347} top={94} />
        <Key cx={347} cy={168} />
      </motion.g>

      {/* captions */}
      <Caption
        cx={113}
        label={rentedLabel}
        sub={rentedSub}
        variants={captionVariants(OWN_CAPTION_DELAY)}
      />
      <Caption
        cx={347}
        label={ownedLabel}
        sub={ownedSub}
        variants={captionVariants(OWN_CAPTION_DELAY + OWN_STAGGER)}
      />

      {/* verified badge — lands last, marking the owned side as the answer */}
      <motion.g style={groupOrigin} variants={badgeVariants}>
        <circle cx="412" cy="58" r="15" fill="currentColor" />
        <path
          d="M405 58 l5 5 l9 -10"
          fill="none"
          stroke="hsl(var(--bg-secondary))"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </motion.svg>
  )
}

function Caption({
  cx,
  label,
  sub,
  variants,
}: {
  cx: number
  label: string
  sub: string
  variants: Variants
}) {
  return (
    <motion.g variants={variants}>
      <text
        x={cx}
        y={226}
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        fill="hsl(var(--text-secondary))"
      >
        {label}
      </text>
      <text x={cx} y={246} textAnchor="middle" fontSize="13" fill="hsl(var(--text-tertiary))">
        {sub}
      </text>
    </motion.g>
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

/* ══════════════════════════════════════════════════════════════════════════
   BUILD FLOW — five-phase sequence
   ══════════════════════════════════════════════════════════════════════════
   A single flowing path threading five numbered nodes, each carrying a
   distinct glyph, laid out as a real progression rather than an
   icon-arrow-icon row.
*/
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

/* `pathLength` is Framer's stroke-dasharray/stroke-dashoffset draw — safe on
   this path because it carries no dasharray of its own to clobber. */
const flowLineVariants: Variants = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1, transition: { duration: BUILD_LINE_DURATION, ease: EASE_OUT } },
}

function nodeVariants(index: number): Variants {
  return {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: BUILD_NODE_DURATION,
        delay: BUILD_NODE_BASE_DELAY + index * BUILD_NODE_STAGGER,
        ease: EASE_OUT,
      },
    },
  }
}

export function BuildFlowDiagram() {
  const reducedMotion = useReducedMotionSafe()

  return (
    <motion.svg
      viewBox="0 0 1000 240"
      role="img"
      aria-hidden="true"
      className="h-auto w-full"
      style={{ color: 'hsl(var(--text-primary))' }}
      {...revealRoot(reducedMotion)}
    >
      {/* connecting flow — draws left to right, the nodes follow it */}
      <motion.path
        d="M100 158 C 180 158, 200 96, 300 96 S 420 158, 500 158 S 620 96, 700 96 S 820 158, 900 158"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.28"
        strokeWidth="2"
        strokeLinecap="round"
        variants={flowLineVariants}
      />
      {PHASE_NODES.map((n, i) => (
        <motion.g key={i} style={groupOrigin} variants={nodeVariants(i)}>
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
    </motion.svg>
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
