'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function ErpSpecialiseBoutiquePoissonsContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Is There ERP Software Built Specifically for Fish and Coral Shops?</h1>

      <p>
        Shop owners ask this after hitting the same wall: they've tried a generic ERP or
        inventory system, forced it to sort-of handle livestock, and drowned in workarounds.
        The short answer is that the big general-purpose ERPs were never designed for unique
        living inventory, and the gap isn't cosmetic, it's structural. Here's what a
        specialized system actually has to do differently.
      </p>

      <h2>Why general ERPs don't fit</h2>

      <p>
        An ERP like the mainstream options organizes a business around fungible SKUs, purchase
        orders, and quantity-based stock. That model is excellent for a distributor moving
        pallets of identical goods. It has no native concept of "specimen #4471, this exact
        coral, alive as of this morning." You can approximate it with serial numbers or custom
        fields, but every process built on top (reordering, valuation, sync) still assumes
        interchangeable units. You spend your time translating your reality into a model that
        resists it.
      </p>

      <h2>The two things a specialized system must model natively</h2>

      <ul>
        <li><strong>The unique specimen.</strong> Every fish and coral is its own record with an ID, photo, and status, not a line item with a quantity. This is the foundation everything else depends on.</li>
        <li><strong>Mortality.</strong> A living-inventory system needs death as a first-class event that instantly removes one specific unit from sale everywhere. In a generic ERP, "the item died" is an awkward manual stock adjustment with no real place in the data model.</li>
      </ul>

      <h2>What else changes downstream</h2>

      <ol>
        <li><strong>Listings are one-to-one.</strong> Each online product maps to a single specimen, enforcing WYSIWYG so two buyers can't claim the same animal.</li>
        <li><strong>Sync is specimen-aware.</strong> Status changes push to your storefront per individual, in real time, instead of reconciling a shared counter.</li>
        <li><strong>Evidence is a byproduct.</strong> Because each specimen has a record and a timeline, packing photos and delivery proofs attach naturally, giving you a chargeback file without extra effort.</li>
      </ol>

      <h2>Build, adapt, or buy specialized?</h2>

      <p>
        There are three realistic answers. <strong>Adapt a generic ERP</strong> and accept
        permanent friction and workaround costs. <strong>Build fully custom</strong>: correct,
        but expensive and slow if you start from a blank page. Or <strong>use software already
        built for livestock</strong>, where the specimen-and-mortality model is native and the
        Shopify sync ships with it. For most independent fish and coral shops, the third path is
        the only one that's both correct and affordable.
      </p>

      <p>
        That's the category <strong>TankLogic</strong> occupies: not a generic ERP with livestock
        bolted on, but a system whose core is the unique specimen and its lifecycle, syncing to
        Shopify out of the box. The "specialized ERP" you were looking for is one built around the
        two things generic systems can't represent.
      </p>

      <hr />

      <p>
        <em>
          Tired of forcing a generic ERP to handle livestock?{' '}
          <Link href="/tanklogic">See what specialized looks like with TankLogic</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/logiciel-gestion-stock-animalerie-aquatique-en-ligne">
              What's the best inventory software for an online fish or coral shop?
            </Link>
          </li>
          <li>
            <Link href="/blog/automatiser-suivi-mortalite-stock-en-ligne">
              How do you automate mortality tracking for your online fish inventory?
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
      <h1 className="blog-article-title">Existe-t-il un ERP spécialisé pour les boutiques de poissons et coraux ?</h1>

      <p>
        Les gérants posent la question après avoir heurté le même mur : ils ont essayé un ERP ou
        un système d'inventaire générique, l'ont forcé à gérer tant bien que mal du vivant, et se
        sont noyés dans les contournements. La réponse courte, c'est que les grands ERP
        généralistes n'ont jamais été conçus pour un stock vivant et unique, et l'écart n'est pas
        cosmétique, il est structurel. Voici ce qu'un système spécialisé doit réellement faire
        différemment.
      </p>

      <h2>Pourquoi les ERP généralistes ne conviennent pas</h2>

      <p>
        Un ERP comme les options grand public organise une entreprise autour de SKU fongibles, de
        bons de commande et d'un stock basé sur des quantités. Ce modèle est excellent pour un
        distributeur qui déplace des palettes de produits identiques. Il n'a aucune notion native
        de « spécimen n°4471, ce corail précis, vivant depuis ce matin ». Vous pouvez l'approcher
        avec des numéros de série ou des champs personnalisés, mais tous les processus bâtis
        au-dessus (réapprovisionnement, valorisation, synchro) continuent de supposer des unités
        interchangeables. Vous passez votre temps à traduire votre réalité dans un modèle qui y
        résiste.
      </p>

      <h2>Les deux choses qu'un système spécialisé doit modéliser nativement</h2>

      <ul>
        <li><strong>Le spécimen unique.</strong> Chaque poisson et corail est sa propre fiche avec un identifiant, une photo et un statut, pas une ligne avec une quantité. C'est la fondation dont tout le reste dépend.</li>
        <li><strong>La mortalité.</strong> Un système de stock vivant a besoin de la mort comme événement de premier rang qui retire instantanément une unité précise de la vente partout. Dans un ERP générique, « l'article est mort » est un ajustement de stock manuel bancal, sans vraie place dans le modèle de données.</li>
      </ul>

      <h2>Ce qui change aussi en aval</h2>

      <ol>
        <li><strong>Les annonces sont en un-pour-un.</strong> Chaque produit en ligne correspond à un seul spécimen, imposant le WYSIWYG pour que deux acheteurs ne puissent pas revendiquer le même animal.</li>
        <li><strong>La synchro est consciente des spécimens.</strong> Les changements de statut sont poussés vers votre boutique par individu, en temps réel, au lieu de réconcilier un compteur partagé.</li>
        <li><strong>La preuve est un sous-produit.</strong> Parce que chaque spécimen a une fiche et une chronologie, les photos d'emballage et les preuves de livraison s'y attachent naturellement, vous donnant un dossier de rétrofacturation sans effort supplémentaire.</li>
      </ol>

      <h2>Construire, adapter ou acheter du spécialisé ?</h2>

      <p>
        Il y a trois réponses réalistes. <strong>Adapter un ERP générique</strong> et accepter une
        friction permanente et le coût des contournements. <strong>Construire entièrement sur
        mesure</strong>: correct, mais cher et lent si vous partez d'une page blanche. Ou
        <strong> utiliser un logiciel déjà conçu pour le vivant</strong>, où le modèle
        spécimen-et-mortalité est natif et la synchro Shopify livrée avec. Pour la plupart des
        boutiques indépendantes de poissons et coraux, la troisième voie est la seule à la fois
        correcte et abordable.
      </p>

      <p>
        C'est la catégorie qu'occupe <strong>TankLogic</strong> : pas un ERP générique avec du
        vivant greffé, mais un système dont le cœur est le spécimen unique et son cycle de vie, qui
        se synchronise avec Shopify d'emblée. L'« ERP spécialisé » que vous cherchiez, c'est celui
        bâti autour des deux choses que les systèmes génériques ne savent pas représenter.
      </p>

      <hr />

      <p>
        <em>
          Fatigué de forcer un ERP générique à gérer du vivant ?{' '}
          <Link href="/tanklogic">Voyez à quoi ressemble un système spécialisé avec TankLogic</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/logiciel-gestion-stock-animalerie-aquatique-en-ligne">
              Quel logiciel de gestion de stock choisir pour une animalerie aquatique en ligne ?
            </Link>
          </li>
          <li>
            <Link href="/blog/automatiser-suivi-mortalite-stock-en-ligne">
              Comment automatiser le suivi de mortalité pour mon stock en ligne ?
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
