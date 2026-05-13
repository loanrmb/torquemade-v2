'use client'

const TECH_STACK = [
  'Next.js',
  'Shopify',
  'Supabase',
  'base44',
  'n8n',
  'Vercel',
  'Mapbox',
  'Google Search Console',
  'Figma',
  'TypeScript',
  'Tailwind CSS',
]

export function TechMarquee() {
  const doubled = [...TECH_STACK, ...TECH_STACK]

  return (
    <div className="overflow-hidden py-8" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((name, i) => (
          <div
            key={i}
            className="flex items-center gap-2 whitespace-nowrap px-1"
            style={{ color: 'hsl(var(--text-tertiary))' }}
          >
            <DotIcon />
            <span className="text-sm font-medium tracking-wide">{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function DotIcon() {
  return (
    <span
      className="inline-block w-1 h-1 rounded-full flex-shrink-0"
      style={{ background: 'hsl(var(--border-hover))' }}
    />
  )
}
