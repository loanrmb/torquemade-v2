'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function ConnecterSage100ShopifySansMiddlewareContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Connect Sage 100 to Shopify: real-time stock sync explained</h1>

      <p>
        Most integrators have a ready answer when you ask how to connect your Sage 100
        to Shopify: a SaaS middleware, billed monthly, that sits between the two systems.
        The pitch is clean. The reality is that you end up dependent on a third party
        you didn&apos;t choose, paying an ongoing fee for a black box you don&apos;t control.
        There is another way.
      </p>

      <h2>The Problem with SaaS Middlewares</h2>

      <p>
        Middleware connectors for ERP-Shopify integrations are sold as turnkey solutions.
        In practice, they come with recurring costs — typically between €100 and €500 per
        month — that accumulate indefinitely as long as your business runs.
      </p>

      <p>
        Beyond cost, the dependency is structural. If the SaaS provider shuts down, changes
        their pricing, or simply stops supporting your version of Sage, your entire integration
        is at risk. And when a sync fails — because it will at some point — the error message
        you get is often cryptic. You can&apos;t look inside the black box to understand
        what went wrong.
      </p>

      <p>
        A direct connection between Sage 100 and Shopify removes this intermediary entirely.
        It requires an upfront development investment, but the result is a system you own,
        you can audit, and you can modify without asking anyone&apos;s permission.
      </p>

      <h2>What Is the Sage 100 Business Object Interface</h2>

      <p>
        Sage 100 exposes a programmatic interface called the Business Object Interface, or BOI.
        It is a COM layer installed alongside the Sage 100 application that allows external
        scripts to read from and write to the Sage data model using the same business logic
        as the application itself — validation rules, triggers, and all.
      </p>

      <p>
        Concretely, you can use the BOI to query the current stock level for a reference,
        retrieve the sale price for a product family, or push a new customer order directly
        into Sage without any manual re-entry. The BOI is accessible from any language capable
        of calling COM objects: Python via the <code>win32com</code> library is the most common
        approach, but Node.js with native add-ons or C# scripts also work.
      </p>

      <p>
        No additional Sage license is required. If Sage 100 is already running on a Windows
        server, the BOI is already available.
      </p>

      <h2>How the Shopify API Works</h2>

      <p>
        Shopify exposes two complementary mechanisms for integration. The REST Admin API allows
        you to query and update resources — inventory levels, product prices, order statuses —
        via standard HTTP requests authenticated with an access token.
      </p>

      <p>
        Webhooks handle the inbound direction: when an order is created on Shopify, when it is
        fulfilled, when a product is deleted, Shopify sends an HTTP POST to a URL you control.
        Your script receives the event and acts on it in near real time.
      </p>

      <p>
        One constraint to keep in mind: the API has rate limits. The Basic plan allows roughly
        2 requests per second; higher plans increase this ceiling. For stock updates on large
        catalogs, a queue mechanism is necessary to stay within bounds and avoid hitting the
        429 error.
      </p>

      <h2>Architecture of a Direct Connection</h2>

      <p>
        The integration is a script — typically a Python or Node.js process — that bridges
        the two systems. It runs on the same Windows server as Sage 100, or on a server
        with network access to the Sage installation.
      </p>

      <p>
        The stock synchronization flow runs from Sage to Shopify: the script queries the BOI
        for updated stock levels at regular intervals or on a trigger, then calls the Shopify
        Inventory API to update the corresponding location quantity. Deltas only — no need to
        push the entire catalog on every run.
      </p>

      <p>
        The order flow runs in the other direction: a webhook endpoint receives the
        &ldquo;order created&rdquo; event from Shopify, validates the payload, and uses the BOI
        to create the corresponding sales order in Sage — customer, lines, quantities, and
        delivery address included.
      </p>

      <h2>What Gets Synchronized</h2>

      <p>
        A well-built direct integration typically covers four data types. Stock levels are
        updated from Sage to Shopify after each inventory movement — sales, receipts, or manual
        adjustments. Prices are pushed from Sage to Shopify when a price list changes, ensuring
        the online store always reflects the current tariff.
      </p>

      <p>
        Orders flow from Shopify to Sage automatically at the time of placement, eliminating
        manual re-entry. Customer records are created or updated in Sage on the first order,
        building a unified client base that includes both in-store and online buyers.
      </p>

      <h2>When Middleware Remains Justified</h2>

      <p>
        A direct connection is the right choice for most merchants with an established catalog
        and a development team — or a development partner — capable of maintaining the
        integration over time.
      </p>

      <p>
        There are cases where a middleware makes sense. Very high order volumes — several
        thousand orders per day — may benefit from an industrialized solution with dedicated
        infrastructure and high-availability guarantees. Teams with no developer internally
        who cannot commit to maintaining a script will find a managed middleware simpler to
        operate. And multi-channel setups connecting Sage to Amazon, WooCommerce, and Shopify
        simultaneously may justify a hub that handles all three rather than three separate
        custom integrations.
      </p>

      <hr />

      <p>
        <em>
          You use Sage 100 and want to connect it to Shopify without an ongoing subscription?{' '}
          <Link href="/contact">Contact us</Link> — we&apos;ll audit your current setup and
          design the direct integration that fits your catalog and your order volume.
        </em>
      </p>
    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Connecter Sage 100 à Shopify : synchronisation stock en temps réel expliquée</h1>

      <p>
        La plupart des intégrateurs ont une réponse toute prête quand vous demandez comment
        connecter votre Sage 100 à Shopify : un middleware SaaS, facturé mensuellement,
        qui s&apos;intercale entre les deux systèmes. Le discours est propre. La réalité,
        c&apos;est que vous devenez dépendant d&apos;un tiers que vous n&apos;avez pas choisi,
        en payant un abonnement récurrent pour une boîte noire que vous ne contrôlez pas.
        Il existe une autre voie.
      </p>

      <h2>Le problème avec les middlewares SaaS</h2>

      <p>
        Les connecteurs middleware pour les intégrations ERP-Shopify sont vendus comme des
        solutions clé en main. En pratique, ils impliquent des coûts récurrents — généralement
        entre 100 € et 500 € par mois — qui s&apos;accumulent indéfiniment tant que votre
        activité tourne.
      </p>

      <p>
        Au-delà du coût, la dépendance est structurelle. Si le fournisseur SaaS ferme,
        change ses tarifs, ou arrête simplement de supporter votre version de Sage, toute
        votre intégration est en danger. Et quand une synchronisation échoue — ce qui arrivera
        tôt ou tard — le message d&apos;erreur que vous recevez est souvent cryptique. Vous
        ne pouvez pas regarder à l&apos;intérieur de la boîte noire pour comprendre ce qui
        s&apos;est passé.
      </p>

      <p>
        Une connexion directe entre Sage 100 et Shopify supprime cet intermédiaire
        entièrement. Elle nécessite un investissement de développement initial, mais le
        résultat est un système que vous possédez, que vous pouvez auditer, et que vous
        pouvez modifier sans demander la permission à personne.
      </p>

      <h2>Ce qu&apos;est le Business Object Interface de Sage 100</h2>

      <p>
        Sage 100 expose une interface programmatique appelée Business Object Interface,
        ou BOI. Il s&apos;agit d&apos;une couche COM installée avec l&apos;application Sage
        100 qui permet à des scripts externes de lire et d&apos;écrire dans le modèle de
        données Sage en utilisant la même logique métier que l&apos;application
        elle-même — règles de validation, déclencheurs, et tout le reste.
      </p>

      <p>
        Concrètement, vous pouvez utiliser le BOI pour interroger le niveau de stock actuel
        d&apos;une référence, récupérer le prix de vente d&apos;une famille de produits, ou
        pousser une nouvelle commande client directement dans Sage sans aucune ressaisie
        manuelle. Le BOI est accessible depuis n&apos;importe quel langage capable
        d&apos;appeler des objets COM : Python via la bibliothèque <code>win32com</code> est
        l&apos;approche la plus courante, mais Node.js avec des add-ons natifs ou des scripts
        C# fonctionnent également.
      </p>

      <p>
        Aucune licence Sage supplémentaire n&apos;est nécessaire. Si Sage 100 tourne déjà
        sur un serveur Windows, le BOI est déjà disponible.
      </p>

      <h2>Comment fonctionne l&apos;API Shopify</h2>

      <p>
        Shopify expose deux mécanismes complémentaires pour l&apos;intégration. L&apos;API
        REST Admin permet d&apos;interroger et de mettre à jour des ressources — niveaux de
        stock, prix des produits, statuts des commandes — via des requêtes HTTP standard
        authentifiées par un token d&apos;accès.
      </p>

      <p>
        Les webhooks gèrent la direction entrante : quand une commande est créée sur Shopify,
        quand elle est expédiée, quand un produit est supprimé, Shopify envoie un POST HTTP
        vers une URL que vous contrôlez. Votre script reçoit l&apos;événement et agit dessus
        en quasi temps réel.
      </p>

      <p>
        Une contrainte à garder en tête : l&apos;API a des limites de taux. Le plan Basic
        autorise environ 2 requêtes par seconde ; les plans supérieurs augmentent ce
        plafond. Pour des mises à jour de stock sur de grands catalogues, un mécanisme de
        file d&apos;attente est nécessaire pour rester dans les limites et éviter
        l&apos;erreur 429.
      </p>

      <h2>Architecture d&apos;une connexion directe</h2>

      <p>
        L&apos;intégration est un script — typiquement un processus Python ou Node.js — qui
        fait le pont entre les deux systèmes. Il tourne sur le même serveur Windows que
        Sage 100, ou sur un serveur avec accès réseau à l&apos;installation Sage.
      </p>

      <p>
        Le flux de synchronisation du stock va de Sage vers Shopify : le script interroge
        le BOI pour les niveaux de stock mis à jour à intervalles réguliers ou sur
        déclencheur, puis appelle l&apos;API Inventory de Shopify pour mettre à jour la
        quantité correspondante. En mode delta uniquement — pas besoin de pousser tout
        le catalogue à chaque exécution.
      </p>

      <p>
        Le flux des commandes va dans l&apos;autre sens : un endpoint webhook reçoit
        l&apos;événement &laquo; order created &raquo; de Shopify, valide le payload, et
        utilise le BOI pour créer la commande de vente correspondante dans Sage —
        client, lignes, quantités et adresse de livraison inclus.
      </p>

      <h2>Ce qui se synchronise</h2>

      <p>
        Une intégration directe bien construite couvre généralement quatre types de données.
        Les niveaux de stock sont mis à jour de Sage vers Shopify après chaque mouvement
        d&apos;inventaire — ventes, réceptions, ou ajustements manuels. Les prix sont poussés
        de Sage vers Shopify quand un tarif change, pour que la boutique en ligne reflète
        toujours le tarif en cours.
      </p>

      <p>
        Les commandes passent de Shopify vers Sage automatiquement au moment de la validation,
        supprimant la ressaisie manuelle. Les fiches clients sont créées ou mises à jour dans
        Sage à la première commande, constituant une base client unifiée qui inclut acheteurs
        en boutique et en ligne.
      </p>

      <h2>Quand un middleware reste justifié</h2>

      <p>
        Une connexion directe est le bon choix pour la plupart des commerçants avec un
        catalogue établi et une équipe de développement — ou un partenaire développement —
        capable de maintenir l&apos;intégration dans la durée.
      </p>

      <p>
        Il existe des cas où un middleware a du sens. Les volumes de commandes très élevés —
        plusieurs milliers de commandes par jour — peuvent bénéficier d&apos;une solution
        industrialisée avec une infrastructure dédiée et des garanties de haute disponibilité.
        Les équipes sans développeur interne qui ne peuvent pas s&apos;engager à maintenir
        un script trouveront un middleware géré plus simple à opérer. Et les configurations
        multi-canaux connectant Sage à Amazon, WooCommerce et Shopify simultanément peuvent
        justifier un hub qui gère les trois plutôt que trois intégrations custom séparées.
      </p>

      <hr />

      <p>
        <em>
          Vous utilisez Sage 100 et souhaitez le connecter à Shopify sans abonnement
          récurrent ?{' '}
          <Link href="/contact">Contactez-nous</Link> — nous auditons votre configuration
          actuelle et concevons l&apos;intégration directe adaptée à votre catalogue et
          à votre volume de commandes.
        </em>
      </p>
    </article>
  )
}
