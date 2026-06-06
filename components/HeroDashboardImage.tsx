/**
 * HeroDashboardImage
 * ------------------
 * Aperçu dashboard stock affiché dans la colonne droite du hero homepage.
 *
 * Switch sombre/clair en CSS pur via la classe `dark` posée sur <html> par
 * AppProvider. Aucune logique React, aucun useState/useEffect/MutationObserver
 * → bascule instantanée lors du toggle thème, pas de délai de re-render.
 *
 * Les deux images sont rendues simultanément ; Tailwind n'en affiche qu'une
 * via dark:hidden / hidden dark:block. Les trois fondus (gauche, haut, bas)
 * suivent le même pattern avec deux couches superposées par fondu.
 *
 * Couleurs de fondu hardcodées d'après globals.css :
 *   light → #ffffff   (--bg-primary: 0 0% 100%)
 *   dark  → #0f0f0f   (--bg-primary: 0 0% 6%)
 */

export function HeroDashboardImage() {
  return (
    <div className="relative w-full max-w-[640px]">

      {/* Image CLAIR — visible par défaut, cachée en dark */}
      <img
        src="/images/preview-dashboard-stock-clair.png"
        alt="Aperçu logiciel de gestion de stock"
        className="w-full rounded-xl block dark:hidden"
        style={{ border: '1px solid rgba(0,0,0,0.08)' }}
        width={1176}
        height={720}
        loading="eager"
        decoding="async"
      />

      {/* Image SOMBRE — cachée par défaut, visible en dark */}
      <img
        src="/images/preview-dashboard-stock-sombre.png"
        alt="Aperçu logiciel de gestion de stock"
        className="w-full rounded-xl hidden dark:block"
        style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        width={1176}
        height={720}
        loading="eager"
        decoding="async"
      />

      {/* FONDU GAUCHE — masque la transition vers la colonne texte */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 z-10 pointer-events-none"
        style={{ width: '35%' }}
      >
        <div
          className="absolute inset-0 dark:hidden"
          style={{ background: 'linear-gradient(to right, #ffffff 0%, transparent 100%)' }}
        />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{ background: 'linear-gradient(to right, #0f0f0f 0%, transparent 100%)' }}
        />
      </div>

      {/* FONDU HAUT */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 z-10 pointer-events-none"
        style={{ height: '25%' }}
      >
        <div
          className="absolute inset-0 dark:hidden"
          style={{ background: 'linear-gradient(to bottom, #ffffff 0%, transparent 100%)' }}
        />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{ background: 'linear-gradient(to bottom, #0f0f0f 0%, transparent 100%)' }}
        />
      </div>

      {/* FONDU BAS */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
        style={{ height: '25%' }}
      >
        <div
          className="absolute inset-0 dark:hidden"
          style={{ background: 'linear-gradient(to top, #ffffff 0%, transparent 100%)' }}
        />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{ background: 'linear-gradient(to top, #0f0f0f 0%, transparent 100%)' }}
        />
      </div>

    </div>
  )
}
