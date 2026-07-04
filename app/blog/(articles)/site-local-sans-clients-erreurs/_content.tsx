'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function SiteLocalSansClientsErreursContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Why 80% of Local Sites Generate Zero Clients (And How to Avoid That)</h1>

      <p>
        Having a website is no longer enough. Most local sites, created once, never updated,
        little or no optimisation, are invisible on Google and don't convert visitors who
        find them. Here are the five mistakes that explain why, and how to fix them.
      </p>

      <h2>Mistake 1: no keyword strategy</h2>

      <p>
        A site created without identifying the queries your future clients type will be
        invisible on those queries. Page titles, descriptions, and content must be built
        around the terms your clients use, not those you use internally.
      </p>

      <h2>Mistake 2: a slow site</h2>

      <p>
        Google penalises slow sites in its rankings, and visitors abandon pages that take
        more than 3 seconds to load. A beautiful but slow site generates no leads. Measure
        your Core Web Vitals in Google Search Console and address problems as a priority.
      </p>

      <h2>Mistake 3: no clear call to action</h2>

      <p>
        Most local sites present their services but never clearly state what they expect
        from the visitor. "Contact us" at the bottom of the page in small text is not a CTA.
        Each page must guide toward a precise, visible action: book, request a quote, call.
      </p>

      <h2>Mistake 4: no social proof</h2>

      <p>
        Client reviews, testimonials, client logos, key figures, without these, the visitor
        has no reason to trust you over a competitor. In local sectors, trust is the main
        contact trigger.
      </p>

      <h2>Mistake 5: no local Google presence</h2>

      <p>
        A site without an optimised Google Business Profile is absent from local results
        and Google Maps. For most local businesses and service providers, the local pack
        is the main source of qualified traffic, and it's managed from GBP, not from
        the site.
      </p>

      <hr />

      <p>
        <em>
          Want us to audit your site and identify what's blocking it?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/mesurer-succes-site-web">
              How to measure website success beyond traffic
            </Link>
          </li>
          <li>
            <Link href="/blog/google-business-profile-optimisation">
              Google Business Profile: how to optimise your listing for local SEO
            </Link>
          </li>
          <li>
            <Link href="/blog/site-web-meilleur-commercial">
              Why your website is your best salesperson in 2025
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Pourquoi 80 % des sites locaux ne génèrent aucun client (et comment éviter ça)</h1>

      <p>
        Avoir un site web ne suffit plus. La majorité des sites locaux, créés une fois,
        jamais mis à jour, peu ou pas optimisés: sont invisibles sur Google et ne
        convertissent pas les visiteurs qui les trouvent. Voici les cinq erreurs qui
        expliquent pourquoi, et comment y remédier.
      </p>

      <h2>Erreur 1 : aucune stratégie de mots-clés</h2>

      <p>
        Un site créé sans avoir identifié les requêtes que tapent vos futurs clients
        sera invisible sur ces requêtes. Les titres de pages, les descriptions et le
        contenu doivent être construits autour des termes que vos clients utilisent,
        pas ceux que vous utilisez en interne.
      </p>

      <h2>Erreur 2 : un site lent</h2>

      <p>
        Google pénalise les sites lents dans ses classements, et les visiteurs abandonnent
        les pages qui mettent plus de 3 secondes à charger. Un site beau mais lent ne
        génère aucun lead. Mesurez vos Core Web Vitals dans Google Search Console
        et traitez les problèmes en priorité.
      </p>

      <h2>Erreur 3 : pas d'appel à l'action clair</h2>

      <p>
        La majorité des sites locaux présentent leurs services mais ne disent jamais
        clairement ce qu'ils attendent du visiteur. "Contactez-nous" en bas de page,
        en petit, n'est pas un CTA. Chaque page doit guider vers une action précise
        et visible : réserver, demander un devis, appeler.
      </p>

      <h2>Erreur 4 : aucune preuve sociale</h2>

      <p>
        Les avis clients, les témoignages, les logos de clients, les chiffres clés :
        sans ces éléments, le visiteur n'a aucune raison de vous faire confiance plutôt
        qu'un concurrent. Dans les secteurs locaux, la confiance est le principal
        déclencheur de prise de contact.
      </p>

      <h2>Erreur 5 : aucune présence locale sur Google</h2>

      <p>
        Un site sans Google Business Profile optimisé est absent des résultats locaux
        et de Google Maps. Pour la majorité des commerces et prestataires locaux, le pack
        local est la principale source de trafic qualifié, et il est géré depuis GBP,
        pas depuis le site.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez qu'on audite votre site et qu'on identifie ce qui bloque ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/mesurer-succes-site-web">
              Comment mesurer le succès d'un site web au-delà du trafic
            </Link>
          </li>
          <li>
            <Link href="/blog/google-business-profile-optimisation">
              Google Business Profile : optimiser sa fiche pour le SEO local
            </Link>
          </li>
          <li>
            <Link href="/blog/site-web-meilleur-commercial">
              Pourquoi votre site web est votre meilleur commercial en 2025
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
