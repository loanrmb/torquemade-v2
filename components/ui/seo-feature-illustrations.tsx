/**
 * Apple-style glyph tiles for SeoFeatureCarousel (/services/web-dev).
 * One concept per tile: SEO, GEO, indexing, performance, architecture.
 *
 * Style: a solid rounded-square tile (SF Symbols / iOS app-icon convention)
 * filled with --text-primary, holding a bold white (--bg-primary) glyph.
 * Strictly monochrome (site design system forbids color) — the "Apple-like"
 * feel comes from the tile + bold reductive glyph shape, not from hue.
 */

function Tile({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden="true">
      <rect x="12" y="12" width="136" height="136" rx="34" fill="hsl(var(--text-primary))" />
      {children}
    </svg>
  )
}

export function SeoIllustration() {
  return (
    <Tile>
      <circle cx="70" cy="70" r="27" stroke="hsl(var(--bg-primary))" strokeWidth="10" />
      <line x1="90" y1="90" x2="114" y2="114" stroke="hsl(var(--bg-primary))" strokeWidth="10" strokeLinecap="round" />
    </Tile>
  )
}

export function GeoIllustration() {
  return (
    <Tile>
      <path
        d="M34 58c0-14 11-25 25-25h42c14 0 25 11 25 25v18c0 14-11 25-25 25H72l-19 16v-16h-4c-14 0-25-11-25-25V58Z"
        fill="hsl(var(--bg-primary))"
      />
      <path
        d="M120 30l3.6 8.8 8.8 3.6-8.8 3.6-3.6 8.8-3.6-8.8-8.8-3.6 8.8-3.6 3.6-8.8Z"
        fill="hsl(var(--text-primary))"
      />
    </Tile>
  )
}

export function IndexingIllustration() {
  return (
    <Tile>
      <rect x="42" y="30" width="60" height="76" rx="10" stroke="hsl(var(--bg-primary))" strokeWidth="8" />
      <path d="M53 55l8 8 15-17" stroke="hsl(var(--bg-primary))" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M53 84l8 8 15-17" stroke="hsl(var(--bg-primary))" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </Tile>
  )
}

export function PerformanceIllustration() {
  return (
    <Tile>
      <path
        d="M36 100a44 44 0 0 1 88 0"
        stroke="hsl(var(--bg-primary))"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <line x1="80" y1="100" x2="103" y2="72" stroke="hsl(var(--bg-primary))" strokeWidth="9" strokeLinecap="round" />
      <circle cx="80" cy="100" r="8" fill="hsl(var(--bg-primary))" />
    </Tile>
  )
}

export function ArchitectureIllustration() {
  return (
    <Tile>
      <rect x="44" y="32" width="72" height="26" rx="7" fill="hsl(var(--bg-primary))" />
      <rect x="44" y="67" width="72" height="26" rx="7" fill="hsl(var(--bg-primary))" opacity="0.72" />
      <rect x="44" y="102" width="72" height="26" rx="7" fill="hsl(var(--bg-primary))" opacity="0.44" />
    </Tile>
  )
}
