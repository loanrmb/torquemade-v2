type Lang = 'fr' | 'en'

interface Props {
  lang: Lang
}

export default function TableChamps({ lang }: Props) {
  const headers = lang === 'fr'
    ? ['Champ', 'Verdict', 'Pourquoi']
    : ['Field', 'Verdict', 'Why']

  const caption = lang === 'fr'
    ? 'Analyse champ par champ — formulaire de contact type'
    : 'Field-by-field analysis — typical contact form'

  const rows = lang === 'fr'
    ? [
        { col1: 'Nom',      verdict: 'Garder',    col3: "Indispensable pour personnaliser la réponse" },
        { col1: 'Email',    verdict: 'Garder',    col3: "Canal de réponse principal" },
        { col1: 'Message',  verdict: 'Garder',    col3: "Contexte minimal nécessaire" },
        { col1: 'Téléphone', verdict: 'Supprimer', col3: "Peut être demandé lors de l'échange suivant" },
        { col1: 'Budget',   verdict: 'Supprimer', col3: "Freine les indécis — à qualifier en appel" },
        { col1: 'Société',  verdict: 'Optionnel', col3: "Utile en B2B, inutile en B2C" },
        { col1: 'Comment avez-vous entendu parler de nous ?', verdict: 'Supprimer', col3: "Friction inutile, donnée peu fiable" },
      ]
    : [
        { col1: 'Name',     verdict: 'Keep',     col3: "Essential for personalizing the reply" },
        { col1: 'Email',    verdict: 'Keep',     col3: "Primary reply channel" },
        { col1: 'Message',  verdict: 'Keep',     col3: "Minimum context needed" },
        { col1: 'Phone',    verdict: 'Remove',   col3: "Can be asked during the follow-up exchange" },
        { col1: 'Budget',   verdict: 'Remove',   col3: "Discourages undecided prospects — qualify on a call" },
        { col1: 'Company',  verdict: 'Optional', col3: "Useful in B2B, pointless in B2C" },
        { col1: 'How did you hear about us?', verdict: 'Remove', col3: "Unnecessary friction, unreliable data" },
      ]

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
              <td className="py-3 pr-6 font-medium opacity-80">{r.col1}</td>
              <td
                className="py-3 pr-6 font-semibold font-mono text-xs"
                style={{
                  opacity:
                    r.verdict === 'Garder' || r.verdict === 'Keep'   ? 0.85 :
                    r.verdict === 'Supprimer' || r.verdict === 'Remove' ? 0.35 : 0.55,
                }}
              >
                {r.verdict}
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
