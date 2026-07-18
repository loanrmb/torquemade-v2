'use client'

import Link from 'next/link'
import { useLang } from './app-provider'
import { strings } from '@/lib/strings'

export function Footer() {
  const lang = useLang()
  const t = strings[lang].footer

  return (
    <footer className="site-footer px-5 py-16 min-720:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-12 min-720:grid-cols-2 min-1024:grid-cols-4">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <FooterLogo />
              <span className="font-semibold text-white text-base tracking-tight">
                Torquemade
              </span>
            </div>
            <p className="text-sm" style={{ color: 'hsl(0 0% 50%)' }}>
              {t.tagline}
            </p>
            <a
              href={`mailto:${t.email}`}
              className="footer-link text-sm transition-colors duration-150 hover:text-white"
              style={{ color: 'hsl(0 0% 50%)' }}
            >
              {t.email}
            </a>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-2">
            {t.nav.map((label, i) => (
              <Link
                key={label}
                href={t.navHref[i]}
                className="footer-link text-sm transition-colors duration-150 hover:text-white"
                style={{ color: 'hsl(0 0% 50%)' }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Services */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-white">{t.servicesTitle}</span>
            {t.servicesItems.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="footer-link text-sm transition-colors duration-150 hover:text-white"
                style={{ color: 'hsl(0 0% 50%)' }}
              >
                {s.label}
              </Link>
            ))}
          </div>

          {/* TankLogic */}
          <div className="flex flex-col gap-2">
            <Link
              href="/tanklogic"
              className="footer-link text-sm font-semibold text-white transition-colors duration-150 hover:text-white"
            >
              {t.tanklogicColumnTitle}
            </Link>
            <p className="text-sm" style={{ color: 'hsl(0 0% 50%)' }}>
              {t.tanklogicColumnTagline}
            </p>
          </div>
        </div>

        <div
          className="mt-16 pt-8 flex flex-col gap-2 min-720:flex-row min-720:items-center min-720:justify-between text-xs"
          style={{
            borderTop: '1px solid hsl(0 0% 100% / 0.06)',
            color: 'hsl(0 0% 35%)',
          }}
        >
          <p>{t.copy}</p>
          <div className="flex items-center gap-5">
            <Link
              href="/mentions-legales"
              className="footer-link transition-colors duration-150 hover:text-white"
              style={{ color: 'hsl(0 0% 35%)' }}
            >
              {t.legal}
            </Link>
            <p>Bordeaux, France</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22">
      <rect width="32" height="32" rx="5" fill="hsl(0 0% 20%)" />
      <text x="16" y="24" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif" fontSize="18" fontWeight="600" fill="hsl(0 0% 72%)" textAnchor="middle" letterSpacing="-1">tm</text>
    </svg>
  )
}
