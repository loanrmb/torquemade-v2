const rows = [
  { champ: 'Nom', verdict: 'Garder', raison: 'Indispensable pour personnaliser la réponse' },
  { champ: 'Email', verdict: 'Garder', raison: 'Canal de réponse principal' },
  { champ: 'Message', verdict: 'Garder', raison: 'Contexte minimal nécessaire' },
  { champ: 'Téléphone', verdict: 'Supprimer', raison: 'Peut être demandé lors de l\'échange suivant' },
  { champ: 'Budget', verdict: 'Supprimer', raison: 'Freine les indécis — à qualifier en appel' },
  { champ: 'Société', verdict: 'Optionnel', raison: 'Utile en B2B, inutile en B2C' },
  { champ: 'Comment avez-vous entendu parler de nous ?', verdict: 'Supprimer', raison: 'Friction inutile, donnée peu fiable' },
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
        Analyse champ par champ — formulaire de contact type
      </figcaption>
    </figure>
  )
}
