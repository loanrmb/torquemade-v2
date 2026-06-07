'use client'

/**
 * CrmDashboardPreview
 * ───────────────────────────────────────────────────────────────
 * Self-contained animated stock-management CRM dashboard mock.
 * Desktop only — mobile keeps the static PNG in services-section.tsx.
 *
 * Animations:
 *  - Sidebar auto-navigates Dashboard → Produits → Mouvements (4 500 ms)
 *    using Framer Motion layoutId="crm-activeNav" (spring pill slide)
 *  - KPI count-up: useMotionValue + animate() on first inView
 *  - SVG line chart: pathLength draw-in on inView (1 800 ms linear)
 *  - SVG donut segments: strokeDasharray fill-in with stagger
 *  - Live movement feed: new item prepended every 5 000 ms
 *  - Nav cycle + feed timers pause when off-screen (once: false)
 *  - prefers-reduced-motion: all animations skipped
 *
 * Styling: hardcoded white-on-dark colours consistent with the dark stage
 * that hosts this component (md:bg-[#080808] in ServicesSection).
 * Hardcoded chart colours are intentional (data differentiation).
 * All UI text is inline — this is a UI mock, not an i18n page.
 *
 * Emil §6.A compliance: only transform + opacity animated.
 * Vercel best-practice: all sub-components defined at module level.
 */

import { useEffect, useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from 'framer-motion'

/* ─── Emil strong ease ─────────────────────────────────────────── */
const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1]

/* ─── Nav ──────────────────────────────────────────────────────── */
type NavView = 'Dashboard' | 'Produits' | 'Mouvements'
const NAV_CYCLE: NavView[] = ['Dashboard', 'Produits', 'Mouvements']

const ALL_NAV = [
  'Dashboard', 'Scanner', 'Produits', 'Inventaire', 'Réception',
  'Ajust. stock', 'Mouvements', 'Clients', 'Fournisseurs',
  'Commandes', 'Lots', 'Rapports', 'Marques', 'Catégories',
  'Alertes', 'Paramètres',
] as const
type NavLabel = typeof ALL_NAV[number]

/* ─── Product table ────────────────────────────────────────────── */
const PRODUCTS = [
  { name: 'Clifton 9 Hoka',  sku: 'HK-CLI-9',  cat: 'Chaussures', stock: 47, price: '189€', low: false },
  { name: 'Nimbus 26 Asics', sku: 'AS-NIM-26', cat: 'Chaussures', stock: 12, price: '179€', low: false },
  { name: 'Kayano 31 Asics', sku: 'AS-KAY-31', cat: 'Chaussures', stock: 38, price: '209€', low: false },
  { name: 'Gel-Cumulus 26',  sku: 'AS-GEL-26', cat: 'Chaussures', stock: 5,  price: '159€', low: true  },
  { name: 'GT-2000 13',      sku: 'AS-GT-13',  cat: 'Chaussures', stock: 23, price: '149€', low: false },
] as const

/* ─── Movement log ─────────────────────────────────────────────── */
const MOVE_LOG = [
  { type: 'Réception', label: 'Clifton 9 · 45 · Bleu',   delta: +24, time: 'il y a 1h' },
  { type: 'Réception', label: 'Kayano 31 · 43 · Noir',   delta: +18, time: 'il y a 2h' },
  { type: 'Vente',     label: 'Nimbus 26 · 38 · Blanc',  delta:  -1, time: 'il y a 3h' },
  { type: 'Vente',     label: 'GT-2000 · 42 · Gris',     delta:  -1, time: 'il y a 4h' },
  { type: 'Réception', label: 'Gel-Cumulus · 41 · Bleu', delta: +12, time: 'il y a 5h' },
] as const

/* ─── Live feed ────────────────────────────────────────────────── */
interface FeedItem {
  id: string
  label: string
  type: string
  delta: number
  time: string
}

const FEED_POOL: Omit<FeedItem, 'id'>[] = [
  { label: 'GT-2000 · 42 · Gris',    type: 'Vente',     delta: -1, time: "à l'instant" },
  { label: 'Nimbus 26 · 38 · Blanc', type: 'Vente',     delta: -1, time: "à l'instant" },
  { label: 'Clifton 9 · 44 · Rouge', type: 'Réception', delta: +6, time: "à l'instant" },
  { label: 'Kayano 31 · 41 · Bleu',  type: 'Vente',     delta: -2, time: "à l'instant" },
]

