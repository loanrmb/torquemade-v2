'use client'

import Link from 'next/link'
import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'
import { useScrollReveal } from '@/lib/use-scroll-reveal'
import { ShaderBackground } from '@/components/ui/shader-background'
import { WaveBackground } from '@/components/ui/wave-background'
import { HeroHeading, HeroRevealBlock } from '@/components/ui/hero-heading'
import { FaqSection } from '@/components/faq-section'

const seoGeoFaqItems = strings.fr.seoGeo.faq.map((item, i) => ({
  question: { fr: item.q, en: strings.en.seoGeo.faq[i].q },
  answer: { fr: item.a, en: strings.en.seoGeo.faq[i].a },
}))

export default function SeoGeoPage() {
  const lang = useLang()
  const t = strings[lang].seoGeo
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
            <HeroRevealBlock
              as="p"
              delay={0.16}
              className="text-body-lg max-w-2xl mx-auto"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {t.intro}
            </HeroRevealBlock>
          </div>
        </section>

        {/* DEFINITION — question-shaped H2 paired with a single self-contained
            answer paragraph. This is the block generative engines are most
            likely to lift, so it has to read correctly out of context. */}
        <section className="px-5 py-20 min-720:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="fade-up text-headline font-semibold mb-5"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.defTitle}
            </h2>
            <p
              className="fade-up fade-up-d1 text-body-lg leading-relaxed"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {t.defBody}
            </p>
          </div>
        </section>

        {/* SEO vs GEO TABLE */}
        <section
          className="px-5 py-20 min-720:py-24"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <div className="mx-auto max-w-5xl">
            <h2
              className="fade-up text-title-2 font-semibold tracking-tight mb-4 text-center"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.compareTitle}
            </h2>
            <p
              className="fade-up mx-auto mb-10 max-w-2xl text-center text-body leading-relaxed"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {t.compareIntro}
            </p>

            <div
              className="fade-up overflow-x-auto rounded-2xl"
              style={{
                background: 'hsl(var(--bg-primary))',
                border: '1px solid hsl(var(--border-subtle))',
              }}
            >
              <table className="w-full min-w-[640px] border-collapse text-left">
                <caption className="sr-only">{t.compareCaption}</caption>
                <thead>
                  <tr style={{ borderBottom: '1px solid hsl(var(--border-subtle))' }}>
                    <th
                      scope="col"
                      className="w-[22%] px-6 py-4 text-caption font-semibold tracking-widest uppercase"
                      style={{ color: 'hsl(var(--text-tertiary))' }}
                    >
                      {t.compareHeaderAspect}
                    </th>
                    <th
                      scope="col"
                      className="w-[39%] px-6 py-4 text-caption font-semibold tracking-widest uppercase"
                      style={{
                        color: 'hsl(var(--text-tertiary))',
                        borderLeft: '1px solid hsl(var(--border-subtle))',
                      }}
                    >
                      {t.compareHeaderSeo}
                    </th>
                    <th
                      scope="col"
                      className="w-[39%] px-6 py-4 text-caption font-semibold tracking-widest uppercase"
                      style={{
                        color: 'hsl(var(--text-tertiary))',
                        borderLeft: '1px solid hsl(var(--border-subtle))',
                      }}
                    >
                      {t.compareHeaderGeo}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {t.compareRows.map((row, i) => (
                    <tr
                      key={row.aspect}
                      style={{
                        borderTop: i > 0 ? '1px solid hsl(var(--border-subtle))' : 'none',
                      }}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 align-top text-sm font-semibold"
                        style={{ color: 'hsl(var(--text-primary))' }}
                      >
                        {row.aspect}
                      </th>
                      <td
                        className="px-6 py-4 align-top text-sm leading-relaxed"
                        style={{
                          color: 'hsl(var(--text-secondary))',
                          borderLeft: '1px solid hsl(var(--border-subtle))',
                        }}
                      >
                        {row.seo}
                      </td>
                      <td
                        className="px-6 py-4 align-top text-sm leading-relaxed"
                        style={{
                          color: 'hsl(var(--text-secondary))',
                          borderLeft: '1px solid hsl(var(--border-subtle))',
                        }}
                      >
                        {row.geo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* WHAT WE ACTUALLY DO — two blocks, SEO then GEO */}
        <section className="px-5 py-20 min-720:py-24">
          <div className="mx-auto max-w-5xl">
            <h2
              className="fade-up text-title-2 font-semibold tracking-tight mb-12 text-center"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.workTitle}
            </h2>

            <div className="flex flex-col gap-16">
              {[
                { title: t.seoBlockTitle, intro: t.seoBlockIntro, items: t.seoItems },
                { title: t.geoBlockTitle, intro: t.geoBlockIntro, items: t.geoItems },
              ].map((block) => (
                <div key={block.title}>
                  <h3
                    className="fade-up text-headline font-semibold"
                    style={{ color: 'hsl(var(--text-primary))' }}
                  >
                    {block.title}
                  </h3>
                  <p
                    className="fade-up mt-3 max-w-2xl text-body leading-relaxed"
                    style={{ color: 'hsl(var(--text-secondary))' }}
                  >
                    {block.intro}
                  </p>
                  <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 min-720:grid-cols-2">
                    {block.items.map((item) => (
                      <div
                        key={item.title}
                        className="fade-up pt-5"
                        style={{ borderTop: '1px solid hsl(var(--border-subtle))' }}
                      >
                        <h4
                          className="mb-2 text-body font-semibold"
                          style={{ color: 'hsl(var(--text-primary))' }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: 'hsl(var(--text-secondary))' }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FaqSection
          title={{ fr: strings.fr.seoGeo.faqTitle, en: strings.en.seoGeo.faqTitle }}
          description={{ fr: strings.fr.seoGeo.faqDescription, en: strings.en.seoGeo.faqDescription }}
          items={seoGeoFaqItems}
          contactHref="/contact"
          contactText={{ fr: strings.fr.seoGeo.faqContactText, en: strings.en.seoGeo.faqContactText }}
          contactLinkText={{ fr: strings.fr.seoGeo.faqContactLinkText, en: strings.en.seoGeo.faqContactLinkText }}
        />

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
