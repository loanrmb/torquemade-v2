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
import { motion } from 'framer-motion'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'
import { EASE_OUT, fadeUpVariants, staggerContainerVariants } from '@/lib/motion'

/* ─── Bilingual content (UI labels only — stock data in PRODUCTS) */
type Rows = ReadonlyArray<string>

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
    rowsBad: [
      'Stock mis à jour à la main, en CSV',
      'Ventes de produits déjà épuisés',
      'Prix désynchronisés entre canaux',
      "Commandes ressaisies dans l'ERP",
      'Pas de source de vérité unique',
      'Réconciliation comptable manuelle',
    ],
    rowsGood: [
      'Stock synchronisé en temps réel',
      'Mises hors ligne automatiques à zéro',
      "Prix poussés depuis l'ERP, un seul endroit",
      "Commandes web créées directement dans l'ERP",
      "Une seule base — l'ERP fait foi",
      'Export comptable automatisé',
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
    rowsBad: [
      'Stock updated manually, via CSV',
      'Sales of already out-of-stock items',
      'Prices out of sync between channels',
      'Orders re-keyed into the ERP',
      'No single source of truth',
      'Manual accounting reconciliation',
    ],
    rowsGood: [
      'Stock synced in real time',
      'Automatic zero-stock takedowns',
      'Prices pushed from ERP, one place',
      'Web orders created directly in ERP',
      'One database — ERP is the authority',
      'Automated accounting export',
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

const ECOM_GRID = 'clamp(36px,3vw,44px) minmax(60px,1fr) clamp(48px,4vw,60px) clamp(72px,6vw,92px)'

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
  bg,
  borderColor,
  titleColor,
}: {
  title: string
  tag?: string
  tone?: 'dark' | 'light'
  live?: boolean
  px?: string
  py?: string
  bg?: string
  borderColor?: string
  titleColor?: string
}) {
  const light = tone === 'light'
  return (
    <header
      className={`flex items-center justify-between ${px} ${py}`}
      style={{
        borderBottom: `1px solid ${borderColor ?? (light ? '#e8e8ea' : HAIRLINE)}`,
        background: bg ?? (light ? '#f7f7f8' : 'rgba(255,255,255,0.018)'),
      }}
    >
      <span className="flex min-w-0 items-center gap-2.5">
        <WindowDots tone={tone} />
        <span
          className={`truncate text-[13px] lg:text-[14px] xl:text-[15px] font-semibold tracking-tight ${titleColor ? '' : light ? 'text-[#1a1a1a]' : 'text-white/90'}`}
          style={titleColor ? { color: titleColor } : undefined}
        >
          {title}
        </span>
      </span>
      {tag && (
        <span className="ml-3 flex flex-shrink-0 items-center gap-1.5">
          {live && <GreenDot size={5} />}
          <span
            className={`font-mono text-[10px] lg:text-[11px] uppercase tracking-[0.14em] ${light ? 'text-[#8a8a8e]' : 'text-white/38'}`}
          >
            {tag}
          </span>
        </span>
      )}
    </header>
  )
}

/* ─── FlowConnector: data-flow indicator between panels ─────────
   Two chevrons travelling in the direction of sync, staggered so they
   read as a continuous flow rather than a single static arrow.
   `right` on desktop (panels sit side by side), `down` on mobile
   (panels stack vertically) — same component, direction-aware. */
function ChevronGlyph({ direction, delayClass }: { direction: 'right' | 'down'; delayClass: string }) {
  return (
    <svg
      width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className={`flow-chevron ${direction === 'down' ? 'flow-chevron-down' : 'flow-chevron-right'} ${delayClass} text-white/50`}
      aria-hidden
    >
      {direction === 'down' ? (
        <polyline points="6 9 12 15 18 9" />
      ) : (
        <polyline points="9 6 15 12 9 18" />
      )}
    </svg>
  )
}

