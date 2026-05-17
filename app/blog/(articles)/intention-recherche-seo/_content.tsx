'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function IntentionRechercheSeoContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Search Intent: Understanding What Users Really Want</h1>

      <p>
        You can have the best article in the world on a topic — if your content doesn't
        match what the user actually wants when typing that query, it won't rank. That's
        search intent: the "why" behind every Google query.
      </p>

      <h2>The four types of search intent</h2>

      <ul>
        <li><strong>Informational.</strong> The user wants to learn. "How does local SEO work?" → blog post, guide, explanation. Not a sales page.</li>
        <li><strong>Navigational.</strong> The user is looking for a specific site or brand. They want to go directly there, not read a tutorial.</li>
        <li><strong>Commercial (investigational).</strong> The user is comparing options before buying. "Shopify vs Next.js" → comparison article with pros/cons. Not a technical tutorial.</li>
        <li><strong>Transactional.</strong> The user is ready to act. "Web developer Bordeaux quote" → service page with contact form. Not a blog post.</li>
      </ul>

      <h2>How to identify a query's intent</h2>

      <p>
        The most reliable method: type the query into Google and analyse the top results.
        Google has already done the work — it displays the content type matching the
        majority intent for that query. If top results are all blog posts, your service
        page won't fit. And vice versa. Also note the dominant format: numbered lists,
        step-by-step guides, comparisons, videos — Google favours the format users
        prefer for that query.
      </p>

      <h2>Why mis-targeting intent costs months of work</h2>

      <p>
        It's the most expensive SEO mistake: publishing quality content in the wrong
        format for the wrong intent. An informational article on a transactional query
        attracts only the curious — not buyers. A sales page on an informational query
        will be ignored by Google. Before writing anything, ask: if I were the person
        typing this query, what would I hope to find? That answer defines your format,
        angle, and CTA.
      </p>

      <hr />

      <p>
        <em>
          Want us to analyse the intent behind your target keywords?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/mots-cles-peu-concurrentiels">
              How to find low-competition keywords in your niche
            </Link>
          </li>
          <li>
            <Link href="/blog/article-blog-seo-redaction">
              What is an SEO blog post and how to write one that ranks?
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
      <h1 className="blog-article-title">Intentions de recherche : comprendre ce que veut vraiment l'utilisateur</h1>

      <p>
        Vous pouvez avoir le meilleur article du monde sur un sujet — si votre contenu
        ne correspond pas à ce que l'utilisateur veut vraiment obtenir en tapant cette
        requête, il ne classera pas. C'est ce qu'on appelle l'intention de recherche :
        le "pourquoi" derrière chaque requête Google.
      </p>

      <h2>Les quatre types d'intention de recherche</h2>

      <ul>
        <li>
          <strong>Informationnelle.</strong> L'utilisateur veut apprendre.
          "Comment fonctionne le SEO local ?" → article de blog, guide, explication.
          Pas une page de vente.
        </li>
        <li>
          <strong>Navigationnelle.</strong> L'utilisateur cherche un site ou une marque
          spécifique. "Google Search Console connexion" → il veut aller directement
          sur la page de connexion Google, pas lire un tutoriel.
        </li>
        <li>
          <strong>Commerciale (ou investigatrice).</strong> L'utilisateur compare des
          options avant d'acheter. "Shopify vs Next.js" → article de comparaison
          avec avantages/inconvénients. Pas un tutoriel technique.
        </li>
        <li>
          <strong>Transactionnelle.</strong> L'utilisateur est prêt à agir.
          "Développeur web Bordeaux devis" → page de service avec formulaire de contact.
          Pas un article de blog.
        </li>
      </ul>

      <h2>Comment identifier l'intention d'une requête</h2>

      <p>
        La méthode la plus fiable : tapez la requête dans Google et analysez les
        premiers résultats. Google a déjà fait le travail — il affiche le type de
        contenu qui correspond à l'intention majoritaire des utilisateurs sur cette
        requête. Si les premiers résultats sont tous des articles de blog, votre
        page de service n'y aura pas sa place. Et vice versa.
      </p>

      <p>
        Regardez aussi le format dominant : listes numérotées, guides étape par étape,
        comparatifs, vidéos... Google privilégie le format que les utilisateurs
        préfèrent pour cette requête.
      </p>

      <h2>Pourquoi mal cibler l'intention coûte des mois de travail</h2>

      <p>
        C'est l'erreur la plus coûteuse en SEO : publier un contenu de qualité mais
        dans le mauvais format pour la mauvaise intention. Un article informatif sur
        une requête transactionnelle n'attirera que des curieux — pas des acheteurs.
        Une page de vente sur une requête informationnelle sera ignorée par Google.
      </p>

      <p>
        Avant d'écrire quoi que ce soit, posez-vous la question : si j'étais la
        personne qui tape cette requête, qu'est-ce que j'espérerais trouver ?
        La réponse à cette question définit votre format, votre angle et votre CTA.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez qu'on analyse l'intention de vos mots-clés cibles ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/mots-cles-peu-concurrentiels">
              Comment trouver des mots-clés peu concurrentiels dans votre niche
            </Link>
          </li>
          <li>
            <Link href="/blog/article-blog-seo-redaction">
              Qu'est-ce qu'un article de blog SEO et comment en écrire un qui classe ?
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
