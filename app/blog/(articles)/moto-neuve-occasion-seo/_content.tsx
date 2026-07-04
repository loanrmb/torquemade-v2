'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function MotoNeuveOccasionSeoContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">New vs Used Motorcycle: How to Structure Pages for SEO</h1>

      <p>
        On a motorcycle dealer's site, "new" and "used" aren't just two catalogue sections:
        they're two distinct SEO strategies targeting different buyers at different stages
        of the purchase process. Mixing them on a single page dilutes both.
      </p>

      <h2>New-specific queries</h2>

      <p>
        A new motorcycle buyer typically searches by model, brand, or characteristic:
        "Yamaha MT-07 price 2025," "500cc A2 new bike," "best beginner trail new."
        These queries have informational and purchase intent. New pages should be
        organised by model and brand, with detailed listings including indicative pricing,
        availability, and financing options.
      </p>

      <h2>Used-specific queries</h2>

      <p>
        A used motorcycle buyer searches differently: "motorcycle under 10,000km under
        €5,000," "Honda CBR used [region]," "cheap A2 used motorbike." Intent is often
        more urgent and budget more defined. Used pages must allow filtering by budget,
        mileage, displacement, and location. Each used bike needs its own individual
        listing, no generic catalogue without photos or prices.
      </p>

      <h2>Why separate the two</h2>

      <p>
        A "Motorcycle Stock" page mixing new and used is hard to optimise for Google:
        it doesn't know whether the page targets new or used queries. Separate sections
        with their own URLs allow optimising each for its specific queries, creating
        dedicated pillar pages, and better meeting each buyer profile's expectations.
      </p>

      <hr />

      <p>
        <em>
          Want to restructure your online catalogue for better SEO visibility?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/stock-moto-en-ligne-conversion">
              How to present your motorcycle stock online to convert
            </Link>
          </li>
          <li>
            <Link href="/blog/fiche-produit-moto-redaction">
              Motorcycle product listing: how to write a description that sells
            </Link>
          </li>
          <li>
            <Link href="/blog/seo-concessionnaire-moto">
              SEO for motorcycle dealers: the keywords that convert
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Moto neuve vs occasion : comment structurer les pages pour le SEO</h1>

      <p>
        Sur un site de concessionnaire moto, "neuf" et "occasion" ne sont pas
        juste deux sections de catalogue, ce sont deux stratégies SEO distinctes
        qui ciblent des acheteurs différents, à des stades différents du processus
        d'achat. Les mélanger sur une seule page, c'est diluer les deux.
      </p>

      <h2>Les requêtes spécifiques au neuf</h2>

      <p>
        Un acheteur de moto neuve cherche généralement par modèle, par marque, ou
        par caractéristique : "Yamaha MT-07 prix 2025", "moto 500cc A2 neuve",
        "meilleure trail débutant neuve". Ces requêtes ont une intention d'information
        et d'achat, l'acheteur compare avant de décider.
      </p>

      <p>
        Les pages de neuf doivent donc être organisées par modèle et par marque,
        avec des fiches détaillées incluant les tarifs indicatifs, les disponibilités
        et les options de financement.
      </p>

      <h2>Les requêtes spécifiques à l'occasion</h2>

      <p>
        Un acheteur de moto d'occasion cherche différemment : "moto 10 000 km moins
        de 5000 euros", "Honda CBR occasion [région]", "moto occasion A2 pas cher".
        L'intention est souvent plus urgente et le budget plus défini.
      </p>

      <p>
        Les pages d'occasion doivent permettre de filtrer par budget, par kilométrage,
        par cylindrée et par localisation. Chaque moto d'occasion doit avoir sa propre
        fiche individuelle, pas de catalogue générique sans photos ni prix.
      </p>

      <h2>Pourquoi séparer les deux</h2>

      <p>
        Une page "Stock motos" qui mélange neuf et occasion est difficile à optimiser
        pour Google : il ne sait pas si la page cible les requêtes de neuf ou d'occasion.
        Des sections séparées avec leurs propres URLs permettent d'optimiser chacune
        pour ses requêtes spécifiques, de créer des pages piliers dédiées, et de
        mieux répondre aux attentes de chaque profil d'acheteur.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez restructurer votre catalogue en ligne pour plus de visibilité SEO ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/stock-moto-en-ligne-conversion">
              Comment présenter son stock de motos en ligne pour convertir
            </Link>
          </li>
          <li>
            <Link href="/blog/fiche-produit-moto-redaction">
              Fiche produit moto : comment rédiger une description qui vend
            </Link>
          </li>
          <li>
            <Link href="/blog/seo-concessionnaire-moto">
              SEO pour concessionnaire moto : les mots-clés qui convertissent
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
