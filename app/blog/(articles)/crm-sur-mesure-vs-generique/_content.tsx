'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function CrmSurMesureVsGeneriqueContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Custom CRM vs Generic Software: What It Changes in Practice</h1>

      <p>
        The question isn't which is "better" — it's which fits your situation. A
        well-configured generic CRM beats a poorly conceived custom one. And a custom
        CRM adapted to your trade is worth infinitely more than a generic tool nobody
        uses because it's too complex or not relevant enough.
      </p>

      <h2>What generic CRMs do well</h2>

      <p>
        HubSpot, Pipedrive, Salesforce, Zoho — designed to cover needs common to tens
        of thousands of companies. They manage sales pipelines, contacts, emails,
        reminders, and reports. They integrate with Gmail, Outlook, Slack, and hundreds
        of other tools. For a standard activity — consulting, B2B services, e-commerce —
        they're more than sufficient and allow you to start in days.
      </p>

      <h2>Where generic tools hit their limits</h2>

      <ul>
        <li><strong>Non-standard business workflows.</strong> A motorcycle dealer managing financing files, delivery dates, registrations, and trade-ins has a workflow HubSpot didn't anticipate. They'll end up hacking custom fields that don't really fit.</li>
        <li><strong>Integration with proprietary systems.</strong> If your activity requires the CRM to communicate with your booking software, point-of-sale, or in-house ERP, native integrations often won't suffice.</li>
        <li><strong>Team adoption.</strong> A CRM too complex or ill-adapted to the trade isn't used. Data stays empty. Worst scenario: you pay a monthly subscription for a tool nobody fills in.</li>
      </ul>

      <h2>When custom is worth the investment</h2>

      <p>
        A custom CRM is justified when: your process is specific enough that generic tools
        create constant friction, your volume justifies the initial investment, and you have
        a clear vision of what the tool must do. The right approach: start with a generic,
        identify recurring friction points, then build a custom solution only where the
        generic truly blocks your activity.
      </p>

      <hr />

      <p>
        <em>
          Have you identified the limits of your current CRM?{' '}
          <Link href="/contact">Contact us</Link> — we'll analyse your situation
          and propose the most appropriate solution.
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
            <Link href="/blog/fonctionnalites-crm-services">
              Essential CRM features for a service business
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
      <h1 className="blog-article-title">CRM sur mesure vs logiciel générique : ce que ça change en pratique</h1>

      <p>
        La question n'est pas de savoir lequel est "meilleur" — c'est de savoir lequel
        correspond à votre situation. Un CRM générique bien configuré vaut mieux qu'un
        CRM sur mesure mal pensé. Et un CRM sur mesure adapté à votre métier vaut
        infiniment plus qu'un outil générique que personne n'utilise parce qu'il est
        trop compliqué ou pas assez pertinent.
      </p>

      <h2>Ce que les CRM génériques font bien</h2>

      <p>
        HubSpot, Pipedrive, Salesforce, Zoho — ces outils ont été conçus pour couvrir
        les besoins communs à des dizaines de milliers d'entreprises. Ils gèrent les
        pipelines de vente, les contacts, les emails, les rappels et les rapports.
        Ils s'intègrent avec Gmail, Outlook, Slack et des centaines d'autres outils.
        Pour une activité standard — conseil, services BtoB, e-commerce — ils suffisent
        largement et permettent de démarrer en quelques jours.
      </p>

      <h2>Où les génériques atteignent leurs limites</h2>

      <ul>
        <li>
          <strong>Workflows métier non standards.</strong>
          Un concessionnaire moto qui gère des dossiers de financement, des dates
          de livraison, des immatriculations et des reprises de véhicules a un workflow
          que HubSpot n'a pas prévu. Il finira à bidouiller des champs personnalisés
          qui ne correspondent pas vraiment à son besoin.
        </li>
        <li>
          <strong>Intégration avec des systèmes propriétaires.</strong>
          Si votre activité nécessite que le CRM communique avec votre logiciel de
          réservation, votre caisse, ou votre ERP maison, les intégrations natives
          des génériques ne suffiront pas toujours.
        </li>
        <li>
          <strong>Adoption par les équipes.</strong>
          Un CRM trop complexe ou mal adapté au métier n'est pas utilisé. Les données
          restent vides. C'est le pire scénario : vous payez un abonnement mensuel pour
          un outil que personne ne remplit.
        </li>
      </ul>

      <h2>Quand le sur mesure vaut l'investissement</h2>

      <p>
        Un CRM sur mesure se justifie quand : votre processus est suffisamment spécifique
        pour que les génériques créent de la friction constante, votre volume justifie
        l'investissement initial, et vous avez une vision claire de ce que l'outil doit
        faire. Le sur mesure est construit autour de votre métier — pas l'inverse.
      </p>

      <p>
        La bonne approche : commencer par un générique, identifier les frictions
        récurrentes, et construire une solution sur mesure uniquement sur les points
        où le générique bloque vraiment votre activité.
      </p>

      <hr />

      <p>
        <em>
          Vous avez identifié les limites de votre CRM actuel ?{' '}
          <Link href="/contact">Contactez-nous</Link> — on analyse votre situation
          et on vous propose la solution la plus adaptée.
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
            <Link href="/blog/fonctionnalites-crm-services">
              Les fonctionnalités indispensables d'un CRM pour une activité de services
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
