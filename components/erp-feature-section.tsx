'use client'

/**
 * ErpFeatureSection — Torquemade
 * Drop-in from designer, adapted:
 *   - named export, useLang() FR/EN, min-720: breakpoints
 *   - Mobile (<720px): vertical node stack with VertConnector
 *   - Desktop (≥720px): original horizontal absolute layout
 */

import { motion } from 'framer-motion'
import { useLang } from '@/components/app-provider'

/* ============================================================
   Bilingual content
   ============================================================ */
type Rows = ReadonlyArray<readonly [string, string]>

const CONTENT: Record<
  'fr' | 'en',
  {
    figMain: string
    figShort: string
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
    figMain:  'FIG. 1.1 — TOPOLOGIE SYNC STOCK',
    figShort: 'FIG. 1.1',
    live: 'LIVE · v2.4',
    erpNode:  'ERP / Logiciel de gestion',
    syncNode: 'Synchronisation',
    siteNode: 'Site e‑commerce',
    syncSub:  ['Stock', 'Prix', 'Commandes'],
    title: 'Votre stock, votre site, votre logiciel — connectés.',
    description:
      'On branche votre ERP existant — ou on en construit un sur mesure — directement à votre boutique en ligne. Une seule source de vérité, mise à jour en quelques secondes, sans intervention manuelle.',
    figTable:   'FIG. 1.2 — DIFFÉRENCIATEURS',
    badHeader:  'Sans connexion ERP',
    goodHeader: 'Avec connexion ERP',
    stateOff: 'État · 00',
    stateOn:  'État · 01',
    rowsBad: [
      ['Stock mis à jour à la main, en CSV',         '~2h / jour'],
      ['Ventes de produits déjà épuisés',             '~8 / mois'],
      ['Prix désynchronisés entre canaux',             'manuel'],
      ['Commandes ressaisies dans l’ERP',         'erreurs'],
      ['Pas de source de vérité unique',               '2 bases'],
      ['Réconciliation comptable manuelle',            'fin de mois'],
    ],
    rowsGood: [
      ['Stock synchronisé en temps réel',                      '< 3 s'],
      ['Mises hors‑ligne automatiques à zéro',            'auto'],
      ['Prix poussés depuis l’ERP, un seul endroit',      'bi‑dir'],
      ['Commandes web créées directement dans l’ERP',     'webhook'],
      ['Une seule base — l’ERP fait foi',                 '1 base'],
      ['Export comptable automatisé',                           'quotidien'],
    ],
  },
  en: {
    figMain:  'FIG. 1.1 — STOCK SYNC TOPOLOGY',
    figShort: 'FIG. 1.1',
    live: 'LIVE · v2.4',
    erpNode:  'ERP / Management tool',
    syncNode: 'Synchronisation',
    siteNode: 'E‑commerce site',
    syncSub:  ['Stock', 'Prices', 'Orders'],
    title: 'Your stock, your site, your software — connected.',
    description:
      'We connect your existing ERP — or build a custom one — directly to your online store. One single source of truth, updated in seconds, with no manual intervention.',
    figTable:   'FIG. 1.2 — DIFFERENTIATORS',
    badHeader:  'Without ERP connection',
    goodHeader: 'With ERP connection',
    stateOff: 'State · 00',
    stateOn:  'State · 01',
    rowsBad: [
      ['Stock updated manually, via CSV',               '~2h / day'],
      ['Sales of already out-of-stock items',            '~8 / month'],
      ['Prices out of sync between channels',            'manual'],
      ['Orders re-keyed into the ERP',                   'errors'],
      ['No single source of truth',                      '2 databases'],
      ['Manual accounting reconciliation',               'end of month'],
    ],
    rowsGood: [
      ['Stock synced in real time',                      '< 3 s'],
      ['Automatic zero-stock takedowns',                 'auto'],
      ['Prices pushed from ERP, one place',              'bi‑dir'],
      ['Web orders created directly in ERP',             'webhook'],
      ['One database — ERP is the authority',            '1 db'],
      ['Automated accounting export',                    'daily'],
    ],
  },
}

/* ============================================================
   Geometry — desktop horizontal layout only
   ============================================================ */
const GEO = {
  vbW: 1000,
  vbH: 360,
  leftRight:   320,
  centerLeft:  400,
  centerRight: 600,
  rightLeft:   680,
  ySide:   180,
  yCenter: 152,
  leftPath:  'M 320 180 C 355 180, 365 152, 400 152',
  rightPath: 'M 600 152 C 635 152, 645 180, 680 180',
} as const

/* ============================================================
   BezierConnector — 3-layer animated path (desktop + mobile)
   ============================================================ */
