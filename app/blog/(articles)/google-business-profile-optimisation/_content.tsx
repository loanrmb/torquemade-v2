'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function GoogleBusinessProfileOptimisationContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Google Business Profile: How to Optimise Your Listing for Local SEO</h1>

      <p>
        When someone searches "hairdresser Bordeaux" or "mechanic near me," Google
        displays a block of three local business listings before regular results.
        That's the "local pack" — and it's the first thing the user sees. Your Google
        Business Profile determines whether you appear there.
      </p>

      <h2>Factors influencing your position in the local pack</h2>

      <p>
        Google relies on three main criteria: relevance (does your activity match the
        search?), distance (are you close to the user?), and prominence (is your listing
        well-filled and active?). Distance is hard to control. Relevance and prominence
        can be directly worked on in your profile.
      </p>

      <h2>What to fill in to maximise visibility</h2>

      <ul>
        <li><strong>Primary and secondary categories.</strong> The strongest signal. Choose the most precise primary category and add relevant secondary ones.</li>
        <li><strong>Full description with keywords.</strong> The description is indexed by Google. Write 750 characters describing your activity, naturally including your main services and location.</li>
        <li><strong>Up-to-date hours.</strong> A listing with incorrect or missing hours loses credibility with Google and users.</li>
        <li><strong>Recent, numerous photos.</strong> Listings with photos receive significantly more clicks. Add photos of your location, work, team — and refresh them regularly.</li>
        <li><strong>Q&amp;A.</strong> Post and answer your own frequently asked questions. This controls the displayed information and enriches your profile.</li>
      </ul>

      <h2>Customer reviews: the invisible lever</h2>

      <p>
        Review quantity and quality are among the most important factors for the local
        pack. A listing with 50 reviews at 4.7/5 almost always outranks one with 5
        reviews at 5/5. Set up a simple routine: after each satisfactory service, send
        a direct link to your Google review page. Respond to all reviews — positive
        and negative. Google considers responses a sign of activity.
      </p>

      <hr />

      <p>
        <em>
          Want us to audit and optimise your local Google presence?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/seo-local-2025-guide">
              Local SEO 2025: the complete guide for local businesses
            </Link>
          </li>
          <li>
            <Link href="/blog/schema-markup-seo">
              Schema markup: how to help Google understand your content
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
      <h1 className="blog-article-title">Google Business Profile : optimiser sa fiche pour le SEO local</h1>

      <p>
        Quand quelqu'un cherche "coiffeur Bordeaux" ou "mécanicien près de moi",
        Google affiche un bloc de trois fiches d'entreprises locales avant les résultats
        classiques. C'est le "pack local" — et c'est la première chose que l'utilisateur
        voit. Votre fiche Google Business Profile détermine si vous y apparaissez.
      </p>

      <h2>Les éléments qui influencent votre position dans le pack local</h2>

      <p>
        Google s'appuie sur trois critères principaux pour décider quelles fiches afficher :
        la pertinence (votre activité correspond-elle à la recherche ?), la distance
        (êtes-vous proche de l'utilisateur ?) et la notoriété (votre fiche est-elle
        bien renseignée et active ?).
      </p>

      <p>
        La distance est difficile à contrôler. La pertinence et la notoriété, en revanche,
        se travaillent directement dans votre fiche.
      </p>

      <h2>Ce qu'il faut renseigner pour maximiser la visibilité</h2>

      <ul>
        <li>
          <strong>Catégorie principale et catégories secondaires.</strong>
          C'est le signal le plus fort. Choisissez la catégorie principale la plus
          précise possible (pas juste "restaurant" mais "restaurant de cuisine française")
          et ajoutez des catégories secondaires pertinentes.
        </li>
        <li>
          <strong>Description complète avec mots-clés.</strong>
          La description est indexée par Google. Rédigez 750 caractères qui décrivent
          votre activité en incluant naturellement vos services principaux et votre
          localisation.
        </li>
        <li>
          <strong>Horaires à jour.</strong>
          Une fiche avec des horaires incorrects ou absents perd de la crédibilité aux
          yeux de Google et des utilisateurs.
        </li>
        <li>
          <strong>Photos récentes et nombreuses.</strong>
          Les fiches avec des photos reçoivent significativement plus de clics.
          Ajoutez des photos de votre lieu, de vos réalisations, de votre équipe —
          et renouvelez-les régulièrement.
        </li>
        <li>
          <strong>Questions-réponses.</strong>
          Posez vous-même les questions fréquentes et répondez-y. Cela contrôle
          l'information affichée et enrichit votre fiche.
        </li>
      </ul>

      <h2>Les avis clients : le levier invisible</h2>

      <p>
        La quantité et la qualité des avis sont l'un des facteurs les plus importants
        pour le pack local. Une fiche avec 50 avis à 4,7/5 surclasse presque toujours
        une fiche avec 5 avis à 5/5.
      </p>

      <p>
        Mettez en place une routine simple : après chaque prestation satisfaisante,
        envoyez un lien direct vers votre page d'avis Google. Répondez à tous les avis —
        positifs comme négatifs. Google considère les réponses comme un signe d'activité.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez qu'on audite et optimise votre présence locale Google ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/seo-local-2025-guide">
              SEO local en 2025 : le guide complet pour les commerces de proximité
            </Link>
          </li>
          <li>
            <Link href="/blog/schema-markup-seo">
              Schema markup : comment aider Google à comprendre votre contenu
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
