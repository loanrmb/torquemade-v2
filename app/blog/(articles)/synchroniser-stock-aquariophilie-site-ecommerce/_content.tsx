'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'
import { BlogUpdatedLine } from '@/components/blog-updated-line'

export function SynchroniserStockAquariophilieContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">How Do You Sync Live Fish and Coral Inventory With Your Online Store?</h1>

      <BlogUpdatedLine slug="synchroniser-stock-aquariophilie-site-ecommerce" />

      <p>
        Most inventory-sync tutorials assume your stock is a pile of identical units:
        forty of the same SKU, any one interchangeable with the next. That assumption
        is exactly what breaks when you sell live fish and coral. Each specimen is a
        one-of-a-kind item, and a sync architecture built for fungible quantities will
        oversell you into refunds and chargebacks. Here's what actually has to happen.
      </p>

      <h2>Why the generic quantity model fails</h2>

      <p>
        A standard e-commerce catalog stores a single number per product: "in stock: 12."
        When someone buys, the platform decrements the counter. That works for T-shirts.
        It falls apart the moment the customer is buying <em>that specific specimen</em>:
        the WYSIWYG (what you see is what you get) coral frag in the photo, not "a" frag
        of that species. Two customers cannot both buy the same colony, and no other unit
        can be substituted. Your inventory isn't a counter; it's a list of individuals,
        each with its own record.
      </p>

      <h2>Model every specimen as its own SKU</h2>

      <p>
        The foundation of a working sync is one database record per specimen. Each fish or
        coral gets a unique identifier, its own photo, its own status field
        (available / reserved / sold / deceased). When a specimen leaves your possession
        (sold in-store, or dead), you flip one record, and that individual disappears from
        the online store. No shared counter to reconcile, no guessing which of the twelve
        "units" is the one that died.
      </p>

      <h2>The sync layer: single source of truth to Shopify</h2>

      <p>
        Once specimens are individual records, the sync itself is straightforward in
        principle: your management system is the single source of truth, and it pushes
        state changes to your storefront. The mechanics matter:
      </p>

      <ul>
        <li><strong>Push, don't poll.</strong> When a specimen's status changes, an event fires immediately to Shopify (via the Admin API) so the listing goes offline in seconds, not on the next hourly batch.</li>
        <li><strong>One direction for truth.</strong> Online orders flow back to reserve the specimen, but the master status always lives in one system. Bidirectional "both systems can edit" setups are where drift and double-sells come from.</li>
        <li><strong>Idempotent updates.</strong> If the same event is delivered twice (webhooks retry), applying it twice must not corrupt state. Each specimen change carries a version so stale updates are ignored.</li>
      </ul>

      <h2>The failure that costs the most: selling the dead</h2>

      <p>
        The expensive edge case isn't overselling forty identical shirts: it's selling one
        animal that no longer exists. If mortality isn't wired into the sync, a specimen
        that died overnight is still listed as available in the morning, a customer pays,
        and you're now shipping nothing or refunding. On live, shipped goods that dispute
        escalates into a chargeback. So mortality has to be a first-class event in the
        system, not a manual spreadsheet edit you get to "later."
      </p>

      <h2>What a correct setup looks like end to end</h2>

      <ol>
        <li>Each specimen is created as a unique record with a photo and status.</li>
        <li>Listing it publishes a WYSIWYG product to Shopify tied to that record.</li>
        <li>A sale (online or in-store) or a mortality flip updates the master record.</li>
        <li>The change is pushed to Shopify immediately; the listing goes offline.</li>
        <li>Every state change is timestamped, so you have a history, useful far beyond sync.</li>
      </ol>

      <p>
        This is precisely the architecture <strong>TankLogic</strong> is built on: unique
        specimens, real-time removal on mortality, and a single source of truth pushing to
        your storefront, whether that's Shopify (the most common case in this niche),
        PrestaShop, WooCommerce, or a custom build. If that's the problem you're fighting,
        that's the tool.
      </p>

      <hr />

      <p>
        <em>
          Selling live fish or coral online and tired of overselling?{' '}
          <Link href="/tanklogic">See how TankLogic handles specimen-level sync</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/relier-erp-caisse-shopify-aquariophilie">
              How do you connect your POS or ERP to Shopify for a fish/coral business?
            </Link>
          </li>
          <li>
            <Link href="/blog/erp-specialise-boutique-poissons-coraux">
              Is there ERP software built specifically for fish and coral shops?
            </Link>
          </li>
          <li>
            <Link href="/blog/automatiser-suivi-mortalite-stock-en-ligne">
              How do you automate mortality tracking for your online fish inventory?
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Comment synchroniser le stock de ma boutique aquariophilie avec mon site e-commerce ?</h1>

      <BlogUpdatedLine slug="synchroniser-stock-aquariophilie-site-ecommerce" />

      <p>
        La plupart des tutoriels sur la synchronisation de stock partent d'un postulat :
        votre stock est un tas d'unités identiques, quarante fois le même SKU,
        interchangeables. C'est exactement ce postulat qui casse quand vous vendez des
        poissons et des coraux vivants. Chaque spécimen est une pièce unique, et une
        architecture pensée pour des quantités fongibles vous fera survendre, avec
        remboursements et rétrofacturations à la clé. Voici ce qui doit réellement se passer.
      </p>

      <h2>Pourquoi le modèle de quantité générique échoue</h2>

      <p>
        Un catalogue e-commerce classique stocke un seul nombre par produit : « en stock : 12 ».
        À chaque achat, la plateforme décrémente le compteur. Ça marche pour des t-shirts.
        Ça s'effondre dès que le client achète <em>ce spécimen précis</em>: la bouture de
        corail WYSIWYG de la photo, pas « une » bouture de l'espèce. Deux clients ne peuvent
        pas acheter la même colonie, et aucune autre unité ne peut s'y substituer. Votre stock
        n'est pas un compteur : c'est une liste d'individus, chacun avec sa propre fiche.
      </p>

      <h2>Modéliser chaque spécimen comme son propre SKU</h2>

      <p>
        La base d'une synchro qui fonctionne, c'est une fiche par spécimen. Chaque poisson
        ou corail reçoit un identifiant unique, sa photo, son propre statut
        (disponible / réservé / vendu / mort). Quand un spécimen quitte votre stock, vendu
        en magasin ou décédé, vous basculez une fiche, et cet individu disparaît du site.
        Aucun compteur partagé à réconcilier, aucune supposition sur laquelle des douze
        « unités » est celle qui est morte.
      </p>

      <h2>La couche de synchro : une source de vérité unique vers Shopify</h2>

      <p>
        Une fois les spécimens transformés en fiches individuelles, la synchro elle-même est
        simple sur le principe : votre logiciel de gestion est la source de vérité unique, et
        il pousse les changements d'état vers votre boutique. Les détails comptent :
      </p>

      <ul>
        <li><strong>Push, pas polling.</strong> Quand le statut d'un spécimen change, un événement part immédiatement vers Shopify (via l'Admin API) : l'annonce est retirée en quelques secondes, pas au prochain batch horaire.</li>
        <li><strong>Une seule direction pour la vérité.</strong> Les commandes en ligne réservent le spécimen, mais le statut maître vit toujours dans un seul système. Les montages « les deux systèmes peuvent modifier » sont la source des décalages et des doubles ventes.</li>
        <li><strong>Mises à jour idempotentes.</strong> Si le même événement est livré deux fois (les webhooks font des retries), l'appliquer deux fois ne doit pas corrompre l'état. Chaque changement porte une version : les mises à jour périmées sont ignorées.</li>
      </ul>

      <h2>La panne la plus coûteuse : vendre un animal mort</h2>

      <p>
        Le cas limite le plus cher, ce n'est pas de survendre quarante t-shirts identiques,
        c'est de vendre un animal qui n'existe plus. Si la mortalité n'est pas câblée dans la
        synchro, un spécimen mort dans la nuit reste affiché « disponible » au matin, un client
        paie, et vous voilà à n'expédier rien ou à rembourser. Sur du vivant expédié, ce litige
        dégénère en rétrofacturation. La mortalité doit donc être un événement de premier rang
        dans le système, pas une correction manuelle de tableur remise à « plus tard ».
      </p>

      <h2>À quoi ressemble une configuration correcte, de bout en bout</h2>

      <ol>
        <li>Chaque spécimen est créé comme une fiche unique avec photo et statut.</li>
        <li>Le mettre en vente publie un produit WYSIWYG sur Shopify lié à cette fiche.</li>
        <li>Une vente (en ligne ou en magasin) ou une mortalité met à jour la fiche maître.</li>
        <li>Le changement est poussé vers Shopify immédiatement ; l'annonce est retirée.</li>
        <li>Chaque changement d'état est horodaté : vous avez un historique, utile bien au-delà de la synchro.</li>
      </ol>

      <p>
        C'est exactement l'architecture sur laquelle repose <strong>TankLogic</strong> :
        spécimens uniques, retrait en temps réel à la mortalité, et une source de vérité unique
        qui pousse vers votre boutique, que ce soit Shopify (le cas le plus courant dans ce
        secteur), PrestaShop, WooCommerce, ou un site sur mesure. Si c'est le problème que vous
        combattez, c'est l'outil.
      </p>

      <hr />

      <p>
        <em>
          Vous vendez des poissons ou coraux vivants en ligne et vous en avez assez de survendre ?{' '}
          <Link href="/tanklogic">Découvrez comment TankLogic gère la synchro au spécimen près</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/relier-erp-caisse-shopify-aquariophilie">
              Comment relier mon ERP ou ma caisse à Shopify pour l'aquariophilie ?
            </Link>
          </li>
          <li>
            <Link href="/blog/erp-specialise-boutique-poissons-coraux">
              Existe-t-il un ERP spécialisé pour les boutiques de poissons et coraux ?
            </Link>
          </li>
          <li>
            <Link href="/blog/automatiser-suivi-mortalite-stock-en-ligne">
              Comment automatiser le suivi de mortalité pour mon stock en ligne ?
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
