'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useApp } from './app-provider'
import { strings } from '@/lib/strings'

export function NavPill() {
  const { lang, toggleLang } = useApp()
  const t = strings[lang].nav
  const pathname = usePathname()

  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const servicesActive = pathname.startsWith('/services')

  return (
    <>
      <header className="fixed left-1/2 top-4 z-50 -translate-x-1/2 w-[calc(100%-2rem)] max-w-2xl">
        <div className="flex items-center gap-3">
        <nav
          className="flex flex-1 items-center justify-between gap-x-3 min-720:gap-x-2 rounded-full px-3 py-2.5 min-720:px-4"
          style={{
            background: 'hsl(var(--nav-bg))',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 0 0 1px hsl(var(--nav-border)), 0 12px 32px -16px rgba(0,0,0,0.12)',
          }}
        >
          <Link href="/" className="flex items-center gap-1.5 pr-1 min-720:pr-2 mr-0.5 min-720:mr-1 flex-shrink-0">
            <LogoMark />
            <span
              className="block font-semibold text-sm tracking-tight whitespace-nowrap"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              Torquemade
            </span>
          </Link>

          <div className="hidden min-720:flex items-center gap-1 flex-1">
            <Link
              href="/work"
              className="rounded-full px-4 py-2 text-base font-medium transition-colors duration-150 whitespace-nowrap"
              style={{
                color: pathname === '/work' ? 'hsl(var(--text-primary))' : 'hsl(var(--text-tertiary))',
                background: pathname === '/work' ? 'hsl(var(--bg-secondary))' : 'transparent',
              }}
            >
              {t.work}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 rounded-full px-4 py-2 text-base font-medium transition-colors duration-150 whitespace-nowrap"
                style={{
                  color: servicesActive || servicesOpen ? 'hsl(var(--text-primary))' : 'hsl(var(--text-tertiary))',
                  background: servicesActive ? 'hsl(var(--bg-secondary))' : 'transparent',
                }}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                {t.services}
                <CaretIcon open={servicesOpen} />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full pt-3 min-w-[320px] z-50">
                  <div
                    className="rounded-2xl p-2 flex flex-col"
                    style={{
                      background: 'hsl(var(--bg-primary))',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      boxShadow: '0 0 0 1px hsl(var(--nav-border)), 0 16px 40px -20px rgba(0,0,0,0.18)',
                    }}
                  >
                    {t.servicesItems.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-150"
                        style={{
                          color: pathname === s.href ? 'hsl(var(--text-primary))' : 'hsl(var(--text-secondary))',
                          background: pathname === s.href ? 'hsl(var(--bg-secondary))' : 'transparent',
                        }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="rounded-full px-4 py-2 text-base font-medium transition-colors duration-150 whitespace-nowrap"
              style={{
                color: pathname === '/about' ? 'hsl(var(--text-primary))' : 'hsl(var(--text-tertiary))',
                background: pathname === '/about' ? 'hsl(var(--bg-secondary))' : 'transparent',
              }}
            >
              {t.about}
            </Link>
            <Link
              href="/blog"
              className="rounded-full px-4 py-2 text-base font-medium transition-colors duration-150 whitespace-nowrap"
              style={{
                color: pathname === '/blog' ? 'hsl(var(--text-primary))' : 'hsl(var(--text-tertiary))',
                background: pathname === '/blog' ? 'hsl(var(--bg-secondary))' : 'transparent',
              }}
            >
              {t.blog}
            </Link>
            <Link
              href="/contact"
              className="rounded-full px-4 py-2 text-base font-medium transition-colors duration-150 whitespace-nowrap"
              style={{
                color: pathname === '/contact' ? 'hsl(var(--text-primary))' : 'hsl(var(--text-tertiary))',
                background: pathname === '/contact' ? 'hsl(var(--bg-secondary))' : 'transparent',
              }}
            >
              {t.contact}
            </Link>
          </div>

          <div
            className="hidden min-720:block w-px h-5 mx-1 flex-shrink-0"
            style={{ background: 'hsl(var(--border-subtle))' }}
          />

          <div className="flex items-center gap-0 flex-shrink-0">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 rounded-full px-2 min-720:px-2.5 py-1.5 text-xs font-semibold transition-colors duration-150 hover:bg-bg-secondary whitespace-nowrap"
              style={{ color: 'hsl(var(--text-secondary))' }}
              aria-label="Toggle language"
            >
              {lang === 'fr' ? <FrFlag /> : <GbFlag />}
              <span className="hidden min-[480px]:inline uppercase tracking-wider">{lang === 'fr' ? 'FR' : 'EN'}</span>
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="min-720:hidden flex items-center justify-center w-7 h-7 rounded-full ml-0.5 transition-colors duration-150 hover:bg-bg-secondary"
              style={{ color: 'hsl(var(--text-secondary))' }}
              aria-label={t.menuLabel}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <BurgerIcon />
            </button>
          </div>
        </nav>

          <Link
            href="/contact"
            className="btn-liquid-glass hidden min-720:flex items-center flex-shrink-0 rounded-full py-1.5 px-3 text-sm font-semibold text-white whitespace-nowrap"
          >
            {lang === 'fr' ? 'Démarrer →' : 'Start →'}
          </Link>
        </div>
      </header>

      <div
        id="mobile-menu"
        className="fixed inset-0 z-[60] min-720:hidden"
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            opacity: menuOpen ? 1 : 0,
            transition: 'opacity 220ms ease',
            pointerEvents: menuOpen ? 'auto' : 'none',
          }}
          onClick={() => setMenuOpen(false)}
        />

        <div
          className="absolute left-1/2 top-4 w-[calc(100%-2rem)] max-w-md rounded-3xl p-4 max-h-[calc(100vh-2rem)] overflow-y-auto"
          style={{
            background: 'hsl(var(--bg-primary))',
            boxShadow: '0 0 0 1px hsl(var(--nav-border)), 0 20px 48px -24px rgba(0,0,0,0.22)',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen
              ? 'translateX(-50%) translateY(0) scale(1)'
              : 'translateX(-50%) translateY(-8px) scale(0.98)',
            transition: menuOpen
              ? 'opacity 220ms ease, transform 220ms ease'
              : 'opacity 180ms ease, transform 180ms ease',
            pointerEvents: menuOpen ? 'auto' : 'none',
          }}
        >
            <div className="flex items-center justify-between mb-2">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-1.5"
              >
                <LogoMark />
                <span
                  className="font-semibold text-sm tracking-tight"
                  style={{ color: 'hsl(var(--text-primary))' }}
                >
                  Torquemade
                </span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-150 hover:bg-bg-secondary"
                style={{ color: 'hsl(var(--text-secondary))' }}
                aria-label={t.closeLabel}
              >
                <CloseIcon />
              </button>
            </div>

            <nav className="flex flex-col gap-0.5 mt-2">
              <MobileLink
                href="/work"
                label={t.work}
                pathname={pathname}
                onClick={() => setMenuOpen(false)}
              />

              <div
                className="px-3 pt-4 pb-1 text-xs font-semibold uppercase tracking-wider"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.services}
              </div>
              <div
                className="ml-3 flex flex-col gap-0.5"
                style={{
                  borderLeft: '2px solid hsl(var(--text-primary) / 0.08)',
                  paddingLeft: '12px',
                }}
              >
                {t.servicesItems.map((s) => {
                  const active = pathname === s.href
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-lg px-3 py-2 text-sm transition-colors duration-150"
                      style={{
                        color: active ? 'hsl(var(--text-primary))' : 'hsl(var(--text-secondary))',
                        background: active ? 'hsl(var(--bg-secondary))' : 'transparent',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{s.label}</span>
                        <span style={{ opacity: active ? 1 : 0.4, fontSize: '0.75rem' }}>→</span>
                      </div>
                    </Link>
                  )
                })}
              </div>

              <div className="my-3 h-px" style={{ background: 'hsl(var(--border-subtle))' }} />

              <MobileLink
                href="/about"
                label={t.about}
                pathname={pathname}
                onClick={() => setMenuOpen(false)}
              />
              <MobileLink
                href="/blog"
                label={t.blog}
                pathname={pathname}
                onClick={() => setMenuOpen(false)}
              />
              <MobileLink
                href="/contact"
                label={t.contact}
                pathname={pathname}
                onClick={() => setMenuOpen(false)}
              />

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-liquid-glass mt-4 rounded-full py-3 px-6 text-sm font-semibold text-white text-center"
              >
                {lang === 'fr' ? 'Démarrer →' : 'Start →'}
              </Link>
            </nav>
          </div>
        </div>
    </>
  )
}

