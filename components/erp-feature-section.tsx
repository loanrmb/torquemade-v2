'use client'

/**
 * ErpFeatureSection — Torquemade
 * Figure area: Linear.app-style floating UI panels
 *   - LEFT  — stock software mockup with product table
 *   - CENTER — floating monospace API code + animated beam
 *   - RIGHT  — e-commerce site with synced inventory
 * Comparison table (FIG. 1.2) is unchanged.
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
    panelLeft: string
    panelRight: string
    connected: string
    lastSync: string
    colProduct: string
    colSku: string
    colStock: string
    colPrice: string
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
    live:     'LIVE · v2.4',
    panelLeft:  'Logiciel de stock',
    panelRight: 'Site e-commerce',
    connected:  'Connecté',
    lastSync:   'Dernière sync : 2s',
    colProduct: 'Produit',
    colSku:     'SKU',
    colStock:   'Stock',
    colPrice:   'Prix',
    title: 'Votre stock, votre site, votre logiciel — connectés.',
    description:
      'On branche votre ERP existant — ou on en construit un sur mesure — directement à votre boutique en ligne. Une seule source de vérité, mise à jour en quelques secondes, sans intervention manuelle.',
    figTable:   'FIG. 1.2 — DIFFÉRENCIATEURS',
    badHeader:  'Sans connexion ERP',
    goodHeader: 'Avec connexion ERP',
    stateOff: 'État · 00',
    stateOn:  'État · 01',
    rowsBad: [
      ['Stock mis à jour à la main, en CSV',     '~2h / jour'],
      ['Ventes de produits déjà épuisés',         '~8 / mois'],
      ['Prix désynchronisés entre canaux',         'manuel'],
      ['Commandes ressaisies dans l’ERP',    'erreurs'],
      ['Pas de source de vérité unique',           '2 bases'],
      ['Réconciliation comptable manuelle',        'fin de mois'],
    ],
    rowsGood: [
      ['Stock synchronisé en temps réel',                        '< 3 s'],
      ['Mises hors‑ligne automatiques à zéro',              'auto'],
      ['Prix poussés depuis l’ERP, un seul endroit',        'bi‑dir'],
      ['Commandes web créées directement dans l’ERP',       'webhook'],
      ['Une seule base — l’ERP fait foi',                   '1 base'],
      ['Export comptable automatisé',                            'quotidien'],
    ],
  },
  en: {
    figMain:  'FIG. 1.1 — STOCK SYNC TOPOLOGY',
    figShort: 'FIG. 1.1',
    live:     'LIVE · v2.4',
    panelLeft:  'Stock software',
    panelRight: 'E-commerce site',
    connected:  'Connected',
    lastSync:   'Last sync: 2s',
    colProduct: 'Product',
    colSku:     'SKU',
    colStock:   'Stock',
    colPrice:   'Price',
    title: 'Your stock, your site, your software — connected.',
    description:
      'We connect your existing ERP — or build a custom one — directly to your online store. One single source of truth, updated in seconds, with no manual intervention.',
    figTable:   'FIG. 1.2 — DIFFERENTIATORS',
    badHeader:  'Without ERP connection',
    goodHeader: 'With ERP connection',
    stateOff: 'State · 00',
    stateOn:  'State · 01',
    rowsBad: [
      ['Stock updated manually, via CSV',           '~2h / day'],
      ['Sales of already out-of-stock items',        '~8 / month'],
      ['Prices out of sync between channels',        'manual'],
      ['Orders re-keyed into the ERP',               'errors'],
      ['No single source of truth',                  '2 databases'],
      ['Manual accounting reconciliation',           'end of month'],
    ],
    rowsGood: [
      ['Stock synced in real time',                  '< 3 s'],
      ['Automatic zero-stock takedowns',             'auto'],
      ['Prices pushed from ERP, one place',          'bi‑dir'],
      ['Web orders created directly in ERP',         'webhook'],
      ['One database — ERP is the authority',        '1 db'],
      ['Automated accounting export',                'daily'],
    ],
  },
}

/* ============================================================
   Static product data — same in both languages
   ============================================================ */
const PRODUCTS = [
  { name: 'Casque Shoei',      sku: 'SH-001', stock: 12, price: '389 €' },
  { name: "Veste Rev'It",      sku: 'RV-204', stock: 8,  price: '299 €' },
  { name: 'Gants Alpinestars', sku: 'AL-110', stock: 23, price: '129 €' },
  { name: 'Botte TCX',         sku: 'TX-550', stock: 5,  price: '189 €' },
] as const

/* ============================================================
   Dot grid — shared background texture
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
          'radial-gradient(ellipse 65% 75% at 50% 50%, #000 30%, transparent 75%)',
        maskImage:
          'radial-gradient(ellipse 65% 75% at 50% 50%, #000 30%, transparent 75%)',
      }}
    />
  )
}

/* ============================================================
   LEFT PANEL — stock software (ERP / logiciel de stock)
   ============================================================ */
