'use client'

const NICHES = [
  'Concessionnaires moto',
  'VTC & Chauffeurs privés',
  'Esthétique & Beauté',
  'Location nautique',
  'Commerce local',
  'Tourisme & Loisirs',
  'Services à domicile',
  'Sport & Outdoor',
]

export function TechMarquee() {
  const doubled = [...NICHES, ...NICHES]

  return (
    <div className="overflow-hidden py-8" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((name, i) => (
          <div
            key={i}
            className="flex items-center gap-3 whitespace-nowrap"
            style={{ color: 'hsl(var(--text-tertiary))' }}
          >
            <span className="text-sm font-medium tracking-wide">{name}</span>
            <span
              className="inline-block w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: 'hsl(var(--border-hover))' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
