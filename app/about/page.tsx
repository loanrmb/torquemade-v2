'use client'

import Link from 'next/link'
import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'
import { useScrollReveal } from '@/lib/use-scroll-reveal'

export default function AboutPage() {
  const lang = useLang()
  const t = strings[lang].about
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
            <h1
              className="fade-up fade-up-d1 text-title-1 font-semibold tracking-tight mb-5"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.headline}
            </h1>
            <p
              className="fade-up fade-up-d2 text-body-lg max-w-xl mx-auto"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {t.sub}
            </p>
          </div>
        </section>

        {/* ── WHAT SETS US APART ── */}
        <section className="px-5 py-20 min-720:py-24">
          <div className="mx-auto max-w-5xl">
            <p className="fade-up section-label">{t.whyEyebrow}</p>
            <h2
              className="fade-up fade-up-d1 text-title-2 font-semibold tracking-tight mb-12"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.whyTitle}
            </h2>
            <div className="grid grid-cols-1 gap-px min-720:grid-cols-2 min-1024:grid-cols-3"
              style={{
                border: '1px solid hsl(var(--border-subtle))',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              {t.differentiators.map((d, i) => (
                <div
                  key={d.title}
                  className={`fade-up fade-up-d${Math.min(i + 1, 5)} p-7 flex flex-col gap-3`}
                  style={{
                    background: 'hsl(var(--bg-primary))',
                    borderRight:
                      (i % 3 < 2) ? '1px solid hsl(var(--border-subtle))' : 'none',
                    borderBottom:
                      (i < 3) ? '1px solid hsl(var(--border-subtle))' : 'none',
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                    style={{ background: 'hsl(var(--bg-secondary))' }}
                  >
                    {DIFF_ICONS[i]}
                  </div>
                  <h3
                    className="text-base font-semibold"
                    style={{ color: 'hsl(var(--text-primary))' }}
                  >
                    {d.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'hsl(var(--text-secondary))' }}
                  >
                    {d.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section
          className="px-5 py-16"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <div className="mx-auto max-w-3xl">
            <p className="fade-up section-label text-center mb-10">{t.statsEyebrow}</p>
            <div className="grid grid-cols-3 gap-8 text-center">
              {t.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`fade-up fade-up-d${i + 1} flex flex-col gap-1`}
                >
                  <span
                    className="text-3xl font-bold tracking-tight"
                    style={{ color: 'hsl(var(--text-primary))' }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-caption"
                    style={{ color: 'hsl(var(--text-tertiary))' }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-5 py-20 min-720:py-24">
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

const DIFF_ICONS = ['⚡', '📊', '🔧', '📡', '🎯', '🤖']
