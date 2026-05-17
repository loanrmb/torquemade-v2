'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function ConstructeurSiteGratuitPmeContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Small Business: Why Not to Use a Free Website Builder</h1>

      <p>
        Wix, Squarespace, Webflow — these tools let you create a site in hours without
        coding. That's their promise. And it's kept: you can have a functional site online
        quickly. But "functional" and "performant" aren't synonyms. Here's what these
        builders don't do — and why it's costly long-term.
      </p>

      <h2>The performance and SEO problem</h2>

      <p>
        Website builders generate HTML/CSS/JS code loaded with unnecessary features for
        your use case. Result: heavy, slow-loading pages with poor Core Web Vitals scores.
        Google penalises slow pages — on competitive queries, a Wix site will systematically
        rank behind a well-optimised Next.js or WordPress site. Integrated SEO tools are
        rudimentary: you can fill in a title and description — that's all.
      </p>

      <h2>The personalisation and conversion problem</h2>

      <p>
        Templates are designed to look good in screenshots — not to convert. User journeys
        are standardised. Trust elements (testimonials, projects, guarantees) are hard to
        integrate convincingly without breaking the template. Each modification means
        negotiating with the builder's constraints.
      </p>

      <h2>The ownership and portability problem</h2>

      <p>
        On Wix or Squarespace, your site exists on their infrastructure. If the platform
        changes its conditions, raises prices, or closes, migrating is complex and expensive.
        Your content is somewhat hostage to the ecosystem.
      </p>

      <h2>When builders make sense</h2>

      <p>
        A freelancer testing an activity, an association needing minimal online presence,
        a creator wanting a simple portfolio — in these cases, a builder is relevant.
        For an SME wanting organic traffic, qualified leads, and a differentiating
        professional presence: it's a false economy.
      </p>

      <hr />

      <p>
        <em>
          Want a site that will genuinely perform?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/nextjs-plus-rapide-que-wordpress">
              Why a Next.js site is faster than a WordPress site
            </Link>
          </li>
          <li>
            <Link href="/blog/choisir-agence-web-bordeaux">
              How to choose a web agency in Bordeaux (without getting burned)
            </Link>
          </li>
          <li>
            <Link href="/blog/roi-site-web">
              Website ROI: how to measure what it really brings you
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Petite entreprise : pourquoi ne pas utiliser un constructeur de site gratuit</h1>

      <p>
        Wix, Squarespace, Webflow — ces outils permettent de créer un site en quelques
        heures sans coder. C'est leur promesse. Et elle est tenue : vous pouvez avoir
        un site fonctionnel en ligne rapidement. Mais "fonctionnel" et "performant"
        ne sont pas synonymes. Voici ce que ces constructeurs ne font pas — et pourquoi
        ça coûte cher sur le long terme.
      </p>

      <h2>Le problème des performances et du SEO</h2>

      <p>
        Les constructeurs de sites génèrent du code HTML/CSS/JS chargé de nombreuses
        fonctionnalités inutiles pour votre cas d'usage. Résultat : des pages lourdes,
        lentes à charger, avec des scores Core Web Vitals médiocres. Google pénalise
        les pages lentes — sur les requêtes compétitives, un site Wix sera systématiquement
        classé derrière un site Next.js ou même un WordPress bien optimisé.
      </p>

      <p>
        Les outils SEO intégrés aux constructeurs sont rudimentaires. Ils permettent
        de renseigner un title et une description — c'est tout. Pas de contrôle fin
        sur les données structurées, le rendering, l'indexation dynamique ou les
        performances de chargement.
      </p>

      <h2>Le problème de la personnalisation et de la conversion</h2>

      <p>
        Les templates sont conçus pour paraître beaux sur une capture d'écran —
        pas pour convertir. Les parcours utilisateurs sont standardisés. Les éléments
        de confiance (témoignages, projets, garanties) sont difficiles à intégrer
        de façon vraiment convaincante sans casser le template. Et chaque modification
        demande de négocier avec les contraintes du constructeur.
      </p>

      <h2>Le problème de la propriété et de la portabilité</h2>

      <p>
        Sur Wix ou Squarespace, votre site existe sur leur infrastructure. Si la
        plateforme change ses conditions, augmente ses tarifs ou ferme, migrer
        votre site vers un autre prestataire est complexe et coûteux. Votre contenu
        est plus ou moins prisonnier de l'écosystème.
      </p>

      <h2>Pour qui les constructeurs ont du sens</h2>

      <p>
        Un freelance qui teste une activité, une association qui a besoin d'une
        présence en ligne minimale, un créateur qui veut un portfolio simple —
        dans ces cas, un constructeur est pertinent. Pour une PME qui veut du
        trafic organique, des leads qualifiés et une présence professionnelle
        différenciante : c'est une fausse économie.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez un site qui performera réellement ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/nextjs-plus-rapide-que-wordpress">
              Pourquoi un site Next.js est plus rapide qu'un site WordPress
            </Link>
          </li>
          <li>
            <Link href="/blog/choisir-agence-web-bordeaux">
              Comment choisir son agence web à Bordeaux (sans se faire avoir)
            </Link>
          </li>
          <li>
            <Link href="/blog/roi-site-web">
              ROI d'un site web : comment mesurer ce que ça vous rapporte vraiment
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
