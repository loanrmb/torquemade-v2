'use client'

import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'

export function BlogHero() {
  const lang = useLang()
  const t = strings[lang].blog

  return (
    <section className="pt-36 pb-16 px-6 text-center">
      <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-4">
        {t.eyebrow}
      </p>
      <h1
        className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        style={{ color: 'hsl(var(--text-primary))' }}
      >
        {lang === 'fr' ? 'Dernières ressources.' : 'Latest resources.'}
      </h1>
      <p className="font-mono text-sm opacity-40 max-w-sm mx-auto">
        {t.sub}
      </p>
    </section>
  )
}
