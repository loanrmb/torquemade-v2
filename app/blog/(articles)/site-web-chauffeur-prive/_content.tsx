'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function SiteWebChauffeurPriveContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Private Driver Website: The Elements That Convert</h1>

      <p>
        A visitor landing on your private driver site often has a precise, urgent need.
        They're comparing two or three providers. They decide in under two minutes. If
        your site doesn't convince them in that time, they leave for a competitor.
        Here's what makes the difference.
      </p>

      <h2>Essential trust elements</h2>

      <ul>
        <li><strong>Vehicle photos.</strong> No stock photos. Real photos of your car, clean, recent, interior and exterior. It's the first thing a client looks at.</li>
        <li><strong>Certifications and licences.</strong> VTC card, professional insurance, registration, mention them clearly. It reassures about service professionalism.</li>
        <li><strong>Client reviews.</strong> Integrate your Google reviews or collect testimonials. A client choosing between two providers always picks the one with more visible positive reviews.</li>
        <li><strong>Your service area.</strong> Clearly state the cities, airports, and stations you serve. It avoids unqualified contacts and helps local SEO.</li>
      </ul>

      <h2>The rates section: transparency or contact?</h2>

      <p>
        Often a divisive subject. Displaying fixed rates reassures clients and reduces
        unqualified contacts, but can also create price-first objections. For a VTC,
        the effective middle ground is displaying indicative rates for common trips
        (airport, station) and a quote form for special trips.
      </p>

      <h2>The booking form or button</h2>

      <p>
        Booking must be accessible from any page, ideally in the navigation menu and
        at the end of each section. The form should be short: date, time, departure,
        destination, passenger count. Each additional field reduces conversion rate.
      </p>

      <hr />

      <p>
        <em>
          Want a site that generates direct bookings?{' '}
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
            <Link href="/blog/tarification-vtc-fixe-compteur">
              Fixed vs metered pricing: how to display it clearly online
            </Link>
          </li>
          <li>
            <Link href="/blog/seo-vtc-trajets">
              SEO for VTC service: ranking for key routes
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Site web pour chauffeur privé : les éléments qui convertissent</h1>

      <p>
        Un visiteur qui atterrit sur votre site de chauffeur privé a souvent un
        besoin précis et urgent. Il compare deux ou trois prestataires. Il prend
        sa décision en moins de deux minutes. Si votre site ne le convainc pas
        dans ce laps de temps, il part chez le concurrent. Voici ce qui fait
        la différence.
      </p>

      <h2>Les éléments de confiance indispensables</h2>

      <ul>
        <li>
          <strong>Les photos du véhicule.</strong>
          Pas de stock photo. Des photos réelles de votre voiture, propre, récente,
          intérieur et extérieur. C'est la première chose qu'un client regarde,
          c'est dans ce véhicule qu'il va passer son trajet.
        </li>
        <li>
          <strong>Vos certifications et licences.</strong>
          Carte VTC, assurance professionnelle, carte grise, mentionnez-les
          clairement. Ça rassure sur le sérieux de la prestation.
        </li>
        <li>
          <strong>Les avis clients.</strong>
          Intégrez vos avis Google ou récoltez des témoignages. Un client qui
          hésite entre deux prestataires choisit systématiquement celui avec
          le plus d'avis positifs visibles.
        </li>
        <li>
          <strong>Votre zone de service.</strong>
          Indiquez clairement les villes, aéroports et gares que vous desservez.
          Ça évite les contacts non qualifiés et aide le SEO local.
        </li>
      </ul>

      <h2>La section tarifs : transparence ou contact ?</h2>

      <p>
        C'est souvent le sujet qui divise. Afficher des tarifs fixes rassure les
        clients et réduit les contacts non qualifiés: mais peut aussi créer
        des objections price-first. Pour un VTC, la solution intermédiaire
        efficace est d'afficher des tarifs indicatifs pour les trajets courants
        (aéroport, gare) et un formulaire de devis pour les trajets spéciaux.
      </p>

      <h2>Le formulaire ou le bouton de réservation</h2>

      <p>
        La réservation doit être accessible depuis n'importe quelle page du site,
        idéalement dans le menu de navigation et à la fin de chaque section.
        Le formulaire doit être court : date, heure, point de départ, destination,
        nombre de passagers. Chaque champ supplémentaire fait baisser le taux
        de conversion.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez un site qui génère des réservations directes ?{' '}
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
            <Link href="/blog/tarification-vtc-fixe-compteur">
              Tarification fixe vs compteur : comment l'afficher clairement en ligne
            </Link>
          </li>
          <li>
            <Link href="/blog/seo-vtc-trajets">
              SEO pour service VTC : se positionner sur les trajets clés
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
