type Lang = 'fr' | 'en'

export default function TableComparaison({ lang }: { lang: Lang }) {
  const headers = lang === 'fr'
    ? ['Critère', 'Plateforme tierce', 'Système propriétaire']
    : ['Criterion', 'Third-party platform', 'Proprietary system']

  const caption = lang === 'fr'
    ? 'Plateforme à commission vs système intégré sur mesure'
    : 'Commission-based platform vs custom integrated system'

  const rows = lang === 'fr'
    ? [
        { col1: 'Commission par réservation', col2: '1 % – 3 %',                     col3: 'Aucune' },
        { col1: 'Frais de paiement',          col2: 'Inclus dans la commission',      col3: 'Stripe : 1,5 % + 0,25 €' },
        { col1: 'Données clients',            col2: 'Appartiennent à la plateforme',  col3: '100 % propriétaires' },
        { col1: 'Branding',                   col2: 'Interface tierce visible',        col3: 'Votre design, votre domaine' },
        { col1: 'Personnalisation créneaux',  col2: 'Limitée',                        col3: 'Totale' },
        { col1: 'Fidélisation / relance',     col2: 'Non disponible',                 col3: 'Email automation possible' },
        { col1: 'Coût de démarrage',          col2: 'Zéro',                           col3: 'Développement initial' },
      ]
    : [
        { col1: 'Commission per booking',     col2: '1% – 3%',                        col3: 'None' },
        { col1: 'Payment fees',               col2: 'Included in commission',         col3: 'Stripe: 1.5% + €0.25' },
        { col1: 'Customer data',              col2: 'Owned by the platform',          col3: '100% yours' },
        { col1: 'Branding',                   col2: 'Third-party interface visible',  col3: 'Your design, your domain' },
        { col1: 'Slot customization',         col2: 'Limited',                        col3: 'Total' },
        { col1: 'Retention / re-engagement',  col2: 'Not available',                  col3: 'Email automation possible' },
        { col1: 'Start-up cost',              col2: 'Zero',                           col3: 'Initial development' },
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
              <td className="py-3 pr-6 opacity-50">{r.col2}</td>
              <td className="py-3 pr-6 font-semibold">{r.col3}</td>
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
