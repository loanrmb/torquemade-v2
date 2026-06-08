'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function ZeroCommissionQuitterAirbnbContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Zero Commission: Why Professionals Are Leaving Airbnb and Booking</h1>

      <p>
        Airbnb is 10 years old. Booking is over 25. These platforms transformed the
        tourism and accommodation industry — and many professionals owe their launch
        to them. But in 2025, the power balance is shifting. Commissions are rising,
        rules change without notice, and professionals who built their business on these
        platforms realise they built on something that was never truly theirs.
      </p>

      <h2>The commission calculation: what's not said</h2>

      <p>
        On Airbnb, the total commission is split between the host (3–5%) and the guest
        (up to 15%). For an owner managing their own rental at €100/night, the total
        commission represents €18–20 of value leaving the local circuit. Multiply by
        100 nights: €1,800–2,000 per year in commission for a single unit. And that's
        without counting policy changes — Airbnb has modified its cancellation rules,
        display conditions, and service fees several times in recent years.
      </p>

      <h2>What professionals taking back control do</h2>

      <ul>
        <li><strong>Build their own site with direct booking.</strong> Zero commission per booking. The client pays the displayed price, entirely to the provider.</li>
        <li><strong>Collect client emails.</strong> On Airbnb, you don't have the client's email before booking. With your own system, you build a list you own.</li>
        <li><strong>Incentivise loyal clients to book directly.</strong> "Next time, book on our site — we'll give you 5% off." Less than the commission, and it builds loyalty.</li>
        <li><strong>Maintain platform presence for acquisition.</strong> No question of abandoning Airbnb's visibility overnight. Use platforms to capture new clients, then convert them to direct clients.</li>
      </ul>

      <hr />

      <p>
        <em>
          Want to build your direct booking channel?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/reservation-airbnb-vs-proprietaire">
              Airbnb vs proprietary booking system
            </Link>
          </li>
          <li>
            <Link href="/blog/reservations-activite-nautique">
              How to manage bookings for a nautical activity
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Zéro commission : pourquoi les pros quittent Airbnb et Booking</h1>

      <p>
        Airbnb a 10 ans. Booking en a plus de 25. Ces plateformes ont transformé
        l'industrie du tourisme et de l'hébergement — et beaucoup de professionnels
        leur doivent leur décollage. Mais en 2025, le rapport de force change.
        Les commissions augmentent, les règles évoluent sans préavis, et les
        professionnels qui ont construit leur activité sur ces plateformes réalisent
        qu'ils n'ont construit sur rien qui leur appartient vraiment.
      </p>

      <h2>Le calcul de la commission : ce qu'on ne dit pas</h2>

      <p>
        Sur Airbnb, la commission totale se répartit entre l'hôte (3 à 5 %)
        et le voyageur (jusqu'à 15 %). En pratique, pour un propriétaire qui
        gère sa propre location et qui vend à 100 € la nuit, la commission
        totale représente 18 à 20 € de valeur qui quitte le circuit local.
        Multipliez par 100 nuits : 1 800 à 2 000 € par an de commission
        pour une seule unité.
      </p>

      <p>
        Et c'est sans compter les changements de politique — Airbnb a modifié
        plusieurs fois ses règles d'annulation, ses conditions d'affichage et
        ses frais de service ces dernières années, souvent avec un préavis
        minimal pour les hôtes.
      </p>

      <h2>Ce que les professionnels qui reprennent le contrôle font</h2>

      <ul>
        <li>
          <strong>Construisent leur propre site avec réservation directe.</strong>
          Zéro commission par réservation. Le client paie le prix affiché,
          intégralement au prestataire.
        </li>
        <li>
          <strong>Collectent les emails de leurs clients.</strong>
          Sur Airbnb, vous n'avez pas accès à l'email du client avant la réservation.
          Avec votre propre système, vous construisez une liste que vous possédez.
        </li>
        <li>
          <strong>Incitent les clients fidèles à réserver directement.</strong>
          "La prochaine fois, réservez sur notre site — on vous offre 5 % de réduction."
          C'est moins cher que la commission, et ça fidélise.
        </li>
        <li>
          <strong>Maintiennent une présence sur les plateformes pour l'acquisition.</strong>
          Pas question d'abandonner la visibilité d'Airbnb du jour au lendemain.
          La stratégie est de les utiliser pour capter de nouveaux clients,
          puis de les convertir en clients directs.
        </li>
      </ul>

      <hr />

      <p>
        <em>
          Vous voulez construire votre canal de réservation direct ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/reservation-airbnb-vs-proprietaire">
              Système de réservation Airbnb vs solution propriétaire
            </Link>
          </li>
          <li>
            <Link href="/blog/reservations-activite-nautique">
              Comment gérer les réservations d'une activité nautique
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
