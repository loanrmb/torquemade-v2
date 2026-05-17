'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function SeoConcessionnaireMotoCont() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">SEO for Motorcycle Dealers: The Keywords That Convert</h1>

      <p>
        Not all SEO keywords are equal for a motorcycle dealer. Some generate lots of
        traffic but few conversions. Others generate little traffic but buyers who walk
        into your dealership two days later. The strategy: target the latter first.
      </p>

      <h2>High-conversion keywords</h2>

      <ul>
        <li><strong>"[Brand] dealer [city]".</strong> Purchase intent is explicit. The person has chosen their brand and is looking for where to buy it. The most valuable query — and often the most accessible locally.</li>
        <li><strong>"[Model] test ride [city]".</strong> A serious buyer. They want to try before buying. If you offer test rides and your site says so clearly, you capture this traffic.</li>
        <li><strong>"Used motorcycle [budget or displacement] [department]".</strong> The buyer has a defined budget and searches locally. Highly qualified, often quick to decide.</li>
        <li><strong>"Motorcycle service [brand] [city]".</strong> Potential existing client. Monetisation through after-sales, potential loyalty.</li>
      </ul>

      <h2>How to rank for these queries</h2>

      <p>
        Each distributed brand deserves a dedicated page on your site, optimised for
        associated queries. This page must include the brand name, available models, and
        dealership location — clearly, in the title, subheadings, and page text. Dealers
        dominating their local SEO market consistently combine dedicated brand pages, an
        optimised Google Business Profile, and regular client reviews.
      </p>

      <h2>The multi-brand dealer example</h2>

      <p>
        A dealer distributing multiple brands who has taken care to create dedicated pages
        or microsites per brand captures exponentially more qualified traffic than a site
        listing all brands on a single generic page. An investment that pays off in
        long-term SEO results.
      </p>

      <hr />

      <p>
        <em>
          Motorcycle dealer wanting to improve your local SEO?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/seo-local-vente-moto-gironde">
              How to sell more motorcycles through local SEO in Gironde
            </Link>
          </li>
          <li>
            <Link href="/blog/microsite-marque-moto">
              Motorcycle brand microsite: why create a dedicated site per brand
            </Link>
          </li>
          <li>
            <Link href="/blog/google-business-profile-optimisation">
              Google Business Profile: how to optimise your listing for local SEO
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">SEO pour concessionnaire moto : les mots-clés qui convertissent</h1>

      <p>
        Pas tous les mots-clés SEO se valent pour un concessionnaire moto. Certains
        génèrent beaucoup de trafic mais peu de conversions. D'autres génèrent peu de
        trafic mais des acheteurs qui entrent dans votre concession deux jours après.
        La stratégie, c'est de cibler d'abord les seconds.
      </p>

      <h2>Les mots-clés à fort taux de conversion</h2>

      <ul>
        <li>
          <strong>"[Marque] concessionnaire [ville]".</strong>
          L'intention d'achat est explicite. La personne a choisi sa marque et
          cherche où l'acheter. C'est la requête la plus précieuse — et souvent
          la plus accessible localement.
        </li>
        <li>
          <strong>"[Modèle] essai [ville]".</strong>
          Un acheteur sérieux. Il veut essayer avant d'acheter. Si vous proposez
          des essais et que votre site le signale clairement, vous captez ce traffic.
        </li>
        <li>
          <strong>"Moto occasion [budget ou cylindrée] [département]".</strong>
          L'acheteur a un budget défini et cherche localement. Très qualifié,
          souvent rapide à décider.
        </li>
        <li>
          <strong>"Révision moto [marque] [ville]".</strong>
          Client existant potentiel. Monétisation par le SAV, fidélisation possible.
        </li>
      </ul>

      <h2>Comment se positionner sur ces requêtes</h2>

      <p>
        Chaque marque distribuée mérite une page dédiée sur votre site, optimisée pour
        les requêtes associées. Cette page doit inclure le nom de la marque, les modèles
        disponibles, et la localisation de la concession — clairement, dans le titre,
        les sous-titres et le texte de la page.
      </p>

      <p>
        Les concessionnaires qui dominent leur marché local SEO combinent systématiquement :
        pages de marque dédiées, Google Business Profile optimisé, et avis clients
        réguliers. Ce triptyque crée une présence locale difficile à déloger.
      </p>

      <h2>L'exemple des concessionnaires multiples marques</h2>

      <p>
        Un concessionnaire qui distribue plusieurs marques et qui a pris le soin de
        créer des pages ou des microsites dédiés par marque capture exponentiellement
        plus de trafic qualifié qu'un site qui liste toutes les marques sur une seule
        page générique. C'est une stratégie qui demande un investissement initial,
        mais dont les résultats SEO sont visibles sur le long terme.
      </p>

      <hr />

      <p>
        <em>
          Vous êtes concessionnaire moto et voulez améliorer votre SEO local ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/seo-local-vente-moto-gironde">
              Comment vendre plus de motos grâce au SEO local en Gironde
            </Link>
          </li>
          <li>
            <Link href="/blog/microsite-marque-moto">
              Microsite de marque moto : pourquoi créer un site dédié par marque
            </Link>
          </li>
          <li>
            <Link href="/blog/google-business-profile-optimisation">
              Google Business Profile : optimiser sa fiche pour le SEO local
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
