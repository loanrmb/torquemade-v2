'use client'

import Link from 'next/link'
import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'
import { useScrollReveal } from '@/lib/use-scroll-reveal'

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
          className="relative overflow-hidden pb-16 pt-28 min-720:pt-36"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <div className="perspective-grid-wrap" aria-hidden="true">
            <div className="perspective-grid" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
            <p className="fade-up section-label">{t.eyebrow}</p>
            <p
              className="fade-up fade-up-d1 text-title-1 font-semibold tracking-tight mb-5"
              style={{ color: 'hsl(var(--text-primary))', letterSpacing: '-0.03em' }}
            >
              {t.wordmark}
            </p>
            <h1
              className="fade-up fade-up-d1 text-headline font-medium max-w-2xl mx-auto mb-8"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {t.hero}
            </h1>
            <div className="fade-up fade-up-d2 flex justify-center">
              <Link
                href="/contact?service=tanklogic"
                className="btn-liquid-glass inline-flex items-center rounded-full py-3 px-6 text-sm font-semibold text-white"
              >
                {t.heroCta} →
              </Link>
            </div>
          </div>
        </section>

        {/* ── PROBLEM ── */}
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
                    <CrossIcon />
                    <span className="text-body" style={{ color: 'hsl(var(--text-primary))' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section
          className="px-5 py-20 min-720:py-24"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <div className="mx-auto max-w-3xl">
            <h2
              className="fade-up text-title-2 font-semibold tracking-tight mb-4"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.howTitle}
            </h2>
            <p
              className="fade-up text-body leading-relaxed mb-10"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {t.howIntro}
            </p>

            <ol className="fade-up flex flex-col">
              {t.howSteps.map((step, i) => {
                const last = i === t.howSteps.length - 1
                return (
                  <li key={i} className="relative flex gap-5 pb-8 last:pb-0">
                    {/* Timeline connector */}
                    {!last && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[17px] top-9 bottom-0 w-px"
                        style={{ background: 'hsl(var(--border-subtle))' }}
                      />
                    )}
                    <span
                      className="relative z-10 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-caption font-semibold"
                      style={{
                        background: 'hsl(var(--bg-inverse))',
                        color: 'hsl(var(--bg-primary))',
                      }}
                    >
                      {i + 1}
                    </span>
                    <div className="pt-1">
                      <h3
                        className="text-headline font-semibold mb-1.5"
                        style={{ color: 'hsl(var(--text-primary))' }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-body leading-relaxed"
                        style={{ color: 'hsl(var(--text-secondary))' }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        {/* ── POSITIONING ── */}
        <section className="px-5 py-20 min-720:py-24">
          <div className="mx-auto max-w-3xl">
            <h2
              className="fade-up text-title-2 font-semibold tracking-tight mb-4"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.positioningTitle}
            </h2>
            <p
              className="fade-up text-body leading-relaxed mb-10"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {t.positioningIntro}
            </p>

            <div
              className="fade-up fade-up-d1 rounded-2xl overflow-hidden"
              style={{ border: '1px solid hsl(var(--border-subtle))' }}
            >
              {t.positioningRows.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 min-720:grid-cols-[1fr_1fr_1fr]"
                  style={{
                    borderTop: i === 0 ? 'none' : '1px solid hsl(var(--border-subtle))',
                  }}
                >
                  <div
                    className="px-5 py-4 text-caption font-semibold uppercase tracking-wider"
                    style={{
                      color: 'hsl(var(--text-secondary))',
                      background: 'hsl(var(--bg-secondary))',
                    }}
                  >
                    {row.label}
                  </div>
                  <div className="flex items-start gap-2 px-5 py-4">
                    <CrossIcon />
                    <span className="text-body" style={{ color: 'hsl(var(--text-tertiary))' }}>
                      {row.generic}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 px-5 py-4">
                    <CheckIcon />
                    <span className="text-body" style={{ color: 'hsl(var(--text-primary))' }}>
                      {row.tanklogic}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-5 pb-20 min-720:pb-24 pt-4">
          <div className="mx-auto max-w-5xl">
            <div className="cta-card p-10 min-720:p-16 text-center fade-up">
              <h2 className="text-title-2 font-semibold tracking-tight mb-4" style={{ color: '#ffffff' }}>
                {t.ctaTitle}
              </h2>
              <p className="text-body-lg mb-8 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.72)' }}>
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

function CrossIcon() {
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
      style={{ color: 'hsl(var(--text-tertiary))', flexShrink: 0, marginTop: 2 }}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