function BezierConnector({
  d, gradId, gradStart, gradEnd,
}: {
  d: string
  gradId: string
  gradStart: { x: number; y: number }
  gradEnd:   { x: number; y: number }
}) {
  return (
    <>
      <defs>
        <linearGradient
          id={gradId}
          gradientUnits="userSpaceOnUse"
          x1={gradStart.x} y1={gradStart.y}
          x2={gradEnd.x}   y2={gradEnd.y}
        >
          <stop offset="0%"   stopColor="rgba(255,255,255,0.06)" />
          <stop offset="30%"  stopColor="rgba(255,255,255,0.32)" />
          <stop offset="70%"  stopColor="rgba(255,255,255,0.32)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke={`url(#${gradId})`} strokeWidth={1.25} />
      <motion.path
        d={d} fill="none"
        stroke="rgba(255,255,255,0.22)" strokeWidth={1}
        strokeLinecap="round" strokeDasharray="3 5"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -160 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
      <motion.path
        d={d} fill="none"
        stroke="rgba(255,255,255,0.9)" strokeWidth={1.5}
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
   Diamond marker — pulsing rotated square
   ============================================================ */
function Diamond({
  left, top, bright = false,
}: {
  left: string
  top:  string
  bright?: boolean
}) {
  return (
    <motion.span
      aria-hidden
      className="absolute pointer-events-none"
      style={{
        left, top,
        width: 11, height: 11,
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
          background: bright ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.08)',
          border: '0.5px solid rgba(255,255,255,0.1)',
        }}
      />
    </motion.span>
  )
}

/* ============================================================
   Node — desktop only (absolute positioning)
   ============================================================ */
function Node({
  children, variant = 'side', style,
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
          left: '40%', width: '20%',
          top: 'calc(50% - 28px)', transform: 'translateY(-50%)',
          padding: '20px 14px',
          fontSize: 13.5, letterSpacing: '-0.005em', lineHeight: 1.3,
          background: 'linear-gradient(180deg, #141414 0%, #0d0d0d 100%)',
          border: '1px solid rgba(255,255,255,0.18)',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.03), 0 24px 60px rgba(0,0,0,0.55)',
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
        top: '50%', width: '30%', transform: 'translateY(-50%)',
        padding: '18px 16px',
        fontSize: 13.5, letterSpacing: '-0.005em', lineHeight: 1.3,
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
   MobileNode — flow layout (not absolute), used in vertical stack
   ============================================================ */
function MobileNode({
  children, center = false,
}: {
  children: React.ReactNode
  center?: boolean
}) {
  return (
    <div
      className="w-full text-center text-white font-medium rounded-[10px]"
      style={{
        padding: '14px 16px',
        fontSize: 14, letterSpacing: '-0.005em', lineHeight: 1.35,
        background: center
          ? 'linear-gradient(180deg, #141414 0%, #0d0d0d 100%)'
          : '#0e0e0e',
        border: center
          ? '1px solid rgba(255,255,255,0.18)'
          : '1px solid rgba(255,255,255,0.10)',
        boxShadow: center
          ? '0 0 0 1px rgba(255,255,255,0.03), 0 16px 40px rgba(0,0,0,0.55)'
          : undefined,
      }}
    >
      {children}
    </div>
  )
}

/* ============================================================
   VertConnector — vertical bezier for mobile stack.
   The wrapping div is `position: relative` so diamonds inside
   can be absolutely positioned at the path endpoints.
   Diamonds are rendered after the SVG (later in DOM = higher paint
   order) so they sit above the stroke without needing z-index hacks.
   ============================================================ */
function VertConnector({ gradId }: { gradId: string }) {
  const W = 80
  const H = 56
  const cx = W / 2  // 40
  const d  = `M ${cx} 0 C ${cx - 10} ${H * 0.35}, ${cx + 10} ${H * 0.65}, ${cx} ${H}`

  return (
    <div
      className="relative flex-shrink-0 self-center"
      style={{ width: W, height: H }}
    >
      <svg
        width={W}
        height={H}
        aria-hidden
        style={{ overflow: 'visible', display: 'block' }}
      >
        <defs>
          <linearGradient
            id={gradId}
            gradientUnits="userSpaceOnUse"
            x1={cx} y1={0} x2={cx} y2={H}
          >
            <stop offset="0%"   stopColor="rgba(255,255,255,0.06)" />
            <stop offset="40%"  stopColor="rgba(255,255,255,0.32)" />
            <stop offset="60%"  stopColor="rgba(255,255,255,0.32)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
          </linearGradient>
        </defs>

        {/* Gradient stroke */}
        <path d={d} fill="none" stroke={`url(#${gradId})`} strokeWidth={1.25} />

        {/* Dashed flow — comet travels shorter path so duration is halved */}
        <motion.path
          d={d} fill="none"
          stroke="rgba(255,255,255,0.22)" strokeWidth={1}
          strokeLinecap="round" strokeDasharray="3 5"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -80 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />

        {/* Comet */}
        <motion.path
          d={d} fill="none"
          stroke="rgba(255,255,255,0.9)" strokeWidth={1.5}
          strokeLinecap="round"
          initial={{ pathLength: 0.18, pathOffset: 0 }}
          animate={{ pathOffset: 1 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.6))' }}
        />
      </svg>

      {/* Diamonds — after SVG so they paint on top */}
      <Diamond left="50%" top="0%"    />
      <Diamond left="50%" top="100%"  />
    </div>
  )
}

/* ============================================================
   Comparison row
   ============================================================ */
function Row({
  label, meta, variant,
}: {
  label: string
  meta:  string
  variant: 'bad' | 'good'
}) {
  const isBad = variant === 'bad'
  return (
    <div
      className="flex items-start gap-3 min-720:gap-3.5 py-2.5 text-[13px] min-720:text-[14px] leading-[1.45] border-t first:border-t-0"
      style={{
        borderColor: 'rgba(255,255,255,0.06)',
        color: isBad ? 'rgba(255,255,255,0.56)' : 'rgba(255,255,255,0.88)',
      }}
    >
      <span
        className="flex-shrink-0 grid place-items-center rounded font-semibold text-[10px] leading-none"
        style={{
          width: 18, height: 18, marginTop: 1,
          background: isBad ? 'rgba(255,80,80,0.05)' : 'rgba(255,255,255,0.06)',
          color:      isBad ? 'rgba(255,80,80,0.70)' : '#ffffff',
          border:     `1px solid ${isBad ? 'rgba(255,80,80,0.18)' : 'rgba(255,255,255,0.18)'}`,
        }}
      >
        {isBad ? '✕' : '✓'}
      </span>
      <span className="flex-1 min-w-0">{label}</span>
      <span
        className="font-mono text-[10px] min-720:text-[10.5px] tracking-[0.04em] flex-shrink-0 self-center"
        style={{ color: 'rgba(255,255,255,0.36)' }}
      >
        {meta}
      </span>
    </div>
  )
}

/* ============================================================
   Dot grid — reused in both desktop and mobile figure areas
   ============================================================ */
function DotGrid() {
  return (
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
      className="flex items-center justify-center px-4 py-10 min-720:px-6 min-720:py-16"
      style={{
        background:
          'radial-gradient(1200px 600px at 50% -10%, rgba(255,255,255,0.025), transparent 60%), #080808',
        color: 'rgba(255,255,255,0.88)',
      }}
    >
      <div
        className="relative w-full max-w-[1280px] overflow-hidden rounded-2xl min-720:rounded-3xl"
        style={{
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.10)',
        }}
      >
        {/* FIG label — always shown, long form hidden on mobile */}
        <div
          className="absolute font-mono uppercase"
          style={{
            top: 28, left: 20,
            fontSize: 10, letterSpacing: '0.16em',
            color: 'rgba(255,255,255,0.36)',
            zIndex: 4,
          }}
        >
          <span className="min-720:hidden">{t.figShort}</span>
          <span className="hidden min-720:inline whitespace-nowrap">{t.figMain}</span>
        </div>

        {/* Live indicator — hidden on mobile (would collide with FIG label) */}
        <div
          className="hidden min-720:flex absolute font-mono uppercase whitespace-nowrap items-center gap-2"
          style={{
            top: 28, right: 36,
            fontSize: 11, letterSpacing: '0.16em',
            color: 'rgba(255,255,255,0.36)',
            zIndex: 4,
          }}
        >
          <motion.span
            className="block rounded-full"
            style={{
              width: 5, height: 5,
              background: 'rgba(255,255,255,0.55)',
              boxShadow: '0 0 8px rgba(255,255,255,0.45)',
            }}
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.85, 1, 0.85] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span>{t.live}</span>
        </div>

        {/* ── Figure area ── */}
        <div className="relative px-4 min-720:px-10 pt-16 min-720:pt-20 pb-6 min-720:pb-12">

          {/* ══ DESKTOP horizontal layout (≥720px) ══ */}
          <div
            className="relative hidden min-720:block w-full mt-6"
            style={{ height: 360 }}
          >
            <DotGrid />

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
                gradStart={{ x: GEO.leftRight,   y: GEO.ySide   }}
                gradEnd  ={{ x: GEO.centerLeft,  y: GEO.yCenter }}
              />
              <BezierConnector
                d={GEO.rightPath}
                gradId="erp-fade-r"
                gradStart={{ x: GEO.centerRight, y: GEO.yCenter }}
                gradEnd  ={{ x: GEO.rightLeft,   y: GEO.ySide   }}
              />
            </svg>

            <Diamond left="32%" top="50%" />
            <Diamond left="40%" top="calc(50% - 28px)" bright />
            <Diamond left="60%" top="calc(50% - 28px)" bright />
            <Diamond left="68%" top="50%" />

            <Node variant="side" style={{ left: '2%' }}>{t.erpNode}</Node>
            <Node variant="center">{t.syncNode}</Node>
            <Node variant="side" style={{ left: '68%' }}>{t.siteNode}</Node>

            <div
              className="absolute font-mono whitespace-nowrap flex items-center gap-2.5"
              style={{
                left: '50%', top: 'calc(50% + 20px)',
                transform: 'translateX(-50%)',
                fontSize: 11, letterSpacing: '0.14em',
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

          {/* ══ MOBILE vertical layout (<720px) ══ */}
          <div className="relative min-720:hidden w-full max-w-[300px] mx-auto mt-8">
            <DotGrid />

            <div className="relative flex flex-col items-center gap-0">
              {/* Node 0 */}
              <MobileNode>{t.erpNode}</MobileNode>

              {/* Connector ① */}
              <VertConnector gradId="erp-vc1" />

              {/* Node 1 — center */}
              <MobileNode center>{t.syncNode}</MobileNode>

              {/* Sub-labels */}
              <div
                className="font-mono flex items-center gap-2 mt-2 mb-0"
                style={{
                  fontSize: 10, letterSpacing: '0.14em',
                  color: 'rgba(255,255,255,0.36)',
                }}
              >
                <span>{t.syncSub[0]}</span>
                <span className="opacity-45">·</span>
                <span>{t.syncSub[1]}</span>
                <span className="opacity-45">·</span>
                <span>{t.syncSub[2]}</span>
              </div>

              {/* Connector ② */}
              <VertConnector gradId="erp-vc2" />

              {/* Node 2 */}
              <MobileNode>{t.siteNode}</MobileNode>
            </div>
          </div>

          {/* Caption — title + description (shared) */}
          <div className="mt-8 min-720:mt-6 max-w-[640px] pr-0 min-720:pr-6">
            <h2
              className="m-0 text-white font-[650] tracking-[-0.018em]"
              style={{
                fontSize: 'clamp(22px, 5vw, 28px)',
                lineHeight: 1.15,
                textWrap: 'balance' as React.CSSProperties['textWrap'],
              }}
            >
              {t.title}
            </h2>
            <p
              className="m-0 mt-3 max-w-[560px]"
              style={{
                fontSize: 'clamp(14px, 3.5vw, 15.5px)',
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
        <div className="px-4 min-720:px-14 py-8 min-720:py-14">
          <div
            className="font-mono uppercase mb-4 min-720:mb-5"
            style={{
              fontSize: 10, letterSpacing: '0.16em',
              color: 'rgba(255,255,255,0.36)',
            }}
          >
            {t.figTable}
          </div>

          <div
            className="grid grid-cols-1 min-720:grid-cols-2 rounded-xl min-720:rounded-2xl overflow-hidden"
            style={{
              background: '#0d0d0d',
              border: '1px solid rgba(255,255,255,0.10)',
            }}
          >
            {/* BAD column */}
            <div className="erp-compare-left p-5 min-720:p-9">
              <div
                className="flex items-center justify-between mb-5 min-720:mb-6"
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  paddingBottom: 16,
                }}
              >
                <div
                  className="font-semibold uppercase tracking-[0.04em]"
                  style={{ fontSize: 12, color: 'rgba(255,255,255,0.36)' }}
                >
                  {t.badHeader}
                </div>
                <div
                  className="font-mono uppercase"
                  style={{
                    fontSize: 10, letterSpacing: '0.14em',
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
            <div className="p-5 min-720:p-9">
              <div
                className="flex items-center justify-between mb-5 min-720:mb-6"
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  paddingBottom: 16,
                }}
              >
                <div
                  className="font-semibold uppercase tracking-[0.04em] text-white"
                  style={{ fontSize: 12 }}
                >
                  {t.goodHeader}
                </div>
                <div
                  className="font-mono uppercase"
                  style={{
                    fontSize: 10, letterSpacing: '0.14em',
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
