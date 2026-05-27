'use client'

/**
 * ErpFeatureSection — Torquemade
 * Adapted from the designer's drop-in component:
 *   - named export (not default)
 *   - bilingual FR/EN via useLang()
 *   - min-720: breakpoint instead of md: (project convention)
 *   - no min-h-screen (embedded in page)
 *   - responsive comparison separator via .erp-compare-left
 */

import { motion } from 'framer-motion'
import { useLang } from '@/components/app-provider'

/* ============================================================
   Bilingual content — all strings live here
   ============================================================ */
type Rows = ReadonlyArray<readonly [string, string]>

const CONTENT: Record<
  'fr' | 'en',
  {
    figMain: string
    live: string
    erpNode: string
    syncNode: string
    siteNode: string
    syncSub: readonly [string, string, string]
    title: string
    description: string
    figTable: string
    badHeader: string
    goodHeader: string
    stateOff: string
    stateOn: string
    rowsBad: Rows
    rowsGood: Rows
  }
> = {
  fr: {
    figMain: 'FIG. 1.1 — TOPOLOGIE SYNC STOCK',
    live: 'LIVE · v2.4',
    erpNode: 'ERP / Logiciel de gestion',
    syncNode: 'Synchronisation',
    siteNode: 'Site e‑commerce',
    syncSub: ['Stock', 'Prix', 'Commandes'],
    title: 'Votre stock, votre site, votre logiciel — connectés.',
    description:
      'On branche votre ERP existant — ou on en construit un sur mesure — directement à votre boutique en ligne. Une seule source de vérité, mise à jour en quelques secondes, sans intervention manuelle.',
    figTable: 'FIG. 1.2 — DIFFÉRENCIATEURS',
    badHeader: 'Sans connexion ERP',
    goodHeader: 'Avec connexion ERP',
    stateOff: 'État · 00',
    stateOn: 'État · 01',
    rowsBad: [
      ['Stock mis à jour à la main, en CSV', '~2h / jour'],
      ['Ventes de produits déjà épuisés', '~8 / mois'],
      ['Prix désynchronisés entre canaux', 'manuel'],
      ['Commandes ressaisies dans l’ERP', 'erreurs'],
      ['Pas de source de vérité unique', '2 bases'],
      ['Réconciliation comptable manuelle', 'fin de mois'],
    ],
    rowsGood: [
      ['Stock synchronisé en temps réel', '< 3 s'],
      ['Mises hors‑ligne automatiques à zéro', 'auto'],
      ['Prix pousés depuis l’ERP, un seul endroit', 'bi‑dir'],
      ['Commandes web créées directement dans l’ERP', 'webhook'],
      ['Une seule base — l’ERP fait foi', '1 base'],
      ['Export comptable automatisé', 'quotidien'],
    ],
  },
  en: {
    figMain: 'FIG. 1.1 — STOCK SYNC TOPOLOGY',
    live: 'LIVE · v2.4',
    erpNode: 'ERP / Management tool',
    syncNode: 'Synchronisation',
    siteNode: 'E‑commerce site',
    syncSub: ['Stock', 'Prices', 'Orders'],
    title: 'Your stock, your site, your software — connected.',
    description:
      'We connect your existing ERP — or build a custom one — directly to your online store. One single source of truth, updated in seconds, with no manual intervention.',
    figTable: 'FIG. 1.2 — DIFFERENTIATORS',
    badHeader: 'Without ERP connection',
    goodHeader: 'With ERP connection',
    stateOff: 'State · 00',
    stateOn: 'State · 01',
    rowsBad: [
      ['Stock updated manually, via CSV', '~2h / day'],
      ['Sales of already out-of-stock items', '~8 / month'],
      ['Prices out of sync between channels', 'manual'],
      ['Orders re-keyed into the ERP', 'errors'],
      ['No single source of truth', '2 databases'],
      ['Manual accounting reconciliation', 'end of month'],
    ],
    rowsGood: [
      ['Stock synced in real time', '< 3 s'],
      ['Automatic zero-stock takedowns', 'auto'],
      ['Prices pushed from ERP, one place', 'bi‑dir'],
      ['Web orders created directly in ERP', 'webhook'],
      ['One database — ERP is the authority', '1 db'],
      ['Automated accounting export', 'daily'],
    ],
  },
}

/* ============================================================
   Geometry — shared between SVG paths and diamond positions
   ============================================================ */
