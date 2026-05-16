const rows = [
  { action: 'Changer les URLs sans redirection', risque: 'Critique', impact: 'Perte totale du capital SEO des pages concernées' },
  { action: 'Supprimer des pages sans redirection', risque: 'Critique', impact: 'Erreurs 404, désindexation, chute de trafic' },
  { action: 'Réécrire les balises title des pages performantes', risque: 'Élevé', impact: 'Réévaluation par Google, instabilité temporaire ou durable' },
  { action: 'Modifier la structure de maillage interne', risque: 'Moyen', impact: 'Redéfinition de l\'arborescence perçue par Google' },
  { action: 'Changer le CMS ou le framework', risque: 'Moyen', impact: 'Neutre si les URLs et redirections sont gérées' },
  { action: 'Améliorer la vitesse et le code', risque: 'Positif', impact: 'Meilleurs Core Web Vitals, signal favorable pour Google' },
]

export default function TableRisques() {
  return (
    <figure className="my-10 overflow-x-auto">
      <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid hsl(var(--border))' }}>
            {['Action lors de la refonte', 'Risque SEO', 'Impact'].map((h, i) => (
              <th key={i} className="py-3 text-left font-mono text-[10px] uppercase tracking-widest opacity-40 pr-6">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: '1px solid hsl(var(--border))' }}>
              <td className="py-3 pr-6 opacity-80">{r.action}</td>
              <td
                className="py-3 pr-6 font-semibold font-mono text-xs"
                style={{ opacity: r.risque === 'Critique' ? 0.9 : r.risque === 'Élevé' ? 0.6 : r.risque === 'Moyen' ? 0.45 : 0.3 }}
              >
                {r.risque}
              </td>
              <td className="py-3 pr-6 opacity-50">{r.impact}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest opacity-30">
        Matrice de risque SEO lors d&apos;une refonte
      </figcaption>
    </figure>
  )
}
