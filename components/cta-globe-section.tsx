'use client'

import Link from 'next/link'
import { Globe } from '@/components/ui/globe'

export function CtaGlobeSection({
  title,
  sub,
  buttonLabel,
  href,
  sectionClassName = 'px-5 pb-20 min-720:pb-24',
}: {
  title: string
  sub: string
  buttonLabel: string
  href: string
  sectionClassName?: string
}) {
  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-5xl">
        <div className="cta-card fade-up relative overflow-hidden px-8 py-14 min-720:px-16 min-720:py-20">
          <div className="relative z-10 flex flex-col-reverse items-center justify-between gap-10 min-720:flex-row">
            <div className="z-10 max-w-lg text-left">
              <h2
                className="mb-4 text-title-2 font-semibold tracking-tight"
                style={{ color: '#ffffff' }}
              >
                {title}
              </h2>
              <p className="mb-8 text-body-lg" style={{ color: 'rgba(255,255,255,0.72)' }}>
                {sub}
              </p>
              <Link
                href={href}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity duration-150 hover:opacity-80"
                style={{ background: '#ffffff', color: '#0a0a0a' }}
              >
                {buttonLabel}
              </Link>
            </div>

            <div className="relative h-[180px] w-full max-w-xl min-720:h-[220px]">
              <Globe className="-bottom-24 -right-32 scale-125 min-720:-bottom-32 min-720:-right-40 min-720:scale-150" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
