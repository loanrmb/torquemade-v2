/**
 * Custom inline SVG illustrations for /services/crm (build-vs-buy page).
 * True SVGs, strictly monochrome: every stroke/fill inherits `currentColor`,
 * with the root <svg> setting color from the design-system tokens
 * (hsl(var(--text-primary))). Secondary tones use stroke/fill-opacity so the
 * illustrations stay legible in both light and dark token sets. No hardcoded
 * hex, no color, no words baked in (captions live in lib/strings.ts).
 */

/* Cumulative cost over time: a subscription that keeps climbing (stepped area)
   versus a custom build paid once (flat baseline with a single upfront dot). */
export function CostCurveIllustration() {
  return (
    <svg
      viewBox="0 0 460 300"
      role="img"
      aria-hidden="true"
      className="h-auto w-full"
      style={{ color: 'hsl(var(--text-primary))' }}
    >
      {/* axes */}
      <path
        d="M60 44 L60 240 L432 240"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* subscription: accumulating area */}
      <path
        d="M60 240 L132 240 L132 206 L204 206 L204 168 L276 168 L276 128 L348 128 L348 86 L420 86 L420 240 Z"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M60 240 L132 240 L132 206 L204 206 L204 168 L276 168 L276 128 L348 128 L348 86 L420 86"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* custom build: flat one-time cost */}
      <path
        d="M60 214 L420 214"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="2 7"
        strokeLinecap="round"
      />
      <circle cx="60" cy="214" r="5" fill="currentColor" />
    </svg>
  )
}

/* Ownership: a rented database sits inside someone else's infrastructure with
   the key on a severable leash (left); an owned database sits inside your own
   infrastructure, key held, verified (right). */
export function OwnershipIllustration() {
  return (
    <svg
      viewBox="0 0 460 260"
      role="img"
      aria-hidden="true"
      className="h-auto w-full"
      style={{ color: 'hsl(var(--text-primary))' }}
    >
      {/* LEFT — rented */}
      <rect
        x="26"
        y="66"
        width="170"
        height="150"
        rx="14"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeDasharray="6 6"
      />
      <Database cx={111} top={112} />
      {/* severable leash + key outside the box */}
      <path
        d="M111 96 C 111 60, 70 58, 60 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 5"
        strokeOpacity="0.55"
      />
      <path
        d="M74 34 l14 14 M81 41 l-9 9 a7 7 0 1 1 -10 -10 a7 7 0 0 1 10 0 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* cut mark on the leash */}
      <path
        d="M92 66 l12 12 M104 66 l-12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* RIGHT — owned */}
      <rect
        x="264"
        y="66"
        width="170"
        height="150"
        rx="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <Database cx={349} top={112} />
      {/* verified badge */}
      <circle cx="410" cy="78" r="16" fill="currentColor" />
      <path
        d="M403 78 l5 5 l9 -10"
        fill="none"
        stroke="hsl(var(--bg-primary))"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Database({ cx, top }: { cx: number; top: number }) {
  const rx = 34
  const ry = 11
  const h = 60
  return (
    <g fill="none" stroke="currentColor" strokeWidth="2.25">
      <path
        d={`M${cx - rx} ${top} L${cx - rx} ${top + h} A${rx} ${ry} 0 0 0 ${cx + rx} ${top + h} L${cx + rx} ${top}`}
      />
      <ellipse cx={cx} cy={top} rx={rx} ry={ry} />
      <path d={`M${cx - rx} ${top + h / 2} A${rx} ${ry} 0 0 0 ${cx + rx} ${top + h / 2}`} strokeOpacity="0.4" />
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

export function BuildFlowDiagram() {
  return (
    <svg
      viewBox="0 0 1000 240"
      role="img"
      aria-hidden="true"
      className="h-auto w-full"
      style={{ color: 'hsl(var(--text-primary))' }}
    >
      {/* connecting flow */}
      <path
        d="M100 158 C 180 158, 200 96, 300 96 S 420 158, 500 158 S 620 96, 700 96 S 820 158, 900 158"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.28"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {PHASE_NODES.map((n, i) => (
        <g key={i}>
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
        </g>
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
