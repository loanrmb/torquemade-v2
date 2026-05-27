'use client'

/**
 * ErpFeatureSection — Torquemade
 *
 * FIG. 1.1 — three overlapping panels (Linear.app style):
 *   LEFT   — dark ERP stock table
 *   MIDDLE — dark API webhook code block
 *   RIGHT  — light Shopify-style inventory panel
 *
 * FIG. 1.2 — comparison table (Sans / Avec connexion ERP)
 *
 * Adapted from HeroSyncTopology.jsx (designer export):
 *   - Named export, useLang() FR/EN, min-720: breakpoints
 *   - Panel widths use % (41.67 % each) so the overlap scales
 *     correctly from 720 px up; Connectors SVG uses the same
 *     proportions via preserveAspectRatio="none"
 *   - Mobile (<720px): panels stacked in a flex column
 */

import { motion } from 'framer-motion'
import { useLang } from '@/components/app-provider'

/* ============================================================
   Shared ease
   ============================================================ */
const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1]

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
    /* left panel */
    panelLeftTitle: string
    connected: string
    colProduct: string
    colSku: string
    colStock: string
    colPrice: string
    /* middle panel */
    apiLabel: string
    realtimeLabel: string
    /* right panel */
    panelRightTitle: string
    colStatus: string
    statusActive: string
    lastSync: string
    /* caption */
    title: string
    description: string
    /* comparison table */
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

    panelLeftTitle: 'Logiciel de stock',
    connected:      'Connecté',
    colProduct: 'Produit',
    colSku:     'SKU',
    colStock:   'Stock',
    colPrice:   'Prix',

    apiLabel:      'API · Webhook sync',
    realtimeLabel: 'mise à jour en temps réel',

    panelRightTitle: 'Site e-commerce',
    colStatus:    'Statut',
    statusActive: 'Actif',
    lastSync:     'Dernière sync : il y a 2 s',

    title: 'Votre stock, votre site, votre logiciel — connectés.',
    description:
      'On branche votre ERP existant — ou on en construit un sur mesure — directement à votre boutique en ligne. Une seule source de vérité, mise à jour en quelques secondes, sans intervention manuelle.',

    figTable:   'FIG. 1.2 — DIFFÉRENCIATEURS',
    badHeader:  'Sans connexion ERP',
    goodHeader: 'Avec connexion ERP',
    stateOff:   'État · 00',
    stateOn:    'État · 01',
    rowsBad: [
      ['Stock mis à jour à la main, en CSV',  '~2h / jour'],
      ['Ventes de produits déjà épuisés',      '~8 / mois'],
      ['Prix désynchronisés entre canaux',      'manuel'],
      ["Commandes ressaisies dans l’ERP",  'erreurs'],
      ['Pas de source de vérité unique',        '2 bases'],
      ['Réconciliation comptable manuelle',     'fin de mois'],
    ],
    rowsGood: [
      ['Stock synchronisé en temps réel',                       '< 3 s'],
      ['Mises hors‑ligne automatiques à zéro',             'auto'],
      ["Prix poussés depuis l'ERP, un seul endroit",       'bi‑dir'],
      ["Commandes web créées directement dans l'ERP",      'webhook'],
      ["Une seule base — l'ERP fait foi",                  '1 base'],
      ['Export comptable automatisé',                           'quotidien'],
    ],
  },
  en: {
    figMain:  'FIG. 1.1 — STOCK SYNC TOPOLOGY',
    figShort: 'FIG. 1.1',
    live:     'LIVE · v2.4',

    panelLeftTitle: 'Stock software',
    connected:      'Connected',
    colProduct: 'Product',
    colSku:     'SKU',
    colStock:   'Stock',
    colPrice:   'Price',

    apiLabel:      'API · Webhook sync',
    realtimeLabel: 'real-time update',

    panelRightTitle: 'E-commerce site',
    colStatus:    'Status',
    statusActive: 'Active',
    lastSync:     'Last sync: 2s ago',

    title: 'Your stock, your site, your software — connected.',
    description:
      'We connect your existing ERP — or build a custom one — directly to your online store. One single source of truth, updated in seconds, with no manual intervention.',

    figTable:   'FIG. 1.2 — DIFFERENTIATORS',
    badHeader:  'Without ERP connection',
    goodHeader: 'With ERP connection',
    stateOff:   'State · 00',
    stateOn:    'State · 01',
    rowsBad: [
      ['Stock updated manually, via CSV',        '~2h / day'],
      ['Sales of already out-of-stock items',    '~8 / month'],
      ['Prices out of sync between channels',    'manual'],
      ['Orders re-keyed into the ERP',           'errors'],
      ['No single source of truth',              '2 databases'],
      ['Manual accounting reconciliation',       'end of month'],
    ],
    rowsGood: [
      ['Stock synced in real time',               '< 3 s'],
      ['Automatic zero-stock takedowns',          'auto'],
      ['Prices pushed from ERP, one place',       'bi‑dir'],
      ['Web orders created directly in ERP',      'webhook'],
      ['One database — ERP is the authority',     '1 db'],
      ['Automated accounting export',             'daily'],
    ],
  },
}

