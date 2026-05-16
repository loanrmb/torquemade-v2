const steps = [
  { label: 'Client', sub: 'sur votre site' },
  { label: 'Cr\u00e9neau', sub: 'calendrier int\u00e9gr\u00e9' },
  { label: 'Paiement', sub: 'Stripe \u2014 1,5\u202f%' },
  { label: 'Confirmation', sub: 'email automatique' },
  { label: 'Back-office', sub: 'votre tableau de bord' },
]

export default function SchemaFlux() {
  return (
    <figure className="my-10">
      <svg viewBox="0 0 720 120" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-xl" style={{ background: 'hsl(var(--bg-secondary))', border: '1px solid hsl(var(--border))' }}>
        <defs>
          <marker id="arr-flux" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" opacity="0.25" />
          </marker>
        </defs>
        {steps.map((s, i) => {
          const x = 72 + i * 144
          return (
            <g key={i}>
              {i < steps.length - 1 && (
                <line
                  x1={x + 30}
                  y1="56"
                  x2={x + 114}
                  y2="56"
                  stroke="currentColor"
                  strokeOpacity="0.2"
                  strokeWidth="1.5"
                  markerEnd="url(#arr-flux)"
                />
              )}
              <circle cx={x} cy="56" r="26" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" />
              <text x={x} y="52" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" fill="currentColor" opacity="0.85">
                {s.label}
              </text>
              <text x={x} y="68" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="currentColor" opacity="0.35">
                {s.sub}
              </text>
            </g>
          )
        })}
        <text x="360" y="105" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="currentColor" opacity="0.25">
          Z\u00e9ro commission \u2014 100\u202f% sur votre domaine
        </text>
      </svg>
      <figcaption className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest opacity-30">
        Flux de r\u00e9servation \u2014 syst\u00e8me propri\u00e9taire int\u00e9gr\u00e9
      </figcaption>
    </figure>
  )
}
