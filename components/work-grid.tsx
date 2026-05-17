'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLang } from './app-provider'
import { strings } from '@/lib/strings'
import { projects, type ProjectTag } from '@/lib/projects'

type Filter = 'all' | 'web' | 'logiciel'

const LIQUID_GLASS_KEYFRAMES = `
  @keyframes liquidShift {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`

const LIQUID_GLASS_BG = {
  background: 'linear-gradient(-45deg, rgba(140,60,255,0.72), rgba(60,130,255,0.68), rgba(255,100,60,0.62), rgba(230,50,170,0.68), rgba(40,200,255,0.65), rgba(140,60,255,0.72))',
  backgroundSize: '400% 400%',
  animation: 'liquidShift 22s ease infinite',
  backdropFilter: 'blur(20px) saturate(160%)',
  WebkitBackdropFilter: 'blur(20px) saturate(160%)',
  border: '1px solid rgba(255,255,255,0.5)',
  boxShadow: '0 4px 28px rgba(120,60,255,0.25), 0 1.5px 0 rgba(255,255,255,0.25) inset, 0 -1px 0 rgba(0,0,0,0.1) inset',
} as const

export function WorkGrid() {
  const lang = useLang()
  const t = strings[lang].work
  const [activeFilter, setActiveFilter] = useState<Filter>('all')
  const gridRef = useRef<HTMLDivElement>(null)

  const filters: { key: Filter; label: string }[] = [
    { key: 'all',      label: t.filterAll },
    { key: 'web',      label: t.filterWeb },
    { key: 'logiciel', label: t.filterLogiciel },
  ]

  function handleFilter(key: Filter) {
    setActiveFilter(key)
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const filtered = projects.filter((p) =>
    activeFilter === 'all' ? true : p.tags.includes(activeFilter as ProjectTag)
  )

  return (
    <div className="work-layout">
      <style>{LIQUID_GLASS_KEYFRAMES}</style>

      {/* ── MOBILE FILTER — pill liquid glass sticky ── */}
      <div className="block min-720:hidden sticky top-20 z-40 mb-6">
        <div
          className="inline-flex items-center gap-1 rounded-full px-2 py-1.5 w-full justify-center"
          style={LIQUID_GLASS_BG}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => handleFilter(f.key)}
              className="rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 whitespace-nowrap"
              style={{
                background: activeFilter === f.key ? 'rgba(255,255,255,0.32)' : 'transparent',
                color: activeFilter === f.key ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.88)',
                fontWeight: activeFilter === f.key ? '600' : '500',
                boxShadow: activeFilter === f.key
                  ? '0 1px 6px rgba(0,0,0,0.15), 0 1px 0 rgba(255,255,255,0.25) inset'
                  : 'none',
                textShadow: '0 1px 3px rgba(0,0,0,0.25)',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── SIDEBAR FILTERS — desktop liquid glass ── */}
      <aside className="work-sidebar hidden min-720:block">
        <p className="section-label mb-4" style={{ color: 'hsl(var(--text-tertiary))' }}>
          {lang === 'fr' ? 'Filtrer' : 'Filter'}
        </p>
        {/* Conteneur liquid glass vertical */}
        <div
          className="rounded-2xl p-1.5 flex flex-col gap-0.5"
          style={LIQUID_GLASS_BG}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => handleFilter(f.key)}
              className="w-full text-left rounded-xl px-4 py-2.5 text-sm transition-all duration-200 whitespace-nowrap"
              style={{
                background: activeFilter === f.key ? 'rgba(255,255,255,0.32)' : 'transparent',
                color: activeFilter === f.key ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.88)',
                fontWeight: activeFilter === f.key ? '600' : '500',
                boxShadow: activeFilter === f.key
                  ? '0 1px 6px rgba(0,0,0,0.15), 0 1px 0 rgba(255,255,255,0.25) inset'
                  : 'none',
                textShadow: '0 1px 3px rgba(0,0,0,0.25)',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </aside>

      {/* ── PROJECT CARDS ── */}
      <div ref={gridRef} className="flex flex-col gap-6">
        {filtered.length === 0 ? (
          <p className="text-body py-12 text-center" style={{ color: 'hsl(var(--text-tertiary))' }}>
            {t.noMatch}
          </p>
        ) : (
          filtered.map((project) => {
            const isExternal = project.imageHero.startsWith('http')

            return (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden border transition-colors"
                style={{
                  background: 'hsl(var(--bg-secondary))',
                  borderColor: 'hsl(var(--border))',
                }}
              >
                {/* Image */}
                {project.caseStudy ? (
                  <Link href={`/work/${project.slug}`} className="relative block overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    {isExternal ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.imageHero}
                        alt={project.client}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <Image
                        src={project.imageHero}
                        alt={project.client}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    )}
                  </Link>
                ) : (
                  <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    {isExternal ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.imageHero}
                        alt={project.client}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <Image
                        src={project.imageHero}
                        alt={project.client}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    )}
                  </div>
                )}

                {/* Body */}
                <div className="p-6 min-720:p-8">

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        background: 'hsl(var(--bg-primary))',
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

                  {/* Meta */}
                  <p className="text-xs mb-1" style={{ color: 'hsl(var(--text-tertiary))' }}>
                    {project.location}
                  </p>

                  {/* Headline */}
                  <h3
                    className="text-title-3 font-semibold tracking-tight mb-3"
                    style={{ color: 'hsl(var(--text-primary))' }}
                  >
                    {project.headline[lang]}
                  </h3>

                  {/* Description */}
                  <p className="text-body mb-5" style={{ color: 'hsl(var(--text-secondary))' }}>
                    {project.description[lang]}
                  </p>

                  {/* Outcomes */}
                  <ul className="flex flex-col gap-2 mb-7 list-none p-0 m-0">
                    {project.outcomes.slice(0, 3).map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span
                          className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                          style={{ background: 'hsl(var(--accent) / 0.15)', color: 'hsl(var(--accent))' }}
                        >
                          <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                          {outcome[lang]}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    {project.caseStudy && (
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-80"
                        style={{
                          background: 'hsl(var(--accent))',
                          color: 'hsl(var(--accent-fg))',
                        }}
                      >
                        {lang === 'fr' ? 'Voir le case study' : 'View case study'}
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                          <path d="M3 11L11 3M11 3H5.5M11 3V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-70"
                        style={{
                          color: 'hsl(var(--text-secondary))',
                          border: '1px solid hsl(var(--border))',
                        }}
                      >
                        {t.visitSite}
                      </a>
                    )}
                  </div>

                </div>
              </div>
            )
          })
        )}

        {/* CTA CARD */}
        <div
          className="rounded-2xl border p-8 min-720:p-10 text-center"
          style={{ background: 'hsl(var(--bg-secondary))', borderColor: 'hsl(var(--border))' }}
        >
          <h3 className="text-title-3 font-semibold mb-2" style={{ color: 'hsl(var(--text-primary))' }}>
            {t.ctaTitle}
          </h3>
          <p className="text-body mb-6" style={{ color: 'hsl(var(--text-secondary))' }}>
            {t.ctaSub}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--accent-fg))' }}
          >
            {t.ctaButton}
          </Link>
        </div>
      </div>
    </div>
  )
}
