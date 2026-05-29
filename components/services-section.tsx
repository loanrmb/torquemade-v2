'use client';

/**
 * ServicesSection
 * ---------------
 * Auto-rotating "02 — Services" section: a four-item tab rail drives a stage
 * that crossfades between four figures (Sites web, CRM, ERP sync, SEO/IA).
 *
 * Stack: Next.js 15 (App Router) · Tailwind CSS v3 · framer-motion.
 *
 * Theme
 * - The section chrome (heading, intro, tab rail) follows the site theme via
 *   CSS variables (--bg-primary / --text-* / --bg-inverse), so the background
 *   adapts to DARK / LIGHT.
 * - The "Stage" that holds the product figures stays a fixed dark surface in
 *   both themes — the figures are intentional dark UI mockups (white-on-dark),
 *   so they remain readable whatever the active theme.
 *
 * Copy
 * - All UI text is wired through useLang() / lib/strings (FR / EN).
 *
 * Assets — place these in /public/services/ :
 *   jetski-site-v2.png · jetski-code-v2.png · crm-form.png · crm-dash.png
 */

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/components/app-provider';
import { strings } from '@/lib/strings';

const IMG = '/images';
const ROTATE_MS = 7000;

const EASE = [0, 0, 0.2, 1] as const;

/* ------------------------------------------------------------------ */
/*  Window chrome (shared by figures 1 & 2)                           */
/* ------------------------------------------------------------------ */

