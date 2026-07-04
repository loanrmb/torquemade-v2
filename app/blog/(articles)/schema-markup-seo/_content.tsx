'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function SchemaMarkupSeoContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Schema Markup: How to Help Google Understand Your Content</h1>

      <p>
        Google reads your pages: but it doesn't always understand them as well as a
        human. Schema markup is a structured language you add to your code to tell
        Google exactly what your content is: an article, a product, an event, a local
        business. The result: richer search results and better comprehension of your site.
      </p>

      <h2>What schema markup changes in Google</h2>

      <p>
        Without schema markup, Google must guess the type and nature of your content.
        With it, you give clear instructions. In return, Google can display rich snippets,
        enriched results that take up more space and attract more clicks: review stars,
        product prices, opening hours, expandable FAQs directly in results. Rich snippets
        don't directly improve position, but they increase click-through rate significantly.
      </p>

      <h2>The most useful schema types</h2>

      <ul>
        <li><strong>LocalBusiness</strong>: for local businesses. Address, phone, hours, service area. Essential for local SEO.</li>
        <li><strong>Article / BlogPosting</strong>: for blog posts. Publication date, author, featured image.</li>
        <li><strong>Product</strong>: for e-commerce pages. Price, availability, reviews. Enables price and star display in Google.</li>
        <li><strong>FAQPage</strong>: for Q&amp;A pages. FAQs can appear beneath your result, significantly increasing visibility.</li>
        <li><strong>BreadcrumbList</strong>: to display your site's breadcrumb trail directly in Google URLs.</li>
      </ul>

      <h2>How to implement schema markup</h2>

      <p>
        Schema markup is implemented in JSON-LD (recommended by Google), embedded in a{' '}
        <code>&lt;script type="application/ld+json"&gt;</code> tag in your page's{' '}
        <code>&lt;head&gt;</code>. In Next.js, you can inject it via the Next{' '}
        <code>Script</code> component or directly in metadata. Always validate with
        the Google Rich Results Test before deploying.
      </p>

      <h2>Mistakes to avoid</h2>

      <p>
        Only declare what is actually visible on the page. Adding a "Product" schema with
        a price that isn't displayed on the page violates Google's guidelines and can
        trigger a manual penalty. Always validate your implementation with the Google
        Rich Results Test before going live.
      </p>

      <hr />

      <p>
        <em>
          Want us to integrate schema markup on your site?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/balises-meta-title-description">
              Meta title and description tags: the practical guide 2025
            </Link>
          </li>
          <li>
            <Link href="/blog/seo-local-2025-guide">
              Local SEO 2025: the complete guide for local businesses
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
      <h1 className="blog-article-title">Schema markup : comment aider Google à comprendre votre contenu</h1>

      <p>
        Google lit vos pages: mais il ne les comprend pas toujours aussi bien qu'un
        humain. Le schema markup est un langage structuré que vous ajoutez à votre
        code pour dire à Google exactement ce qu'est votre contenu : un article,
        un produit, un événement, une entreprise locale. Résultat : des résultats
        enrichis dans Google et une meilleure compréhension de votre site.
      </p>

      <h2>Ce que le schema markup change dans Google</h2>

      <p>
        Sans schema markup, Google doit deviner le type et la nature de votre contenu.
        Avec, vous lui donnez des instructions claires. En retour, il peut afficher
        des "rich snippets", des résultats enrichis qui occupent plus de place et
        attirent davantage de clics : étoiles d'avis, prix de produit, horaires
        d'ouverture, FAQ dépliable directement dans les résultats.
      </p>

      <p>
        Ces rich snippets n'améliorent pas directement votre position, mais ils
        augmentent votre taux de clic, parfois de façon significative. Une fiche
        avec des étoiles et un prix affiché dans Google attire l'œil bien plus
        qu'un simple lien bleu.
      </p>

      <h2>Les types de schema les plus utiles</h2>

      <ul>
        <li>
          <strong>LocalBusiness</strong>: pour les commerces et prestataires locaux.
          Adresse, téléphone, horaires, zone de service. Indispensable pour le SEO local.
        </li>
        <li>
          <strong>Article / BlogPosting</strong>: pour vos articles de blog. Date de
          publication, auteur, image principale. Améliore la façon dont Google présente
          vos articles dans les résultats.
        </li>
        <li>
          <strong>Product</strong>: pour les pages e-commerce. Prix, disponibilité,
          avis. Permet l'affichage du prix et des étoiles directement dans Google.
        </li>
        <li>
          <strong>FAQPage</strong>: pour les pages avec questions-réponses. Les FAQ
          peuvent s'afficher sous votre résultat, augmentant considérablement votre
          visibilité dans la page.
        </li>
        <li>
          <strong>BreadcrumbList</strong>: pour afficher le fil d'Ariane de votre
          site directement dans l'URL Google. Aide les utilisateurs à comprendre
          la structure de votre site.
        </li>
      </ul>

      <h2>Comment implémenter le schema markup</h2>

      <p>
        Le schema markup s'implémente en JSON-LD (recommandé par Google), intégré
        dans une balise <code>&lt;script type="application/ld+json"&gt;</code> dans
        le <code>&lt;head&gt;</code> de votre page. C'est la méthode la plus propre :
        elle ne modifie pas le HTML visible de la page.
      </p>

      <p>
        Dans un projet Next.js, vous pouvez l'injecter via le composant{' '}
        <code>Script</code> de Next ou directement dans les métadonnées. Des générateurs
        en ligne (Schema.org, Google Rich Results Test) permettent de valider votre
        code avant de le publier.
      </p>

      <h2>Erreurs à éviter</h2>

      <p>
        Ne déclarez que ce qui est réellement visible sur la page. Ajouter un schema
        "Product" avec un prix alors que le prix n'est pas affiché sur la page est
        contraire aux guidelines de Google, et peut entraîner une pénalité manuelle.
        Validez toujours votre implémentation avec le{' '}
        <strong>Google Rich Results Test</strong> avant déploiement.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez que nous intégrions le schema markup sur votre site ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/balises-meta-title-description">
              Balises meta title et description : le guide pratique 2025
            </Link>
          </li>
          <li>
            <Link href="/blog/seo-local-2025-guide">
              SEO local en 2025 : le guide complet pour les commerces de proximité
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
