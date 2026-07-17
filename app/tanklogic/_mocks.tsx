'use client'

/**
 * TankLogic product-page mock UIs — Torquemade v2
 * ─────────────────────────────────────────────────────────────
 * Read-only, coded product visuals (same approach as the home
 * ERP tab): fictional reef data hard-coded below, UI chrome
 * labels bilingual via the local CONTENT map, narrative copy in
 * lib/strings.ts.
 *
 * Rendering rules:
 *  - Windows are fixed light (#fff / neutral hexes) like a product
 *    screenshot — matches the home EcomPanel precedent.
 *  - Status badges are strictly monochrome (filled / outline /
 *    muted / dashed). The only color is the site-wide green
 *    pulse-dot used for "live sync" footers (home ERP precedent).
 *  - Entrances: fade + translate-y via whileInView, Emil ease-out.
 *  - SyncMock runs a small loop (in-store sale → specimen pulled
 *    from the online store); paused off-screen, skipped entirely
 *    under prefers-reduced-motion.
 */

import { useEffect, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { useLang } from '@/components/app-provider'
import { EASE_OUT } from '@/lib/motion'

/* ─── Bilingual UI chrome labels ────────────────────────────── */
const CONTENT = {
  fr: {
    appInventory: 'Inventaire',
    searchPlaceholder: 'Rechercher un spécimen…',
    addSpecimen: '+ Nouveau spécimen',
    colSpecimen: 'Spécimen',
    colId: 'ID',
    colSize: 'Taille',
    colPrice: 'Prix',
    colStatus: 'Statut',
    statusStock: 'En stock',
    statusReserved: 'Réservé',
    statusShipped: 'Expédié',
    statusRemoved: 'Retiré',
    statusSold: 'Vendu',
    syncFooter: 'Boutique en ligne synchronisée',
    justNow: 'à l’instant',

    cardArrival: 'Arrivée',
    cardSupplier: 'Fournisseur',
    cardTank: 'Cuve',
    cardArrivalValue: '12 mai · Sunda Aquatics',
    cardTankValue: 'A-03',
    cardPublished: 'Publié sur la boutique en ligne',
    cardUnique: 'Pièce unique',

    cardSku: 'SKU',
    cardSkuSubtitle: 'Poisson clown · 4 cm',
    cardStockQty: '14 en stock',
    cardBatch: 'Lot',
    cardBatchValue: '12 mai · Sunda Aquatics',
    cardZone: 'Zone',
    cardZoneValue: 'B-02',

    posTitle: 'Caisse · Magasin',
    storeTitle: 'Boutique en ligne',
    posSaleLine: 'Vente comptoir',
    syncing: 'sync…',
    synced: 'synchronisé',

    mortalityHeader: 'Sortie de stock',
    mortalityButton: 'Déclarer une mortalité',
    mortalityReasonLabel: 'Motif',
    mortalityReason: 'Mortalité en cuve',
    mortalityTime: 'Aujourd’hui · 08:12',
    mortalityConfirm: 'Retiré de la boutique en ligne',

    traceTitle: 'Traçabilité',
    traceSteps: [
      { label: 'Réception fournisseur · Sunda Aquatics', time: '12 mai · 14:02' },
      { label: 'Acclimatation cuve A-03', time: '12 mai · 15:20' },
      { label: 'Photo avant expédition', time: '15 mai · 09:47', photo: 'IMG_2841.jpg' },
      { label: 'Remis au transporteur', time: '15 mai · 11:05' },
      { label: 'Livré · scan QR', time: '16 mai · 09:41', done: true },
    ],
    traceExport: 'Exporter le dossier PDF',

    ordersTitle: 'Commandes',
    newOrder: '+ Nouvelle commande',
    colOrder: 'Commande',
    colClient: 'Client',
    colSpecimens: 'Spécimens',
    colTotal: 'Total',
    orderToPack: 'À préparer',
    orderShipped: 'Expédiée',
    orderDelivered: 'Livrée',

    kpis: [
      { label: 'Taux de DOA · 30 j', value: '1,2 %' },
      { label: 'Mortalité en cuve · 30 j', value: '3,4 %' },
      { label: 'Marge moyenne', value: '41 %' },
    ],
    mortalityBySupplier: 'Mortalité par fournisseur · 90 j',
    suppliers: [
      { name: 'Bali Reef Farm', value: '2,1 %', pct: 0.22 },
      { name: 'Pacific Reef Supply', value: '4,8 %', pct: 0.52 },
      { name: 'ReefSource Fidji', value: '9,3 %', pct: 1 },
    ],
    bestSellers: 'Meilleures ventes · 90 j',
    sellers: [
      { name: 'Amphiprion percula', value: '×28', pct: 1 },
      { name: 'Paracanthurus hepatus', value: '×24', pct: 0.86 },
      { name: 'Euphyllia « Gold Torch »', value: '×19', pct: 0.68 },
    ],
  },
  en: {
    appInventory: 'Inventory',
    searchPlaceholder: 'Search specimens…',
    addSpecimen: '+ New specimen',
    colSpecimen: 'Specimen',
    colId: 'ID',
    colSize: 'Size',
    colPrice: 'Price',
    colStatus: 'Status',
    statusStock: 'In stock',
    statusReserved: 'Reserved',
    statusShipped: 'Shipped',
    statusRemoved: 'Removed',
    statusSold: 'Sold',
    syncFooter: 'Online store in sync',
    justNow: 'just now',

    cardArrival: 'Arrived',
    cardSupplier: 'Supplier',
    cardTank: 'Tank',
    cardArrivalValue: 'May 12 · Sunda Aquatics',
    cardTankValue: 'A-03',
    cardPublished: 'Published to the online store',
    cardUnique: 'One of a kind',

    cardSku: 'SKU',
    cardSkuSubtitle: 'Clownfish · 4 cm',
    cardStockQty: '14 in stock',
    cardBatch: 'Batch',
    cardBatchValue: 'May 12 · Sunda Aquatics',
    cardZone: 'Zone',
    cardZoneValue: 'B-02',

    posTitle: 'POS · In store',
    storeTitle: 'Online store',
    posSaleLine: 'Counter sale',
    syncing: 'sync…',
    synced: 'synced',

    mortalityHeader: 'Stock removal',
    mortalityButton: 'Log a mortality',
    mortalityReasonLabel: 'Reason',
    mortalityReason: 'Died in tank',
    mortalityTime: 'Today · 08:12',
    mortalityConfirm: 'Removed from the online store',

    traceTitle: 'Traceability',
    traceSteps: [
      { label: 'Received from supplier · Sunda Aquatics', time: 'May 12 · 14:02' },
      { label: 'Acclimated in tank A-03', time: 'May 12 · 15:20' },
      { label: 'Pre-shipping photo', time: 'May 15 · 09:47', photo: 'IMG_2841.jpg' },
      { label: 'Handed to carrier', time: 'May 15 · 11:05' },
      { label: 'Delivered · QR scan', time: 'May 16 · 09:41', done: true },
    ],
    traceExport: 'Export the PDF evidence file',

    ordersTitle: 'Orders',
    newOrder: '+ New order',
    colOrder: 'Order',
    colClient: 'Customer',
    colSpecimens: 'Specimens',
    colTotal: 'Total',
    orderToPack: 'To pack',
    orderShipped: 'Shipped',
    orderDelivered: 'Delivered',

    kpis: [
      { label: 'DOA rate · 30 d', value: '1.2%' },
      { label: 'Tank mortality · 30 d', value: '3.4%' },
      { label: 'Average margin', value: '41%' },
    ],
    mortalityBySupplier: 'Mortality by supplier · 90 d',
    suppliers: [
      { name: 'Bali Reef Farm', value: '2.1%', pct: 0.22 },
      { name: 'Pacific Reef Supply', value: '4.8%', pct: 0.52 },
      { name: 'ReefSource Fiji', value: '9.3%', pct: 1 },
    ],
    bestSellers: 'Best sellers · 90 d',
    sellers: [
      { name: 'Amphiprion percula', value: '×28', pct: 1 },
      { name: 'Paracanthurus hepatus', value: '×24', pct: 0.86 },
      { name: 'Euphyllia “Gold Torch”', value: '×19', pct: 0.68 },
    ],
  },
} as const

type T = (typeof CONTENT)['fr' | 'en']

/* ─── Fictional reef specimens (shared across mocks) ────────── */
type StatusKey = 'stock' | 'reserved' | 'shipped' | 'removed' | 'sold'

interface Specimen {
  id: string
  name: string
  variant?: string
  emoji: string
  size: { fr: string; en: string }
  price: number
  status: StatusKey
}

const SPECIMENS: Specimen[] = [
  { id: 'ACRO-0042', name: 'Acropora tenuis', variant: 'Blue Sky', emoji: '🪸', size: { fr: 'Frag 4 cm', en: '4 cm frag' }, price: 129, status: 'stock' },
  { id: 'ZOA-0118', name: 'Zoanthus sp.', variant: 'Rasta', emoji: '🪸', size: { fr: '25+ polypes', en: '25+ polyps' }, price: 49, status: 'stock' },
  { id: 'WRS-0201', name: 'Cirrhilabrus scottorum', emoji: '🐠', size: { fr: '8 cm', en: '8 cm' }, price: 189, status: 'reserved' },
  { id: 'EUPH-0073', name: 'Euphyllia glabrescens', variant: 'Gold Torch', emoji: '🪸', size: { fr: '2 têtes', en: '2 heads' }, price: 159, status: 'shipped' },
  { id: 'CLWN-0342', name: 'Amphiprion percula', emoji: '🐠', size: { fr: '4 cm', en: '4 cm' }, price: 85, status: 'stock' },
  { id: 'PARA-0056', name: 'Paracanthurus hepatus', emoji: '🐠', size: { fr: '6 cm', en: '6 cm' }, price: 79, status: 'stock' },
  { id: 'CHRY-0089', name: 'Chrysiptera cyanea', emoji: '🐠', size: { fr: '4 cm', en: '4 cm' }, price: 25, status: 'stock' },
  { id: 'PTER-0127', name: 'Pterapogon kauderni', emoji: '🐠', size: { fr: '6 cm', en: '6 cm' }, price: 65, status: 'reserved' },
  { id: 'GRAM-0164', name: 'Gramma loreto', emoji: '🐠', size: { fr: '5 cm', en: '5 cm' }, price: 45, status: 'stock' },
]

function price(n: number, lang: 'fr' | 'en') {
  return lang === 'fr' ? `${n} $` : `$${n}`
}

/* ─── Shared primitives ─────────────────────────────────────── */

/** Scroll-reveal wrapper: fade + slight translate-y (brief spec). */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  )
}

