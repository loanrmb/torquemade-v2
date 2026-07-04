'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function ZoneInterventionSansAdresseContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">How to Display Your Service Area Without Giving Your Exact Address</h1>

      <p>
        For a mobile beautician, an itinerant plumber, or any professional working at
        clients' homes, the address question on a website is delicate. Displaying your
        personal address exposes your home to strangers. Displaying nothing hurts your
        local SEO. Here's the middle-ground solution that works.
      </p>

      <h2>What Google accepts for mobile professionals</h2>

      <p>
        Google Business Profile has a specific option for professionals who travel to
        clients: you can hide your physical address and display only your service area.
        In GBP settings, check "I deliver goods and services to my customers", you can
        define your service area by kilometre radius or by list of cities and departments.
        Google will still display you in local results, without revealing your exact address.
      </p>

      <h2>How to display it on your site</h2>

      <ul>
        <li><strong>A list of covered cities.</strong> "I work in Bordeaux, Mérignac, Pessac, Bègles and within a 20km radius of Bordeaux." Precise, honest, and helps local SEO.</li>
        <li><strong>A zone map.</strong> An illustration or map (without precise location of your home) showing your intervention perimeter visually.</li>
        <li><strong>An FAQ.</strong> "Do you work in [city]?" An FAQ answers this for most frequently asked cities.</li>
      </ul>

      <h2>The SEO impact of a well-defined area</h2>

      <p>
        Explicitly mentioning the cities in your service area on your site creates local
        relevance signals that Google can use to position you on searches from those cities.
        "Mobile beautician Mérignac" is an attainable query if your site clearly mentions
        Mérignac in your service area.
      </p>

      <hr />

      <p>
        <em>
          Want to optimise your local presence without exposing your address?{' '}
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
            <Link href="/blog/google-business-profile-optimisation">
              Google Business Profile: how to optimise your listing for local SEO
            </Link>
          </li>
          <li>
            <Link href="/blog/site-web-estheticienne">
              Website for a beautician: what you absolutely must display
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Comment afficher sa zone d'intervention sans donner son adresse exacte</h1>

      <p>
        Pour une esthéticienne à domicile, un plombier itinérant ou tout autre
        professionnel qui travaille chez ses clients, la question de l'adresse sur
        le site est délicate. Afficher votre adresse personnelle expose votre domicile
        à des inconnus. Ne rien afficher nuit à votre référencement local. Voici
        la solution intermédiaire qui fonctionne.
      </p>

      <h2>Ce que Google accepte pour les professionnels itinérants</h2>

      <p>
        Google Business Profile a une option spécifique pour les professionnels qui
        se déplacent chez leurs clients : vous pouvez masquer votre adresse physique
        et afficher uniquement votre zone de service. Dans GBP, allez dans les
        informations de l'entreprise et cochez l'option "je me déplace chez mes clients".
        Vous pouvez définir votre zone de service par rayon en kilomètres ou par
        liste de villes et départements.
      </p>

      <p>
        Google vous affichera quand même dans les résultats locaux, sans révéler
        votre adresse exacte.
      </p>

      <h2>Comment l'afficher sur votre site</h2>

      <p>
        Sur votre site, présentez votre zone d'intervention de façon claire et
        utile pour vos futurs clients :
      </p>

      <ul>
        <li>
          <strong>Une liste des villes couvertes.</strong>
          "J'interviens à Bordeaux, Mérignac, Pessac, Bègles et dans un rayon
          de 20 km autour de Bordeaux." C'est précis, honnête, et aide le
          référencement local.
        </li>
        <li>
          <strong>Une carte de zone.</strong>
          Une illustration ou une carte (sans localisation précise de votre domicile)
          qui montre visuellement votre périmètre d'intervention.
        </li>
        <li>
          <strong>Une FAQ.</strong>
          "Intervenez-vous à [ville] ?", une FAQ répond à cette question pour
          les villes les plus fréquemment demandées.
        </li>
      </ul>

      <h2>L'impact SEO d'une zone bien définie</h2>

      <p>
        Mentionner explicitement les villes de votre zone d'intervention sur votre
        site crée autant de signaux de pertinence locale que Google peut utiliser
        pour vous positionner sur les recherches depuis ces villes. "Esthéticienne
        à domicile Mérignac" est une requête atteignable si votre site mentionne
        clairement Mérignac dans votre zone d'intervention.
      </p>

      <hr />

      <p>
        <em>
          Vous cherchez à optimiser votre présence locale sans exposer votre adresse ?{' '}
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
            <Link href="/blog/google-business-profile-optimisation">
              Google Business Profile : optimiser sa fiche pour le SEO local
            </Link>
          </li>
          <li>
            <Link href="/blog/site-web-estheticienne">
              Site web pour esthéticienne : ce qu'il faut absolument afficher
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
