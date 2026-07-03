'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function ClientCommandeEnLigneStockMagasinContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">A customer orders online, store inventory drops: here&apos;s how it should actually work</h1>

      <p>
        Tuesday, 2:32pm. Marie clicks &ldquo;Place order&rdquo; on your website.
        She has chosen a jacket, entered her address, and paid by card. In her mind,
        that is the end of the transaction. In reality, it is the beginning of a
        cascade that should reach your store&apos;s stock system, your preparation
        queue, and your logistics flow, within the next few hundred milliseconds.
      </p>

      <h2>The invisible cascade</h2>

      <p>
        This is what happens in a well-integrated system from the moment Marie
        clicks that button.
      </p>

      <p>
        The e-commerce platform registers the order, validates the payment, and fires
        a webhook, a notification sent automatically to your ERP or stock management
        system. The message contains the product reference, the quantity, the order ID,
        and the delivery address.
      </p>

      <p>
        The ERP receives the webhook, finds the matching product in its catalogue,
        and decrements the stock by 1. It simultaneously updates the website&apos;s
        available stock, preventing any other customer from ordering the same unit.
        And it pushes a preparation task to your store&apos;s order management queue:
        item to locate, pack, and label.
      </p>

      <p>
        The store receives the notification, on a screen, a tablet, or an automatically
        printed label. The team knows what to prepare before the courier arrives. Marie
        receives an order confirmation with a tracking number, generated from the same
        system.
      </p>

      <p>
        Total elapsed time from click to prepared task in-store: a few seconds.
        No human intermediary, no phone call, no spreadsheet update, no risk of
        someone else selling the same item in the meantime.
      </p>

      <h2>What it would have taken to do this ten years ago</h2>

      <p>
        In the mid-2010s, this kind of integration was the territory of enterprise
        retail. A dedicated IT team, a six-figure budget, custom middleware connecting
        proprietary systems, months of development and testing. It was not out of reach
        for large chains. It was simply not on the radar for independent retailers
        or growing businesses.
      </p>

      <p>
        The technical components existed, but they were not accessible. APIs were
        proprietary and poorly documented. Webhooks were not standard. ERP systems
        were installed locally, not in the cloud, and did not expose interfaces
        designed for real-time external consumption. Building the integration meant
        understanding two entirely separate technical ecosystems and bridging them
        with custom code.
      </p>

      <h2>What changed everything</h2>

      <p>
        The shift happened gradually, then suddenly. Cloud infrastructure made ERP
        systems accessible via the internet without complex network configuration.
        Standardised APIs (REST, JSON, OAuth) became the norm rather than the
        exception. Webhooks became a standard feature of both e-commerce platforms
        and stock management tools.
      </p>

      <p>
        SaaS platforms reduced the cost of individual components dramatically: a
        capable e-commerce platform, a solid POS, an API-accessible ERP, none of
        these requires the investment they did a decade ago. And the developer
        ecosystem for building integrations between them matured: documented
        connectors, tested libraries, established patterns.
      </p>

      <p>
        The result is that what was enterprise-grade complexity is now accessible
        to an independent retailer with a few hundred products and a single store.
        Not trivial, not free, but achievable.
      </p>

      <h2>What it changes in your daily operations</h2>

      <p>
        The most immediate change is the elimination of surprises. Your team knows
        what needs to be prepared before orders accumulate. Stock levels are accurate
        across all channels at all times. You do not discover a stockout when a customer
        complains, you see it coming and reorder proactively.
      </p>

      <p>
        Manual re-entry disappears. The same data does not need to be typed into
        three separate systems. The time that was spent on that task is available
        for the work that actually requires human judgment.
      </p>

      <p>
        Your in-store team has context. Rather than receiving vague requests, they
        receive structured preparation tasks with product references, quantities, and
        destination. Pick-and-pack becomes systematic rather than improvised.
      </p>

      <p>
        And the customer experience improves simply because the information they receive
        is accurate. Confirmation emails that reflect real stock. Tracking that updates
        as the order moves through your system. No cancellation calls.
      </p>

      <h2>The real investment</h2>

      <p>
        The barrier to this kind of integration is less technical than it used to be.
        The tools exist, the patterns are established, the connectors are documented.
        The real investment is not code: it is a decision about how you think about
        stock.
      </p>

      <p>
        As long as stock is managed as three separate files, two spreadsheets, and
        a POS system that does not talk to the website, the integration cannot work.
        The prerequisite is accepting that stock is a single dataset, one source of
        truth, that all systems read from and write to. Once that decision is made,
        the technical implementation follows from it naturally.
      </p>

      <p>
        For a full overview of connection methods between your store and your website,
        see our guide:{' '}
        <Link href="/blog/connecter-stock-magasin-site-internet">
          how to connect your store inventory to your website
        </Link>
        . For the technical detail of how real-time synchronisation works, see:{' '}
        <Link href="/blog/synchronisation-stock-temps-reel">
          real-time inventory sync: how it works and why it&apos;s essential
        </Link>
        .
      </p>

      <hr />

      <p>
        <em>
          This architecture is what we build for retail businesses.{' '}
          <Link href="/contact">Contact us</Link>: we assess your current tools
          and design the integration that fits your catalogue, your team, and your
          channels.
        </em>
      </p>
    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Un client commande en ligne, le stock baisse en magasin : voilà comment ça devrait fonctionner</h1>

      <p>
        Mardi, 14h32. Marie clique sur "Commander" sur votre site. Elle a choisi une
        veste, entré son adresse, payé par carte. Pour elle, la transaction est terminée.
        En réalité, elle déclenche une cascade qui devrait atteindre votre système de
        stock magasin, votre file de préparation, et votre logistique, dans les
        quelques centaines de millisecondes qui suivent.
      </p>

      <h2>La cascade invisible</h2>

      <p>
        Voici ce qui se passe dans un système bien intégré à partir du moment où
        Marie clique.
      </p>

      <p>
        La plateforme e-commerce enregistre la commande, valide le paiement, et envoie
        un webhook, une notification automatique vers votre ERP ou logiciel de gestion
        de stock. Le message contient la référence produit, la quantité, l&apos;identifiant
        de commande, et l&apos;adresse de livraison.
      </p>

      <p>
        L&apos;ERP reçoit le webhook, retrouve le produit correspondant dans son
        catalogue, et décrémente le stock d&apos;une unité. Il met simultanément à
        jour le stock disponible sur le site, empêchant tout autre client de commander
        la même unité. Et il pousse une tâche de préparation vers la file de gestion
        des commandes de votre magasin : article à localiser, emballer, étiqueter.
      </p>

      <p>
        Le magasin reçoit la notification, sur un écran, une tablette, ou une étiquette
        imprimée automatiquement. L&apos;équipe sait quoi préparer avant
        l&apos;arrivée du transporteur. Marie reçoit une confirmation de commande
        avec un numéro de suivi, généré par le même système.
      </p>

      <p>
        Temps écoulé du clic à la tâche préparée en magasin : quelques secondes.
        Aucun intermédiaire humain, aucun appel téléphonique, aucune mise à jour
        de tableur, aucun risque qu&apos;un autre vendeur vende le même article
        entre-temps.
      </p>

      <h2>Ce qu&apos;il aurait fallu il y a dix ans pour faire pareil</h2>

      <p>
        Au milieu des années 2010, ce type d&apos;intégration était le territoire
        du retail enterprise. Une équipe IT dédiée, un budget à six chiffres, du
        middleware sur mesure connectant des systèmes propriétaires, des mois de
        développement et de tests. Ce n&apos;était pas hors de portée pour les
        grandes enseignes, c&apos;était simplement hors du radar des commerces
        indépendants ou des entreprises en croissance.
      </p>

      <p>
        Les composants techniques existaient, mais ils n&apos;étaient pas accessibles.
        Les API étaient propriétaires et mal documentées. Les webhooks
        n&apos;étaient pas standard. Les ERP étaient installés en local, pas dans
        le cloud, et n&apos;exposaient pas d&apos;interfaces conçues pour une
        consommation externe en temps réel. Construire l&apos;intégration signifiait
        maîtriser deux écosystèmes techniques entièrement séparés et les relier avec
        du code sur mesure.
      </p>

      <h2>Ce qui a tout changé</h2>

      <p>
        Le basculement s&apos;est produit progressivement, puis brusquement.
        L&apos;infrastructure cloud a rendu les ERP accessibles par internet sans
        configuration réseau complexe. Les API standardisées (REST, JSON, OAuth)
        sont devenues la norme plutôt que l&apos;exception. Les webhooks sont devenus
        une fonctionnalité standard des plateformes e-commerce et des logiciels de
        gestion de stock.
      </p>

      <p>
        Les plateformes SaaS ont considérablement réduit le coût de chaque composant :
        une plateforme e-commerce capable, un logiciel de caisse solide, un ERP
        accessible par API, aucun de ces éléments ne nécessite l&apos;investissement
        qu&apos;il demandait il y a dix ans. Et l&apos;écosystème développeur pour
        construire les intégrations entre eux a mûri : connecteurs documentés,
        bibliothèques testées, patterns établis.
      </p>

      <p>
        Le résultat : ce qui était une complexité enterprise est maintenant accessible
        à un commerce indépendant avec quelques centaines de produits et un seul point
        de vente. Pas trivial, pas gratuit, mais faisable.
      </p>

      <h2>Ce que ça transforme dans votre quotidien</h2>

      <p>
        Le changement le plus immédiat est la disparition des surprises. Votre équipe
        sait quoi préparer avant que les commandes s&apos;accumulent. Les niveaux de
        stock sont exacts sur tous les canaux à tout moment. Vous ne découvrez pas
        une rupture quand un client se plaint, vous la voyez venir et vous
        réapprovisionnez en amont.
      </p>

      <p>
        La ressaisie manuelle disparaît. Les mêmes données n&apos;ont plus besoin
        d&apos;être saisies dans trois systèmes séparés. Le temps consacré à cette
        tâche est disponible pour ce qui nécessite vraiment un jugement humain.
      </p>

      <p>
        Votre équipe magasin a du contexte. Plutôt que des demandes vagues, elle
        reçoit des tâches de préparation structurées avec les références, les quantités
        et la destination. Le pick-and-pack devient systématique plutôt qu&apos;improvisé.
      </p>

      <p>
        Et l&apos;expérience client s&apos;améliore simplement parce que les
        informations qu&apos;il reçoit sont exactes. Des emails de confirmation qui
        reflètent le stock réel. Un suivi qui se met à jour au fil du traitement.
        Pas d&apos;appels d&apos;annulation.
      </p>

      <h2>Le vrai investissement</h2>

      <p>
        La barrière à ce type d&apos;intégration est moins technique qu&apos;elle
        ne l&apos;était. Les outils existent, les patterns sont établis, les connecteurs
        sont documentés. Le vrai investissement n&apos;est pas le code: c&apos;est
        une décision sur la façon dont vous pensez votre stock.
      </p>

      <p>
        Tant que le stock est géré comme trois fichiers séparés, deux tableurs, et
        un logiciel de caisse qui ne parle pas au site, l&apos;intégration ne peut
        pas fonctionner. Le prérequis est d&apos;accepter que le stock est une donnée
        unique (une seule source de vérité) que tous les systèmes lisent et dans
        laquelle ils écrivent. Une fois cette décision prise, l&apos;implémentation
        technique en découle naturellement.
      </p>

      <p>
        Pour le panorama des méthodes de connexion entre votre logiciel de caisse et
        votre site, voir notre guide :{' '}
        <Link href="/blog/connecter-stock-magasin-site-internet">
          comment connecter votre stock magasin à votre site internet
        </Link>
        . Pour le détail technique du temps réel, voir l&apos;article dédié :{' '}
        <Link href="/blog/synchronisation-stock-temps-reel">
          synchronisation stock en temps réel : comment ça marche et pourquoi
          c&apos;est indispensable
        </Link>
        .
      </p>

      <hr />

      <p>
        <em>
          Cette architecture, nous la construisons pour des commerces comme le vôtre.{' '}
          <Link href="/contact">Contactez-nous</Link>: nous évaluons vos outils
          actuels et concevons l&apos;intégration adaptée à votre catalogue, votre
          équipe et vos canaux.
        </em>
      </p>
    </article>
  )
}