/** Light app-window chrome, rendered like a product screenshot. */
function Window({
  title,
  tag,
  children,
  footer,
  className,
}: {
  title: string
  tag?: string
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-2xl border border-[#e4e4e6] bg-white text-[#1a1a1a] shadow-card ${className ?? ''}`}
      style={{ WebkitFontSmoothing: 'antialiased' }}
    >
      <header className="flex items-center justify-between border-b border-[#ececee] bg-[#fafafa] px-4 py-3">
        <span className="flex items-center gap-2.5 min-w-0">
          <span className="flex gap-1.5 flex-shrink-0" aria-hidden>
            <span className="block h-[9px] w-[9px] rounded-full bg-[#e2e2e4]" />
            <span className="block h-[9px] w-[9px] rounded-full bg-[#e2e2e4]" />
            <span className="block h-[9px] w-[9px] rounded-full bg-[#e2e2e4]" />
          </span>
          <span className="truncate text-[13px] font-semibold tracking-tight">{title}</span>
        </span>
        {tag && (
          <span className="ml-3 flex-shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8a8a8e]">
            {tag}
          </span>
        )}
      </header>
      <div className="min-h-0 flex-1">{children}</div>
      {footer && (
        <footer className="flex items-center gap-2 border-t border-[#ececee] bg-[#fafafa] px-4 py-2.5 text-[12px] text-[#616161]">
          {footer}
        </footer>
      )}
    </div>
  )
}

function LiveDot() {
  return (
    <span
      className="pulse-dot block h-1.5 w-1.5 flex-shrink-0 rounded-full"
      style={{ background: '#4ade80', boxShadow: '0 0 6px 1px rgba(74,222,128,0.5)' }}
      aria-hidden
    />
  )
}

/** Monochrome status badge — filled / outline / muted / dashed. */
function Badge({ status, t }: { status: StatusKey; t: T }) {
  const label: Record<StatusKey, string> = {
    stock: t.statusStock,
    reserved: t.statusReserved,
    shipped: t.statusShipped,
    removed: t.statusRemoved,
    sold: t.statusSold,
  }
  const styles: Record<StatusKey, string> = {
    stock: 'bg-[#161616] text-white border border-[#161616]',
    reserved: 'border border-[#c9c9cc] text-[#1a1a1a] bg-white',
    shipped: 'bg-[#f0f0f1] text-[#616161] border border-[#f0f0f1]',
    removed: 'border border-dashed border-[#c9c9cc] text-[#8a8a8e] bg-white',
    sold: 'bg-[#161616] text-white border border-[#161616]',
  }
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-2 py-0.5 text-[10.5px] font-medium leading-[1.5] transition-colors duration-300 ${styles[status]}`}
    >
      {label[status]}
    </span>
  )
}

/** Emoji thumb on a neutral gradient (home EcomPanel precedent). */
function Thumb({ emoji, size = 32 }: { emoji: string; size?: number }) {
  return (
    <span
      className="flex flex-shrink-0 items-center justify-center overflow-hidden rounded-[7px] border border-[#e6e6e8] leading-none"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.52,
        background: 'linear-gradient(135deg,#f4f4f5 0%,#e8e8ea 100%)',
      }}
      aria-hidden
    >
      {emoji}
    </span>
  )
}

function MonoId({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`font-mono text-[11px] tracking-[0.03em] text-[#8a8a8e] ${className ?? ''}`}>
      {children}
    </span>
  )
}

/* ═══════════════════════════════════════════════════════════════
   1 · HERO — full inventory window
═══════════════════════════════════════════════════════════════ */
export function HeroInventoryMock() {
  const lang = useLang()
  const t = CONTENT[lang]
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 44, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.25, ease: EASE_OUT }}
    >
      <Window
        title="TankLogic"
        tag={t.appInventory}
        className="shadow-card-hover"
        footer={
          <>
            <LiveDot />
            <span>
              {t.syncFooter} · {t.justNow}
            </span>
          </>
        }
      >
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-3 border-b border-[#ececee] px-4 py-2.5">
          <span className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-[#ececee] bg-[#fafafa] px-3 py-1.5 text-[12px] text-[#a0a0a4]">
            <SearchIcon />
            <span className="truncate">{t.searchPlaceholder}</span>
          </span>
          <span className="hidden flex-shrink-0 whitespace-nowrap rounded-lg bg-[#161616] px-3 py-1.5 text-[12px] font-medium text-white min-720:inline-block">
            {t.addSpecimen}
          </span>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-[32px_1fr_auto_auto] items-center gap-3 border-b border-[#ececee] bg-[#fafafa] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#a0a0a4] min-720:grid-cols-[32px_1.3fr_110px_90px_64px_auto]">
          <span />
          <span>{t.colSpecimen}</span>
          <span className="hidden min-720:block">{t.colId}</span>
          <span className="hidden min-720:block">{t.colSize}</span>
          <span className="text-right">{t.colPrice}</span>
          <span className="text-right">{t.colStatus}</span>
        </div>

        {/* Rows */}
        <div>
          {SPECIMENS.map((s, i) => (
            <div
              key={s.id}
              className={`grid grid-cols-[32px_1fr_auto_auto] items-center gap-3 px-4 py-2.5 transition-colors duration-150 hover:bg-[#fafafa] min-720:grid-cols-[32px_1.3fr_110px_90px_64px_auto] ${
                i < SPECIMENS.length - 1 ? 'border-b border-[#f2f2f3]' : ''
              }`}
            >
              <Thumb emoji={s.emoji} />
              <span className="min-w-0">
                <span className="block truncate text-[13px] font-medium tracking-tight">
                  {s.name}
                </span>
                <span className="block truncate text-[11px] text-[#8a8a8e]">
                  {s.variant ? `« ${s.variant} »` : ''}
                  <span className="font-mono min-720:hidden">
                    {s.variant ? ' · ' : ''}
                    {s.id}
                  </span>
                </span>
              </span>
              <MonoId className="hidden min-720:block">{s.id}</MonoId>
              <span className="hidden text-[12px] text-[#616161] min-720:block">{s.size[lang]}</span>
              <span className="text-right font-mono text-[12.5px] tabular-nums text-[#1a1a1a]">
                {price(s.price, lang)}
              </span>
              <span className="flex justify-end">
                <Badge status={s.status} t={t} />
              </span>
            </div>
          ))}
        </div>
      </Window>
    </motion.div>
  )
}

function SearchIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden className="flex-shrink-0">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.5" y2="16.5" />
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════
   2 · WYSIWYG — single specimen card
   Two mirrored variants, one component:
     'unique' → serialized WYSIWYG piece (ACRO-0042, "Pièce unique")
     'sku'    → classic SKU + quantity line (AMPH-PERC, "SKU")
   Same chrome, styles and layout; only the data + row labels differ.
═══════════════════════════════════════════════════════════════ */

/** Filled badge (same style as the 'stock' Badge) with free-form text. */
function FilledBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center whitespace-nowrap rounded-full border border-[#161616] bg-[#161616] px-2 py-0.5 text-[10.5px] font-medium leading-[1.5] text-white">
      {children}
    </span>
  )
}

