'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function NetlinkingBacklinksContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Link Building: How to Get Backlinks Without Spamming Anyone</h1>

      <p>
        Backlinks — links from other sites to yours — remain one of Google's three most
        important SEO signals, alongside content and user experience. A site that earns
        quality links is perceived as a reference in its field. But getting backlinks
        without falling into Google-penalised practices requires a precise strategy.
      </p>

      <h2>Why some backlinks are worth a lot and others nothing</h2>

      <p>
        Not all backlinks are equal. One link from a recognised authority site in your
        sector is worth infinitely more than ten links from low-quality generic directories.
        Google evaluates the source site's thematic relevance, its own authority, and the
        link's context (is it in an article body or a footer?). A natural backlink, in the
        body of a relevant article, from an established site in your niche: that's the target.
      </p>

      <h2>Strategies that work without spam</h2>

      <ul>
        <li><strong>Create content people naturally cite.</strong> Original studies, sector data, reference guides — these formats generate backlinks without outreach. If your content is the best resource on a subject, other sites will cite it.</li>
        <li><strong>Targeted guest blogging.</strong> Propose a guest article to a complementary site — not a competitor, but in the same ecosystem. In exchange for quality content, you earn a link.</li>
        <li><strong>Broken link technique.</strong> Find articles on sector sites pointing to 404 pages. Propose your own content as a replacement. Win-win: they fix a dead link, you get a backlink.</li>
        <li><strong>Local partnerships.</strong> For local providers, links from chambers of commerce, local professional associations, or regional media have real SEO value and are often accessible via a simple request.</li>
      </ul>

      <h2>What to absolutely avoid</h2>

      <p>
        Mass link buying, private blog networks (PBNs), systematic link exchanges, and
        automated blog comments are detected and penalised by Google. A manual penalty
        can drop your site out of results for months. It's not worth the risk.
      </p>

      <hr />

      <p>
        <em>
          Want a link-building strategy tailored to your sector?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/maillage-interne-seo">
              Internal linking: the SEO strategy 90% of sites ignore
            </Link>
          </li>
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
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Netlinking : comment obtenir des backlinks sans spammer personne</h1>

      <p>
        Les backlinks — les liens provenant d'autres sites vers le vôtre — restent
        l'un des trois signaux SEO les plus importants pour Google, après le contenu
        et l'expérience utilisateur. Un site qui reçoit des liens de qualité est perçu
        comme une référence dans son domaine. Mais obtenir des backlinks sans tomber
        dans les pratiques pénalisées par Google, ça demande une stratégie précise.
      </p>

      <h2>Pourquoi certains backlinks valent beaucoup et d'autres rien</h2>

      <p>
        Tous les backlinks ne se valent pas. Un lien depuis un site d'autorité reconnu
        dans votre secteur vaut infiniment plus que dix liens depuis des annuaires
        génériques de faible qualité. Google évalue la pertinence thématique du site
        source, son autorité propre et le contexte du lien (est-il dans le corps d'un
        article ou dans un footer ?).
      </p>

      <p>
        Un backlink naturel, dans le corps d'un article pertinent, depuis un site
        établi dans votre niche : c'est ça la cible.
      </p>

      <h2>Stratégies qui fonctionnent sans spam</h2>

      <ul>
        <li>
          <strong>Créer du contenu qu'on cite naturellement.</strong>
          Les études originales, les données sectorielles, les guides de référence —
          ce sont les formats qui génèrent des backlinks sans démarchage. Si votre
          contenu est la meilleure ressource disponible sur un sujet, d'autres sites
          vont le citer.
        </li>
        <li>
          <strong>Guest blogging ciblé.</strong>
          Proposez un article invité à un site complémentaire au vôtre — pas concurrent,
          mais dans le même écosystème. En échange d'un contenu de qualité, vous obtenez
          un lien. Limitez-vous aux sites avec un vrai lectorat.
        </li>
        <li>
          <strong>La technique du contenu cassé.</strong>
          Trouvez des articles sur des sites de votre secteur qui pointent vers des
          pages 404. Proposez votre propre contenu en remplacement. C'est win-win :
          ils corrigent un lien mort, vous obtenez un backlink.
        </li>
        <li>
          <strong>Les partenariats locaux.</strong>
          Pour un prestataire local, les backlinks de la chambre de commerce,
          d'associations professionnelles locales ou de médias régionaux ont une
          valeur SEO réelle et sont souvent accessibles via une simple demande.
        </li>
      </ul>

      <h2>Ce qu'il faut absolument éviter</h2>

      <p>
        L'achat de liens en masse, les réseaux de sites (PBN), les échanges de liens
        systématiques et les commentaires de blog automatisés sont détectés et pénalisés
        par Google. Une pénalité manuelle peut faire chuter votre site hors des résultats
        pendant des mois. Le jeu n'en vaut pas la chandelle.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez une stratégie de netlinking adaptée à votre secteur ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/maillage-interne-seo">
              Maillage interne : la stratégie SEO que 90 % des sites ignorent
            </Link>
          </li>
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
        </ul>
      </nav>

    </article>
  )
}