function MobileLink({
  href,
  label,
  pathname,
  onClick,
}: {
  href: string
  label: string
  pathname: string
  onClick: () => void
}) {
  const active = pathname === href
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-lg px-3 py-2.5 text-base font-medium transition-colors duration-150"
      style={{
        color: active ? 'hsl(var(--text-primary))' : 'hsl(var(--text-primary))',
        background: active ? 'hsl(var(--bg-secondary))' : 'transparent',
      }}
    >
      {label}
    </Link>
  )
}

function FrFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      style={{ display: 'block', borderRadius: '2px', flexShrink: 0 }}>
      <rect width="20" height="14" fill="#ED2939" />
      <rect width="13.33" height="14" fill="#fff" />
      <rect width="6.67" height="14" fill="#002395" />
    </svg>
  )
}

function GbFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 60 42" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      style={{ display: 'block', borderRadius: '2px', flexShrink: 0 }}>
      <rect width="60" height="42" fill="#012169" />
      <path d="M0,0 L60,42 M60,0 L0,42" stroke="#fff" strokeWidth="8" />
      <path d="M0,0 L60,42" stroke="#C8102E" strokeWidth="4" />
      <path d="M60,0 L0,42" stroke="#C8102E" strokeWidth="4" />
      <rect x="24" width="12" height="42" fill="#fff" />
      <rect y="15" width="60" height="12" fill="#fff" />
      <rect x="26" width="8" height="42" fill="#C8102E" />
      <rect y="17" width="60" height="8" fill="#C8102E" />
    </svg>
  )
}

function LogoMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22">
      <rect width="32" height="32" rx="5" fill="hsl(var(--bg-inverse))" />
      <text x="16" y="24" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif" fontSize="18" fontWeight="600" fill="hsl(var(--bg-primary))" textAnchor="middle" letterSpacing="-1">tm</text>
    </svg>
  )
}

function CaretIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transition: 'transform 150ms ease',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
      aria-hidden="true"
    >
      <path d="M3 5l3 3 3-3" />
    </svg>
  )
}

function BurgerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  )
}