function LeftPanel({ t }: { t: typeof CONTENT['fr'] }) {
  return (
    <div
      className="rounded-xl overflow-hidden w-full"
      style={{
        background: '#0d0d0d',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.55)',
      }}
    >
      {/* Header */}
      <div
        className="px-4 py-[11px] flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <span
          className="text-white font-semibold tracking-tight"
          style={{ fontSize: 13 }}
        >
          {t.panelLeft}
        </span>
        <span
          className="font-mono uppercase"
          style={{ fontSize: 9, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.28)' }}
        >
          ERP
        </span>
      </div>

      {/* Column headers */}
      <div
        className="px-4 pt-3 pb-1.5 grid"
        style={{ gridTemplateColumns: '1fr 56px 36px 48px' }}
      >
        {[t.colProduct, t.colSku, t.colStock, t.colPrice].map((col) => (
          <span
            key={col}
            className="font-mono uppercase"
            style={{ fontSize: 9.5, letterSpacing: '0.10em', color: 'rgba(255,255,255,0.28)' }}
          >
            {col}
          </span>
        ))}
      </div>

      {/* Product rows */}
      <div className="px-4 pb-2">
        {PRODUCTS.map((p, i) => (
          <div
            key={p.sku}
            className="grid py-[6px]"
            style={{
              gridTemplateColumns: '1fr 56px 36px 48px',
              borderTop: i > 0 ? '1px solid rgba(255,255,255,0.04)' : 'none',
            }}
          >
            <span
              className="truncate"
              style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.78)', letterSpacing: '-0.01em' }}
            >
              {p.name}
            </span>
            <span
              className="font-mono"
              style={{ fontSize: 11, color: 'rgba(255,255,255,0.30)' }}
            >
              {p.sku}
            </span>
            <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.68)' }}>{p.stock}</span>
            <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.48)' }}>{p.price}</span>
          </div>
        ))}
      </div>

      {/* Footer — connected status */}
      <div
        className="px-4 py-2 flex items-center gap-1.5"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <motion.span
          className="block rounded-full flex-shrink-0"
          style={{ width: 5, height: 5, background: 'rgba(110,210,110,0.65)' }}
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>{t.connected}</span>
      </div>
    </div>
  )
}

/* ============================================================
   RIGHT PANEL — e-commerce site (Shopify-style inventory)
   ============================================================ */
