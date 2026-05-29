'use client';

/**
 * ErpSyncIllustration
 * -------------------
 * Top "topology" illustration for the ERP ↔ E-commerce sync section.
 * Next.js 15 (App Router) · Tailwind CSS v3 · framer-motion.
 *
 * Notes
 * - Strict monochrome: #080808 ground, white text, border-white/10 hairlines.
 *   The original storefront panel was a light card; to honour the monochrome
 *   rule it is rendered dark on a slightly elevated surface (bg-white/[0.04]).
 * - Fully responsive: panels sit side by side from `md` up and stack on mobile.
 *   The connectors flip from horizontal to vertical when stacked.
 * - No fixed pixel layout sizes — panels grow to content and equalise via
 *   flex-1 + items-stretch.
 * - Geist is assumed to be wired globally (font-sans / font-mono in Tailwind),
 *   so only font-* utilities are used here.
 * - All UI copy is wired through useLang() / lib/strings (FR / EN).
 */

import { motion } from 'framer-motion';
import { useLang } from '@/components/app-provider';
import { strings } from '@/lib/strings';

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

type Category = 'Vin' | 'Champagne';

type StockRow = {
  emoji: string;
  name: string;
  sku: string;
  category: Category;
  stock: number;
  price: string;
};

const ROWS: StockRow[] = [
  { emoji: '🍷', name: 'Château Margaux', sku: 'CM-2019', category: 'Vin', stock: 24, price: '89€' },
  { emoji: '🥂', name: 'Champagne Brut', sku: 'CH-NV-12', category: 'Champagne', stock: 12, price: '65€' },
  { emoji: '🍷', name: 'Sancerre Blanc', sku: 'SB-2022', category: 'Vin', stock: 18, price: '45€' },
  { emoji: '🍷', name: 'Côte du Rhône', sku: 'CR-2021', category: 'Vin', stock: 42, price: '22€' },
  { emoji: '🥂', name: "Crémant d'Alsace", sku: 'CA-2023', category: 'Champagne', stock: 31, price: '28€' },
  { emoji: '🍷', name: 'Saint-Émilion', sku: 'SE-2020', category: 'Vin', stock: 9, price: '95€' },
  { emoji: '🍷', name: 'Pouilly-Fumé', sku: 'PF-2022', category: 'Vin', stock: 27, price: '38€' },
  { emoji: '🥂', name: 'Champagne Rosé', sku: 'CR-NV-08', category: 'Champagne', stock: 15, price: '78€' },
  { emoji: '🍷', name: 'Chablis 1er Cru', sku: 'CB-2021', category: 'Vin', stock: 21, price: '52€' },
];

/* ------------------------------------------------------------------ */
/*  Primitives                                                        */
/* ------------------------------------------------------------------ */

function Panel({
  title,
  elevated = false,
  children,
  footer,
}: {
  title: React.ReactNode;
  elevated?: boolean;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div
      className={[
        'flex w-full flex-1 flex-col overflow-hidden rounded-xl border border-white/10',
        elevated ? 'bg-white/[0.045]' : 'bg-white/[0.02]',
        'shadow-[0_16px_40px_-12px_rgba(0,0,0,0.55)]',
      ].join(' ')}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="text-xs font-semibold tracking-tight text-white">{title}</span>
      </div>
      <div className="flex flex-1 flex-col py-1">{children}</div>
      <div className="flex items-center gap-2 border-t border-white/10 px-4 py-2.5 text-[11px] text-white/55">
        {footer}
      </div>
    </div>
  );
}