const INIT_FEED: FeedItem[] = [
  { id: 'f0', label: 'Clifton 9 · 45 · Bleu', type: 'Réception', delta: +24, time: 'il y a 1h' },
  { id: 'f1', label: 'Kayano 31 · 43 · Noir', type: 'Réception', delta: +18, time: 'il y a 2h' },
]

/* ─── Cursor target positions (relative to outer wrapper) ──────── */
// Sidebar is w-44 (176px); x=80 ≈ centre of sidebar nav items.
// y positions target each nav item row within the 36rem (576px) card.
const CURSOR_TARGETS = [
  { x: 80, y: 180 }, // Dashboard
  { x: 80, y: 220 }, // Produits
  { x: 80, y: 310 }, // Mouvements
] as const

/* ─── Cursor SVG (standard arrow pointer, white fill, dark outline) */
function CursorSvg() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
      style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))' }}
    >
      <path
        d="M 3,2 L 3,14 L 6.5,10.5 L 9,16.5 L 11,15.5 L 8.5,9.5 L 13.5,9.5 Z"
        fill="white"
        stroke="#111"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ─── Donut chart ──────────────────────────────────────────────── */
const DONUT_DATA = [
  { label: 'Chaussures',   pct: 0.71, color: '#22c55e' },
  { label: 'Accessoires',  pct: 0.18, color: '#3b82f6' },
  { label: 'Vêtements H.', pct: 0.06, color: '#a855f7' },
  { label: 'Équipements',  pct: 0.03, color: '#f59e0b' },
  { label: 'Nutrition',    pct: 0.02, color: '#6b7280' },
] as const

const DONUT_R   = 34
const DONUT_C   = 2 * Math.PI * DONUT_R  // ≈ 213.63
const DONUT_GAP = 2                       // small gap between segments (px)

// Pre-compute segment positions (done once at module level)
const DONUT_SEGS = DONUT_DATA.map((d, i) => {
  const rawLen = d.pct * DONUT_C
  const segLen = Math.max(0, rawLen - DONUT_GAP)
  const cumOffset = DONUT_DATA
    .slice(0, i)
    .reduce((sum, prev) => sum + prev.pct * DONUT_C, 0)
  return {
    label:      d.label,
    pct:        d.pct,
    color:      d.color,
    segLen,
    // dashOffset: position offset (from 12 o'clock) + gap padding
    dashOffset: -(DONUT_C / 4) - cumOffset - (DONUT_GAP / 2),
    delay:      [0, 0.2, 0.35, 0.45, 0.52][i] ?? 0,
  }
})

/* ─── Line chart data ─────────────────────────────────────────── */
// 30 deterministic data points — pre-generated, not random
const CHART_R = [5,7,6,9,8,12,10,14,11,15,13,18,16,20,19,22,21,25,23,28,26,30,32,35,38,40,42,45,48,52]
const CHART_V = [2,3,3,5,4,7,6,9,7,10,9,12,11,14,13,15,14,17,16,19,18,21,23,25,26,28,29,31,33,35]
const Y_MAX   = 60
const VBW     = 270
const VBH     = 68
const PX      = 4   // x padding
const PY      = 4   // y padding

function toPoints(data: number[]): [number, number][] {
  return data.map((v, i) => [
    PX + (i / (data.length - 1)) * (VBW - 2 * PX),
    VBH - PY - (v / Y_MAX) * (VBH - 2 * PY),
  ])
}

// Smooth cubic-bezier path (mid-point control)
function buildPath(pts: [number, number][], close?: boolean): string {
  if (!pts.length) return ''
  let d = `M ${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`
  for (let i = 1; i < pts.length; i++) {
    const [px, py] = pts[i - 1]
    const [cx, cy] = pts[i]
    const mx = ((px + cx) / 2).toFixed(1)
    d += ` C ${mx},${py.toFixed(1)} ${mx},${cy.toFixed(1)} ${cx.toFixed(1)},${cy.toFixed(1)}`
  }
  if (close) {
    const last = pts[pts.length - 1]
    const bot  = (VBH - PY).toFixed(1)
    d += ` L ${last[0].toFixed(1)},${bot} L ${pts[0][0].toFixed(1)},${bot} Z`
  }
  return d
}

