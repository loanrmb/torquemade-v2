'use client'

/**
 * HeroDashboardImage
 * ------------------
 * Aperçu dashboard stock affiché dans la colonne droite du hero homepage.
 *
 * - Sélection de l'image selon le thème actif (light/dark) via le context
 *   AppProvider (useApp()). Pas de MutationObserver : le context est la
 *   source de vérité du thème dans ce codebase.
 * - Image positionnée en absolute et débordant légèrement à droite (right: -5%,
 *   width: 110%) pour l'effet YNS.store.
 * - Fondus latéraux gauche/haut/bas en linear-gradient sur hsl(var(--bg-primary)),
 *   qui s'adapte automatiquement au thème actif — pas besoin de hardcoder
 *   les couleurs par branche.
 */

import Image from 'next/image'
import { useApp } from '@/components/app-provider'

export function HeroDashboardImage() {
  const { theme } = useApp()
  const isDark = theme === 'dark'

  return (
    <div className="relative w-full h-full min-h-[400px]">

      {/* IMAGE — positionnée en absolu, déborde vers la droite */}
      <div
        className="absolute top-1/2 -translate-y-1/2"
        style={{
          right: '-5%',
          width: '110%',
        }}
      >
        <Image
          src={isDark
            ? '/images/preview-dashboard-stock-sombre.png'
            : '/images/preview-dashboard-stock-clair.png'
          }
          alt="Aperçu logiciel de gestion de stock"
          width={1176}
          height={720}
          className="w-full rounded-xl"
          style={{
            border: isDark
              ? '1px solid rgba(255,255,255,0.07)'
              : '1px solid rgba(0,0,0,0.08)',
          }}
          priority
        />
      </div>

      {/* FONDU GAUCHE — masque la transition vers la colonne texte */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 z-10 pointer-events-none"
        style={{
          width: '45%',
          background:
            'linear-gradient(to right, hsl(var(--bg-primary)) 0%, transparent 100%)',
        }}
      />

      {/* FONDU HAUT */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 z-10 pointer-events-none"
        style={{
          height: '30%',
          background:
            'linear-gradient(to bottom, hsl(var(--bg-primary)) 0%, transparent 100%)',
        }}
      />

      {/* FONDU BAS */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
        style={{
          height: '30%',
          background:
            'linear-gradient(to top, hsl(var(--bg-primary)) 0%, transparent 100%)',
        }}
      />

    </div>
  )
}
