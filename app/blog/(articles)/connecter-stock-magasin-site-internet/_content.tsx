'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function ConnecterStockMagasinSiteInternetContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">How do I connect my store inventory to my website?</h1>

      <p>
        Your point-of-sale shows 3 units available. Your website sells 5 during the day.
        The result: orders you can&apos;t fulfil, disappointed customers, and hours spent
        dealing with the fallout. This gap between physical and online stock is one of the
        most common problems for retailers selling across multiple channels. There are
        concrete solutions to eliminate it.
      </p>

      <h2>The Problem: Two Inventories Living Separately</h2>

      <p>
        Most retailers who have opened an e-commerce site alongside their physical store
        end up with inventory in two places. The point-of-sale system knows what&apos;s
        on the shelf. The website&apos;s back-office knows what is theoretically available
        online. These two systems don&apos;t communicate.
      </p>

      <p>
        Every in-store sale that isn&apos;t reflected online creates a gap. Every online
        order not reflected in the till creates another. By end of day, the two inventories
        are out of sync. By end of week, the problem can be unmanageable.
      </p>

      <p>
        The consequences are real: overselling (selling online an item already out of
        stock in-store), time-consuming manual updates, inevitable human error, and a
        degraded customer experience when you have to call someone to cancel their order.
      </p>

      <h2>Three Methods to Connect Your Inventory</h2>

      <p><strong>1. Manual entry</strong></p>

      <p>
        This is where most retailers start when they have no technical integration in
        place. After each in-store sale, someone updates the stock on the website. After
        each online order, someone adjusts the stock in the point-of-sale system.
      </p>

      <p>
        This works when volume is very low and one person manages both channels. Beyond
        that, it becomes unmanageable. It leads to forgotten updates, errors, and takes
        time that nobody has in a busy day.
      </p>

      <p><strong>2. Scheduled CSV export / import</strong></p>

      <p>
        An improvement over manual entry: you regularly export stock from the
        point-of-sale system (CSV file), then import it to the website. Some tools allow
        this to be scheduled automatically every hour or overnight.
      </p>

      <p>
        Better, but not enough. Stock remains out of sync between exports. If an item
        sells in-store at 10am and the next export runs at 6pm, the website shows
        incorrect stock all day. For high-turnover products or limited quantities, this
        delay is a real problem.
      </p>

      <p><strong>3. Real-time synchronisation via API</strong></p>

      <p>
        This is the only method that eliminates the problem at its source. As soon as a
        sale happens — in-store or online — stock is updated instantly in both systems.
        No delay, no possible gap.
      </p>

      <p>
        This approach relies on a direct connection between your point-of-sale system
        (or ERP) and your e-commerce site, via APIs. It is more technical to set up,
        but once in place it runs on its own.
      </p>

      <h2>How Real-Time Synchronisation Works</h2>

      <p>
        The central mechanism is called a webhook. In practice: when a sale is recorded
        in your point-of-sale system, it automatically sends a notification to your
        e-commerce site. The site receives the information, updates the corresponding
        stock level, and the new count is immediately visible online.
      </p>

      <p>
        The same logic works in reverse: an order placed on the website triggers a
        notification to your management system, which adjusts the stock available
        in-store.
      </p>

      <p>
        This flow of information passes through an API — an interface that allows two
        pieces of software to communicate securely and in a standardised way. Neither
        the retailer nor their team needs to intervene: everything happens automatically,
        in the background, in a matter of seconds.
      </p>

      <h2>Compatible Software</h2>

      <p>
        On the point-of-sale and ERP side, the most common solutions we encounter are
        Cegid, Hiboutik, EBP, and Tactill. These tools all have APIs or data exports
        that allow them to connect to an e-commerce site.
      </p>

      <p>
        On the e-commerce side, Shopify currently offers the best integration ecosystem
        — native or third-party connectors exist for the vast majority of point-of-sale
        systems. WooCommerce (WordPress) and PrestaShop are also compatible, with
        integrations available but often more complex to maintain. A custom-built site
        in Next.js or another modern framework can be connected to any system that
        exposes an API.
      </p>

      <p>
        In all cases, feasibility depends on two factors: does your point-of-sale system
        expose an API? Does your e-commerce site allow external integrations? If the
        answer to both is yes, the connection is possible.
      </p>

      <h2>What It Concretely Changes</h2>

      <p>Once synchronisation is in place, the effects are immediate.</p>

      <p>
        Overselling disappears. An item sold in-store automatically drops to zero on
        the website. Your customer cannot order something that is no longer available.
      </p>

      <p>
        Manual re-entry is eliminated. Your team no longer spends time updating two
        systems in parallel. That time is available for something else.
      </p>

      <p>
        Stock visibility becomes unified. Regardless of the channel — store, website,
        marketplace — your actual stock level is visible in one place, permanently up
        to date. This is the foundation of effective multi-channel management.
      </p>

      <p>
        And from the customer&apos;s perspective, the experience improves: the
        availability information shown on the site is accurate. Trust is built.
      </p>

      <hr />

      <p>
        <em>
          You have a physical store and an e-commerce site that don&apos;t communicate?{' '}
          <Link href="/contact">Contact us</Link> — we&apos;ll analyse your current setup
          and propose the right connection for your point-of-sale system and your site.
        </em>
      </p>
    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Comment connecter mon stock magasin à mon site internet ?</h1>

      <p>
        Votre logiciel de caisse affiche 3 unités disponibles. Votre site en vend 5
        dans la journée. Résultat : des commandes impossibles à honorer, des clients
        déçus et des heures passées à gérer l&apos;après. Ce décalage entre stock
        physique et stock en ligne est l&apos;un des problèmes les plus fréquents des
        commerces qui vendent sur plusieurs canaux. Il existe des solutions concrètes
        pour l&apos;éliminer.
      </p>

      <h2>Le problème : deux stocks qui vivent séparément</h2>

      <p>
        Dans la plupart des commerces qui ont ouvert un site e-commerce en plus de
        leur boutique physique, le stock existe en double. Le logiciel de caisse
        connaît ce qui est en rayon. Le back-office du site connaît ce qui est
        théoriquement disponible en ligne. Ces deux systèmes ne se parlent pas.
      </p>

      <p>
        Chaque vente en magasin qui n&apos;est pas répercutée en ligne crée un écart.
        Chaque commande web non répercutée en caisse crée un autre écart. En fin de
        journée, les deux stocks sont désynchronisés. En fin de semaine, le problème
        est parfois ingérable.
      </p>

      <p>
        Les conséquences sont réelles : surventes (on vend en ligne un article déjà
        épuisé en boutique), ressaisies manuelles chronophages, erreurs humaines
        inévitables, et une expérience client dégradée quand on doit rappeler
        quelqu&apos;un pour annuler sa commande.
      </p>

      <h2>Les trois méthodes pour connecter votre stock</h2>

      <p><strong>1. La saisie manuelle</strong></p>

      <p>
        C&apos;est le point de départ de la plupart des commerces qui ne disposent
        pas encore d&apos;intégration technique. Après chaque vente en magasin,
        quelqu&apos;un met à jour le stock sur le site. Après chaque commande web,
        quelqu&apos;un ajuste le stock dans le logiciel de caisse.
      </p>

      <p>
        Cette méthode fonctionne quand le volume est très faible et qu&apos;une seule
        personne gère les deux canaux. Au-delà, elle devient ingérable. Elle est source
        d&apos;oublis, d&apos;erreurs, et mobilise un temps que personne n&apos;a
        vraiment dans une journée chargée.
      </p>

      <p><strong>2. L&apos;export / import CSV programmé</strong></p>

      <p>
        Une amélioration par rapport à la saisie manuelle : on exporte régulièrement
        le stock depuis le logiciel de caisse (fichier CSV), puis on l&apos;importe
        sur le site. Certains outils permettent de programmer cette opération
        automatiquement toutes les heures ou toutes les nuits.
      </p>

      <p>
        C&apos;est mieux, mais pas suffisant. Le stock reste désynchronisé entre deux
        exports. Si un article se vend en magasin à 10h et que le prochain export est
        à 18h, le site affiche un stock erroné pendant toute la journée. Pour des
        produits à fort turnover ou en quantités limitées, ce délai est problématique.
      </p>

      <p><strong>3. La synchronisation temps réel via API</strong></p>

      <p>
        C&apos;est la seule méthode qui élimine le problème à la source. Dès
        qu&apos;une vente a lieu — en magasin ou en ligne — le stock est mis à jour
        instantanément dans les deux systèmes. Pas de délai, pas d&apos;écart possible.
      </p>

      <p>
        Cette approche repose sur une connexion directe entre votre logiciel de caisse
        (ou ERP) et votre site e-commerce, via des API. C&apos;est plus technique à
        mettre en place, mais une fois installé, cela tourne seul.
      </p>

      <h2>Comment fonctionne une synchronisation temps réel</h2>

      <p>
        Le mécanisme central s&apos;appelle un webhook. Concrètement : quand une vente
        est enregistrée dans votre logiciel de caisse, ce dernier envoie automatiquement
        une notification à votre site e-commerce. Le site reçoit l&apos;information,
        met à jour le stock correspondant, et le nouveau niveau est immédiatement visible
        en ligne.
      </p>

      <p>
        La même logique fonctionne dans l&apos;autre sens : une commande passée sur le
        site déclenche une notification vers votre logiciel de gestion, qui ajuste le
        stock disponible en boutique.
      </p>

      <p>
        Ce flux d&apos;information passe par une API — une interface qui permet à deux
        logiciels de communiquer de façon sécurisée et standardisée. Ni le commerçant
        ni ses équipes n&apos;ont besoin d&apos;intervenir : tout se passe
        automatiquement, en arrière-plan, en quelques secondes.
      </p>

      <h2>Les logiciels compatibles</h2>

      <p>
        Du côté des logiciels de caisse et ERP, les solutions les plus fréquemment
        rencontrées chez les commerçants que nous accompagnons sont Cegid, Hiboutik,
        EBP et Tactill. Ces outils disposent tous d&apos;API ou d&apos;exports de
        données qui permettent de les connecter à un site e-commerce.
      </p>

      <p>
        Du côté des sites e-commerce, Shopify est la plateforme qui offre
        aujourd&apos;hui le meilleur écosystème d&apos;intégrations — des connecteurs
        natifs ou tiers existent pour la grande majorité des logiciels de caisse.
        WooCommerce (WordPress) et PrestaShop sont également compatibles, avec des
        intégrations disponibles mais souvent plus complexes à maintenir. Un site sur
        mesure développé en Next.js ou autre framework moderne peut quant à lui être
        connecté à n&apos;importe quel système qui expose une API.
      </p>

      <p>
        Dans tous les cas, la faisabilité dépend de deux facteurs : votre logiciel de
        caisse expose-t-il une API ? Votre site e-commerce permet-il les intégrations
        externes ? Si les deux réponses sont oui, la connexion est possible.
      </p>

      <h2>Ce que ça change concrètement</h2>

      <p>Une fois la synchronisation en place, les effets sont immédiats.</p>

      <p>
        Les surventes disparaissent. Un article vendu en magasin passe automatiquement
        à zéro sur le site. Votre client ne peut pas commander quelque chose qui
        n&apos;est plus disponible.
      </p>

      <p>
        La ressaisie manuelle est éliminée. Vos équipes ne passent plus de temps à
        mettre à jour deux systèmes en parallèle. Ce temps est disponible pour
        autre chose.
      </p>

      <p>
        La vision du stock devient unifiée. Peu importe le canal — boutique, site,
        marketplace — votre niveau de stock réel est visible en un seul endroit,
        à jour en permanence. C&apos;est la base d&apos;une gestion multi-canal efficace.
      </p>

      <p>
        Et du côté client, l&apos;expérience est meilleure : les informations de
        disponibilité affichées sur le site sont fiables. La confiance s&apos;installe.
      </p>

      <hr />

      <p>
        <em>
          Vous avez un magasin physique et un site e-commerce qui ne se parlent pas ?{' '}
          <Link href="/contact">Contactez-nous</Link> — nous analysons votre configuration
          actuelle et vous proposons la connexion adaptée à votre logiciel de caisse et
          à votre site.
        </em>
      </p>
    </article>
  )
}
