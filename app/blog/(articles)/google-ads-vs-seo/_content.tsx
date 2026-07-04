'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function GoogleAdsVsSeoContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Google Ads vs SEO: Where to Invest Your Digital Budget First?</h1>

      <p>
        One of the most frequent questions for a professional starting to invest in online
        presence. The honest answer: it depends. But "it depends" isn't useful, here are
        the criteria for making an informed decision.
      </p>

      <h2>What Google Ads does well</h2>

      <p>
        Google Ads generates traffic immediately. Create a campaign, define keywords and
        budget, and ads appear the next day. Particularly useful for testing an offer,
        launching a new activity, or quickly occupying ground on a competitive query.
        But the moment you stop paying, traffic stops. A tap model, open, it flows;
        closed, it stops. No lasting asset built.
      </p>

      <h2>What SEO does well</h2>

      <p>
        SEO builds a lasting asset. A well-ranked article or service page keeps generating
        traffic months and years after creation, without marginal cost. SEO ROI increases
        over time, whereas Google Ads cost-per-click tends to rise with competition.
        The trade-off: results take time. Between 3 and 12 months depending on sector
        competitiveness before reaching significant traffic.
      </p>

      <h2>The decision framework</h2>

      <ul>
        <li><strong>You need clients in the next 2 months → Google Ads.</strong> SEO won't produce results in that timeframe. Use Ads for immediate traffic while building SEO in parallel.</li>
        <li><strong>You have a limited monthly budget (under €500) → SEO first.</strong> €500 on Google Ads in local B2B is often insufficient for significant lead volume. The same budget on SEO content builds a growing asset.</li>
        <li><strong>You're in an ultra-competitive sector → combine both.</strong> Ads for high-CPC transactional queries, SEO for long-tail informational queries. They complement each other.</li>
      </ul>

      <hr />

      <p>
        <em>
          Want to define the best digital strategy for your activity?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/impressions-google-sans-publicite">
              How to go from 0 to 800,000 Google impressions without advertising
            </Link>
          </li>
          <li>
            <Link href="/blog/blog-entreprise-trafic-qualifie">
              How a business blog generates qualified traffic for years
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
      <h1 className="blog-article-title">Google Ads vs SEO : où investir son budget digital en premier ?</h1>

      <p>
        C'est l'une des questions les plus fréquentes pour un professionnel qui commence
        à investir dans sa présence en ligne. La réponse honnête : ça dépend. Mais
        "ça dépend" n'est pas une réponse utile: voici les critères qui permettent
        de décider de façon éclairée.
      </p>

      <h2>Ce que Google Ads fait bien</h2>

      <p>
        Google Ads génère du trafic immédiatement. Vous créez une campagne, vous définissez
        vos mots-clés et votre budget, et vos annonces apparaissent dès le lendemain.
        C'est particulièrement utile pour tester une offre, lancer une nouvelle activité
        ou occuper rapidement le terrain sur une requête compétitive.
      </p>

      <p>
        Mais dès que vous arrêtez de payer, le trafic s'arrête. C'est le modèle du
        robinet, ouvert, ça coule ; fermé, ça ne coule plus. Pas d'actif durable construit.
      </p>

      <h2>Ce que le SEO fait bien</h2>

      <p>
        Le SEO construit un actif durable. Un article bien positionné ou une page de
        service bien référencée continue de générer du trafic des mois et des années
        après avoir été créée, sans coût marginal. Le retour sur investissement du
        SEO augmente avec le temps, là où le coût par clic Google Ads tend à augmenter
        avec la concurrence.
      </p>

      <p>
        La contrepartie : les résultats prennent du temps. Entre 3 et 12 mois selon
        la compétitivité du secteur avant d'atteindre un trafic significatif. C'est
        un investissement moyen terme, pas une solution immédiate.
      </p>

      <h2>Le cadre de décision</h2>

      <ul>
        <li>
          <strong>Vous avez besoin de clients dans les 2 prochains mois → Google Ads.</strong>
          Le SEO ne produira pas de résultats dans ce délai. Utilisez Ads pour
          générer du trafic immédiat pendant que vous construisez votre SEO en parallèle.
        </li>
        <li>
          <strong>Vous avez un budget mensuel limité (moins de 500 €) → SEO d'abord.</strong>
          500 € sur Google Ads en B2B local, c'est souvent insuffisant pour obtenir
          un volume significatif de leads. Ce même budget sur du contenu SEO construit
          un actif qui grandira.
        </li>
        <li>
          <strong>Vous avez un secteur ultra-compétitif → combinez les deux.</strong>
          Ads pour les requêtes transactionnelles à fort CPC, SEO pour les requêtes
          informatives longue traîne. Les deux se complètent.
        </li>
      </ul>

      <hr />

      <p>
        <em>
          Vous voulez définir la meilleure stratégie digitale pour votre activité ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/impressions-google-sans-publicite">
              Comment passer de 0 à 800 000 impressions Google sans publicité
            </Link>
          </li>
          <li>
            <Link href="/blog/blog-entreprise-trafic-qualifie">
              Comment un blog d'entreprise génère du trafic qualifié pendant des années
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
