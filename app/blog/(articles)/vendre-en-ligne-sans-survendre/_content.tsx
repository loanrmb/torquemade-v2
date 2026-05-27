'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function VendreEnLigneSansSurvendreContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Sell online without ever overselling: a guide to inventory synchronization</h1>

      <p>
        It is 2pm. A customer has just placed an order on your website for the last unit
        of a jacket. Thirty seconds later, a sales assistant in your store sells it to
        someone who walked in. Both transactions are valid. Only one product exists.
        You now have two customers expecting delivery of something you can only provide
        to one. This is overselling — and in the current retail environment, the cost
        goes well beyond the refund.
      </p>

      <h2>Why overselling has become intolerable</h2>

      <p>
        A few years ago, overselling was an inconvenience. A phone call, an apology,
        a refund — most customers understood. That tolerance has eroded significantly.
      </p>

      <p>
        Google reviews are public and permanent. A &ldquo;I ordered, they cancelled,
        complete waste of time&rdquo; review has a measurable impact on conversion
        for every future visitor who reads it. In competitive product categories,
        it takes very few of these to shift buying decisions.
      </p>

      <p>
        Marketplaces apply automatic penalties. On Amazon, Fnac Marketplace, and
        Cdiscount, a high order cancellation rate triggered by stock errors reduces
        your visibility in search results. At a certain threshold, your seller account
        can be suspended. The platform does not distinguish between your fault and
        a system failure — a cancelled order is a cancelled order.
      </p>

      <p>
        Returns and refunds have direct costs: payment processing fees, customer
        service time, and in some cases shipping costs that are not recoverable.
        For high-volume operations, the aggregate is material.
      </p>

      <h2>The 4 mechanisms that actually prevent overselling</h2>

      <p>
        <strong>1. Real-time shared stock between store and website.</strong> The only
        mechanism that fully prevents the scenario described above. When a product is
        sold in-store, the website updates immediately — not in an hour, not overnight.
        Any system with a lag is a window for overselling to occur. For the technical
        detail of how this works, see:{' '}
        <Link href="/blog/synchronisation-stock-temps-reel">
          real-time inventory sync: how it works and why it&apos;s essential
        </Link>
        .
      </p>

      <p>
        <strong>2. Cart reservation.</strong> When a customer adds a product to their
        cart, the stock is temporarily held — typically for 10 to 30 minutes. If the
        customer completes the purchase, the stock is consumed. If they abandon the
        cart, the hold expires and the stock is released. This prevents two customers
        from simultaneously checking out the last unit.
      </p>

      <p>
        Cart reservation adds complexity: held stock reduces apparent availability,
        which can suppress sales. The hold duration needs to be calibrated — too short
        and it does not protect; too long and it blocks legitimate purchases.
      </p>

      <p>
        <strong>3. Safety buffer.</strong> Rather than allowing the website to show
        1 unit available when 1 unit physically exists, the system is configured to
        display 0 (or &ldquo;sold out&rdquo;) once stock drops below a threshold.
        Simple to implement, effective, but inherently conservative — you will
        occasionally turn away customers for stock you do technically have.
      </p>

      <p>
        <strong>4. Multi-channel arbitration.</strong> When two sales arrive
        simultaneously — one online, one in-store — the system must decide which
        one to fulfil. A well-designed integration specifies this priority explicitly:
        which channel takes precedence, how the losing transaction is handled (immediate
        notification, alternative suggestion), and how the customer is informed.
      </p>

      <h2>Special case: unique, vintage, or rare items</h2>

      <p>
        When every item is a single unit — a vintage piece, a one-of-a-kind product,
        a used item in a specific condition — the stakes are higher. There is no
        possibility of reordering. An oversell on a unique item is a guaranteed
        cancellation with no alternative to offer.
      </p>

      <p>
        For this type of catalogue, real-time sync is not optional — it is the
        baseline. Cart reservation is strongly recommended. And the safety buffer
        should be set to remove the item from sale the moment a transaction starts
        processing, not just when it completes.
      </p>

      <h2>Special case: click &amp; collect</h2>

      <p>
        Click &amp; collect introduces a specific challenge: the customer reserves
        online and collects in-store. The stock must be held for that customer — but
        it should not prevent in-store browsing or last-minute sales of other products.
      </p>

      <p>
        The correct implementation creates a distinct reservation status: the item is
        neither available for further online purchase nor freely available for general
        in-store sale, but can be located and prepared for the specific customer.
        The reservation expires if the customer does not collect within a defined window.
        This requires stock status management beyond a simple quantity field — a
        distinction between &ldquo;available&rdquo;, &ldquo;reserved for collection&rdquo;,
        and &ldquo;committed to shipment&rdquo;.
      </p>

      <h2>What to avoid</h2>

      <p>
        <strong>Arbitrary safety buffers.</strong> Setting stock to display 0 when 5
        units remain &ldquo;just to be safe&rdquo; is a conservative approach that
        suppresses legitimate sales. If the real risk is 1–2 units, the buffer should
        reflect that.
      </p>

      <p>
        <strong>Overnight batch updates.</strong> A stock sync that runs once a day
        provides no protection against the most common overselling scenario. Any
        product with less than 24 hours of stock remaining is permanently at risk.
      </p>

      <p>
        <strong>Silent failures.</strong> A synchronisation that stops working
        without alerting anyone is worse than no synchronisation at all — because you
        believe you are protected when you are not. Monitoring and error notifications
        are not optional.
      </p>

      <hr />

      <p>
        <em>
          You have had overselling incidents and want to close the gap permanently?{' '}
          <Link href="/contact">Contact us</Link> — we audit your current setup and
          implement the right combination of sync, reservation, and buffer mechanisms
          for your specific channels.
        </em>
      </p>
    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Vendre en ligne sans jamais survendre : le guide de la synchronisation de stock</h1>

      <p>
        Il est 14h. Un client vient de commander la dernière unité d&apos;une veste
        sur votre site. Trente secondes plus tard, une vendeuse en boutique la vend
        à quelqu&apos;un qui vient d&apos;entrer. Les deux transactions sont valides.
        Il n&apos;existe qu&apos;un seul produit. Vous avez maintenant deux clients
        qui attendent une livraison que vous ne pouvez honorer qu&apos;une fois.
        C&apos;est une survente — et dans l&apos;environnement retail actuel, le coût
        dépasse largement le remboursement.
      </p>

      <h2>Pourquoi la survente est devenue intolérable en 2026</h2>

      <p>
        Il y a quelques années, une survente était un inconvénient. Un appel
        téléphonique, des excuses, un remboursement — la plupart des clients
        comprenaient. Cette tolérance s&apos;est considérablement érodée.
      </p>

      <p>
        Les avis Google sont publics et permanents. Un "J&apos;ai commandé, ils ont
        annulé, perte de temps totale" a un impact mesurable sur les conversions de
        chaque futur visiteur qui le lit. Dans les catégories de produits compétitives,
        il suffit de quelques avis de ce type pour infléchir les décisions
        d&apos;achat.
      </p>

      <p>
        Les marketplaces appliquent des pénalités automatiques. Sur Amazon, Fnac
        Marketplace et Cdiscount, un taux d&apos;annulation élevé causé par des erreurs
        de stock réduit votre visibilité dans les résultats. Au-delà d&apos;un certain
        seuil, votre compte vendeur peut être suspendu. La plateforme ne distingue pas
        votre erreur d&apos;une défaillance système — une annulation est une annulation.
      </p>

      <p>
        Les retours et remboursements ont des coûts directs : frais de traitement
        de paiement, temps service client, frais de port dans certains cas. Pour des
        opérations à volume, l&apos;addition est significative.
      </p>

      <h2>Les 4 mécanismes qui évitent vraiment la survente</h2>

      <p>
        <strong>1. Stock partagé en temps réel entre magasin et site.</strong> Le seul
        mécanisme qui prévient totalement le scénario décrit ci-dessus. Quand un produit
        se vend en boutique, le site se met à jour immédiatement — pas dans une heure,
        pas dans la nuit. Tout système avec un délai est une fenêtre d&apos;exposition
        à la survente. Pour le détail technique du temps réel :{' '}
        <Link href="/blog/synchronisation-stock-temps-reel">
          le fonctionnement technique du temps réel mérite son propre article —
          c&apos;est ici
        </Link>
        .
      </p>

      <p>
        <strong>2. Réservation au panier.</strong> Quand un client ajoute un produit
        à son panier, le stock est temporairement bloqué — généralement 10 à 30
        minutes. Si le client finalise l&apos;achat, le stock est consommé. S&apos;il
        abandonne son panier, le blocage expire et le stock est libéré. Cela empêche
        deux clients de valider simultanément la dernière unité.
      </p>

      <p>
        La réservation au panier ajoute de la complexité : le stock bloqué réduit la
        disponibilité affichée, ce qui peut freiner des ventes légitimes. La durée de
        blocage doit être calibrée — trop courte, elle ne protège pas ; trop longue,
        elle bloque des achats légitimes.
      </p>

      <p>
        <strong>3. Buffer de sécurité.</strong> Plutôt que de laisser le site afficher
        1 unité disponible quand 1 unité existe physiquement, le système est configuré
        pour afficher 0 (ou "épuisé") dès que le stock passe sous un seuil. Simple à
        mettre en place, efficace, mais conservateur par nature — vous refuserez
        parfois des clients pour du stock que vous avez techniquement.
      </p>

      <p>
        <strong>4. Arbitrage multi-canal.</strong> Quand deux ventes arrivent
        simultanément — une en ligne, une en boutique — le système doit décider
        laquelle honorer. Une intégration bien conçue spécifie cette priorité
        explicitement : quel canal est prioritaire, comment la transaction perdante
        est gérée (notification immédiate, suggestion alternative), et comment le
        client est informé.
      </p>

      <h2>Cas particulier : produits uniques, vintage, pièces rares</h2>

      <p>
        Quand chaque article est une unité unique — une pièce vintage, un produit
        one-of-a-kind, un article d&apos;occasion dans un état spécifique — les
        enjeux sont plus élevés. Il n&apos;y a pas de possibilité de réapprovisionner.
        Une survente sur un article unique est une annulation garantie sans alternative
        à proposer.
      </p>

      <p>
        Pour ce type de catalogue, la synchro temps réel n&apos;est pas optionnelle —
        c&apos;est le minimum. La réservation au panier est fortement recommandée.
        Et le buffer de sécurité doit retirer l&apos;article de la vente dès
        qu&apos;une transaction commence à être traitée, pas seulement quand elle
        est complète.
      </p>

      <h2>Cas particulier : click &amp; collect</h2>

      <p>
        Le click &amp; collect introduit un défi spécifique : le client réserve en
        ligne et récupère en boutique. Le stock doit être bloqué pour ce client —
        mais cela ne doit pas empêcher le shopping en boutique ni les ventes de
        dernière minute sur d&apos;autres produits.
      </p>

      <p>
        L&apos;implémentation correcte crée un statut de réservation distinct :
        l&apos;article n&apos;est ni disponible pour un nouvel achat en ligne ni
        librement disponible pour la vente en boutique, mais peut être localisé
        et préparé pour le client spécifique. La réservation expire si le client
        ne se présente pas dans une fenêtre définie. Cela nécessite une gestion
        des statuts de stock au-delà d&apos;un simple champ quantité — une distinction
        entre "disponible", "réservé pour retrait" et "affecté à une expédition".
      </p>

      <h2>Ce qu&apos;il faut éviter</h2>

      <p>
        <strong>Les buffers arbitraires.</strong> Afficher 0 quand il reste 5 unités
        "par précaution" est une approche conservatrice qui freine des ventes légitimes.
        Si le risque réel est de 1 à 2 unités, le buffer doit le refléter.
      </p>

      <p>
        <strong>Les mises à jour batch nocturnes.</strong> Une synchro de stock qui
        tourne une fois par jour n&apos;offre aucune protection contre le scénario
        de survente le plus courant. Tout produit avec moins de 24 heures de stock
        restant est en permanence exposé.
      </p>

      <p>
        <strong>L&apos;absence de notification d&apos;erreur.</strong> Une
        synchronisation qui s&apos;arrête de fonctionner sans alerter personne est
        pire qu&apos;aucune synchronisation — parce que vous croyez être protégé
        alors que vous ne l&apos;êtes pas. La surveillance et les alertes d&apos;erreur
        ne sont pas optionnelles.
      </p>

      <hr />

      <p>
        <em>
          Vous avez eu des incidents de survente et voulez combler la faille
          définitivement ?{' '}
          <Link href="/contact">Contactez-nous</Link> — nous auditons votre
          configuration actuelle et mettons en place la bonne combinaison de synchro,
          réservation et buffer selon vos canaux spécifiques.
        </em>
      </p>
    </article>
  )
}
