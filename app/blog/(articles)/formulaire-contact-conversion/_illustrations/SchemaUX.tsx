const states = [
  { label: 'Vide', sub: 'placeholder visible', x: 90 },
  { label: 'Rempli', sub: 'champs valid\u00e9s', x: 270 },
  { label: 'Envoi', sub: 'spinner actif', x: 450 },
  { label: 'Succ\u00e8s', sub: 'confirmation claire', x: 630 },
]

export default function SchemaUX() {
  return (
    <figure className="my-10">
      <svg viewBox="0 0 720 110" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-xl" style={{ background: 'hsl(var(--bg-secondary))', border: '1px solid hsl(var(--border))' }}>
        <defs>
          <marker id="arr-ux" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" opacity="0.2" />
          </marker>
        </defs>
        <text x="360" y="22" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor" opacity="0.4">CYCLE D&apos;&Eacute;TAT DU FORMULAIRE</text>
        {states.map((s, i) => (
          <g key={i}>
            {i < states.length - 1 && (
              <line
                x1={s.x + 42}
                y1="58"
                x2={s.x + 138}
                y2="58"
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                markerEnd="url(#arr-ux)"
              />
            )}
            <rect
              x={s.x - 44}
              y="40"
              width="88"
              height="36"
              rx="6"
              fill="none"
              stroke="currentColor"
              strokeOpacity={i === 3 ? 0.6 : 0.2}
              strokeWidth={i === 3 ? 1.5 : 1}
            />
            <text
              x={s.x}
              y="62"
              textAnchor="middle"
              fontFamily="system-ui, sans-serif"
              fontSize="11"
              fontWeight={i === 3 ? '700' : '500'}
              fill="currentColor"
              opacity={i === 3 ? 0.9 : 0.7}
            >
              {s.label}
            </text>
            <text x={s.x} y="93" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="currentColor" opacity="0.3">
              {s.sub}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest opacity-30">
        Les 4 &eacute;tats que tout formulaire doit g&eacute;rer explicitement
      </figcaption>
    </figure>
  )
}
