'use client'

/**
 * /tanklogic — product page (Linear-style chapters)
 * ─────────────────────────────────────────────────────────────
 * Hero → serialized inventory (WYSIWYG) → stock ↔ online-store
 * sync → mortality & DOA (heaviest section, two visuals) →
 * orders → analytics → FAQ (accordions, mirrored in the FAQPage
 * JSON-LD rendered from page.tsx) → CTA.
 *
 * Narrative copy lives in lib/strings.ts; mock-UI chrome labels
 * and fictional reef data live in ./_mocks.tsx.
 */

import Link from 'next/link'
import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'
import { useScrollReveal } from '@/lib/use-scroll-reveal'
import { WaveBackground } from '@/components/ui/wave-background'
import {
  Reveal,
  HeroInventoryMock,
  SpecimenCardMock,
  SyncMock,
  MortalityMock,
  TraceMock,
  OrdersMock,
  AnalyticsMock,
} from './_mocks'

export function TankLogicContent() {
  const lang = useLang()
  const t = strings[lang].tanklogic
  useScrollReveal()

  return (
    <>
      <NavPill />

      <main className="relative z-10 overflow-clip rounded-b-32 bg-bg-primary">

        {/* ── HERO ── */}
        <section
          className="relative overflow-hidden pb-16 pt-28 min-720:pb-20 min-720:pt-36"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <WaveBackground />
          <div className="relative z-10 mx-auto max-w-5xl px-5">
            <div className="text-center">
              <p className="fade-up section-label">{t.eyebrow}</p>
              <p
                className="fade-up fade-up-d1 mb-4 text-headline font-semibold tracking-tight"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.wordmark}
              </p>
              <h1
                className="fade-up fade-up-d1 mx-auto mb-5 max-w-4xl text-title-1 font-semibold tracking-tight"
                style={{ color: 'hsl(var(--text-primary))', letterSpacing: '-0.03em' }}
              >
                {t.heroTitle}
              </h1>
              <p
                className="fade-up fade-up-d2 mx-auto mb-8 max-w-xl text-body-lg leading-relaxed"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.heroSub}
              </p>
              <div className="fade-up fade-up-d3 flex justify-center">
                <Link
                  href="/contact?service=tanklogic"
                  className="btn-liquid-glass inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white"
                >
                  {t.heroCta} →
                </Link>
              </div>
            </div>

            {/* Hero product visual */}
            <div className="mt-12 min-720:mt-16">
              <HeroInventoryMock />
            </div>
          </div>
        </section>

        {/* ── HYBRID INVENTORY (unique piece + SKU/quantity) ── */}
        <section className="px-5 py-20 min-720:py-28">
          <div className="mx-auto grid max-w-5xl gap-12 min-720:grid-cols-2 min-720:gap-16">
            {/* Unique piece */}
            <div className="flex flex-col">
              <h2
                className="fade-up mb-5 text-title-2 font-semibold tracking-tight"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {t.serialTitle}
              </h2>
              {t.serialBody.map((para, i) => (
                <p
                  key={i}
                  className="fade-up mb-4 max-w-lg text-body leading-relaxed last:mb-0"
                  style={{ color: 'hsl(var(--text-secondary))' }}
                >
                  {para}
                </p>
              ))}
              <Reveal className="mt-8 min-720:mt-auto min-720:pt-8">
                <div className="mx-auto w-full max-w-sm">
                  <SpecimenCardMock variant="unique" />
                </div>
              </Reveal>
            </div>

            {/* SKU + quantity */}
            <div className="flex flex-col">
              <h2
                className="fade-up mb-5 text-title-2 font-semibold tracking-tight"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {t.batchTitle}
              </h2>
              <p
                className="fade-up mb-4 max-w-lg text-body leading-relaxed last:mb-0"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.batchBody}
              </p>
              <Reveal className="mt-8 min-720:mt-auto min-720:pt-8" delay={0.12}>
                <div className="mx-auto w-full max-w-sm">
                  <SpecimenCardMock variant="sku" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── STOCK ↔ ONLINE STORE SYNC ── */}
        <section
          className="px-5 py-20 min-720:py-28"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 max-w-2xl min-720:mb-14">
              <h2
                className="fade-up mb-5 text-title-2 font-semibold tracking-tight"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {t.syncTitle}
              </h2>
              {t.syncBody.map((para, i) => (
                <p
                  key={i}
                  className="fade-up mb-4 text-body leading-relaxed last:mb-0"
                  style={{ color: 'hsl(var(--text-secondary))' }}
                >
                  {para}
                </p>
              ))}
            </div>
            <Reveal>
              <SyncMock />
            </Reveal>
          </div>
        </section>

        {/* ── MORTALITY & DOA — heaviest chapter ── */}
        <section className="px-5 py-24 min-720:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 max-w-2xl min-720:mb-16">
              <h2
                className="fade-up mb-5 text-title-2 font-semibold tracking-tight"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {t.mortalityTitle}
              </h2>
              <p
                className="fade-up text-body-lg leading-relaxed"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.mortalityIntro}
              </p>
            </div>

            <div className="grid gap-12 min-720:grid-cols-2 min-720:gap-10">
              {/* (a) One-click mortality */}
              <div className="flex flex-col">
                <h3
                  className="fade-up mb-2.5 text-headline font-semibold"
                  style={{ color: 'hsl(var(--text-primary))' }}
                >
                  {t.mortalityClickTitle}
                </h3>
                <p
                  className="fade-up mb-6 max-w-md text-body leading-relaxed"
                  style={{ color: 'hsl(var(--text-secondary))' }}
                >
                  {t.mortalityClickBody}
                </p>
                <Reveal className="mt-auto">
                  <MortalityMock />
                </Reveal>
              </div>

              {/* (b) Per-specimen traceability */}
              <div className="flex flex-col">
                <h3
                  className="fade-up mb-2.5 text-headline font-semibold"
                  style={{ color: 'hsl(var(--text-primary))' }}
                >
                  {t.traceTitle}
                </h3>
                <p
                  className="fade-up mb-6 max-w-md text-body leading-relaxed"
                  style={{ color: 'hsl(var(--text-secondary))' }}
                >
                  {t.traceBody}
                </p>
                <Reveal className="mt-auto" delay={0.12}>
                  <TraceMock />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── ORDERS ── */}
        <section
          className="px-5 py-20 min-720:py-28"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <div className="mx-auto grid max-w-5xl items-center gap-10 min-720:grid-cols-[1fr_1.1fr] min-720:gap-16">
            <Reveal className="order-2 min-720:order-1">
              <OrdersMock />
            </Reveal>
            <div className="order-1 min-720:order-2">
              <h2
                className="fade-up mb-5 text-title-2 font-semibold tracking-tight"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {t.ordersTitle}
              </h2>
              {t.ordersBody.map((para, i) => (
                <p
                  key={i}
                  className="fade-up mb-4 max-w-lg text-body leading-relaxed last:mb-0"
                  style={{ color: 'hsl(var(--text-secondary))' }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── ANALYTICS ── */}
        <section className="px-5 py-20 min-720:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 max-w-2xl min-720:mb-14">
              <h2
                className="fade-up mb-5 text-title-2 font-semibold tracking-tight"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {t.analyticsTitle}
              </h2>
              {t.analyticsBody.map((para, i) => (
                <p
                  key={i}
                  className="fade-up mb-4 text-body leading-relaxed last:mb-0"
                  style={{ color: 'hsl(var(--text-secondary))' }}
                >
                  {para}
                </p>
              ))}
            </div>
            <Reveal>
              <AnalyticsMock />
            </Reveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          className="px-5 py-20 min-720:py-28"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <div className="mx-auto max-w-3xl">
            <h2
              className="fade-up mb-8 text-title-2 font-semibold tracking-tight min-720:mb-10"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.faqTitle}
            </h2>
            <div
              className="fade-up overflow-hidden rounded-2xl"
              style={{
                background: 'hsl(var(--bg-primary))',
                border: '1px solid hsl(var(--border-subtle))',
              }}
            >
              {t.faq.map((item, i) => (
                <details
                  key={i}
                  className="group"
                  style={{
                    borderTop: i === 0 ? 'none' : '1px solid hsl(var(--border-subtle))',
                  }}
                >
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 px-5 py-4 min-720:px-7 min-720:py-5 [&::-webkit-details-marker]:hidden">
                    <h3
                      className="text-body font-semibold leading-snug"
                      style={{ color: 'hsl(var(--text-primary))' }}
                    >
                      {item.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 self-center text-lg font-light leading-none transition-transform duration-200 ease-out group-open:rotate-45"
                      style={{ color: 'hsl(var(--text-tertiary))' }}
                    >
                      +
                    </span>
                  </summary>
                  <p
                    className="px-5 pb-5 text-body leading-relaxed min-720:px-7 min-720:pb-6"
                    style={{ color: 'hsl(var(--text-secondary))' }}
                  >
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-5 pb-20 pt-16 min-720:pb-24 min-720:pt-20">
          <div className="mx-auto max-w-5xl">
            <div className="cta-card fade-up p-10 text-center min-720:p-16">
              <h2 className="mb-4 text-title-2 font-semibold tracking-tight" style={{ color: '#ffffff' }}>
                {t.ctaTitle}
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-body-lg" style={{ color: 'rgba(255,255,255,0.72)' }}>
                {t.ctaSub}
              </p>
              <Link
                href="/contact?service=tanklogic"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity duration-150 hover:opacity-80"
                style={{ background: '#ffffff', color: '#0a0a0a' }}
              >
                {t.ctaButton} →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
