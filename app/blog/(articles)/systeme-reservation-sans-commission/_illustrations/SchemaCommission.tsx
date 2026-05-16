export default function SchemaCommission() {
  return (
    <figure className="my-10">
      <svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-xl" style={{ background: 'hsl(var(--bg-secondary))', border: '1px solid hsl(var(--border))' }}>
        <text x="360" y="36" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor" opacity="0.4">COMMISSION ANNUELLE SELON LE VOLUME</text>
        {[0, 1000, 2000, 3000, 4000].map((v, i) => (
          <text key={i} x="52" y={185 - i * 32} textAnchor="end" fontFamily="monospace" fontSize="10" fill="currentColor" opacity="0.4">{v}&euro;</text>
        ))}
        {[
          { label: '50 r\u00e9s.', x: 100, h1: 18, h2: 27 },
          { label: '100 r\u00e9s.', x: 210, h1: 36, h2: 54 },
          { label: '200 r\u00e9s.', x: 320, h1: 72, h2: 108 },
          { label: '400 r\u00e9s.', x: 430, h1: 128, h2: 128 },
          { label: '600 r\u00e9s.', x: 540, h1: 128, h2: 128 },
        ].map((d, i) => (
          <g key={i}>
            <rect x={d.x} y={185 - d.h1} width={28} height={d.h1} fill="currentColor" opacity="0.2" rx="2" />
            <rect x={d.x + 32} y={185 - d.h2} width={28} height={d.h2} fill="currentColor" opacity="0.65" rx="2" />
            <text x={d.x + 30} y="202" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="currentColor" opacity="0.45">{d.label}</text>
          </g>
        ))}
        <rect x="90" y="215" width="10" height="10" fill="currentColor" opacity="0.2" rx="1" />
        <text x="106" y="224" fontFamily="monospace" fontSize="9" fill="currentColor" opacity="0.45">Commission 1%</text>
        <rect x="210" y="215" width="10" height="10" fill="currentColor" opacity="0.65" rx="1" />
        <text x="226" y="224" fontFamily="monospace" fontSize="9" fill="currentColor" opacity="0.45">Commission 2-3%</text>
        <text x="460" y="224" fontFamily="monospace" fontSize="9" fill="currentColor" opacity="0.35">base : 60&euro; / r&eacute;servation</text>
      </svg>
      <figcaption className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest opacity-30">
        Co&ucirc;t annuel des commissions selon le volume de r&eacute;servations
      </figcaption>
    </figure>
  )
}
