'use client'

import { useLang } from '@/components/app-provider'

export function InventorySoftwareCustomFitContent() {
  const lang = useLang()

  const almostProblems = {
    fr: [
      'Vous gérez des tailles ET des couleurs. Le logiciel ne gère que l\'une ou l\'autre.',
      'Vous avez des clients VIP qui bénéficient de 10 % de réduction. Le système n\'a pas ce concept.',
      'Vous faites du repricing saisonnier. Pas d\'option pour ça.',
      'Vous voulez une alerte stock à 5 unités. Le minimum est 10.',
    ],
    en: [
      'You manage sizes AND colors. The software only does one or the other.',
      'You have VIP customers who get 10% off. The system has no concept of that.',
      'You do seasonal repricing. No option for it.',
      'You want stock alerts at 5 units. The minimum is 10.',
    ],
  }

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Off-the-Shelf Inventory Software Doesn&apos;t Fit Your Workflow</h1>

      <h2>You tried off-the-shelf software. It was almost good.</h2>

      <p>Almost. But not quite. For example:</p>

      <ul className="list-disc list-inside mt-3 space-y-2">
        {almostProblems.en.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>So you adapt your workflow to the software</h2>

      <p>
        Bad move. You&apos;re forced to operate differently. Your team complains. Errors
        increase. Eventually, the software becomes a chore instead of a tool.
      </p>

      <div className="mt-4 pl-4 border-l-2 border-neutral-300 italic">
        <p className="text-sm">
          <strong>⚠️ Forcing your team into an ill-fitting tool</strong> creates friction
          and silent errors that compound over time.
        </p>
      </div>

      <h2>The 80/20 of off-the-shelf</h2>

      <p>
        80% of your needs = very well covered. 20% = not possible, or €500/month in
        plugins.
      </p>

      <h2>Custom software: built for you</h2>

      <p>
        Sizes AND colors? Done. VIP customers? Built in. Seasonal repricing? Automated.
        Custom alert thresholds? Ready.
      </p>

      <p className="mt-4 p-4 bg-neutral-50 border border-neutral-200 rounded">
        <strong>✓ Result:</strong><br />
        Zero compromise. The software adapts to you, not vice versa.
      </p>

      <h2>What about cost?</h2>

      <p>
        Usually cheaper than SaaS subscriptions over 2–3 years. And at the end, it&apos;s
        your system. No one raises prices. No one kills the feature you loved.
      </p>

      <hr />

      <p>
        <em>
          <strong>
            No commitment. We just analyze your processes in 20 minutes.
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
      <h1 className="blog-article-title">Le logiciel de stock générique ne rentre pas dans votre workflow</h1>

      <h2>Vous avez essayé un logiciel générique. Il était presque bon.</h2>

      <p>Presque. Mais pas tout à fait. Par exemple :</p>

      <ul className="list-disc list-inside mt-3 space-y-2">
        {almostProblems.fr.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Donc vous adaptez votre workflow au logiciel</h2>

      <p>
        Mauvais plan. Vous êtes forcé d&apos;opérer différemment. Vos équipes se plaignent.
        Les erreurs montent. À la fin, le logiciel devient une corvée au lieu d&apos;un
        outil.
      </p>

      <div className="mt-4 pl-4 border-l-2 border-neutral-300 italic">
        <p className="text-sm">
          <strong>⚠️ Forcer vos équipes dans un outil inadapté</strong> crée de la friction
          et des erreurs silencieuses qui s&apos;accumulent.
        </p>
      </div>

      <h2>Le 80/20 du logiciel générique</h2>

      <p>
        80 % de vos besoins = très bien couvert. 20 % = pas possible, ou 500 €/mois
        en plugins.
      </p>

      <h2>Un logiciel sur mesure : construit pour vous</h2>

      <p>
        Tailles ET couleurs ? OK. Clients VIP ? Intégré. Repricing saisonnier ?
        Automatisé. Seuils d&apos;alerte personnalisés ? Prêt.
      </p>

      <p className="mt-4 p-4 bg-neutral-50 border border-neutral-200 rounded">
        <strong>✓ Résultat :</strong><br />
        Zéro compromis. Le logiciel s&apos;adapte à vous, pas l&apos;inverse.
      </p>

      <h2>Et le coût ?</h2>

      <p>
        Généralement moins cher qu&apos;un abonnement SaaS sur 2–3 ans. Et à la fin,
        c&apos;est votre système. Personne n&apos;augmente les prix. Personne n&apos;arrête
        la feature que vous aimiez.
      </p>

      <hr />

      <p>
        <em>
          <strong>
            Sans engagement. On analyse juste vos process en 20 minutes.
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
