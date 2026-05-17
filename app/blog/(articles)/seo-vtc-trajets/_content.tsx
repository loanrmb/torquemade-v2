'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function SeoVtcTrajetsContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">SEO for VTC Service: Ranking for Key Routes</h1>

      <p>
        Specific route queries are the most profitable for a private driver. Unlike generic
        searches ("VTC Bordeaux"), they indicate a precise, immediate need — the user knows
        where they're going and is looking for someone to take them. Conversion rate on these
        queries is well above average.
      </p>

      <h2>Priority route queries to target</h2>

      <ul>
        <li><strong>"VTC Bordeaux airport"</strong> — the top query. High volume, very clear intent, recurring route. Ideal for a dedicated page with fixed rate, journey time, and practical information.</li>
        <li><strong>"Private driver Bordeaux Saint-Jean station"</strong> — same logic. Station transfers are among the most requested trips.</li>
        <li><strong>"VTC Bordeaux Arcachon"</strong> — specific route, lower volume but highly qualified. Often tourists or professionals.</li>
        <li><strong>"Mérignac airport shuttle"</strong> — local variant. Mérignac residents also look for airport transfers.</li>
        <li><strong>"Wedding transport Gironde"</strong> — events. Lower volume but high average ticket.</li>
      </ul>

      <h2>How to create optimised pages for each route</h2>

      <p>
        Each recurring route deserves its own page, optimised for the corresponding query.
        This page must contain: the clearly displayed fixed rate, estimated journey time,
        practical information, a booking form pre-filled with the route, and client reviews
        on that specific route if possible.
      </p>

      <h2>The competitive advantage of one page per route</h2>

      <p>
        Most VTC sites have a single "Our Services" page. By creating individual pages for
        each route, you multiply your indexed surface on Google and capture specific queries
        your competitors don't target. A simple content strategy that can double your organic
        traffic within months.
      </p>

      <hr />

      <p>
        <em>
          Want us to create your site's optimised route pages?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/chauffeur-prive-bordeaux-uber">
              Private driver Bordeaux: how to stand out from Uber online
            </Link>
          </li>
          <li>
            <Link href="/blog/site-web-chauffeur-prive">
              Private driver website: the elements that convert
            </Link>
          </li>
          <li>
            <Link href="/blog/mots-cles-peu-concurrentiels">
              How to find low-competition keywords in your niche
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">SEO pour service VTC : se positionner sur les trajets clés</h1>

      <p>
        Les requêtes de trajet spécifique sont les plus rentables pour un chauffeur
        privé. Contrairement aux recherches génériques ("VTC Bordeaux"), elles indiquent
        un besoin précis et immédiat — l'utilisateur sait où il va et cherche quelqu'un
        pour l'emmener. Le taux de conversion sur ces requêtes est bien supérieur à
        la moyenne.
      </p>

      <h2>Les requêtes de trajet à cibler en priorité</h2>

      <ul>
        <li>
          <strong>"VTC Bordeaux aéroport"</strong> — la requête reine. Volume important,
          intention très claire, trajet récurrent. Idéal pour une page dédiée avec
          tarif fixe, temps de trajet et informations pratiques.
        </li>
        <li>
          <strong>"Chauffeur privé Bordeaux gare Saint-Jean"</strong> — même logique.
          Le transfert gare est l'un des trajets les plus demandés.
        </li>
        <li>
          <strong>"VTC Bordeaux Arcachon"</strong> — trajet spécifique, volume plus
          faible mais très qualifié. Souvent des touristes ou des professionnels.
        </li>
        <li>
          <strong>"Navette Mérignac aéroport"</strong> — variante locale. Les habitants
          de Mérignac cherchent aussi un transfert aéroport.
        </li>
        <li>
          <strong>"Transport mariage Gironde"</strong> — événementiel. Faible volume
          mais ticket moyen élevé.
        </li>
      </ul>

      <h2>Comment créer des pages optimisées pour chaque trajet</h2>

      <p>
        Chaque trajet récurrent mérite sa propre page, optimisée pour la requête
        correspondante. Cette page doit contenir :
      </p>

      <ul>
        <li>Le tarif fixe clairement affiché</li>
        <li>Le temps de trajet estimé</li>
        <li>Les informations pratiques (accueil à l'arrivée, suivi du vol pour l'aéroport, etc.)</li>
        <li>Un formulaire de réservation pré-rempli avec le trajet</li>
        <li>Des avis clients sur ce trajet spécifique si possible</li>
      </ul>

      <h2>L'avantage concurrentiel d'une page par trajet</h2>

      <p>
        La plupart des sites VTC ont une seule page "Nos prestations". En créant des
        pages individuelles pour chaque trajet, vous multipliez votre surface indexée
        par Google et captez des requêtes spécifiques que vos concurrents ne ciblent
        pas. C'est une stratégie de contenu simple qui peut doubler votre trafic
        organique en quelques mois.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez qu'on crée les pages de trajet optimisées de votre site ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/chauffeur-prive-bordeaux-uber">
              Chauffeur privé Bordeaux : comment se démarquer d'Uber en ligne
            </Link>
          </li>
          <li>
            <Link href="/blog/site-web-chauffeur-prive">
              Site web pour chauffeur privé : les éléments qui convertissent
            </Link>
          </li>
          <li>
            <Link href="/blog/mots-cles-peu-concurrentiels">
              Comment trouver des mots-clés peu concurrentiels dans votre niche
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
