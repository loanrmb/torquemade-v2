'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function PortfolioLigneClientsInboundContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">How an Online Portfolio Attracts Clients Without Prospecting</h1>

      <p>
        Cold prospecting costs time, creates friction, and often generates few results.
        A well-built online portfolio does the opposite: it attracts clients who have
        already qualified your work before contacting you. The person who calls you after
        seeing your work is in a buying position — not being solicited.
      </p>

      <h2>What a portfolio must show</h2>

      <ul>
        <li><strong>Context and the problem.</strong> Not just a screenshot or photo. For each project, explain the starting situation: what was the client's problem, what were the constraints, why was this project interesting. It helps visitors project themselves into their own situation.</li>
        <li><strong>Your approach and choices.</strong> Why did you choose this solution over another? What technical or creative decisions were made? This is where you demonstrate expertise — not just results.</li>
        <li><strong>Measurable results.</strong> Numbers, metrics, impact — "the site generated 40% more leads in 3 months" is infinitely more convincing than "the client was satisfied." Systematically ask clients for quantified feedback.</li>
      </ul>

      <h2>How to optimise the portfolio for acquisition</h2>

      <p>
        Each case study should have its own URL — not a generic portfolio page with all
        projects mixed together. A dedicated URL allows optimising each project for specific
        queries ("e-commerce site redesign Bordeaux," "custom CRM site creation") and being
        found by clients searching for exactly what you've already done. Add a clear CTA at
        the end of each case study: "Have a similar project? Let's talk."
      </p>

      <h2>Update frequency</h2>

      <p>
        A portfolio showing only 5-year-old projects sends a bad signal. Add each significant
        new project in the weeks following delivery — while details are fresh and you can
        measure first results.
      </p>

      <hr />

      <p>
        <em>
          Want us to create or restructure your online portfolio?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/site-web-meilleur-commercial">
              Why your website is your best salesperson in 2025
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
      <h1 className="blog-article-title">Comment un portfolio en ligne attire des clients sans prospecter</h1>

      <p>
        La prospection à froid coûte du temps, crée de la friction et génère souvent
        peu de résultats. Un portfolio en ligne bien construit fait l'inverse : il attire
        des clients qui ont déjà qualifié votre travail avant de vous contacter.
        La personne qui vous appelle après avoir vu vos réalisations est en position
        d'achat — pas de démarchage.
      </p>

      <h2>Ce qu'un portfolio doit montrer</h2>

      <ul>
        <li>
          <strong>Le contexte et le problème.</strong>
          Pas juste une capture d'écran ou une photo. Pour chaque projet, expliquez
          la situation de départ : quel était le problème du client, quelles étaient
          les contraintes, pourquoi ce projet était intéressant. Ça aide le visiteur
          à se projeter dans sa propre situation.
        </li>
        <li>
          <strong>Votre approche et vos choix.</strong>
          Pourquoi avez-vous choisi cette solution plutôt qu'une autre ? Quelles
          décisions techniques ou créatives ont été prises ? C'est là que vous
          démontrez votre expertise — pas juste votre résultat.
        </li>
        <li>
          <strong>Le résultat mesurable.</strong>
          Chiffres, métriques, impact — "le site a généré 40 % de leads en plus
          en 3 mois" est infiniment plus convaincant que "le client était satisfait".
          Demandez systématiquement à vos clients un retour chiffré.
        </li>
      </ul>

      <h2>Comment optimiser le portfolio pour l'acquisition</h2>

      <p>
        Chaque étude de cas doit avoir sa propre URL — pas une page portfolio générique
        avec tous les projets mélangés. Une URL dédiée permet d'optimiser chaque projet
        pour des requêtes spécifiques ("refonte site e-commerce Bordeaux", "création
        site CRM sur mesure") et d'être trouvé par des clients qui cherchent exactement
        ce que vous avez déjà fait.
      </p>

      <p>
        Ajoutez un CTA clair à la fin de chaque étude de cas : "Vous avez un projet
        similaire ? Parlons-en." La personne qui a lu votre cas jusqu'au bout est
        déjà convaincue de votre pertinence.
      </p>

      <h2>La fréquence de mise à jour</h2>

      <p>
        Un portfolio qui montre uniquement des projets vieux de 5 ans envoie un mauvais
        signal. Ajoutez chaque nouveau projet significatif dans les semaines suivant sa
        livraison — pendant que les détails sont frais et que vous pouvez mesurer
        les premiers résultats.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez qu'on crée ou restructure votre portfolio en ligne ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/site-web-meilleur-commercial">
              Pourquoi votre site web est votre meilleur commercial en 2025
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
