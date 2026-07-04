'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function AutomatiserPriseRdvArtisanContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Why custom booking systems beat Calendly (for service businesses)</h1>

      <p>
        A tradesperson spends an average of 30–60 minutes per day answering calls to
        schedule, reschedule, or cancel appointments. That's billable working time lost,
        and a source of frustration for clients who can't reach anyone during job hours.
        Automating appointment booking solves this once and for all.
      </p>

      <h2>What automation changes concretely</h2>

      <p>
        With an online booking system, your client chooses their own slot in your calendar,
        at any hour, from their phone. You receive an automatic confirmation. They get a
        reminder the day before. If someone cancels, the slot frees up automatically.
        Nothing to manage manually. There's also a less visible benefit: clients who would
        never have called you (because they don't have time or dislike calling) can now
        book. Your conversion rate rises mechanically.
      </p>

      <h2>Solutions for your situation</h2>

      <ul>
        <li><strong>Turnkey solutions (Calendly, Cal.com).</strong> Ideal to start. Configure availability, embed the link on your site and emails. Free for essentials, paid for advanced features.</li>
        <li><strong>Native integration into your site.</strong> For a smoother experience, the booking system can be integrated directly into your site, same branding, same domain. This is what we build for clients with specific scheduling constraints or multiple service types.</li>
        <li><strong>With online payment.</strong> For some activities (classes, consultations, nautical activities), payment at booking is essential. Stripe or Sumup integrate easily into modern solutions.</li>
      </ul>

      <h2>Points not to overlook</h2>

      <p>
        An effective booking system must send automatic reminders 24h and 1h before.
        No-shows are costly. It must allow online cancellation with a minimum notice
        (48h, for example) so you have time to fill the slot. And it must sync with
        your calendar (Google Calendar, Outlook) to prevent double bookings.
      </p>

      <hr />

      <p>
        <em>
          Want to set up an online booking system tailored to your activity?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/systeme-reservation-sans-commission">
              How to integrate a commission-free booking system
            </Link>
          </li>
          <li>
            <Link href="/blog/crm-tpe-pme">
              What is a CRM and why does every SME need one?
            </Link>
          </li>
          <li>
            <Link href="/blog/formulaire-contact-conversion">
              Why your contact form doesn't convert
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Comment automatiser la prise de rendez-vous en ligne pour un artisan</h1>

      <p>
        Un artisan passe en moyenne 30 à 60 minutes par jour à répondre à des appels
        pour caler, décaler ou annuler des rendez-vous. C'est du temps de travail
        facturé en moins, et une source de frustration pour les clients qui n'arrivent
        pas à joindre quelqu'un pendant les heures de chantier. L'automatisation de la
        prise de rendez-vous règle ce problème une bonne fois pour toutes.
      </p>

      <h2>Ce que l'automatisation change concrètement</h2>

      <p>
        Avec un système de prise de RDV en ligne, votre client choisit lui-même son
        créneau dans votre agenda, à n'importe quelle heure, depuis son téléphone.
        Vous recevez une confirmation automatique. Il reçoit un rappel la veille.
        Si quelqu'un annule, le créneau se libère automatiquement. Vous n'avez rien
        à gérer manuellement.
      </p>

      <p>
        Ce gain de temps est direct. Mais il y a un second bénéfice moins visible :
        les clients qui ne vous auraient jamais appelé: parce qu'ils n'ont pas le
        temps ou n'aiment pas téléphoner: peuvent maintenant prendre RDV. Votre taux
        de conversion augmente mécaniquement.
      </p>

      <h2>Les solutions selon votre situation</h2>

      <ul>
        <li>
          <strong>Solutions clés en main (Calendly, Cal.com).</strong>
          Idéales pour commencer. Vous configurez vos disponibilités, vous intégrez
          le lien sur votre site et vos emails. Gratuit pour l'essentiel, payant
          pour les fonctionnalités avancées.
        </li>
        <li>
          <strong>Intégration native dans votre site.</strong>
          Pour une expérience plus fluide, le système de RDV peut être intégré
          directement dans votre site, même charte graphique, même domaine.
          C'est ce qu'on construit pour nos clients avec des contraintes spécifiques
          de planning ou de types de prestations multiples.
        </li>
        <li>
          <strong>Avec paiement en ligne.</strong>
          Pour certaines activités (cours, consultations, activités nautiques), le
          paiement à la réservation est indispensable. Stripe ou Sumup s'intègrent
          facilement dans les solutions modernes.
        </li>
      </ul>

      <h2>Les points à ne pas négliger</h2>

      <p>
        Un système de RDV efficace doit envoyer des rappels automatiques 24h et 1h
        avant, les no-shows coûtent cher. Il doit aussi permettre l'annulation en
        ligne avec un délai minimum (48h par exemple) pour que vous ayez le temps
        de remplir le créneau. Et il doit se synchroniser avec votre agenda
        (Google Calendar, Outlook) pour éviter les doubles réservations.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez mettre en place un système de RDV en ligne adapté à votre
          activité ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/systeme-reservation-sans-commission">
              Comment intégrer un système de réservation sans commission
            </Link>
          </li>
          <li>
            <Link href="/blog/crm-tpe-pme">
              Qu'est-ce qu'un CRM et pourquoi chaque TPE/PME en a besoin ?
            </Link>
          </li>
          <li>
            <Link href="/blog/formulaire-contact-conversion">
              Pourquoi votre formulaire de contact ne convertit pas
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
