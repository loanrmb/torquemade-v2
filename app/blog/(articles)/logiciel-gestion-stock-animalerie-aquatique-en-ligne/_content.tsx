'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'
import { BlogUpdatedLine } from '@/components/blog-updated-line'

export function LogicielGestionStockAnimalerieContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">What's the Best Inventory Software for an Online Fish or Coral Shop?</h1>

      <BlogUpdatedLine slug="logiciel-gestion-stock-animalerie-aquatique-en-ligne" />

      <p>
        "Best inventory software" is the wrong question if you sell live animals. The
        honest answer is that most of the popular options, the ones every listicle
        recommends, are built on an assumption that quietly disqualifies them for your
        business. Before you compare feature grids, understand the one dividing line that
        actually matters.
      </p>

      <h2>The dividing line: fungible vs. unique inventory</h2>

      <p>
        General inventory software (and the inventory module inside most POS systems)
        models stock as a quantity: a SKU with a number attached. That's perfect for a
        shop selling 200 identical bottles of dechlorinator. It's wrong for the tank next
        to it, where every fish is a distinct individual a customer will buy by sight. If
        the software can't represent "this specific specimen," everything downstream
        (listings, sync, dispute evidence) is built on sand.
      </p>

      <p>
        So the first filter isn't price or integrations. It's: <strong>can this tool model
        one record per specimen, or only a quantity per SKU?</strong> Most can only do the
        latter.
      </p>

      <h2>Criteria that actually matter for live inventory</h2>

      <ul>
        <li><strong>Per-specimen records.</strong> Unique ID, photo, and status for each animal, not a shared counter.</li>
        <li><strong>Mortality as a real event.</strong> Marking a specimen dead must remove exactly that unit from every sales channel in real time, not require a manual stock adjustment.</li>
        <li><strong>WYSIWYG listings.</strong> The online product is tied to the individual specimen, so two customers can't buy the same coral.</li>
        <li><strong>Real-time push to your storefront.</strong> Status changes reach Shopify in seconds, not on an hourly batch that leaves a window for double-sells.</li>
        <li><strong>An audit trail.</strong> Every status change timestamped, the raw material for fighting a chargeback later.</li>
      </ul>

      <h2>Why the usual suspects fall short</h2>

      <p>
        Off-the-shelf inventory apps and POS inventory modules solve maybe 80% of a generic
        retailer's problem. For a livestock shop, the missing 20% <em>is</em> the business:
        uniqueness and mortality. You can sometimes bolt on custom fields or a "serial
        number" per unit, but you're fighting the tool's core data model, and the sync to
        your website still treats everything as quantities. Plugins pile up, edge cases
        multiply, and you're back to reconciling by hand.
      </p>

      <h2>Three realistic paths</h2>

      <ol>
        <li><strong>Generic software + heavy customization.</strong> Possible, but you pay in plugin subscriptions and fragile workarounds, and the specimen model is never native.</li>
        <li><strong>Spreadsheets.</strong> Flexible enough to model specimens, but there's no real-time sync and no dispute evidence: the manual work and the double-sell risk stay with you.</li>
        <li><strong>Purpose-built livestock software.</strong> A system whose data model <em>starts</em> from unique specimens and mortality, and syncs to Shopify natively. Fewer moving parts, no fighting the tool.</li>
      </ol>

      <p>
        <strong>TankLogic</strong> is the third option: built specifically for fish and coral
        shops selling online, with per-specimen records, real-time mortality removal, and
        native Shopify sync. Not a generic tool with livestock bolted on, the model starts
        where your business does.
      </p>

      <hr />

      <p>
        <em>
          Comparing tools for a live fish or coral shop?{' '}
          <Link href="/tanklogic">See what purpose-built looks like with TankLogic</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/erp-specialise-boutique-poissons-coraux">
              Is there ERP software built specifically for fish and coral shops?
            </Link>
          </li>
          <li>
            <Link href="/blog/synchroniser-stock-aquariophilie-site-ecommerce">
              How do you sync live fish and coral inventory with your online store?
            </Link>
          </li>
          <li>
            <Link href="/blog/relier-erp-caisse-shopify-aquariophilie">
              How do you connect your POS or ERP to Shopify for a fish/coral business?
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Quel logiciel de gestion de stock choisir pour une animalerie aquatique en ligne ?</h1>

      <BlogUpdatedLine slug="logiciel-gestion-stock-animalerie-aquatique-en-ligne" />

      <p>
        « Quel est le meilleur logiciel de gestion de stock » est la mauvaise question quand
        vous vendez du vivant. La réponse honnête, c'est que la plupart des options populaires,
        celles que tous les comparatifs recommandent, reposent sur un postulat qui les
        disqualifie discrètement pour votre activité. Avant de comparer des grilles de
        fonctionnalités, comprenez la seule ligne de partage qui compte vraiment.
      </p>

      <h2>La ligne de partage : stock fongible vs stock unique</h2>

      <p>
        Un logiciel de stock généraliste (et le module d'inventaire de la plupart des caisses)
        modélise le stock comme une quantité : un SKU avec un nombre. Parfait pour une boutique
        qui vend 200 flacons identiques de conditionneur d'eau. Faux pour l'aquarium juste à
        côté, où chaque poisson est un individu distinct que le client achètera à vue. Si le
        logiciel ne sait pas représenter « ce spécimen précis », tout ce qui vient après
        (annonces, synchro, preuves de litige) est bâti sur du sable.
      </p>

      <p>
        Le premier filtre n'est donc ni le prix ni les intégrations. C'est : <strong>cet outil
        sait-il modéliser une fiche par spécimen, ou seulement une quantité par SKU ?</strong>
        La plupart ne savent faire que la seconde.
      </p>

      <h2>Les critères qui comptent vraiment pour du vivant</h2>

      <ul>
        <li><strong>Fiches par spécimen.</strong> Un identifiant unique, une photo et un statut pour chaque animal, pas un compteur partagé.</li>
        <li><strong>La mortalité comme vrai événement.</strong> Marquer un spécimen mort doit retirer exactement cette unité de tous les canaux de vente en temps réel, sans ajustement manuel de stock.</li>
        <li><strong>Annonces WYSIWYG.</strong> Le produit en ligne est lié au spécimen individuel : deux clients ne peuvent pas acheter le même corail.</li>
        <li><strong>Push temps réel vers votre boutique.</strong> Les changements de statut atteignent Shopify en secondes, pas via un batch horaire qui laisse une fenêtre de double vente.</li>
        <li><strong>Une piste d'audit.</strong> Chaque changement de statut horodaté : la matière première pour contester une rétrofacturation plus tard.</li>
      </ul>

      <h2>Pourquoi les suspects habituels ne suffisent pas</h2>

      <p>
        Les applis de stock du marché et les modules d'inventaire des caisses résolvent peut-être
        80 % du problème d'un détaillant générique. Pour une boutique de vivant, les 20 %
        manquants <em>sont</em> l'activité : l'unicité et la mortalité. On peut parfois greffer
        des champs personnalisés ou un « numéro de série » par unité, mais on se bat contre le
        modèle de données de l'outil, et la synchro vers le site continue de tout traiter comme
        des quantités. Les plugins s'empilent, les cas limites se multiplient, et vous revoilà à
        réconcilier à la main.
      </p>

      <h2>Trois voies réalistes</h2>

      <ol>
        <li><strong>Logiciel générique + grosse personnalisation.</strong> Possible, mais vous payez en abonnements de plugins et bricolages fragiles, et le modèle par spécimen n'est jamais natif.</li>
        <li><strong>Tableurs.</strong> Assez souples pour modéliser des spécimens, mais aucune synchro temps réel et aucune preuve de litige : le travail manuel et le risque de double vente restent pour vous.</li>
        <li><strong>Logiciel dédié au vivant.</strong> Un système dont le modèle de données <em>part</em> des spécimens uniques et de la mortalité, et se synchronise nativement avec Shopify. Moins de pièces mobiles, aucune lutte contre l'outil.</li>
      </ol>

      <p>
        <strong>TankLogic</strong>, c'est la troisième voie : conçu spécifiquement pour les
        boutiques de poissons et coraux qui vendent en ligne, avec des fiches par spécimen, un
        retrait en temps réel à la mortalité et une synchro Shopify native. Pas un outil
        générique avec du vivant greffé dessus : le modèle part de là où part votre activité.
      </p>

      <hr />

      <p>
        <em>
          Vous comparez des outils pour une boutique de poissons ou de coraux ?{' '}
          <Link href="/tanklogic">Voyez à quoi ressemble un logiciel dédié avec TankLogic</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/erp-specialise-boutique-poissons-coraux">
              Existe-t-il un ERP spécialisé pour les boutiques de poissons et coraux ?
            </Link>
          </li>
          <li>
            <Link href="/blog/synchroniser-stock-aquariophilie-site-ecommerce">
              Comment synchroniser le stock de ma boutique aquariophilie avec mon site e-commerce ?
            </Link>
          </li>
          <li>
            <Link href="/blog/relier-erp-caisse-shopify-aquariophilie">
              Comment relier mon ERP ou ma caisse à Shopify pour l'aquariophilie ?
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