function PulseDot() {
  return (
    <motion.span
      className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white"
      animate={{ opacity: [1, 0.4, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Tables                                                            */
/* ------------------------------------------------------------------ */

const STOCK_COLS = 'grid grid-cols-[1.5fr_0.8fr_0.45fr_0.6fr] items-center gap-1.5 px-3';
const SITE_COLS = 'grid grid-cols-[1.35fr_0.9fr_0.4fr_0.8fr] items-center gap-1.5 px-3';

function ColHead({ cols, children }: { cols: string; children: React.ReactNode }) {
  return (
    <div
      className={`${cols} border-b border-white/10 py-2 font-mono text-[8.5px] uppercase tracking-[0.1em] text-white/40`}
    >
      {children}
    </div>
  );
}

function StockTable() {
  const t = strings[useLang()].erpSync;
  return (
    <div className="flex flex-1 flex-col">
      <ColHead cols={STOCK_COLS}>
        <span>{t.colProduct}</span>
        <span>{t.colSku}</span>
        <span>{t.colStock}</span>
        <span>{t.colPrice}</span>
      </ColHead>
      {ROWS.map((r) => (
        <div key={r.sku} className={`${STOCK_COLS} py-[7px] text-[11px]`}>
          <span className="flex items-center gap-1.5 truncate font-medium text-white">
            <span aria-hidden>{r.emoji}</span>
            <span className="truncate">{r.name}</span>
          </span>
          <span className="font-mono text-[9.5px] text-white/55">{r.sku}</span>
          <span className="font-mono text-[10.5px] font-medium text-white/90">{r.stock}</span>
          <span className="text-[10.5px] font-semibold text-white">{r.price}</span>
        </div>
      ))}
    </div>
  );
}

function SiteTable() {
  const t = strings[useLang()].erpSync;
  const catLabel = (c: Category) => (c === 'Vin' ? t.catWine : t.catChampagne);
  return (
    <div className="flex flex-1 flex-col">
      <ColHead cols={SITE_COLS}>
        <span>{t.colProduct}</span>
        <span>{t.colCategory}</span>
        <span>{t.colStock}</span>
        <span>{t.colStatus}</span>
      </ColHead>
      {ROWS.map((r) => (
        <div key={r.sku} className={`${SITE_COLS} py-[7px] text-[11px]`}>
          <span className="flex items-center gap-1.5 truncate font-medium text-white">
            <span aria-hidden>{r.emoji}</span>
            <span className="truncate">{r.name}</span>
          </span>
          <span className="font-mono text-[8.5px] uppercase tracking-[0.04em] text-white/55">
            {catLabel(r.category)}
          </span>
          <span className="font-mono text-[10.5px] font-medium text-white/90">{r.stock}</span>
          <span className="inline-flex items-center gap-1.5 text-[10px] text-white/90">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-white" />
            {t.statusActive}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  API / webhook panel                                               */
/* ------------------------------------------------------------------ */

function ApiPanel() {
  const t = strings[useLang()].erpSync;
  return (
    <div className="flex w-full flex-1 flex-col overflow-hidden rounded-xl border border-white/15 bg-black/50 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2.5">
        <span className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-white/40">
          {t.apiLabel}
        </span>
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-white"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <pre className="flex-1 overflow-hidden whitespace-pre px-3 pt-3.5 font-mono text-[9px] leading-[1.7] text-white/55">
<span className="font-medium text-white">POST</span> /api/sync <span className="text-white/55">HTTP/1.1</span>
<span className="text-white/55">Host:</span> cave-geneve.ch
<span className="text-white/55">Authorization:</span>
<span className="text-white/80">  Bearer sk_live_***</span>
<span className="text-white/55">Content-Type:</span> application/json

{'{'}
  <span className="text-white/55">"event"</span>: <span className="text-white">"stock.updated"</span>,
  <span className="text-white/55">"items"</span>: [
    {'{'}<span className="text-white/55">"sku"</span>:<span className="text-white">"CM-2019"</span>,<span className="text-white/55">"stock"</span>:<span className="text-white">24</span>{'}'},
    {'{'}<span className="text-white/55">"sku"</span>:<span className="text-white">"CH-NV-12"</span>,<span className="text-white/55">"stock"</span>:<span className="text-white">12</span>{'}'},
    {'{'}<span className="text-white/55">"sku"</span>:<span className="text-white">"SB-2022"</span>,<span className="text-white/55">"stock"</span>:<span className="text-white">18</span>{'}'}
  ],
  <span className="text-white/55">"currency"</span>: <span className="text-white">"CHF"</span>
{'}'}
<span className="mt-2.5 block border-t border-dashed border-white/15 pt-2 font-medium text-white">→ 200 OK <span className="font-normal text-white/55">{t.apiResult}</span></span></pre>

      <div className="flex items-center gap-0.5 px-3 pb-3 pt-2.5 font-mono text-[10px] text-white/40">
        <span>$</span>
        <motion.span
          className="ml-0.5 inline-block h-2.5 w-1.5 bg-white"
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear', times: [0, 0.5, 0.5, 1] }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Connector (horizontal on md+, vertical when stacked)              */
/* ------------------------------------------------------------------ */

function Connector({ label }: { label: string }) {
  return (
    <div
      aria-hidden
      className="flex w-full shrink-0 flex-col items-center justify-center gap-1.5 py-3 md:w-auto md:px-3 md:py-0"
    >
      <span className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-white/55">
        {label}
      </span>

      {/* Horizontal — desktop */}
      <div className="relative hidden h-px w-16 bg-white/15 md:block">
        <motion.span
          className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.85)]"
          initial={{ left: '0%', opacity: 0 }}
          animate={{ left: '100%', opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
        />
        <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-[11px] leading-none text-white/70">
          →
        </span>
      </div>

      {/* Vertical — mobile */}
      <div className="relative h-8 w-px bg-white/15 md:hidden">
        <motion.span
          className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.85)]"
          initial={{ top: '0%', opacity: 0 }}
          animate={{ top: '100%', opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
        />
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[11px] leading-none text-white/70">
          ↓
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                           */
/* ------------------------------------------------------------------ */

export default function ErpSyncIllustration() {
  const t = strings[useLang()].erpSync;
  return (
    <section className="w-full bg-[#080808] px-4 py-10 text-white sm:px-6 md:py-14">
      <div className="mx-auto w-full max-w-6xl">
        {/* Caption */}
        <div className="mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
          <span>{t.caption}</span>
          <span className="hidden sm:inline">{t.domain}</span>
        </div>

        {/* Topology */}
        <div className="flex flex-col items-stretch md:flex-row">
          <Panel
            title={t.stockTitle}
            footer={
              <>
                <PulseDot />
                <span>{t.stockFooter}</span>
              </>
            }
          >
            <StockTable />
          </Panel>

          <Connector label={t.connectorSync} />

          <ApiPanel />

          <Connector label={t.connectorPush} />

          <Panel
            elevated
            title={t.siteTitle}
            footer={<span>{t.siteFooter}</span>}
          >
            <SiteTable />
          </Panel>
        </div>
      </div>
    </section>
  );
}