function RightPanel({ t }: { t: typeof CONTENT['fr'] }) {
  return (
    <div
      className="rounded-xl overflow-hidden w-full"
      style={{
        background: '#111111',
        border: '1px solid rgba(255,255,255,0.13)',
        boxShadow:
          '0 20px 56px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.03)',
      }}
    >
      {/* Header */}
      <div
        className="px-4 py-[11px] flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      >
        <span
          className="text-white font-semibold tracking-tight"
          style={{ fontSize: 13 }}
        >
          {t.panelRight}
        </span>
        <span
          className="font-mono uppercase"
          style={{ fontSize: 9, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.28)' }}
        >
          Shopify
        </span>
      </div>

      {/* Column headers */}
      <div
        className="px-4 pt-3 pb-1.5 grid"
        style={{ gridTemplateColumns: '1fr 44px 14px' }}
      >
        {[t.colProduct, t.colStock].map((col) => (
          <span
            key={col}
            className="font-mono uppercase"
            style={{ fontSize: 9.5, letterSpacing: '0.10em', color: 'rgba(255,255,255,0.28)' }}
          >
            {col}
          </span>
        ))}
        <span />
      </div>

      {/* Product rows */}
      <div className="px-4 pb-2">
        {PRODUCTS.map((p, i) => (
          <div
            key={p.sku}
            className="grid py-[6px] items-center"
            style={{
              gridTemplateColumns: '1fr 44px 14px',
              borderTop: i > 0 ? '1px solid rgba(255,255,255,0.04)' : 'none',
            }}
          >
            <span
              className="truncate"
              style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.80)', letterSpacing: '-0.01em' }}
            >
              {p.name}
            </span>
            <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.72)' }}>{p.stock}</span>
            <span style={{ fontSize: 8, color: 'rgba(100,210,100,0.58)' }}>●</span>
          </div>
        ))}
      </div>

      {/* Footer — last sync */}
      <div
        className="px-4 py-2 flex items-center gap-1.5"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <motion.span
          className="font-mono"
          style={{ fontSize: 11, color: 'rgba(255,255,255,0.30)' }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          ↻
        </motion.span>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.36)' }}>{t.lastSync}</span>
      </div>
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
  meta: string
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
        {/* FIG label — short on mobile, full on desktop */}
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

        {/* LIVE indicator — hidden on mobile */}
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
        <div className="relative px-4 min-720:px-8 pt-16 min-720:pt-20 pb-6 min-720:pb-10">

          {/* ══ DESKTOP: floating panels (≥720px) ══ */}
          {/*
              Layout:
                LEFT  panel: absolute, left=0,    top=40px,  width=44%  (slightly lower, slightly receded)
                RIGHT panel: absolute, right=0,   top=8px,   width=46%  (higher, prominent)
                CENTER code: absolute, centered horizontally between panels
                BEAM  SVG:  absolute inset-0, draws from x=44% to x=54%
          */}
          <div
            className="relative hidden min-720:block w-full mt-4"
            style={{ height: 340 }}
          >
            <DotGrid />

            {/* Beam SVG — drawn in viewBox coords that map to % of container */}
            {/*
                viewBox 1000×340:
                  beam at y=170 (50%), from x=440 (44%) to x=560 (56%)
                preserveAspectRatio="none" stretches proportionally so x% stays x%
            */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 340"
              preserveAspectRatio="none"
              aria-hidden
              style={{ overflow: 'visible' }}
            >
              <defs>
                <linearGradient
                  id="erp-beam-h"
                  gradientUnits="userSpaceOnUse"
                  x1={440} y1={170} x2={560} y2={170}
                >
                  <stop offset="0%"   stopColor="rgba(255,255,255,0.04)" />
                  <stop offset="40%"  stopColor="rgba(255,255,255,0.22)" />
                  <stop offset="60%"  stopColor="rgba(255,255,255,0.22)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
                </linearGradient>
              </defs>

              {/* Static gradient line */}
              <line
                x1={440} y1={170} x2={560} y2={170}
                stroke="url(#erp-beam-h)" strokeWidth={1}
              />

              {/* Dashed flow */}
              <motion.line
                x1={440} y1={170} x2={560} y2={170}
                stroke="rgba(255,255,255,0.16)" strokeWidth={1}
                strokeLinecap="round" strokeDasharray="4 5"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -90 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              />

              {/* Traveling comet */}
              <motion.circle
                cy={170} r={2.5}
                fill="rgba(255,255,255,0.82)"
                style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.65))' }}
                animate={{ cx: [448, 552] }}
                transition={{
                  duration: 1.8, repeat: Infinity,
                  ease: 'easeInOut', repeatType: 'reverse',
                }}
              />
            </svg>

            {/* LEFT panel — slightly lower, slightly receded */}
            <div
              className="absolute z-10"
              style={{ left: 0, top: 40, width: '44%', opacity: 0.88 }}
            >
              <LeftPanel t={t} />
            </div>

            {/* CENTER — API code floats between the panels */}
            <div
              className="absolute z-20 flex flex-col items-center gap-1"
              style={{
                left: '44%', right: '46%',
                top: '50%', transform: 'translateY(-50%)',
              }}
            >
              <motion.div
                className="font-mono text-center"
                style={{
                  fontSize: 10.5, letterSpacing: '0.07em',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.30)',
                }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div style={{ color: 'rgba(255,255,255,0.42)' }}>POST /sync</div>
                <div>queue=0</div>
                <div style={{ color: 'rgba(255,255,255,0.20)' }}>99.9%</div>
              </motion.div>
            </div>

            {/* RIGHT panel — reference position, most prominent */}
            <div
              className="absolute z-30"
              style={{ right: 0, top: 8, width: '46%' }}
            >
              <RightPanel t={t} />
            </div>
          </div>

          {/* ══ MOBILE: stacked panels (<720px) ══ */}
          <div className="relative min-720:hidden w-full max-w-[340px] mx-auto mt-8 flex flex-col gap-3">
            <DotGrid />

            <div className="relative z-10">
              <LeftPanel t={t} />
            </div>

            {/* Mobile connector */}
            <div className="flex flex-col items-center gap-0.5 py-1">
              <motion.div
                className="font-mono text-center"
                style={{
                  fontSize: 10, letterSpacing: '0.07em',
                  lineHeight: 1.75,
                  color: 'rgba(255,255,255,0.28)',
                }}
                animate={{ opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div style={{ color: 'rgba(255,255,255,0.38)' }}>POST /sync</div>
                <div style={{ color: 'rgba(255,255,255,0.18)' }}>99.9%</div>
              </motion.div>
            </div>

            <div className="relative z-10">
              <RightPanel t={t} />
            </div>
          </div>

          {/* Caption — title + description */}
          <div className="mt-8 min-720:mt-10 max-w-[640px] pr-0 min-720:pr-6">
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

        {/* ── Comparison table (FIG. 1.2) ── */}
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
