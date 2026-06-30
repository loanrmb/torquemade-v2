/**
 * HeroDashboardImage
 * ------------------
 * Aperçu dashboard stock affiché dans la colonne droite du hero homepage.
 *
 * - L'image remplit la colonne via position: absolute inset-0 + object-cover
 *   object-left → aucun débordement possible vers la gauche
 * - Switch sombre/clair en CSS pur (dark:hidden / hidden dark:block),
 *   bascule instantanée au toggle de thème
 * - Fondus gauche/haut/bas, chacun en deux layers superposés (light + dark)
 *
 * Couleurs lues dans globals.css :
 *   light → #ffffff   (--bg-primary: 0 0% 100%)
 *   dark  → #0f0f0f   (--bg-primary: 0 0% 6%)
 */

const BG_LIGHT = '#ffffff'
const BG_DARK = '#0f0f0f'

export function HeroDashboardImage() {
  return (
    <div className="relative w-full h-full min-h-[460px]">

      {/* ── IMAGES ── */}
      {/* Mode CLAIR */}
      <img
        src="/images/preview-dashboard-stock-clair.png"
        alt="Aperçu logiciel de gestion de stock"
        className="block dark:hidden absolute inset-0 w-full h-full object-cover object-left rounded-l-xl"
        style={{ border: '1px solid rgba(0,0,0,0.07)' }}
      />
      {/* Mode SOMBRE */}
      <img
        src="/images/preview-dashboard-stock-sombre.png"
        alt="Aperçu logiciel de gestion de stock"
        className="hidden dark:block absolute inset-0 w-full h-full object-cover object-left rounded-l-xl"
        style={{ border: '1px solid rgba(255,255,255,0.06)' }}
      />

      {/* ── FONDUS ── */}
      {/* Fondu gauche — bord de jonction texte/image */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 z-10 w-[40%] pointer-events-none"
      >
        <div
          className="absolute inset-0 dark:hidden"
          style={{ background: `linear-gradient(to right, ${BG_LIGHT}, transparent)` }}
        />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{ background: `linear-gradient(to right, ${BG_DARK}, transparent)` }}
        />
      </div>

      {/* Fondu haut */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 z-10 h-[28%] pointer-events-none"
      >
        <div
          className="absolute inset-0 dark:hidden"
          style={{ background: `linear-gradient(to bottom, ${BG_LIGHT}, transparent)` }}
        />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{ background: `linear-gradient(to bottom, ${BG_DARK}, transparent)` }}
        />
      </div>

      {/* Fondu bas */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-10 h-[28%] pointer-events-none"
      >
        <div
          className="absolute inset-0 dark:hidden"
          style={{ background: `linear-gradient(to top, ${BG_LIGHT}, transparent)` }}
        />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{ background: `linear-gradient(to top, ${BG_DARK}, transparent)` }}
        />
      </div>

    </div>
  )
}
