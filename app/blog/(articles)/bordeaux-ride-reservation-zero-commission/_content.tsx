'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function BordeauxRideContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">How Bordeaux Ride Built Its Zero-Commission Booking System</h1>

      <p>
        Bordeaux Ride is a premium private driver service based in Gironde. Facing
        platforms that capture a growing share of created value, they chose to build
        their own digital infrastructure, a site with integrated booking, ride management,
        and admin interface. Here's how this decision changed their business model.
      </p>

      <h2>The problem platforms created</h2>

      <p>
        Like many private drivers, Bordeaux Ride faced a paradox: the more their reputation
        grew, the more the platform took commission on new rides. Loyal clients who contacted
        them directly created less friction, but had no simple way to book without going
        through the app. The decision to build a proprietary solution came from this realisation:
        they needed a way to offer the Bordeaux Ride premium experience without the intermediary.
      </p>

      <h2>What was built</h2>

      <ul>
        <li><strong>A showcase site with direct booking.</strong> Clients can book a trip online (airport, station, event, inter-city transfer) with displayed rates, vehicle type selection, and email confirmation.</li>
        <li><strong>An admin management system.</strong> An internal dashboard to visualise upcoming bookings, manage repeat clients, and export billing data.</li>
        <li><strong>An integrated local SEO strategy.</strong> The site is optimised for key route queries in Gironde, generating organic traffic without advertising spend.</li>
      </ul>

      <h2>The result: less dependency, better margins</h2>

      <p>
        The proprietary system allowed Bordeaux Ride to welcome direct bookings from loyal
        clients without commission. The initial investment is amortised from a certain volume
        of direct bookings, and each additional direct ride represents a net margin gain.
      </p>

      <hr />

      <p>
        <em>
          Managing a VTC or private driver service and want to build your own system?{' '}
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
            <Link href="/blog/zero-commission-quitter-airbnb">
              Zero commission: why professionals are leaving platforms
            </Link>
          </li>
          <li>
            <Link href="/blog/reservation-airbnb-vs-proprietaire">
              Airbnb vs proprietary booking system
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Comment Bordeaux Ride a construit son système de réservation zéro commission</h1>

      <p>
        Bordeaux Ride est un service de chauffeur privé premium basé en Gironde.
        Face à des plateformes qui captent une part croissante de la valeur créée,
        ils ont fait le choix de construire leur propre infrastructure digitale :
        un site avec réservation intégrée, gestion des courses et interface admin.
        Voici comment cette décision a changé leur modèle économique.
      </p>

      <h2>Le problème que les plateformes créaient</h2>

      <p>
        Comme beaucoup de chauffeurs privés, Bordeaux Ride était confronté à un
        paradoxe : plus leur réputation grandissait, plus la plateforme leur prenait
        de commission sur leurs nouvelles courses. Les clients fidèles qui les
        contactaient directement généraient moins de friction, mais n'avaient pas
        de moyen simple de réserver sans passer par l'app.
      </p>

      <p>
        La décision de construire une solution propriétaire est venue de ce constat :
        il fallait un moyen de proposer l'expérience premium de Bordeaux Ride sans
        l'intermédiaire.
      </p>

      <h2>Ce qui a été construit</h2>

      <ul>
        <li>
          <strong>Un site vitrine avec réservation directe.</strong>
          Les clients peuvent réserver un trajet en ligne, aéroport, gare, événement,
          transfert inter-ville, avec tarifs affichés, sélection du type de véhicule
          et confirmation par email.
        </li>
        <li>
          <strong>Un système de gestion admin.</strong>
          Un tableau de bord interne permet de visualiser les réservations à venir,
          gérer les clients récurrents, et exporter les données de facturation.
        </li>
        <li>
          <strong>Une stratégie SEO locale intégrée.</strong>
          Le site est optimisé pour les requêtes de trajets clés en Gironde,
          générant un trafic organique sans dépense publicitaire.
        </li>
      </ul>

      <h2>Le résultat : moins de dépendance, plus de marges</h2>

      <p>
        Le système propriétaire a permis à Bordeaux Ride d'accueillir les réservations
        directes de leurs clients fidèles sans commission. L'investissement initial
        est amorti à partir d'un certain volume de réservations directes, et chaque
        course directe supplémentaire représente un gain net sur la marge.
      </p>

      <hr />

      <p>
        <em>
          Vous gérez un service VTC ou chauffeur privé et souhaitez construire
          votre propre système ?{' '}
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
            <Link href="/blog/zero-commission-quitter-airbnb">
              Zéro commission : pourquoi les pros quittent les plateformes
            </Link>
          </li>
          <li>
            <Link href="/blog/reservation-airbnb-vs-proprietaire">
              Système de réservation Airbnb vs solution propriétaire
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
