'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function SeoLocalVenteMotoBordeauxContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">How to Sell More Motorcycles Through Local SEO in Gironde</h1>

      <p>
        In the Bordeaux region, several thousand motorcycle-related searches are performed
        on Google every month. "New bike Bordeaux," "Yamaha dealer Gironde," "used
        motorcycle 33" — these are active buyers, ready to travel. The question is:
        is it your site that appears first, or a competitor's?
      </p>

      <h2>Queries that generate dealership visits</h2>

      <p>
        Not all queries are worth the same. For motorcycle dealerships, the most valuable
        queries are those with a clear intent to buy or visit:
      </p>

      <ul>
        <li>"[Brand] dealer Bordeaux" — the buyer has already chosen their brand</li>
        <li>"[Model] motorbike test ride Bordeaux" — they want to try it before buying</li>
        <li>"Used motorcycle [budget] Gironde" — they have a budget and search locally</li>
        <li>"Motorcycle service Bordeaux" — existing client, potential loyalty</li>
      </ul>

      <h2>How to rank for these queries</h2>

      <p>
        Each brand you distribute deserves its own dedicated page on your site, optimised
        for associated queries. This page must contain: available models, main specs,
        indicative pricing, and a clear call to action. Dealerships with the best local
        SEO results consistently have dedicated brand pages, a complete and up-to-date
        Google Business Profile, and regular client reviews.
      </p>

      <h2>The importance of specific local content</h2>

      <p>
        Google values geographically relevant content. An article on "the best motorcycle
        routes in Gironde" or "what to do around Bordeaux on a motorbike" attracts local
        riders — your core target — and reinforces your site's local anchoring.
      </p>

      <hr />

      <p>
        <em>
          Managing a motorcycle dealership in Gironde and want to improve your local
          visibility?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/site-web-concessionnaire-moto">
              Why motorcycle dealers need a modern website
            </Link>
          </li>
          <li>
            <Link href="/blog/seo-concessionnaire-moto">
              SEO for motorcycle dealers: the keywords that convert
            </Link>
          </li>
          <li>
            <Link href="/blog/microsite-marque-moto">
              Motorcycle brand microsite: why create a dedicated site per brand
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Comment vendre plus de motos grâce au SEO local en Gironde</h1>

      <p>
        Dans la région bordelaise, plusieurs milliers de recherches liées à l'achat
        de moto sont effectuées chaque mois sur Google. "Moto neuve Bordeaux",
        "concessionnaire Yamaha Gironde", "moto occasion 33" — ce sont des acheteurs
        actifs, prêts à se déplacer. La question est : est-ce votre site qui apparaît
        en premier, ou celui d'un concurrent ?
      </p>

      <h2>Les requêtes qui génèrent des visites en concession</h2>

      <p>
        Toutes les requêtes ne valent pas la même chose. En matière de concessionnaire
        moto, les requêtes les plus précieuses sont celles avec une intention claire
        d'achat ou de visite :
      </p>

      <ul>
        <li>"Concessionnaire [marque] Bordeaux" — l'acheteur a déjà choisi sa marque</li>
        <li>"Moto [modèle] essai Bordeaux" — il veut l'essayer avant d'acheter</li>
        <li>"Moto occasion [budget] Gironde" — il a un budget et cherche localement</li>
        <li>"SAV moto Bordeaux" — client existant, fidélisation potentielle</li>
      </ul>

      <p>
        Ces requêtes ont souvent un volume modeste — quelques dizaines ou centaines
        de recherches par mois — mais un taux de conversion très élevé. La personne
        qui tape "moto Honda Bordeaux essai" est à deux clics d'appeler votre concession.
      </p>

      <h2>Comment se positionner sur ces requêtes</h2>

      <p>
        Chaque marque que vous distribuez mérite sa propre page dédiée sur votre site,
        optimisée pour les requêtes associées. Cette page doit contenir : les modèles
        disponibles, les caractéristiques principales, le tarif indicatif, et un appel
        à l'action clair (demande d'essai, prise de contact, itinéraire).
      </p>

      <p>
        Les concessionnaires qui obtiennent les meilleurs résultats SEO locaux ont
        systématiquement des pages de marque dédiées, un Google Business Profile
        complet et à jour, et des avis clients réguliers. Ce triptyque positionne
        durablement sur les requêtes locales.
      </p>

      <h2>L'importance du contenu local spécifique</h2>

      <p>
        Google valorise le contenu géographiquement pertinent. Un article sur "les
        meilleures routes de balade moto en Gironde" ou "que faire autour de Bordeaux
        en moto" attire des motards locaux — votre cœur de cible — et renforce
        l'ancrage local de votre site.
      </p>

      <hr />

      <p>
        <em>
          Vous gérez une concession moto en Gironde et voulez améliorer votre
          visibilité locale ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/site-web-concessionnaire-moto">
              Pourquoi les concessionnaires moto ont besoin d'un site web moderne
            </Link>
          </li>
          <li>
            <Link href="/blog/seo-concessionnaire-moto">
              SEO pour concessionnaire moto : les mots-clés qui convertissent
            </Link>
          </li>
          <li>
            <Link href="/blog/microsite-marque-moto">
              Microsite de marque moto : pourquoi créer un site dédié par marque
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
