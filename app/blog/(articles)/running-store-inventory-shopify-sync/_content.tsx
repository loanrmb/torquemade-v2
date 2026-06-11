'use client'

import { useLang } from '@/components/app-provider'

export function RunningStoreInventorySyncContent() {
  const lang = useLang()

  const listItems = {
    fr: [
      'Votre caisse/logiciel stocke les quantités',
      'Une connexion API synchronise vers Shopify toutes les heures (ou à chaque vente si vous préférez)',
      'Shopify affiche toujours la vraie quantité. Les survendus disparaissent.',
    ],
    en: [
      'Your POS/software tracks quantities',
      'An API connection syncs to Shopify every hour (or every sale if you prefer)',
      'Shopify always shows the true count. Overselling disappears.',
    ],
  }

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Real-Time Stock Sync: Running Store Inventory to Shopify</h1>

      <h2>You sell in-store AND online. Your stock is never accurate.</h2>

      <p>
        Friday at 10am, you have 5 pairs of trail shoes size 42 in stock. A customer
        buys 2 in-store. You ring it up. But your Shopify still says 5 in stock. At 11am,
        someone orders 4 pairs online. Oversold.
      </p>

      <h2>You promise delivery you can&apos;t actually deliver</h2>

      <p>
        Overselling means shipping delays, excuses, refunds, frustrated customers. A running
        store that oversells expensive shoes loses trust. And that person tells 20 other
        runners that you&apos;re unreliable.
      </p>

      <div className="mt-6 pl-4 border-l-2 border-neutral-300 italic">
        <p className="font-semibold">⚠️ Overselling = lost credibility</p>
        <p className="text-sm mt-2">Every unfulfilled order creates an unhappy customer.</p>
      </div>

      <h2>The solution: real-time sync</h2>

      <p>
        Your POS (or inventory system) talks directly to Shopify. Every in-store sale
        automatically reduces online inventory. Every online order decreases what the
        store sees.
      </p>

      <h2>How it works</h2>

      <p>Three steps:</p>

      <ul className="list-disc list-inside mt-3 space-y-2">
        {listItems.en.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>Bonus: you save time</h2>

      <p>
        No more manual stock checks at end of day. No more emails saying &ldquo;I ordered
        but it looks out of stock.&rdquo; Everything is automatic.
      </p>

      <p className="mt-4 p-4 bg-neutral-50 border border-neutral-200 rounded">
        <strong>✓ Result:</strong><br />
        Synced stock = zero overselling = happy customers = better reputation.
      </p>

      <hr />

      <p>
        <em>
          <strong>
            We explain the technical setup in 20 minutes. You&apos;ll know exactly what it costs
            and how long it takes.
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
      <h1 className="blog-article-title">Synchronisation stock en temps réel : du magasin à Shopify</h1>

      <h2>Vous vendez en magasin ET en ligne. Votre stock n&apos;est jamais à jour.</h2>

      <p>
        Vendredi à 10h, vous avez 5 paires de chaussures de trail taille 42 en magasin.
        Un client en achète 2 en boutique. Vous l&apos;enregistrez à la caisse. Mais votre
        Shopify dit toujours 5 en stock. À 11h, quelqu&apos;un commande 4 paires en ligne.
        Survendu.
      </p>

      <h2>Vous promettez une livraison que vous ne pouvez pas honorer</h2>

      <p>
        Survendu = retard de livraison, excuses, remboursements, clients frustrés. Un
        magasin de running qui survend une paire de chaussures chère perd la confiance.
        Et cette personne raconte à ses 20 copains de running que vous n&apos;êtes pas
        fiable.
      </p>

      <div className="mt-6 pl-4 border-l-2 border-neutral-300 italic">
        <p className="font-semibold">⚠️ Survendu = perte de crédibilité</p>
        <p className="text-sm mt-2">Chaque commande non honorée crée un client mécontent.</p>
      </div>

      <h2>La solution : synchronisation temps réel</h2>

      <p>
        Votre caisse (ou votre ERP) parle directement à Shopify. À chaque vente en
        magasin, l&apos;inventaire en ligne baisse automatiquement. À chaque commande en
        ligne, c&apos;est le magasin qui voit le décompte.
      </p>

      <h2>Comment ça marche</h2>

      <p>Trois étapes :</p>

      <ul className="list-disc list-inside mt-3 space-y-2">
        {listItems.fr.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>Bonus : vous regagnez du temps</h2>

      <p>
        Plus besoin de vérifier manuellement le stock le soir. Plus d&apos;emails « j&apos;ai
        commandé mais ça semble pas être en stock ». Tout est automatique.
      </p>

      <p className="mt-4 p-4 bg-neutral-50 border border-neutral-200 rounded">
        <strong>✓ Résultat :</strong><br />
        Stock synchronisé = zéro survendu = clients heureux = meilleure réputation.
      </p>

      <hr />

      <p>
        <em>
          <strong>
            On explique l&apos;architecture technique en 20 minutes. Vous saurez exactement ce
            que ça coûte et combien de temps ça prend.
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
