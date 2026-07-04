'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function TarificationVtcFixeCompteurContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Fixed vs Metered Pricing: How to Display It Clearly Online</h1>

      <p>
        Price uncertainty is the main reason a visitor leaves a VTC site without booking.
        "Rate according to itinerary," "contact us for a quote", these formulations defer
        the information and push the client toward a competitor who displays their rates.
        Here's how to solve this.
      </p>

      <h2>Fixed vs metered pricing: the client differences</h2>

      <p>
        Fixed pricing is simple and reassuring: the client knows before getting in the vehicle
        what they'll pay. No bad surprises from traffic or detours. Metered pricing is more
        flexible for unexpected or variable trips, but creates anxiety. On your website, if
        you use metered pricing, at minimum display a starting rate and estimates for common trips.
      </p>

      <h2>How to display rates on your site</h2>

      <ul>
        <li><strong>A dedicated pricing page.</strong> List your common trips with fixed rates: Bordeaux centre ↔ Airport, Bordeaux ↔ Saint-Jean Station, etc. These pages also rank for SEO queries like "VTC Bordeaux airport rate."</li>
        <li><strong>A route simulator.</strong> If your pricing is variable, a simple simulator (point A → point B → price estimate) reassures the client without committing to an exact rate.</li>
        <li><strong>Supplementary pricing information.</strong> Included in the price: pickup, luggage, waiting up to X minutes. Potential supplements: nights, public holidays, extended waiting. Transparency avoids bad surprises and builds trust.</li>
      </ul>

      <h2>The direct impact on conversion rate</h2>

      <p>
        VTC sites that clearly display their rates convert better than those that don't,
        at equivalent service and design quality. Price information reduces decision time
        and eliminates the main booking barrier.
      </p>

      <hr />

      <p>
        <em>
          Want a VTC site with optimised pricing display?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/site-web-chauffeur-prive">
              Private driver website: the elements that convert
            </Link>
          </li>
          <li>
            <Link href="/blog/seo-vtc-trajets">
              SEO for VTC service: ranking for key routes
            </Link>
          </li>
          <li>
            <Link href="/blog/vtc-reservations-sans-application">
              How a VTC driver can generate bookings without a third-party app
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Tarification fixe vs compteur : comment l'afficher clairement en ligne</h1>

      <p>
        L'incertitude sur le prix est la principale raison pour laquelle un visiteur
        quitte un site VTC sans réserver. "Tarif selon itinéraire", "nous contacter
        pour un devis", "prix sur demande", ces formulations reportent l'information
        à plus tard et poussent le client vers un concurrent qui affiche ses tarifs.
        Voici comment résoudre ce problème.
      </p>

      <h2>Tarif fixe vs tarif au compteur : les différences pour le client</h2>

      <p>
        Le tarif fixe est simple et rassurant : le client sait avant de monter dans
        le véhicule ce qu'il va payer. Il n'y a pas de mauvaise surprise en cas
        d'embouteillage ou de détour. C'est le format que préfèrent les clients
        pour les trajets récurrents (aéroport, gare) et pour les événements où
        le budget est défini à l'avance.
      </p>

      <p>
        Le tarif au compteur est plus flexible pour les trajets imprévus ou variables,
        mais il crée une anxiété chez le client qui ne contrôle pas le prix final.
        Sur votre site web, si vous pratiquez le compteur, affichez au minimum
        un tarif de départ et une estimation pour vos trajets courants.
      </p>

      <h2>Comment afficher les tarifs sur votre site</h2>

      <ul>
        <li>
          <strong>Une page tarifaire dédiée.</strong>
          Listez vos trajets courants avec les tarifs fixes : Bordeaux centre ↔ Aéroport,
          Bordeaux ↔ Gare Saint-Jean, Bordeaux ↔ Arcachon, etc. Ces pages se positionnent
          aussi sur des requêtes SEO comme "tarif VTC Bordeaux aéroport".
        </li>
        <li>
          <strong>Un simulateur de trajet.</strong>
          Si votre tarification est variable, un simulateur simple (point A → point B →
          estimation de prix) rassure le client sans vous engager sur un tarif exact.
        </li>
        <li>
          <strong>Des informations complémentaires sur le tarif.</strong>
          Inclus dans le prix : prise en charge, bagages, attente jusqu'à X minutes.
          Suppléments éventuels : nuit, jour férié, attente prolongée. La transparence
          évite les mauvaises surprises et renforce la confiance.
        </li>
      </ul>

      <h2>L'effet direct sur le taux de conversion</h2>

      <p>
        Les sites VTC qui affichent clairement leurs tarifs convertissent mieux que
        ceux qui ne le font pas: à qualité de service et de design équivalents.
        L'information sur le prix réduit le temps de décision et élimine le principal
        frein à la réservation.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez un site VTC avec affichage tarifaire optimisé ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/site-web-chauffeur-prive">
              Site web pour chauffeur privé : les éléments qui convertissent
            </Link>
          </li>
          <li>
            <Link href="/blog/seo-vtc-trajets">
              SEO pour service VTC : se positionner sur les trajets clés
            </Link>
          </li>
          <li>
            <Link href="/blog/vtc-reservations-sans-application">
              Comment un VTC peut générer des réservations sans application tierce
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
