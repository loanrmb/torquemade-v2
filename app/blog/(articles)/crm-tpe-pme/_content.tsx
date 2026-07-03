'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function CrmTpePmeContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">What Is a CRM and Why Does Every SME Need One?</h1>

      <p>
        CRM: Customer Relationship Management. Behind this technical term is a simple
        tool in principle: one central place where you store everything you know about
        your clients and prospects, contact details, purchases, exchanges, quotes sent,
        planned follow-ups. For an SME, it's often the difference between professional
        tracking and an overflowing spreadsheet.
      </p>

      <h2>The problem a CRM solves</h2>

      <p>
        Without a CRM, client information is scattered. Contacts in emails, notes in
        notebooks, quotes in a Drive folder, reminders in your head. A client calls.
        You spend two minutes finding their file. A prospect requested a quote three
        weeks ago, you forgot to follow up. A loyal client goes to a competitor because
        you didn't notice they hadn't renewed. A CRM centralises all of this.
        One contact = one record = full history.
      </p>

      <h2>What a CRM enables concretely</h2>

      <ul>
        <li><strong>Track the sales pipeline.</strong> Each prospect has a status: first contact, quote sent, negotiation, won, lost. See at a glance where each deal stands.</li>
        <li><strong>Automate follow-ups.</strong> If a quote hasn't had a response in 5 days, the CRM automatically sends a follow-up email. Without you thinking about it.</li>
        <li><strong>Analyse commercial performance.</strong> Quote conversion rate, average sales cycle length, client origin, data that helps you improve your process.</li>
        <li><strong>Centralise communication.</strong> Calls, emails, appointments, all logged in the client record. When a colleague takes over, they have full history.</li>
      </ul>

      <h2>Generic CRM or custom CRM?</h2>

      <p>
        To start, a generic CRM like HubSpot (free up to a certain number of contacts)
        or Pipedrive covers most SME needs with a few hours of configuration. A custom
        CRM makes sense when your activity has specific constraints: integration with
        your booking system, internal validation workflows, a dashboard adapted to your
        trade. An investment justified when the generic tool creates too much friction.
      </p>

      <hr />

      <p>
        <em>
          Unsure between a generic CRM and a custom solution?{' '}
          <Link href="/contact">Contact us</Link>: we'll help you choose based
          on your activity and volume.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/crm-sur-mesure-vs-generique">
              Custom CRM vs generic software: what it changes in practice
            </Link>
          </li>
          <li>
            <Link href="/blog/automatiser-prise-rdv-artisan">
              How to automate online appointment booking for a tradesperson
            </Link>
          </li>
          <li>
            <Link href="/blog/tableau-de-bord-admin-gerant">
              How an admin dashboard changes a manager's daily life
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Qu'est-ce qu'un CRM et pourquoi chaque TPE/PME en a besoin ?</h1>

      <p>
        CRM : Customer Relationship Management. En français : gestion de la relation
        client. Derrière ce terme technique se cache un outil simple dans son principe :
        un endroit unique où vous centralisez tout ce que vous savez sur vos clients
        et prospects, leurs coordonnées, leurs achats, vos échanges, les devis envoyés,
        les relances prévues. Pour une TPE ou une PME, c'est souvent la différence entre
        un suivi professionnel et un tableur qui déborde.
      </p>

      <h2>Le problème que le CRM résout</h2>

      <p>
        Sans CRM, l'information client est dispersée. Les coordonnées sont dans les
        emails, les notes dans les carnets, les devis dans un dossier Drive, les rappels
        dans la tête. Un client appelle: vous cherchez pendant deux minutes qui il est
        et où en est son dossier. Un prospect demande un devis il y a trois semaines,
        vous avez oublié de relancer. Un client fidèle repart chez un concurrent parce
        que vous n'avez pas vu qu'il n'avait pas renouvelé sa commande.
      </p>

      <p>
        Le CRM centralise tout ça. Un contact = une fiche = tout l'historique.
      </p>

      <h2>Ce qu'un CRM permet concrètement</h2>

      <ul>
        <li>
          <strong>Suivre le pipeline commercial.</strong>
          Chaque prospect a un statut : premier contact, devis envoyé, négociation,
          gagné, perdu. Vous voyez en un coup d'œil où en est chaque affaire et
          ce qui est en attente de votre part.
        </li>
        <li>
          <strong>Automatiser les relances.</strong>
          Si un devis n'a pas eu de réponse dans 5 jours, le CRM peut envoyer
          automatiquement un email de relance. Sans que vous y pensiez.
        </li>
        <li>
          <strong>Analyser la performance commerciale.</strong>
          Taux de conversion des devis, durée moyenne du cycle de vente, origine
          des clients, les données qui permettent d'améliorer votre processus.
        </li>
        <li>
          <strong>Centraliser la communication.</strong>
          Appels, emails, rendez-vous, tout est loggé dans la fiche client.
          Quand un collaborateur prend la suite, il a accès à tout l'historique.
        </li>
      </ul>

      <h2>CRM générique ou CRM sur mesure ?</h2>

      <p>
        Pour commencer, un CRM générique comme HubSpot (gratuit jusqu'à un certain
        nombre de contacts) ou Pipedrive suffit dans la majorité des cas. Ces outils
        couvrent les besoins standard d'une TPE en quelques heures de configuration.
      </p>

      <p>
        Un CRM sur mesure devient intéressant quand votre activité a des contraintes
        spécifiques : intégration avec votre système de réservation, workflow de
        validation interne, tableau de bord adapté à votre métier. C'est un
        investissement qui se justifie quand le générique crée trop de friction.
      </p>

      <hr />

      <p>
        <em>
          Vous hésitez entre un CRM générique et une solution sur mesure ?{' '}
          <Link href="/contact">Contactez-nous</Link>: on vous aide à choisir
          selon votre activité et votre volume.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/crm-sur-mesure-vs-generique">
              CRM sur mesure vs logiciel générique : ce que ça change en pratique
            </Link>
          </li>
          <li>
            <Link href="/blog/automatiser-prise-rdv-artisan">
              Comment automatiser la prise de rendez-vous en ligne pour un artisan
            </Link>
          </li>
          <li>
            <Link href="/blog/tableau-de-bord-admin-gerant">
              Comment un tableau de bord admin change le quotidien d'un gérant
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
