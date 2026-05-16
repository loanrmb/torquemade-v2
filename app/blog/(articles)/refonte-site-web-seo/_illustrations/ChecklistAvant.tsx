const items = [
  { done: true,  text: 'Export Search Console \u2014 pages index\u00e9es + positions' },
  { done: true,  text: 'Liste de toutes les URLs actuelles' },
  { done: true,  text: 'Identification des pages g\u00e9n\u00e9rant du trafic' },
  { done: false, text: 'Tableau de correspondance ancienne \u2192 nouvelle URL' },
  { done: false, text: 'V\u00e9rification des backlinks entrants (Ahrefs, GSC)' },
  { done: false, text: 'Conservation des balises title des pages performantes' },
  { done: false, text: 'Fichier de redirections 301 pr\u00eat avant lancement' },
]

export default function ChecklistAvant() {
  return (
    <figure className="my-10">
      <div className="rounded-xl p-6" style={{ background: 'hsl(var(--bg-secondary))', border: '1px solid hsl(var(--border))' }}>
        <p className="mb-4 font-mono text-[10px] uppercase tracking-widest opacity-40">Checklist pr\u00e9-refonte &mdash; SEO</p>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm text-[10px] font-bold"
                style={{
                  border: '1px solid hsl(var(--border))',
                  opacity: item.done ? 1 : 0.4,
                  background: item.done ? 'hsl(var(--text-primary))' : 'transparent',
                  color: item.done ? 'hsl(var(--bg-primary))' : 'transparent',
                }}
              >
                &#x2713;
              </span>
              <span className="text-sm" style={{ opacity: item.done ? 0.5 : 0.8 }}>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest opacity-30">
        &Agrave; compl&eacute;ter avant d&apos;&eacute;crire la premi&egrave;re ligne de code
      </figcaption>
    </figure>
  )
}