function WindowFrame({
  file,
  className = '',
  bodyClassName = '',
  children,
}: {
  file?: string;
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_12px_32px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div className={`flex items-center gap-1.5 border-b px-3.5 py-2.5 ${
        file ? 'border-neutral-700 bg-[#1c1c1c]' : 'border-white/10 bg-white/[0.04]'
      }`}>
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        {file ? (
          <span className="ml-3 rounded-md border border-neutral-600 bg-neutral-700 px-2 py-0.5 font-mono text-[10px] tracking-wide text-neutral-200">
            {file}
          </span>
        ) : null}
      </div>
      <div className={`relative min-h-0 flex-1 overflow-hidden bg-black/40 ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
}

const SHOT = 'block w-full';

/* ------------------------------------------------------------------ */
/*  Figure 01 — Code → Production                                     */
/* ------------------------------------------------------------------ */

function FigureSites() {
  const t = strings[useLang()].servicesSection;
  return (
    <div className="relative w-full">
      <WindowFrame className="w-full" bodyClassName="aspect-[16/10]">
        <img
          src={`${IMG}/jetski-site-v2.png`}
          alt={t.alts.site}
          className={`${SHOT} h-full object-cover object-top`}
        />
      </WindowFrame>

      <WindowFrame
        file="index.html"
        className="absolute left-4 top-8 w-2/5 max-w-[15rem] md:left-10 md:top-12"
      >
        <img src={`${IMG}/jetski-code-v2.png`} alt={t.alts.code} className={`${SHOT} h-auto`} />
      </WindowFrame>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Figure 02 — Workflows métier                                      */
/* ------------------------------------------------------------------ */

function FigureCrm() {
  const t = strings[useLang()].servicesSection;
  return (
    <div className="grid w-full gap-4 md:grid-cols-2 md:items-center">
      <WindowFrame>
        <img src={`${IMG}/crm-form.png`} alt={t.alts.crmForm} className={`${SHOT} h-auto`} />
      </WindowFrame>
      <WindowFrame>
        <img src={`${IMG}/crm-dash.png`} alt={t.alts.crmDash} className={`${SHOT} h-auto`} />
      </WindowFrame>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Figure 03 — ERP ↔ E-commerce topology                            */
/* ------------------------------------------------------------------ */

type Category = 'Vin' | 'Champagne';
type Row = { emoji: string; name: string; sku: string; category: Category; stock: number; price: string };

const ROWS: Row[] = [
  { emoji: '🍷', name: 'Château Margaux', sku: 'CM-2019', category: 'Vin', stock: 24, price: '89€' },
  { emoji: '🥂', name: 'Champagne Brut', sku: 'CH-NV-12', category: 'Champagne', stock: 12, price: '65€' },
  { emoji: '🍷', name: 'Sancerre Blanc', sku: 'SB-2022', category: 'Vin', stock: 18, price: '45€' },
  { emoji: '🍷', name: 'Côte du Rhône', sku: 'CR-2021', category: 'Vin', stock: 42, price: '22€' },
  { emoji: '🥂', name: "Crémant d'Alsace", sku: 'CA-2023', category: 'Champagne', stock: 31, price: '28€' },
  { emoji: '🍷', name: 'Saint-Émilion', sku: 'SE-2020', category: 'Vin', stock: 0, price: '95€' },
  { emoji: '🍷', name: 'Pouilly-Fumé', sku: 'PF-2022', category: 'Vin', stock: 27, price: '38€' },
  { emoji: '🥂', name: 'Champagne Rosé', sku: 'CR-NV-08', category: 'Champagne', stock: 15, price: '78€' },
  { emoji: '🍷', name: 'Chablis 1er Cru', sku: 'CB-2021', category: 'Vin', stock: 21, price: '52€' },
];

const STOCK_COLS = 'grid grid-cols-[1.5fr_0.8fr_0.5fr] items-center gap-1.5 px-3';
const SITE_COLS  = 'grid grid-cols-[1.5fr_0.5fr_0.8fr] items-center gap-1.5 px-3';

function ErpPanel({
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
      className={`${cols} border-b py-2 font-mono text-[10px] uppercase tracking-[0.08em] ${
        light ? 'border-neutral-100 text-neutral-500' : 'border-white/10 text-white/40'
      }`}
    >
      {children}
    </div>
  );
}

function ApiPanel() {
  const t = strings[useLang()].servicesSection;
  return (
    <div className="flex w-[15rem] shrink-0 flex-col overflow-hidden rounded-xl border border-white/15 bg-black/50 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2.5">
        <span className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-white/40">{t.erp.apiLabel}</span>
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-white"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="flex-1 overflow-hidden px-3 pt-3.5 pb-1 font-mono text-[9px] leading-[1.65] text-white/55">
        <span className="block whitespace-pre"><span className="font-medium text-white">POST</span>{' /api/sync HTTP/1.1'}</span>
        <span className="block whitespace-pre"><span>Host:</span>{' cave-geneve.ch'}</span>
        <span className="block whitespace-pre"><span>Authorization:</span>{' Bearer sk_live_***'}</span>
        <span className="block whitespace-pre"><span>Content-Type:</span>{' application/json'}</span>
        <span className="block whitespace-pre"><span>X-Webhook-Version:</span>{' '}<span className="text-white/80">2.1</span></span>
        <span className="block">&nbsp;</span>
        <span className="block">{'{'}</span>
        <span className="block whitespace-pre">{'  '}<span>"event"</span>{': '}<span className="text-white">"stock.updated"</span>,</span>
        <span className="block whitespace-pre">{'  '}<span>"timestamp"</span>{': '}<span className="text-white/70">"2024-01-15T14:32:11Z"</span>,</span>
        <span className="block whitespace-pre">{'  '}<span>"store_id"</span>{': '}<span className="text-white">"cave-geneve"</span>,</span>
        <span className="block whitespace-pre">{'  '}<span>"items"</span>{': ['}</span>
        <span className="block whitespace-pre">{'    {'}<span>"sku"</span>:<span className="text-white">"CM-2019"</span>,<span>"stock"</span>:<span className="text-white">24</span>,<span>"price"</span>:<span className="text-white">89</span>{'}'},{}</span>
        <span className="block whitespace-pre">{'    {'}<span>"sku"</span>:<span className="text-white">"CH-NV-12"</span>,<span>"stock"</span>:<span className="text-white">12</span>,<span>"price"</span>:<span className="text-white">65</span>{'}'},{}</span>
        <span className="block whitespace-pre">{'    {'}<span>"sku"</span>:<span className="text-white">"SB-2022"</span>,<span>"stock"</span>:<span className="text-white">18</span>,<span>"price"</span>:<span className="text-white">45</span>{'}'}</span>
        <span className="block whitespace-pre">{'  ],'}</span>
        <span className="block whitespace-pre">{'  '}<span>"currency"</span>{': '}<span className="text-white">"CHF"</span></span>
        <span className="block">{'}'}</span>
        <span className="mt-2 block border-t border-dashed border-white/15 pt-2 font-medium text-white">→ 200 OK · 9 produits · 98ms</span>
        <span className="block text-white/55">↓ mise à jour en temps réel</span>
      </div>
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

function ErpConnector({ label }: { label: string }) {
  return (
    <div
      aria-hidden
      className="flex w-full shrink-0 flex-col items-center justify-center gap-1.5 py-3 md:w-auto md:px-3 md:py-0"
    >
      <span className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-white/55">{label}</span>
      {/* horizontal — md+ */}
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

function FigureErp() {
  return (
    <div className="w-full text-white">
      <div className="w-full">
        <div className="flex flex-col">
          {/* Panels row */}
          <div className="flex flex-col items-stretch gap-4 md:flex-row">
            {/* Left panel — dark, no emojis */}
            <ErpPanel
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
              <div className="flex flex-1 flex-col">
                <ColHead cols={STOCK_COLS}>
                  <span>Produit</span>
                  <span>SKU</span>
                  <span>Stock</span>
                </ColHead>
                {ROWS.slice(0, 6).map((r) => (
                  <div key={r.sku} className={`${STOCK_COLS} py-[7px] text-[11px]`}>
                    <span className="whitespace-nowrap font-medium text-white">{r.name}</span>
                    <span className="whitespace-nowrap font-mono text-[11px] text-white/55">{r.sku}</span>
                    <span className={`whitespace-nowrap font-mono text-[11px] font-medium ${r.stock === 0 ? 'text-red-400' : 'text-white/90'}`}>{r.stock}</span>
                  </div>
                ))}
              </div>
            </ErpPanel>

            <ApiPanel />

            {/* Right panel — light/white, with emojis */}
            <ErpPanel light title="Site e-commerce" footer={<span>↻ Dernière sync : il y a 2s</span>}>
              <div className="flex flex-1 flex-col">
                <ColHead cols={SITE_COLS} light>
                  <span>Produit</span>
                  <span>Stock</span>
                  <span>Statut</span>
                </ColHead>
                {ROWS.slice(0, 6).map((r) => (
                  <div key={r.sku} className={`${SITE_COLS} py-[7px] text-[11px]`}>
                    <span className="flex items-center gap-1.5 whitespace-nowrap font-medium text-neutral-900">
                      <span aria-hidden>{r.emoji}</span>
                      <span>{r.name}</span>
                    </span>
                    <span className="whitespace-nowrap font-mono text-[11px] font-medium text-neutral-700">{r.stock}</span>
                    {r.stock === 0 ? (
                      <span className="inline-flex h-6 items-center justify-center whitespace-nowrap rounded-full bg-red-100 px-2.5 text-[10px] font-medium text-red-600">
                        Rupture
                      </span>
                    ) : (
                      <span className="inline-flex h-6 items-center justify-center whitespace-nowrap rounded-full bg-green-100 px-2.5 text-[10px] font-medium text-green-700">
                        Actif
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </ErpPanel>
          </div>

          {/* Arrow bar — desktop only, spans full width below the 3 panels */}
          <div aria-hidden className="relative mt-3 hidden h-8 md:block">
            {/* labels */}
            <span className="absolute left-0 top-0 font-mono text-[8px] uppercase tracking-[0.12em] text-white/35">Sync</span>
            <span className="absolute right-0 top-0 font-mono text-[8px] uppercase tracking-[0.12em] text-white/35">Push</span>
            {/* dashed line */}
            <div className="absolute inset-x-0 top-5 h-px border-t border-dashed border-white/20" />
            {/* arrowhead */}
            <span className="absolute right-[-4px] top-[13px] -translate-y-1/2 text-[11px] leading-none text-white/50">→</span>
            {/* animated dot */}
            <motion.span
              className="absolute top-5 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.85)]"
              initial={{ left: '0%', opacity: 0 }}
              animate={{ left: '100%', opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Figure 04 — SEO / AI visibility                                   */
/* ------------------------------------------------------------------ */

const CARD = 'rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_24px_48px_-16px_rgba(0,0,0,0.6)]';

const REDIRECTS = [
  ['/vins', '/boutique'],
  ['/catalogue', '/vins-rouges'],
  ['/promo', '/offres'],
  ['/contact', '/nous-trouver'],
];

function FigureSeo() {
  const t = strings[useLang()].servicesSection;
  return (
    <div className="relative flex w-full flex-col gap-4 md:block md:h-[40rem]">
      {/* Page Settings */}
      <div className={`${CARD} w-full p-5 md:absolute md:left-8 md:top-6 md:w-[19rem] md:-rotate-2`}>
        <h3 className="mb-3.5 text-sm font-semibold text-white">{t.seo.pageSettings}</h3>
        <p className="mb-1.5 text-[11px] text-white/55">{t.seo.labelTitle}</p>
        <div className="mb-3 truncate rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[11.5px] text-white">
          {t.seo.titleValue}
        </div>
        <p className="mb-1.5 text-[11px] text-white/55">{t.seo.labelDesc}</p>
        <div className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[11.5px] leading-relaxed text-white/90">
          {t.seo.descValue}
        </div>
      </div>

      {/* Redirects */}
      <div className={`${CARD} w-full p-[1.1rem] md:absolute md:left-24 md:top-60 md:w-[24rem] md:rotate-1`}>
        <h3 className="mb-3.5 text-sm font-semibold text-white">{t.seo.redirectsTitle}</h3>
        <div className="grid grid-cols-[1fr_1rem_1fr] gap-2.5 border-b border-white/10 px-1 pb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/40">
          <span>{t.seo.oldUrl}</span>
          <span />
          <span>{t.seo.newUrl}</span>
        </div>
        {REDIRECTS.map(([from, to]) => (
          <div
            key={from}
            className="grid grid-cols-[1fr_1rem_1fr] items-center gap-2.5 border-b border-white/10 px-1 py-[7px] font-mono text-[11.5px] text-white/90 last:border-b-0"
          >
            <span>{from}</span>
            <span className="text-center text-white/40">→</span>
            <span>{to}</span>
          </div>
        ))}
      </div>

      {/* AI visibility */}
      <div className={`${CARD} w-full border-white/20 p-[1.1rem] md:absolute md:right-8 md:top-16 md:w-[21rem] md:rotate-2`}>
        <h3 className="mb-3.5 text-sm font-semibold text-white">{t.seo.aiTitle}</h3>
        {t.seo.aiRows.map((r) => (
          <div
            key={r.name}
            className="flex items-center gap-2.5 border-b border-white/10 py-2.5 last:border-b-0"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.05] font-mono text-[10px] text-white">
              {r.name[0]}
            </span>
            <span className="w-16 shrink-0 text-[11.5px] font-medium text-white">{r.name}</span>
            <span className="flex-1 truncate text-[11px] italic text-white/55">{r.quote}</span>
            <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-white/15 text-[9px] text-white">
              ✓
            </span>
          </div>
        ))}
      </div>

      {/* Google Analytics */}
      <div className={`${CARD} w-full px-4 py-3.5 md:absolute md:bottom-10 md:right-16 md:w-[18rem] md:-rotate-1`}>
        <div className="mb-2 flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] font-mono text-[9px] font-semibold text-white">
            G
          </span>
          <span className="text-xs font-medium text-white">Google Analytics</span>
        </div>
        <div className="flex items-baseline gap-2 font-mono text-[10.5px] text-white/55">
          <span className="text-base font-semibold tracking-tight text-white">1 247</span>
          <span>{t.seo.sessions}</span>
          <span className="font-medium text-white">+34%</span>
        </div>
        <div className="mt-1.5 font-mono text-[10px] text-white/40">G-XXXXXXXXXX</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Stage                                                             */
/* ------------------------------------------------------------------ */

const FIGURES = [FigureSites, FigureCrm, FigureErp, FigureSeo];

function Stage({ active, tag }: { active: number; tag: string }) {
  const Figure = FIGURES[active];
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border md:rounded-3xl"
      style={{ background: '#080808', borderColor: 'rgba(255,255,255,0.1)' }}
    >
      {/* corner tag — desktop only */}
      <span className="pointer-events-none absolute right-5 top-5 z-10 hidden font-mono text-[10px] uppercase tracking-[0.16em] text-white/40 md:block">
        {tag}
      </span>

      {/*
       * Mobile: py-4 only (no horizontal padding, no min-h, no items-center).
       * overflow-x-hidden prevents any figure from causing horizontal scroll.
       * Desktop: md:p-8 overrides py-4, min-h-[44rem] + items-center restored.
       */}
      <div className="overflow-x-hidden py-4 md:flex md:min-h-[44rem] md:items-center md:p-8">
        {/*
         * Scale wrapper: shrinks content to 85 % on mobile so wide figures
         * (ERP panels, SEO cards) fit within ~390 px without horizontal scroll.
         * Non-motion div avoids framer-motion overriding the CSS transform.
         * md:scale-100 resets to 1 on desktop.
         */}
        <div className="w-full origin-top scale-[0.85] md:scale-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="w-full"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <Figure />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Tab rail                                                          */
/* ------------------------------------------------------------------ */

type TabData = { num: string; title: string; desc: string; tag: string };

function TabButton({
  tab,
  isActive,
  onSelect,
}: {
  tab: TabData;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onSelect}
      className="group relative rounded-2xl border p-6 text-left transition-colors duration-200"
      style={{
        background: isActive ? 'hsl(var(--bg-inverse))' : 'transparent',
        borderColor: isActive ? 'hsl(var(--bg-inverse))' : 'hsl(var(--border-subtle))',
      }}
    >
      <span
        className="mb-3.5 block font-mono text-[11px] tracking-[0.14em]"
        style={{ color: isActive ? 'hsl(var(--bg-primary) / 0.55)' : 'hsl(var(--text-tertiary))' }}
      >
        {tab.num}
      </span>
      <span
        className="mb-1.5 block text-[17px] font-semibold tracking-tight"
        style={{ color: isActive ? 'hsl(var(--bg-primary))' : 'hsl(var(--text-primary))' }}
      >
        {tab.title}
      </span>
      <span
        className="block text-[13.5px] leading-snug"
        style={{ color: isActive ? 'hsl(var(--bg-primary) / 0.7)' : 'hsl(var(--text-secondary))' }}
      >
        {tab.desc}
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                           */
/* ------------------------------------------------------------------ */

export default function ServicesSection() {
  const t = strings[useLang()].servicesSection;
  const tabs: TabData[] = t.tabs.map((tab, i) => ({
    num: String(i + 1).padStart(2, '0'),
    ...tab,
  }));

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number>(0);

  // auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % tabs.length), ROTATE_MS);
    return () => clearTimeout(id);
  }, [active, paused, tabs.length]);

  // pause when the document is hidden
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  return (
    <section
      className="w-full"
      style={{ background: 'hsl(var(--bg-primary))', color: 'hsl(var(--text-primary))' }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8 md:py-32">
        {/* Heading */}
        <div className="mb-16 flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            {t.eyebrow && (
              <p
                className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em]"
                style={{ color: 'hsl(var(--text-tertiary))' }}
              >
                {t.eyebrow}
              </p>
            )}
            <h2
              className="max-w-3xl text-pretty text-[clamp(2.25rem,5vw,3.25rem)] font-[650] leading-[1.05] tracking-tight"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.title}
            </h2>
          </div>
          <p
            className="max-w-sm text-[15px] leading-relaxed"
            style={{ color: 'hsl(var(--text-secondary))' }}
          >
            {t.intro}
          </p>
        </div>

        {/* Tabs + stage */}

        {/* Mobile carousel — visible below md */}
        <div
          className="md:hidden"
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(dx) > 40) {
              setActive((a) => dx < 0 ? (a + 1) % tabs.length : (a - 1 + tabs.length) % tabs.length);
            }
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              <span
                className="mb-2 block font-mono text-[11px] tracking-[0.14em]"
                style={{ color: 'hsl(var(--text-tertiary))' }}
              >
                {tabs[active].num}
              </span>
              <span
                className="mb-1 block text-[17px] font-semibold tracking-tight"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {tabs[active].title}
              </span>
              <span
                className="block text-[13.5px] leading-snug"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {tabs[active].desc}
              </span>
            </motion.div>
          </AnimatePresence>
          <Stage active={active} tag={tabs[active].tag} />
          <div className="mt-5 flex justify-center gap-2">
            {tabs.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Aller à l'onglet ${i + 1}`}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? '1.5rem' : '0.375rem',
                  height: '0.375rem',
                  background: i === active
                    ? 'hsl(var(--bg-inverse))'
                    : 'hsl(var(--border-subtle))',
                }}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid — visible from md */}
        <div className="hidden gap-8 md:grid md:grid-cols-3">
          <div className="relative md:col-span-1">
            {/* Vertical progress bar — 2px left edge */}
            <div
              className="absolute left-0 top-0 hidden h-full w-0.5 overflow-hidden rounded-full md:block"
              style={{ background: 'hsl(var(--bg-inverse) / 0.1)' }}
            >
              <motion.span
                key={`vbar-${active}-${paused}`}
                className="absolute inset-x-0 top-0 block w-full origin-top"
                style={{ background: 'hsl(var(--bg-inverse))', height: '100%' }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: paused ? 0 : 1 }}
                transition={{ duration: paused ? 0 : ROTATE_MS / 1000, ease: 'linear' }}
              />
            </div>
            <div role="tablist" className="flex flex-col gap-2 pl-4">
              {tabs.map((tab, i) => (
                <TabButton
                  key={tab.num}
                  tab={tab}
                  isActive={i === active}
                  onSelect={() => setActive(i)}
                />
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <Stage active={active} tag={tabs[active].tag} />
          </div>
        </div>
      </div>
    </section>
  );
}
