'use client'

import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'
import { useScrollReveal } from '@/lib/use-scroll-reveal'
import { GlobeCTA } from '@/components/globe-cta'

export default function ErpEcommercePage() {
  const lang = useLang()
  const t = strings[lang].erp
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

        {/* WHY SHOPIFY */}
        <section className="px-5 py-20 min-720:py-24">
          <div className="mx-auto max-w-3xl">
            <div
              className="fade-up p-8 min-720:p-10 rounded-2xl"
              style={{
                background: 'hsl(var(--bg-secondary))',
                border: '1px solid hsl(var(--border-subtle))',
              }}
            >
              <h2
                className="text-title-2 font-semibold tracking-tight mb-5"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {t.shopifyTitle}
              </h2>
              <p
                className="text-body leading-relaxed"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.shopifyBody}
              </p>
            </div>
          </div>
        </section>

        {/* OPTION A */}
        <section
          className="px-5 py-20 min-720:py-24"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <div className="mx-auto max-w-4xl">
            <div className="fade-up flex flex-col items-start mb-10">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-caption font-semibold tracking-widest uppercase mb-5"
                style={{
                  background: 'hsl(var(--bg-primary))',
                  color: 'hsl(var(--text-primary))',
                  border: '1px solid hsl(var(--border-subtle))',
                }}
              >
                {t.option1Badge}
              </span>
              <h2
                className="text-title-2 font-semibold tracking-tight mb-3"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {t.option1Title}
              </h2>
              <p
                className="text-headline font-medium mb-6"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.option1Subtitle}
              </p>
              <p
                className="text-body leading-relaxed"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.option1Body}
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
              {t.option1Delivery.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-6"
                  style={{
                    borderRight: i % 2 === 0 && i < t.option1Delivery.length - 1 ? '1px solid hsl(var(--border-subtle))' : 'none',
                    borderBottom: i < t.option1Delivery.length - (t.option1Delivery.length % 2 === 0 ? 2 : 1) ? '1px solid hsl(var(--border-subtle))' : 'none',
                  }}
                >
                  <CheckIcon />
                  <span
                    className="text-body"
                    style={{ color: 'hsl(var(--text-primary))' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* OPTION B */}
        <section className="px-5 py-20 min-720:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="fade-up flex flex-col items-start mb-10">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-caption font-semibold tracking-widest uppercase mb-5"
                style={{
                  background: 'hsl(var(--bg-secondary))',
                  color: 'hsl(var(--text-primary))',
                  border: '1px solid hsl(var(--border-subtle))',
                }}
              >
                {t.option2Badge}
              </span>
              <h2
                className="text-title-2 font-semibold tracking-tight mb-3"
                style={{ color: 'hsl(var(--text-primary))' }}
              >
                {t.option2Title}
              </h2>
              <p
                className="text-headline font-medium mb-6"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.option2Subtitle}
              </p>
              <p
                className="text-body leading-relaxed"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.option2Body}
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
              {t.option2Delivery.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-6"
                  style={{
                    borderRight: i % 2 === 0 && i < t.option2Delivery.length - 1 ? '1px solid hsl(var(--border-subtle))' : 'none',
                    borderBottom: i < t.option2Delivery.length - (t.option2Delivery.length % 2 === 0 ? 2 : 1) ? '1px solid hsl(var(--border-subtle))' : 'none',
                  }}
                >
                  <CheckIcon />
                  <span
                    className="text-body"
                    style={{ color: 'hsl(var(--text-primary))' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* GLOBE CTA */}
        <GlobeCTA />
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
