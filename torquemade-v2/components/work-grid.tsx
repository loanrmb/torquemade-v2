'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLang } from './app-provider'
import { strings } from '@/lib/strings'
import { projects, type Project, type ProjectTag } from '@/lib/projects'

type Filter = 'all' | ProjectTag

export function WorkGrid() {
  const lang = useLang()
  const t = strings[lang].work
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  const filters: { key: Filter; label: string }[] = [
    { key: 'all',      label: t.filterAll },
    { key: 'web',      label: t.filterWeb },
    { key: 'logiciel', label: t.filterLogiciel },
    { key: 'seo',      label: t.filterSeo },
  ]

  const filtered = projects.filter((p) =>
    activeFilter === 'all' ? true : p.tags.includes(activeFilter as ProjectTag)
  )

  return (
    <div className="work-layout">
      {/* Sidebar */}
      <aside className="work-sidebar">
        <p
          className="section-label mb-4"
          style={{ color: 'hsl(var(--text-tertiary))' }}
        >
          {lang === 'fr' ? 'Filtrer' : 'Filter'}
        </p>
        <ul className="flex flex-col gap-0.5 list-none p-0 m-0">
          {filters.map((f) => (
            <li key={f.key}>
              <button
                onClick={() => setActiveFilter(f.key)}
                className={`sidebar-link${activeFilter === f.key ? ' active' : ''}`}
              >
                {f.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Cards */}
      <div>
        {filtered.length === 0 ? (
          <p
            className="py-16 text-center text-body"
            style={{ color: 'hsl(var(--text-tertiary))' }}
          >
            {t.noMatch}
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                lang={lang}
                delay={i}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  lang,
  delay,
}: {
  project: Project
  lang: 'fr' | 'en'
  delay: number
}) {
  const t = strings[lang].work

  return (
    <article
      className={`project-card fade-up fade-up-d${Math.min(delay + 1, 5)}`}
    >
      {/* Image */}
      <div className="project-card-img">
        <img
          src={project.image}
          alt={project.client}
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Body */}
      <div className="p-6 min-720:p-8">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className="text-caption font-semibold uppercase tracking-wider"
            style={{ color: 'hsl(var(--text-tertiary))' }}
          >
            {project.type[lang]}
          </span>
          <span style={{ color: 'hsl(var(--border-hover))' }}>·</span>
          <span
            className="text-caption"
            style={{ color: 'hsl(var(--text-tertiary))' }}
          >
            {project.location}
          </span>
          {/* Tags */}
          {project.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} lang={lang} />
          ))}
        </div>

        {/* Headline */}
        <h3
          className="text-xl font-semibold tracking-tight mb-3"
          style={{ color: 'hsl(var(--text-primary))' }}
        >
          {project.headline[lang]}
        </h3>

        {/* Description */}
        <p
          className="text-body mb-6 max-w-2xl"
          style={{ color: 'hsl(var(--text-secondary))' }}
        >
          {project.description[lang]}
        </p>

        {/* Outcomes */}
        <ul
          className="grid grid-cols-1 min-720:grid-cols-3 gap-4 mb-6 p-0 m-0 list-none"
          style={{ borderTop: '1px solid hsl(var(--border-subtle))', paddingTop: '1.5rem' }}
        >
          {project.outcomes.map((outcome, i) => (
            <li key={i}>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {outcome[lang]}
              </p>
            </li>
          ))}
        </ul>

        {/* CTA */}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-150"
            style={{ color: 'hsl(var(--text-primary))' }}
          >
            {t.visitSite}
            <ArrowIcon />
          </a>
        )}
      </div>
    </article>
  )
}

function TagBadge({ tag, lang }: { tag: ProjectTag; lang: 'fr' | 'en' }) {
  const labels: Record<ProjectTag, { fr: string; en: string }> = {
    web:      { fr: 'Web', en: 'Web' },
    seo:      { fr: 'SEO', en: 'SEO' },
    logiciel: { fr: 'Logiciel', en: 'Software' },
  }
  return (
    <span
      className="px-2 py-0.5 rounded-full text-caption font-medium"
      style={{
        background: 'hsl(var(--bg-secondary))',
        color: 'hsl(var(--text-secondary))',
        border: '1px solid hsl(var(--border-subtle))',
      }}
    >
      {labels[tag][lang]}
    </span>
  )
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}
