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

import { useCallback, useEffect, useRef, useState } from 'react'
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

/* ─── SVG Connector: decorative flowing dots between panels ─── */
function SvgConnector({ className }: { className?: string }) {
  return (
    <div className={`erp-svg-connector ${className ?? ''}`} aria-hidden>
      <svg
        viewBox="0 0 120 24"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-6"
      >
        <line
          x1="0" y1="12" x2="120" y2="12"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle r="3" cy="12" fill="rgba(255,255,255,0.85)">
          <animate attributeName="cx" values="-6;126" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle r="2.5" cy="12" fill="rgba(255,255,255,0.6)">
          <animate attributeName="cx" values="-6;126" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
        </circle>
        <circle r="2" cy="12" fill="rgba(255,255,255,0.4)">
          <animate attributeName="cx" values="-6;126" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
        </circle>
        <rect x="0" y="11" width="120" height="2" rx="1">
          <animate attributeName="fill" values="rgba(255,255,255,0);rgba(255,255,255,0.04);rgba(255,255,255,0)" dur="2.4s" repeatCount="indefinite" />
        </rect>
      </svg>
      <span className="text-white/30 text-[11px] font-mono ml-1 select-none">→</span>
    </div>
  )
}

/* ─── Connectors: positioned in the panel overlap zones ─────── */
function Connectors() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[15]" aria-hidden>
      <div className="absolute top-1/2 -translate-y-1/2" style={{ left: '28%', width: '14%' }}>
        <SvgConnector />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2" style={{ left: '58%', width: '14%' }}>
        <SvgConnector />
      </div>
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
      className="h-full overflow-hidden rounded-[14px] border border-white/[0.07] text-white flex flex-col"
      style={{
        background: 'linear-gradient(180deg, hsl(0 0% 13%) 0%, hsl(0 0% 9%) 100%)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.15)',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <header className={`flex items-center justify-between border-b border-white/[0.08] ${px} ${pyH}`}>
        <span className={`whitespace-nowrap font-semibold tracking-tight ${mobile ? 'text-[13px]' : 'text-[13.5px]'}`}>
          {t.panelLeftTitle}
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/40" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
          ERP
        </span>
      </header>

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

      <footer className={`flex items-center gap-2 border-t border-white/[0.08] bg-white/[0.015] ${px} ${mobile ? 'py-2' : 'py-3'} text-[12px] text-white/55`}>
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
      className={`h-full flex flex-col rounded-[14px] border border-white/[0.10] ${mobile ? 'px-4' : 'px-5'} pb-3.5 pt-4 text-white/55`}
      style={{
        background: 'rgba(255,255,255,0.025)',
        backdropFilter: 'blur(24px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
        boxShadow:
          '0 0 0 1px rgba(255,255,255,0.06), ' +
          'inset 0 1px 0 rgba(255,255,255,0.06), ' +
          '0 16px 40px rgba(0,0,0,0.45), ' +
          '0 4px 12px rgba(0,0,0,0.25)',
        fontFamily: 'var(--font-mono, monospace)',
        fontSize: mobile ? 11.5 : 12.5,
        lineHeight: 1.75,
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <div className="mb-2 flex items-center gap-2 whitespace-nowrap border-b border-white/[0.06] pb-2.5 text-[10.5px] uppercase tracking-[0.14em] text-white/40">
        <GreenDot size={6} />
        <span>{t.apiLabel}</span>
      </div>

      <div className="flex-1 overflow-hidden">
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
        <span className="my-2.5 -mx-1 block h-px bg-white/[0.06]" />
        <CLine>
          <span className="text-white/40">→</span>{' '}
          {isSyncing ? (
            <span className="syncing-text">{t.syncing}</span>
          ) : (
            <>
              <span style={{ color: '#4ade80' }}>{t.apiOk}</span>{' '}
              <CMute>·</CMute> <CMute>142ms</CMute>
            </>
          )}
        </CLine>
      </div>

      <div className="mt-2 flex items-center gap-1.5 whitespace-nowrap border-t border-white/[0.06] pt-2.5 text-[10.5px] tracking-[0.06em] text-white/40">
        <span className="text-white/55">↓</span>
        <span>{t.realtimeLabel}</span>
      </div>
    </aside>
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
      className="h-full overflow-hidden rounded-[14px] border border-[#e1e3e5] bg-white flex flex-col"
      style={{
        color: '#303030',
        fontFamily: 'var(--font-sans, system-ui, sans-serif)',
        boxShadow:
          '0 32px 80px rgba(0,0,0,0.55), ' +
          '0 12px 24px rgba(0,0,0,0.3), ' +
          '0 0 0 1px rgba(255,255,255,0.10)',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <header className="flex items-center justify-between border-b border-[#e1e3e5] bg-[#f6f6f7] px-4 py-3.5">
        <span className="whitespace-nowrap text-[13.5px] font-semibold tracking-tight text-[#1a1a1a]">
          {t.panelRightTitle}
        </span>
        <div className="flex items-center gap-1.5">
          <span className="block w-[9px] h-[9px] rounded-full bg-[#e2e2e4]" />
          <span className="block w-[9px] h-[9px] rounded-full bg-[#e2e2e4]" />
          <span className="block w-[9px] h-[9px] rounded-full bg-[#e2e2e4]" />
        </div>
      </header>

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

          {/* ═══ DESKTOP: three overlapping panels (≥768px) ═══
              Refs attached here only — mobile panels are purely visual.
              Animation classes applied via erpRowRefs / siteRowRefs.
          ═══ */}
          <div className="relative hidden md:block w-full mt-4" style={{ minHeight: 400, zIndex: 2 }}>
            <Connectors />

            {/* LEFT — ERP panel (recessed, z-10) */}
            <motion.div
              className="absolute z-[10]"
              style={{ left: 0, top: 36, width: '40%', height: 350 }}
              initial={{ opacity: 0, y: 48, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: EASE_OUT }}
            >
              <div style={{ transform: 'scale(0.95)', transformOrigin: 'center bottom', height: '100%' }}>
                <ErpPanel
                  t={t}
                  stock={stock}
                  onRowRef={setErpRow}
                  onNumRef={setErpNum}
                />
              </div>
            </motion.div>

            {/* MIDDLE — API panel (glassmorphism, z-20) */}
            <motion.div
              className="absolute z-[20]"
              style={{ left: '29%', top: 16, width: '42%', height: 360 }}
              initial={{ opacity: 0, y: 48, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT }}
            >
              <ApiPanel
                t={t}
                isSyncing={isSyncing}
                syncingData={syncingData}
              />
            </motion.div>

            {/* RIGHT — Ecom panel (foreground, z-30) */}
            <motion.div
              className="absolute z-[30]"
              style={{ left: '58%', top: 0, width: '42%', height: 370 }}
              initial={{ opacity: 0, y: 48, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.30, ease: EASE_OUT }}
            >
              <EcomPanel
                t={t}
                stock={stock}
                onRowRef={setSiteRow}
                onNumRef={setSiteNum}
              />
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