const GEO = {
  vbW: 1000,
  vbH: 360,
  leftRight: 320,
  centerLeft: 400,
  centerRight: 600,
  rightLeft: 680,
  ySide: 180,
  yCenter: 152,
  leftPath: 'M 320 180 C 355 180, 365 152, 400 152',
  rightPath: 'M 600 152 C 635 152, 645 180, 680 180',
} as const

/* ============================================================
   Animated bezier connector — 3 layers:
     1. Static gradient stroke
     2. Continuous dashed flow (framer-motion)
     3. Short comet travelling the curve (framer-motion)
   ============================================================ */
function BezierConnector({
  d,
  gradId,
  gradStart,
  gradEnd,
}: {
  d: string
  gradId: string
  gradStart: { x: number; y: number }
  gradEnd: { x: number; y: number }
}) {
  return (
    <>
      <defs>
        <linearGradient
          id={gradId}
          gradientUnits="userSpaceOnUse"
          x1={gradStart.x}
          y1={gradStart.y}
          x2={gradEnd.x}
          y2={gradEnd.y}
        >
          <stop offset="0%"   stopColor="rgba(255,255,255,0.06)" />
          <stop offset="30%"  stopColor="rgba(255,255,255,0.32)" />
          <stop offset="70%"  stopColor="rgba(255,255,255,0.32)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
        </linearGradient>
      </defs>

      {/* Base gradient stroke */}
      <path d={d} fill="none" stroke={`url(#${gradId})`} strokeWidth={1.25} />

      {/* Continuous dashed flow */}
      <motion.path
        d={d}
        fill="none"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth={1}
        strokeLinecap="round"
        strokeDasharray="3 5"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -160 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />

      {/* Comet — short bright segment travelling the curve */}
      <motion.path
        d={d}
        fill="none"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth={1.5}
        strokeLinecap="round"
        initial={{ pathLength: 0.12, pathOffset: 0 }}
        animate={{ pathOffset: 1 }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.6))' }}
      />
    </>
  )
}

/* ============================================================
   Diamond marker — rotated square that pulses subtly.
   `bright` for the two markers on the center node.
   ============================================================ */
