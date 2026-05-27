'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function CinqErreursSansLogicielGestionStockContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">The 5 mistakes costing you money without inventory management software</h1>

      <p>
        Manual inventory management rarely appears as a line item in your accounts.
        That is precisely the problem. The losses are real, but they are invisible —
        scattered across shrinkage write-offs, cancelled orders, wasted purchasing
        decisions, and hours of labour that generate no value. Here are the five most
        common, and what each one costs.
      </p>

      <h2>Mistake 1: The &ldquo;just in case&rdquo; overstock</h2>

      <p>
        Without reliable visibility into stock rotation, the natural response to
        uncertainty is to order more. Better to have too much than to run out, the
        thinking goes. The result is cash tied up in inventory that may not move
        for months — or at all.
      </p>

      <p>
        For perishable products, the cost is direct: unsold stock is written off.
        For fashion or seasonal items, it is stock that must eventually be sold at
        a discount, reducing margin. For any product, capital immobilised in
        warehouse space is capital not invested elsewhere.
      </p>

      <p>
        A dedicated system solves this by tracking rotation rates. You know exactly
        how fast each reference sells, which lets you order based on data rather than
        instinct.
      </p>

      <h2>Mistake 2: Invisible shrinkage</h2>

      <p>
        Shrinkage — the gap between theoretical stock and actual stock — has multiple
        sources: theft, breakage, administrative errors, supplier short-shipments.
        Without a system that logs every movement, you only discover the gap at the
        annual inventory count.
      </p>

      <p>
        By then, the damage is done and untraceable. You cannot identify when it
        happened, which location it came from, or which product category is most
        affected. You can only write it off and start again.
      </p>

      <p>
        A system with continuous stock tracking makes shrinkage visible as it happens.
        Discrepancies trigger alerts; the investigation happens in days rather than
        at year-end.
      </p>

      <h2>Mistake 3: Stockouts discovered too late</h2>

      <p>
        A product that runs out before you notice costs more than the missed sale.
        A customer who found what they wanted elsewhere does not come back — or comes
        back with lower expectations. In e-commerce, a product shown as available
        that turns out not to be triggers a cancellation, a refund, and often a
        negative review.
      </p>

      <p>
        Manual stock management has no alerting mechanism. You find out a product is
        out of stock when a customer complains or when someone physically checks the
        shelf. At that point, the fastest reorder still leaves a gap.
      </p>

      <p>
        Dedicated software sets reorder thresholds per product. When stock drops
        below the threshold, the system alerts — before the product runs out,
        not after.
      </p>

      <h2>Mistake 4: Multi-channel re-entry</h2>

      <p>
        A sale in the physical store. An online order. A stock receipt from a
        supplier. Each of these events, in a manual system, requires a human action
        to update the stock record. Each action is a potential error. Each delay
        between the event and the update is a window for overselling or wrong
        decisions.
      </p>

      <p>
        The time cost alone is significant — and we have detailed it separately.{' '}
        <Link href="/blog/temps-perdu-ressaisie-stock-manuel">
          The hidden cost of manual re-entry deserves its own calculation — we have
          laid it out here.
        </Link>
      </p>

      <p>
        Beyond time, re-entry errors compound. A transposed digit here, a missed
        update there — over a week of transactions, the stock record drifts
        progressively further from reality.
      </p>

      <h2>Mistake 5: Ordering blind</h2>

      <p>
        Without rotation history, purchasing decisions are made on instinct, habit,
        or supplier pressure. &ldquo;We always order 50 units of this.&rdquo;
        &ldquo;The rep says it&apos;s going well.&rdquo; &ldquo;Last Christmas
        we ran out, so let&apos;s double the order.&rdquo;
      </p>

      <p>
        These decisions are not necessarily wrong, but they are not informed.
        A dedicated system gives you the rotation rate of every reference, the
        average days-to-stockout, and historical trends by period and category.
        Purchasing decisions become data-driven rather than emotional — and the
        results show in margin.
      </p>

      <p>
        The cumulative cost of these five mistakes is rarely calculated because it
        is never attributed to a single cause. It shows up as slightly lower margin,
        slightly higher write-offs, slightly more staff time than expected. None of
        it is dramatic enough to trigger action — until the sum becomes impossible
        to ignore.
      </p>

      <hr />

      <p>
        <em>
          You want to assess what manual inventory management is actually costing you?{' '}
          <Link href="/contact">Contact us</Link> — we run the numbers on your specific
          situation and show you what a dedicated system would change.
        </em>
      </p>
    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Les 5 erreurs qui vous font perdre de l&apos;argent sans logiciel de gestion de stock</h1>

      <p>
        La gestion manuelle du stock n&apos;apparaît que rarement dans les comptes
        comme une perte identifiée. C&apos;est précisément le problème. Les fuites
        sont réelles, mais elles sont invisibles — disséminées dans des passages en
        pertes, des commandes annulées, des décisions d&apos;achat hasardeuses, et
        des heures de travail qui ne génèrent aucune valeur. Voici les cinq plus
        fréquentes, et ce que chacune coûte.
      </p>

      <h2>Erreur n°1 : le surstockage "au cas où"</h2>

      <p>
        Sans visibilité fiable sur la rotation du stock, la réponse naturelle à
        l&apos;incertitude est de commander plus. Mieux vaut trop que pas assez,
        raisonne-t-on. Le résultat : de la trésorerie immobilisée dans des références
        qui ne tourneront peut-être pas pendant des mois — ou jamais.
      </p>

      <p>
        Pour les produits périssables, le coût est direct : le stock invendu passe
        en pertes. Pour le prêt-à-porter ou les articles saisonniers, c&apos;est du
        stock qu&apos;on finira par brader, en réduisant la marge. Pour tout produit,
        le capital immobilisé en entrepôt est du capital qui n&apos;est pas investi
        ailleurs.
      </p>

      <p>
        Un logiciel dédié résout ce problème en traçant les taux de rotation. Vous
        savez exactement à quelle vitesse tourne chaque référence, ce qui vous
        permet de commander sur la base de données plutôt que d&apos;intuition.
      </p>

      <h2>Erreur n°2 : la démarque invisible</h2>

      <p>
        La démarque — l&apos;écart entre le stock théorique et le stock réel — a
        plusieurs sources : vols, casse, erreurs administratives, livraisons
        incomplètes. Sans un système qui trace chaque mouvement, vous ne découvrez
        l&apos;écart qu&apos;à l&apos;inventaire annuel.
      </p>

      <p>
        À ce moment-là, le mal est fait et introuvable. Vous ne pouvez pas identifier
        quand c&apos;est arrivé, quel emplacement est en cause, ni quelle catégorie
        de produits est la plus touchée. Vous ne pouvez que passer en pertes et
        recommencer.
      </p>

      <p>
        Un système avec suivi continu rend la démarque visible au fil de l&apos;eau.
        Les écarts déclenchent des alertes ; l&apos;investigation se fait en jours
        plutôt qu&apos;en fin d&apos;année.
      </p>

      <h2>Erreur n°3 : la rupture qu&apos;on découvre trop tard</h2>

      <p>
        Un produit en rupture avant qu&apos;on s&apos;en rende compte coûte plus
        que la vente manquée. Un client qui a trouvé ce qu&apos;il cherchait ailleurs
        ne revient pas — ou revient avec des attentes plus basses. En e-commerce,
        un produit affiché disponible qui ne l&apos;est pas déclenche une annulation,
        un remboursement, et souvent un avis négatif.
      </p>

      <p>
        La gestion manuelle ne dispose d&apos;aucun mécanisme d&apos;alerte. Vous
        apprenez qu&apos;un produit est épuisé quand un client se plaint ou quand
        quelqu&apos;un vérifie physiquement le rayon. À ce stade, la commande la plus
        rapide laisse quand même un creux.
      </p>

      <p>
        Un logiciel dédié définit des seuils de réapprovisionnement par produit.
        Quand le stock passe sous le seuil, le système alerte — avant la rupture,
        pas après.
      </p>

      <h2>Erreur n°4 : la ressaisie multi-canal</h2>

      <p>
        Une vente en boutique. Une commande en ligne. Une réception de marchandise.
        Chacun de ces événements, dans un système manuel, nécessite une action humaine
        pour mettre à jour le stock. Chaque action est une erreur potentielle. Chaque
        décalage entre l&apos;événement et la mise à jour est une fenêtre pour une
        survente ou une mauvaise décision.
      </p>

      <p>
        Le coût en temps est déjà significatif — et nous l&apos;avons détaillé
        séparément.{' '}
        <Link href="/blog/temps-perdu-ressaisie-stock-manuel">
          Le coût caché de la ressaisie manuelle mérite son propre calcul — nous
          l&apos;avons développé ici.
        </Link>
      </p>

      <p>
        Au-delà du temps, les erreurs de ressaisie s&apos;accumulent. Un chiffre
        transposé ici, une mise à jour oubliée là — sur une semaine de transactions,
        le stock s&apos;éloigne progressivement de la réalité.
      </p>

      <h2>Erreur n°5 : commander à l&apos;aveugle</h2>

      <p>
        Sans historique de rotation, les décisions d&apos;achat se prennent à
        l&apos;instinct, par habitude, ou sous la pression d&apos;un fournisseur.
        "On commande toujours 50 unités de ça." "Le commercial dit que ça marche
        bien." "À Noël dernier on était en rupture, on va doubler la commande."
      </p>

      <p>
        Ces décisions ne sont pas nécessairement mauvaises, mais elles ne sont pas
        éclairées. Un logiciel dédié vous donne le taux de rotation de chaque
        référence, le délai moyen avant rupture, et les tendances historiques par
        période et par catégorie. Les décisions d&apos;achat deviennent
        data-driven plutôt qu&apos;émotionnelles — et ça se voit sur la marge.
      </p>

      <p>
        Le coût cumulé de ces cinq erreurs est rarement calculé parce qu&apos;il
        n&apos;est jamais attribué à une seule cause. Il se manifeste par une marge
        légèrement plus faible, des passages en pertes légèrement plus élevés, un
        temps de travail légèrement supérieur aux attentes. Aucun n&apos;est assez
        dramatique pour déclencher une action — jusqu&apos;à ce que la somme devienne
        impossible à ignorer.
      </p>

      <hr />

      <p>
        <em>
          Vous souhaitez évaluer ce que la gestion manuelle vous coûte vraiment ?{' '}
          <Link href="/contact">Contactez-nous</Link> — nous chiffrons votre situation
          concrète et vous montrons ce qu&apos;un logiciel dédié changerait.
        </em>
      </p>
    </article>
  )
}
