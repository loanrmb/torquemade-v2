'use client'

import { Suspense } from 'react'
import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'
import { useScrollReveal } from '@/lib/use-scroll-reveal'
import { WaveBackground } from '@/components/ui/wave-background'

export default function ContactPage() {
  const lang = useLang()
  const t = strings[lang].contact
  useScrollReveal()

  return (
    <>
      <NavPill />

      <main className="relative z-10 overflow-clip rounded-b-32 bg-bg-primary">

        {/* ── HEADER ── */}
        <section
          className="relative overflow-hidden pb-14 pt-28 min-720:pt-36"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <WaveBackground />
          <div className="perspective-grid-wrap" aria-hidden="true">
            <div className="perspective-grid" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
            <p className="fade-up section-label">{t.eyebrow}</p>
            <h1
              className="fade-up fade-up-d1 text-title-1 font-semibold tracking-tight mb-4"
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

        {/* ── FORM ── */}
        <section className="px-5 py-16 min-720:py-20">
          <div className="mx-auto max-w-xl fade-up">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
