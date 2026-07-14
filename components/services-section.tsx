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

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLang } from '@/components/app-provider';
import { strings } from '@/lib/strings';

const IMG = '/images';
const ROTATE_MS = 7000;

/* Mobile preview images for the vertical stack (services 01-03). */
const MOBILE_PREVIEWS = [
  '/images/preview-site-jetski-arcachon.png',
  '/images/preview-crm-logiciel.png',
  '/images/preview-erp-site-ecommerce.png',
];

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
    <>
      <img
        src="/images/preview-site-jetski-arcachon.png"
        alt="Aperçu du site jetski-arcachon.fr"
        className="w-full rounded-2xl md:hidden"
      />
      <div className="relative hidden w-full px-2 md:block md:px-0">
        <WindowFrame className="w-full" bodyClassName="aspect-[16/10]">
          <img
            src={`${IMG}/jetski-site-v2.png`}
            alt={t.alts.site}
            className={`${SHOT} h-full object-cover object-top`}
          />
        </WindowFrame>
        {/* code overlay — desktop only, too small to read on mobile */}
        <WindowFrame
          file="index.html"
          className="absolute left-4 top-8 hidden w-2/5 max-w-[15rem] md:block md:left-10 md:top-12"
        >
          <img src={`${IMG}/jetski-code-v2.png`} alt={t.alts.code} className={`${SHOT} h-auto`} />
        </WindowFrame>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Figure 02 — Workflows métier                                      */
/* ------------------------------------------------------------------ */

function FigureCrm() {
  return (
    <>
      <img
        src="/images/preview-crm-logiciel.png"
        alt="Aperçu CRM logiciel de gestion"
        className="w-full rounded-2xl md:hidden"
      />
      {/* Desktop — static SVG mockup (replaces the former live HTML iframe preview) */}
      <div className="hidden md:block w-full">
        <figure className="blog-figure">
          <Image
            src="/images/crm-calendar-mockup.svg"
            alt="Calendrier CRM personnalisé : gestion de réservations de cours avec avancement en temps réel"
            width={800}
            height={600}
            sizes="(max-width: 1024px) 90vw, 736px"
            unoptimized
            loading="lazy"
            priority={false}
          />
        </figure>
      </div>
    </>
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

// 3 representative rows for the mobile cascade (CM-2019, CH-NV-12, SE-2020)
const ERP_MOBILE_ROWS: Row[] = [ROWS[0], ROWS[1], ROWS[5]];

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
        <span className="block whitespace-pre">{'  '}<span>"currency"</span>{': '}<span className="text-white">{`"${t.erp.apiCurrency}"`}</span></span>
        <span className="block">{'}'}</span>
        <span className="mt-2 block border-t border-dashed border-white/15 pt-2 font-medium text-white">→ 200 OK {t.erp.apiResult}</span>
        <span className="block text-white/55">{t.erp.apiUpdate}</span>
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
      {/* horizontal — md+ : CSS animation (transform only, §6.A) */}
      <div className="relative hidden h-px w-16 bg-white/15 md:block overflow-hidden">
        <span className="conn-dot-h" aria-hidden />
        <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-[11px] leading-none text-white/70">→</span>
      </div>
      {/* vertical — mobile : CSS animation (transform only, §6.A) */}
      <div className="relative h-8 w-px bg-white/15 md:hidden overflow-hidden">
        <span className="conn-dot-v" aria-hidden />
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[11px] leading-none text-white/70">↓</span>
      </div>
    </div>
  );
}

