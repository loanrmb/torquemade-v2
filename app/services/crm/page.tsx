'use client'

import Link from 'next/link'
import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'
import { useScrollReveal } from '@/lib/use-scroll-reveal'
import { posts } from '@/lib/blog'
import { ShaderBackground } from '@/components/ui/shader-background'
import { WaveBackground } from '@/components/ui/wave-background'
import { HeroHeading } from '@/components/ui/hero-heading'
import {
  CostCurveIllustration,
  OwnershipIllustration,
  BuildFlowDiagram,
} from '@/components/ui/crm-illustrations'

const RELATED_CATEGORY = 'crm'

const relatedPosts = posts
  .filter((post) => post.category === RELATED_CATEGORY)
  .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
  .slice(0, 3)

export default function CrmPage() {
  const lang = useLang()
  const t = strings[lang].crm
  useScrollReveal()

  return (
    <>
      <NavPill />

      <main className="relative z-10 overflow-clip rounded-b-32 bg-bg-primary">

        {/* HERO */}
        <section
          className="relative overflow-hidden pb-16 pt-28 min-720:pt-36"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <WaveBackground />
          <div className="perspective-grid-wrap" aria-hidden="true">
            <div className="perspective-grid" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
            <p className="fade-up section-label">{t.eyebrow}</p>
            <HeroHeading
              className="text-title-1 font-semibold tracking-tight mb-5"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.hero}
            </HeroHeading>
            <p
              className="fade-up fade-up-d2 text-body-lg max-w-2xl mx-auto"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {t.intro}
            </p>
          </div>
        </section>

        {/* COMPARISON: subscription vs custom build */}
        <section className="px-5 py-20 min-720:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2
                className="fade-up text-title-2 font-semibold tracking-tight mb-4"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {t.compareTitle}
              </h2>
              <p
                className="fade-up fade-up-d1 text-body-lg leading-relaxed"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.compareIntro}
              </p>
            </div>

            {/* split ledger */}
            <div
              className="fade-up overflow-hidden rounded-2xl"
              style={{
                background: 'hsl(var(--bg-secondary))',
                border: '1px solid hsl(var(--border-subtle))',
              }}
            >
              {/* column headers (desktop) */}
              <div
                className="hidden min-720:grid grid-cols-[0.9fr_1.35fr_1.35fr]"
                style={{ borderBottom: '1px solid hsl(var(--border-subtle))' }}
              >
                <div aria-hidden="true" className="px-6 py-4" />
                <div
                  className="px-6 py-4 text-caption font-semibold uppercase tracking-widest"
                  style={{
                    color: 'hsl(var(--text-tertiary))',
                    borderLeft: '1px solid hsl(var(--border-subtle))',
                  }}
                >
                  {t.compareColGeneric}
                </div>
                <div
                  className="px-6 py-4 text-caption font-semibold uppercase tracking-widest"
                  style={{
                    color: 'hsl(var(--text-primary))',
                    borderLeft: '1px solid hsl(var(--border-subtle))',
                  }}
                >
                  {t.compareColCustom}
                </div>
              </div>

              {t.compareRows.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 min-720:grid-cols-[0.9fr_1.35fr_1.35fr]"
                  style={{ borderTop: i > 0 ? '1px solid hsl(var(--border-subtle))' : 'none' }}
                >
                  <div
                    className="px-6 pt-6 pb-2 min-720:py-6 text-sm font-semibold"
                    style={{ color: 'hsl(var(--text-primary))' }}
                  >
                    {row.aspect}
                  </div>
                  <div
                    className="px-6 pb-4 pt-1 min-720:py-6 text-sm leading-relaxed"
                    style={{
                      color: 'hsl(var(--text-secondary))',
                      borderLeft: '1px solid hsl(var(--border-subtle))',
                    }}
                  >
                    <span
                      className="mb-1 block text-caption font-semibold uppercase tracking-widest min-720:hidden"
                      style={{ color: 'hsl(var(--text-tertiary))' }}
                    >
                      {t.compareColGeneric}
                    </span>
                    {row.generic}
                  </div>
                  <div
                    className="px-6 pb-6 pt-1 min-720:py-6 text-sm leading-relaxed"
                    style={{
                      color: 'hsl(var(--text-primary))',
                      borderLeft: '1px solid hsl(var(--border-subtle))',
                    }}
                  >
                    <span
                      className="mb-1 block text-caption font-semibold uppercase tracking-widest min-720:hidden"
                      style={{ color: 'hsl(var(--text-tertiary))' }}
                    >
                      {t.compareColCustom}
                    </span>
                    {row.custom}
                  </div>
                </div>
              ))}
            </div>

            {/* cost curve + five-year math */}
            <div className="mt-4 grid grid-cols-1 gap-4 min-1024:grid-cols-[1.2fr_1fr]">
              <div
                className="fade-up flex flex-col justify-center rounded-2xl p-8 min-720:p-10"
                style={{
                  background: 'hsl(var(--bg-secondary))',
                  border: '1px solid hsl(var(--border-subtle))',
                }}
              >
                <CostCurveIllustration />
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  <span className="flex items-center gap-2 text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                    <span aria-hidden="true" className="inline-block h-[2px] w-6 rounded" style={{ background: 'hsl(var(--text-primary))' }} />
                    {t.compareColGeneric}
                  </span>
                  <span className="flex items-center gap-2 text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                    <span aria-hidden="true" className="inline-block w-6" style={{ borderTop: '2px dashed hsl(var(--text-primary))', opacity: 0.6 }} />
                    {t.compareColCustom}
                  </span>
                </div>
              </div>

              <div
                className="fade-up fade-up-d1 flex flex-col justify-center rounded-2xl p-8 min-720:p-10"
                style={{
                  background: 'hsl(var(--text-primary))',
                }}
              >
                <span
                  className="mb-3 text-caption font-semibold uppercase tracking-widest"
                  style={{ color: 'hsl(var(--bg-primary))', opacity: 0.55 }}
                >
                  {t.compareCalcLabel}
                </span>
                <p
                  className="text-body-lg font-medium leading-relaxed"
                  style={{ color: 'hsl(var(--bg-primary))' }}
                >
                  {t.compareCalc}
                </p>
              </div>
            </div>

            {/* ownership */}
            <div className="mt-4 grid grid-cols-1 items-center gap-8 rounded-2xl p-8 min-720:p-12 min-1024:grid-cols-2 min-1024:gap-12 fade-up"
              style={{
                background: 'hsl(var(--bg-secondary))',
                border: '1px solid hsl(var(--border-subtle))',
              }}
            >
              <div>
                <h3
                  className="text-headline font-semibold mb-4"
                  style={{ color: 'hsl(var(--text-primary))' }}
                >
                  {t.compareOwnTitle}
                </h3>
                <p
                  className="text-body leading-relaxed"
                  style={{ color: 'hsl(var(--text-secondary))' }}
                >
                  {t.compareOwnBody}
                </p>
              </div>
              <div className="mx-auto w-full max-w-md">
                <OwnershipIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT'S BUILT */}
        <section
          className="px-5 py-20 min-720:py-24"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2
                className="fade-up text-title-2 font-semibold tracking-tight mb-4"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {t.buildTitle}
              </h2>
              <p
                className="fade-up fade-up-d1 text-body-lg leading-relaxed"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.buildIntro}
              </p>
            </div>

            <div className="fade-up mb-14 hidden min-720:block">
              <BuildFlowDiagram />
            </div>

            {/* vertical phase timeline */}
            <ol className="relative mx-auto max-w-3xl">
              {t.buildPhases.map((phase, i) => (
                <li key={phase.num} className="fade-up relative grid grid-cols-[auto_1fr] gap-5 min-720:gap-8 pb-10 last:pb-0">
                  {/* rail */}
                  <div className="relative flex flex-col items-center">
                    <span
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                      style={{
                        background: 'hsl(var(--bg-primary))',
                        border: '1px solid hsl(var(--border-subtle))',
                        color: 'hsl(var(--text-primary))',
                      }}
                    >
                      {phase.num}
                    </span>
                    {i < t.buildPhases.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="mt-2 w-px flex-1"
                        style={{ background: 'hsl(var(--border-subtle))' }}
                      />
                    )}
                  </div>
                  {/* content */}
                  <div className="pb-1">
                    <span
                      className="mb-2 block text-caption font-semibold uppercase tracking-widest"
                      style={{ color: 'hsl(var(--text-tertiary))' }}
                    >
                      {phase.name}
                    </span>
                    <h3
                      className="text-headline font-semibold mb-3"
                      style={{ color: 'hsl(var(--text-primary))' }}
                    >
                      {phase.title}
                    </h3>
                    <p
                      className="text-body leading-relaxed"
                      style={{ color: 'hsl(var(--text-secondary))' }}
                    >
                      {phase.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* RELATED ARTICLES */}
        {relatedPosts.length > 0 && (
          <section className="px-5 py-20 min-720:py-24">
            <div className="mx-auto max-w-5xl">
              <h2
                className="fade-up text-title-2 font-semibold tracking-tight mb-10 text-center"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {t.relatedTitle}
              </h2>
              <div className="grid grid-cols-1 min-720:grid-cols-3 gap-4">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="fade-up group p-6 rounded-2xl flex flex-col gap-3"
                    style={{
                      background: 'hsl(var(--bg-secondary))',
                      border: '1px solid hsl(var(--border-subtle))',
                    }}
                  >
                    <span
                      className="text-caption font-semibold tracking-widest uppercase"
                      style={{ color: 'hsl(var(--text-tertiary))' }}
                    >
                      {post.date[lang]}
                    </span>
                    <h3
                      className="text-body font-semibold leading-snug"
                      style={{ color: 'hsl(var(--text-primary))' }}
                    >
                      {post.title[lang]}
                    </h3>
                    <span
                      className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold transition-opacity duration-150 group-hover:opacity-70"
                      style={{
                        border: '1px solid hsl(var(--border-subtle))',
                        color: 'hsl(var(--text-primary))',
                      }}
                    >
                      {t.relatedCta} →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section
          className="px-5 py-20 min-720:py-24"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <div className="mx-auto max-w-3xl">
            <h2
              className="fade-up mb-8 text-title-2 font-semibold tracking-tight min-720:mb-10 text-center"
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
                  style={{ borderTop: i === 0 ? 'none' : '1px solid hsl(var(--border-subtle))' }}
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

        {/* CTA */}
        <section className="px-5 pb-20 pt-16 min-720:pb-24 min-720:pt-20">
          <div className="mx-auto max-w-5xl">
            <div className="cta-card p-10 min-720:p-16 text-center fade-up">
              <ShaderBackground className="absolute inset-0 z-0" />
              <div className="cta-scrim" />
              <div className="relative z-10">
                <h2 className="text-title-2 font-semibold tracking-tight mb-4" style={{ color: '#ffffff' }}>
                  {t.ctaTitle}
                </h2>
                <p className="text-body-lg mb-8 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.72)' }}>
                  {t.ctaSub}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity duration-150 hover:opacity-80"
                  style={{ background: '#ffffff', color: '#0a0a0a' }}
                >
                  {t.ctaButton}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
