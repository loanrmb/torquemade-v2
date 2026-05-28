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
 * Desktop (≥768px / md:): absolute overlap layout, 41.67% per panel
 * Mobile  (<768px):        vertical flex stack, simplified panels
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
    panelLeftTitle: string
    connected: string
    colProduct: string
    colSku: string
    colStock: string
    colPrice: string
    apiLabel: string
    realtimeLabel: string
    panelRightTitle: string
    colStatus: string
    statusActive: string
    lastSync: string
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
      ["Commandes ressaisies dans l'ERP",  'erreurs'],
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
   Product data — same in both languages
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
 * Right-panel grid: emoji · name · stock · status
 * minmax keeps the name column ≥60 px at any container width.
 */
const ECOM_GRID = '36px minmax(60px,1fr) 48px 72px'

/* ============================================================
   GreenDot
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
   Connectors — desktop only, dashed-flow SVG
   preserveAspectRatio="none" + viewBox 1200×380 keeps the lines
   in the correct overlap zones at any container width.
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
        stroke="rgba(255,255,255,0.22)" strokeWidth={1}
        strokeDasharray="4 5" fill="none"
        animate={{ strokeDashoffset: [0, -90] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'linear', delay }}
      />
      <polyline
        points={`${x2 - 6},${y - 4} ${x2},${y} ${x2 - 6},${y + 4}`}
        stroke="rgba(255,255,255,0.50)" strokeWidth={1}
        strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
      <motion.circle
        cx={x1} cy={y} fill="rgba(255,255,255,0.55)"
        animate={{ opacity: [0.55, 1, 0.55], r: [2.5, 3.5, 2.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay }}
      />
    </g>
  )
}

/* ============================================================
   LEFT PANEL — ERP stock table (dark)
   mobile prop: strips SKU + PRIX columns, reduces padding/font
   ============================================================ */
