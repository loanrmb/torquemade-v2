const rows = [
  { champ: 'Nom', verdict: 'Garder', raison: 'Indispensable pour personnaliser la r\u00e9ponse' },
  { champ: 'Email', verdict: 'Garder', raison: 'Canal de r\u00e9ponse principal' },
  { champ: 'Message', verdict: 'Garder', raison: 'Contexte minimal n\u00e9cessaire' },
  { champ: 'T\u00e9l\u00e9phone', verdict: 'Supprimer', raison: 'Peut \u00eatre demand\u00e9 lors de l\u2019\u00e9change suivant' },
  { champ: 'Budget', verdict: 'Supprimer', raison: 'Freine les ind\u00e9cis \u2014 \u00e0 qualifier en appel' },
  { champ: 'Soci\u00e9t\u00e9', verdict: 'Optionnel', raison: 'Utile en B2B, inutile en B2C' },
  { champ: 'Comment avez-vous entendu parler de nous\u202f?', verdict: 'Supprimer', raison: 'Friction inutile, donn\u00e9e peu fiable' },
]

export default function TableChamps() {
  return (
    <figure className="my-10 overflow-x-auto">
      <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid hsl(var(--border))' }}>
            {['Champ', 'Verdict', 'Pourquoi'].map((h, i) => (
              <th key={i} className="py-3 text-left font-mono text-[10px] uppercase tracking-widest opacity-40 pr-6">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: '1px solid hsl(var(--border))' }}>
              <td className="py-3 pr-6 font-medium opacity-80">{r.champ}</td>
              <td
                className="py-3 pr-6 font-semibold font-mono text-xs"
                style={{ opacity: r.verdict === 'Garder' ? 0.85 : r.verdict === 'Supprimer' ? 0.35 : 0.55 }}
              >
                {r.verdict}
              </td>
              <td className="py-3 pr-6 opacity-50">{r.raison}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest opacity-30">
        Analyse champ par champ &mdash; formulaire de contact type
      </figcaption>
    </figure>
  )
}
