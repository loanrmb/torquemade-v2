'use client'

/**
 * ErpFeatureSection — Torquemade v2
 * ─────────────────────────────────────────────────────────────
 * Three-panel illustration with a live autonomous stock-sync loop:
 *
 *   LEFT  (ERP)  → MIDDLE (API) → RIGHT (e-commerce)
 *
 * Panel depth hierarchy:
 *   RIGHT  z-30 — visual foreground, deep shadow
 *   MIDDLE z-20 — glassmorphism backdrop
 *   LEFT   z-10 — scale(0.95) recessed
 *
 * Stock sync loop (Steps 1–5):
 *   - Fires every 3 500 ± 800 ms (organic jitter)
 *   - 70% DECREASE · 30% INCREASE; decreases 80% from site, 20% from ERP
 *   - First panel updates immediately; propagation after SYNC_DELAY (2 s)
 *   - Row flash + number bump on each update (CSS keyframes, no JS animation)
 *   - API middle panel shows "syncing…" during the 2 s delay
 *   - IntersectionObserver pauses the loop when off-screen
 *   - Respects prefers-reduced-motion (skips loop entirely)
 *   - All timeouts tracked and cleared on unmount
 *
 * Strings: eyebrow + syncLabel → lib/strings.ts | product data → PRODUCTS
 * Animations: transform + opacity only (Emil §6.A hardware-acceleration rule)
 */

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'

/* ─── Ease (Emil strong curve) ──────────────────────────────── */
const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1]

/* ─── Comparison table stagger variants ─────────────────────── */
const revealContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const revealItem: Variants = {
  hidden:   { opacity: 0, y: 44 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

/* ─── Bilingual content (UI labels only — stock data in PRODUCTS) */
type Rows = ReadonlyArray<readonly [string, string]>

const CONTENT: Record<
  'fr' | 'en',
  {
    panelLeftTitle: string
    connected: string
    colProduct: string
    colSku: string
    colStock: string
    colPrice: string
    apiLabel: string
    realtimeLabel: string
    syncing: string
    apiOk: string
    panelRightTitle: string
    colStatus: string
    statusActive: string
    title: string
    description: string
    badHeader: string
    goodHeader: string
    stateOff: string
    stateOn: string
    rowsBad: Rows
    rowsGood: Rows
  }
> = {
  fr: {
    panelLeftTitle:  'Logiciel de stock',
    connected:       'Connecté',
    colProduct:      'Produit',
    colSku:          'SKU',
    colStock:        'Stock',
    colPrice:        'Prix',
    apiLabel:        'API · Webhook sync',
    realtimeLabel:   'mise à jour en temps réel',
    syncing:         'syncing…',
    apiOk:           '200 OK',
    panelRightTitle: 'Site e-commerce',
    colStatus:       'Statut',
    statusActive:    'Actif',
    title:           'Votre stock, votre site, votre logiciel — connectés.',
    description:     'On branche votre ERP existant — ou on en construit un sur mesure — directement à votre boutique en ligne. Une seule source de vérité, mise à jour en quelques secondes, sans intervention manuelle.',
    badHeader:       'Sans connexion ERP',
    goodHeader:      'Avec connexion ERP',
    stateOff:        'État · 00',
    stateOn:         'État · 01',
    rowsBad: [
      ['Stock mis à jour à la main, en CSV',  '~2h / jour'],
      ['Ventes de produits déjà épuisés',      '~8 / mois'],
      ['Prix désynchronisés entre canaux',      'manuel'],
      ["Commandes ressaisies dans l'ERP",      'erreurs'],
      ['Pas de source de vérité unique',        '2 bases'],
      ['Réconciliation comptable manuelle',     'fin de mois'],
    ],
    rowsGood: [
      ['Stock synchronisé en temps réel',                  '< 3 s'],
      ['Mises hors ligne automatiques à zéro',             'auto'],
      ["Prix poussés depuis l'ERP, un seul endroit",       'bi-dir'],
      ["Commandes web créées directement dans l'ERP",      'webhook'],
      ["Une seule base — l'ERP fait foi",                  '1 base'],
      ['Export comptable automatisé',                       'quotidien'],
    ],
  },
  en: {
    panelLeftTitle:  'Stock software',
    connected:       'Connected',
    colProduct:      'Product',
    colSku:          'SKU',
    colStock:        'Stock',
    colPrice:        'Price',
    apiLabel:        'API · Webhook sync',
    realtimeLabel:   'real-time update',
    syncing:         'syncing…',
    apiOk:           '200 OK',
    panelRightTitle: 'E-commerce site',
    colStatus:       'Status',
    statusActive:    'Active',
    title:           'Your stock, your site, your software — connected.',
    description:     'We connect your existing ERP — or build a custom one — directly to your online store. One single source of truth, updated in seconds, with no manual intervention.',
    badHeader:       'Without ERP connection',
    goodHeader:      'With ERP connection',
    stateOff:        'State · 00',
    stateOn:         'State · 01',
    rowsBad: [
      ['Stock updated manually, via CSV',      '~2h / day'],
      ['Sales of already out-of-stock items',  '~8 / month'],
      ['Prices out of sync between channels',  'manual'],
      ['Orders re-keyed into the ERP',         'errors'],
      ['No single source of truth',            '2 databases'],
      ['Manual accounting reconciliation',     'end of month'],
    ],
    rowsGood: [
      ['Stock synced in real time',             '< 3 s'],
      ['Automatic zero-stock takedowns',        'auto'],
      ['Prices pushed from ERP, one place',     'bi-dir'],
      ['Web orders created directly in ERP',    'webhook'],
      ['One database — ERP is the authority',   '1 db'],
      ['Automated accounting export',           'daily'],
    ],
  },
}

/* ─── Products: replaces static ERP_ROWS + ECOM_ROWS ────────── */
const SKUS = ['SH-001', 'RV-204', 'AL-110', 'TX-550'] as const
type SKU = typeof SKUS[number]

interface Product {
  name: string
  emoji: string
  price: number       // numeric — used in the API code block
  priceLabel: string  // formatted — used in ERP table
  initErp: number     // initial ERP stock (max = initErp + MAX_EXCESS)
  initSite: number    // initial site stock
}

const PRODUCTS: Record<SKU, Product> = {
  'SH-001': { name: 'Casque Shoei',      emoji: '🪖', price: 389, priceLabel: '389 €', initErp: 12, initSite: 12 },
  'RV-204': { name: "Veste Rev'It",      emoji: '🧥', price: 299, priceLabel: '299 €', initErp: 8,  initSite: 8  },
  'AL-110': { name: 'Gants Alpinestars', emoji: '🧤', price: 129, priceLabel: '129 €', initErp: 23, initSite: 23 },
  'TX-550': { name: 'Botte TCX',         emoji: '👢', price: 189, priceLabel: '189 €', initErp: 5,  initSite: 5  },
}

const ECOM_GRID = '36px minmax(60px,1fr) 48px 72px'

/* ─── Stock state ────────────────────────────────────────────── */
type StockMap = Record<SKU, { erp: number; site: number }>

const INIT_STOCK: StockMap = {
  'SH-001': { erp: 12, site: 12 },
  'RV-204': { erp: 8,  site: 8  },
  'AL-110': { erp: 23, site: 23 },
  'TX-550': { erp: 5,  site: 5  },
}

/* Data shown in the API code block during + after a sync */
interface SyncingData {
  sku:   SKU
  stock: number  // the new (post-change) value on the origin side
  price: number
}

/* ─── Event loop constants ───────────────────────────────────── */
const MAX_EXCESS  = 6      // stock can rise this many above initial value
const LOOP_BASE   = 3500   // ms between events (before jitter)
const LOOP_JITTER = 800    // ±ms jitter for organic feel
const SYNC_DELAY  = 2000   // ms between first and second panel update

/* ─── Live sync counter (footer "last sync N s ago") ────────── */
function useSyncCounter(): number {
  const [n, setN] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setN(prev => (prev >= 9 ? 0 : prev + 1)), 1000)
    return () => clearInterval(id)
  }, [])
  return n
}