// Pre-compute all paths at module level (Vercel: hoist-jsx / avoid per-render computation)
const R_PTS  = toPoints(CHART_R)
const V_PTS  = toPoints(CHART_V)
const R_LINE = buildPath(R_PTS)
const V_LINE = buildPath(V_PTS)
const R_AREA = buildPath(R_PTS, true)
const V_AREA = buildPath(V_PTS, true)

/* ─── X-axis labels ───────────────────────────────────────────── */
const X_LABELS = ['8 mai', '13 mai', '18 mai', '23 mai', '28 mai', '2 juin'] as const

/* ─── Stagger variants (Produits / Mouvements rows) ──────────── */
const rowContainer = {
  hidden:   {},
  visible:  { transition: { staggerChildren: 0.04 } },
}
const rowItem = {
  hidden:   { opacity: 0, y: 8 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' as const } },
}

/* ═══════════════════════════════════════════════════════════════
   SUB-COMPONENTS (all at module level — Vercel rerender rule)
═══════════════════════════════════════════════════════════════ */

/* ─── Count-up number ─────────────────────────────────────────── */
function CountUp({ target, reduced }: { target: number; reduced: boolean }) {
  const spanRef = useRef<HTMLSpanElement>(null)
  const inView  = useInView(spanRef, { once: true })
  const val     = useMotionValue(0)
  const display = useTransform(val, v => Math.round(v).toLocaleString('fr-FR'))

  useEffect(() => {
    if (!inView) return
    if (reduced) { val.set(target); return }
    const ctrl = animate(val, target, { duration: 1.2, ease: EASE_OUT })
    return () => ctrl.stop()
  }, [inView, target, reduced, val])

  return <motion.span ref={spanRef}>{display}</motion.span>
}

/* ─── KPI card ────────────────────────────────────────────────── */
interface KpiProps {
  label:     string
  value:     number | string
  trend:     string
  type:      'up' | 'warn' | 'neutral'
  reduced:   boolean
}

function KpiCard({ label, value, trend, type, reduced }: KpiProps) {
  const dot =
    type === 'up'   ? <span className="text-[#22c55e]">↑</span>
    : type === 'warn' ? <span style={{ color: '#f59e0b' }}>●</span>
    : null

  return (
    <div
      className="flex flex-col gap-1 rounded-lg p-3 border"
      style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.07)' }}
    >
      <span className="text-[10px] font-mono uppercase tracking-[0.1em]" style={{ color: 'rgba(255,255,255,0.42)' }}>
        {label}
      </span>
      <span className="text-[18px] font-semibold leading-none text-white tabular-nums tracking-tight">
        {typeof value === 'number'
          ? <CountUp target={value} reduced={reduced} />
          : value}
      </span>
      <span className="flex items-center gap-1 text-[10px]" style={{ color: 'rgba(255,255,255,0.40)' }}>
        {dot}
        {trend}
      </span>
    </div>
  )
}