function FigureErp() {
  const lang = useLang()
  const t = strings[lang].servicesSection
  return (
    <>
      <img
        src="/images/preview-erp-site-ecommerce.png"
        alt="Aperçu synchronisation ERP et site e-commerce"
        className="w-full rounded-2xl md:hidden"
      />

      {/* Desktop — 3-column horizontal layout */}
      <div className="hidden w-full text-white md:block">
        <div className="flex flex-col">
          <div className="flex items-stretch gap-4">
            {/* Left panel */}
            <ErpPanel
              title={t.erp.stockTitle}
              footer={
                <>
                  <motion.span
                    className="inline-block h-1.5 w-1.5 rounded-full bg-white"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <span>{t.erp.stockFooter}</span>
                </>
              }
            >
              <div className="flex flex-1 flex-col">
                <ColHead cols={STOCK_COLS}>
                  <span>{t.erp.colProduct}</span>
                  <span>{t.erp.colSku}</span>
                  <span>{t.erp.colStock}</span>
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

            {/* Right panel */}
            <ErpPanel light title={t.erp.siteTitle} footer={<span>{t.erp.siteFooter}</span>}>
              <div className="flex flex-1 flex-col">
                <ColHead cols={SITE_COLS} light>
                  <span>{t.erp.colProduct}</span>
                  <span>{t.erp.colStock}</span>
                  <span>{t.erp.colStatus}</span>
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
                        {t.erp.statusRupture}
                      </span>
                    ) : (
                      <span className="inline-flex h-6 items-center justify-center whitespace-nowrap rounded-full bg-green-100 px-2.5 text-[10px] font-medium text-green-700">
                        {t.erp.statusActive}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </ErpPanel>
          </div>

          {/* Arrow bar — CSS animation (transform only, §6.A) */}
          <div aria-hidden className="relative mt-3 h-8 overflow-hidden">
            <span className="absolute left-0 top-0 font-mono text-[8px] uppercase tracking-[0.12em] text-white/35">Sync</span>
            <span className="absolute right-0 top-0 font-mono text-[8px] uppercase tracking-[0.12em] text-white/35">Push</span>
            <div className="absolute inset-x-0 top-5 h-px border-t border-dashed border-white/20" />
            <span className="absolute right-[-4px] top-[13px] -translate-y-1/2 text-[11px] leading-none text-white/50" style={{ zIndex: 1 }}>→</span>
            <span className="conn-dot-bar" style={{ top: '1.25rem' }} aria-hidden />
          </div>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Stage                                                             */
/* ------------------------------------------------------------------ */

const FIGURES = [FigureSites, FigureCrm, FigureErp];

function Stage({ active, tag }: { active: number; tag: string }) {
  const Figure = FIGURES[active];
  return (
    <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl md:border md:border-white/10 md:bg-[#080808]">
      {/* corner tag — desktop only */}
      <span className="pointer-events-none absolute right-5 top-5 z-10 hidden font-mono text-[10px] uppercase tracking-[0.16em] text-white/40 md:block">
        {tag}
      </span>

      {/* Mobile: no bg, no padding, image fills full width.
          Desktop: dark stage with min-h + padding restored via md: classes. */}
      <div className="overflow-x-hidden md:flex md:min-h-[44rem] md:items-center md:p-8">
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
      className="group relative flex-1 rounded-2xl border p-6 text-left transition-colors duration-200"
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

  // auto-advance (desktop tab rail; mobile uses a vertical stack instead)
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
        <motion.div
          className="mb-16 flex flex-col justify-between gap-10 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div>
            {t.eyebrow && (
              <motion.p
                className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em]"
                style={{ color: 'hsl(var(--text-tertiary))' }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0.6, ease: 'easeOut' }}
              >
                {t.eyebrow}
              </motion.p>
            )}
            <motion.h2
              className="max-w-3xl text-pretty text-[clamp(2.25rem,5vw,3.25rem)] font-[650] leading-[1.05] tracking-tight"
              style={{ color: 'hsl(var(--text-primary))' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
            >
              {t.title}
            </motion.h2>
          </div>
        </motion.div>

        {/* Tabs + stage */}

        {/* Mobile stack — visible below md (vertical scroll, no carousel) */}
        <div className="md:hidden flex flex-col">
          {tabs.map((tab, i) => (
            <div
              key={tab.num}
              className="py-10 border-b last:border-b-0"
              style={{ borderColor: 'hsl(var(--border-subtle))' }}
            >
              <p
                className="mb-2 font-mono text-[11px] tracking-[0.14em] uppercase"
                style={{ color: 'hsl(var(--text-tertiary))' }}
              >
                {tab.num}
              </p>
              <h3
                className="mb-3 text-2xl font-bold tracking-tight"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {tab.title}
              </h3>
              <p
                className="mb-6 text-sm leading-relaxed"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {tab.desc}
              </p>
              <div className="relative left-1/2 -translate-x-1/2 w-screen">
                <div className="mx-auto w-[90vw] overflow-hidden rounded-xl">
                  <img
                    src={MOBILE_PREVIEWS[i]}
                    alt={tab.title}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          ))}
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
            <div role="tablist" className="flex h-full flex-col gap-3 pl-4">
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
