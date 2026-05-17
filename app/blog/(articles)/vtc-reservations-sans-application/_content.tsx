'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function VtcReservationsSansApplicationContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">How a VTC Driver Can Generate Bookings Without a Third-Party App</h1>

      <p>
        Dependence on VTC apps is a comfortable trap. They bring trips — but each trip
        costs 25–30% commission. And if the platform lowers your rating, reduces your
        zone, or changes its conditions, you have no recourse. Building a direct booking
        channel means taking back control of your business.
      </p>

      <h2>Step 1: a website with integrated booking</h2>

      <p>
        The foundation of a direct channel is a site that allows booking without leaving
        the page. Not a simple contact form — a system where the client chooses their date,
        time, route, sees the rate, and confirms the booking. This site must be optimised
        for local SEO to appear on queries your potential clients type: "VTC Bordeaux,"
        "private driver Bordeaux airport rate."
      </p>

      <h2>Step 2: complementary booking channels</h2>

      <ul>
        <li><strong>Google Business Profile with booking link.</strong> GBP allows integrating a "Book" button directly in your Google listing — clients who find you on Maps can book without going through a third-party app.</li>
        <li><strong>WhatsApp Business.</strong> A WhatsApp Business number displayed on your site lets regular clients contact you directly — preferred channel for recurring trips.</li>
        <li><strong>Loyalty email.</strong> After each trip, send a thank-you email with your direct booking link. Satisfied clients book directly next time.</li>
      </ul>

      <h2>The gradual transition: don't cut platforms too quickly</h2>

      <p>
        Moving from 100% platform to direct model doesn't happen in a week. The effective
        strategy is maintaining a presence on apps while building the direct channel,
        systematically directing your best clients toward direct booking. When your direct
        channel generates 40–50% of your bookings, you can start reducing platform presence
        without risk.
      </p>

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
            <Link href="/blog/zero-commission-quitter-airbnb">
              Zero commission: why professionals are leaving platforms
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Comment un VTC peut générer des réservations sans application tierce</h1>

      <p>
        La dépendance aux applications VTC est un piège confortable. Elles apportent
        des courses — mais chaque course coûte 25 à 30 % de commission. Et si la
        plateforme baisse votre note, réduit votre zone ou change ses conditions,
        vous n'avez aucun recours. Construire un canal de réservation direct, c'est
        reprendre le contrôle de son activité.
      </p>

      <h2>Étape 1 : un site web avec réservation intégrée</h2>

      <p>
        La base d'un canal direct, c'est un site qui permet de réserver sans quitter
        la page. Pas un simple formulaire de contact — un système où le client choisit
        sa date, son heure, son trajet, voit le tarif, et confirme la réservation.
        Le paiement peut être en ligne (Stripe) ou à la course selon votre modèle.
      </p>

      <p>
        Ce site doit être optimisé pour le SEO local afin d'apparaître sur les
        requêtes que vos clients potentiels tapent : "VTC Bordeaux", "chauffeur
        privé aéroport Bordeaux tarif", "navette gare Bordeaux".
      </p>

      <h2>Étape 2 : les canaux de réservation complémentaires</h2>

      <ul>
        <li>
          <strong>Google Business Profile avec lien de réservation.</strong>
          GBP permet d'intégrer un bouton "Réserver" directement dans votre fiche
          Google — les clients qui vous trouvent sur Maps peuvent réserver sans
          passer par une app tierce.
        </li>
        <li>
          <strong>WhatsApp Business.</strong>
          Un numéro WhatsApp Business affiché sur votre site permet aux clients
          habituels de vous contacter directement. C'est le canal préféré pour
          les courses récurrentes — entreprises, transferts réguliers.
        </li>
        <li>
          <strong>Email de fidélisation.</strong>
          Après chaque course, envoyez un email de remerciement avec votre lien
          de réservation directe. Les clients satisfaits réservent directement
          la prochaine fois.
        </li>
      </ul>

      <h2>La transition progressive : ne coupez pas les plateformes trop vite</h2>

      <p>
        Passer d'un modèle 100 % plateforme à un modèle direct ne se fait pas
        en une semaine. La stratégie efficace est de maintenir une présence sur
        les apps pendant la montée en puissance du canal direct, tout en orientant
        systématiquement vos meilleurs clients vers la réservation directe.
      </p>

      <p>
        Quand votre canal direct génère 40 à 50 % de vos réservations, vous pouvez
        commencer à réduire votre présence sur les plateformes sans risque.
      </p>

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
            <Link href="/blog/zero-commission-quitter-airbnb">
              Zéro commission : pourquoi les pros quittent les plateformes
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
