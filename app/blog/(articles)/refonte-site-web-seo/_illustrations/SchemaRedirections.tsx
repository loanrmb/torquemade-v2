export default function SchemaRedirections() {
  const pairs = [
    { old: '/services/web', next: '/web' },
    { old: '/contact-nous', next: '/contact' },
    { old: '/realisations', next: '/work' },
    { old: '/blog/article-1', next: '/blog/titre-optimise' },
  ]
  return (
    <figure className="my-10">
      <svg viewBox="0 0 720 180" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-xl" style={{ background: 'hsl(var(--bg-secondary))', border: '1px solid hsl(var(--border))' }}>
        <text x="360" y="28" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor" opacity="0.4">REDIRECTIONS 301 &mdash; EXEMPLES DE MAPPING</text>
        {pairs.map((p, i) => {
          const y = 55 + i * 30
          return (
            <g key={i}>
              <rect x="60" y={y - 12} width="220" height="22" rx="4" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
              <text x="170" y={y + 4} textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor" opacity="0.5">{p.old}</text>
              <text x="370" y={y + 4} textAnchor="middle" fontFamily="monospace" fontSize="10" fill="currentColor" opacity="0.3">301 &#x2192;</text>
              <rect x="440" y={y - 12} width="220" height="22" rx="4" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
              <text x="550" y={y + 4} textAnchor="middle" fontFamily="monospace" fontSize="11" fill="currentColor" opacity="0.8">{p.next}</text>
            </g>
          )
        })}
        <text x="60" y="168" fontFamily="monospace" fontSize="9" fill="currentColor" opacity="0.3">Ancien site</text>
        <text x="440" y="168" fontFamily="monospace" fontSize="9" fill="currentColor" opacity="0.3">Nouveau site &mdash; capital SEO pr&eacute;serv&eacute;</text>
      </svg>
      <figcaption className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest opacity-30">
        Chaque URL modifi&eacute;e doit avoir sa redirection 301 correspondante
      </figcaption>
    </figure>
  )
}
