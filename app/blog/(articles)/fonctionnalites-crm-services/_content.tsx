'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function FonctionnalitesCrmServicesContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Essential CRM Features for a Service Business</h1>

      <p>
        A CRM can offer hundreds of features. For a service business, consulting,
        trades, coaching, care, most are superfluous. Here are the modules that
        generate real impact, and those you can ignore without regret.
      </p>

      <h2>Truly essential features</h2>

      <ul>
        <li><strong>Contact management and exchange history.</strong> The base. Each contact has a record with contact details, exchange history, quotes sent, and services performed. Without this, it's not a CRM, it's an address book.</li>
        <li><strong>Visual sales pipeline.</strong> A Kanban board with your commercial process stages: prospect, quote sent, pending, won, lost. Seeing all your current deals at a glance changes how you manage your business.</li>
        <li><strong>Automatic follow-ups.</strong> An automatic follow-up 5 days after sending a quote without response. A planned task to contact a client 3 months after a service. These automations recover leads you would have forgotten.</li>
        <li><strong>Email integration.</strong> Emails exchanged with a client must automatically appear in their CRM record. Otherwise you keep juggling two tools.</li>
        <li><strong>Simple reports.</strong> Revenue generated, quotes sent vs accepted, lead sources. No complex dashboards needed: just the numbers that enable decisions.</li>
      </ul>

      <h2>What you can safely ignore for now</h2>

      <p>
        Advanced marketing features (automated email sequences, lead scoring, advertising
        integrations) are only relevant with sufficient prospect volume to feed them. For
        most SME service providers, they add complexity without measurable ROI at the start.
        Similarly, project management modules built into some CRMs are often weaker than
        a dedicated tool. Better a solid CRM for client relationships and a separate project
        tool for execution.
      </p>

      <hr />

      <p>
        <em>
          Want us to configure a CRM adapted to your service activity?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/crm-tpe-pme">
              What is a CRM and why does every SME need one?
            </Link>
          </li>
          <li>
            <Link href="/blog/crm-sur-mesure-vs-generique">
              Custom CRM vs generic software
            </Link>
          </li>
          <li>
            <Link href="/blog/api-integrations-outils">
              APIs and integrations: how to connect your tools without coding
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Les fonctionnalités indispensables d'un CRM pour une activité de services</h1>

      <p>
        Un CRM peut proposer des centaines de fonctionnalités. Pour une activité de
        services (conseil, artisanat, prestation, coaching, soins), la plupart
        sont superflues. Voici les modules qui génèrent un vrai impact et ceux que
        vous pouvez ignorer sans remords.
      </p>

      <h2>Les fonctionnalités vraiment indispensables</h2>

      <ul>
        <li>
          <strong>Gestion des contacts et historique des échanges.</strong>
          La base. Chaque contact a une fiche avec ses coordonnées, l'historique
          de vos échanges, les devis envoyés et les prestations réalisées. Sans ça,
          ce n'est pas un CRM, c'est un carnet d'adresses.
        </li>
        <li>
          <strong>Pipeline de vente visuel.</strong>
          Un tableau Kanban avec les étapes de votre processus commercial :
          prospect, devis envoyé, en attente, gagné, perdu. Voir toutes vos
          affaires en cours d'un coup d'œil change la façon dont vous pilotez
          votre activité.
        </li>
        <li>
          <strong>Relances automatiques.</strong>
          Configurer une relance automatique 5 jours après l'envoi d'un devis
          sans réponse. Une tâche planifiée pour rappeler un client 3 mois après
          une prestation. Ces automatisations récupèrent des leads que vous auriez
          oubliés.
        </li>
        <li>
          <strong>Intégration email.</strong>
          Les emails échangés avec un client doivent apparaître automatiquement
          dans sa fiche CRM. Sinon vous continuez à jongler entre deux outils.
        </li>
        <li>
          <strong>Rapports simples.</strong>
          Chiffre d'affaires généré, nombre de devis envoyés vs acceptés, sources
          de leads. Pas besoin de tableaux complexes: juste les chiffres qui
          permettent de décider.
        </li>
      </ul>

      <h2>Ce que vous pouvez ignorer pour l'instant</h2>

      <p>
        Les fonctionnalités marketing avancées (séquences d'emailing automatisées,
        scoring de leads, intégrations publicitaires) ne sont pertinentes que si
        vous avez un volume de prospects suffisant pour les alimenter. Pour la
        majorité des TPE de services, elles ajoutent de la complexité sans ROI
        mesurable au départ.
      </p>

      <p>
        De même, les modules de gestion de projet intégrés dans certains CRM sont
        souvent moins bons qu'un outil dédié. Mieux vaut un CRM solide pour la
        relation client et un outil de projet séparé pour l'exécution.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez qu'on configure un CRM adapté à votre activité de services ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/crm-tpe-pme">
              Qu'est-ce qu'un CRM et pourquoi chaque TPE/PME en a besoin ?
            </Link>
          </li>
          <li>
            <Link href="/blog/crm-sur-mesure-vs-generique">
              CRM sur mesure vs logiciel générique
            </Link>
          </li>
          <li>
            <Link href="/blog/api-integrations-outils">
              API et intégrations : comment connecter vos outils sans coder
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
