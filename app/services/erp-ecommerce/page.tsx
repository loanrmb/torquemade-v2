'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'
import { useScrollReveal } from '@/lib/use-scroll-reveal'
import { posts } from '@/lib/blog'
import { SituationDiagnostic } from '@/components/ui/situation-diagnostic'
import { ErpDiagnosticCta } from '@/components/erp-diagnostic-cta'
import { ShaderBackground } from '@/components/ui/shader-background'
import { WaveBackground } from '@/components/ui/wave-background'

const statContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
} as const

const statItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
} as const

const RELATED_CATEGORY = 'ERP & Gestion de stock'

const relatedPosts = posts
  .filter((post) => post.category === RELATED_CATEGORY)
  .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
  .slice(0, 3)

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
          <WaveBackground />
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

        {/* REFRAME */}
        <section className="px-5 py-20 min-720:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="fade-up section-label text-center">{t.reframeEyebrow}</p>
            <h2
              className="fade-up fade-up-d1 text-title-2 font-semibold tracking-tight mb-8 text-center"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.reframeTitle}
            </h2>
            <div className="fade-up fade-up-d2 flex flex-col gap-5">
              <p
                className="text-body-lg leading-relaxed"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.reframeBody1}
              </p>
              <p
                className="text-body-lg leading-relaxed"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.reframeBody2}
              </p>
            </div>
            <motion.div
              className="mt-10 grid grid-cols-1 min-720:grid-cols-3"
              style={{
                border: '1px solid hsl(var(--border-subtle))',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
              variants={statContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              {t.reframeStats.map((stat, i) => (
                <motion.div
                  key={stat.value}
                  className="flex flex-col gap-2 p-6 transition-colors duration-200 hover:bg-[hsl(var(--bg-primary))]"
                  style={{
                    background: 'hsl(var(--bg-secondary))',
                    borderTop: i > 0 ? '1px solid hsl(var(--border-subtle))' : 'none',
                    borderLeft: i > 0 ? '1px solid hsl(var(--border-subtle))' : 'none',
                  }}
                  variants={statItemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
                >
                  <span
                    className="text-title-1 font-semibold tracking-tight"
                    style={{ color: 'hsl(var(--text-primary))' }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-sm leading-snug"
                    style={{ color: 'hsl(var(--text-tertiary))' }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="mt-14">
            <ErpDiagnosticCta intentKey="reframe" />
          </div>
        </section>

        {/* SITUATIONAL DIAGNOSTIC */}
        <section
          className="px-5 py-20 min-720:py-24"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="fade-up section-label">{t.diagnosticEyebrow}</p>
            <h2
              className="fade-up fade-up-d1 text-title-2 font-semibold tracking-tight mb-4"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.diagnosticTitle}
            </h2>
            <p
              className="fade-up fade-up-d2 text-body-lg"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {t.diagnosticSubtitle}
            </p>
          </div>
          <div className="fade-up fade-up-d2">
            <SituationDiagnostic situations={t.situations} />
          </div>
          <div className="mt-14">
            <ErpDiagnosticCta intentKey="diagnostic" />
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
                    className="fade-up group p-6 rounded-2xl flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
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
                  style={{
                    borderTop: i === 0 ? 'none' : '1px solid hsl(var(--border-subtle))',
                  }}
                >
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 px-5 py-4 min-720:px-7 min-720:py-5 transition-colors duration-200 hover:bg-[hsl(var(--bg-secondary))] [&::-webkit-details-marker]:hidden">
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
        <section className="px-5 pb-20 min-720:pb-24">
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
