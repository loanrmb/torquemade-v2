/**
 * Monochrome line-art illustrations for SeoFeatureCarousel (/services/web-dev).
 * One shape per concept: SEO, GEO, indexing, performance, architecture.
 * Same convention as the site's other line icons: stroke="currentColor",
 * fill="none", round caps/joins, color driven by CSS vars (no hardcoded hex).
 */

const BASE_PROPS = {
  viewBox: '0 0 160 160',
  fill: 'none' as const,
  xmlns: 'http://www.w3.org/2000/svg',
}

export function SeoIllustration() {
  return (
    <svg {...BASE_PROPS} className="h-full w-full" aria-hidden="true">
      <rect x="28" y="24" width="72" height="92" rx="6" stroke="hsl(var(--border-subtle))" strokeWidth="2" />
      <line x1="40" y1="44" x2="88" y2="44" stroke="hsl(var(--text-tertiary))" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="58" x2="80" y2="58" stroke="hsl(var(--text-tertiary))" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="72" x2="72" y2="72" stroke="hsl(var(--text-tertiary))" strokeWidth="2" strokeLinecap="round" />
      <circle cx="98" cy="100" r="22" stroke="hsl(var(--text-primary))" strokeWidth="3" />
      <line x1="114" y1="116" x2="132" y2="134" stroke="hsl(var(--text-primary))" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function GeoIllustration() {
  return (
    <svg {...BASE_PROPS} className="h-full w-full" aria-hidden="true">
      <path
        d="M28 46c0-11 9-20 20-20h64c11 0 20 9 20 20v38c0 11-9 20-20 20H70l-24 20v-20h-2c-11 0-20-9-20-20V46Z"
        stroke="hsl(var(--text-primary))"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <line x1="48" y1="52" x2="112" y2="52" stroke="hsl(var(--text-tertiary))" strokeWidth="2" strokeLinecap="round" />
      <line x1="48" y1="65" x2="96" y2="65" stroke="hsl(var(--text-tertiary))" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M126 30l3.2 7.8L137 41l-7.8 3.2L126 52l-3.2-7.8L115 41l7.8-3.2L126 30Z"
        stroke="hsl(var(--text-primary))"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IndexingIllustration() {
  return (
    <svg {...BASE_PROPS} className="h-full w-full" aria-hidden="true">
      <rect x="34" y="22" width="66" height="86" rx="6" stroke="hsl(var(--border-subtle))" strokeWidth="2" />
      <path d="M48 46l8 8 14-16" stroke="hsl(var(--text-primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="48" y1="70" x2="86" y2="70" stroke="hsl(var(--text-tertiary))" strokeWidth="2" strokeLinecap="round" />
      <path d="M48 88l8 8 14-16" stroke="hsl(var(--text-primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="104" cy="104" r="16" stroke="hsl(var(--text-primary))" strokeWidth="2.5" />
      <line x1="115" y1="115" x2="128" y2="128" stroke="hsl(var(--text-primary))" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function PerformanceIllustration() {
  return (
    <svg {...BASE_PROPS} className="h-full w-full" aria-hidden="true">
      <path
        d="M30 100a50 50 0 0 1 100 0"
        stroke="hsl(var(--border-subtle))"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M30 100a50 50 0 0 1 78-41"
        stroke="hsl(var(--text-tertiary))"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line x1="80" y1="100" x2="102" y2="70" stroke="hsl(var(--text-primary))" strokeWidth="3" strokeLinecap="round" />
      <circle cx="80" cy="100" r="5" fill="hsl(var(--text-primary))" />
      <line x1="62" y1="120" x2="98" y2="120" stroke="hsl(var(--text-tertiary))" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function ArchitectureIllustration() {
  return (
    <svg {...BASE_PROPS} className="h-full w-full" aria-hidden="true">
      <rect x="40" y="26" width="80" height="26" rx="4" stroke="hsl(var(--text-primary))" strokeWidth="2.5" />
      <rect x="30" y="60" width="80" height="26" rx="4" stroke="hsl(var(--text-tertiary))" strokeWidth="2.5" />
      <rect x="40" y="94" width="80" height="26" rx="4" stroke="hsl(var(--border-subtle))" strokeWidth="2.5" />
      <line x1="56" y1="39" x2="88" y2="39" stroke="hsl(var(--text-primary))" strokeWidth="2" strokeLinecap="round" />
      <line x1="46" y1="73" x2="78" y2="73" stroke="hsl(var(--text-tertiary))" strokeWidth="2" strokeLinecap="round" />
      <line x1="56" y1="107" x2="88" y2="107" stroke="hsl(var(--text-tertiary))" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}