export function SpecimenCardMock({ variant = 'unique' }: { variant?: 'unique' | 'sku' }) {
  const lang = useLang()
  const t = CONTENT[lang]

  const s = SPECIMENS[0] // ACRO-0042 (unique reference)

  const config =
    variant === 'sku'
      ? {
          id: 'AMPH-PERC',
          emoji: '🐠',
          name: 'Amphiprion percula',
          subtitle: t.cardSkuSubtitle,
          price: 35,
          tag: t.cardSku,
          statusBadge: <FilledBadge>{t.cardStockQty}</FilledBadge>,
          rows: [
            [t.cardBatch, t.cardBatchValue],
            [t.cardZone, t.cardZoneValue],
          ] as Array<[string, string]>,
        }
      : {
          id: s.id,
          emoji: s.emoji,
          name: s.name,
          subtitle: `« ${s.variant} » · SPS · ${s.size[lang]}`,
          price: s.price,
          tag: t.cardUnique,
          statusBadge: <Badge status="stock" t={t} />,
          rows: [
            [t.cardArrival, t.cardArrivalValue],
            [t.cardTank, t.cardTankValue],
          ] as Array<[string, string]>,
        }

  return (
    <Window title={config.id} tag={config.tag}>
      {/* Photo area */}
      <div
        className="relative flex h-40 items-center justify-center border-b border-[#ececee] min-720:h-48"
        style={{ background: 'linear-gradient(135deg,#f6f6f7 0%,#e9e9eb 100%)' }}
      >
        <span className="text-[56px] leading-none min-720:text-[64px]" aria-hidden>
          {config.emoji}
        </span>
        <span className="absolute left-3 top-3 rounded-md bg-white/85 px-2 py-1 font-mono text-[10px] tracking-[0.08em] text-[#616161] backdrop-blur-sm">
          {config.id}
        </span>
      </div>

      {/* Identity */}
      <div className="flex items-start justify-between gap-3 px-4 pb-3 pt-3.5">
        <span>
          <span className="block text-[14.5px] font-semibold tracking-tight">{config.name}</span>
          <span className="block text-[12px] text-[#8a8a8e]">{config.subtitle}</span>
        </span>
        <span className="text-right">
          <span className="block font-mono text-[15px] font-medium tabular-nums">{price(config.price, lang)}</span>
          {config.statusBadge}
        </span>
      </div>

      {/* Meta rows */}
      <div className="border-t border-[#f2f2f3] px-4 py-3">
        {config.rows.map(([label, value], i) => (
          <div key={label} className={`flex items-baseline justify-between py-1.5 ${i === 0 ? '' : 'border-t border-[#f7f7f8]'}`}>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#a0a0a4]">{label}</span>
            <span className="text-[12px] text-[#1a1a1a]">{value}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 border-t border-[#ececee] bg-[#fafafa] px-4 py-2.5 text-[12px] text-[#616161]">
        <LiveDot />
        {t.cardPublished}
      </div>
    </Window>
  )
}

/* ═══════════════════════════════════════════════════════════════
   3 · SYNC — POS ↔ online store loop
   Loop: idle → sold in store → syncing → removed online → reset
═══════════════════════════════════════════════════════════════ */
type SyncPhase = 'idle' | 'sold' | 'syncing' | 'removed'

const SYNC_STEPS: Array<{ phase: SyncPhase; ms: number }> = [
  { phase: 'idle', ms: 2200 },
  { phase: 'sold', ms: 1400 },
  { phase: 'syncing', ms: 1100 },
  { phase: 'removed', ms: 3000 },
]

export function SyncMock() {
  const lang = useLang()
  const t = CONTENT[lang]
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.3 })
  const [phase, setPhase] = useState<SyncPhase>('idle')

  useEffect(() => {
    if (reduce || !inView) return
    let step = 0
    let tid: number
    const next = () => {
      step = (step + 1) % SYNC_STEPS.length
      setPhase(SYNC_STEPS[step].phase)
      tid = window.setTimeout(next, SYNC_STEPS[step].ms)
    }
    tid = window.setTimeout(next, SYNC_STEPS[0].ms)
    return () => window.clearTimeout(tid)
  }, [reduce, inView])

  /* Reduced motion: show the meaningful end state, statically. */
  const p: SyncPhase = reduce ? 'removed' : phase
  const target = SPECIMENS[1] // ZOA-0118
  const others = [SPECIMENS[0], SPECIMENS[4]]
  const soldSide = p === 'sold' || p === 'syncing' || p === 'removed'

  return (
    <div ref={ref} className="grid items-stretch gap-3 min-720:grid-cols-[1fr_auto_1fr] min-720:gap-0">
      {/* POS panel */}
      <Window title={t.posTitle} tag="POS">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between rounded-lg border border-[#ececee] px-3 py-2.5">
            <span className="flex min-w-0 items-center gap-2.5">
              <Thumb emoji={target.emoji} size={28} />
              <span className="min-w-0">
                <span className="block truncate text-[12.5px] font-medium tracking-tight">
                  {target.name} « {target.variant} »
                </span>
                <MonoId>{target.id}</MonoId>
              </span>
            </span>
            <span className="ml-3 flex-shrink-0 text-right">
              <span className="block font-mono text-[12.5px] tabular-nums">{price(target.price, lang)}</span>
            </span>
          </div>

          {/* Sale line appears when sold */}
          <div
            className="mt-2.5 flex items-center justify-between rounded-lg px-3 py-2 text-[12px] transition-all duration-300"
            style={{
              background: soldSide ? '#161616' : '#fafafa',
              color: soldSide ? '#ffffff' : '#a0a0a4',
              opacity: soldSide ? 1 : 0.65,
            }}
          >
            <span className="font-medium">{t.posSaleLine}</span>
            <span className="font-mono tabular-nums">{soldSide ? price(target.price, lang) : '—'}</span>
          </div>
        </div>
      </Window>

      {/* Connector */}
      <div className="flex items-center justify-center px-1 py-1 min-720:px-3" aria-hidden>
        <div className="flex rotate-90 items-center gap-1.5 min-720:rotate-0">
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-text-tertiary min-720:block">
            {p === 'syncing' ? t.syncing : t.synced}
          </span>
          <svg width="44" height="10" viewBox="0 0 44 10" fill="none" className="text-text-tertiary">
            <line x1="0" y1="5" x2="44" y2="5" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            {!reduce && (
              <circle r="2.5" cy="5" fill="currentColor">
                <animate attributeName="cx" values="-3;47" dur="1.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="1.6s" repeatCount="indefinite" />
              </circle>
            )}
          </svg>
        </div>
      </div>

      {/* Online store panel */}
      <Window
        title={t.storeTitle}
        footer={
          <>
            <LiveDot />
            <span>{t.syncFooter}</span>
          </>
        }
      >
        <div className="px-4 py-3">
          {[others[0], target, others[1]].map((s) => {
            const isTarget = s.id === target.id
            const pulled = isTarget && p === 'removed'
            return (
              <div
                key={s.id}
                className="flex items-center justify-between border-b border-[#f2f2f3] py-2 transition-opacity duration-500 last:border-b-0"
                style={{ opacity: pulled ? 0.42 : 1 }}
              >
                <span className="flex min-w-0 items-center gap-2.5">
                  <Thumb emoji={s.emoji} size={28} />
                  <span className="min-w-0">
                    <span className={`block truncate text-[12.5px] font-medium tracking-tight ${pulled ? 'line-through decoration-[#c9c9cc]' : ''}`}>
                      {s.name}
                      {s.variant ? ` « ${s.variant} »` : ''}
                    </span>
                    <MonoId>{s.id}</MonoId>
                  </span>
                </span>
                <span className="ml-3 flex-shrink-0">
                  <Badge status={pulled ? 'removed' : s.id === 'WRS-0201' ? 'reserved' : 'stock'} t={t} />
                </span>
              </div>
            )
          })}
        </div>
      </Window>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   4a · MORTALITY — one-click removal
   Scroll-triggered sequence: button press → log entry fades in.
═══════════════════════════════════════════════════════════════ */
export function MortalityMock() {
  const lang = useLang()
  const t = CONTENT[lang]
  const reduce = useReducedMotion()
  const s = SPECIMENS[3] // EUPH-0073

  return (
    <Window title={t.mortalityHeader} tag={s.id}>
      <div className="px-4 py-4">
        {/* Specimen line */}
        <div className="flex items-center justify-between">
          <span className="flex min-w-0 items-center gap-2.5">
            <Thumb emoji={s.emoji} />
            <span className="min-w-0">
              <span className="block truncate text-[13px] font-medium tracking-tight">
                {s.name} « {s.variant} »
              </span>
              <MonoId>{s.id}</MonoId>
            </span>
          </span>
        </div>

        {/* The one-click button */}
        <motion.div
          className="mt-3.5 flex items-center justify-center gap-2 rounded-xl bg-[#161616] px-4 py-3 text-[13px] font-medium text-white"
          initial={reduce ? false : { scale: 1 }}
          whileInView={reduce ? undefined : { scale: [1, 0.965, 1] }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.55, times: [0, 0.5, 1], ease: 'easeOut' }}
        >
          <MinusCircleIcon />
          {t.mortalityButton}
        </motion.div>

        {/* Resulting log entry */}
        <motion.div
          className="mt-3.5 rounded-xl border border-[#ececee] bg-[#fafafa] px-3.5 py-3"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 1.05, ease: EASE_OUT }}
        >
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#a0a0a4]">
              {t.mortalityReasonLabel}
            </span>
            <span className="font-mono text-[11px] tabular-nums text-[#8a8a8e]">{t.mortalityTime}</span>
          </div>
          <div className="mt-1 text-[12.5px] font-medium text-[#1a1a1a]">{t.mortalityReason}</div>
          <div className="mt-2.5 flex items-center gap-1.5 border-t border-[#ececee] pt-2.5 text-[12px] text-[#616161]">
            <CheckSmallIcon />
            {t.mortalityConfirm}
          </div>
        </motion.div>
      </div>
    </Window>
  )
}

function MinusCircleIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden className="flex-shrink-0">
      <circle cx="12" cy="12" r="9" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  )
}

function CheckSmallIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="flex-shrink-0">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════
   4b · TRACEABILITY — per-specimen evidence timeline
═══════════════════════════════════════════════════════════════ */
export function TraceMock() {
  const lang = useLang()
  const t = CONTENT[lang]
  const s = SPECIMENS[0] // ACRO-0042

  return (
    <Window
      title={`${t.traceTitle} · ${s.id}`}
      footer={
        <span className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-[#dcdcde] bg-white py-1.5 text-[12px] font-medium text-[#1a1a1a]">
          <FileIcon />
          {t.traceExport}
        </span>
      }
    >
      <ol className="px-4 py-4">
        {t.traceSteps.map((step, i) => {
          const last = i === t.traceSteps.length - 1
          const done = 'done' in step && step.done
          return (
            <li key={step.label} className="relative flex gap-3 pb-4 last:pb-0">
              {!last && (
                <span className="absolute bottom-0 left-[5.5px] top-4 w-px bg-[#ececee]" aria-hidden />
              )}
              <span
                className={`relative z-10 mt-1 block h-3 w-3 flex-shrink-0 rounded-full border ${
                  done ? 'border-[#161616] bg-[#161616]' : 'border-[#c9c9cc] bg-white'
                }`}
                aria-hidden
              />
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <span className={`text-[12.5px] tracking-tight ${done ? 'font-semibold' : 'font-medium'} text-[#1a1a1a]`}>
                    {step.label}
                  </span>
                  <span className="font-mono text-[10.5px] tabular-nums text-[#a0a0a4]">{step.time}</span>
                </span>
                {'photo' in step && step.photo && (
                  <span className="mt-1.5 flex items-center gap-2 rounded-lg border border-[#ececee] bg-[#fafafa] px-2.5 py-1.5">
                    <span
                      className="flex h-7 w-9 flex-shrink-0 items-center justify-center rounded-[5px] border border-[#e6e6e8] text-[12px]"
                      style={{ background: 'linear-gradient(135deg,#f4f4f5,#e8e8ea)' }}
                      aria-hidden
                    >
                      {s.emoji}
                    </span>
                    <span className="font-mono text-[10.5px] text-[#8a8a8e]">{step.photo}</span>
                  </span>
                )}
              </span>
            </li>
          )
        })}
      </ol>
    </Window>
  )
}

function FileIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="flex-shrink-0">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════
   5 · ORDERS — order list
═══════════════════════════════════════════════════════════════ */
export function OrdersMock() {
  const lang = useLang()
  const t = CONTENT[lang]

  const ORDERS = [
    { num: '#1042', client: 'M. Tremblay', ids: ['ACRO-0042', 'ZOA-0118'], total: 178, status: t.orderToPack, filled: true },
    { num: '#1041', client: 'A. Gagnon', ids: ['WRS-0201'], total: 189, status: t.orderShipped, filled: false },
    { num: '#1040', client: 'S. Roy', ids: ['EUPH-0073'], total: 159, status: t.orderDelivered, filled: false, muted: true },
  ]

  return (
    <Window title={t.ordersTitle} tag="03">
      <div className="flex items-center justify-between border-b border-[#ececee] px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#a0a0a4]">
          {t.colOrder} · {t.colClient} · {t.colSpecimens}
        </span>
        <span className="whitespace-nowrap rounded-lg bg-[#161616] px-3 py-1.5 text-[11.5px] font-medium text-white">
          {t.newOrder}
        </span>
      </div>
      <div>
        {ORDERS.map((o, i) => (
          <div
            key={o.num}
            className={`flex items-center justify-between gap-3 px-4 py-3 transition-colors duration-150 hover:bg-[#fafafa] ${
              i < ORDERS.length - 1 ? 'border-b border-[#f2f2f3]' : ''
            }`}
          >
            <span className="min-w-0">
              <span className="flex items-baseline gap-2">
                <span className="font-mono text-[12px] font-medium tabular-nums text-[#1a1a1a]">{o.num}</span>
                <span className="truncate text-[12.5px] text-[#616161]">{o.client}</span>
              </span>
              <span className="mt-0.5 flex flex-wrap gap-1">
                {o.ids.map((id) => (
                  <span key={id} className="rounded-md border border-[#ececee] bg-[#fafafa] px-1.5 py-0.5 font-mono text-[10px] text-[#8a8a8e]">
                    {id}
                  </span>
                ))}
              </span>
            </span>
            <span className="flex flex-shrink-0 items-center gap-3">
              <span className="hidden font-mono text-[12.5px] tabular-nums text-[#1a1a1a] min-720:block">
                {price(o.total, lang)}
              </span>
              <span
                className={`inline-flex items-center whitespace-nowrap rounded-full px-2 py-0.5 text-[10.5px] font-medium leading-[1.5] ${
                  o.filled
                    ? 'bg-[#161616] text-white'
                    : o.muted
                      ? 'bg-[#f0f0f1] text-[#8a8a8e]'
                      : 'border border-[#c9c9cc] text-[#1a1a1a]'
                }`}
              >
                {o.status}
              </span>
            </span>
          </div>
        ))}
      </div>
    </Window>
  )
}

/* ═══════════════════════════════════════════════════════════════
   6 · ANALYTICS — KPIs + supplier mortality + best sellers
═══════════════════════════════════════════════════════════════ */
function BarRow({ name, value, pct, emphasized }: { name: string; value: string; pct: number; emphasized?: boolean }) {
  const reduce = useReducedMotion()
  return (
    <div className="py-1.5">
      <div className="flex items-baseline justify-between gap-3">
        <span className={`truncate text-[12px] ${emphasized ? 'font-semibold text-[#1a1a1a]' : 'text-[#616161]'}`}>{name}</span>
        <span className="font-mono text-[11.5px] tabular-nums text-[#1a1a1a]">{value}</span>
      </div>
      <div className="mt-1 h-[5px] overflow-hidden rounded-full bg-[#f0f0f1]">
        <motion.div
          className="h-full origin-left rounded-full"
          style={{ background: emphasized ? '#161616' : '#a0a0a4', width: `${pct * 100}%` }}
          initial={reduce ? false : { transform: 'scaleX(0)' }}
          whileInView={{ transform: 'scaleX(1)' }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE_OUT }}
        />
      </div>
    </div>
  )
}

