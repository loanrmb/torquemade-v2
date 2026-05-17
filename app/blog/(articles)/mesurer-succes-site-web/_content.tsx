'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function MesurerSuccesSiteWebContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">How to Measure Website Success Beyond Traffic</h1>

      <p>
        "My site has 2,000 visits per month" can mean everything is fine — or that you have
        unqualified traffic that doesn't convert at all. Traffic is a necessary condition,
        not sufficient. Here are the indicators that genuinely judge whether a site does
        its job.
      </p>

      <h2>Conversion metrics</h2>

      <ul>
        <li><strong>Overall conversion rate.</strong> Forms submitted / visitors. A local B2B services site should convert 2–5%. Below 1%, the site generates traffic but no leads — there's a problem with offer, message, or user journey.</li>
        <li><strong>Bounce rate by page.</strong> A high bounce rate on a service page (above 70%) means visitors don't find what they're looking for and leave. Priority to investigate.</li>
        <li><strong>Time spent on key pages.</strong> If visitors spend less than 20 seconds on your presentation or service page, they're not reading the content. The message or format isn't holding attention.</li>
      </ul>

      <h2>Traffic quality metrics</h2>

      <ul>
        <li><strong>Traffic origin.</strong> Organic (Google), direct (people typing your URL), referral (links from other sites), social media. A healthy site has source diversity — excessive dependence on a single channel is a risk.</li>
        <li><strong>Queries generating traffic.</strong> In Google Search Console, check which queries your site appears for and generates clicks. If they're unrelated to your activity, your content attracts the wrong audience.</li>
      </ul>

      <h2>Business metrics</h2>

      <p>
        Ultimately, the most important metric is revenue generated directly or indirectly
        by the site. Systematically track the source of each new client — if "via Google"
        or "via your site" comes up regularly, you have your ROI.
      </p>

      <hr />

      <p>
        <em>
          Want us to set up performance tracking for your site?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/roi-site-web">
              Website ROI: how to measure what it really brings you
            </Link>
          </li>
          <li>
            <Link href="/blog/google-search-console-metriques">
              Google Search Console: the 5 metrics to track every week
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
      <h1 className="blog-article-title">Comment mesurer le succès d'un site web au-delà du trafic</h1>

      <p>
        "Mon site a 2 000 visites par mois" peut vouloir dire que tout va bien —
        ou que vous avez un trafic non qualifié qui ne convertit pas du tout.
        Le trafic est une condition nécessaire, pas suffisante. Voici les indicateurs
        qui permettent vraiment de juger si un site remplit son rôle.
      </p>

      <h2>Les métriques de conversion</h2>

      <ul>
        <li>
          <strong>Taux de conversion global.</strong>
          Nombre de formulaires soumis / nombre de visiteurs. Un site de services B2B
          local devrait convertir entre 2 et 5 %. En dessous de 1 %, le site génère
          du trafic mais pas de leads — il y a un problème d'offre, de message ou
          de parcours utilisateur.
        </li>
        <li>
          <strong>Taux de rebond par page.</strong>
          Un taux de rebond élevé sur une page de service (plus de 70 %) signifie que
          les visiteurs ne trouvent pas ce qu'ils cherchent et repartent. À investiguer
          en priorité.
        </li>
        <li>
          <strong>Temps passé sur les pages clés.</strong>
          Si les visiteurs passent moins de 20 secondes sur votre page de présentation
          ou de services, ils ne lisent pas le contenu. Le message ou la mise en forme
          ne retient pas l'attention.
        </li>
      </ul>

      <h2>Les métriques de qualité du trafic</h2>

      <ul>
        <li>
          <strong>Origine du trafic.</strong>
          Trafic organique (Google), direct (personnes qui tapent votre URL), référence
          (liens depuis d'autres sites), réseaux sociaux. Un site sain a une diversité
          de sources — une dépendance excessive à un seul canal est un risque.
        </li>
        <li>
          <strong>Requêtes qui génèrent du trafic.</strong>
          Dans Google Search Console, vérifiez sur quelles requêtes votre site apparaît
          et génère des clics. Si ce sont des requêtes non liées à votre activité,
          votre contenu attire le mauvais public.
        </li>
      </ul>

      <h2>Les métriques business</h2>

      <p>
        Au final, la métrique la plus importante est le chiffre d'affaires généré
        directement ou indirectement par le site. Suivez systématiquement la source
        de chaque nouveau client — si "via Google" ou "via votre site" revient
        régulièrement, vous avez votre ROI.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez qu'on mette en place le tracking de performance de votre site ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/roi-site-web">
              ROI d'un site web : comment mesurer ce que ça vous rapporte vraiment
            </Link>
          </li>
          <li>
            <Link href="/blog/google-search-console-metriques">
              Google Search Console : les 5 métriques à surveiller chaque semaine
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
