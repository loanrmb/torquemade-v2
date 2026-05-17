'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function ReservationAirbnbVsPropriétaireContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Airbnb vs Proprietary Booking System: 2025 Assessment</h1>

      <p>
        In 2025, most accommodation providers and tourism operators are in the same
        situation: dependent on Airbnb or Booking to fill their calendar, but beginning
        to calculate the real cost. Between commissions, changing rules, and losing
        direct client contact, more and more are choosing to take back control.
      </p>

      <h2>What Airbnb and Booking bring — and what they cost</h2>

      <p>
        The platforms' value is real: massive audience, traveller trust, secure payments.
        For someone starting out, it's often the fastest path to first bookings. But the
        price is steep. Airbnb takes 3–5% on the host side, plus 12–15% on the guest side.
        Booking takes up to 15–18% from the accommodation provider. On a €100/night rental,
        €15–20 goes straight to commission — every night, every booking, without exception.
      </p>

      <h2>What a proprietary solution provides</h2>

      <ul>
        <li><strong>Zero commission per booking.</strong> The cost is fixed — design plus hosting — not proportional to your revenue. The more bookings you generate, the wider the gap in your favour.</li>
        <li><strong>Client data belongs to you.</strong> On Airbnb, you don't have access to your client's email before booking. With your own system, you build a loyal client database you can follow up with, thank, and retain.</li>
        <li><strong>The booking experience in your image.</strong> Your branding, your photos, your storytelling. Not the platform's — which places your competitors right next to you.</li>
      </ul>

      <h2>The right strategy: both, with a hierarchy</h2>

      <p>
        Abandoning Airbnb overnight is risky — especially if you're still building your
        reputation. The most effective strategy is maintaining a presence on platforms for
        visibility while encouraging repeat clients to book directly on your site next time.
        A 5% direct booking discount costs less than the platform commission — you win, your
        client wins too.
      </p>

      <hr />

      <p>
        <em>
          Want to build your own booking system?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/zero-commission-quitter-airbnb">
              Zero commission: why professionals are leaving Airbnb and Booking
            </Link>
          </li>
          <li>
            <Link href="/blog/systeme-reservation-sans-commission">
              How to integrate a commission-free booking system
            </Link>
          </li>
          <li>
            <Link href="/blog/bordeaux-ride-reservation-zero-commission">
              How Bordeaux Ride created a zero-commission booking system
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Système de réservation Airbnb vs solution propriétaire : bilan 2025</h1>

      <p>
        En 2025, la majorité des hébergeurs et des prestataires touristiques sont dans
        la même situation : ils dépendent d'Airbnb ou de Booking pour remplir leur
        calendrier, mais ils commencent à en calculer le coût réel. Entre les commissions,
        les règles qui changent et la perte de contact direct avec leurs clients, de plus
        en plus choisissent de reprendre la main.
      </p>

      <h2>Ce qu'Airbnb et Booking apportent — et ce qu'ils coûtent</h2>

      <p>
        La valeur des plateformes est réelle : audience massive, confiance des voyageurs,
        paiements sécurisés. Pour quelqu'un qui démarre, c'est souvent le chemin le plus
        rapide pour générer ses premières réservations.
      </p>

      <p>
        Mais le prix est lourd. Airbnb prend entre 3 % et 5 % côté hôte, plus 12 à 15 %
        côté voyageur. Booking prend jusqu'à 15 à 18 % côté hébergeur. Sur une location
        à 100 € la nuit, 15 à 20 € partent directement dans la commission — chaque nuit,
        chaque réservation, sans exception.
      </p>

      <h2>Ce qu'une solution propriétaire apporte</h2>

      <ul>
        <li>
          <strong>Zéro commission par réservation.</strong>
          Le coût est fixe — conception + hébergement — pas proportionnel à votre
          chiffre d'affaires. Plus vous générez de réservations, plus l'écart se creuse
          en votre faveur.
        </li>
        <li>
          <strong>Les données client vous appartiennent.</strong>
          Sur Airbnb, vous n'avez pas accès à l'email de votre client avant la réservation.
          Avec votre propre système, vous construisez une base de données de clients
          fidèles que vous pouvez relancer, remercier, fidéliser.
        </li>
        <li>
          <strong>L'expérience de réservation à votre image.</strong>
          Votre charte graphique, vos photos, votre storytelling. Pas celui de la
          plateforme qui met vos concurrents à côté de vous.
        </li>
      </ul>

      <h2>La bonne stratégie : les deux, avec une hiérarchie</h2>

      <p>
        Abandonner Airbnb du jour au lendemain est risqué — surtout si vous êtes encore
        en train de construire votre réputation. La stratégie la plus efficace est de
        maintenir une présence sur les plateformes pour la visibilité, tout en incitant
        vos clients récurrents à réserver directement sur votre site la prochaine fois.
      </p>

      <p>
        Une réduction de 5 % pour réservation directe, c'est moins cher que la commission
        de la plateforme — vous y gagnez, votre client aussi.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez construire votre propre système de réservation ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/zero-commission-quitter-airbnb">
              Zéro commission : pourquoi les pros quittent Airbnb et Booking
            </Link>
          </li>
          <li>
            <Link href="/blog/systeme-reservation-sans-commission">
              Comment intégrer un système de réservation sans commission
            </Link>
          </li>
          <li>
            <Link href="/blog/bordeaux-ride-reservation-zero-commission">
              Comment Bordeaux Ride a créé un système de réservation zéro commission
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
