'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function MicrositeMarqueMotoCont() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Motorcycle Brand Microsite: Why Create a Dedicated Site Per Brand?</h1>

      <p>
        A dealer distributing multiple brands faces a classic SEO problem: their main
        site can't rank effectively for each brand's specific queries. When someone
        searches "Cyclone motorbike Bordeaux" or "Voge 500R available Gironde," they
        want a precise answer, not a generalist dealership homepage.
      </p>

      <h2>Why microsites better capture brand queries</h2>

      <p>
        Google values thematic relevance. A site entirely dedicated to one motorcycle brand
        sends a strong signal, all structure, content, and internal links revolve around
        that brand. It can therefore rank for brand queries that the dealership's main site
        couldn't target as precisely. This is particularly useful for lesser-known brands:
        brands like Cyclone, Voge, or Orcal, gaining market share but underrepresented
        online. A well-executed microsite can capture a qualified audience where competition
        is still low.
      </p>

      <h2>What a brand microsite must contain</h2>

      <ul>
        <li><strong>The complete range of available models</strong>: with photos, technical specs, and indicative prices.</li>
        <li><strong>Brand information</strong>: its history, values, positioning. This editorial content reinforces the microsite's SEO authority.</li>
        <li><strong>A contact or test ride request form</strong> directly linked to the dealership.</li>
        <li><strong>Links back to the main dealership site</strong>: to create coherence and cross-traffic.</li>
      </ul>

      <h2>When a microsite is worth the investment</h2>

      <p>
        A microsite is justified when you distribute a brand with its own search potential:
        when people type the brand name followed by a location on Google. If the brand is
        well-known enough to generate these local searches, a microsite positions you exactly
        where those buyers are.
      </p>

      <hr />

      <p>
        <em>
          Distributing multiple brands and want to maximise your per-brand visibility?{' '}
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
            <Link href="/blog/seo-local-vente-moto-gironde">
              How to sell more motorcycles through local SEO in Gironde
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
      <h1 className="blog-article-title">Microsite de marque moto : pourquoi créer un site dédié par marque ?</h1>

      <p>
        Un concessionnaire qui distribue plusieurs marques fait face à un problème SEO
        classique : son site principal ne peut pas se positionner efficacement sur les
        requêtes spécifiques à chaque marque. Quand un internaute cherche "Cyclone moto
        Bordeaux" ou "Voge 500R disponible Gironde", il cherche une réponse précise,
        pas la page d'accueil d'une concession généraliste.
      </p>

      <h2>Pourquoi les microsites capturent mieux les requêtes de marque</h2>

      <p>
        Google valorise la pertinence thématique. Un site entièrement dédié à une marque
        de moto envoie un signal fort : toute la structure, le contenu et les liens
        internes tournent autour de cette marque. Il peut ainsi se positionner sur des
        requêtes de marque que le site principal de la concession ne pourrait pas cibler
        aussi précisément.
      </p>

      <p>
        C'est particulièrement utile pour les marques moins connues du grand public :
        des marques comme Cyclone, Voge ou Orcal, qui gagnent des parts de marché
        mais restent sous-représentées en ligne. Un microsite bien travaillé peut
        capter une audience qualifiée là où la concurrence est encore faible.
      </p>

      <h2>Ce qu'un microsite de marque doit contenir</h2>

      <ul>
        <li>
          <strong>La gamme complète des modèles disponibles</strong>: avec photos,
          caractéristiques techniques et prix indicatifs. C'est la première chose
          que cherche l'acheteur potentiel.
        </li>
        <li>
          <strong>Les informations sur la marque</strong>: son histoire, ses valeurs,
          son positionnement. Ce contenu éditorial renforce l'autorité SEO du microsite.
        </li>
        <li>
          <strong>Un formulaire de contact ou de demande d'essai</strong> directement
          relié à la concession.
        </li>
        <li>
          <strong>Des liens vers le site principal de la concession</strong>: pour
          créer de la cohérence et du trafic croisé.
        </li>
      </ul>

      <h2>Quand un microsite vaut l'investissement</h2>

      <p>
        Un microsite se justifie quand vous distribuez une marque avec un potentiel
        de recherche propre: c'est-à-dire quand des gens tapent le nom de la marque
        suivi d'une localisation sur Google. Si la marque est suffisamment connue pour
        générer ces recherches locales, un microsite vous positionne exactement là où
        se trouvent ces acheteurs.
      </p>

      <hr />

      <p>
        <em>
          Vous distribuez plusieurs marques et voulez maximiser votre visibilité
          par marque ?{' '}
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
            <Link href="/blog/seo-local-vente-moto-gironde">
              Comment vendre plus de motos grâce au SEO local en Gironde
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