function Diamond({
  left,
  top,
  bright = false,
}: {
  left: string
  top: string
  bright?: boolean
}) {
  return (
    <motion.span
      aria-hidden
      className="absolute pointer-events-none"
      style={{
        left,
        top,
        width: 11,
        height: 11,
        background: '#0e0e0e',
        border: `1px solid rgba(255,255,255,${bright ? 0.75 : 0.45})`,
        transform: 'translate(-50%, -50%) rotate(45deg)',
        boxShadow: bright ? '0 0 0 3px rgba(255,255,255,0.04)' : undefined,
        zIndex: 3,
      }}
      animate={{ opacity: [0.55, 1, 0.55] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span
        className="absolute"
        style={{
          inset: 2,
          background: bright
            ? 'rgba(255,255,255,0.18)'
            : 'rgba(255,255,255,0.08)',
          border: '0.5px solid rgba(255,255,255,0.1)',
        }}
      />
    </motion.span>
  )
}

/* ============================================================
   Node — text-only pill. `variant="center"` lifts and emphasises.
   ============================================================ */
function Node({
  children,
  variant = 'side',
  style,
}: {
  children: React.ReactNode
  variant?: 'side' | 'center'
  style?: React.CSSProperties
}) {
  if (variant === 'center') {
    return (
      <div
        className="absolute text-center text-white font-medium rounded-[10px] whitespace-nowrap overflow-hidden text-ellipsis"
        style={{
          left: '40%',
          width: '20%',
          top: 'calc(50% - 28px)',
          transform: 'translateY(-50%)',
          padding: '20px 14px',
          fontSize: 13.5,
          letterSpacing: '-0.005em',
          lineHeight: 1.3,
          background: 'linear-gradient(180deg, #141414 0%, #0d0d0d 100%)',
          border: '1px solid rgba(255,255,255,0.18)',
          boxShadow:
            '0 0 0 1px rgba(255,255,255,0.03), 0 24px 60px rgba(0,0,0,0.55)',
          ...style,
        }}
      >
        {children}
      </div>
    )
  }
  return (
    <div
      className="absolute text-center text-white font-medium rounded-[10px] whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-200 hover:border-white/20"
      style={{
        top: '50%',
        width: '30%',
        transform: 'translateY(-50%)',
        padding: '18px 16px',
        fontSize: 13.5,
        letterSpacing: '-0.005em',
        lineHeight: 1.3,
        background: '#0e0e0e',
        border: '1px solid rgba(255,255,255,0.10)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

/* ============================================================
   Comparison row
   ============================================================ */
function Row({
  label,
  meta,
  variant,
}: {
  label: string
  meta: string
  variant: 'bad' | 'good'
}) {
  const isBad = variant === 'bad'
  return (
    <div
      className="flex items-start gap-3.5 py-2.5 text-[14px] leading-[1.45] border-t first:border-t-0"
      style={{
        borderColor: 'rgba(255,255,255,0.06)',
        color: isBad ? 'rgba(255,255,255,0.56)' : 'rgba(255,255,255,0.88)',
      }}
    >
      <span
        className="flex-shrink-0 grid place-items-center rounded font-semibold text-[10px] leading-none"
        style={{
          width: 18,
          height: 18,
          marginTop: 1,
          background: isBad
            ? 'rgba(255,80,80,0.05)'
            : 'rgba(255,255,255,0.06)',
          color: isBad ? 'rgba(255,80,80,0.70)' : '#ffffff',
          border: `1px solid ${
            isBad ? 'rgba(255,80,80,0.18)' : 'rgba(255,255,255,0.18)'
          }`,
        }}
      >
        {isBad ? '✕' : '✓'}
      </span>
      <span className="flex-1">{label}</span>
      <span
        className="font-mono text-[10.5px] tracking-[0.04em] flex-shrink-0 self-center"
        style={{ color: 'rgba(255,255,255,0.36)' }}
      >
        {meta}
      </span>
    </div>
  )
}

/* ============================================================
   Main section
   ============================================================ */
export function ErpFeatureSection() {
  const lang = useLang()
  const t = CONTENT[lang]

  return (
    <section
      className="flex items-center justify-center px-5 py-14 min-720:px-6 min-720:py-16"
      style={{
        background:
          'radial-gradient(1200px 600px at 50% -10%, rgba(255,255,255,0.025), transparent 60%), #080808',
        color: 'rgba(255,255,255,0.88)',
      }}
    >
      <div
        className="relative w-full max-w-[1280px] overflow-hidden rounded-3xl"
        style={{
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.10)',
        }}
      >
        {/* FIG label — top-left */}
        <div
          className="absolute font-mono uppercase whitespace-nowrap"
          style={{
            top: 32,
            left: 36,
            fontSize: 11,
            letterSpacing: '0.16em',
            color: 'rgba(255,255,255,0.36)',
            zIndex: 4,
          }}
        >
          {t.figMain}
        </div>

        {/* Live indicator — top-right */}
        <div
          className="absolute font-mono uppercase whitespace-nowrap flex items-center gap-2"
          style={{
            top: 32,
            right: 36,
            fontSize: 11,
            letterSpacing: '0.16em',
            color: 'rgba(255,255,255,0.36)',
            zIndex: 4,
          }}
        >
          <motion.span
            className="block rounded-full"
            style={{
              width: 5,
              height: 5,
              background: 'rgba(255,255,255,0.55)',
              boxShadow: '0 0 8px rgba(255,255,255,0.45)',
            }}
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.85, 1, 0.85] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span>{t.live}</span>
        </div>

        {/* ── Figure area ── */}
        <div className="relative px-6 min-720:px-10 pt-20 pb-12">
          <div className="relative w-full mt-6" style={{ height: 360 }}>
            {/* Dot grid — atmosphere */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at center, rgba(255,255,255,0.06) 0.5px, transparent 0.6px)',
                backgroundSize: '24px 24px',
                backgroundPosition: '50% 50%',
                opacity: 0.5,
                WebkitMaskImage:
                  'radial-gradient(ellipse 60% 70% at 50% 50%, #000 30%, transparent 75%)',
                maskImage:
                  'radial-gradient(ellipse 60% 70% at 50% 50%, #000 30%, transparent 75%)',
              }}
            />

            {/* SVG bezier connectors */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox={`0 0 ${GEO.vbW} ${GEO.vbH}`}
              preserveAspectRatio="none"
              aria-hidden
              style={{ overflow: 'visible', pointerEvents: 'none' }}
            >
              <BezierConnector
                d={GEO.leftPath}
                gradId="erp-fade-l"
                gradStart={{ x: GEO.leftRight, y: GEO.ySide }}
                gradEnd={{ x: GEO.centerLeft, y: GEO.yCenter }}
              />
              <BezierConnector
                d={GEO.rightPath}
                gradId="erp-fade-r"
                gradStart={{ x: GEO.centerRight, y: GEO.yCenter }}
                gradEnd={{ x: GEO.rightLeft, y: GEO.ySide }}
              />
            </svg>

            {/* Diamond markers */}
            <Diamond left="32%"  top="50%" />
            <Diamond left="40%"  top="calc(50% - 28px)" bright />
            <Diamond left="60%"  top="calc(50% - 28px)" bright />
            <Diamond left="68%"  top="50%" />

            {/* Nodes */}
            <Node variant="side" style={{ left: '2%' }}>
              {t.erpNode}
            </Node>
            <Node variant="center">
              {t.syncNode}
            </Node>
            <Node variant="side" style={{ left: '68%' }}>
              {t.siteNode}
            </Node>

            {/* Sub-labels below center node */}
            <div
              className="absolute font-mono whitespace-nowrap flex items-center gap-2.5"
              style={{
                left: '50%',
                top: 'calc(50% + 20px)',
                transform: 'translateX(-50%)',
                fontSize: 11,
                letterSpacing: '0.14em',
                color: 'rgba(255,255,255,0.36)',
              }}
            >
              <span>{t.syncSub[0]}</span>
              <span className="opacity-45">·</span>
              <span>{t.syncSub[1]}</span>
              <span className="opacity-45">·</span>
              <span>{t.syncSub[2]}</span>
            </div>
          </div>

          {/* Bottom caption — title + description */}
          <div className="mt-6 max-w-[640px] pr-6">
            <h2
              className="m-0 text-white font-[650] tracking-[-0.018em]"
              style={{
                fontSize: 28,
                lineHeight: 1.15,
                textWrap: 'balance' as React.CSSProperties['textWrap'],
              }}
            >
              {t.title}
            </h2>
            <p
              className="m-0 mt-3 max-w-[560px]"
              style={{
                fontSize: 15.5,
                lineHeight: 1.55,
                color: 'rgba(255,255,255,0.56)',
              }}
            >
              {t.description}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px" style={{ background: 'rgba(255,255,255,0.10)' }} />

        {/* ── Comparison table ── */}
        <div className="px-6 min-720:px-14 py-14">
          <div
            className="font-mono uppercase mb-5"
            style={{
              fontSize: 11,
              letterSpacing: '0.16em',
              color: 'rgba(255,255,255,0.36)',
            }}
          >
            {t.figTable}
          </div>

          <div
            className="grid grid-cols-1 min-720:grid-cols-2 rounded-2xl overflow-hidden"
            style={{
              background: '#0d0d0d',
              border: '1px solid rgba(255,255,255,0.10)',
            }}
          >
            {/* BAD column */}
            <div className="erp-compare-left p-6 min-720:p-9">
              <div
                className="flex items-center justify-between mb-6"
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  paddingBottom: 18,
                }}
              >
                <div
                  className="font-semibold uppercase tracking-[0.04em]"
                  style={{ fontSize: 14, color: 'rgba(255,255,255,0.36)' }}
                >
                  {t.badHeader}
                </div>
                <div
                  className="font-mono uppercase"
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    color: 'rgba(255,255,255,0.36)',
                  }}
                >
                  {t.stateOff}
                </div>
              </div>
              {t.rowsBad.map(([label, meta]) => (
                <Row key={label} label={label} meta={meta} variant="bad" />
              ))}
            </div>

            {/* GOOD column */}
            <div className="p-6 min-720:p-9">
              <div
                className="flex items-center justify-between mb-6"
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  paddingBottom: 18,
                }}
              >
                <div
                  className="font-semibold uppercase tracking-[0.04em] text-white"
                  style={{ fontSize: 14 }}
                >
                  {t.goodHeader}
                </div>
                <div
                  className="font-mono uppercase"
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    color: 'rgba(255,255,255,0.36)',
                  }}
                >
                  {t.stateOn}
                </div>
              </div>
              {t.rowsGood.map(([label, meta]) => (
                <Row key={label} label={label} meta={meta} variant="good" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
