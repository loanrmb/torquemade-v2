'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useApp, useLang } from './app-provider'
import { strings } from '@/lib/strings'

export function NavPill() {
  const { lang, toggleLang, theme, toggleTheme } = useApp()
  const t = strings[lang].nav
  const pathname = usePathname()

  const links = [
    { href: '/work',    label: t.work },
    { href: '/about',   label: t.about },
    { href: '/contact', label: t.contact },
  ]

  return (
    <header className="fixed left-1/2 top-4 z-50 -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl">
      <nav
        className="flex items-center gap-1 rounded-full border px-3 py-2"
        style={{
          background: 'rgba(var(--nav-bg-raw, 255 255 255), 0.78)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderColor: 'hsl(var(--border-subtle))',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 pr-2 mr-1"
        >
          <LogoMark />
          <span
            className="font-semibold text-sm tracking-tight"
            style={{ color: 'hsl(var(--text-primary))' }}
          >
            Torquemade
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-0.5 flex-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-150"
              style={{
                color:
                  pathname === link.href
                    ? 'hsl(var(--text-primary))'
                    : 'hsl(var(--text-tertiary))',
                background:
                  pathname === link.href
                    ? 'hsl(var(--bg-secondary))'
                    : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Toggles */}
        <div className="flex items-center gap-1 ml-auto pl-1">
          {/* Lang toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors duration-150 hover:bg-bg-secondary"
            style={{ color: 'hsl(var(--text-secondary))' }}
            aria-label="Toggle language"
          >
            <span className="text-sm leading-none">{lang === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
            <span className="uppercase tracking-wider">{lang === 'fr' ? 'FR' : 'EN'}</span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-150 hover:bg-bg-secondary"
            style={{ color: 'hsl(var(--text-tertiary))' }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>

          {/* CTA */}
          <Link
            href="/contact"
            className="btn-primary ml-1 !py-1.5 !px-3 !text-sm hidden min-720:flex"
          >
            {lang === 'fr' ? 'Démarrer →' : 'Start →'}
          </Link>
        </div>
      </nav>
    </header>
  )
}

function LogoMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect width="22" height="22" rx="6" fill="hsl(var(--bg-inverse))" />
      <path
        d="M6 7h4l2 3.5L14 7h2L12 14h-2L6 7z"
        fill="hsl(var(--bg-primary))"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}
