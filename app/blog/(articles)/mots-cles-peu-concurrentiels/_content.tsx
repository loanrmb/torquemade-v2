'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function MotsClesPeuConcurrentielsContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">How to Find Low-Competition Keywords in Your Niche</h1>

      <p>
        Trying to rank for "web agency" or "SEO" when you're starting out is like
        racing Decathlon in a sprint. These queries are dominated by domains with
        decades of authority. The right strategy: start with long-tail queries —
        specific, low-competition — to build authority progressively.
      </p>

      <h2>Understanding the long tail</h2>

      <p>
        Long-tail keywords are specific queries that individually generate low search
        volume but collectively represent more than 70% of Google searches. "Custom web
        agency Bordeaux for SMEs" generates fewer searches than "web agency" — but the
        person typing it knows exactly what they want and is much closer to contacting you.
      </p>

      <h2>How to find these queries without a paid tool</h2>

      <ul>
        <li><strong>Google Suggest.</strong> Type your main query and look at the automatic suggestions. These are real customer searches, ranked by popularity.</li>
        <li><strong>People Also Ask.</strong> In Google results, this section reveals questions people ask around your subject — perfect article opportunities.</li>
        <li><strong>Google Search Console.</strong> If your site exists, check which queries generate impressions without clicks yet. These are keywords where you already have a chance.</li>
        <li><strong>Google Trends.</strong> Compare two or three query variants to see which is growing. Targeting a rising query beats targeting a declining one at equal current volume.</li>
      </ul>

      <h2>Evaluating competition before writing</h2>

      <p>
        Type your target query into Google and analyse the top three results. If they're
        generalist sites with little specific content on the subject, it's a good target —
        you can write a more precise and useful article. The right keyword is one where
        your content can honestly be the best available answer on Google. Start there.
      </p>

      <hr />

      <p>
        <em>
          Want a keyword strategy tailored to your sector?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/article-blog-seo-redaction">
              What is an SEO blog post and how to write one that ranks?
            </Link>
          </li>
          <li>
            <Link href="/blog/intention-recherche-seo">
              Search intent: understanding what users really want
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
      <h1 className="blog-article-title">Comment trouver des mots-clés peu concurrentiels dans votre niche</h1>

      <p>
        Chercher à se positionner sur "agence web" ou "référencement naturel" quand
        vous démarrez, c'est vouloir battre Decathlon au sprint. Ces requêtes sont
        dominées par des domaines avec des dizaines d'années d'autorité. La bonne
        stratégie, c'est de commencer par les requêtes longue traîne — précises, peu
        concurrentielles — pour construire une autorité progressive.
      </p>

      <h2>Comprendre la longue traîne</h2>

      <p>
        La longue traîne, ce sont toutes les requêtes spécifiques qui génèrent
        individuellement peu de volume de recherche, mais qui représentent collectivement
        plus de 70 % des recherches sur Google. "Agence web Bordeaux sur mesure PME"
        génère moins de recherches que "agence web" — mais la personne qui tape cette
        requête sait exactement ce qu'elle cherche, et elle est beaucoup plus proche
        de l'achat ou du contact.
      </p>

      <h2>Comment trouver ces requêtes sans outil payant</h2>

      <ul>
        <li>
          <strong>Google Suggest.</strong> Tapez votre requête principale dans Google
          et regardez les suggestions automatiques qui apparaissent. Ce sont les vraies
          recherches de vos clients — classées par popularité.
        </li>
        <li>
          <strong>Section "Autres questions posées".</strong> Dans les résultats Google,
          cette section révèle les questions que les internautes posent autour de votre
          sujet. Ce sont des opportunités d'articles parfaites.
        </li>
        <li>
          <strong>Google Search Console.</strong> Si votre site existe déjà, regardez
          sur quelles requêtes il génère des impressions sans encore cliquer. Ce sont
          des mots-clés pour lesquels vous avez déjà une chance de vous positionner.
        </li>
        <li>
          <strong>Google Trends.</strong> Comparez deux ou trois variantes de requête
          pour voir laquelle monte. Cibler une requête en croissance vaut mieux que
          cibler une requête en déclin, même si le volume actuel est identique.
        </li>
      </ul>

      <h2>Évaluer la concurrence avant d'écrire</h2>

      <p>
        Tapez votre requête cible dans Google et analysez les trois premiers résultats.
        Si ce sont des sites généralistes avec peu de contenu spécifique sur le sujet,
        c'est une bonne cible — vous pouvez écrire un article plus précis et plus utile.
        Si ce sont des sites spécialisés avec des centaines de pages sur la thématique,
        cherchez une variante plus spécifique.
      </p>

      <p>
        Le bon mot-clé, c'est celui où votre contenu peut honnêtement être la meilleure
        réponse disponible sur Google. Partez de là.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez une stratégie de mots-clés adaptée à votre secteur ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/article-blog-seo-redaction">
              Qu'est-ce qu'un article de blog SEO et comment en écrire un qui classe ?
            </Link>
          </li>
          <li>
            <Link href="/blog/intention-recherche-seo">
              Intentions de recherche : comprendre ce que veut vraiment l'utilisateur
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