/* ─── Line chart ──────────────────────────────────────────────── */
function LineChart({ reduced }: { reduced: boolean }) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const dur    = reduced ? 0 : 1.8

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium tracking-tight" style={{ color: 'rgba(255,255,255,0.55)' }}>
          Activité du stock — 30 derniers jours
        </span>
        <div className="flex items-center gap-3 text-[9px]" style={{ color: 'rgba(255,255,255,0.38)' }}>
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-[2px] rounded-full bg-[#22c55e]" />
            Réceptions
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-[2px] rounded-full bg-[#3b82f6]" />
            Ventes
          </span>
        </div>
      </div>

      <div className="relative" style={{ height: VBH }}>
        {/* Y-axis labels */}
        <div
          className="absolute left-0 top-0 bottom-0 flex flex-col justify-between pr-1.5 pointer-events-none"
          aria-hidden
          style={{ width: 22 }}
        >
          {[60,40,20,0].map(n => (
            <span key={n} className="text-[8px] leading-none tabular-nums" style={{ color: 'rgba(255,255,255,0.22)' }}>
              {n}
            </span>
          ))}
        </div>

        {/* SVG chart */}
        <div className="absolute inset-0 pl-6">
          <svg
            viewBox={`0 0 ${VBW} ${VBH}`}
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
          >
            {/* Grid lines */}
            {[0.25, 0.5, 0.75].map(f => (
              <line
                key={f}
                x1={PX} y1={VBH * f}
                x2={VBW - PX} y2={VBH * f}
                stroke="rgba(255,255,255,0.06)"
                strokeWidth={0.5}
                strokeDasharray="3 3"
              />
            ))}

            {/* Area fills — fade in after line draw */}
            <motion.path
              d={R_AREA}
              fill="rgba(34,197,94,0.08)"
              stroke="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: reduced ? 0 : 1.8 }}
            />
            <motion.path
              d={V_AREA}
              fill="rgba(59,130,246,0.07)"
              stroke="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: reduced ? 0 : 1.8 }}
            />

            {/* Lines — draw in via pathLength */}
            <motion.path
              d={R_LINE}
              fill="none"
              stroke="#22c55e"
              strokeWidth={1.4}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{ duration: dur, ease: 'linear' }}
            />
            <motion.path
              d={V_LINE}
              fill="none"
              stroke="#3b82f6"
              strokeWidth={1.4}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{ duration: dur, ease: 'linear', delay: reduced ? 0 : 0.1 }}
            />
          </svg>
        </div>
      </div>

      {/* X-axis labels */}
      <div className="flex justify-between pl-6 pr-1" aria-hidden>
        {X_LABELS.map(l => (
          <span key={l} className="text-[8px] tabular-nums" style={{ color: 'rgba(255,255,255,0.22)' }}>
            {l}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Donut segment ────────────────────────────────────────────── */
interface DonutSegProps {
  segLen:     number
  dashOffset: number
  color:      string
  delay:      number
  inView:     boolean
  reduced:    boolean
}

function DonutSeg({ segLen, dashOffset, color, delay, inView, reduced }: DonutSegProps) {
  const val      = useMotionValue(0)
  const dashArr  = useTransform(val, v => `${v.toFixed(2)} ${DONUT_C.toFixed(2)}`)

  useEffect(() => {
    if (!inView) return
    if (reduced) { val.set(segLen); return }
    const ctrl = animate(val, segLen, { duration: 0.8, delay, ease: EASE_OUT })
    return () => ctrl.stop()
  }, [inView, segLen, delay, reduced, val])

  return (
    <motion.circle
      r={DONUT_R}
      cx={60}
      cy={60}
      fill="none"
      stroke={color}
      strokeWidth={13}
      strokeLinecap="butt"
      strokeDashoffset={dashOffset}
      style={{ strokeDasharray: dashArr }}
    />
  )
}

/* ─── Donut chart ─────────────────────────────────────────────── */
function DonutChart({ reduced }: { reduced: boolean }) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <span className="text-[10px] font-medium tracking-tight" style={{ color: 'rgba(255,255,255,0.55)' }}>
        Répartition par catégorie
      </span>

      <div className="flex items-center gap-3">
        {/* SVG donut */}
        <svg viewBox="0 0 120 120" className="w-20 h-20 flex-shrink-0" style={{ transform: 'rotate(-90deg)' }}>
          {/* Track */}
          <circle
            r={DONUT_R} cx={60} cy={60}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={13}
            strokeDasharray={`${DONUT_C} ${DONUT_C}`}
          />
          {/* Segments */}
          {DONUT_SEGS.map(seg => (
            <DonutSeg
              key={seg.label}
              segLen={seg.segLen}
              dashOffset={seg.dashOffset}
              color={seg.color}
              delay={seg.delay}
              inView={inView}
              reduced={reduced}
            />
          ))}
        </svg>

        {/* Legend */}
        <div className="flex flex-col gap-1">
          {DONUT_DATA.map(d => (
            <div key={d.label} className="flex items-center gap-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                style={{ background: d.color }}
              />
              <span className="text-[9px] leading-none" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {d.label}
              </span>
              <span className="text-[9px] font-mono leading-none ml-auto pl-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {Math.round(d.pct * 100)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Alertes card (static) ───────────────────────────────────── */
function AlertesCard() {
  const alerts = [
    { name: 'Clifton 9 · Hoka · 42 · Noir',  qty: 3 },
    { name: 'Nimbus 26 · Asics · 38 · Blanc', qty: 2 },
  ]

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium tracking-tight" style={{ color: 'rgba(255,255,255,0.55)' }}>
          Alertes stock bas
        </span>
        <button className="text-[9px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Voir tout →
        </button>
      </div>
      {alerts.map(a => (
        <div
          key={a.name}
          className="flex items-center justify-between rounded-lg px-2.5 py-2 border"
          style={{ background: 'rgba(245,158,11,0.06)', borderColor: 'rgba(245,158,11,0.18)' }}
        >
          <span className="text-[10px] truncate mr-2" style={{ color: 'rgba(255,255,255,0.70)' }}>
            {a.name}
          </span>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span
              className="rounded-full px-1.5 py-0.5 text-[9px] font-medium"
              style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b' }}
            >
              Stock bas
            </span>
            <span className="font-mono text-[10px] font-semibold" style={{ color: '#f59e0b' }}>
              {a.qty}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── Movement feed (live) ────────────────────────────────────── */
function MovementFeed({ items }: { items: FeedItem[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] font-medium tracking-tight" style={{ color: 'rgba(255,255,255,0.55)' }}>
        Derniers mouvements
      </span>
      <div className="flex flex-col">
        <AnimatePresence initial={false}>
          {items.map(item => {
            const isPos = item.delta > 0
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="flex items-center gap-2 py-1.5 border-b last:border-b-0"
                style={{ borderColor: 'rgba(255,255,255,0.05)' }}
              >
                <span
                  className="flex-shrink-0 w-3.5 h-3.5 rounded-sm grid place-items-center text-[8px] font-bold"
                  style={{
                    background: isPos ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.12)',
                    color:      isPos ? '#22c55e'               : '#ef4444',
                  }}
                >
                  {isPos ? '↑' : '↓'}
                </span>
                <span className="flex-1 min-w-0 text-[10px] truncate" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {item.label}
                  <span className="ml-1" style={{ color: 'rgba(255,255,255,0.30)' }}>· {item.type}</span>
                </span>
                <span
                  className="font-mono text-[10px] font-semibold flex-shrink-0"
                  style={{ color: isPos ? '#22c55e' : '#ef4444' }}
                >
                  {isPos ? '+' : ''}{item.delta}
                </span>
                <span className="text-[9px] flex-shrink-0 hidden sm:block" style={{ color: 'rgba(255,255,255,0.25)' }}>
                  {item.time}
                </span>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ─── Dashboard view ──────────────────────────────────────────── */
interface DashboardViewProps {
  feed:    FeedItem[]
  reduced: boolean
}

const KPI_DATA = [
  { label: 'Produits',             value: 3247  as number | string, trend: '+84 ce mois',      type: 'up'      as const },
  { label: 'Stock bas',            value: 12    as number | string, trend: 'dont 3 en rupture', type: 'warn'    as const },
  { label: 'Valeur du stock',      value: '487 320 €' as number | string, trend: '+8,3 % ce mois', type: 'up' as const },
  { label: "Mouvements auj'hui",   value: 84    as number | string, trend: '+31 vs hier',       type: 'up'      as const },
]

function DashboardView({ feed, reduced }: DashboardViewProps) {
  return (
    <div className="flex flex-col gap-3 h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between flex-shrink-0">
        <span className="text-[11px] font-semibold text-white tracking-tight">Tableau de bord</span>
        <span className="font-mono text-[9px]" style={{ color: 'rgba(255,255,255,0.28)' }}>
          2 juin 2026 · 14:31
        </span>
      </div>

      {/* KPI grid */}
      <div className="grid grid-cols-4 gap-1.5 flex-shrink-0">
        {KPI_DATA.map(k => (
          <KpiCard key={k.label} {...k} reduced={reduced} />
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-[1fr_auto] gap-3 flex-shrink-0">
        <LineChart reduced={reduced} />
        <div className="w-[9.5rem]">
          <DonutChart reduced={reduced} />
        </div>
      </div>

      {/* Bottom row: alerts + feed */}
      <div className="grid grid-cols-2 gap-3 flex-1 min-h-0 overflow-hidden">
        <AlertesCard />
        <MovementFeed items={feed} />
      </div>
    </div>
  )
}

/* ─── Produits view ───────────────────────────────────────────── */
function ProduitsView() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <span className="text-[11px] font-semibold text-white tracking-tight mb-2.5 flex-shrink-0">
        Produits
      </span>

      {/* Table header */}
      <div
        className="grid gap-2 px-2 py-1.5 mb-0.5 rounded-lg border-b"
        style={{
          gridTemplateColumns: '1fr 90px 70px 52px 50px',
          borderColor: 'rgba(255,255,255,0.07)',
        }}
      >
        {['Produit', 'SKU', 'Catégorie', 'Stock', 'Prix'].map(h => (
          <span key={h} className="font-mono text-[8.5px] uppercase tracking-[0.1em]" style={{ color: 'rgba(255,255,255,0.30)' }}>
            {h}
          </span>
        ))}
      </div>

      <motion.div
        className="flex flex-col"
        variants={rowContainer}
        initial="hidden"
        animate="visible"
      >
        {PRODUCTS.map(p => (
          <motion.div
            key={p.sku}
            variants={rowItem}
            className="grid gap-2 px-2 py-2 border-b items-center"
            style={{
              gridTemplateColumns: '1fr 90px 70px 52px 50px',
              borderColor: 'rgba(255,255,255,0.05)',
            }}
          >
            <span className="text-[11px] font-medium text-white truncate">{p.name}</span>
            <span className="font-mono text-[9.5px]" style={{ color: 'rgba(255,255,255,0.38)' }}>{p.sku}</span>
            <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.55)' }}>{p.cat}</span>
            <span
              className="font-mono text-[11px] font-medium tabular-nums"
              style={{ color: p.low ? '#f59e0b' : 'rgba(255,255,255,0.85)' }}
            >
              {p.stock}
            </span>
            <span className="font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.70)' }}>{p.price}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

/* ─── Mouvements view ─────────────────────────────────────────── */
function MouvementsView() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <span className="text-[11px] font-semibold text-white tracking-tight mb-2.5 flex-shrink-0">
        Mouvements
      </span>

      {/* Table header */}
      <div
        className="grid gap-2 px-2 py-1.5 mb-0.5 border-b"
        style={{
          gridTemplateColumns: '70px 1fr 44px 70px',
          borderColor: 'rgba(255,255,255,0.07)',
        }}
      >
        {['Type', 'Produit', 'Qté', 'Date'].map(h => (
          <span key={h} className="font-mono text-[8.5px] uppercase tracking-[0.1em]" style={{ color: 'rgba(255,255,255,0.30)' }}>
            {h}
          </span>
        ))}
      </div>

      <motion.div
        className="flex flex-col"
        variants={rowContainer}
        initial="hidden"
        animate="visible"
      >
        {MOVE_LOG.map((m, i) => {
          const isPos = m.delta > 0
          return (
            <motion.div
              key={i}
              variants={rowItem}
              className="grid gap-2 px-2 py-2 border-b items-center"
              style={{
                gridTemplateColumns: '70px 1fr 44px 70px',
                borderColor: 'rgba(255,255,255,0.05)',
              }}
            >
              <span
                className="inline-flex items-center gap-1 text-[9.5px] font-medium"
                style={{ color: isPos ? '#22c55e' : '#ef4444' }}
              >
                {isPos ? '↑' : '↓'} {m.type}
              </span>
              <span className="text-[10px] truncate" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {m.label}
              </span>
              <span
                className="font-mono text-[10px] font-semibold tabular-nums"
                style={{ color: isPos ? '#22c55e' : '#ef4444' }}
              >
                {isPos ? '+' : ''}{m.delta}
              </span>
              <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.30)' }}>
                {m.time}
              </span>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

/* ─── Sidebar ─────────────────────────────────────────────────── */
interface SidebarProps {
  view:   NavView
  onNav:  (v: NavView) => void
}

function Sidebar({ view, onNav }: SidebarProps) {
  return (
    <aside
      className="w-44 flex-shrink-0 flex flex-col border-r overflow-hidden"
      style={{
        background:   'rgba(255,255,255,0.015)',
        borderColor:  'rgba(255,255,255,0.07)',
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-3.5 py-3.5 border-b flex-shrink-0" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div
          className="w-6 h-6 rounded-md flex-shrink-0"
          style={{ background: 'rgba(255,255,255,0.18)' }}
        />
        <span className="text-[11px] font-semibold text-white tracking-tight">StockPro</span>
      </div>

      {/* Search bar */}
      <div className="px-2.5 py-2.5 flex-shrink-0 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div
          className="flex items-center gap-1.5 rounded-md px-2 py-1.5"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="flex-shrink-0" style={{ color: 'rgba(255,255,255,0.30)' }}>
            <circle cx="7" cy="7" r="5" />
            <path d="M14 14l-3-3" />
          </svg>
          <span className="text-[10px] flex-1" style={{ color: 'rgba(255,255,255,0.28)' }}>Rechercher...</span>
          <span
            className="font-mono text-[8px] rounded px-1 py-0.5 border flex-shrink-0"
            style={{ color: 'rgba(255,255,255,0.25)', borderColor: 'rgba(255,255,255,0.12)' }}
          >
            ⌘K
          </span>
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 overflow-hidden px-2 py-2">
        {ALL_NAV.map(item => {
          const isActive = item === view
          const isNavCycle = NAV_CYCLE.includes(item as NavView)
          return (
            <div
              key={item}
              className="relative"
              onClick={() => isNavCycle ? onNav(item as NavView) : undefined}
              style={{ cursor: isNavCycle ? 'pointer' : 'default' }}
            >
              {/* Sliding active pill (Framer Motion layoutId) */}
              {isActive && (
                <motion.div
                  layoutId="crm-activeNav"
                  className="absolute inset-0 rounded-md"
                  style={{ background: 'rgba(255,255,255,0.10)' }}
                  transition={{ type: 'spring', duration: 0.3, bounce: 0.15 }}
                />
              )}
              <div
                className="relative flex items-center justify-between px-2.5 py-[5.5px] rounded-md text-[11px]"
                style={{
                  color: isActive
                    ? 'rgba(255,255,255,0.92)'
                    : 'rgba(255,255,255,0.40)',
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                {item}
                {item === 'Alertes' && (
                  <span
                    className="pulse-dot text-[8px] font-medium rounded-full px-1.5 py-0.5 font-mono"
                    style={{ background: 'rgba(245,158,11,0.18)', color: '#f59e0b' }}
                  >
                    12
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </nav>
    </aside>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════════════ */

export function CrmDashboardPreview() {
  /* ── Reduced motion ────────────────────────────────────────── */
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  /* ── Viewport detection ────────────────────────────────────── */
  const containerRef = useRef<HTMLDivElement>(null)
  const isVisible    = useInView(containerRef, { once: false, amount: 0.3 })

  /* Stable refs to avoid stale closures in setTimeout chains */
  const isVisRef  = useRef(false)
  const reducedRef = useRef(false)
  useEffect(() => { isVisRef.current  = isVisible }, [isVisible])
  useEffect(() => { reducedRef.current = reduced   }, [reduced])

  /* ── Nav state ─────────────────────────────────────────────── */
  const [navIdx, setNavIdx] = useState(0)
  const navIdxRef = useRef(0)
  const view = NAV_CYCLE[navIdx]

  /* ── Cursor spring values (Emil §6.A: transform only) ──────── */
  const cursorX = useSpring(CURSOR_TARGETS[0].x, { stiffness: 120, damping: 18 })
  const cursorY = useSpring(CURSOR_TARGETS[0].y, { stiffness: 120, damping: 18 })

  /* ── Click ripple state ────────────────────────────────────── */
  const [clicking, setClicking]   = useState(false)
  const clickTarget = useRef<{ x: number; y: number }>(CURSOR_TARGETS[0])

  /* ── Coordinated nav + cursor loop ────────────────────────── */
  /*
   * Timeline per 4 500 ms cycle:
   *   t =    0ms — cursor spring set toward next nav item
   *   t = 2 200ms — click ripple fires
   *   t = 2 700ms — nav state advances, ripple cleared
   *   t = 4 500ms — next cycle begins
   *
   * Pauses when off-screen (isVisRef) or reduced-motion (reducedRef).
   * Uses a `cancelled` flag so cleanup is safe with concurrent timers.
   */
  useEffect(() => {
    let cancelled = false
    const tids: number[] = []

    function runCycle() {
      if (cancelled) return

      /* Pause when off-screen or reduced-motion — recheck in 500ms */
      if (!isVisRef.current || reducedRef.current) {
        tids.push(window.setTimeout(runCycle, 500))
        return
      }

      const nextIdx = (navIdxRef.current + 1) % NAV_CYCLE.length
      const target  = CURSOR_TARGETS[nextIdx]

      /* Move cursor toward next nav item (spring handles easing) */
      clickTarget.current = target
      cursorX.set(target.x)
      cursorY.set(target.y)

      /* t=2 200ms: click ripple */
      tids.push(window.setTimeout(() => {
        if (!cancelled) setClicking(true)
      }, 2200))

      /* t=2 700ms: advance nav + clear ripple */
      tids.push(window.setTimeout(() => {
        if (!cancelled) {
          setClicking(false)
          navIdxRef.current = nextIdx
          setNavIdx(nextIdx)
        }
      }, 2700))

      /* t=4 500ms: schedule next cycle */
      tids.push(window.setTimeout(runCycle, 4500))
    }

    /* Initial delay so the cursor is visible before it starts moving */
    tids.push(window.setTimeout(runCycle, 1000))

    return () => {
      cancelled = true
      tids.forEach(clearTimeout)
    }
  // cursorX / cursorY are stable MotionValue refs — safe in empty-ish deps
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursorX, cursorY])

  /* ── Live feed ─────────────────────────────────────────────── */
  const [feed, setFeed] = useState<FeedItem[]>(INIT_FEED)
  const feedIdxRef = useRef(0)

  useEffect(() => {
    if (!isVisible || reduced) return
    const id = setInterval(() => {
      const pool = FEED_POOL[feedIdxRef.current % FEED_POOL.length]
      feedIdxRef.current++
      setFeed(prev => [
        { ...pool, id: `live-${Date.now()}` },
        ...prev,
      ].slice(0, 4))
    }, 5000)
    return () => clearInterval(id)
  }, [isVisible, reduced])

  /* ── Render ────────────────────────────────────────────────── */
  return (
    <div
      ref={containerRef}
      className="w-full flex rounded-2xl overflow-hidden border relative"
      style={{
        height:      '36rem',
        background:  'rgba(255,255,255,0.02)',
        borderColor: 'rgba(255,255,255,0.10)',
        boxShadow:   '0 24px 60px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.30)',
      }}
    >
      {/* ── Autonomous cursor (Emil §6.A: position via transform) ─ */}
      {!reduced && (
        <>
          {/* Cursor pointer */}
          <motion.div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              x:      cursorX,
              y:      cursorY,
              zIndex: 50,
            }}
          >
            <CursorSvg />
          </motion.div>

          {/* Click ripple rings — rendered at target position */}
          {clicking && (
            <>
              <div
                className="cursor-click-ring"
                style={{
                  left:      clickTarget.current.x,
                  top:       clickTarget.current.y,
                  marginLeft: -12,
                  marginTop:  -12,
                }}
              />
              <div
                className="cursor-click-ring cursor-click-ring-delay"
                style={{
                  left:      clickTarget.current.x,
                  top:       clickTarget.current.y,
                  marginLeft: -12,
                  marginTop:  -12,
                }}
              />
            </>
          )}
        </>
      )}

      {/* Sidebar */}
      <Sidebar view={view} onNav={(v) => {
        const idx = NAV_CYCLE.indexOf(v)
        navIdxRef.current = idx
        setNavIdx(idx)
      }} />

      {/* Main content */}
      <div className="flex-1 min-w-0 overflow-hidden flex flex-col" style={{ background: 'rgba(0,0,0,0.18)' }}>
        {/* Inner content top border + padding */}
        <div className="flex-1 min-h-0 overflow-hidden p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              className="h-full"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {view === 'Dashboard'  && <DashboardView feed={feed} reduced={reduced} />}
              {view === 'Produits'   && <ProduitsView />}
              {view === 'Mouvements' && <MouvementsView />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Status bar */}
        <div
          className="flex-shrink-0 flex items-center justify-between px-4 py-1.5 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center gap-1.5">
            <span
              className="pulse-dot h-1.5 w-1.5 rounded-full flex-shrink-0"
              style={{ background: '#22c55e', boxShadow: '0 0 6px 1px rgba(34,197,94,0.4)' }}
            />
            <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.32)' }}>
              Connecté · Sync actif
            </span>
          </div>
          <span className="font-mono text-[9px]" style={{ color: 'rgba(255,255,255,0.22)' }}>
            v2.4.1
          </span>
        </div>
      </div>
    </div>
  )
}