function ErpPanel({
  t, mobile = false,
}: {
  t: typeof CONTENT['fr']
  mobile?: boolean
}) {
  const px  = mobile ? 'px-4' : 'px-5'
  const pyH = mobile ? 'py-3' : 'py-4'
  const pyR = mobile ? 'py-[6px]' : 'py-3'
  const fs  = mobile ? 'text-[12px]' : 'text-[13px]'

  return (
    <article
      aria-label={t.panelLeftTitle}
      className="h-full overflow-hidden rounded-[14px] border border-white/[0.08] text-white flex flex-col"
      style={{
        background: 'hsl(var(--bg-dark-card))',
        boxShadow:
          '0 0 0 1px rgba(255,255,255,0.015), 0 18px 40px rgba(0,0,0,0.45), 0 4px 12px rgba(0,0,0,0.35)',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <header
        className={`flex items-center justify-between border-b border-white/[0.08] ${px} ${pyH}`}
      >
        <span className={`whitespace-nowrap font-semibold tracking-tight ${mobile ? 'text-[13px]' : 'text-[13.5px]'}`}>
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
              {/* Produit — always visible */}
              <th
                className={`border-b border-white/[0.08] ${px} pb-2 pt-2.5 text-[10px] font-normal uppercase tracking-[0.12em] text-white/40 text-left`}
                style={{ fontFamily: 'var(--font-mono, monospace)' }}
              >
                {t.colProduct}
              </th>
              {/* SKU — desktop only */}
              {!mobile && (
                <th
                  className="border-b border-white/[0.08] px-5 pb-2.5 pt-3 text-[10px] font-normal uppercase tracking-[0.12em] text-white/40 text-left"
                  style={{ fontFamily: 'var(--font-mono, monospace)' }}
                >
                  {t.colSku}
                </th>
              )}
              {/* Stock — always visible */}
              <th
                className={`border-b border-white/[0.08] ${px} pb-2 pt-2.5 text-[10px] font-normal uppercase tracking-[0.12em] text-white/40 text-left`}
                style={{ fontFamily: 'var(--font-mono, monospace)' }}
              >
                {t.colStock}
              </th>
              {/* Prix — desktop only */}
              {!mobile && (
                <th
                  className="border-b border-white/[0.08] px-5 pb-2.5 pt-3 text-[10px] font-normal uppercase tracking-[0.12em] text-white/40 text-right"
                  style={{ fontFamily: 'var(--font-mono, monospace)' }}
                >
                  {t.colPrice}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {ERP_ROWS.map((r, i) => (
              <tr
                key={r.sku}
                className={i < ERP_ROWS.length - 1 ? 'border-b border-white/[0.04]' : ''}
              >
                {/* Name — always visible */}
                <td
                  className={`max-w-0 overflow-hidden text-ellipsis whitespace-nowrap ${px} ${pyR} align-middle ${fs} text-white/90`}
                  style={{ maxWidth: '1px' }}
                >
                  {r.name}
                </td>
                {/* SKU — desktop only */}
                {!mobile && (
                  <td
                    className="whitespace-nowrap px-5 py-3 align-middle text-[11.5px] tracking-[0.02em] text-white/40"
                    style={{ fontFamily: 'var(--font-mono, monospace)' }}
                  >
                    {r.sku}
                  </td>
                )}
                {/* Stock — always visible */}
                <td
                  className={`whitespace-nowrap ${px} ${pyR} align-middle ${fs} text-white tabular-nums`}
                  style={{ fontFamily: 'var(--font-mono, monospace)' }}
                >
                  {r.stock}
                </td>
                {/* Prix — desktop only */}
                {!mobile && (
                  <td
                    className="whitespace-nowrap px-5 py-3 align-middle text-right text-[13px] text-white/90 tabular-nums"
                    style={{ fontFamily: 'var(--font-mono, monospace)' }}
                  >
                    {r.price}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer
        className={`flex items-center gap-2 border-t border-white/[0.08] bg-white/[0.012] ${px} ${mobile ? 'py-2' : 'py-3'} text-[12px] text-white/55`}
      >
        <GreenDot size={6} />
        {t.connected}
      </footer>
    </article>
  )
}

/* ============================================================
   Syntax token helpers
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
   mobile prop: hides Authorization header, reduces padding/font
   ============================================================ */
function ApiPanel({
  t, mobile = false,
}: {
  t: typeof CONTENT['fr']
  mobile?: boolean
}) {
  return (
    <aside
      aria-label="Requête API sync"
      className={`h-full flex flex-col rounded-[12px] border border-white/[0.08] ${mobile ? 'px-4' : 'px-5'} pb-3.5 pt-4 text-white/55`}
      style={{
        background: 'hsl(var(--bg-dark-card) / 0.94)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        boxShadow:
          '0 0 0 1px rgba(255,255,255,0.02), 0 24px 50px rgba(0,0,0,0.55), 0 6px 18px rgba(0,0,0,0.4)',
        fontFamily: 'var(--font-mono, monospace)',
        fontSize: mobile ? 11.5 : 12.5,
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
        {/* Authorization — hidden on mobile (saves ~1 line of height) */}
        {!mobile && (
          <CLine><CKey>Authorization:</CKey> <CMute>Bearer</CMute> <CStr>sk_live_***</CStr></CLine>
        )}
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
            className="grid items-center gap-2.5 border-b border-[#ebebeb] px-4 py-2.5 text-[13px] last:border-b-0"
            style={{ gridTemplateColumns: ECOM_GRID }}
          >
            <span
              className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-[6px] border border-[#e6e6e8] text-[17px] leading-none flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#f4f4f5 0%,#e8e8ea 100%)' }}
            >
              {r.emoji}
            </span>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap font-medium tracking-tight text-[#1a1a1a]">
              {r.name}
            </span>
            <span className="text-right font-medium text-[#303030] tabular-nums">
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
      className="flex items-center justify-center px-4 py-10 md:px-6 md:py-16"
      style={{
        background:
          'radial-gradient(1200px 600px at 50% -10%, rgba(255,255,255,0.025), transparent 60%), hsl(var(--bg-dark))',
        color: 'rgba(255,255,255,0.88)',
      }}
    >
      <div
        className="relative w-full max-w-[1280px] overflow-hidden rounded-2xl md:rounded-3xl"
        style={{
          background: 'hsl(var(--bg-dark-card))',
          border: '1px solid rgba(255,255,255,0.10)',
        }}
      >
        {/* ── FIG label ── */}
        <div
          className="absolute font-mono uppercase"
          style={{
            top: 28, left: 20,
            fontSize: 10, letterSpacing: '0.16em',
            color: 'rgba(255,255,255,0.36)',
            zIndex: 10,
          }}
        >
          <span className="md:hidden">{t.figShort}</span>
          <span className="hidden md:inline whitespace-nowrap">{t.figMain}</span>
        </div>

        {/* ── LIVE indicator — hidden on mobile ── */}
        <div
          className="hidden md:flex absolute font-mono uppercase whitespace-nowrap items-center gap-2"
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
        <div className="relative px-4 md:px-8 pt-16 md:pt-20 pb-6 md:pb-10">

          {/* soft glow */}
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

          {/* ══ DESKTOP: three overlapping panels (≥768px) ══
              41.67% wide each (≡ 500/1200).
              Connectors SVG: viewBox 1200×380, preserveAspectRatio="none"
              → x-coords map proportionally to container width.
          ══ */}
          <div
            className="relative hidden md:block w-full mt-4"
            style={{ height: 380, zIndex: 1 }}
          >
            <Connectors />

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

          {/* ══ MOBILE: vertical stack (<768px / md:) ══
              - 3 panels in order: ERP → API → Ecom
              - 12px gap (gap-3)
              - No offsets, no fixed heights
              - SKU + PRIX hidden in ERP, Authorization hidden in API
          ══ */}
          <div
            className="relative md:hidden flex flex-col gap-3 mt-8 w-full overflow-hidden"
            style={{ zIndex: 1 }}
          >
            <ErpPanel t={t} mobile />
            <ApiPanel t={t} mobile />
            <EcomPanel t={t} />
          </div>

          {/* Caption */}
          <div
            className="relative mt-8 md:mt-10 max-w-[640px] pr-0 md:pr-6"
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
              background: 'hsl(var(--bg-dark-card))',
              border: '1px solid rgba(255,255,255,0.10)',
            }}
          >
            <div className="erp-compare-left p-5 min-720:p-9">
              <div
                className="flex items-center justify-between mb-5 min-720:mb-6"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 16 }}
              >
                <div
                  className="font-semibold uppercase tracking-[0.04em]"
                  style={{ fontSize: 12, color: 'rgba(255,255,255,0.36)' }}
                >
                  {t.badHeader}
                </div>
                <div
                  className="font-mono uppercase"
                  style={{ fontSize: 10, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.36)' }}
                >
                  {t.stateOff}
                </div>
              </div>
              {t.rowsBad.map(([label, meta]) => (
                <Row key={label} label={label} meta={meta} variant="bad" />
              ))}
            </div>

            <div className="p-5 min-720:p-9">
              <div
                className="flex items-center justify-between mb-5 min-720:mb-6"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 16 }}
              >
                <div
                  className="font-semibold uppercase tracking-[0.04em] text-white"
                  style={{ fontSize: 12 }}
                >
                  {t.goodHeader}
                </div>
                <div
                  className="font-mono uppercase"
                  style={{ fontSize: 10, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.36)' }}
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
