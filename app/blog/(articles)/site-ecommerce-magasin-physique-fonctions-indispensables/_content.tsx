'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function SiteEcommerceMagasinPhysiqueFonctionsContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">
        E-Commerce Site for a Physical Store: The 5 Essential Features
      </h1>

      <p>
        Building an e-commerce site when you already have a physical store is not the
        same exercise as launching a pure online retailer. The priorities are different,
        the constraints are different, and the features that matter are not the same.
        Most e-commerce platforms are designed for pure players. If you force your
        brick-and-mortar reality into a template built for them, you will quickly
        run into the limits.
      </p>

      <h2>What Pure Players Don&apos;t Have to Manage, and You Do</h2>

      <p>
        A pure-play online retailer has a single inventory: the one in their warehouse,
        managed by their e-commerce platform. Every sale, every return, every adjustment
        happens in one system.
      </p>

      <p>
        A physical store merchant operates two channels simultaneously. Customers buy
        in-store. Customers buy online. Both channels draw from the same physical stock.
        If those two channels are not connected, any sale on one channel creates a potential
        problem on the other. A customer who orders online a product sold in-store an hour
        earlier, before the site was updated, gets a cancellation. That is the baseline
        problem to solve.
      </p>

      <h2>Feature 1: Real-Time Stock</h2>

      <p>
        The &ldquo;available in store&rdquo; status updated once per night is not real-time
        stock. It is a static snapshot that becomes wrong the moment the first sale of
        the day happens.
      </p>

      <p>
        Real-time stock means every in-store sale immediately decrements the quantity
        shown on the website. The mechanism requires a live connection between the
        point-of-sale system and the e-commerce site, a webhook or an API call triggered
        by each transaction. For products with low quantities or high turnover, this
        connection is not optional.
      </p>

      <h2>Feature 2: Click &amp; Collect with Availability Confirmation</h2>

      <p>
        Click and collect (order online, pick up in store) is a strong selling point
        for physical store merchants. But it only works if the availability check happens
        at the moment the order is placed, not from a cache updated the previous night.
      </p>

      <p>
        Allowing a customer to order a product for in-store pickup, only to call them
        the next day to say it is no longer available, is worse than not offering click
        and collect at all. The confirmation must be live: the order succeeds only if
        the stock is confirmed available at that instant.
      </p>

      <h2>Feature 3: Product Pages Linked to the ERP</h2>

      <p>
        Price, variants, and availability must come from the ERP, not from a manual
        entry in the back-office of the e-commerce site. When a promotion is applied
        in-store, it must appear online automatically. When a new variant is added to
        the ERP, it must become available online without a separate update.
      </p>

      <p>
        Manual synchronisation of product data between two back-offices is a source
        of errors and a time sink. Price inconsistencies between the physical store
        and the website undermine customer trust and generate complaints. The ERP is
        the single source of truth for product data.
      </p>

      <h2>Feature 4: Intelligent Out-of-Stock Handling</h2>

      <p>
        A simple &ldquo;sold out&rdquo; button that disables a product is the basic
        level. It is rarely sufficient for a physical store merchant.
      </p>

      <p>
        Some products that are out of stock in the store can still be ordered from the
        supplier with a two-week delivery lead time. Others can be pre-ordered. Some
        have close substitutes still available. An intelligent out-of-stock feature
        covers these cases: notify me when available, estimated restock date, alternative
        product suggestion. This keeps the conversion opportunity open instead of
        simply closing the door.
      </p>

      <h2>Feature 5: Bidirectional Order-POS Synchronisation</h2>

      <p>
        An order placed online must arrive in the point-of-sale system without manual
        re-entry. A sale processed at the till must decrement the online inventory
        without manual re-entry. This is bidirectionality, and it is what eliminates
        the manual work entirely.
      </p>

      <p>
        Without it, someone on the team spends part of every day copying data between
        two systems. That time is not recoverable. And each manual transfer is an
        opportunity for an error that costs more time to fix than it took to make.
      </p>

      <h2>Why These Features Don&apos;t Come Standard on Shopify</h2>

      <p>
        Shopify manages its own inventory. It does not know about your point-of-sale
        system, your stock levels in Cegid, Hiboutik, EBP, or Tactill. Connecting
        Shopify to your existing POS software requires either a custom development
        or a dedicated integration, not a generic app from the App Store that covers
        the most common cases but may not support your exact software.
      </p>

      <p>
        The five features described above are not exotic. They are the table stakes for
        a physical store merchant selling online. Building them correctly takes a few
        weeks. Not building them correctly costs far more in errors, cancellations, and
        lost customer trust over the following months.
      </p>

      <hr />

      <p>
        <em>
          You have a physical store and want to launch or improve your e-commerce site?{' '}
          <Link href="/contact">Contact us</Link>: we build the connection between your
          POS software and your online store so the two channels work as one.
        </em>
      </p>
    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">
        Site e-commerce pour un magasin physique : les 5 fonctions indispensables
      </h1>

      <p>
        Créer un site e-commerce quand on a déjà un magasin physique n&apos;est pas
        le même exercice que lancer un pure player. Les priorités sont différentes,
        les contraintes sont différentes, et les fonctions qui importent ne sont pas
        les mêmes. La plupart des plateformes e-commerce sont conçues pour les pure
        players. Si vous forcez votre réalité de commerçant physique dans un template
        prévu pour eux, vous vous heurterez rapidement aux limites.
      </p>

      <h2>Ce que les pure players n&apos;ont pas à gérer: et vous si</h2>

      <p>
        Un pure player en ligne n&apos;a qu&apos;un seul stock : celui de son entrepôt,
        géré par sa plateforme e-commerce. Chaque vente, chaque retour, chaque
        ajustement se passe dans un seul système.
      </p>

      <p>
        Un commerçant physique gère deux canaux simultanément. Des clients achètent en
        boutique. Des clients achètent en ligne. Les deux canaux puisent dans le même
        stock physique. Si ces deux canaux ne sont pas connectés, toute vente sur
        l&apos;un crée un problème potentiel sur l&apos;autre. Un client qui commande
        en ligne un produit vendu en boutique une heure avant, sans que le site ait été
        mis à jour, reçoit une annulation. C&apos;est le problème de base à résoudre.
      </p>

      <h2>Fonction 1 : stock en temps réel</h2>

      <p>
        Le statut &laquo; disponible en magasin &raquo; mis à jour une fois par nuit
        n&apos;est pas du stock en temps réel. C&apos;est un instantané statique qui
        devient faux dès la première vente de la journée.
      </p>

      <p>
        Le stock en temps réel signifie que chaque vente en boutique décrémente
        immédiatement la quantité affichée sur le site. Le mécanisme nécessite une
        connexion live entre le logiciel de caisse et le site e-commerce, un webhook
        ou un appel API déclenché par chaque transaction. Pour les produits en faible
        quantité ou à forte rotation, cette connexion n&apos;est pas optionnelle.
      </p>

      <h2>Fonction 2 : retrait en magasin avec confirmation de disponibilité</h2>

      <p>
        Le click &amp; collect (commander en ligne, retirer en boutique) est un
        argument fort pour les commerçants physiques. Mais il ne fonctionne que si
        la vérification de disponibilité se fait au moment où la commande est passée,
        pas à partir d&apos;un cache mis à jour la veille au soir.
      </p>

      <p>
        Laisser un client commander un produit pour retrait en boutique, puis
        l&apos;appeler le lendemain pour lui dire qu&apos;il n&apos;est plus disponible,
        est pire que de ne pas proposer le click &amp; collect du tout. La confirmation
        doit être live : la commande aboutit uniquement si le stock est confirmé
        disponible à cet instant précis.
      </p>

      <h2>Fonction 3 : fiche produit liée à l&apos;ERP</h2>

      <p>
        Prix, variantes et disponibilité doivent venir de l&apos;ERP, pas d&apos;une
        saisie manuelle dans le back-office du site e-commerce. Quand une promotion
        est appliquée en boutique, elle doit apparaître en ligne automatiquement.
        Quand une nouvelle variante est ajoutée dans l&apos;ERP, elle doit être
        disponible en ligne sans mise à jour séparée.
      </p>

      <p>
        La synchronisation manuelle des données produit entre deux back-offices est
        une source d&apos;erreurs et une perte de temps. Les incohérences de prix
        entre le magasin physique et le site web sapent la confiance client et
        génèrent des réclamations. L&apos;ERP est la source de vérité unique
        pour les données produit.
      </p>

      <h2>Fonction 4 : gestion des ruptures intelligente</h2>

      <p>
        Un simple bouton &laquo; épuisé &raquo; qui désactive un produit est
        le niveau de base. Il est rarement suffisant pour un commerçant physique.
      </p>

      <p>
        Certains produits en rupture en boutique peuvent encore être commandés
        auprès du fournisseur avec un délai de deux semaines. D&apos;autres peuvent
        être précommandés. Certains ont des substituts proches encore disponibles.
        Une gestion des ruptures intelligente couvre ces cas : m&apos;avertir quand
        disponible, date de réapprovisionnement estimée, suggestion de produit
        alternatif. Cela maintient l&apos;opportunité de conversion ouverte au lieu
        de simplement fermer la porte.
      </p>

      <h2>Fonction 5 : synchronisation bidirectionnelle commandes &amp; caisse</h2>

      <p>
        Une commande passée en ligne doit arriver dans le logiciel de caisse sans
        ressaisie manuelle. Une vente traitée en caisse doit décrémenter
        l&apos;inventaire en ligne sans ressaisie manuelle. C&apos;est la
        bidirectionnalité, et c&apos;est ce qui élimine entièrement le travail
        manuel.
      </p>

      <p>
        Sans elle, quelqu&apos;un dans l&apos;équipe passe une partie de chaque
        journée à copier des données entre deux systèmes. Ce temps ne se récupère
        pas. Et chaque transfert manuel est une occasion d&apos;erreur qui coûte
        plus de temps à corriger qu&apos;elle n&apos;en a pris à commettre.
      </p>

      <h2>Pourquoi ces fonctions ne viennent pas &laquo; de base &raquo; sur Shopify</h2>

      <p>
        Shopify gère son propre inventaire. Il ne connaît pas votre logiciel de
        caisse, vos niveaux de stock dans Cegid, Hiboutik, EBP ou Tactill. Connecter
        Shopify à votre caisse existante nécessite soit un développement sur mesure,
        soit une intégration dédiée, pas une app générique de l&apos;App Store qui
        couvre les cas les plus courants mais ne supporte pas forcément votre logiciel
        exact.
      </p>

      <p>
        Les cinq fonctions décrites ci-dessus ne sont pas exotiques. Ce sont les
        fondamentaux pour un commerçant physique qui vend en ligne. Les construire
        correctement prend quelques semaines. Ne pas les construire correctement
        coûte beaucoup plus en erreurs, annulations et perte de confiance client
        dans les mois qui suivent.
      </p>

      <hr />

      <p>
        <em>
          Vous avez un magasin physique et souhaitez lancer ou améliorer votre site
          e-commerce ?{' '}
          <Link href="/contact">Contactez-nous</Link>: nous construisons la connexion
          entre votre logiciel de caisse et votre boutique en ligne pour que les deux
          canaux fonctionnent comme un seul.
        </em>
      </p>
    </article>
  )
}