/* ─── Shared panel chrome tokens (dark-adapted, TankLogic-parity) ──
   One vocabulary across the three panels: identical hairline borders,
   16px radius, quiet header bar, mono uppercase tag. Depth is carried
   by layered soft shadows, not by border weight. */
const PANEL_BORDER = 'rgba(255,255,255,0.09)'
const HAIRLINE     = 'rgba(255,255,255,0.07)'

/* ─── GreenDot: soft CSS pulse (no Framer overhead) ─────────── */
function GreenDot({ size = 6 }: { size?: number }) {
  return (
    <span
      className="pulse-dot block rounded-full flex-shrink-0"
      style={{
        width: size,
        height: size,
        background: '#4ade80',
        boxShadow: '0 0 8px 2px rgba(74,222,128,0.45), 0 0 2px rgba(74,222,128,0.8)',
      }}
    />
  )
}

/* ─── WindowDots: macOS-style chrome dots (shared across panels) ── */
function WindowDots({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const c = tone === 'dark' ? 'rgba(255,255,255,0.16)' : '#e2e2e4'
  return (
    <span className="flex flex-shrink-0 gap-1.5" aria-hidden>
      <span className="block h-[7px] w-[7px] rounded-full" style={{ background: c }} />
      <span className="block h-[7px] w-[7px] rounded-full" style={{ background: c }} />
      <span className="block h-[7px] w-[7px] rounded-full" style={{ background: c }} />
    </span>
  )
}

/* ─── PanelHeader: shared title bar — dots · title … [live] tag ── */
function PanelHeader({
  title,
  tag,
  tone = 'dark',
  live = false,
  px = 'px-5',
  py = 'py-3.5',
}: {
  title: string
  tag?: string
  tone?: 'dark' | 'light'
  live?: boolean
  px?: string
  py?: string
}) {
  const light = tone === 'light'
  return (
    <header
      className={`flex items-center justify-between ${px} ${py}`}
      style={{
        borderBottom: `1px solid ${light ? '#e8e8ea' : HAIRLINE}`,
        background: light ? '#f7f7f8' : 'rgba(255,255,255,0.018)',
      }}
    >
      <span className="flex min-w-0 items-center gap-2.5">
        <WindowDots tone={tone} />
        <span
          className={`truncate text-[13px] font-semibold tracking-tight ${light ? 'text-[#1a1a1a]' : 'text-white/90'}`}
        >
          {title}
        </span>
      </span>
      {tag && (
        <span className="ml-3 flex flex-shrink-0 items-center gap-1.5">
          {live && <GreenDot size={5} />}
          <span
            className={`font-mono text-[10px] uppercase tracking-[0.14em] ${light ? 'text-[#8a8a8e]' : 'text-white/38'}`}
          >
            {tag}
          </span>
        </span>
      )}
    </header>
  )
}

/* ─── SVG Connector: crafted data-flow link between panels ──────
   A gradient-faded track with fixed anchor nodes at each end plus a
   glowing packet that travels left→right. Gradient/glow ids are made
   unique per instance (useId) so multiple connectors don't collide. */
function SvgConnector({ className }: { className?: string }) {
  const uid   = useId().replace(/:/g, '')
  const track = `erp-track-${uid}`
  const glow  = `erp-glow-${uid}`
  return (
    <div className={`erp-svg-connector ${className ?? ''}`} aria-hidden>
      <svg viewBox="0 0 132 24" fill="none" preserveAspectRatio="none" className="h-6 w-full">
        <defs>
          <linearGradient id={track} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0"    stopColor="rgba(255,255,255,0)" />
            <stop offset="0.18" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="0.82" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="1"    stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <radialGradient id={glow} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0"   stopColor="rgba(255,255,255,0.9)" />
            <stop offset="0.5" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="1"   stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        {/* Base track — hairline dashed, faded at both ends */}
        <line x1="4" y1="12" x2="128" y2="12" stroke={`url(#${track})`} strokeWidth="1.25" strokeDasharray="1 5" strokeLinecap="round" />

        {/* Fixed anchor nodes */}
        <circle cx="4"   cy="12" r="1.6" fill="rgba(255,255,255,0.45)" />
        <circle cx="128" cy="12" r="1.6" fill="rgba(255,255,255,0.45)" />

        {/* Travelling packet — soft halo + bright core */}
        <circle r="7" cy="12" fill={`url(#${glow})`}>
          <animate attributeName="cx" values="4;128" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.8;1" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <circle r="2" cy="12" fill="#ffffff">
          <animate attributeName="cx" values="4;128" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.8;1" dur="2.6s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}

/* ─── LEFT PANEL — ERP stock table ──────────────────────────── */
function ErpPanel({
  t,
  stock,
  mobile = false,
  onRowRef,
  onNumRef,
}: {
  t: typeof CONTENT['fr']
  stock: StockMap
  mobile?: boolean
  onRowRef?: (sku: SKU, el: HTMLElement | null) => void
  onNumRef?: (sku: SKU, el: HTMLElement | null) => void
}) {
  const px  = mobile ? 'px-4' : 'px-5'
  const pyH = mobile ? 'py-3' : 'py-4'
  const pyR = mobile ? 'py-[6px]' : 'py-3'
  const fs  = mobile ? 'text-[12px]' : 'text-[13px]'

  return (
    <article
      aria-label={t.panelLeftTitle}
      className="erp-glass-panel h-full overflow-hidden rounded-2xl text-white flex flex-col"
      style={{
        background: 'rgba(255,255,255,0.035)',
        border: `1px solid ${PANEL_BORDER}`,
        backdropFilter: 'blur(20px) saturate(1.15)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.15)',
        boxShadow:
          'inset 0 1px 0 rgba(255,255,255,0.05), ' +
          '0 10px 28px rgba(0,0,0,0.35), ' +
          '0 2px 6px rgba(0,0,0,0.22)',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <PanelHeader title={t.panelLeftTitle} tag="ERP" px={px} py={mobile ? 'py-3' : 'py-3.5'} />

      <div className="flex-1 overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className={`border-b border-white/[0.08] ${px} pb-2 pt-2.5 text-[10px] font-normal uppercase tracking-[0.12em] text-white/40 text-left`} style={{ fontFamily: 'var(--font-mono, monospace)' }}>
                {t.colProduct}
              </th>
              {!mobile && (
                <th className="border-b border-white/[0.08] px-5 pb-2.5 pt-3 text-[10px] font-normal uppercase tracking-[0.12em] text-white/40 text-left" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
                  {t.colSku}
                </th>
              )}
              <th className={`border-b border-white/[0.08] ${px} pb-2 pt-2.5 text-[10px] font-normal uppercase tracking-[0.12em] text-white/40 text-left`} style={{ fontFamily: 'var(--font-mono, monospace)' }}>
                {t.colStock}
              </th>
              {!mobile && (
                <th className="border-b border-white/[0.08] px-5 pb-2.5 pt-3 text-[10px] font-normal uppercase tracking-[0.12em] text-white/40 text-right" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
                  {t.colPrice}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {SKUS.map((sku, i) => {
              const p = PRODUCTS[sku]
              return (
                <tr
                  key={sku}
                  ref={el => onRowRef?.(sku, el)}
                  className={i < SKUS.length - 1 ? 'border-b border-white/[0.04]' : ''}
                >
                  <td className={`max-w-0 overflow-hidden text-ellipsis whitespace-nowrap ${px} ${pyR} align-middle ${fs} text-white/90`} style={{ maxWidth: '1px' }}>
                    {p.name}
                  </td>
                  {!mobile && (
                    <td className="whitespace-nowrap px-5 py-3 align-middle text-[11.5px] tracking-[0.02em] text-white/40" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
                      {sku}
                    </td>
                  )}
                  <td className={`whitespace-nowrap ${px} ${pyR} align-middle ${fs} text-white tabular-nums`} style={{ fontFamily: 'var(--font-mono, monospace)' }}>
                    {/* Inner span for num-bump animation (needs display:inline-block) */}
                    <span ref={el => onNumRef?.(sku, el)} className="inline-block tabular-nums">
                      {stock[sku].erp}
                    </span>
                  </td>
                  {!mobile && (
                    <td className="whitespace-nowrap px-5 py-3 align-middle text-right text-[13px] text-white/90 tabular-nums" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
                      {p.priceLabel}
                    </td>
                  )}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <footer
        className={`flex items-center gap-2 bg-white/[0.015] ${px} ${mobile ? 'py-2' : 'py-3'} text-[12px] text-white/55`}
        style={{ borderTop: `1px solid ${HAIRLINE}` }}
      >
        <GreenDot size={6} />
        {t.connected}
      </footer>
    </article>
  )
}

/* ─── Syntax token helpers (API panel) ───────────────────────── */
const CLine  = ({ children }: { children: React.ReactNode }) => <span className="block whitespace-pre">{children}</span>
const Verb   = ({ children }: { children: React.ReactNode }) => <span className="font-medium text-white">{children}</span>
const CPath  = ({ children }: { children: React.ReactNode }) => <span className="text-white/90">{children}</span>
const CKey   = ({ children }: { children: React.ReactNode }) => <span className="text-white/[0.78]">{children}</span>
const CStr   = ({ children }: { children: React.ReactNode }) => <span className="text-white/[0.62]">{children}</span>
const CNum   = ({ children }: { children: React.ReactNode }) => <span className="text-white">{children}</span>
const CMute  = ({ children }: { children: React.ReactNode }) => <span className="text-white/40">{children}</span>
const CBrace = ({ children }: { children: React.ReactNode }) => <span className="text-white/40">{children}</span>

/* ─── MIDDLE PANEL — API code block (glassmorphism) ──────────── */
function ApiPanel({
  t,
  mobile = false,
  isSyncing,
  syncingData,
}: {
  t: typeof CONTENT['fr']
  mobile?: boolean
  isSyncing: boolean
  syncingData: SyncingData | null
}) {
  /* Fall back to SH-001 defaults until first event fires */
  const displaySku   = syncingData?.sku   ?? 'SH-001'
  const displayStock = syncingData?.stock ?? 12
  const displayPrice = syncingData?.price ?? 389

  return (
    <aside
      aria-label="Requête API sync"
      className="erp-glass-panel h-full flex flex-col overflow-hidden rounded-2xl text-white/55"
      style={{
        background: 'rgba(255,255,255,0.028)',
        border: `1px solid ${PANEL_BORDER}`,
        backdropFilter: 'blur(24px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
        boxShadow:
          'inset 0 1px 0 rgba(255,255,255,0.08), ' +
          '0 20px 48px rgba(0,0,0,0.42), ' +
          '0 4px 12px rgba(0,0,0,0.25)',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <PanelHeader title={t.apiLabel} tag="Live" live px={mobile ? 'px-4' : 'px-5'} py="py-3" />

      <div
        className={`flex flex-1 flex-col justify-center overflow-hidden ${mobile ? 'px-4' : 'px-5'} py-3.5`}
        style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: mobile ? 11.5 : 12.5,
          lineHeight: 1.75,
        }}
      >
        <CLine><Verb>POST</Verb> <CPath>/api/sync</CPath> <CMute>HTTP/1.1</CMute></CLine>
        {!mobile && (
          <CLine><CKey>Authorization:</CKey> <CMute>Bearer</CMute> <CStr>sk_live_***</CStr></CLine>
        )}
        <span className="block h-1.5" />
        <CLine><CBrace>{'{'}</CBrace></CLine>
        <CLine>{'  '}<CKey>&quot;sku&quot;</CKey><CMute>:</CMute>{' '}<CStr>&quot;{displaySku}&quot;</CStr><CMute>,</CMute></CLine>
        <CLine>{'  '}<CKey>&quot;stock&quot;</CKey><CMute>:</CMute>{' '}<CNum>{displayStock}</CNum><CMute>,</CMute></CLine>
        <CLine>{'  '}<CKey>&quot;price&quot;</CKey><CMute>:</CMute>{' '}<CNum>{displayPrice}</CNum></CLine>
        <CLine><CBrace>{'}'}</CBrace></CLine>
        <span className="my-2.5 block h-px" style={{ background: HAIRLINE }} />
        <CLine>
          <ArrowGlyph dir="right" />{' '}
          {isSyncing ? (
            <span className="inline-flex items-center gap-1.5">
              <span className="syncing-text">{t.syncing.replace(/[…]|\.{3}$/, '')}</span>
              <span className="inline-flex items-center gap-[3px]" aria-hidden>
                <span className="sync-dot" />
                <span className="sync-dot" />
                <span className="sync-dot" />
              </span>
            </span>
          ) : (
            <>
              <span className="text-white/90">{t.apiOk}</span>{' '}
              <CMute>·</CMute> <CMute>142ms</CMute>
            </>
          )}
        </CLine>
      </div>

      <div
        className={`flex items-center gap-1.5 whitespace-nowrap ${mobile ? 'px-4' : 'px-5'} py-2.5 text-[10.5px] uppercase tracking-[0.12em] text-white/40`}
        style={{ borderTop: `1px solid ${HAIRLINE}`, fontFamily: 'var(--font-mono, monospace)' }}
      >
        <ArrowGlyph dir="down" />
        <span>{t.realtimeLabel}</span>
      </div>
    </aside>
  )
}

/* ─── ArrowGlyph: unified inline arrow icon (replaces text glyphs) ── */
function ArrowGlyph({ dir }: { dir: 'right' | 'down' }) {
  return (
    <svg
      width="11" height="11" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden
      className="inline-block flex-shrink-0 text-white/45 align-[-1px]"
    >
      {dir === 'right' ? (
        <>
          <line x1="4" y1="12" x2="18" y2="12" />
          <polyline points="13 7 18 12 13 17" />
        </>
      ) : (
        <>
          <line x1="12" y1="4" x2="12" y2="18" />
          <polyline points="7 13 12 18 17 13" />
        </>
      )}
    </svg>
  )
}

/* ─── RIGHT PANEL — e-commerce site (foreground) ────────────── */
function EcomPanel({
  t,
  stock,
  onRowRef,
  onNumRef,
}: {
  t: typeof CONTENT['fr']
  stock: StockMap
  onRowRef?: (sku: SKU, el: HTMLElement | null) => void
  onNumRef?: (sku: SKU, el: HTMLElement | null) => void
}) {
  const lang     = useLang()
  const n        = useSyncCounter()
  const syncText = strings[lang].erpFeature.syncLabel.replace('{n}', String(n))

  return (
    <article
      aria-label={t.panelRightTitle}
      className="erp-glass-panel h-full overflow-hidden rounded-2xl bg-white flex flex-col"
      style={{
        color: '#303030',
        fontFamily: 'var(--font-sans, system-ui, sans-serif)',
        boxShadow:
          '0 24px 60px rgba(0,0,0,0.46), ' +
          '0 8px 20px rgba(0,0,0,0.26), ' +
          '0 0 0 1px rgba(255,255,255,0.06), ' +
          'inset 0 1px 0 rgba(255,255,255,0.7)',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <PanelHeader title={t.panelRightTitle} tag="Web" tone="light" px="px-4" py="py-3.5" />

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

      <div className="flex-1 overflow-hidden">
        {SKUS.map(sku => {
          const p = PRODUCTS[sku]
          return (
            <div
              key={sku}
              ref={el => onRowRef?.(sku, el)}
              className="grid items-center gap-2.5 border-b border-[#ebebeb] px-4 py-2.5 text-[13px] last:border-b-0"
              style={{ gridTemplateColumns: ECOM_GRID }}
            >
              <span
                className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-[6px] border border-[#e6e6e8] text-[17px] leading-none flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#f4f4f5 0%,#e8e8ea 100%)' }}
              >
                {p.emoji}
              </span>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap font-medium tracking-tight text-[#1a1a1a]">
                {p.name}
              </span>
              <span
                ref={el => onNumRef?.(sku, el)}
                className="inline-block text-right font-medium text-[#303030] tabular-nums"
              >
                {stock[sku].site}
              </span>
              <span className="flex justify-end">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#cdf4dd] py-0.5 pl-1.5 pr-2 text-[11px] font-medium leading-[1.4] text-[#0c5132] whitespace-nowrap">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#008060] flex-shrink-0" />
                  {t.statusActive}
                </span>
              </span>
            </div>
          )
        })}
      </div>

      <footer className="flex items-center gap-2 border-t border-[#ebebeb] bg-[#fafafa] px-4 py-2.5 text-[12px] text-[#616161]">
        <span className="inline-flex text-[#008060]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M2 5.5a4 4 0 0 1 7-1.6" />
            <path d="M9 2v2.5H6.5" />
            <path d="M10 6.5a4 4 0 0 1-7 1.6" />
            <path d="M3 10V7.5h2.5" />
          </svg>
        </span>
        <span className="tabular-nums">{syncText}</span>
      </footer>
    </article>
  )
}

/* ─── Comparison row ─────────────────────────────────────────── */
function Row({ label, meta, variant }: { label: string; meta: string; variant: 'bad' | 'good' }) {
  const isBad = variant === 'bad'
  return (
    <motion.div
      variants={revealItem}
      className="grid grid-cols-[18px_1fr_auto] items-start gap-3 min-720:gap-3.5 py-2.5 text-[13px] min-720:text-[14px] leading-[1.45] border-t first:border-t-0"
      style={{
        borderColor: 'rgba(255,255,255,0.06)',
        color: isBad ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.92)',
      }}
    >
      {/* Single accent: solid fill = the "good" state. Everything else stays
          monochrome, differentiated by weight/opacity, never by hue. */}
      <span
        className="grid place-items-center rounded-full leading-none"
        style={{
          width: 18, height: 18, marginTop: 1,
          background: isBad ? 'transparent' : 'rgba(255,255,255,0.94)',
          color:      isBad ? 'rgba(255,255,255,0.32)' : '#0a0a0a',
          border:     `1px solid ${isBad ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.94)'}`,
        }}
      >
        {isBad ? (
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden>
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        ) : (
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      <span className="min-w-0" style={{ fontWeight: isBad ? 400 : 500 }}>{label}</span>
      <span
        className="font-mono text-[10px] min-720:text-[10.5px] tracking-[0.04em] self-center"
        style={{ color: 'rgba(255,255,255,0.36)' }}
      >
        {meta}
      </span>
    </motion.div>
  )
}

/* ─── Main section ───────────────────────────────────────────── */
export function ErpFeatureSection() {
  const lang = useLang()
  const t    = CONTENT[lang]

  /* ── Stock state ───────────────────────────────────────────── */
  const [stock, setStock]           = useState<StockMap>(INIT_STOCK)
  const stockRef                    = useRef<StockMap>(INIT_STOCK)

  /* ── Syncing indicator state ───────────────────────────────── */
  const [isSyncing, setIsSyncing]   = useState(false)
  const [syncingData, setSyncingData] = useState<SyncingData | null>(null)

  /* ── DOM refs for imperative animation (desktop panels only) ─ */
  const erpRowRefs  = useRef<Partial<Record<SKU, HTMLElement>>>({})
  const erpNumRefs  = useRef<Partial<Record<SKU, HTMLElement>>>({})
  const siteRowRefs = useRef<Partial<Record<SKU, HTMLElement>>>({})
  const siteNumRefs = useRef<Partial<Record<SKU, HTMLElement>>>({})

  /* ── Viewport detection ────────────────────────────────────── */
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible  = useRef(false)

  /* ── Timeout tracking (Step 5 — cleanup) ──────────────────── */
  const tidRef   = useRef<number[]>([])
  /* Prevents two events overlapping if a slow browser fires late */
  const syncBusy = useRef(false)

  /* ── Intersection Observer ─────────────────────────────────── */
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { isVisible.current = entry.isIntersecting },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  /* ── Animation helpers ─────────────────────────────────────── */

  /**
   * Flash a table row background (red → transparent or green → transparent).
   * Imperatively adds/removes a CSS class to avoid re-renders.
   */
  const flashRow = useCallback((sku: SKU, side: 'erp' | 'site', type: 'red' | 'green') => {
    const el = side === 'erp' ? erpRowRefs.current[sku] : siteRowRefs.current[sku]
    if (!el) return
    const cls = type === 'red' ? 'row-flash-red' : 'row-flash-green'
    el.classList.remove('row-flash-red', 'row-flash-green')
    void el.offsetHeight  // force reflow to re-trigger animation on same row
    el.classList.add(cls)
    const tid = window.setTimeout(() => el.classList.remove(cls), 1000)
    tidRef.current.push(tid)
  }, [])

  /**
   * Bump the stock number with a scale + color animation.
   * Uses CSS keyframes (hardware-accelerated transform; brief color shift).
   */
  const bumpNum = useCallback((sku: SKU, side: 'erp' | 'site', type: 'red' | 'green') => {
    const el = side === 'erp' ? erpNumRefs.current[sku] : siteNumRefs.current[sku]
    if (!el) return
    const cls = type === 'red' ? 'num-bump-red' : 'num-bump-green'
    el.classList.remove('num-bump-red', 'num-bump-green')
    void el.offsetHeight
    el.classList.add(cls)
    const tid = window.setTimeout(() => el.classList.remove(cls), 400)
    tidRef.current.push(tid)
  }, [])

  /**
   * Update stock in both the React state and the ref mirror.
   * The ref mirror (stockRef) is read inside the event loop closure
   * to avoid stale state without needing it in the dependency array.
   */
  const updateStock = useCallback((sku: SKU, side: 'erp' | 'site', delta: number) => {
    setStock(prev => {
      const next: StockMap = {
        ...prev,
        [sku]: { ...prev[sku], [side]: prev[sku][side] + delta },
      }
      stockRef.current = next
      return next
    })
  }, [])

  /* ── Autonomous event loop (Steps 1–5) ─────────────────────── */
  useEffect(() => {
    if (typeof window === 'undefined') return
    /* Step 5 — Respect prefers-reduced-motion */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const tids = tidRef.current

    function scheduleNext() {
      const jitter = (Math.random() * 2 - 1) * LOOP_JITTER
      const delay  = LOOP_BASE + jitter
      const tid    = window.setTimeout(fireEvent, delay)
      tids.push(tid)
    }

    function fireEvent() {
      /* Step 5 — Pause when off-screen */
      if (!isVisible.current) {
        scheduleNext()
        return
      }
      /* Prevent overlap if previous sync still completing */
      if (syncBusy.current) {
        scheduleNext()
        return
      }

      const curr = stockRef.current

      /* Pick random SKU */
      const sku  = SKUS[Math.floor(Math.random() * SKUS.length)]
      const prod = PRODUCTS[sku]
      const { erp, site } = curr[sku]

      /* Determine event type:
         - Force INCREASE when both sides are at minimum (≤ 1)
         - Otherwise 70% DECREASE / 30% INCREASE */
      const forceIncrease = erp <= 1 && site <= 1
      const isIncrease    = forceIncrease || Math.random() > 0.7

      if (isIncrease) {
        /* Skip if at maximum */
        if (erp >= prod.initErp + MAX_EXCESS) { scheduleNext(); return }
        const newErp = erp + 1

        syncBusy.current = true
        /* ERP increases immediately */
        updateStock(sku, 'erp', 1)
        flashRow(sku, 'erp', 'green')
        bumpNum(sku, 'erp', 'green')
        setIsSyncing(true)
        setSyncingData({ sku, stock: newErp, price: prod.price })

        /* Site increases after SYNC_DELAY */
        const tid = window.setTimeout(() => {
          updateStock(sku, 'site', 1)
          flashRow(sku, 'site', 'green')
          bumpNum(sku, 'site', 'green')
          setIsSyncing(false)
          syncBusy.current = false
        }, SYNC_DELAY)
        tids.push(tid)

      } else {
        /* DECREASE: 80% from SITE (sale), 20% from ERP (stock correction) */
        const fromSite = Math.random() < 0.8

        if (fromSite) {
          if (site <= 1) { scheduleNext(); return }  // skip if at minimum
          const newSite = site - 1

          syncBusy.current = true
          /* SITE decreases immediately (sale on e-commerce) */
          updateStock(sku, 'site', -1)
          flashRow(sku, 'site', 'red')
          bumpNum(sku, 'site', 'red')
          setIsSyncing(true)
          setSyncingData({ sku, stock: newSite, price: prod.price })

          /* ERP propagated 2 s later */
          const tid = window.setTimeout(() => {
            updateStock(sku, 'erp', -1)
            flashRow(sku, 'erp', 'red')
            bumpNum(sku, 'erp', 'red')
            setIsSyncing(false)
            syncBusy.current = false
          }, SYNC_DELAY)
          tids.push(tid)

        } else {
          if (erp <= 1) { scheduleNext(); return }  // skip if at minimum
          const newErp = erp - 1

          syncBusy.current = true
          /* ERP decreases immediately (manual stock correction) */
          updateStock(sku, 'erp', -1)
          flashRow(sku, 'erp', 'red')
          bumpNum(sku, 'erp', 'red')
          setIsSyncing(true)
          setSyncingData({ sku, stock: newErp, price: prod.price })

          /* SITE propagated 2 s later */
          const tid = window.setTimeout(() => {
            updateStock(sku, 'site', -1)
            flashRow(sku, 'site', 'red')
            bumpNum(sku, 'site', 'red')
            setIsSyncing(false)
            syncBusy.current = false
          }, SYNC_DELAY)
          tids.push(tid)
        }
      }

      /* Schedule next event now — runs in parallel with 2 s sync delay.
         Since LOOP_BASE (3 500ms) > SYNC_DELAY (2 000ms), events never overlap:
         minimum gap = 3500 - 800 (jitter) - 2000 = 700ms safety margin. */
      scheduleNext()
    }

    scheduleNext()

    return () => {
      tids.forEach(clearTimeout)
      tids.length = 0
    }
  }, [flashRow, bumpNum, updateStock])

  /* ── Ref callback helpers ──────────────────────────────────── */
  const setErpRow  = useCallback((sku: SKU, el: HTMLElement | null) => {
    if (el) erpRowRefs.current[sku] = el
  }, [])
  const setErpNum  = useCallback((sku: SKU, el: HTMLElement | null) => {
    if (el) erpNumRefs.current[sku] = el
  }, [])
  const setSiteRow = useCallback((sku: SKU, el: HTMLElement | null) => {
    if (el) siteRowRefs.current[sku] = el
  }, [])
  const setSiteNum = useCallback((sku: SKU, el: HTMLElement | null) => {
    if (el) siteNumRefs.current[sku] = el
  }, [])

  /* ── Render ────────────────────────────────────────────────── */
  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center px-4 py-10 md:py-16"
      style={{
        background: 'radial-gradient(1200px 600px at 50% -10%, rgba(255,255,255,0.025), transparent 60%), hsl(var(--bg-dark))',
        color: 'rgba(255,255,255,0.88)',
      }}
    >
      <div
        className="relative w-full max-w-[1280px] overflow-hidden rounded-2xl md:rounded-3xl"
        style={{ background: 'hsl(var(--bg-dark-card))', border: '1px solid rgba(255,255,255,0.10)' }}
      >
        {/* ── Figure area ── */}
        <div className="relative px-4 md:px-8 pt-16 md:pt-20 pb-6 md:pb-10">

          {/* Radial glow — atmosphere */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
            style={{
              width: '120%', height: 700,
              background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(255,255,255,0.04), rgba(255,255,255,0.012) 40%, transparent 70%)',
              filter: 'blur(12px)',
              zIndex: 0,
            }}
          />

          {/* Noise texture overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: '128px 128px',
              zIndex: 1,
            }}
          />

          {/* ═══ DESKTOP: three panels, aerated grid — no overlap (≥768px) ═══
              Refs attached here only — mobile panels are purely visual.
              Animation classes applied via erpRowRefs / siteRowRefs.
              Connectors live in their own grid columns, so panels never
              stack or hide behind one another — each card stays legible
              and equally weighted (§ Linear.app direction: distinct,
              spaced cards, not overlapping windows).
          ═══ */}
          <div
            className="relative hidden md:grid w-full mt-4"
            style={{
              gridTemplateColumns: '1fr 88px 1fr 88px 1fr',
              alignItems: 'stretch',
              minHeight: 380,
              zIndex: 2,
            }}
          >
            <motion.div
              style={{ minHeight: 380 }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
            >
              <ErpPanel t={t} stock={stock} onRowRef={setErpRow} onNumRef={setErpNum} />
            </motion.div>

            <div className="flex items-center justify-center" aria-hidden>
              <SvgConnector className="w-16" />
            </div>

            <motion.div
              style={{ minHeight: 380 }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
            >
              <ApiPanel t={t} isSyncing={isSyncing} syncingData={syncingData} />
            </motion.div>

            <div className="flex items-center justify-center" aria-hidden>
              <SvgConnector className="w-16" />
            </div>

            <motion.div
              style={{ minHeight: 380 }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT }}
            >
              <EcomPanel t={t} stock={stock} onRowRef={setSiteRow} onNumRef={setSiteNum} />
            </motion.div>
          </div>

          {/* ═══ MOBILE: vertical stack (<768px) — visual only, no refs ═══ */}
          <div className="relative md:hidden flex flex-col gap-3 mt-8 w-full overflow-hidden" style={{ zIndex: 1 }}>
            <ErpPanel t={t} stock={stock} mobile />
            <div className="flex justify-center py-1" aria-hidden>
              <SvgConnector className="w-32" />
            </div>
            <ApiPanel t={t} isSyncing={isSyncing} syncingData={syncingData} mobile />
            <div className="flex justify-center py-1" aria-hidden>
              <SvgConnector className="w-32" />
            </div>
            <EcomPanel t={t} stock={stock} />
          </div>

          {/* ── Caption: eyebrow + title + description ── */}
          <div className="relative mt-10 md:mt-14 max-w-[640px] pr-0 md:pr-6" style={{ zIndex: 2 }}>
            <motion.p
              className="m-0 mb-3 font-mono text-xs uppercase tracking-[0.15em] opacity-50 text-white"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {strings[lang].erpFeature.eyebrow}
            </motion.p>

            <motion.h2
              className="m-0 text-white font-[650] tracking-[-0.018em]"
              style={{
                fontSize: 'clamp(22px, 5vw, 28px)',
                lineHeight: 1.15,
                textWrap: 'balance' as React.CSSProperties['textWrap'],
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
            >
              {t.title}
            </motion.h2>

            <motion.p
              className="m-0 mt-3 max-w-[560px]"
              style={{ fontSize: 'clamp(14px, 3.5vw, 15.5px)', lineHeight: 1.55, color: 'rgba(255,255,255,0.56)' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            >
              {t.description}
            </motion.p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px" style={{ background: 'rgba(255,255,255,0.10)' }} />

        {/* ── Comparison table ── */}
        <div className="px-4 min-720:px-14 py-8 min-720:py-14">
          <div
            className="grid grid-cols-1 min-720:grid-cols-2 rounded-xl min-720:rounded-2xl overflow-hidden"
            style={{ background: 'hsl(var(--bg-dark-card))', border: '1px solid rgba(255,255,255,0.10)' }}
          >
            <motion.div
              className="erp-compare-left p-5 min-720:p-9"
              variants={revealContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="flex items-center justify-between mb-5 min-720:mb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 16 }}>
                <div className="font-semibold uppercase tracking-[0.04em]" style={{ fontSize: 12, color: 'rgba(255,255,255,0.36)' }}>
                  {t.badHeader}
                </div>
                <div className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.36)' }}>
                  {t.stateOff}
                </div>
              </div>
              {t.rowsBad.map(([label, meta]) => (
                <Row key={label} label={label} meta={meta} variant="bad" />
              ))}
            </motion.div>

            <motion.div
              className="p-5 min-720:p-9"
              variants={revealContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="flex items-center justify-between mb-5 min-720:mb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 16 }}>
                <div className="font-semibold uppercase tracking-[0.04em] text-white" style={{ fontSize: 12 }}>
                  {t.goodHeader}
                </div>
                <div className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.36)' }}>
                  {t.stateOn}
                </div>
              </div>
              {t.rowsGood.map(([label, meta]) => (
                <Row key={label} label={label} meta={meta} variant="good" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
