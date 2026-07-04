'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function PourquoiSynchroStockShopifyErpPlanteContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">
        Why Shopify-ERP Stock Sync Breaks, and How to Prevent It
      </h1>

      <p>
        An ERP-Shopify integration that passes its first tests is not necessarily one that
        holds up over time. Stock discrepancies, overselling, and duplicate orders appear
        days or weeks after launch, often on a busy day, never at a convenient time.
        The root causes are almost always the same six architecture mistakes. Understanding
        them before you build saves you from discovering them in production.
      </p>

      <h2>The False Impression That &ldquo;The Integration Is Done&rdquo;</h2>

      <p>
        A first successful sync is the easiest part. You push stock from the ERP to Shopify,
        you place a test order, it shows up in the ERP, the integration works. What this
        test does not cover is concurrency, failure scenarios, and edge cases that only
        appear under real load.
      </p>

      <p>
        The integration that works in a controlled environment often degrades silently when
        multiple events fire simultaneously: two customers buying the last unit at the same
        time, a webhook arriving while the ERP is doing a nightly batch, a product update
        mid-sync. Robustness is not a bonus feature. It is the integration.
      </p>

      <h2>Mistake 1: One-Way Synchronisation</h2>

      <p>
        The most common architecture pushes stock from the ERP to Shopify and stops there.
        It solves the stock display problem but leaves orders entirely unhandled. Orders
        placed on Shopify never flow back into the ERP automatically.
      </p>

      <p>
        The result is manual re-entry: someone in the back office copies each Shopify order
        into the ERP by hand. At low volumes this is tolerable. At scale, it is unsustainable
        and error-prone. A complete integration is bidirectional by design.
      </p>

      <h2>Mistake 2: No Concurrency Conflict Handling</h2>

      <p>
        When two customers add the last unit in stock to their cart and check out within
        seconds of each other, both transactions can succeed if there is no atomic stock
        check. Shopify decrements its own inventory, but if the ERP stock is only updated
        asynchronously after the fact, there is a window during which the ERP still shows
        one unit available, enough for both orders to go through.
      </p>

      <p>
        The fix requires an atomic availability check at order validation time, not just
        an inventory sync job running on a schedule.
      </p>

      <h2>Mistake 3: Webhooks Without Retry</h2>

      <p>
        Shopify sends webhooks as fire-and-forget HTTP requests. If your server is down,
        restarting, or slow to respond, the event is delivered once and not retried by
        Shopify beyond a limited window. An order created during a server maintenance
        window may never reach your ERP.
      </p>

      <p>
        The solution is a persistent queue between the webhook endpoint and the ERP
        processing logic. Tools like Redis with BullMQ, or any message broker, ensure
        that no event is lost even if the ERP-side processor is temporarily unavailable.
      </p>

      <h2>Mistake 4: Approximate SKU Mapping</h2>

      <p>
        A product with three sizes and two colours generates six Shopify variants. Each
        variant has its own SKU, its own inventory level, and its own ERP reference. If
        the mapping between Shopify variant SKUs and ERP product references is not
        explicit and tested variant by variant, a sale of size M in red may decrement
        the stock of size L in blue in the ERP.
      </p>

      <p>
        SKU mapping is not a one-time setup task. It needs to be maintained whenever
        new variants are added or existing references are renamed in the ERP.
      </p>

      <h2>Mistake 5: Ignoring Propagation Delays</h2>

      <p>
        A stock update in the ERP does not appear on Shopify instantaneously. Depending
        on the sync frequency, scheduled job every 15 minutes, every hour, or triggered
        on batch completion. The delay between an in-store sale and the corresponding
        Shopify inventory update can be significant.
      </p>

      <p>
        For low-turnover products this is irrelevant. For a flash sale or a product with
        only two or three units left, a 15-minute propagation delay is long enough to
        generate overselling. The acceptable delay must be defined per product category
        and built into the sync architecture.
      </p>

      <h2>Mistake 6: No Monitoring or Alerts</h2>

      <p>
        Without monitoring, a broken sync is discovered when a customer complains about
        an order they placed on a product that has been out of stock for three days. By
        that point, the damage to inventory, customer trust, and customer service time
        is already done.
      </p>

      <p>
        Structured logs, error rate alerts, and a health dashboard for the integration
        are not optional infrastructure. They are what allow you to detect and fix a sync
        failure before it creates customer-facing problems.
      </p>

      <h2>What a Sound Architecture Includes</h2>

      <p>
        A reliable Shopify-ERP integration is bidirectional, stock and prices from ERP
        to Shopify, orders and customer records from Shopify to ERP. It uses a persistent
        queue with retry logic and a dead letter queue for events that fail repeatedly.
        The SKU mapping is explicit, versioned, and tested across all variants. Propagation
        delays are defined and acceptable per product category. And the whole system emits
        structured logs and fires alerts on any error above a defined threshold.
      </p>

      <p>
        None of these requirements are exotic. They are the standard features of a
        production-grade integration.
      </p>

      <hr />

      <p>
        <em>
          Your Shopify-ERP sync produces stock discrepancies or missed orders?{' '}
          <Link href="/contact">Contact us</Link>: we will audit your current architecture
          and identify the exact failure points before they cost you further.
        </em>
      </p>
    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">
        Pourquoi la synchronisation stock Shopify-ERP plante, et comment l&apos;éviter
      </h1>

      <p>
        Une intégration ERP-Shopify qui passe ses premiers tests n&apos;est pas nécessairement
        une intégration qui tient dans la durée. Les décalages de stock, les surventes et
        les doublons de commande apparaissent des jours ou des semaines après le lancement,
        souvent un jour de forte activité, jamais à un moment commode. Les causes profondes
        sont presque toujours les mêmes six erreurs d&apos;architecture. Les comprendre
        avant de construire vous évite de les découvrir en production.
      </p>

      <h2>La fausse impression que &laquo; l&apos;intégration est faite &raquo;</h2>

      <p>
        Un premier test de synchronisation réussi est la partie la plus facile. Vous poussez
        le stock de l&apos;ERP vers Shopify, vous passez une commande de test, elle apparaît
        dans l&apos;ERP: l&apos;intégration fonctionne. Ce test ne couvre pas la
        concurrence, les scénarios d&apos;échec et les cas limites qui n&apos;apparaissent
        que sous charge réelle.
      </p>

      <p>
        L&apos;intégration qui fonctionne dans un environnement contrôlé se dégrade souvent
        silencieusement quand plusieurs événements se déclenchent simultanément : deux clients
        achetant le dernier article en même temps, un webhook arrivant pendant que l&apos;ERP
        effectue un batch nocturne, une mise à jour produit en cours de synchronisation.
        La robustesse n&apos;est pas une fonctionnalité bonus. C&apos;est l&apos;intégration.
      </p>

      <h2>Erreur 1 : synchronisation unidirectionnelle</h2>

      <p>
        L&apos;architecture la plus courante pousse le stock de l&apos;ERP vers Shopify et
        s&apos;arrête là. Elle règle le problème d&apos;affichage du stock mais laisse les
        commandes entièrement non gérées. Les commandes passées sur Shopify ne remontent
        jamais automatiquement dans l&apos;ERP.
      </p>

      <p>
        Le résultat est une ressaisie manuelle : quelqu&apos;un en back-office recopie chaque
        commande Shopify dans l&apos;ERP à la main. À faible volume, c&apos;est tolérable.
        À grande échelle, c&apos;est insoutenable et source d&apos;erreurs. Une intégration
        complète est bidirectionnelle par conception.
      </p>

      <h2>Erreur 2 : pas de gestion des conflits de concurrence</h2>

      <p>
        Quand deux clients ajoutent le dernier article en stock à leur panier et passent
        commande à quelques secondes d&apos;intervalle, les deux transactions peuvent aboutir
        si aucune vérification atomique du stock n&apos;est en place. Shopify décrémente
        son propre inventaire, mais si le stock ERP n&apos;est mis à jour qu&apos;en
        asynchrone après coup, il existe une fenêtre pendant laquelle l&apos;ERP affiche
        encore une unité disponible, suffisant pour que les deux commandes passent.
      </p>

      <p>
        La correction exige une vérification atomique de la disponibilité au moment de la
        validation de la commande, pas seulement un job de synchro tournant sur un
        planning.
      </p>

      <h2>Erreur 3 : webhooks sans retry</h2>

      <p>
        Shopify envoie les webhooks en fire-and-forget. Si votre serveur est en panne,
        en redémarrage, ou trop lent à répondre, l&apos;événement est livré une fois et
        Shopify ne le réessaie que dans une fenêtre limitée. Une commande créée pendant
        une maintenance serveur peut ne jamais atteindre votre ERP.
      </p>

      <p>
        La solution est une file d&apos;attente persistante entre l&apos;endpoint webhook
        et la logique de traitement côté ERP. Des outils comme Redis avec BullMQ, ou
        n&apos;importe quel message broker, garantissent qu&apos;aucun événement ne se perd
        même si le processeur côté ERP est temporairement indisponible.
      </p>

      <h2>Erreur 4 : mapping de SKU approximatif</h2>

      <p>
        Un produit avec trois tailles et deux couleurs génère six variantes Shopify. Chaque
        variante a son propre SKU, son propre niveau de stock et sa propre référence dans
        l&apos;ERP. Si le mapping entre les SKU des variantes Shopify et les références
        produit de l&apos;ERP n&apos;est pas explicite et testé variante par variante, une
        vente de taille M en rouge peut décrémenter le stock de taille L en bleu dans l&apos;ERP.
      </p>

      <p>
        Le mapping SKU n&apos;est pas une tâche de configuration ponctuelle. Il doit être
        maintenu chaque fois que de nouvelles variantes sont ajoutées ou que des références
        existantes sont renommées dans l&apos;ERP.
      </p>

      <h2>Erreur 5 : ignorer les délais de propagation</h2>

      <p>
        Une mise à jour de stock dans l&apos;ERP n&apos;apparaît pas instantanément sur
        Shopify. Selon la fréquence de synchronisation, job planifié toutes les 15 minutes,
        toutes les heures, ou déclenché en fin de batch, le délai entre une vente en
        boutique et la mise à jour correspondante de l&apos;inventaire Shopify peut être
        significatif.
      </p>

      <p>
        Pour les produits à faible rotation, c&apos;est sans conséquence. Pour une vente
        flash ou un produit dont il ne reste que deux ou trois unités, un délai de
        propagation de 15 minutes suffit à générer des surventes. Le délai acceptable
        doit être défini par catégorie de produit et intégré dans l&apos;architecture
        de synchronisation.
      </p>

      <h2>Erreur 6 : aucun monitoring ni alerte</h2>

      <p>
        Sans supervision, une synchro cassée se découvre quand un client se plaint
        d&apos;une commande passée sur un produit en rupture depuis trois jours. À ce
        stade, les dégâts en termes d&apos;inventaire, de confiance client et de temps
        service client sont déjà faits.
      </p>

      <p>
        Des logs structurés, des alertes sur les taux d&apos;erreur et un dashboard de
        santé de l&apos;intégration ne sont pas une infrastructure optionnelle. Ce sont
        ce qui permet de détecter et corriger une défaillance de synchro avant
        qu&apos;elle crée des problèmes visibles par les clients.
      </p>

      <h2>Ce qu&apos;une bonne architecture inclut systématiquement</h2>

      <p>
        Une intégration Shopify-ERP fiable est bidirectionnelle, stock et prix de
        l&apos;ERP vers Shopify, commandes et fiches clients de Shopify vers l&apos;ERP.
        Elle utilise une file d&apos;attente persistante avec logique de retry et dead
        letter queue pour les événements qui échouent de façon répétée. Le mapping SKU
        est explicite, versionné et testé sur toutes les variantes. Les délais de
        propagation sont définis et acceptables par catégorie de produit. Et le tout
        émet des logs structurés et déclenche des alertes sur toute erreur au-dessus
        d&apos;un seuil défini.
      </p>

      <p>
        Aucune de ces exigences n&apos;est exotique. Ce sont les caractéristiques standard
        d&apos;une intégration prête pour la production.
      </p>

      <hr />

      <p>
        <em>
          Votre synchro Shopify-ERP produit des décalages de stock ou des commandes
          manquées ?{' '}
          <Link href="/contact">Contactez-nous</Link>: nous auditons votre architecture
          actuelle et identifions les points de défaillance exacts avant qu&apos;ils vous
          coûtent davantage.
        </em>
      </p>
    </article>
  )
}