/* ============================================================
   Product data — same in both languages, moto-industry context
   ============================================================ */
const ERP_ROWS = [
  { name: 'Casque Shoei',      sku: 'SH-001', stock: '12', price: '389 €' },
  { name: "Veste Rev'It",      sku: 'RV-204', stock: '8',  price: '299 €' },
  { name: 'Gants Alpinestars', sku: 'AL-110', stock: '23', price: '129 €' },
  { name: 'Botte TCX',         sku: 'TX-550', stock: '5',  price: '189 €' },
] as const

const ECOM_ROWS = [
  { emoji: '🪖', name: 'Casque Shoei',      stock: '12' },
  { emoji: '🧥', name: "Veste Rev'It",      stock: '8'  },
  { emoji: '🧤', name: 'Gants Alpinestars', stock: '23' },
  { emoji: '👢', name: 'Botte TCX',         stock: '5'  },
] as const

/*
 * Right-panel grid: 4 cols (emoji · name · stock · status)
 * Using minmax so the name column never goes below 60 px
 * — works from the 267 px panel width at 720 px screen upwards.
 */
const ECOM_GRID = '36px minmax(60px,1fr) 48px 72px'

/* ============================================================
   GreenDot — shared pulsing indicator
   ============================================================ */
function GreenDot({ size = 6 }: { size?: number }) {
  return (
    <motion.span
      className="block rounded-full flex-shrink-0"
      style={{
        width: size, height: size,
        background: '#4ade80',
        boxShadow: '0 0 7px rgba(74,222,128,0.55)',
      }}
      animate={{ opacity: [1, 0.45, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

/* ============================================================
   Connectors — two dashed-flow SVG lines (desktop only)
   viewBox="0 0 1200 380" + preserveAspectRatio="none" means
   x-coordinates map proportionally to container width, so the
   connectors stay in the correct overlap zones at any size.
   ============================================================ */
function Connectors() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[5] h-full w-full overflow-visible"
      viewBox="0 0 1200 380"
      preserveAspectRatio="none"
      aria-hidden
    >
      <DashedFlow x1={280} x2={432} y={362} delay={0} />
      <DashedFlow x1={630} x2={782} y={362} delay={1.2} />
    </svg>
  )
}

function DashedFlow({
  x1, x2, y, delay,
}: {
  x1: number; x2: number; y: number; delay: number
}) {
  return (
    <g>
      <motion.line
        x1={x1} y1={y} x2={x2} y2={y}
        stroke="rgba(255,255,255,0.22)"
        strokeWidth={1}
        strokeDasharray="4 5"
        fill="none"
        animate={{ strokeDashoffset: [0, -90] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'linear', delay }}
      />
      {/* arrow tip */}
      <polyline
        points={`${x2 - 6},${y - 4} ${x2},${y} ${x2 - 6},${y + 4}`}
        stroke="rgba(255,255,255,0.50)"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* pulsing origin dot */}
      <motion.circle
        cx={x1} cy={y}
        fill="rgba(255,255,255,0.55)"
        animate={{ opacity: [0.55, 1, 0.55], r: [2.5, 3.5, 2.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay }}
      />
    </g>
  )
}

/* ============================================================
   LEFT PANEL — ERP stock table (dark)
   ============================================================ */
function ErpPanel({ t }: { t: typeof CONTENT['fr'] }) {
  return (
    <article
      aria-label={t.panelLeftTitle}
      className="h-full overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#0d0d0d] text-white flex flex-col"
      style={{
        boxShadow:
          '0 0 0 1px rgba(255,255,255,0.015), 0 18px 40px rgba(0,0,0,0.45), 0 4px 12px rgba(0,0,0,0.35)',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <header className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
        <span className="whitespace-nowrap text-[13.5px] font-semibold tracking-tight">
          {t.panelLeftTitle}
        </span>
        <span
          className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/40"
          style={{ fontFamily: 'var(--font-mono, monospace)' }}
        >
          ERP
        </span>
      </header>

      <div className="flex-1 overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {[t.colProduct, t.colSku, t.colStock, t.colPrice].map((h, i) => (
                <th
                  key={h}
                  className={`border-b border-white/[0.08] px-5 pb-2.5 pt-3 text-[10px] font-normal uppercase tracking-[0.12em] text-white/40 ${
                    i === 3 ? 'text-right' : 'text-left'
                  }`}
                  style={{ fontFamily: 'var(--font-mono, monospace)' }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ERP_ROWS.map((r, i) => (
              <tr
                key={r.sku}
                className={i < ERP_ROWS.length - 1 ? 'border-b border-white/[0.04]' : ''}
              >
                <td
                  className="max-w-0 overflow-hidden text-ellipsis whitespace-nowrap px-5 py-3 align-middle text-[13px] text-white/90"
                  style={{ maxWidth: '1px' /* forces truncation in table */ }}
                >
                  {r.name}
                </td>
                <td
                  className="whitespace-nowrap px-5 py-3 align-middle text-[11.5px] tracking-[0.02em] text-white/40"
                  style={{ fontFamily: 'var(--font-mono, monospace)' }}
                >
                  {r.sku}
                </td>
                <td
                  className="whitespace-nowrap px-5 py-3 align-middle text-[13px] text-white tabular-nums"
                  style={{ fontFamily: 'var(--font-mono, monospace)' }}
                >
                  {r.stock}
                </td>
                <td
                  className="whitespace-nowrap px-5 py-3 align-middle text-right text-[13px] text-white/90 tabular-nums"
                  style={{ fontFamily: 'var(--font-mono, monospace)' }}
                >
                  {r.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="flex items-center gap-2 border-t border-white/[0.08] bg-white/[0.012] px-5 py-3 text-[12px] text-white/55">
        <GreenDot size={6} />
        {t.connected}
      </footer>
    </article>
  )
}

/* ============================================================
   Syntax token helpers for the code block
   ============================================================ */
const CLine  = ({ children }: { children: React.ReactNode }) => <span className="block whitespace-pre">{children}</span>
const Verb   = ({ children }: { children: React.ReactNode }) => <span className="font-medium text-white">{children}</span>
const CPath  = ({ children }: { children: React.ReactNode }) => <span className="text-white/90">{children}</span>
const CKey   = ({ children }: { children: React.ReactNode }) => <span className="text-white/[0.78]">{children}</span>
const CStr   = ({ children }: { children: React.ReactNode }) => <span className="text-white/[0.62]">{children}</span>
const CNum   = ({ children }: { children: React.ReactNode }) => <span className="text-white">{children}</span>
const CMute  = ({ children }: { children: React.ReactNode }) => <span className="text-white/40">{children}</span>
const CBrace = ({ children }: { children: React.ReactNode }) => <span className="text-white/40">{children}</span>

/* ============================================================
   MIDDLE PANEL — API webhook code block (dark)
   ============================================================ */
function ApiPanel({ t }: { t: typeof CONTENT['fr'] }) {
  return (
    <aside
      aria-label="Requête API sync"
      className="h-full flex flex-col rounded-[12px] border border-white/[0.08] px-5 pb-3.5 pt-4 text-white/55"
      style={{
        background: 'rgba(13,13,13,0.94)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        boxShadow:
          '0 0 0 1px rgba(255,255,255,0.02), 0 24px 50px rgba(0,0,0,0.55), 0 6px 18px rgba(0,0,0,0.4)',
        fontFamily: 'var(--font-mono, monospace)',
        fontSize: 12.5,
        lineHeight: 1.75,
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {/* top label */}
      <div className="mb-2 flex items-center gap-2 whitespace-nowrap border-b border-white/[0.06] pb-2.5 text-[10.5px] uppercase tracking-[0.14em] text-white/40">
        <GreenDot size={6} />
        <span>{t.apiLabel}</span>
      </div>

      {/* code body */}
      <div className="flex-1 overflow-hidden">
        <CLine><Verb>POST</Verb> <CPath>/api/sync</CPath> <CMute>HTTP/1.1</CMute></CLine>
        <CLine><CKey>Authorization:</CKey> <CMute>Bearer</CMute> <CStr>sk_live_***</CStr></CLine>
        <span className="block h-1.5" />
        <CLine><CBrace>{'{'}</CBrace></CLine>
        <CLine>{'  '}<CKey>&quot;sku&quot;</CKey><CMute>:</CMute> <CStr>&quot;SH-001&quot;</CStr><CMute>,</CMute></CLine>
        <CLine>{'  '}<CKey>&quot;stock&quot;</CKey><CMute>:</CMute> <CNum>12</CNum><CMute>,</CMute></CLine>
        <CLine>{'  '}<CKey>&quot;price&quot;</CKey><CMute>:</CMute> <CNum>389</CNum></CLine>
        <CLine><CBrace>{'}'}</CBrace></CLine>
        <span className="my-2.5 -mx-1 block h-px bg-white/[0.06]" />
        <CLine>
          <span className="text-white/40">→</span>{' '}
          <span style={{ color: '#4ade80' }}>200 OK</span>{' '}
          <CMute>·</CMute> <CMute>142ms</CMute>
        </CLine>
      </div>

      {/* bottom label */}
      <div className="mt-2 flex items-center gap-1.5 whitespace-nowrap border-t border-white/[0.06] pt-2.5 text-[10.5px] tracking-[0.06em] text-white/40">
        <span className="text-white/55">↓</span>
        <span>{t.realtimeLabel}</span>
      </div>
    </aside>
  )
}

/* ============================================================
   RIGHT PANEL — e-commerce site (light / Shopify-style)
   ============================================================ */
function EcomPanel({ t }: { t: typeof CONTENT['fr'] }) {
  return (
    <article
      aria-label={t.panelRightTitle}
      className="h-full overflow-hidden rounded-[12px] border border-[#e1e3e5] bg-white flex flex-col"
      style={{
        color: '#303030',
        fontFamily: 'var(--font-sans, system-ui, sans-serif)',
        boxShadow:
          '0 0 0 1px rgba(0,0,0,0.04), 0 40px 90px rgba(0,0,0,0.8), 0 16px 36px rgba(0,0,0,0.6)',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <header className="flex items-center justify-between border-b border-[#e1e3e5] bg-[#f6f6f7] px-4 py-3.5">
        <span className="whitespace-nowrap text-[13.5px] font-semibold tracking-tight text-[#1a1a1a]">
          {t.panelRightTitle}
        </span>
      </header>

      {/* column headers */}
      <div
        className="grid items-center gap-2.5 border-b border-[#ebebeb] bg-[#fafafa] px-4 py-2.5 text-[11px] font-medium tracking-[0.01em] text-[#616161]"
        style={{ gridTemplateColumns: ECOM_GRID }}
        aria-hidden
      >
        <span />
        <span>{t.colProduct}</span>
        <span className="text-right">{t.colStock}</span>
        <span className="text-right">{t.colStatus}</span>
      </div>

      {/* rows */}
      <div className="flex-1 overflow-hidden">
        {ECOM_ROWS.map((r) => (
          <div
            key={r.name}
            className="grid items-center gap-2.5 border-b border-[#ebebeb] px-4 py-2.5 text-[13.5px] last:border-b-0"
            style={{ gridTemplateColumns: ECOM_GRID }}
          >
            {/* emoji thumbnail */}
            <span
              className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-[6px] border border-[#e6e6e8] text-[17px] leading-none flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#f4f4f5 0%,#e8e8ea 100%)' }}
            >
              {r.emoji}
            </span>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap font-medium tracking-tight text-[#1a1a1a]">
              {r.name}
            </span>
            <span className="text-right text-[13px] font-medium text-[#303030] tabular-nums">
              {r.stock}
            </span>
            <span className="flex justify-end">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#cdf4dd] py-0.5 pl-1.5 pr-2 text-[11px] font-medium leading-[1.4] text-[#0c5132] whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-[#008060] flex-shrink-0" />
                {t.statusActive}
              </span>
            </span>
          </div>
        ))}
      </div>

      {/* footer */}
      <footer className="flex items-center gap-2 border-t border-[#ebebeb] bg-[#fafafa] px-4 py-2.5 text-[12px] text-[#616161]">
        <span className="inline-flex text-[#008060]">
          <svg
            width="12" height="12" viewBox="0 0 12 12"
            fill="none" stroke="currentColor" strokeWidth={1.6}
            strokeLinecap="round" strokeLinejoin="round"
            aria-hidden
          >
            <path d="M2 5.5a4 4 0 0 1 7-1.6" />
            <path d="M9 2v2.5H6.5" />
            <path d="M10 6.5a4 4 0 0 1-7 1.6" />
            <path d="M3 10V7.5h2.5" />
          </svg>
        </span>
        <span>{t.lastSync}</span>
      </footer>
    </article>
  )
}

/* ============================================================
   Comparison row — unchanged
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
        {/* ── FIG label — short on mobile, full on desktop ── */}
        <div
          className="absolute font-mono uppercase"
          style={{
            top: 28, left: 20,
            fontSize: 10, letterSpacing: '0.16em',
            color: 'rgba(255,255,255,0.36)',
            zIndex: 10,
          }}
        >
          <span className="min-720:hidden">{t.figShort}</span>
          <span className="hidden min-720:inline whitespace-nowrap">{t.figMain}</span>
        </div>

        {/* ── LIVE indicator — hidden on mobile ── */}
        <div
          className="hidden min-720:flex absolute font-mono uppercase whitespace-nowrap items-center gap-2"
          style={{
            top: 28, right: 36,
            fontSize: 11, letterSpacing: '0.16em',
            color: 'rgba(255,255,255,0.36)',
            zIndex: 10,
          }}
        >
          <GreenDot size={5} />
          <span>{t.live}</span>
        </div>

        {/* ── Figure area ── */}
        <div className="relative px-4 min-720:px-8 pt-16 min-720:pt-20 pb-6 min-720:pb-10">

          {/* soft glow behind panel stack */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
            style={{
              width: '100%', height: 700,
              background:
                'radial-gradient(ellipse 60% 55% at 50% 40%, rgba(255,255,255,0.032), rgba(255,255,255,0.010) 40%, transparent 70%)',
              filter: 'blur(8px)',
              zIndex: 0,
            }}
          />

          {/* ══ DESKTOP: three overlapping absolute panels (≥720px) ══
              Each panel: 41.67% of container width (≡ 500/1200).
              Overlap zones:  LEFT–MIDDLE at 29.17%–41.67%
                              MIDDLE–RIGHT at 58.33%–70.84%
              Connectors SVG uses viewBox="0 0 1200 380" + preserveAspectRatio="none"
              so x-coords map proportionally to actual container width.
          ══ */}
          <div
            className="relative hidden min-720:block w-full mt-4"
            style={{ height: 380, zIndex: 1 }}
          >
            <Connectors />

            {/* LEFT — ERP table (z-1, reference position) */}
            <motion.div
              className="absolute z-[1]"
              style={{ left: 0, top: 10, width: '41.67%', height: 340 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.08 }}
            >
              <ErpPanel t={t} />
            </motion.div>

            {/* MIDDLE — API code block (z-2, overlaps LEFT by ~12%) */}
            <motion.div
              className="absolute z-[2]"
              style={{ left: '29.17%', top: 10, width: '41.67%', height: 340 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.2 }}
            >
              <ApiPanel t={t} />
            </motion.div>

            {/* RIGHT — Shopify panel (z-3, overlaps MIDDLE by ~12%) */}
            <motion.div
              className="absolute z-[3]"
              style={{ left: '58.33%', top: 10, width: '41.67%', height: 340 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.32 }}
            >
              <EcomPanel t={t} />
            </motion.div>
          </div>

          {/* ══ MOBILE: stacked panels (<720px) ══ */}
          <div className="relative min-720:hidden flex flex-col gap-4 mt-8 max-w-[420px] mx-auto" style={{ zIndex: 1 }}>
            {/* Keep h-[300px] on dark panels so they don't grow too tall */}
            <div style={{ height: 300 }}><ErpPanel t={t} /></div>
            <div style={{ height: 300 }}><ApiPanel t={t} /></div>
            <EcomPanel t={t} />
          </div>

          {/* Caption — title + description */}
          <div
            className="relative mt-8 min-720:mt-10 max-w-[640px] pr-0 min-720:pr-6"
            style={{ zIndex: 2 }}
          >
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

        {/* ── Comparison table (FIG. 1.2) — unchanged ── */}
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
