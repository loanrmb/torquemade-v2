'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'
import { BlogUpdatedLine } from '@/components/blog-updated-line'

export function RelierErpCaisseShopifyContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">How Do You Connect Your POS or ERP to Shopify for a Fish/Coral Business?</h1>

      <BlogUpdatedLine slug="relier-erp-caisse-shopify-aquariophilie" />

      <p>
        Connecting a POS or ERP to Shopify is a solved problem, for shops selling
        interchangeable products. The moment your catalog is live specimens, the standard
        connectors and integration patterns start leaking, because they were never designed
        to move "this exact individual" between systems. Here's how the integration actually
        works, and where the usual approaches break.
      </p>

      <h2>What "connecting" really means</h2>

      <p>
        An integration between your back-office system and Shopify does two jobs: it
        <strong> pushes</strong> product and stock state out to the storefront, and it
        <strong> pulls</strong> orders back in. For a normal retailer, "stock state" is a
        number. For you, it has to be the status of a specific specimen. If the connector
        can only speak in quantities, it can technically sync, but it can't stop two people
        buying the same coral, and it has no idea what to do when one dies.
      </p>

      <h2>The three integration patterns</h2>

      <ul>
        <li><strong>Off-the-shelf connector app.</strong> Fast to install, cheap monthly fee. But it maps SKUs to quantities, so it inherits every limitation of the quantity model. Fine for your dry goods, wrong for livestock.</li>
        <li><strong>Vendor API / middleware.</strong> More flexible: your POS or ERP exposes an API, and a middleware pushes changes to Shopify's Admin API. This <em>can</em> carry per-specimen data, if your system stores it that way in the first place. The middleware is only as smart as the model beneath it.</li>
        <li><strong>Direct, custom integration.</strong> A purpose-built sync layer owns the specimen model end to end and talks to the Shopify Admin API directly. Most control, no per-transaction connector fees, and mortality is a native event.</li>
      </ul>

      <h2>The technical reality of a specimen-aware sync</h2>

      <ol>
        <li><strong>Single source of truth.</strong> One system holds each specimen's master status. Shopify is a mirror, never a second editor.</li>
        <li><strong>Event-driven push.</strong> A status change fires an event to the Shopify Admin API immediately, so the listing goes offline in seconds.</li>
        <li><strong>Webhooks for orders.</strong> Shopify's order webhook tells your system a specimen is sold; your system reserves and then finalizes it. Handle retries idempotently so a double-delivered webhook doesn't double-process.</li>
        <li><strong>Rate limits and batching.</strong> The Admin API is rate-limited. A sync pushing hundreds of specimen updates needs a queue, not a burst, or you'll drop updates and drift.</li>
      </ol>

      <h2>Where POS/ERP connections usually fail here</h2>

      <p>
        The most common failure isn't a broken API call: it's a modeling mismatch. Your POS
        thinks in quantities, Shopify thinks in quantities, so the connector faithfully syncs
        quantities, and your unique specimens get flattened into "12 of species X." From that
        point on, overselling and phantom stock are inevitable, and no amount of connector
        configuration fixes a data model that never had a concept of the individual animal.
      </p>

      <h2>The pragmatic conclusion</h2>

      <p>
        If your back-office already models specimens individually, a custom middleware to
        Shopify is very doable. If it doesn't, connecting it to Shopify just propagates the
        wrong model faster. In that case the fix is upstream: a system that treats each fish
        and coral as its own record, then syncs. <strong>TankLogic</strong> is exactly that:
        the specimen model and the sync layer in one, built platform-agnostic at setup, so
        it carries the right data whether it's talking to Shopify (the most common case in
        this niche), PrestaShop, WooCommerce, or a custom site, instead of flattening it.
      </p>

      <hr />

      <p>
        <em>
          Wiring a fish or coral shop into Shopify?{' '}
          <Link href="/tanklogic">See how TankLogic syncs specimens, not quantities</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/synchroniser-stock-aquariophilie-site-ecommerce">
              How do you sync live fish and coral inventory with your online store?
            </Link>
          </li>
          <li>
            <Link href="/blog/logiciel-gestion-stock-animalerie-aquatique-en-ligne">
              What's the best inventory software for an online fish or coral shop?
            </Link>
          </li>
          <li>
            <Link href="/blog/erp-specialise-boutique-poissons-coraux">
              Is there ERP software built specifically for fish and coral shops?
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Comment relier mon ERP ou ma caisse à Shopify pour l'aquariophilie ?</h1>

      <BlogUpdatedLine slug="relier-erp-caisse-shopify-aquariophilie" />

      <p>
        Relier une caisse ou un ERP à Shopify est un problème résolu, pour les boutiques qui
        vendent des produits interchangeables. Dès que votre catalogue devient des spécimens
        vivants, les connecteurs standards et les schémas d'intégration commencent à fuir,
        parce qu'ils n'ont jamais été conçus pour déplacer « cet individu précis » d'un système
        à l'autre. Voici comment l'intégration fonctionne réellement, et où les approches
        habituelles cassent.
      </p>

      <h2>Ce que « relier » veut vraiment dire</h2>

      <p>
        Une intégration entre votre système de back-office et Shopify fait deux choses : elle
        <strong> pousse</strong> l'état des produits et du stock vers la boutique, et elle
        <strong> récupère</strong> les commandes. Pour un détaillant classique, « l'état du
        stock » est un nombre. Pour vous, ça doit être le statut d'un spécimen précis. Si le
        connecteur ne parle qu'en quantités, il peut techniquement synchroniser, mais il ne
        peut pas empêcher deux personnes d'acheter le même corail, et il n'a aucune idée de
        quoi faire quand l'un meurt.
      </p>

      <h2>Les trois schémas d'intégration</h2>

      <ul>
        <li><strong>Appli connecteur du marché.</strong> Rapide à installer, abonnement mensuel modique. Mais elle mappe des SKU vers des quantités : elle hérite de toutes les limites du modèle de quantité. Bien pour vos produits secs, faux pour le vivant.</li>
        <li><strong>API éditeur / middleware.</strong> Plus souple : votre caisse ou ERP expose une API, et un middleware pousse les changements vers l'Admin API de Shopify. Ça <em>peut</em> transporter des données par spécimen, si votre système les stocke ainsi au départ. Le middleware n'est jamais plus intelligent que le modèle qui le porte.</li>
        <li><strong>Intégration directe et sur mesure.</strong> Une couche de synchro dédiée possède le modèle par spécimen de bout en bout et dialogue directement avec l'Admin API de Shopify. Contrôle maximal, aucun frais de connecteur par transaction, et la mortalité est un événement natif.</li>
      </ul>

      <h2>La réalité technique d'une synchro consciente des spécimens</h2>

      <ol>
        <li><strong>Source de vérité unique.</strong> Un seul système détient le statut maître de chaque spécimen. Shopify est un miroir, jamais un second éditeur.</li>
        <li><strong>Push événementiel.</strong> Un changement de statut déclenche immédiatement un événement vers l'Admin API de Shopify : l'annonce est retirée en secondes.</li>
        <li><strong>Webhooks pour les commandes.</strong> Le webhook de commande de Shopify signale à votre système qu'un spécimen est vendu ; votre système le réserve puis le finalise. Gérez les retries de façon idempotente pour qu'un webhook livré deux fois ne soit pas traité deux fois.</li>
        <li><strong>Limites de débit et batching.</strong> L'Admin API est limitée en débit. Une synchro qui pousse des centaines de mises à jour de spécimens a besoin d'une file d'attente, pas d'une rafale, sinon vous perdez des mises à jour et vous dérivez.</li>
      </ol>

      <h2>Où les connexions caisse/ERP échouent le plus souvent ici</h2>

      <p>
        La panne la plus fréquente n'est pas un appel API cassé: c'est un décalage de
        modélisation. Votre caisse pense en quantités, Shopify pense en quantités, alors le
        connecteur synchronise fidèlement des quantités, et vos spécimens uniques sont aplatis
        en « 12 de l'espèce X ». À partir de là, la survente et le stock fantôme sont
        inévitables, et aucune configuration de connecteur ne répare un modèle de données qui
        n'a jamais eu la notion d'animal individuel.
      </p>

      <h2>La conclusion pragmatique</h2>

      <p>
        Si votre back-office modélise déjà les spécimens un par un, un middleware sur mesure vers
        Shopify est tout à fait faisable. Sinon, le relier à Shopify ne fait que propager le
        mauvais modèle plus vite. Dans ce cas, la correction est en amont : un système qui traite
        chaque poisson et chaque corail comme sa propre fiche, puis synchronise.
        <strong> TankLogic</strong> est exactement cela: le modèle par spécimen et la couche de
        synchro réunis, construits sur mesure au moment de la mise en place, quelle que soit
        votre plateforme e-commerce (Shopify, le cas le plus courant dans ce secteur, PrestaShop,
        WooCommerce, ou un site sur mesure), pour que l'intégration transporte la bonne donnée au
        lieu de l'aplatir.
      </p>

      <hr />

      <p>
        <em>
          Vous branchez une boutique de poissons ou de coraux sur Shopify ?{' '}
          <Link href="/tanklogic">Voyez comment TankLogic synchronise des spécimens, pas des quantités</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/synchroniser-stock-aquariophilie-site-ecommerce">
              Comment synchroniser le stock de ma boutique aquariophilie avec mon site e-commerce ?
            </Link>
          </li>
          <li>
            <Link href="/blog/logiciel-gestion-stock-animalerie-aquatique-en-ligne">
              Quel logiciel de gestion de stock choisir pour une animalerie aquatique en ligne ?
            </Link>
          </li>
          <li>
            <Link href="/blog/erp-specialise-boutique-poissons-coraux">
              Existe-t-il un ERP spécialisé pour les boutiques de poissons et coraux ?
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
