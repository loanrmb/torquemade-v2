'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'
import TableComparaison from './_illustrations/TableComparaison'

export function SystemeReservationContent() {
  const lang = useLang()
  return lang === 'fr' ? <ArticleFR lang={lang} /> : <ArticleEN lang={lang} />
}

function ArticleFR({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>
      <header className="mb-16">
        <h1 className="blog-article-title" style={{ color: 'hsl(var(--text-primary))' }}>
          Comment intégrer un système de réservation sans commission
        </h1>
        <p className="mt-6 text-lg leading-relaxed opacity-60">
          Planity, Booksy, ResaOnline prennent entre 1 % et 3 % de chaque réservation. Sur un an, c&apos;est plusieurs milliers d&apos;euros offerts à une plateforme tierce. Un système sur mesure intégré à votre site vous coûte moins, vous appartient entièrement, et donne une meilleure expérience à vos clients.
        </p>
      </header>

      <h2>Le modèle à commission : à quel coût réel ?</h2>

      <p>Les plateformes de réservation en ligne se sont imposées ces dix dernières années avec une promesse simple : installation facile, zéro développement, visible sur leur marketplace. Le revers de la médaille est rarement affiché aussi clairement.</p>

      <p>Prenons un exemple concret. Un prestataire de loisirs nautiques réalise 200 réservations par mois à 60 € en moyenne. Avec une commission de 2 %, c&apos;est 2 400 € par an qui partent directement à la plateforme. À 3 %, on arrive à 3 600 €. Sur cinq ans, l&apos;outil gratuit a coûté entre 12 000 € et 18 000 €.</p>

      <h2>Ce que sans commission implique techniquement</h2>

      <p>Un système de réservation sans commission, c&apos;est un module que vous possédez et hébergez. Il est intégré directement à votre site — pas un iframe vers une plateforme externe, pas un lien qui redirige ailleurs.</p>

      <p>Voici ce qu&apos;il comprend dans sa version de base :</p>

      <p><strong>Un calendrier de disponibilités</strong> que le prestataire gère lui-même — ouverture de créneaux, fermetures exceptionnelles, gestion de la capacité.</p>

      <p><strong>Un formulaire de réservation</strong> rattaché à chaque créneau, avec les informations nécessaires au service : nombre de participants, préférences, niveau, etc.</p>

      <p><strong>Un système de confirmation</strong> par email — automatique à la réservation, et optionnellement un rappel 24h avant.</p>

      <p><strong>Un back-office simple</strong> pour voir les réservations à venir, gérer les annulations, et exporter les données clients.</p>

      <TableComparaison lang={lang} />

      <h2>Pourquoi l&apos;intégration à votre site est décisive</h2>

      <p>La différence entre un lien vers une plateforme externe et un module intégré n&apos;est pas que technique. Elle change l&apos;expérience perçue de votre service.</p>

      <p>Quand un client clique sur Réserver et atterrit sur un site qui ressemble à votre site — même police, même couleurs, même ton — la confiance reste intacte. Quand il bascule sur une interface générique d&apos;une plateforme tierce, il y a une rupture. Pour un service à plusieurs dizaines ou centaines d&apos;euros, cette rupture peut suffire à déclencher une hésitation.</p>

      <p>Sur le plan SEO, un module intégré maintient le visiteur sur votre domaine. Chaque interaction — navigation dans les créneaux, remplissage du formulaire — compte comme temps passé sur votre site. Un lien vers l&apos;extérieur envoie le visiteur ailleurs et interrompt la session Google Analytics.</p>

      <h2>Les options techniques : de la plus simple à la plus sur mesure</h2>

      <p>Il n&apos;y a pas une seule façon de construire un système de réservation sans commission. Le bon choix dépend du volume de réservations, de la complexité des créneaux, et du budget disponible.</p>

      <p><strong>Option 1 — Un outil no-code intégré par API.</strong> Des solutions comme Cal.com (open source) ou Tidycal permettent de créer des créneaux et d&apos;intégrer le module sur votre site via un composant embarqué. Pas de commission, hébergement sur leurs serveurs. Limite : personnalisation graphique partielle, branding de l&apos;outil visible.</p>

      <p><strong>Option 2 — Un formulaire connecté à un CRM.</strong> On construit un formulaire sur mesure qui envoie les réservations dans une base de données que vous contrôlez — Airtable, Notion, ou une base SQL — avec des confirmations automatiques par email. Entièrement personnalisée, données 100 % propriétaires.</p>

      <p><strong>Option 3 — Un module de réservation complet développé sur mesure.</strong> Pour des activités avec forte saisonnalité, multi-produits, ou gestion de groupes, on développe un système dédié : gestion des disponibilités en temps réel, paiement intégré (Stripe), confirmation automatique, back-office admin.</p>

      <h2>La question du paiement en ligne</h2>

      <p>Beaucoup de prestataires pensent que la commission est le prix à payer pour avoir le paiement en ligne. Ce n&apos;est pas exact.</p>

      <p>Stripe, le standard actuel du paiement web, prend 1,5 % + 0,25 € par transaction pour les cartes européennes. C&apos;est nettement moins que les 2 à 3 % des plateformes de réservation — et vous gardez la relation directe avec le client, les données de transaction, et la maîtrise des remboursements.</p>

      <p>L&apos;intégration Stripe dans un site Next.js est aujourd&apos;hui documentée, testée, et déployable en quelques jours. Ce n&apos;est pas un chantier de développement lourd.</p>

      <h2>Ce que vous gagnez en dehors des économies</h2>

      <p>Au-delà du coût direct, un système propriétaire vous donne quelque chose que les plateformes ne donnent jamais : les données de vos clients.</p>

      <p>Sur une plateforme tierce, vous voyez vos réservations mais vous n&apos;avez souvent pas accès aux emails, aux historiques d&apos;achats, ni à la possibilité de relancer ou fidéliser. Les données appartiennent à la plateforme.</p>

      <p>Avec votre propre système, chaque réservation enrichit votre base client. Vous pouvez envoyer un récapitulatif personnalisé, relancer une semaine avant la saison, proposer une offre de fidélité.</p>

      <h2>Par où commencer</h2>

      <p>La démarche que nous recommandons est la même que pour tout projet digital : commencer par l&apos;essentiel et itérer.</p>

      <p>Une première version fonctionnelle — formulaire de réservation, confirmation email, back-office basique — peut être opérationnelle en deux à trois semaines. Elle remplace la plateforme à commission dès le lancement. Les fonctionnalités supplémentaires (paiement intégré, rappels automatiques, statistiques) s&apos;ajoutent ensuite selon les besoins réels.</p>

      <hr />

      <p><em>Vous payez des commissions sur vos réservations et vous voulez reprendre la main ? <Link href="/contact">Contactez-nous</Link> — nous analysons votre situation et vous proposons une solution adaptée à votre volume et à votre budget.</em></p>
    </>
  )
}

