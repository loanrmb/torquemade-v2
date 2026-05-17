'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function StudioWebBordeauxSurMesureContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Torquemade: The Custom Approach of an Independent Web Studio in Bordeaux</h1>

      <p>
        Torquemade is an independent web studio based in Bordeaux. We design custom websites
        and business software — CRM, booking systems, admin dashboards — for professionals
        who need tools that match exactly their activity. No templates. No subcontracting.
        One point of contact, from brief to delivery.
      </p>

      <h2>What "custom" means concretely</h2>

      <p>
        Custom doesn't necessarily mean more expensive or slower. It means every technical
        and editorial decision is made based on your specific activity — not a pre-built
        template we try to fit into your context. Your site is built on the stack that
        matches your performance and maintenance needs. Your content is written around the
        queries your future clients type. Your admin interface is built around your business
        processes — not the other way around.
      </p>

      <h2>Projects we work on</h2>

      <ul>
        <li><strong>Professional websites</strong> — showcase, e-commerce, portfolio, multi-brand sites. Next.js or Shopify stack depending on needs.</li>
        <li><strong>Custom booking systems</strong> — for nautical activities, VTC drivers, mobile beauticians, tradespeople. Zero commission, integrated into your existing or new site.</li>
        <li><strong>CRM and dashboards</strong> — admin interfaces adapted to your trade, synchronised with your existing tools.</li>
        <li><strong>SEO and optimisation</strong> — audit, content strategy, technical optimisation, monthly monitoring.</li>
      </ul>

      <h2>Our approach</h2>

      <p>
        Every project starts with an understanding phase: what problem must your site or tool
        solve? Who are your clients and how do they search? What are your success indicators?
        These questions define project priorities before the first line of code. We work with
        professionals who know what they want — and who seek a technical partner capable of
        building it properly, on time, with post-delivery support.
      </p>

      <hr />

      <p>
        <em>
          Have a web project or a need for a custom tool?{' '}
          <Link href="/contact">Contact us</Link> — we'll discuss your situation and
          tell you clearly if and how we can help.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/choisir-agence-web-bordeaux">
              How to choose a web agency in Bordeaux (without getting burned)
            </Link>
          </li>
          <li>
            <Link href="/blog/constructeur-site-gratuit-pme">
              Small business: why not to use a free website builder
            </Link>
          </li>
          <li>
            <Link href="/blog/impressions-google-sans-publicite">
              How to go from 0 to 800,000 Google impressions without advertising
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Torquemade : l'approche sur mesure d'un studio web indépendant à Bordeaux</h1>

      <p>
        Torquemade est un studio web indépendant basé à Bordeaux. Nous concevons
        des sites web sur mesure et des logiciels métier — CRM, systèmes de réservation,
        tableaux de bord admin — pour des professionnels qui ont besoin d'outils
        qui correspondent exactement à leur activité. Pas de template. Pas de sous-traitance.
        Un interlocuteur unique, du brief à la livraison.
      </p>

      <h2>Ce que "sur mesure" signifie concrètement</h2>

      <p>
        Le sur mesure ne signifie pas nécessairement plus cher ou plus long. Il signifie
        que chaque décision technique et éditoriale est prise en fonction de votre activité
        spécifique — pas d'un template préconçu qu'on essaie de faire rentrer dans votre
        contexte.
      </p>

      <p>
        Concrètement : votre site est construit sur la stack qui correspond à vos besoins
        de performance et de maintenance. Votre contenu est rédigé autour des requêtes
        que tapent vos futurs clients — pas autour des termes que vous utilisez en interne.
        Votre interface admin est construite autour de vos processus métier — pas l'inverse.
      </p>

      <h2>Les projets sur lesquels nous intervenons</h2>

      <ul>
        <li>
          <strong>Sites web professionnels</strong> — vitrine, e-commerce, portfolio,
          site multi-marques. Stack Next.js ou Shopify selon les besoins.
        </li>
        <li>
          <strong>Systèmes de réservation sur mesure</strong> — pour les activités
          nautiques, les VTC, les esthéticiennes à domicile, les artisans.
          Zéro commission, intégration dans votre site existant ou nouveau.
        </li>
        <li>
          <strong>CRM et tableaux de bord</strong> — interfaces d'administration
          adaptées à votre métier, synchronisées avec vos outils existants.
        </li>
        <li>
          <strong>SEO et optimisation</strong> — audit, stratégie de contenu,
          optimisation technique, suivi mensuel.
        </li>
      </ul>

      <h2>Notre approche</h2>

      <p>
        Chaque projet commence par une phase de compréhension : quel est le problème
        que votre site ou votre outil doit résoudre ? Qui sont vos clients et comment
        cherchent-ils ? Quels sont vos indicateurs de succès ? Ces questions définissent
        les priorités du projet avant la première ligne de code.
      </p>

      <p>
        Nous travaillons avec des professionnels qui savent ce qu'ils veulent —
        et qui cherchent un partenaire technique capable de le construire proprement,
        dans les délais et avec un suivi après livraison.
      </p>

      <hr />

      <p>
        <em>
          Vous avez un projet web ou un besoin d'outil sur mesure ?{' '}
          <Link href="/contact">Contactez-nous</Link> — on échange sur votre
          situation et on vous dit clairement si et comment on peut vous aider.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/choisir-agence-web-bordeaux">
              Comment choisir son agence web à Bordeaux (sans se faire avoir)
            </Link>
          </li>
          <li>
            <Link href="/blog/constructeur-site-gratuit-pme">
              Petite entreprise : pourquoi ne pas utiliser un constructeur de site gratuit
            </Link>
          </li>
          <li>
            <Link href="/blog/impressions-google-sans-publicite">
              Comment passer de 0 à 800 000 impressions Google sans publicité
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
