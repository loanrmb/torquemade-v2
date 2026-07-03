'use client'

import Link from 'next/link'
import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'
import { strings } from '@/lib/strings'
import { useScrollReveal } from '@/lib/use-scroll-reveal'

// English-primary market page: content is pinned to the EN strings regardless of
// the global FR/EN toggle, so the statically rendered HTML Googlebot sees matches
// the page's en_CA metadata/canonical. The shared nav/footer still follow the
// global toggle by design.
export default function AquariumErpSyncEnPage() {
  const t = strings.en.aquariumEn
  useScrollReveal()

  return (
    <>
      <NavPill />

      <main className="relative z-10 overflow-clip rounded-b-32 bg-bg-primary" lang="en">

        {/* HERO */}
        <section
          className="relative overflow-hidden pb-16 pt-28 min-720:pt-36"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <div className="perspective-grid-wrap" aria-hidden="true">
            <div className="perspective-grid" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
            <p className="fade-up section-label">{t.eyebrow}</p>
            <h1
              className="fade-up fade-up-d1 text-title-1 font-semibold tracking-tight mb-5"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.hero}
            </h1>
            <p
              className="fade-up fade-up-d2 text-body-lg max-w-2xl mx-auto"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {t.intro}
            </p>
          </div>
        </section>

        {/* SECTION 1 — Livestock / WYSIWYG problem */}
        <section className="px-5 py-20 min-720:py-24">
          <div className="mx-auto max-w-3xl">
            <h2
              className="fade-up text-title-2 font-semibold tracking-tight mb-6"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.problemTitle}
            </h2>
            {t.problemBody.map((para, i) => (
              <p
                key={i}
                className="fade-up text-body leading-relaxed mb-5"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {para}
              </p>
            ))}

            <div
              className="fade-up mt-8 p-8 min-720:p-10 rounded-2xl"
              style={{
                background: 'hsl(var(--bg-secondary))',
                border: '1px solid hsl(var(--border-subtle))',
              }}
            >
              <h3
                className="text-headline font-semibold mb-5"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {t.problemPointsTitle}
              </h3>
              <ul className="flex flex-col gap-4">
                {t.problemPoints.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-body" style={{ color: 'hsl(var(--text-primary))' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Why generic platforms fail */}
        <section
          className="px-5 py-20 min-720:py-24"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <div className="mx-auto max-w-3xl">
            <h2
              className="fade-up text-title-2 font-semibold tracking-tight mb-6"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.genericTitle}
            </h2>
            {t.genericBody.map((para, i) => (
              <p
                key={i}
                className="fade-up text-body leading-relaxed mb-5"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* SECTION 3 — How Torquemade solves it */}
        <section className="px-5 py-20 min-720:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="fade-up flex flex-col items-start mb-10">
              <h2
                className="text-title-2 font-semibold tracking-tight mb-3"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {t.solveTitle}
              </h2>
              <p
                className="text-headline font-medium mb-6"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.solveSubtitle}
              </p>
              <p
                className="text-body leading-relaxed"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.solveBody}
              </p>
            </div>
            <ul
              className="fade-up fade-up-d1 grid grid-cols-1 min-720:grid-cols-2"
              style={{
                background: 'hsl(var(--bg-primary))',
                border: '1px solid hsl(var(--border-subtle))',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              {t.solveDelivery.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-6"
                  style={{
                    borderRight: i % 2 === 0 && i < t.solveDelivery.length - 1 ? '1px solid hsl(var(--border-subtle))' : 'none',
                    borderBottom: i < t.solveDelivery.length - (t.solveDelivery.length % 2 === 0 ? 2 : 1) ? '1px solid hsl(var(--border-subtle))' : 'none',
                  }}
                >
                  <CheckIcon />
                  <span className="text-body" style={{ color: 'hsl(var(--text-primary))' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 4 — Technical: POS → Shopify sync */}
        <section
          className="px-5 py-20 min-720:py-24"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <div className="mx-auto max-w-3xl">
            <h2
              className="fade-up text-title-2 font-semibold tracking-tight mb-6"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.techTitle}
            </h2>
            <p
              className="fade-up text-body leading-relaxed mb-8"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {t.techBody}
            </p>
            <ol className="fade-up flex flex-col gap-4 mb-8">
              {t.techSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-caption font-semibold"
                    style={{
                      background: 'hsl(var(--bg-primary))',
                      color: 'hsl(var(--text-primary))',
                      border: '1px solid hsl(var(--border-subtle))',
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-body" style={{ color: 'hsl(var(--text-primary))' }}>
                    {step}
                  </span>
                </li>
              ))}
            </ol>
            <p
              className="fade-up text-body leading-relaxed"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {t.techNote}
              <Link href="/services/erp-ecommerce" className="underline underline-offset-2">
                {t.linkErpLabel}
              </Link>
              .
            </p>

            {/* Internal links */}
            <div
              className="fade-up mt-10 pt-8"
              style={{ borderTop: '1px solid hsl(var(--border-subtle))' }}
            >
              <h3
                className="text-caption font-semibold tracking-widest uppercase mb-4"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.relatedTitle}
              </h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/services/crm" className="text-body underline underline-offset-2" style={{ color: 'hsl(var(--text-primary))' }}>
                    {t.linkCrmLabel}
                  </Link>
                </li>
                <li>
                  <Link href="/work/sprint-motors" className="text-body underline underline-offset-2" style={{ color: 'hsl(var(--text-primary))' }}>
                    {t.linkCaseLabel}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-20 min-720:pb-24 pt-20 min-720:pt-24">
          <div className="mx-auto max-w-5xl">
            <div className="cta-card p-10 min-720:p-16 text-center fade-up">
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
        </section>
      </main>

      <Footer />
    </>
  )
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ color: 'hsl(var(--text-primary))', flexShrink: 0, marginTop: 2 }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
