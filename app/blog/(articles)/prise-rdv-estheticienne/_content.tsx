'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function PriseRdvEstheticienneContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Online Appointment Booking: Why It's Essential for a Beautician</h1>

      <p>
        In 2025, a majority of people prefer booking appointments online rather than calling.
        True for doctors, hairdressers, restaurants — and increasingly true for beauticians.
        If your site offers only a contact form or phone number, you're losing clients who
        would have booked immediately if they could do so directly from your site.
      </p>

      <h2>What online booking changes</h2>

      <ul>
        <li><strong>24/7 availability.</strong> A client who sees your site at 10pm can book immediately — without waiting until the next morning when you're available.</li>
        <li><strong>Reduced no-shows.</strong> Online booking systems automatically send SMS or email reminders 24h and 1h before. No-show rates drop significantly.</li>
        <li><strong>Time savings for you.</strong> Each online booking is one fewer call or SMS to handle. For a solo beautician, that's precious time recovered.</li>
        <li><strong>Better schedule filling.</strong> When clients can see your availability in real time, they fill slots that were staying empty — often mid-day or early-week slots.</li>
      </ul>

      <h2>Available solutions</h2>

      <ul>
        <li><strong>Planity.</strong> Beauty-specialised in France, integrates on your site with complete booking, reminders, and optional payment.</li>
        <li><strong>Sector platforms.</strong> Platforms that also bring visibility — with commission on new clients they bring.</li>
        <li><strong>Custom integration.</strong> For beauticians with a personalised site, a booking system integrated directly in the site offers the smoothest experience — same branding, same domain.</li>
      </ul>

      <h2>Online deposit: reducing last-minute cancellations</h2>

      <p>
        For long or expensive services (lash extensions, full treatments), requiring an
        online deposit at booking considerably reduces last-minute cancellations. The client
        who has already paid part is much less likely to cancel without notice.
      </p>

      <hr />

      <p>
        <em>
          Want to set up an online booking system for your activity?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/site-web-estheticienne">
              Website for a beautician: what you absolutely must display
            </Link>
          </li>
          <li>
            <Link href="/blog/automatiser-prise-rdv-artisan">
              How to automate online appointment booking for a tradesperson
            </Link>
          </li>
          <li>
            <Link href="/blog/seo-local-estheticienne">
              Local SEO for a beautician: ranking in your city
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Prise de RDV en ligne : pourquoi c'est indispensable pour une esthéticienne</h1>

      <p>
        En 2025, une majorité de personnes préfère prendre rendez-vous en ligne plutôt
        que d'appeler. C'est vrai pour les médecins, les coiffeurs, les restaurants —
        et c'est de plus en plus vrai pour les esthéticiennes. Si votre site propose
        uniquement un formulaire de contact ou un numéro de téléphone, vous perdez
        des clientes qui auraient pris RDV immédiatement si elles avaient pu le faire
        directement depuis votre site.
      </p>

      <h2>Ce que la prise de RDV en ligne change</h2>

      <ul>
        <li>
          <strong>Disponibilité 24h/24.</strong>
          Une cliente qui voit votre site à 22h peut prendre RDV immédiatement —
          sans attendre le lendemain matin que vous soyez disponible.
        </li>
        <li>
          <strong>Réduction des no-shows.</strong>
          Les systèmes de RDV en ligne envoient automatiquement des rappels par
          SMS ou email 24h et 1h avant. Le taux de no-shows chute de façon
          significative.
        </li>
        <li>
          <strong>Gain de temps pour vous.</strong>
          Chaque RDV pris en ligne est un appel ou un SMS de moins à gérer.
          Pour une esthéticienne qui travaille seule, c'est du temps précieux
          récupéré.
        </li>
        <li>
          <strong>Meilleur remplissage du planning.</strong>
          Quand les clientes peuvent voir vos disponibilités en temps réel, elles
          se placent dans les créneaux qui restaient vides — souvent les créneaux
          de milieu de journée ou de début de semaine.
        </li>
      </ul>

      <h2>Les solutions disponibles</h2>

      <p>
        Pour une esthéticienne, plusieurs solutions existent selon votre contexte :
      </p>

      <ul>
        <li>
          <strong>Planity.</strong>
          Spécialisé beauté en France, s'intègre sur votre site et propose
          un système de RDV complet avec rappels et paiement optionnel.
        </li>
        <li>
          <strong>Doctolib Beauté / RDV Esthétique.</strong>
          Des plateformes sectorielles qui apportent aussi de la visibilité —
          avec commission sur les nouveaux clients apportés.
        </li>
        <li>
          <strong>Intégration sur mesure.</strong>
          Pour les esthéticiennes qui ont un site personnalisé, un système
          de RDV intégré directement dans le site offre l'expérience la plus
          fluide — même charte graphique, même domaine.
        </li>
      </ul>

      <h2>L'acompte en ligne : réduire les annulations de dernière minute</h2>

      <p>
        Pour les prestations longues ou onéreuses (extensions de cils, soins complets),
        demander un acompte en ligne à la réservation réduit considérablement les
        annulations de dernière minute. Le client qui a déjà payé une partie est
        beaucoup moins susceptible d'annuler sans prévenir.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez mettre en place un système de RDV en ligne pour votre activité ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/site-web-estheticienne">
              Site web pour esthéticienne : ce qu'il faut absolument afficher
            </Link>
          </li>
          <li>
            <Link href="/blog/automatiser-prise-rdv-artisan">
              Comment automatiser la prise de rendez-vous en ligne pour un artisan
            </Link>
          </li>
          <li>
            <Link href="/blog/seo-local-estheticienne">
              SEO local pour une esthéticienne : se positionner dans sa ville
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