function ArticleEN({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>
      <header className="mb-16">
        <h1 className="blog-article-title" style={{ color: 'hsl(var(--text-primary))' }}>
          How to Integrate a Booking System Without Commission
        </h1>
        <p className="mt-6 text-lg leading-relaxed opacity-60">
          Planity, Booksy, ResaOnline take between 1% and 3% of every booking. Over a year, that&apos;s thousands of euros going straight to a third-party platform. A custom system integrated into your site costs less, belongs entirely to you, and gives your clients a better experience.
        </p>
      </header>

      <h2>The Commission Model: What Does It Really Cost?</h2>

      <p>Online booking platforms have established themselves over the past decade with a simple promise: easy setup, zero development, visible on their marketplace. The flip side is rarely displayed as clearly.</p>

      <p>A concrete example: a water sports operator makes 200 bookings a month at an average of €60. With a 2% commission, that&apos;s €2,400 a year going straight to the platform. At 3%, it&apos;s €3,600. Over five years, the &ldquo;free&rdquo; tool has cost between €12,000 and €18,000.</p>

      <h2>What Commission-Free Means Technically</h2>

      <p>A commission-free booking system is a module you own and host. It&apos;s integrated directly into your site — not an iframe to an external platform, not a link that redirects elsewhere.</p>

      <p>Here&apos;s what a basic version includes:</p>

      <p><strong>An availability calendar</strong> that the operator manages themselves — opening slots, exceptional closures, capacity management.</p>

      <p><strong>A booking form</strong> attached to each slot, with the information your service needs: number of participants, preferences, level, etc.</p>

      <p><strong>An email confirmation system</strong> — automatic on booking, and optionally a reminder 24 hours before.</p>

      <p><strong>A simple back-office</strong> to view upcoming bookings, manage cancellations, and export client data.</p>

      <TableComparaison lang={lang} />

      <h2>Why Integration into Your Site Is Critical</h2>

      <p>The difference between a link to an external platform and an integrated module isn&apos;t just technical. It changes the perceived experience of your service.</p>

      <p>When a client clicks Book and lands on a page that looks like your site — same font, same colors, same tone — trust remains intact. When they switch to a generic third-party interface, there&apos;s a break. For a service costing several tens or hundreds of euros, that break can be enough to trigger hesitation.</p>

      <p>From an SEO perspective, an integrated module keeps the visitor on your domain. Every interaction — browsing slots, filling out the form — counts as time spent on your site. An external link sends the visitor elsewhere and breaks the Google Analytics session.</p>

      <h2>Technical Options: From Simplest to Most Custom</h2>

      <p>There&apos;s no single way to build a commission-free booking system. The right choice depends on booking volume, slot complexity, and available budget.</p>

      <p><strong>Option 1 — A no-code tool integrated via API.</strong> Solutions like Cal.com (open source) or Tidycal let you create slots and embed the module on your site via a widget. No commission, hosted on their servers. Limitation: partial graphic customization, tool branding visible.</p>

      <p><strong>Option 2 — A form connected to a CRM.</strong> Build a custom form that sends bookings to a database you control — Airtable, Notion, or a SQL database — with automatic email confirmations. Fully customized, 100% proprietary data.</p>

      <p><strong>Option 3 — A fully custom booking module.</strong> For activities with strong seasonality, multiple products, or group management, we develop a dedicated system: real-time availability management, integrated payment (Stripe), automatic confirmation, admin back-office.</p>

      <h2>The Online Payment Question</h2>

      <p>Many operators think the commission is the price to pay for online payment. That&apos;s not accurate.</p>

      <p>Stripe, the current standard for web payments, takes 1.5% + €0.25 per transaction for European cards. That&apos;s significantly less than the 2–3% of booking platforms — and you keep the direct client relationship, transaction data, and control over refunds.</p>

      <p>Stripe integration in a Next.js site is today well-documented, tested, and deployable in a few days. It&apos;s not a heavy development project.</p>

      <h2>What You Gain Beyond the Savings</h2>

      <p>Beyond the direct cost, a proprietary system gives you something platforms never give: your clients&apos; data.</p>

      <p>On a third-party platform, you see your bookings but often don&apos;t have access to emails, purchase histories, or the ability to re-engage or build loyalty. The data belongs to the platform.</p>

      <p>With your own system, every booking enriches your client database. You can send a personalized recap, re-engage a week before the season, offer a loyalty deal.</p>

      <h2>Where to Start</h2>

      <p>The approach we recommend is the same as for any digital project: start with the essentials and iterate.</p>

      <p>A first functional version — booking form, email confirmation, basic back-office — can be operational in two to three weeks. It replaces the commission platform from day one. Additional features (integrated payment, automatic reminders, analytics) are added based on real needs.</p>

      <hr />

      <p><em>You&apos;re paying commissions on your bookings and want to take back control? <Link href="/contact">Contact us</Link> — we&apos;ll analyze your situation and propose a solution tailored to your volume and budget.</em></p>
    </>
  )
}
