'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function GoogleSearchConsoleMetriquesContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Google Search Console: The 5 Metrics to Track Every Week</h1>

      <p>
        Google Search Console is free, directly connected to Google, and yet most
        sites never open it. That's a mistake. Here are the five metrics worth checking
        every week — and what they reveal about your site's SEO health.
      </p>

      <h2>1. Impressions</h2>

      <p>
        An impression is counted every time your site appears in Google results, even
        if the user doesn't click. If impressions rise, Google is showing more of your
        content. If they plateau or drop, something is blocking progress. Check impressions
        by page — a high-impression, low-click page probably needs a better title or
        meta description.
      </p>

      <h2>2. Click-through rate (CTR)</h2>

      <p>
        CTR is the clicks-to-impressions ratio. An average of 2–5% is typical; above 8%,
        your title and description are genuinely compelling. Below 1%, revisit your meta
        title. Filter by query to find keywords where you appear often but generate few
        clicks — these are your first optimisation targets.
      </p>

      <h2>3. Average position</h2>

      <p>
        Average position shows where Google ranks your site for a given query. Positions
        1–3: excellent. Positions 4–10: first page with room to improve. Beyond 10:
        second page — near-zero visibility. Focus on pages oscillating between positions
        8 and 15. A few places gained can double traffic on those queries.
      </p>

      <h2>4. Index coverage</h2>

      <p>
        The "Coverage" section shows how many pages Google has indexed and which ones
        are problematic. Errors (unindexed pages, broken redirects, 404s) should be
        fixed first. If Google isn't indexing a page, it will never appear in results
        regardless of content quality.
      </p>

      <h2>5. Core Web Vitals</h2>

      <p>
        Since 2021, Google integrates Core Web Vitals into its ranking algorithm.
        The "Experience" section shows whether your pages are "Good," "Needs improvement,"
        or "Poor." A red-rated page is penalised versus a green competitor with equivalent
        content — the invisible differentiator between two competing sites.
      </p>

      <hr />

      <p>
        <em>
          Want a full Search Console audit and a clear SEO roadmap?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/core-web-vitals-explication">
              Core Web Vitals: what Google really measures on your site
            </Link>
          </li>
          <li>
            <Link href="/blog/balises-meta-title-description">
              Meta title and description: the practical guide 2025
            </Link>
          </li>
          <li>
            <Link href="/blog/structurer-site-web-seo-conception">
              How to structure a website for SEO from day one
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Google Search Console : les 5 métriques à surveiller chaque semaine</h1>

      <p>
        Google Search Console est gratuit, directement connecté à Google, et pourtant
        la majorité des sites ne l'ouvrent jamais. C'est une erreur. Voici les cinq
        métriques qui méritent une attention hebdomadaire — et ce qu'elles révèlent
        sur la santé SEO de votre site.
      </p>

      <h2>1. Les impressions</h2>

      <p>
        Une impression est comptabilisée chaque fois que votre site apparaît dans les
        résultats Google, même si l'utilisateur ne clique pas. C'est le premier signal
        de visibilité : si vos impressions augmentent, Google indexe et affiche davantage
        votre contenu. Si elles stagnent ou chutent, quelque chose bloque la progression.
      </p>

      <p>
        Regardez les impressions par page plutôt que globalement. Une page qui génère
        beaucoup d'impressions mais peu de clics a probablement un problème de titre
        ou de meta description.
      </p>

      <h2>2. Le taux de clic (CTR)</h2>

      <p>
        Le CTR est le ratio clics/impressions. Un CTR moyen de 2 à 5 % est courant ;
        au-dessus de 8 %, votre titre et votre description accrochent vraiment.
        En dessous de 1 %, revoir le meta title s'impose — il n'est pas assez incitatif.
      </p>

      <p>
        Filtrez par requête pour trouver les mots-clés sur lesquels vous apparaissez
        souvent mais qui génèrent peu de clics. Ce sont vos premières cibles d'optimisation.
      </p>

      <h2>3. La position moyenne</h2>

      <p>
        La position moyenne indique à quelle place Google affiche votre site pour une
        requête donnée. Entre 1 et 3 : excellente visibilité. Entre 4 et 10 : première
        page, avec du potentiel. Au-delà de 10 : deuxième page ou plus — la visibilité
        est quasi nulle.
      </p>

      <p>
        Concentrez vos efforts sur les pages qui oscillent entre les positions 8 et 15.
        Un gain de quelques places sur ces requêtes peut doubler votre trafic.
      </p>

      <h2>4. La couverture d'index</h2>

      <p>
        La section "Couverture" indique combien de pages sont indexées par Google —
        et lesquelles posent problème. Les erreurs (pages non indexées, redirections
        cassées, erreurs 404) sont à corriger en priorité. Si Google n'indexe pas une
        page, elle n'apparaîtra jamais dans les résultats, quelle que soit la qualité
        de son contenu.
      </p>

      <h2>5. Les Core Web Vitals</h2>

      <p>
        Depuis 2021, Google intègre les Core Web Vitals dans son algorithme de classement.
        La section "Expérience" de Search Console indique si vos pages sont classées
        "Bien", "À améliorer" ou "Médiocre". Une page en rouge est pénalisée par rapport
        à un concurrent avec un score vert, à contenu équivalent.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez un audit complet de vos données Search Console ?{' '}
          <Link href="/contact">Contactez-nous</Link> — nous analysons vos métriques
          et identifions les leviers prioritaires.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/core-web-vitals-explication">
              Core Web Vitals : ce que Google mesure vraiment sur votre site
            </Link>
          </li>
          <li>
            <Link href="/blog/balises-meta-title-description">
              Balises meta title et description : le guide pratique 2025
            </Link>
          </li>
          <li>
            <Link href="/blog/structurer-site-web-seo-conception">
              Comment structurer un site web pour le SEO dès la conception
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
