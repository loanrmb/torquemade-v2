'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function MotoPassion65SeoTarbesContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">How Moto Passion 65 Improved Its Google Visibility in Tarbes</h1>

      <p>
        Moto Passion 65 is a motorcycle dealership based in the Hautes-Pyrénées
        department. Like many local dealerships, they faced a classic challenge:
        being visible on Google in a precise geographic area, against competitors
        investing in paid advertising. The strategy implemented relies entirely on
        organic SEO, with no advertising budget.
      </p>

      <h2>The context: local dealership, specific market</h2>

      <p>
        Tarbes and the Hautes-Pyrénées represent a particular motorcycle market. The
        region attracts riders for its exceptional mountain roads, the Pyrenees offer
        some of France's finest motorcycle circuits. For a dealership in this context,
        local SEO extends beyond purchase queries to also target passing riders seeking
        a dealer for maintenance or breakdown assistance.
      </p>

      <h2>The strategy implemented</h2>

      <ul>
        <li><strong>Dedicated brand pages</strong> for each distributed brand, optimised for "[brand] dealer Tarbes" and "[brand] motorcycle 65" queries.</li>
        <li><strong>Google Business Profile optimisation</strong>: categories, photos, hours, and structured client review collection.</li>
        <li><strong>Local editorial content</strong>: articles on Hautes-Pyrénées motorcycle routes, regional moto events, mountain bike maintenance tips. This content anchors the site in the local ecosystem.</li>
      </ul>

      <h2>The results</h2>

      <p>
        Without paid advertising, the SEO strategy enabled Moto Passion 65 to significantly
        improve its position on key local queries in the department. Google impressions
        increased progressively, and organic traffic followed, with a higher conversion
        rate than paid traffic, since it captures precise local search intent.
      </p>

      <hr />

      <p>
        <em>
          Motorcycle dealer wanting to replicate this strategy?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/seo-concessionnaire-moto">
              SEO for motorcycle dealers: the keywords that convert
            </Link>
          </li>
          <li>
            <Link href="/blog/seo-local-vente-moto-gironde">
              How to sell more motorcycles through local SEO in Gironde
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
      <h1 className="blog-article-title">Comment Moto Passion 65 a amélioré sa visibilité Google à Tarbes</h1>

      <p>
        Moto Passion 65 est un concessionnaire moto implanté dans le département des
        Hautes-Pyrénées. Comme beaucoup de concessions locales, ils faisaient face à
        un défi classique : être visible sur Google dans une zone géographique précise,
        face à des concurrents qui investissent dans la publicité payante. La stratégie
        mise en place repose entièrement sur le SEO organique, sans budget publicitaire.
      </p>

      <h2>Le contexte : concession locale, marché spécifique</h2>

      <p>
        Tarbes et les Hautes-Pyrénées représentent un marché motocycle particulier.
        La région attire des motards pour ses routes de montagne exceptionnelles :
        les Pyrénées offrent certains des plus beaux circuits moto de France. Cette
        spécificité géographique est à la fois une opportunité SEO et un angle
        éditorial naturel.
      </p>

      <p>
        Pour une concession dans ce contexte, le SEO local ne se limite pas aux
        requêtes d'achat de moto, il peut aussi cibler les motards de passage qui
        cherchent un concessionnaire pour un entretien ou un dépannage.
      </p>

      <h2>La stratégie mise en place</h2>

      <ul>
        <li>
          <strong>Pages de marque dédiées</strong> pour chaque marque distribuée,
          optimisées pour les requêtes "[marque] concessionnaire Tarbes" et
          "[marque] moto 65".
        </li>
        <li>
          <strong>Optimisation du Google Business Profile</strong>: catégories,
          photos, horaires, et collecte d'avis clients structurée.
        </li>
        <li>
          <strong>Contenu éditorial local</strong>: articles sur les routes moto
          des Hautes-Pyrénées, les événements moto de la région, les conseils
          d'entretien pour moto de montagne. Ce contenu ancre le site dans
          l'écosystème local.
        </li>
      </ul>

      <h2>Les résultats</h2>

      <p>
        Sans publicité payante, la stratégie SEO a permis à Moto Passion 65 d'améliorer
        significativement sa position sur les requêtes locales clés du département.
        Les impressions Google ont augmenté progressivement, et le trafic organique
        a suivi, avec un taux de conversion plus élevé que le trafic payant,
        puisqu'il capte des intentions de recherche précises et locales.
      </p>

      <hr />

      <p>
        <em>
          Vous êtes concessionnaire moto et voulez reproduire cette stratégie ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/seo-concessionnaire-moto">
              SEO pour concessionnaire moto : les mots-clés qui convertissent
            </Link>
          </li>
          <li>
            <Link href="/blog/seo-local-vente-moto-gironde">
              Comment vendre plus de motos grâce au SEO local en Gironde
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
