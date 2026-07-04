'use client'

import { useLang } from '@/components/app-provider'

export function CustomBookingSystemContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Stop Paying Commission on Every Booking</h1>

      <h2>You&apos;re losing 1–3% of every reservation</h2>

      <p>
        A hair salon doing €10,000 in services per month loses €100–300 in commission.
      </p>

      <p>
        A personal trainer with 50 sessions per month at €80 each? €40–120 of revenue
        disappears monthly.
      </p>

      <p>
        Booking platforms argue: &ldquo;But we bring you customers!&rdquo; Except you
        already bring customers. Your site, your Instagram, your repeat clients. Why pay
        to process their appointments?
      </p>

      <h2>Your customer isn&apos;t really yours</h2>

      <p>
        When someone books through a third-party platform, the platform owns the data:
        email, phone, history, preferences.
      </p>

      <p>
        You? You get the bare minimum to run the appointment. You can&apos;t send them a
        promo directly. You can&apos;t track their habits. The platform controls your
        customer relationship.
      </p>

      <p>
        With a system on your own site, every booking builds a customer relationship
        <em> you</em> control.
      </p>

      <p className="mt-6 pl-4 border-l-2 border-neutral-300 italic">
        <strong>💰 What does each booking actually cost you?</strong><br />
        Let&apos;s calculate how much you&apos;re losing to commissions, and whether a
        custom system pays for itself in 6 months.
      </p>

      <h2>A custom system: cheaper and more powerful</h2>

      <p>Cost of a booking system integrated into your site:</p>

      <ul>
        <li>Initial development: €2–4K</li>
        <li>Maintenance/year: €0–500</li>
      </ul>

      <p>Cost of a SaaS platform over 3 years:</p>

      <ul>
        <li>Commission: ~€3–5K (on €100K revenue)</li>
        <li>Subscription: ~€1–2K</li>
        <li>Total: €4–7K minimum</li>
      </ul>

      <p>
        The custom system pays for itself quickly. After that? Zero recurring fees.
      </p>

      <p>Bonus: you can add whatever you want:</p>

      <ul>
        <li>Pre-appointment questionnaire (client preferences)</li>
        <li>Integration with your personal calendar</li>
        <li>Auto SMS reminders 24 hours before</li>
        <li>Integrated payment system (deposit collected at booking)</li>
      </ul>

      <h2>Why not do this sooner?</h2>

      <p>
        Many think it&apos;s too complex. It&apos;s not. A basic booking system takes 1–2
        weeks to build. An advanced one with notifications, integrated payments, and client
        history? 3–4 weeks.
      </p>

      <p>Yes, it needs maintenance. But it&apos;s your system. You own it 100%.</p>

      <hr />

      <p>
        <em>
          <strong>Bring your numbers (bookings per month, average price). We&apos;ll tell you straight if it&apos;s worth it or not.</strong>
        </em>
      </p>

      <p>
        <a href="https://cal.com/torquemade/20min" className="underline">
          Book your call →
        </a>
      </p>
    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Arrêtez de payer une commission sur chaque réservation</h1>

      <h2>Vous perdez 1–3 % de chaque réservation</h2>

      <p>
        Un salon de coiffure qui fait 10 000 € de prestations par mois perd 100–300 €
        de commission.
      </p>

      <p>
        Un coach personnel avec 50 séances par mois à 80 € l&apos;une ? 40–120 €
        d&apos;argent qui s&apos;envole chaque mois.
      </p>

      <p>
        Les plateformes de réservation argumentent : « Mais on vous amène les clients ! »
        Sauf que vous amenez déjà les clients. Votre site, votre Instagram, vos clients
        récurrents. Pourquoi payer pour placer leurs rendez-vous ?
      </p>

      <h2>Votre client n&apos;est pas vraiment le vôtre</h2>

      <p>
        Quand quelqu&apos;un réserve via une plateforme tierce, la plateforme collecte les
        données : email, téléphone, historique, préférences.
      </p>

      <p>
        Vous ? Vous récupérez juste les infos minimales pour le rendez-vous. Vous ne pouvez
        pas lui envoyer directement une promo. Vous ne pouvez pas tracker ses habitudes
        d&apos;achat. La plateforme contrôle votre relation client.
      </p>

      <p>
        Avec un système sur votre propre site, chaque réservation crée une relation client
        que <em>vous</em> contrôlez.
      </p>

      <p className="mt-6 pl-4 border-l-2 border-neutral-300 italic">
        <strong>💰 Combien coûte vraiment chaque réservation ?</strong><br />
        Calculons ensemble combien vous perdez en commissions, et si un système sur mesure
        vous paierait ses frais en 6 mois.
      </p>

      <h2>Un système sur mesure : moins cher et plus puissant</h2>

      <p>Coût d&apos;un système de réservation intégré à votre site :</p>

      <ul>
        <li>Développement initial : 2–4 K€</li>
        <li>Maintenance/an : 0–500 €</li>
      </ul>

      <p>Coût d&apos;une plateforme SaaS sur 3 ans :</p>

      <ul>
        <li>Commission : ~3–5 K€ (sur 100 K€ de revenus)</li>
        <li>Abonnement : ~1–2 K€</li>
        <li>Total : 4–7 K€ minimum</li>
      </ul>

      <p>
        Le système sur mesure s&apos;autofinance rapidement. Et ensuite ? Zéro frais récurrents.
      </p>

      <p>Bonus: vous pouvez ajouter ce que vous voulez :</p>

      <ul>
        <li>Questionnaire avant le rendez-vous (préférences du client)</li>
        <li>Intégration avec votre calendrier personnel</li>
        <li>Notifications SMS automatiques 24h avant</li>
        <li>Système de paiement intégré (acompte directement à la réservation)</li>
      </ul>

      <h2>Pourquoi ne pas le faire plus tôt ?</h2>

      <p>
        Beaucoup pensent que c&apos;est trop complexe. Ça ne l&apos;est pas. Un système de
        réservation basique prend 1–2 semaines à développer. Un système avancé avec
        notifications, paiements intégrés et historique client ? 3–4 semaines.
      </p>

      <p>
        Et oui, ça demande une maintenance. Mais c&apos;est votre système. Vous le contrôlez
        à 100 %.
      </p>

      <hr />

      <p>
        <em>
          <strong>Apportez vos chiffres (nombre de réservations par mois, prix moyen). On vous dit clairement si ça vaut le coup ou pas.</strong>
        </em>
      </p>

      <p>
        <a href="https://cal.com/torquemade/20min" className="underline">
          Réservez votre appel →
        </a>
      </p>
    </article>
  )
}
