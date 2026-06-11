'use client'

import { useLang } from '@/components/app-provider'

export function StockUpdatesContent() {
  const lang = useLang()

  const problems = {
    fr: [
      'Quelqu\'un oublie de synchroniser → stock fantôme',
      'Erreur lors du recopiage → mauvaises quantités',
      'Décalage de 24h ou 48h → survendu pendant 2 jours',
      'Temps gaspillé chaque jour sur une tâche inutile',
    ],
    en: [
      'Someone forgets to sync → phantom stock',
      'Copy-paste error → wrong quantities',
      '24–48 hour delay → overselling for days',
      'Time wasted every day on a pointless task',
    ],
  }

  const solutions = {
    fr: [
      'Toutes les heures (pour la plupart des commerces)',
      'À chaque vente (si vous voulez l\'hyper-précis)',
      'Toutes les nuits (pour les très gros volumes)',
    ],
    en: [
      'Every hour (works for most stores)',
      'Every sale (if you want hyper-precision)',
      'Every night (for very high volumes)',
    ],
  }

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Stock Updates Should Be Instant, Not Spreadsheets</h1>

      <h2>How are you updating inventory right now?</h2>

      <p>
        If you answered &ldquo;Excel&rdquo; or &ldquo;Google Sheets,&rdquo; you&apos;re
        losing time and money.
      </p>

      <h2>The real cost of manual</h2>

      <p>
        Every night, someone exports stock from your POS, copies it into a spreadsheet,
        then imports it to your site or marketplace. Errors guaranteed. Duplicates.
        Forgotten items.
      </p>

      <ul className="list-disc list-inside mt-3 space-y-2">
        {problems.en.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>What does it actually cost?</h2>

      <p>
        30 minutes per day × 5 days × 50 weeks = 125 hours per year. At €15/hour (real
        employee cost), that&apos;s €1,875 per year just managing inventory manually.
      </p>

      <div className="mt-4 pl-4 border-l-2 border-neutral-300 italic">
        <p className="text-sm">
          <strong>📊 Alert:</strong> 125 hours/year = €1,875 minimum. That&apos;s before
          counting the cost of overselling mistakes.
        </p>
      </div>

      <h2>The real solution: automatic sync</h2>

      <p>
        Your POS talks to your site/marketplace. Quantities update automatically.
        A few options:
      </p>

      <ul className="list-disc list-inside mt-3 space-y-2">
        {solutions.en.map((s, i) => <li key={i}>{s}</li>)}
      </ul>

      <h2>Investment vs gain</h2>

      <p>Cost: €2–3K to connect your POS/ERP to your site. Once.</p>

      <p>Gain: €1,875/year (time saved), plus zero overselling, plus happy customers.</p>

      <p className="mt-4 p-4 bg-neutral-50 border border-neutral-200 rounded">
        <strong>✓ ROI:</strong><br />
        Within 2 years, you&apos;ve recovered your investment. After that? Pure gain.
      </p>

      <hr />

      <p>
        <em>
          <strong>
            Just bring your POS/ERP and your site. We&apos;ll tell you if it&apos;s doable
            and what it costs.
          </strong>
        </em>
      </p>

      <p>
        <a href="https://cal.com/torquemade/20min" className="underline">
          Book your call →
        </a>
      </p>
    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Les mises à jour de stock ne devraient jamais être manuelles</h1>

      <h2>Vous mettez à jour votre stock comment, aujourd&apos;hui ?</h2>

      <p>
        Si vous répondez « Excel » ou « Google Sheets », vous perdez du temps et de
        l&apos;argent.
      </p>

      <h2>Le vrai coût du manuel</h2>

      <p>
        Chaque soir, quelqu&apos;un doit exporter le stock depuis la caisse, le recopier
        dans une feuille, puis l&apos;importer dans votre site ou marketplace. Erreurs
        garanties. Doublons. Oublis.
      </p>

      <ul className="list-disc list-inside mt-3 space-y-2">
        {problems.fr.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Ça coûte combien, vraiment ?</h2>

      <p>
        30 minutes par jour × 5 jours × 50 semaines = 125 heures par an. À 15 €/h (coût
        réel d&apos;un employé), ça coûte 1 875 € par an juste pour gérer manuellement
        le stock.
      </p>

      <div className="mt-4 pl-4 border-l-2 border-neutral-300 italic">
        <p className="text-sm">
          <strong>📊 Attention :</strong> 125 heures/an = 1 875 € minimum. Sans compter
          le coût des erreurs de survendu.
        </p>
      </div>

      <h2>La vraie solution : synchronisation automatique</h2>

      <p>
        Votre caisse parle à votre site/marketplace. Les quantités se mettent à jour
        automatiquement. Quelques possibilités :
      </p>

      <ul className="list-disc list-inside mt-3 space-y-2">
        {solutions.fr.map((s, i) => <li key={i}>{s}</li>)}
      </ul>

      <h2>Investissement vs gain</h2>

      <p>Coût : 2–3 K€ pour connecter votre caisse/ERP à votre site. Une seule fois.</p>

      <p>
        Gain : 1 875 € par an (temps économisé), plus zéro survendu, plus des clients
        heureux.
      </p>

      <p className="mt-4 p-4 bg-neutral-50 border border-neutral-200 rounded">
        <strong>✓ ROI :</strong><br />
        En moins de 2 ans, vous récupérez votre investissement. Après ? Pur gain.
      </p>

      <hr />

      <p>
        <em>
          <strong>
            Apportez juste votre caisse/ERP et votre site. On vous dit si c&apos;est faisable
            et combien ça coûte.
          </strong>
        </em>
      </p>

      <p>
        <a href="https://cal.com/torquemade/20min" className="underline">
          Réservez votre appel →
        </a>
      </p>
    </article>
  )
}
