'use client'

import Link from 'next/link'
import type { Metadata } from 'next'
import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'
import { WorkGrid } from '@/components/work-grid'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'
import { useScrollReveal } from '@/lib/use-scroll-reveal'

export default function WorkPage() {
  const lang = useLang()
  const t = strings[lang].work
  useScrollReveal()

  return (
    <>
      <NavPill />

      <main className="relative z-10 overflow-clip rounded-b-32 bg-bg-primary">

        {/* ── INTERIOR HERO ── */}
        <section
          className="relative overflow-hidden pb-16 pt-28 min-720:pt-36"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          {/* Perspective grid decoration */}
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

        {/* ── WORK LISTING ── */}
        <section className="px-5 py-14 min-720:py-20">
          <div className="mx-auto max-w-5xl">
            <WorkGrid />
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="px-5 pb-20 min-720:pb-24">
          <div className="mx-auto max-w-5xl">
            <div className="cta-card p-10 min-720:p-16 text-center fade-up">
              <h2 className="text-title-2 font-semibold tracking-tight mb-4">
                {t.ctaTitle}
              </h2>
              <p className="text-body-lg mb-8 opacity-80 max-w-lg mx-auto">
                {t.ctaSub}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity duration-150 hover:opacity-80"
                style={{
                  background: 'hsl(var(--bg-primary))',
                  color: 'hsl(var(--bg-inverse))',
                }}
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
