'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function ReservationsActiviteNautiqueContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">How to Manage Online Bookings for a Nautical Activity</h1>

      <p>
        A nautical activity is unlike any other. You manage time slots that vary with
        tides and weather, limited equipment (each jet-ski is available in only one place
        at a time), specific safety rules, and strong seasonality. A generic booking system
        often fails to account for these constraints.
      </p>

      <h2>Specific constraints to manage</h2>

      <ul>
        <li><strong>Availability by unit.</strong> If you have three jet-skis, you can have three simultaneous bookings — not four. The system must manage inventory by unit, not just by time slot.</li>
        <li><strong>Weather conditions.</strong> Some days must be cancellable or reschedulable easily, without client charges. The system must handle refunds or reschedules in a few clicks.</li>
        <li><strong>Required documents.</strong> Boat licence, insurance, minimum age — some activities require document validation before confirmation.</li>
        <li><strong>Payment at booking.</strong> For nautical activities, prepayment is often essential to avoid no-shows — which are costly when equipment sits unused.</li>
      </ul>

      <h2>The importance of real-time availability</h2>

      <p>
        For seasonal activities, last-minute bookings are frequent. A real-time calendar
        prevents double bookings and lets clients immediately see available slots — without
        calling you to ask. This is what differentiates a professional booking system from
        a simple contact form: real-time transparency on availability.
      </p>

      <h2>Custom or adapted solution?</h2>

      <p>
        Solutions like FareHarbor or Bokun specialise in leisure and nautical activities,
        natively handling many of these constraints. Custom development becomes relevant if
        you have very specific needs or want to integrate booking into your site without
        redirecting to a third-party platform.
      </p>

      <hr />

      <p>
        <em>
          Managing a nautical activity and looking for a tailored booking solution?{' '}
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
            <Link href="/blog/automatiser-prise-rdv-artisan">
              How to automate online appointment booking
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
      <h1 className="blog-article-title">Comment gérer les réservations en ligne d'une activité nautique</h1>

      <p>
        Une activité nautique ne ressemble à aucune autre. Vous gérez des créneaux
        horaires variables selon les marées et la météo, des équipements limités
        (chaque jet-ski n'est disponible qu'à un endroit à la fois), des règles
        de sécurité spécifiques, et une saisonnalité forte. Un système de réservation
        générique ne prend souvent pas en compte ces contraintes.
      </p>

      <h2>Les contraintes spécifiques à gérer</h2>

      <ul>
        <li>
          <strong>La disponibilité par unité.</strong>
          Si vous avez trois jet-skis, vous pouvez avoir trois réservations simultanées —
          pas quatre. Le système doit gérer l'inventaire par unité, pas juste par créneau.
        </li>
        <li>
          <strong>Les conditions météo.</strong>
          Certaines journées doivent pouvoir être annulées ou reportées facilement,
          sans frais pour le client. Le système doit gérer les remboursements ou les
          reports en quelques clics.
        </li>
        <li>
          <strong>Les documents obligatoires.</strong>
          Permis bateau, assurance, âge minimum — certaines activités nécessitent
          la validation de documents avant la confirmation. Le système doit pouvoir
          collecter et vérifier ces informations.
        </li>
        <li>
          <strong>Le paiement à la réservation.</strong>
          Pour les activités nautiques, le prépaiement est souvent indispensable pour
          éviter les no-shows — qui coûtent cher quand un équipement reste inutilisé.
        </li>
      </ul>

      <h2>L'importance du calendrier en temps réel</h2>

      <p>
        Pour une activité saisonnière, les réservations de dernière minute sont
        fréquentes. Un calendrier qui se met à jour en temps réel évite les doubles
        réservations et permet aux clients de voir immédiatement les créneaux disponibles —
        sans vous appeler pour demander.
      </p>

      <p>
        C'est ce qui différencie un système de réservation professionnel d'un simple
        formulaire de contact : la transparence en temps réel sur les disponibilités.
      </p>

      <h2>Solution sur mesure ou solution adaptée ?</h2>

      <p>
        Des solutions comme FareHarbor ou Bokun sont spécialisées dans les activités
        de loisirs et nautiques. Elles gèrent nativement beaucoup de ces contraintes.
        Un développement sur mesure devient pertinent si vous avez des besoins très
        spécifiques ou si vous voulez intégrer la réservation dans votre site sans
        redirection vers une plateforme tierce.
      </p>

      <hr />

      <p>
        <em>
          Vous gérez une activité nautique et cherchez une solution de réservation
          adaptée ?{' '}
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
            <Link href="/blog/automatiser-prise-rdv-artisan">
              Comment automatiser la prise de rendez-vous en ligne
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
