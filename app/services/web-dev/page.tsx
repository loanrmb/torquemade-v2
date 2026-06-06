'use client'

import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'
import { useScrollReveal } from '@/lib/use-scroll-reveal'
import { GlobeCTA } from '@/components/globe-cta'

export default function WebDevPage() {
  const lang = useLang()
  const t = strings[lang].webDev
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

        {/* TWO TYPES OF SITES */}
        <section className="px-5 py-20 min-720:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 min-720:grid-cols-2 gap-4">
              <div
                className="fade-up p-8 min-720:p-10 rounded-2xl flex flex-col gap-4"
                style={{
                  background: 'hsl(var(--bg-primary))',
                  border: '1px solid hsl(var(--border-subtle))',
                }}
              >
                <span
                  className="text-caption font-semibold tracking-widest uppercase"
                  style={{ color: 'hsl(var(--text-tertiary))' }}
                >
                  01
                </span>
                <h2
                  className="text-headline font-semibold"
                  style={{ color: 'hsl(var(--text-primary))' }}
                >
                  {t.nextjsTitle}
                </h2>
                <p
                  className="text-body leading-relaxed"
                  style={{ color: 'hsl(var(--text-secondary))' }}
                >
                  {t.nextjsBody}
                </p>
                <div
                  className="mt-2 pt-4"
                  style={{ borderTop: '1px solid hsl(var(--border-subtle))' }}
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'hsl(var(--text-tertiary))' }}
                  >
                    {t.nextjsFor}
                  </p>
                </div>
              </div>

              <div
                className="fade-up fade-up-d1 p-8 min-720:p-10 rounded-2xl flex flex-col gap-4"
                style={{
                  background: 'hsl(var(--bg-primary))',
                  border: '1px solid hsl(var(--border-subtle))',
                }}
              >
                <span
                  className="text-caption font-semibold tracking-widest uppercase"
                  style={{ color: 'hsl(var(--text-tertiary))' }}
                >
                  02
                </span>
                <h2
                  className="text-headline font-semibold"
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
                <div
                  className="mt-2 pt-4"
                  style={{ borderTop: '1px solid hsl(var(--border-subtle))' }}
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'hsl(var(--text-tertiary))' }}
                  >
                    {t.shopifyFor}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIFFERENCE TABLE */}
        <section
          className="px-5 py-20 min-720:py-24"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <div className="mx-auto max-w-5xl">
            <h2
              className="fade-up text-title-2 font-semibold tracking-tight mb-10 text-center"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.differenceTitle}
            </h2>

            <div
              className="fade-up overflow-hidden rounded-2xl"
              style={{
                background: 'hsl(var(--bg-primary))',
                border: '1px solid hsl(var(--border-subtle))',
              }}
            >
              <div
                className="hidden min-720:grid grid-cols-[1.2fr_1.4fr_1.4fr]"
                style={{ borderBottom: '1px solid hsl(var(--border-subtle))' }}
              >
                <div
                  className="px-6 py-4 text-caption font-semibold tracking-widest uppercase"
                  style={{ color: 'hsl(var(--text-tertiary))' }}
                >
                  {t.differenceHeaderAspect}
                </div>
                <div
                  className="px-6 py-4 text-caption font-semibold tracking-widest uppercase"
                  style={{
                    color: 'hsl(var(--text-tertiary))',
                    borderLeft: '1px solid hsl(var(--border-subtle))',
                  }}
                >
                  {t.differenceHeaderNextjs}
                </div>
                <div
                  className="px-6 py-4 text-caption font-semibold tracking-widest uppercase"
                  style={{
                    color: 'hsl(var(--text-tertiary))',
                    borderLeft: '1px solid hsl(var(--border-subtle))',
                  }}
                >
                  {t.differenceHeaderShopify}
                </div>
              </div>

              {t.differenceItems.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 min-720:grid-cols-[1.2fr_1.4fr_1.4fr]"
                  style={{
                    borderTop: i > 0 ? '1px solid hsl(var(--border-subtle))' : 'none',
                  }}
                >
                  <div
                    className="px-6 py-4 text-sm font-semibold"
                    style={{ color: 'hsl(var(--text-primary))' }}
                  >
                    {row.aspect}
                  </div>
                  <div
                    className="px-6 py-4 text-sm"
                    style={{
                      color: 'hsl(var(--text-secondary))',
                      borderLeft: '1px solid hsl(var(--border-subtle))',
                    }}
                  >
                    <span
                      className="block min-720:hidden text-caption font-semibold tracking-widest uppercase mb-1"
                      style={{ color: 'hsl(var(--text-tertiary))' }}
                    >
                      {t.differenceHeaderNextjs}
                    </span>
                    {row.nextjs}
                  </div>
                  <div
                    className="px-6 py-4 text-sm"
                    style={{
                      color: 'hsl(var(--text-secondary))',
                      borderLeft: '1px solid hsl(var(--border-subtle))',
                    }}
                  >
                    <span
                      className="block min-720:hidden text-caption font-semibold tracking-widest uppercase mb-1"
                      style={{ color: 'hsl(var(--text-tertiary))' }}
                    >
                      {t.differenceHeaderShopify}
                    </span>
                    {row.shopify}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERY */}
        <section className="px-5 py-20 min-720:py-24">
          <div className="mx-auto max-w-4xl">
            <h2
              className="fade-up text-title-2 font-semibold tracking-tight mb-10 text-center"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.deliveryTitle}
            </h2>
            <ul
              className="grid grid-cols-1 min-720:grid-cols-2"
              style={{
                border: '1px solid hsl(var(--border-subtle))',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              {t.delivery.map((item, i) => (
                <li
                  key={i}
                  className="fade-up flex items-start gap-3 p-6"
                  style={{
                    background: 'hsl(var(--bg-primary))',
                    borderRight: i % 2 === 0 && i < t.delivery.length - 1 ? '1px solid hsl(var(--border-subtle))' : 'none',
                    borderBottom: i < t.delivery.length - (t.delivery.length % 2 === 0 ? 2 : 1) ? '1px solid hsl(var(--border-subtle))' : 'none',
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
