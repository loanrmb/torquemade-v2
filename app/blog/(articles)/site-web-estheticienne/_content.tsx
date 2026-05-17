'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function SiteWebEstheticienneContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Website for an Beautician: What You Absolutely Must Display</h1>

      <p>
        A person searching for a beautician online is making an act of trust. They're
        entrusting their body, face, and skin to someone they don't yet know. Your website
        must answer an unspoken question: "Can I trust this person?" Here are the elements
        that build that trust.
      </p>

      <h2>Photos: the foundation of trust</h2>

      <p>A beautician with no photos on their site immediately loses half their potential visitors. Essential photos:</p>

      <ul>
        <li><strong>Your professional photo.</strong> Not an Instagram profile picture — a clear, smiling photo in your work environment. Clients want to see who they're trusting.</li>
        <li><strong>Your treatment room or workspace.</strong> Cleanliness, atmosphere, equipment — these photos reassure about the context of the service.</li>
        <li><strong>Before/after results.</strong> With your clients' consent, result photos are your best commercial argument. They concretely demonstrate your expertise.</li>
      </ul>

      <h2>The service menu</h2>

      <p>
        Each service deserves its own section with: clear name, description of what's done,
        duration, and price. Missing prices on a beautician's site is one of the main causes
        of abandonment. Organise services in logical categories: facial treatments, waxing,
        manicure/pedicure, makeup, body treatments.
      </p>

      <h2>Appointment booking</h2>

      <p>
        The appointment button must be visible from every page — at the top of the site,
        at the end of each service section, in the footer. An online booking system
        eliminates SMS or phone back-and-forth and reduces no-shows through automatic reminders.
      </p>

      <h2>Practical information</h2>

      <p>
        Service area if you're mobile, address if you have a fixed practice, opening hours,
        accepted payment methods. These seem basic — their absence creates unnecessary friction
        that drives away clients.
      </p>

      <hr />

      <p>
        <em>
          Beautician looking for a site that converts?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/seo-local-estheticienne">
              Local SEO for a beautician: ranking in your city
            </Link>
          </li>
          <li>
            <Link href="/blog/prise-rdv-estheticienne">
              Online booking: why it's essential for a beautician
            </Link>
          </li>
          <li>
            <Link href="/blog/zone-intervention-sans-adresse">
              How to display your service area without giving your exact address
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Site web pour esthéticienne : ce qu'il faut absolument afficher</h1>

      <p>
        Une personne qui cherche une esthéticienne en ligne fait une démarche de
        confiance. Elle va confier son corps, son visage, sa peau à quelqu'un qu'elle
        ne connaît pas encore. Votre site web doit répondre à une question non formulée :
        "Est-ce que je peux avoir confiance en cette personne ?" Voici les éléments
        qui construisent cette confiance.
      </p>

      <h2>Les photos : la base de la confiance</h2>

      <p>
        Une esthéticienne sans photos sur son site perd immédiatement la moitié
        de ses visiteuses potentielles. Les photos indispensables :
      </p>

      <ul>
        <li>
          <strong>Votre photo professionnelle.</strong>
          Pas une photo de profil Instagram — une photo claire, souriante, dans
          votre environnement de travail. Les clientes veulent voir à qui elles
          vont faire confiance.
        </li>
        <li>
          <strong>Votre cabinet ou espace de travail.</strong>
          Propreté, ambiance, équipements — ces photos rassurent sur le cadre
          dans lequel la prestation va se dérouler.
        </li>
        <li>
          <strong>Vos réalisations avant/après.</strong>
          Avec l'accord de vos clientes, les photos de résultats sont le meilleur
          argument commercial. Elles montrent concrètement votre savoir-faire.
        </li>
      </ul>

      <h2>Le menu des prestations</h2>

      <p>
        Chaque prestation mérite sa propre section avec : nom clair, description
        de ce qui est réalisé, durée, et tarif. L'absence de tarif sur un site
        d'esthéticienne est l'une des principales causes d'abandon — les visiteuses
        passent au site suivant plutôt que d'appeler pour demander.
      </p>

      <p>
        Organisez les prestations en catégories logiques : soins du visage, épilation,
        manucure/pédicure, maquillage, soins du corps. Ça facilite la navigation
        et aide le SEO.
      </p>

      <h2>La prise de rendez-vous</h2>

      <p>
        Le bouton de prise de RDV doit être visible depuis toutes les pages — en
        haut du site, à la fin de chaque section de prestations, dans le footer.
        Le système de RDV en ligne (Calendly, Planity ou intégration sur mesure)
        élimine les allers-retours par SMS ou téléphone et réduit les no-shows
        grâce aux rappels automatiques.
      </p>

      <h2>Les informations pratiques</h2>

      <p>
        Zone de service si vous êtes itinérante, adresse si vous avez un cabinet fixe,
        horaires d'ouverture, modes de paiement acceptés. Ces informations semblent
        basiques — leur absence crée des frictions inutiles qui font fuir les clientes.
      </p>

      <hr />

      <p>
        <em>
          Vous êtes esthéticienne et cherchez un site qui convertit ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/seo-local-estheticienne">
              SEO local pour une esthéticienne : se positionner dans sa ville
            </Link>
          </li>
          <li>
            <Link href="/blog/prise-rdv-estheticienne">
              Prise de RDV en ligne : pourquoi c'est indispensable pour une esthéticienne
            </Link>
          </li>
          <li>
            <Link href="/blog/zone-intervention-sans-adresse">
              Comment afficher sa zone d'intervention sans donner son adresse exacte
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
