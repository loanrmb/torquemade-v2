'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'

export function SeoFeaturesSection() {
  const lang = useLang()
  const t = strings[lang].seoSection

  const items = [
    { title: t.item1.title, desc: t.item1.desc },
    { title: t.item2.title, desc: t.item2.desc },
    { title: t.item3.title, desc: t.item3.desc },
    { title: t.item4.title, desc: t.item4.desc },
    { title: t.item5.title, desc: t.item5.desc },
    { title: t.item6.title, desc: t.item6.desc, accent: true },
  ]

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[2fr_3fr] lg:gap-24">
        {/* Left column — heading */}
        <div>
          <h2
            className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
            style={{ color: 'hsl(var(--text-primary))' }}
          >
            {t.title}
          </h2>
          <p
            className="mt-4 text-lg"
            style={{ color: 'hsl(var(--text-secondary))' }}
          >
            {t.subtitle}
          </p>
          {/* These six cards used to be a dead end: the offer had no page of
              its own to link to. */}
          <p
            className="mt-6 text-sm leading-relaxed"
            style={{ color: 'hsl(var(--text-secondary))' }}
          >
            {t.ctaText}{' '}
            <Link
              href="/services/seo-geo"
              className="font-semibold underline-offset-4 hover:underline"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {t.ctaLink} →
            </Link>
          </p>
        </div>

        {/* Right column — feature grid */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="pt-6"
              style={{ borderTop: '1px solid hsl(var(--border-subtle))' }}
            >
              <h3
                className="mb-2 text-base font-semibold"
                style={
                  item.accent
                    ? {
                        background:
                          'linear-gradient(90deg, #a855f7, #3b82f6, #06b6d4, #10b981, #f59e0b, #a855f7)',
                        backgroundSize: '300% 300%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'liquidShift 7s ease infinite',
                      }
                    : { color: 'hsl(var(--text-primary))' }
                }
              >
                {item.title}
              </h3>
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
    </section>
  )
}
