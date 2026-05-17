'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function SitemapXmlSeoContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Sitemap.xml: Why It's Essential and How to Generate It</h1>

      <p>
        An XML sitemap is a file that lists all the pages of your site you want Google
        to index — a map you give Google's crawler saying: "here's everything to explore."
        It's particularly useful for sites with more than twenty pages, new sites,
        or sites that regularly publish new content.
      </p>

      <h2>Why a sitemap speeds up indexation</h2>

      <p>
        Without a sitemap, Google discovers your pages by following links — from homepage
        to internal pages, then to linked pages, and so on. This can take days or weeks
        for deeper pages. With a sitemap submitted in Search Console, you give Google a
        direct list of all your URLs, enabling faster and more comprehensive crawling.
      </p>

      <h2>What a good sitemap should contain</h2>

      <ul>
        <li><strong>All important pages</strong> — service pages, blog posts, product pages, landing pages. Exclude confirmation pages, duplicates, and internal search results.</li>
        <li><strong>Last modification date</strong> — the <code>&lt;lastmod&gt;</code> tag tells Google when a page was last updated, prompting re-crawling.</li>
        <li><strong>No noindexed pages</strong> — if a page has a noindex tag, it shouldn't appear in the sitemap. It's a contradictory signal Google interprets negatively.</li>
      </ul>

      <h2>How to generate and submit it</h2>

      <p>
        In a Next.js project, <code>app/sitemap.ts</code> automatically generates a
        dynamic sitemap at each deployment. For WordPress, SEO plugins (Yoast, Rank Math)
        handle it natively. Once generated, submit your sitemap in Google Search Console
        (under "Sitemaps") and regularly check for indexation errors.
      </p>

      <hr />

      <p>
        <em>
          Want us to ensure your sitemap is correctly configured?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/google-search-console-metriques">
              Google Search Console: the 5 metrics to track every week
            </Link>
          </li>
          <li>
            <Link href="/blog/structurer-site-web-seo-conception">
              How to structure a website for SEO from day one
            </Link>
          </li>
          <li>
            <Link href="/blog/nextjs-plus-rapide-que-wordpress">
              Why a Next.js site is faster than a WordPress site
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Sitemap.xml : pourquoi c'est indispensable et comment le générer</h1>

      <p>
        Un sitemap XML est un fichier qui liste toutes les pages de votre site que
        vous souhaitez que Google indexe. C'est en quelque sorte une carte que vous
        donnez au robot de Google pour lui dire : "voici tout ce que tu dois explorer."
        C'est particulièrement utile pour les sites de plus de vingt pages, les sites
        récents ou ceux qui publient du nouveau contenu régulièrement.
      </p>

      <h2>Pourquoi le sitemap accélère l'indexation</h2>

      <p>
        Sans sitemap, Google découvre vos pages en suivant les liens — depuis votre
        page d'accueil vers vos pages internes, puis vers les pages liées, etc.
        Ce processus peut prendre des jours ou des semaines pour les pages profondes
        de votre site.
      </p>

      <p>
        Avec un sitemap soumis dans Search Console, vous donnez à Google une liste
        directe de toutes vos URLs. Il peut ainsi les explorer plus rapidement et plus
        exhaustivement — notamment les nouvelles pages ou les pages qui reçoivent peu
        de liens internes.
      </p>

      <h2>Ce qu'un bon sitemap doit contenir</h2>

      <ul>
        <li>
          <strong>Toutes vos pages importantes</strong> — pages de services, articles
          de blog, pages produits, landing pages. Excluez les pages de confirmation,
          les doublons et les pages de résultats de recherche interne.
        </li>
        <li>
          <strong>La date de dernière modification</strong> — balise{' '}
          <code>&lt;lastmod&gt;</code>. Elle indique à Google quand une page a été
          mise à jour et l'incite à la re-crawler.
        </li>
        <li>
          <strong>Pas de pages noindexées</strong> — si une page est tagguée{' '}
          <code>noindex</code>, elle ne doit pas apparaître dans le sitemap. C'est
          un signal contradictoire que Google interprète négativement.
        </li>
      </ul>

      <h2>Comment le générer et le soumettre</h2>

      <p>
        Dans un projet Next.js, le fichier <code>app/sitemap.ts</code> génère
        automatiquement un sitemap dynamique à chaque déploiement. Pour les sites
        WordPress, les plugins SEO (Yoast, Rank Math) le gèrent nativement.
        Pour les sites statiques, des outils comme <code>next-sitemap</code> ou
        des générateurs en ligne suffisent.
      </p>

      <p>
        Une fois généré, soumettez votre sitemap dans Google Search Console
        (section "Sitemaps") et vérifiez régulièrement qu'il ne contient pas
        d'erreurs d'indexation.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez qu'on s'assure que votre sitemap est correctement configuré ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/google-search-console-metriques">
              Google Search Console : les 5 métriques à surveiller chaque semaine
            </Link>
          </li>
          <li>
            <Link href="/blog/structurer-site-web-seo-conception">
              Comment structurer un site web pour le SEO dès la conception
            </Link>
          </li>
          <li>
            <Link href="/blog/nextjs-plus-rapide-que-wordpress">
              Pourquoi un site Next.js est plus rapide qu'un site WordPress
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