function FlowConnector({ direction, className = '' }: { direction: 'right' | 'down'; className?: string }) {
  const isDown = direction === 'down'
  return (
    <div
      className={`flex items-center justify-center ${isDown ? 'flex-col gap-0.5' : 'flex-row gap-0.5'} ${className}`}
      aria-hidden
    >
      <ChevronGlyph direction={direction} delayClass="flow-chevron-d1" />
      <ChevronGlyph direction={direction} delayClass="flow-chevron-d2" />
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
  const px  = mobile ? 'px-4' : 'px-5 lg:px-6 xl:px-7'
  const pyR = mobile ? 'py-[6px]' : 'py-3 lg:py-3.5 xl:py-4'
  const fs  = mobile ? 'text-[12px]' : 'text-[13px] lg:text-[14px] xl:text-[15px]'

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
              <th className={`border-b border-white/[0.08] ${px} pb-2 pt-2.5 text-[10px] lg:text-[11px] font-normal uppercase tracking-[0.12em] text-white/40 text-left`} style={{ fontFamily: 'var(--font-mono, monospace)' }}>
                {t.colProduct}
              </th>
              {!mobile && (
                <th className="border-b border-white/[0.08] px-5 lg:px-6 xl:px-7 pb-2.5 pt-3 text-[10px] lg:text-[11px] font-normal uppercase tracking-[0.12em] text-white/40 text-left" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
                  {t.colSku}
                </th>
              )}
              <th className={`border-b border-white/[0.08] ${px} pb-2 pt-2.5 text-[10px] lg:text-[11px] font-normal uppercase tracking-[0.12em] text-white/40 text-left`} style={{ fontFamily: 'var(--font-mono, monospace)' }}>
                {t.colStock}
              </th>
              {!mobile && (
                <th className="border-b border-white/[0.08] px-5 lg:px-6 xl:px-7 pb-2.5 pt-3 text-[10px] lg:text-[11px] font-normal uppercase tracking-[0.12em] text-white/40 text-right" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
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
                    <td className="whitespace-nowrap px-5 lg:px-6 xl:px-7 py-3 lg:py-3.5 xl:py-4 align-middle text-[11.5px] lg:text-[12.5px] tracking-[0.02em] text-white/40" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
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
                    <td className="whitespace-nowrap px-5 lg:px-6 xl:px-7 py-3 lg:py-3.5 xl:py-4 align-middle text-right text-[13px] lg:text-[14px] xl:text-[15px] text-white/90 tabular-nums" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
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
        className={`flex items-center gap-2 bg-white/[0.015] ${px} ${mobile ? 'py-2' : 'py-3 lg:py-3.5 xl:py-4'} text-[12px] lg:text-[13px] text-white/55`}
        style={{ borderTop: `1px solid ${HAIRLINE}` }}
      >
        <GreenDot size={6} />
        {t.connected}
      </footer>
    </article>
  )
}

/* ─── Syntax token helpers (API panel) ───────────────────────── */
/* VS Code "Dark+" token palette — intentional exception to the site's
   monochrome rule, scoped to this one code-editor mockup (per request). */
const CLine    = ({ children }: { children: React.ReactNode }) => <span className="block whitespace-pre">{children}</span>
const Verb     = ({ children }: { children: React.ReactNode }) => <span className="font-semibold" style={{ color: '#4FC1FF' }}>{children}</span>
const CPath    = ({ children }: { children: React.ReactNode }) => <span style={{ color: '#D7E4DE' }}>{children}</span>
const CKey     = ({ children }: { children: React.ReactNode }) => <span style={{ color: '#9CDCFE' }}>{children}</span>
const CStr     = ({ children }: { children: React.ReactNode }) => <span style={{ color: '#CE9178' }}>{children}</span>
const CNum     = ({ children }: { children: React.ReactNode }) => <span style={{ color: '#B5CEA8' }}>{children}</span>
const CComment = ({ children }: { children: React.ReactNode }) => <span style={{ color: '#6A9955' }}>{children}</span>
const CPunct   = ({ children }: { children: React.ReactNode }) => <span style={{ color: '#7FA396' }}>{children}</span>
const CBrace   = ({ children }: { children: React.ReactNode }) => <span style={{ color: '#89B3A0' }}>{children}</span>

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

  /* VS Code-style editor green — header/body/footer share one deep
     forest-green surface, like a real editor tab left open on this
     file (per request, an intentional exception to the site's
     monochrome rule, scoped to this one code-mockup panel). */
  const EDITOR_BG   = 'linear-gradient(180deg, #1B4536 0%, #163A2D 100%)'
  const EDITOR_LINE = 'rgba(160,220,195,0.14)'
  const EDITOR_TEXT = '#D7E4DE'

  return (
    <aside
      aria-label="Requête API sync"
      className="erp-glass-panel h-full flex flex-col overflow-hidden rounded-2xl"
      style={{
        background: EDITOR_BG,
        border: '1px solid rgba(150,220,190,0.20)',
        boxShadow:
          'inset 0 1px 0 rgba(255,255,255,0.06), ' +
          '0 20px 48px rgba(0,0,0,0.42), ' +
          '0 4px 12px rgba(0,0,0,0.25)',
        WebkitFontSmoothing: 'antialiased',
        color: EDITOR_TEXT,
      }}
    >
      <PanelHeader
        title={t.apiLabel}
        tag="Live"
        live
        px={mobile ? 'px-4' : 'px-5'}
        py="py-3"
        bg="rgba(255,255,255,0.05)"
        borderColor={EDITOR_LINE}
        titleColor={EDITOR_TEXT}
      />

      <div
        className={`flex flex-1 flex-col justify-center overflow-hidden ${mobile ? 'px-4' : 'px-5'} py-3.5`}
        style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: mobile ? 11.5 : 12.5,
          lineHeight: 1.75,
        }}
      >
        <CLine><Verb>POST</Verb> <CPath>/api/sync</CPath> <CComment>HTTP/1.1</CComment></CLine>
        {!mobile && (
          <CLine><CKey>Authorization:</CKey> <CComment>Bearer</CComment> <CStr>sk_live_***</CStr></CLine>
        )}
        <span className="block h-1.5" />
        <CLine><CBrace>{'{'}</CBrace></CLine>
        <CLine>{'  '}<CKey>&quot;sku&quot;</CKey><CPunct>:</CPunct>{' '}<CStr>&quot;{displaySku}&quot;</CStr><CPunct>,</CPunct></CLine>
        <CLine>{'  '}<CKey>&quot;stock&quot;</CKey><CPunct>:</CPunct>{' '}<CNum>{displayStock}</CNum><CPunct>,</CPunct></CLine>
        <CLine>{'  '}<CKey>&quot;price&quot;</CKey><CPunct>:</CPunct>{' '}<CNum>{displayPrice}</CNum></CLine>
        <CLine><CBrace>{'}'}</CBrace></CLine>
        <span className="my-2.5 block h-px" style={{ background: EDITOR_LINE }} />
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
              <span style={{ color: '#89D185' }}>{t.apiOk}</span>{' '}
              <CPunct>·</CPunct> <CComment>142ms</CComment>
            </>
          )}
        </CLine>
      </div>

      <div
        className={`flex items-center gap-1.5 whitespace-nowrap ${mobile ? 'px-4' : 'px-5'} py-2.5 text-[10.5px] uppercase tracking-[0.12em]`}
        style={{ borderTop: `1px solid ${EDITOR_LINE}`, fontFamily: 'var(--font-mono, monospace)', color: '#7FA396' }}
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
        className="grid items-center gap-2.5 border-b border-[#ebebeb] bg-[#fafafa] px-4 lg:px-5 xl:px-6 py-2.5 lg:py-3 text-[11px] lg:text-[12px] font-medium tracking-[0.01em] text-[#616161]"
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
              className="grid items-center gap-2.5 border-b border-[#ebebeb] px-4 lg:px-5 xl:px-6 py-2.5 lg:py-3.5 xl:py-4 text-[13px] lg:text-[14px] xl:text-[15px] last:border-b-0"
              style={{ gridTemplateColumns: ECOM_GRID }}
            >
              <span
                className="flex h-8 w-8 lg:h-9 lg:w-9 items-center justify-center overflow-hidden rounded-[6px] border border-[#e6e6e8] text-[17px] lg:text-[19px] leading-none flex-shrink-0"
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
                <span className="inline-flex items-center gap-1 rounded-full bg-[#cdf4dd] py-0.5 pl-1.5 pr-2 text-[11px] lg:text-[12px] font-medium leading-[1.4] text-[#0c5132] whitespace-nowrap">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#008060] flex-shrink-0" />
                  {t.statusActive}
                </span>
              </span>
            </div>
          )
        })}
      </div>

      <footer className="flex items-center gap-2 border-t border-[#ebebeb] bg-[#fafafa] px-4 lg:px-5 xl:px-6 py-2.5 lg:py-3.5 xl:py-4 text-[12px] lg:text-[13px] text-[#616161]">
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
function Row({ label, variant }: { label: string; variant: 'bad' | 'good' }) {
  const isBad = variant === 'bad'
  return (
    <motion.div
      variants={fadeUpVariants}
      className="grid grid-cols-[20px_1fr] items-center gap-4 min-720:gap-5 py-4 min-720:py-5 text-[13.5px] min-720:text-[14.5px] leading-[1.5]"
      style={{
        color: isBad ? 'rgba(255,255,255,0.48)' : 'rgba(255,255,255,0.92)',
      }}
    >
      {/* Single accent: solid fill = the "good" state. Everything else stays
          monochrome, differentiated by weight/opacity, never by hue. */}
      <span
        className="grid place-items-center rounded-full leading-none"
        style={{
          width: 20, height: 20,
          background: isBad ? 'transparent' : 'rgba(255,255,255,0.94)',
          color:      isBad ? 'rgba(255,255,255,0.3)' : '#0a0a0a',
          border:     `1px solid ${isBad ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.94)'}`,
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
      className="flex items-center justify-center px-4 md:px-6 lg:px-8 py-10 md:py-16"
      style={{
        background: 'radial-gradient(1200px 600px at 50% -10%, rgba(255,255,255,0.025), transparent 60%), hsl(var(--bg-dark))',
        color: 'rgba(255,255,255,0.88)',
      }}
    >
      <div
        className="relative w-full max-w-[1280px] lg:max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1760px] overflow-hidden rounded-2xl md:rounded-3xl"
        style={{ background: 'hsl(var(--bg-dark-card))', border: '1px solid rgba(255,255,255,0.10)' }}
      >
        {/* ── Figure area ── */}
        <div className="relative px-4 md:px-8 lg:px-10 xl:px-12 pt-16 md:pt-20 pb-6 md:pb-10">

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
              gridTemplateColumns: '1fr clamp(72px,6vw,120px) 1fr clamp(72px,6vw,120px) 1fr',
              gap: 'clamp(0px,1.5vw,24px)',
              alignItems: 'stretch',
              minHeight: 'clamp(380px,29vw,460px)',
              zIndex: 2,
            }}
          >
            <motion.div
              style={{ minHeight: 'clamp(380px,29vw,460px)' }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
            >
              <ErpPanel t={t} stock={stock} onRowRef={setErpRow} onNumRef={setErpNum} />
            </motion.div>

            <div className="flex items-center justify-center" aria-hidden>
              <FlowConnector direction="right" />
            </div>

            <motion.div
              style={{ minHeight: 'clamp(380px,29vw,460px)' }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
            >
              <ApiPanel t={t} isSyncing={isSyncing} syncingData={syncingData} />
            </motion.div>

            <div className="flex items-center justify-center" aria-hidden>
              <FlowConnector direction="right" />
            </div>

            <motion.div
              style={{ minHeight: 'clamp(380px,29vw,460px)' }}
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
            <div className="flex justify-center py-2" aria-hidden>
              <FlowConnector direction="down" />
            </div>
            <ApiPanel t={t} isSyncing={isSyncing} syncingData={syncingData} mobile />
            <div className="flex justify-center py-2" aria-hidden>
              <FlowConnector direction="down" />
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
              className="erp-compare-left p-6 min-720:p-11"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="mb-2 min-720:mb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 16 }}>
                <div className="font-semibold uppercase tracking-[0.04em]" style={{ fontSize: 12, color: 'rgba(255,255,255,0.36)' }}>
                  {t.badHeader}
                </div>
              </div>
              {t.rowsBad.map(label => (
                <Row key={label} label={label} variant="bad" />
              ))}
            </motion.div>

            <motion.div
              className="p-6 min-720:p-11"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="mb-2 min-720:mb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 16 }}>
                <div className="font-semibold uppercase tracking-[0.04em] text-white" style={{ fontSize: 12 }}>
                  {t.goodHeader}
                </div>
              </div>
              {t.rowsGood.map(label => (
                <Row key={label} label={label} variant="good" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
