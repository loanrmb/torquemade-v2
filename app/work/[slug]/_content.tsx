'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/components/app-provider'
import { projects } from '@/lib/projects'
import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'
import { useScrollReveal } from '@/lib/use-scroll-reveal'

export function CaseStudyContent() {
  const params = useParams()
  const slug = params?.slug as string
  const lang = useLang()
  useScrollReveal()

  const project = projects.find((p) => p.slug === slug)

  if (!project || !project.caseStudy) {
    return (
      <>
        <NavPill />
        <main className="relative z-10 overflow-clip rounded-b-32" style={{ background: 'hsl(var(--bg-primary))' }}>
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-5">
            <p className="text-title-3 font-semibold" style={{ color: 'hsl(var(--text-primary))' }}>
              Projet introuvable
            </p>
            <Link href="/work" className="text-body" style={{ color: 'hsl(var(--accent))' }}>
              ← Retour aux projets
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const heroExternal      = project.imageHero.startsWith('http')
  const challengeExternal = project.imageChallenge.startsWith('http')
  const approachExternal  = project.imageApproach.startsWith('http')

  return (
    <>
      <NavPill />

{/* ── BACK PILL — true Liquid Glass ── */}
<div className="fixed top-[4.5rem] left-0 right-0 z-40 px-5 pointer-events-none">
  <div className="mx-auto max-w-5xl flex justify-center pt-2">
    <Link
      href="/work"
      className="pointer-events-auto inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-80"
      style={{
        background: 'rgba(255, 255, 255, 0.18)',
        backdropFilter: 'blur(24px) saturate(180%) brightness(1.05)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%) brightness(1.05)',
        border: '1px solid rgba(255, 255, 255, 0.45)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.10)',
        color: 'rgba(255,255,255,0.92)',
        textShadow: '0 1px 2px rgba(0,0,0,0.15)',
      }}
    >
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.92)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 12L6 8L10 4"/>
      </svg>
      {lang === 'fr' ? 'Tous les projets' : 'All projects'}
    </Link>
  </div>
</div>

      <main className="relative z-10 overflow-clip rounded-b-32" style={{ background: 'hsl(var(--bg-primary))' }}>

        {/* ── HERO IMAGE ───────────────────────────────────────────────── */}
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: '16/7', background: 'hsl(var(--bg-secondary))' }}
        >
          {heroExternal ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.imageHero} alt={project.client} className="w-full h-full object-cover" />
          ) : (
            <Image src={project.imageHero} alt={project.client} fill className="object-cover" priority />
          )}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, transparent 50%, hsl(var(--bg-primary) / 0.6) 100%)' }}
          />
        </div>

        {/* ── HEADER ──────────────────────────────────────────────────── */}
        <section className="px-5 pt-12 pb-10 min-720:pt-16 min-720:pb-14">
          <div className="mx-auto max-w-5xl">

            {/* Eyebrow */}
            <div className="fade-up flex items-center gap-2 mb-6 flex-wrap">
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'hsl(var(--text-tertiary))' }}
              >
                Case Study
              </span>
              <span style={{ color: 'hsl(var(--border))' }}>·</span>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  background: 'hsl(var(--bg-secondary))',
                  color: 'hsl(var(--text-secondary))',
                  border: '1px solid hsl(var(--border))',
                }}
              >
                {project.type[lang]}
              </span>
              {project.tags.includes('web') && (
                <span
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    background: 'hsl(var(--accent) / 0.12)',
                    color: 'hsl(var(--accent))',
                    border: '1px solid hsl(var(--accent) / 0.3)',
                  }}
                >
                  SEO
                </span>
              )}
            </div>

            {/* Title + visit site button */}
            <div className="grid min-720:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                <h1
                  className="fade-up fade-up-d1 text-title-1 font-semibold tracking-tight mb-3"
                  style={{ color: 'hsl(var(--text-primary))' }}
                >
                  {project.client}
                </h1>
                <p className="fade-up fade-up-d2 text-body" style={{ color: 'hsl(var(--text-tertiary))' }}>
                  {project.location}
                </p>
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fade-up fade-up-d2 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-70 shrink-0"
                  style={{
                    background: 'hsl(var(--bg-secondary))',
                    color: 'hsl(var(--text-secondary))',
                    border: '1px solid hsl(var(--border))',
                  }}
                >
                  {lang === 'fr' ? 'Voir le site' : 'Visit site'}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H5.5M11 3V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>

            {/* Description */}
            <p
              className="fade-up fade-up-d2 text-body-lg mt-6 max-w-3xl"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {project.description[lang]}
            </p>
          </div>
        </section>

        {/* ── KEY OUTCOMES ────────────────────────────────────────────── */}
        <section className="px-5 py-10 min-720:py-14" style={{ background: 'hsl(var(--bg-secondary))' }}>
          <div className="mx-auto max-w-5xl">
            <h2
              className="fade-up text-title-3 font-semibold mb-8"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {lang === 'fr' ? `Résultats clés pour ${project.client} :` : `Key outcomes for ${project.client}:`}
            </h2>
            <ul className="grid min-720:grid-cols-2 gap-4 list-none p-0 m-0">
              {project.outcomes.map((outcome, i) => (
                <li key={i} className="fade-up flex items-start gap-3" style={{ animationDelay: `${i * 80}ms` }}>
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: 'hsl(var(--accent) / 0.15)', color: 'hsl(var(--accent))' }}
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
                    {outcome[lang]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CHALLENGE ───────────────────────────────────────────────── */}
        <section className="px-5 py-14 min-720:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="grid min-720:grid-cols-[1fr_1fr] gap-12 items-center">
              <div>
                <p className="fade-up section-label mb-3" style={{ color: 'hsl(var(--accent))' }}>
                  {lang === 'fr' ? 'Challenge' : 'Challenge'}
                </p>
                <h2
                  className="fade-up fade-up-d1 text-title-2 font-semibold tracking-tight mb-5"
                  style={{ color: 'hsl(var(--text-primary))' }}
                >
                  {project.challengeTitle[lang]}
                </h2>
                <p className="fade-up fade-up-d2 text-body-lg" style={{ color: 'hsl(var(--text-secondary))' }}>
                  {project.challenge[lang]}
                </p>
              </div>
              <div
                className="fade-up fade-up-d1 relative overflow-hidden rounded-2xl"
                style={{
                  aspectRatio: '4/3',
                  background: 'hsl(var(--bg-secondary))',
                  border: '1px solid hsl(var(--border))',
                }}
              >
                {challengeExternal ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.imageChallenge} alt={`${project.client}: challenge`} className="w-full h-full object-cover" />
                ) : (
                  <Image src={project.imageChallenge} alt={`${project.client}: challenge`} fill className="object-cover" sizes="(max-width: 720px) 100vw, 50vw" />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── APPROACH ────────────────────────────────────────────────── */}
        <section className="px-5 py-14 min-720:py-20" style={{ background: 'hsl(var(--bg-secondary))' }}>
          <div className="mx-auto max-w-5xl">
            <div className="grid min-720:grid-cols-[1fr_1fr] gap-12 items-center">
              <div
                className="fade-up relative overflow-hidden rounded-2xl order-2 min-720:order-1"
                style={{
                  aspectRatio: '4/3',
                  background: 'hsl(var(--bg-primary))',
                  border: '1px solid hsl(var(--border))',
                }}
              >
                {approachExternal ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.imageApproach} alt={`${project.client}: approche`} className="w-full h-full object-cover" />
                ) : (
                  <Image src={project.imageApproach} alt={`${project.client}: approche`} fill className="object-cover" sizes="(max-width: 720px) 100vw, 50vw" />
                )}
              </div>
              <div className="order-1 min-720:order-2">
                <p className="fade-up section-label mb-3" style={{ color: 'hsl(var(--accent))' }}>
                  {lang === 'fr' ? 'Approche' : 'Approach'}
                </p>
                <h2
                  className="fade-up fade-up-d1 text-title-2 font-semibold tracking-tight mb-5"
                  style={{ color: 'hsl(var(--text-primary))' }}
                >
                  {project.approachTitle[lang]}
                </h2>
                <p className="fade-up fade-up-d2 text-body-lg" style={{ color: 'hsl(var(--text-secondary))' }}>
                  {project.approach[lang]}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── RESULTS ─────────────────────────────────────────────────── */}
        <section className="px-5 py-14 min-720:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="fade-up section-label mb-3" style={{ color: 'hsl(var(--accent))' }}>
              {lang === 'fr' ? 'Résultats' : 'Results'}
            </p>
            <h2
              className="fade-up fade-up-d1 text-title-2 font-semibold tracking-tight mb-5 max-w-2xl"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {project.resultsTitle[lang]}
            </h2>
            <p
              className="fade-up fade-up-d2 text-body-lg max-w-3xl mb-12"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {project.results[lang]}
            </p>

            {project.quote && (
              <div
                className="fade-up rounded-2xl p-8 min-720:p-10"
                style={{ background: 'hsl(var(--bg-secondary))', border: '1px solid hsl(var(--border))' }}
              >
                <svg className="mb-4 opacity-30" width="32" height="24" viewBox="0 0 32 24" fill="currentColor" style={{ color: 'hsl(var(--accent))' }}>
                  <path d="M0 24V14.4C0 10.4 1.06667 7.06667 3.2 4.4C5.38667 1.68 8.48 0.266667 12.48 0.16V4.16C10.24 4.37333 8.48 5.28 7.2 6.88C5.97333 8.42667 5.36 10.24 5.36 12.32H10.24V24H0ZM21.76 24V14.4C21.76 10.4 22.8267 7.06667 24.96 4.4C27.1467 1.68 30.24 0.266667 34.24 0.16V4.16C32 4.37333 30.24 5.28 28.96 6.88C27.7333 8.42667 27.12 10.24 27.12 12.32H32V24H21.76Z"/>
                </svg>
                <blockquote className="text-body-lg italic mb-6" style={{ color: 'hsl(var(--text-primary))' }}>
                  {project.quote}
                </blockquote>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'hsl(var(--text-primary))' }}>
                    {project.quoteAuthor}
                  </p>
                  {project.quoteRole && (
                    <p className="text-sm" style={{ color: 'hsl(var(--text-tertiary))' }}>
                      {project.quoteRole}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── NEXT / PREV NAV ─────────────────────────────────────────── */}
        <NextProjectNav currentSlug={slug} lang={lang} />

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="px-5 py-16 min-720:py-20" style={{ background: 'hsl(var(--bg-secondary))' }}>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="fade-up text-title-2 font-semibold tracking-tight mb-4"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {lang === 'fr' ? 'Votre projet, le prochain sur cette liste.' : 'Your project, next on this list.'}
            </h2>
            <p className="fade-up fade-up-d1 text-body-lg mb-8" style={{ color: 'hsl(var(--text-secondary))' }}>
              {lang === 'fr' ? 'Remplissez le formulaire. Nous répondons dans les 24h.' : 'Fill in the form. We reply within 24h.'}
            </p>
            <Link
              href="/contact"
              className="fade-up fade-up-d2 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--accent-fg))' }}
            >
              {lang === 'fr' ? 'Démarrer un projet' : 'Start a project'}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H5.5M11 3V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

// ─── Prev / Next navigation ──────────────────────────────────────────────────
function NextProjectNav({ currentSlug, lang }: { currentSlug: string; lang: 'fr' | 'en' }) {
  const caseStudies = projects.filter((p) => p.caseStudy)
  const currentIndex = caseStudies.findIndex((p) => p.slug === currentSlug)
  if (currentIndex === -1) return null

  const prev = currentIndex > 0 ? caseStudies[currentIndex - 1] : null
  const next = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null

  return (
    <div className="border-t px-5 py-8" style={{ borderColor: 'hsl(var(--border))' }}>
      <div className="mx-auto max-w-5xl flex justify-between items-center">
        {prev ? (
          <Link href={`/work/${prev.slug}`} className="flex items-center gap-3 group">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors group-hover:border-current"
              style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--text-secondary))' }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div>
              <p className="text-xs mb-0.5" style={{ color: 'hsl(var(--text-tertiary))' }}>
                {lang === 'fr' ? 'Précédent' : 'Previous'}
              </p>
              <p className="text-sm font-medium" style={{ color: 'hsl(var(--text-primary))' }}>
                {prev.client}
              </p>
            </div>
          </Link>
        ) : <div />}

        {next ? (
          <Link href={`/work/${next.slug}`} className="flex items-center gap-3 group text-right">
            <div>
              <p className="text-xs mb-0.5" style={{ color: 'hsl(var(--text-tertiary))' }}>
                {lang === 'fr' ? 'Suivant' : 'Next'}
              </p>
              <p className="text-sm font-medium" style={{ color: 'hsl(var(--text-primary))' }}>
                {next.client}
              </p>
            </div>
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors group-hover:border-current"
              style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--text-secondary))' }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        ) : <div />}
      </div>
    </div>
  )
}
