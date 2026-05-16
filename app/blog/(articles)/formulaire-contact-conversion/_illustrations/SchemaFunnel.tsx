export default function SchemaFunnel() {
  const steps = [
    { label: 'Visiteurs', value: '1\u202f000', w: 360 },
    { label: 'Page contact', value: '180', w: 260 },
    { label: 'Formulaire ouvert', value: '120', w: 180 },
    { label: 'Message envoy\u00e9', value: '50', w: 110 },
  ]
  return (
    <figure className="my-10">
      <svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-xl" style={{ background: 'hsl(var(--bg-secondary))', border: '1px solid hsl(var(--border))' }}>
        <text x="360" y="30" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor" opacity="0.4">ENTONNOIR DE CONVERSION &mdash; FORMULAIRE MOYEN</text>
        {steps.map((s, i) => {
          const y = 50 + i * 36
          const x = (720 - s.w) / 2
          return (
            <g key={i}>
              <rect x={x} y={y} width={s.w} height={22} fill="currentColor" opacity={0.08 + i * 0.06} rx="2" />
              <text x="100" y={y + 15} textAnchor="end" fontFamily="monospace" fontSize="10" fill="currentColor" opacity="0.5">{s.label}</text>
              <text x="360" y={y + 15} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="currentColor" opacity="0.8">{s.value}</text>
            </g>
          )
        })}
        <text x="360" y="188" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="currentColor" opacity="0.3">Un formulaire optimis&eacute; peut passer de 5&nbsp;% &agrave; 20&nbsp;% sur la derni&egrave;re &eacute;tape</text>
      </svg>
      <figcaption className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest opacity-30">
        Entonnoir type &mdash; taux d&apos;abandon sur un formulaire non optimis&eacute;
      </figcaption>
    </figure>
  )
}
