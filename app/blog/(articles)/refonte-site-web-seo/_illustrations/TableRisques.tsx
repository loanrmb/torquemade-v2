type Lang = 'fr' | 'en'

export default function TableRisques({ lang }: { lang: Lang }) {
  const headers = lang === 'fr'
    ? ['Action lors de la refonte', 'Risque SEO', 'Impact']
    : ['Action during redesign', 'SEO Risk', 'Impact']

  const caption = lang === 'fr'
    ? "Matrice de risque SEO lors d'une refonte"
    : 'SEO risk matrix during a website redesign'

  const rows = lang === 'fr'
    ? [
        { col1: 'Changer les URLs sans redirection',              risque: 'Critique',  col3: 'Perte totale du capital SEO des pages concernées' },
        { col1: 'Supprimer des pages sans redirection',           risque: 'Critique',  col3: 'Erreurs 404, désindexation, chute de trafic' },
        { col1: 'Réécrire les balises title des pages performantes', risque: 'Élevé',  col3: 'Réévaluation par Google, instabilité temporaire ou durable' },
        { col1: 'Modifier la structure de maillage interne',      risque: 'Moyen',     col3: "Redéfinition de l'arborescence perçue par Google" },
        { col1: 'Changer le CMS ou le framework',                 risque: 'Moyen',     col3: 'Neutre si les URLs et redirections sont gérées' },
        { col1: 'Améliorer la vitesse et le code',                risque: 'Positif',   col3: 'Meilleurs Core Web Vitals, signal favorable pour Google' },
      ]
    : [
        { col1: 'Changing URLs without redirects',                risque: 'Critical',  col3: 'Total loss of SEO equity on affected pages' },
        { col1: 'Deleting pages without redirects',               risque: 'Critical',  col3: '404 errors, deindexing, traffic drop' },
        { col1: 'Rewriting title tags on performing pages',       risque: 'High',      col3: 'Google re-evaluation, temporary or lasting instability' },
        { col1: 'Changing internal linking structure',            risque: 'Medium',    col3: "Redefines the site hierarchy as perceived by Google" },
        { col1: 'Switching CMS or framework',                    risque: 'Medium',    col3: 'Neutral if URLs and redirects are handled correctly' },
        { col1: 'Improving speed and code quality',              risque: 'Positive',  col3: 'Better Core Web Vitals, positive signal for Google' },
      ]

  const opacityFor = (r: string) => {
    if (r === 'Critique' || r === 'Critical') return 0.9
    if (r === 'Élevé'   || r === 'High')     return 0.6
    if (r === 'Moyen'   || r === 'Medium')   return 0.45
    return 0.3
  }

  return (
    <figure className="my-10 overflow-x-auto">
      <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid hsl(var(--border))' }}>
            {headers.map((h, i) => (
              <th key={i} className="py-3 text-left font-mono text-[10px] uppercase tracking-widest opacity-40 pr-6">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: '1px solid hsl(var(--border))' }}>
              <td className="py-3 pr-6 opacity-80">{r.col1}</td>
              <td className="py-3 pr-6 font-semibold font-mono text-xs" style={{ opacity: opacityFor(r.risque) }}>
                {r.risque}
              </td>
              <td className="py-3 pr-6 opacity-50">{r.col3}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest opacity-30">
        {caption}
      </figcaption>
    </figure>
  )
}
