'use client'

import Link from 'next/link'
import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'
import { TechMarquee } from '@/components/marquee'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'
import { featuredProjects } from '@/lib/projects'
import { useScrollReveal } from '@/lib/use-scroll-reveal'
import { RotatingHero } from '@/components/rotating-text'

export default function HomePage() {
  const lang = useLang()
  const t = strings[lang]
  useScrollReveal()

  return (
    <>
      <NavPill />

      <main className="relative z-10 overflow-clip rounded-b-32 bg-bg-primary">

        {/* ── HERO ── */}
        <section className="grid place-items-center px-5 pt-28 pb-16 min-720:pt-36 min-720:pb-20 min-1280:pt-44 min-1280:pb-24">
          <div className="flex flex-col items-center text-center max-w-5xl">

            <h1
              className="fade-up text-title-1 min-720:text-spotlight min-1280:text-showcase font-semibold tracking-tight"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.hero.headline1}
            </h1>

            <div className="fade-up fade-up-d1 mt-6">
              <RotatingHero lang={lang} />
            </div>

            <p
              className="fade-up fade-up-d1 mt-3 text-base"
              style={{ color: 'hsl(var(--text-tertiary))' }}
            >
              {t.hero.headline2}
            </p>

            <div
              className="fade-up fade-up-d3 mt-14 grid grid-cols-3 gap-8 pt-10 w-full"
              style={{ borderTop: '1px solid hsl(var(--border-subtle))' }}
            >
              {t.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1 items-center">
                  <span
                    className="text-2xl font-bold tracking-tight"
                    style={{ color: 'hsl(var(--text-primary))' }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-caption text-center"
                    style={{ color: 'hsl(var(--text-tertiary))' }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH MARQUEE ── */}
        <div
          style={{ borderTop: '1px solid hsl(var(--border-subtle))', borderBottom: '1px solid hsl(var(--border-subtle))' }}
        >
          <TechMarquee />
        </div>

        {/* ── SERVICES ── */}
        <section className="px-5 py-20 min-720:py-24">
          <div className="mx-auto max-w-5xl">
            <p className="fade-up section-label">{t.services.eyebrow}</p>
            <h2
              className="fade-up fade-up-d1 text-title-1 font-semibold tracking-tight mb-12"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.services.title}
            </h2>
            <div className="grid grid-cols-1 gap-px min-720:grid-cols-2"
              style={{ border: '1px solid hsl(var(--border-subtle))', borderRadius: '16px', overflow: 'hidden' }}
            >
              {t.services.items.map((item, i) => {
                const cardStyle = {
                  background: 'hsl(var(--bg-primary))',
                  borderRight: i % 2 === 0 ? '1px solid hsl(var(--border-subtle))' : 'none',
                  borderBottom: i < 2 ? '1px solid hsl(var(--border-subtle))' : 'none',
                }
                const inner = (
                  <>
                    <span
                      className="text-caption font-semibold tracking-widest uppercase"
                      style={{ color: 'hsl(var(--text-tertiary))' }}
                    >
                      {item.num}
                    </span>
                    <h3
                      className="text-headline font-semibold"
                      style={{ color: 'hsl(var(--text-primary))' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-body"
                      style={{ color: 'hsl(var(--text-secondary))' }}
                    >
                      {item.desc}
                    </p>
                  </>
                )
                const href = 'href' in item ? item.href : undefined
                return href ? (
                  <Link
                    key={item.num}
                    href={href}
                    className={`fade-up fade-up-d${i + 1} p-8 flex flex-col gap-3 transition-opacity duration-150 hover:opacity-80`}
                    style={cardStyle}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div
                    key={item.num}
                    className={`fade-up fade-up-d${i + 1} p-8 flex flex-col gap-3`}
                    style={cardStyle}
                  >
                    {inner}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── PARTNER ── */}
        <section className="px-5 pb-20 min-720:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="fade-up text-title-2 font-semibold tracking-tight mb-5"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.home.partnerTitle}
            </h2>
            <p
              className="fade-up fade-up-d1 text-body-lg"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {t.home.partnerBody}
            </p>
          </div>
        </section>

        {/* ── WORK PREVIEW ── */}
        <section
          className="px-5 py-20 min-720:py-24"
          style={{ background: 'hsl(var(--bg-secondary))' }}
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col min-720:flex-row min-720:items-end min-720:justify-between mb-10 gap-4">
              <div>
                <p className="fade-up section-label">{t.workPreview.eyebrow}</p>
                <h2
                  className="fade-up fade-up-d1 text-title-2 font-semibold tracking-tight"
                  style={{ color: 'hsl(var(--text-primary))' }}
                >
                  {t.workPreview.title}
                </h2>
              </div>
              <Link
                href="/work"
                className="fade-up text-sm font-medium whitespace-nowrap transition-colors duration-150"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.workPreview.cta}
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 min-720:grid-cols-2">
              {featuredProjects.slice(0, 4).map((project, i) => (
                <div
                  key={project.id}
                  className={`fade-up fade-up-d${Math.min(i + 1, 5)} card overflow-hidden`}
                >
                  <div className="work-card-img">
                    <img
                      src={project.imageHero}
                      alt={project.client}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-5">
                    <p
                      className="text-caption font-semibold uppercase tracking-wider mb-1"
                      style={{ color: 'hsl(var(--text-tertiary))' }}
                    >
                      {project.type[lang]}
                    </p>
                    <h3
                      className="text-base font-semibold tracking-tight mb-1"
                      style={{ color: 'hsl(var(--text-primary))' }}
                    >
                      {project.headline[lang]}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: 'hsl(var(--text-tertiary))' }}
                    >
                      {project.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="px-5 py-20 min-720:py-24">
          <div className="mx-auto max-w-4xl">
            <p className="fade-up section-label text-center">{t.testimonials.eyebrow}</p>
            <h2
              className="fade-up fade-up-d1 text-title-2 font-semibold tracking-tight text-center mb-12"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.testimonials.title}
            </h2>
            <div className="testimonials-masonry">
              {t.testimonials.items.map((item, i) => (
                <div
                  key={item.name}
                  className={`testimonial-card fade-up fade-up-d${i + 1}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
                      style={{
                        background: 'hsl(var(--bg-tertiary))',
                        color: 'hsl(var(--text-primary))',
                        border: '1px solid hsl(var(--border-subtle))',
                      }}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: 'hsl(var(--text-primary))' }}
                      >
                        {item.name}
                      </p>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-caption transition-colors duration-150 hover:text-text-primary"
                        style={{ color: 'hsl(var(--text-tertiary))' }}
                      >
                        {item.role}
                      </a>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <StarIcon key={s} />
                      ))}
                    </div>
                  </div>
                  <p
                    className="text-body leading-relaxed"
                    style={{ color: 'hsl(var(--text-secondary))' }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-5 pb-20 min-720:pb-24">
          <div className="mx-auto max-w-5xl">
            <div className="cta-card p-10 min-720:p-16 text-center fade-up">
              <h2 className="text-title-2 font-semibold tracking-tight mb-4" style={{ color: '#ffffff' }}>
                {t.cta.title}
              </h2>
              <p className="text-body-lg mb-8 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.72)' }}>
                {t.cta.sub}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity duration-150 hover:opacity-80"
                style={{ background: '#ffffff', color: '#0a0a0a' }}
              >
                {t.cta.button}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function StarIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="hsl(var(--text-primary))"
    >
      <path d="M8 1l1.85 3.75L14 5.5l-3 2.93.71 4.13L8 10.5l-3.71 2.06L5 8.43 2 5.5l4.15-.75L8 1z" />
    </svg>
  )
}
