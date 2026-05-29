'use client';

/**
 * ErpSyncIllustration — block 03
 * ------------------------------
 * Three-panel topology: stock software → API/webhook → storefront,
 * joined by animated traveling-dot connectors.
 *
 * Next.js 15 (App Router) · Tailwind CSS v3 · framer-motion.
 *
 * - Left/centre panels: monochrome dark. Right panel: white card.
 * - Responsive: panels side by side from `md` up, stack on mobile.
 * - 6 product rows displayed per panel.
 */

import { motion } from 'framer-motion';

type Category = 'Vin' | 'Champagne';
type Row = { emoji: string; name: string; sku: string; category: Category; stock: number; price: string };

const ROWS: Row[] = [
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

const STOCK_COLS = 'grid grid-cols-[1.5fr_0.8fr_0.45fr_0.6fr] items-center gap-1.5 px-3';
const SITE_COLS  = 'grid grid-cols-[1.35fr_0.9fr_0.4fr_0.8fr] items-center gap-1.5 px-3';

/* ------------------------------------------------------------------ */
/*  Primitives                                                         */
/* ------------------------------------------------------------------ */

function Panel({
  title,
  elevated = false,
  light = false,
  children,
  footer,
}: {
  title: string;
  elevated?: boolean;
  light?: boolean;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  if (light) {
    return (
      <div className="flex w-full flex-1 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_16px_40px_-12px_rgba(0,0,0,0.12)]">
        <div className="border-b border-neutral-100 px-4 py-3 text-xs font-semibold tracking-tight text-neutral-900">
          {title}
        </div>
        <div className="flex flex-1 flex-col py-1">{children}</div>
        <div className="flex items-center gap-2 border-t border-neutral-100 px-4 py-2.5 text-[11px] text-neutral-500">
          {footer}
        </div>
      </div>
    );
  }
  return (
    <div
      className={`flex w-full flex-1 flex-col overflow-hidden rounded-xl border border-white/10 ${
        elevated ? 'bg-white/[0.045]' : 'bg-white/[0.02]'
      } shadow-[0_16px_40px_-12px_rgba(0,0,0,0.55)]`}
    >
      <div className="border-b border-white/10 px-4 py-3 text-xs font-semibold tracking-tight text-white">
        {title}
      </div>
      <div className="flex flex-1 flex-col py-1">{children}</div>
      <div className="flex items-center gap-2 border-t border-white/10 px-4 py-2.5 text-[11px] text-white/55">
        {footer}
      </div>
    </div>
  );
}

function ColHead({
  cols,
  light = false,
  children,
}: {
  cols: string;
  light?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${cols} border-b py-2 font-mono text-[8.5px] uppercase tracking-[0.1em] ${
        light ? 'border-neutral-100 text-neutral-500' : 'border-white/10 text-white/40'
      }`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Tables                                                             */
/* ------------------------------------------------------------------ */

function StockTable() {
  return (
    <div className="flex flex-1 flex-col">
      <ColHead cols={STOCK_COLS}>
        <span>Produit</span>
        <span>SKU</span>
        <span>Stock</span>
        <span>Prix</span>
      </ColHead>
      {ROWS.slice(0, 6).map((r) => (
        <div key={r.sku} className={`${STOCK_COLS} py-[7px] text-[11px]`}>
          <span className="flex items-center gap-1.5 font-medium text-white">
            <span aria-hidden>{r.emoji}</span>
            <span>{r.name}</span>
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
  return (
    <div className="flex flex-1 flex-col">
      <ColHead cols={SITE_COLS} light>
        <span>Produit</span>
        <span>Catégorie</span>
        <span>Stock</span>
        <span>Statut</span>
      </ColHead>
      {ROWS.slice(0, 6).map((r) => (
        <div key={r.sku} className={`${SITE_COLS} py-[7px] text-[11px]`}>
          <span className="flex items-center gap-1.5 font-medium text-neutral-900">
            <span aria-hidden>{r.emoji}</span>
            <span>{r.name}</span>
          </span>
          <span className="font-mono text-[8.5px] uppercase tracking-[0.04em] text-neutral-500">
            {r.category}
          </span>
          <span className="font-mono text-[10.5px] font-medium text-neutral-700">{r.stock}</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700">
            Actif
          </span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  API panel                                                          */
/* ------------------------------------------------------------------ */

function ApiPanel() {
  return (
    <div className="flex w-full flex-1 flex-col overflow-hidden rounded-xl border border-white/15 bg-black/50 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2.5">
        <span className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-white/40">API · Webhook</span>
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
<span className="mt-2.5 block border-t border-dashed border-white/15 pt-2 font-medium text-white">→ 200 OK <span className="font-normal text-white/55">· 9 produits · 98ms</span></span></pre>
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
/*  Connector                                                          */
/* ------------------------------------------------------------------ */

function Connector({ label }: { label: string }) {
  return (
    <div
      aria-hidden
      className="flex w-full shrink-0 flex-col items-center justify-center gap-1.5 py-3 md:w-auto md:px-3 md:py-0"
    >
      <span className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-white/55">{label}</span>
      {/* horizontal — desktop */}
      <div className="relative hidden h-px w-16 bg-white/15 md:block">
        <motion.span
          className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.85)]"
          initial={{ left: '0%', opacity: 0 }}
          animate={{ left: '100%', opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
        />
        <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-[11px] leading-none text-white/70">→</span>
      </div>
      {/* vertical — mobile */}
      <div className="relative h-8 w-px bg-white/15 md:hidden">
        <motion.span
          className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.85)]"
          initial={{ top: '0%', opacity: 0 }}
          animate={{ top: '100%', opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
        />
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[11px] leading-none text-white/70">↓</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Root                                                               */
/* ------------------------------------------------------------------ */

export default function ErpSyncIllustration() {
  return (
    <div className="w-full text-white">
      <div className="w-full">
        <div className="mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
          <span>FIG. 1.3 · ERP ↔ E-commerce · Temps réel</span>
          <span className="hidden sm:inline">cave-geneve.ch</span>
        </div>

        <div className="flex flex-col items-stretch gap-4 md:flex-row">
          <Panel
            title="Logiciel de stock"
            footer={
              <>
                <motion.span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-white"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span>Connecté · Dernière sync 2s</span>
              </>
            }
          >
            <StockTable />
          </Panel>

          <Connector label="sync →" />
          <ApiPanel />
          <Connector label="→ push" />

          <Panel light title="Site e-commerce" footer={<span>↻ Dernière sync : il y a 2s</span>}>
            <SiteTable />
          </Panel>
        </div>
      </div>
    </div>
  );
}
