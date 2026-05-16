const rows = [
  { critere: 'Commission par r\u00e9servation', plateforme: '1\u202f% \u2013 3\u202f%', propre: 'Aucune' },
  { critere: 'Frais de paiement', plateforme: 'Inclus dans la commission', propre: 'Stripe\u00a0: 1,5\u202f% + 0,25\u202f\u20ac' },
  { critere: 'Donn\u00e9es clients', plateforme: 'Appartiennent \u00e0 la plateforme', propre: '100\u202f% propri\u00e9taires' },
  { critere: 'Branding', plateforme: 'Interface tierce visible', propre: 'Votre design, votre domaine' },
  { critere: 'Personnalisation cr\u00e9neaux', plateforme: 'Limit\u00e9e', propre: 'Totale' },
  { critere: 'Fid\u00e9lisation\u00a0/ relance', plateforme: 'Non disponible', propre: 'Email automation possible' },
  { critere: 'Co\u00fbt de d\u00e9marrage', plateforme: 'Z\u00e9ro', propre: 'D\u00e9veloppement initial' },
]

export default function TableComparaison() {
  return (
    <figure className="my-10 overflow-x-auto">
      <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid hsl(var(--border))' }}>
            {['Crit\u00e8re', 'Plateforme tierce', 'Syst\u00e8me propri\u00e9taire'].map((h, i) => (
              <th key={i} className="py-3 text-left font-mono text-[10px] uppercase tracking-widest opacity-40 pr-6">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: '1px solid hsl(var(--border))' }}>
              <td className="py-3 pr-6 font-medium opacity-80">{r.critere}</td>
              <td className="py-3 pr-6 opacity-50">{r.plateforme}</td>
              <td className="py-3 pr-6 font-semibold">{r.propre}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest opacity-30">
        Plateforme \u00e0 commission vs syst\u00e8me int\u00e9gr\u00e9 sur mesure
      </figcaption>
    </figure>
  )
}
