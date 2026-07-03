'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function ChauffeurPriveBordeauxUberContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Private Driver Bordeaux: How to Stand Out from Uber Online</h1>

      <p>
        Uber and Bolt offer massive audiences, and take 25–30% commission on each trip.
        For an independent private driver or small VTC structure, this dependency is both
        costly and risky: an algorithm change or commission increase can significantly
        impact revenue overnight. Local SEO is the sustainable alternative.
      </p>

      <h2>What clients search when they don't use an app</h2>

      <p>
        A significant share of private driver bookings don't go through apps. Individuals
        organising business travel, a wedding, a recurring airport transfer, or a special
        event often look for a fixed provider, not a random driver. They go to Google
        and type precise queries: "Private driver Bordeaux airport," "VTC wedding Gironde,"
        "Bordeaux Saint-Jean station shuttle fixed rate." These queries have clear purchase
        intent, if your site appears, the client calls you directly, without intermediary commission.
      </p>

      <h2>Elements of a converting VTC site</h2>

      <ul>
        <li><strong>Clearly displayed rates.</strong> The main barrier to online booking for a VTC is price uncertainty. Display fixed rates for recurring trips, it reassures and qualifies contact.</li>
        <li><strong>Direct booking form or link.</strong> Don't ask clients to call to book, offer an online booking form with date, time, route, and passenger count.</li>
        <li><strong>Specific services well highlighted.</strong> Wedding, VIP transfer, corporate shuttle, sporting event: each special service deserves its own dedicated page or section.</li>
      </ul>

      <h2>Local SEO for a private driver in Bordeaux</h2>

      <p>
        Google Business Profile is essential. A complete profile with vehicle photos, hours,
        service area, and client reviews positions you in the local pack for proximity searches.
        Combined with SEO-optimised service pages, it's a 24/7 acquisition system with no
        variable costs.
      </p>

      <hr />

      <p>
        <em>
          Private driver in Bordeaux wanting to reduce platform dependency?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/vtc-reservations-sans-application">
              How a VTC driver can generate bookings without a third-party app
            </Link>
          </li>
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
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Chauffeur privé Bordeaux : comment se démarquer d'Uber en ligne</h1>

      <p>
        Uber et Bolt offrent une audience massive, et prennent 25 à 30 % de commission
        sur chaque course. Pour un chauffeur privé indépendant ou une petite structure
        VTC, cette dépendance est à la fois coûteuse et risquée : une modification
        d'algorithme ou une hausse de commission peut significativement impacter le
        chiffre d'affaires du jour au lendemain. Le SEO local est l'alternative durable.
      </p>

      <h2>Ce que les clients cherchent quand ils ne passent pas par une app</h2>

      <p>
        Une part significative des réservations de chauffeurs privés ne passe pas par
        les applications. Les particuliers qui organisent un déplacement professionnel,
        un mariage, un transfert aéroport récurrent ou un événement spécial cherchent
        souvent un prestataire fixe, pas un chauffeur aléatoire. Ils vont sur Google
        et tapent des requêtes précises.
      </p>

      <ul>
        <li>"Chauffeur privé Bordeaux aéroport"</li>
        <li>"VTC mariage Gironde"</li>
        <li>"Navette gare Bordeaux Saint-Jean tarif fixe"</li>
        <li>"Chauffeur privé affaires Bordeaux"</li>
      </ul>

      <p>
        Ces requêtes ont une intention d'achat claire. Si votre site apparaît dessus,
        le client vous appelle directement, sans commission d'intermédiaire.
      </p>

      <h2>Les éléments d'un site qui convertit pour un VTC</h2>

      <ul>
        <li>
          <strong>Tarifs affichés clairement.</strong>
          Le premier frein à la réservation en ligne pour un VTC, c'est l'incertitude
          sur le prix. Affichez des tarifs fixes pour vos trajets récurrents (aéroport,
          gare, Bordeaux intramuros), ça rassure et ça qualifie le contact.
        </li>
        <li>
          <strong>Formulaire ou lien de réservation directe.</strong>
          Ne demandez pas à vos clients d'appeler pour réserver, proposez un
          formulaire de réservation en ligne avec date, heure, trajet et nombre
          de passagers.
        </li>
        <li>
          <strong>Les prestations spécifiques bien mises en avant.</strong>
          Mariage, transfert VIP, navette d'entreprise, événement sportif, chaque
          prestation spéciale mérite sa propre page ou section dédiée.
        </li>
      </ul>

      <h2>Le SEO local pour un chauffeur privé à Bordeaux</h2>

      <p>
        Google Business Profile est indispensable. Un profil complet avec photos du
        véhicule, horaires, zone de service et avis clients vous positionne dans
        le pack local pour les recherches de proximité. Complété par des pages de
        service SEO-optimisées, c'est un système d'acquisition qui fonctionne
        24h/24 sans frais variables.
      </p>

      <hr />

      <p>
        <em>
          Vous êtes chauffeur privé à Bordeaux et voulez réduire votre dépendance
          aux plateformes ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/vtc-reservations-sans-application">
              Comment un VTC peut générer des réservations sans application tierce
            </Link>
          </li>
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
        </ul>
      </nav>

    </article>
  )
}
