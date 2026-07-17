'use client'

import Link from 'next/link'
import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'
import { useScrollReveal } from '@/lib/use-scroll-reveal'
import { posts } from '@/lib/blog'
import { SeoFeatureCarousel } from '@/components/ui/seo-feature-carousel'
import {
  SeoIllustration,
  GeoIllustration,
  IndexingIllustration,
  PerformanceIllustration,
  ArchitectureIllustration,
} from '@/components/ui/seo-feature-illustrations'
import { ShaderBackground } from '@/components/ui/shader-background'
import { WaveBackground } from '@/components/ui/wave-background'
import { HeroHeading, HeroRevealBlock } from '@/components/ui/hero-heading'

const CAROUSEL_ILLUSTRATIONS = [
  <SeoIllustration key="seo" />,
  <GeoIllustration key="geo" />,
  <IndexingIllustration key="indexing" />,
  <PerformanceIllustration key="performance" />,
  <ArchitectureIllustration key="architecture" />,
]

const RELATED_CATEGORIES = ['Web & Développement', 'SEO & Contenu']

const relatedPosts = posts
  .filter((post) => RELATED_CATEGORIES.includes(post.category))
  .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
  .slice(0, 3)

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

        {/* REFRAME */}
        <section className="px-5 py-20 min-720:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="fade-up text-title-2 font-semibold tracking-tight mb-5"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.reframeTitle}
            </h2>
            <p
              className="fade-up fade-up-d1 text-body-lg leading-relaxed"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {t.reframeBody}
            </p>
          </div>
        </section>

        {/* FEATURE CAROUSEL: SEO / GEO / INDEXING / PERFORMANCE / ARCHITECTURE */}
        <section
          className="px-5 py-20 min-720:py-24"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <div className="fade-up">
            <SeoFeatureCarousel steps={t.carouselSteps} illustrations={CAROUSEL_ILLUSTRATIONS} />
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

        {/* STACK BANNER */}
        <section
          className="px-5 py-8"
          style={{
            borderTop: '1px solid hsl(var(--border-subtle))',
            borderBottom: '1px solid hsl(var(--border-subtle))',
          }}
        >
          <p
            className="fade-up mx-auto max-w-3xl text-center text-sm leading-relaxed"
            style={{ color: 'hsl(var(--text-tertiary))' }}
          >
            {t.stackBanner}
          </p>
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
                  style={{
                    borderTop: i === 0 ? 'none' : '1px solid hsl(var(--border-subtle))',
                  }}
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
