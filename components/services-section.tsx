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
import { useLang } from '@/components/app-provider';
import { strings } from '@/lib/strings';

const IMG = '/services';
const ROTATE_MS = 5000;

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
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        {file ? (
          <span className="ml-2 font-mono text-[10.5px] tracking-wide text-white/55">{file}</span>
        ) : null}
      </div>
      <div className={`relative min-h-0 flex-1 overflow-hidden bg-black/40 ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
}

const SHOT = 'block w-full grayscale';

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
  { emoji: '🍷', name: 'Saint-Émilion', sku: 'SE-2020', category: 'Vin', stock: 9, price: '95€' },
  { emoji: '🍷', name: 'Pouilly-Fumé', sku: 'PF-2022', category: 'Vin', stock: 27, price: '38€' },
  { emoji: '🥂', name: 'Champagne Rosé', sku: 'CR-NV-08', category: 'Champagne', stock: 15, price: '78€' },
  { emoji: '🍷', name: 'Chablis 1er Cru', sku: 'CB-2021', category: 'Vin', stock: 21, price: '52€' },
];

const STOCK_COLS = 'grid grid-cols-[1.5fr_0.8fr_0.45fr_0.6fr] items-center gap-1.5 px-3';
const SITE_COLS = 'grid grid-cols-[1.35fr_0.9fr_0.4fr_0.8fr] items-center gap-1.5 px-3';

function ErpPanel({
  title,
  elevated = false,
  children,
  footer,
}: {
  title: string;
  elevated?: boolean;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
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

function ColHead({ cols, children }: { cols: string; children: React.ReactNode }) {
  return (
    <div className={`${cols} border-b border-white/10 py-2 font-mono text-[8.5px] uppercase tracking-[0.1em] text-white/40`}>
      {children}
    </div>
  );
}

function ApiPanel() {
  const t = strings[useLang()].servicesSection;
  return (
    <div className="flex w-full flex-1 flex-col overflow-hidden rounded-xl border border-white/15 bg-black/50 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2.5">
        <span className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-white/40">{t.erp.apiLabel}</span>
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
<span className="mt-2.5 block border-t border-dashed border-white/15 pt-2 font-medium text-white">→ 200 OK <span className="font-normal text-white/55">{t.erp.apiResult}</span></span></pre>
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
  const t = strings[useLang()].servicesSection;
  const catLabel = (c: Category) => (c === 'Vin' ? t.erp.catWine : t.erp.catChampagne);
  return (
    <div className="flex w-full flex-col items-stretch md:flex-row">
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
            <span>{t.erp.colPrice}</span>
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
      </ErpPanel>

      <ErpConnector label={t.erp.connectorSync} />
      <ApiPanel />
      <ErpConnector label={t.erp.connectorPush} />

      <ErpPanel elevated title={t.erp.siteTitle} footer={<span>{t.erp.siteFooter}</span>}>
        <div className="flex flex-1 flex-col">
          <ColHead cols={SITE_COLS}>
            <span>{t.erp.colProduct}</span>
            <span>{t.erp.colCategory}</span>
            <span>{t.erp.colStock}</span>
            <span>{t.erp.colStatus}</span>
          </ColHead>
          {ROWS.map((r) => (
            <div key={r.sku} className={`${SITE_COLS} py-[7px] text-[11px]`}>
              <span className="flex items-center gap-1.5 truncate font-medium text-white">
                <span aria-hidden>{r.emoji}</span>
                <span className="truncate">{r.name}</span>
              </span>
              <span className="font-mono text-[8.5px] uppercase tracking-[0.04em] text-white/55">{catLabel(r.category)}</span>
              <span className="font-mono text-[10.5px] font-medium text-white/90">{r.stock}</span>
              <span className="inline-flex items-center gap-1.5 text-[10px] text-white/90">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-white" />
                {t.erp.statusActive}
              </span>
            </div>
          ))}
        </div>
      </ErpPanel>
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
      className="relative w-full overflow-hidden rounded-3xl border"
      style={{ background: '#080808', borderColor: 'rgba(255,255,255,0.1)' }}
    >
      {/* contextual corner tag */}
      <span className="pointer-events-none absolute right-5 top-5 z-10 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
        {tag}
      </span>

      <div className="flex min-h-[32rem] items-center p-7 md:min-h-[44rem] md:p-8">
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
  paused,
  onSelect,
}: {
  tab: TabData;
  isActive: boolean;
  paused: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onSelect}
      className="group relative overflow-hidden rounded-2xl border p-6 text-left transition-colors duration-200"
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

      {/* progress bar (active only) */}
      {isActive ? (
        <span
          className="absolute inset-x-0 bottom-0 block h-0.5 overflow-hidden"
          style={{ background: 'hsl(var(--bg-primary) / 0.15)' }}
        >
          <motion.span
            key={`${tab.num}-${paused}`}
            className="block h-full origin-left"
            style={{ background: 'hsl(var(--bg-primary))' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: paused ? 0 : 1 }}
            transition={{ duration: paused ? 0 : ROTATE_MS / 1000, ease: 'linear' }}
          />
        </span>
      ) : null}
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
            <p
              className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em]"
              style={{ color: 'hsl(var(--text-tertiary))' }}
            >
              {t.eyebrow}
            </p>
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
        <div className="grid gap-8 md:grid-cols-3">
          <div role="tablist" className="flex flex-col gap-2 md:col-span-1">
            {tabs.map((tab, i) => (
              <TabButton
                key={tab.num}
                tab={tab}
                isActive={i === active}
                paused={paused}
                onSelect={() => setActive(i)}
              />
            ))}
          </div>

          <div className="md:col-span-2">
            <Stage active={active} tag={tabs[active].tag} />
          </div>
        </div>
      </div>
    </section>
  );
}
