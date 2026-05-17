'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function BalisesMetaTitleDescriptionContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Meta Title and Description Tags: The Practical Guide 2025</h1>

      <p>
        These are the first two elements a user sees in Google before even reaching
        your site. The title tag partly determines your ranking. The meta description
        determines whether the user clicks. Yet most sites neglect them or leave them
        auto-generated.
      </p>

      <h2>The title tag: essential rules</h2>

      <ul>
        <li><strong>Length: 50 to 60 characters maximum.</strong> Beyond that, Google truncates with "…" and the cut words lose impact.</li>
        <li><strong>Main keyword at the start of the title.</strong> Google gives more weight to words placed at the beginning. "SEO Bordeaux — Torquemade Agency" outperforms "Torquemade Agency — SEO in Bordeaux."</li>
        <li><strong>One unique title per page.</strong> No two pages on the same site should share the same title — it's a duplication signal Google penalises.</li>
      </ul>

      <h2>The meta description: essential rules</h2>

      <p>
        The meta description isn't a direct ranking factor — but it strongly influences
        click-through rate. A well-written description can double visitors to a page
        without changing its position.
      </p>

      <ul>
        <li><strong>Length: 140 to 160 characters.</strong> Beyond, Google truncates. Below, you lose space to persuade.</li>
        <li><strong>Reformulate the page's promise.</strong> Not a content summary — a clear promise of what the visitor will get by clicking.</li>
        <li><strong>Include the target keyword.</strong> Google bolds it in results when it matches the user's query — it catches the eye.</li>
      </ul>

      <h2>What Google does when you don't set them</h2>

      <p>
        If you don't define a title, Google generates one automatically — often from
        your site name or an H1. The result is rarely optimal. For meta descriptions,
        Google extracts a passage it deems relevant, which can produce inconsistent
        or uninviting results. Always define title and description manually, page by
        page, adapting them to the primary targeted query.
      </p>

      <hr />

      <p>
        <em>
          Want us to audit and optimise your site's title tags?{' '}
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
            <Link href="/blog/article-blog-seo-redaction">
              What is an SEO blog post and how to write one that ranks?
            </Link>
          </li>
          <li>
            <Link href="/blog/mots-cles-peu-concurrentiels">
              How to find low-competition keywords in your niche
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Balises meta title et description : le guide pratique 2025</h1>

      <p>
        Ce sont les deux premiers éléments qu'un utilisateur voit dans Google avant
        même d'arriver sur votre site. La balise title détermine en partie votre
        position dans les résultats. La meta description détermine si l'utilisateur
        clique ou non. Pourtant, la majorité des sites les négligent ou les laissent
        générées automatiquement.
      </p>

      <h2>La balise title : règles essentielles</h2>

      <p>
        La balise title est le titre bleu cliquable dans les résultats Google. C'est
        l'un des signaux SEO les plus directs — Google lui donne beaucoup de poids pour
        déterminer le sujet d'une page.
      </p>

      <ul>
        <li>
          <strong>Longueur : 50 à 60 caractères maximum.</strong> Au-delà, Google tronque
          le titre avec "…" — et les mots coupés perdent leur impact.
        </li>
        <li>
          <strong>Mot-clé principal en début de titre.</strong> Google donne plus de
          poids aux mots placés en début de balise. "SEO Bordeaux — Agence Torquemade"
          est plus efficace que "Agence Torquemade — SEO à Bordeaux".
        </li>
        <li>
          <strong>Un titre unique par page.</strong> Jamais deux pages du même site ne
          doivent avoir le même title. C'est un signal de duplication que Google pénalise.
        </li>
      </ul>

      <h2>La meta description : règles essentielles</h2>

      <p>
        La meta description n'est pas un facteur de classement direct — mais elle
        influence fortement le taux de clic. Une description bien rédigée peut doubler
        le nombre de visiteurs sur une page sans changer sa position.
      </p>

      <ul>
        <li>
          <strong>Longueur : 140 à 160 caractères.</strong> Au-delà, Google tronque.
          En dessous, vous perdez de la place pour convaincre.
        </li>
        <li>
          <strong>Reformulez la promesse de la page.</strong> Pas de résumé du contenu —
          une promesse claire sur ce que le visiteur va obtenir en cliquant.
        </li>
        <li>
          <strong>Incluez le mot-clé cible.</strong> Google le met en gras dans les
          résultats quand il correspond à la requête de l'utilisateur — ça attire l'œil.
        </li>
      </ul>

      <h2>Ce que Google fait quand vous ne les renseignez pas</h2>

      <p>
        Si vous ne définissez pas de title, Google en génère un automatiquement —
        souvent à partir du nom de votre site ou d'un titre H1. Le résultat est
        rarement optimal. Pour la meta description, Google extrait un passage de la
        page qu'il juge pertinent pour la requête, ce qui peut donner des résultats
        incohérents ou peu incitatifs.
      </p>

      <p>
        Mieux vaut toujours définir title et description manuellement, page par page,
        en les adaptant à la requête principale ciblée.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez qu'on audite et optimise les balises title de votre site ?{' '}
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
            <Link href="/blog/article-blog-seo-redaction">
              Qu'est-ce qu'un article de blog SEO et comment en écrire un qui classe ?
            </Link>
          </li>
          <li>
            <Link href="/blog/mots-cles-peu-concurrentiels">
              Comment trouver des mots-clés peu concurrentiels dans votre niche
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