export function AnalyticsMock() {
  const lang = useLang()
  const t = CONTENT[lang]

  return (
    <div className="grid gap-3 min-720:grid-cols-3">
      {/* KPI tiles */}
      <div className="grid grid-cols-3 gap-3 min-720:col-span-3">
        {t.kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-2xl border border-[#e4e4e6] bg-white px-4 py-3.5 shadow-card min-720:px-5 min-720:py-4"
          >
            <span className="block font-mono text-[9.5px] uppercase leading-snug tracking-[0.1em] text-[#a0a0a4] min-720:text-[10px]">
              {kpi.label}
            </span>
            <span className="mt-1 block text-[20px] font-semibold tabular-nums tracking-tight text-[#1a1a1a] min-720:text-[26px]">
              {kpi.value}
            </span>
          </div>
        ))}
      </div>

      {/* Mortality by supplier */}
      <div className="rounded-2xl border border-[#e4e4e6] bg-white px-4 py-4 shadow-card min-720:col-span-2 min-720:px-5">
        <span className="block border-b border-[#f2f2f3] pb-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#a0a0a4]">
          {t.mortalityBySupplier}
        </span>
        <div className="pt-2">
          {t.suppliers.map((sup, i) => (
            <BarRow key={sup.name} name={sup.name} value={sup.value} pct={sup.pct} emphasized={i === t.suppliers.length - 1} />
          ))}
        </div>
      </div>

      {/* Best sellers */}
      <div className="rounded-2xl border border-[#e4e4e6] bg-white px-4 py-4 shadow-card min-720:px-5">
        <span className="block border-b border-[#f2f2f3] pb-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#a0a0a4]">
          {t.bestSellers}
        </span>
        <div className="pt-2">
          {t.sellers.map((sel) => (
            <BarRow key={sel.name} name={sel.name} value={sel.value} pct={sel.pct} />
          ))}
        </div>
      </div>
    </div>
  )
}
