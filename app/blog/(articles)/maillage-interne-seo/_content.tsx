'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function MaillageInterneSeoContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Internal Linking: The SEO Strategy 90% of Sites Ignore</h1>

      <p>
        Most sites publish articles and stop there. They skip the next step: creating
        links between their pages so Google understands the site structure and distributes
        SEO authority correctly. Internal linking is one of the most accessible
        (and most neglected) SEO levers.
      </p>

      <h2>What an internal link actually does</h2>

      <p>
        An internal link does two things at once: it helps users navigate to a relevant
        page, and it passes a portion of SEO authority from the source page to the
        destination. This is called "internal PageRank." A page that receives many
        internal links is seen by Google as more important, you can direct Google
        toward priority pages simply by adjusting your linking structure.
      </p>

      <h2>The silo structure: the model that works</h2>

      <p>
        The most effective model is the thematic silo. You create "pillar" pages that
        treat a subject in depth, and "satellite articles" that explore specific aspects.
        Satellites link to the pillar; the pillar links back to satellites. This sends
        a strong signal to Google: these pages form a coherent cluster around a precise
        topic.
      </p>

      <h2>The most common internal linking mistakes</h2>

      <ul>
        <li><strong>Footer links only.</strong> Footer links carry less weight than body-text links. Prioritise contextual links integrated naturally into content.</li>
        <li><strong>Generic anchor text.</strong> "Click here" or "learn more" give Google no indication of the destination page's subject. Use descriptive anchors containing the target page's keyword.</li>
        <li><strong>Orphan pages.</strong> A page with no internal links is hard for Google to find. Every important page should receive at least two or three internal links.</li>
      </ul>

      <h2>Where to start concretely</h2>

      <p>
        Start with a simple audit: check how many internal links each important page
        receives. For each page at zero, identify two existing articles from which you
        can add a contextual link. Then, when you publish a new article, return to
        older articles and add a link to the new one. This habit alone significantly
        improves your linking consistency over time.
      </p>

      <hr />

      <p>
        <em>
          Want us to audit your site's internal linking?{' '}
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
            <Link href="/blog/structurer-site-web-seo-conception">
              How to structure a website for SEO from day one
            </Link>
          </li>
          <li>
            <Link href="/blog/netlinking-backlinks">
              Link building: how to get backlinks without spamming anyone
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Maillage interne : la stratégie SEO que 90 % des sites ignorent</h1>

      <p>
        La plupart des sites publient des articles et s'arrêtent là. Ils oublient
        l'étape suivante : créer des liens entre leurs pages pour que Google comprenne
        la structure du site et distribue correctement l'autorité SEO. Le maillage
        interne est l'un des leviers les plus accessibles, et les plus négligés.
      </p>

      <h2>Ce que fait réellement un lien interne</h2>

      <p>
        Un lien interne fait deux choses en parallèle. D'abord, il aide l'utilisateur
        à naviguer vers une page pertinente. Ensuite, il transmet une partie de
        l'autorité SEO de la page source vers la page de destination: c'est ce
        qu'on appelle le "PageRank interne".
      </p>

      <p>
        Une page qui reçoit beaucoup de liens internes est perçue par Google comme
        plus importante. Vous pouvez donc orienter Google vers vos pages prioritaires
        simplement en ajustant votre maillage, sans toucher au contenu.
      </p>

      <h2>La structure en silos : le modèle qui fonctionne</h2>

      <p>
        Le modèle le plus efficace est celui en silos thématiques. Vous créez des
        pages "piliers" (qui traitent un sujet en profondeur) et des "articles
        satellites" qui approfondissent des aspects spécifiques. Les satellites
        pointent vers le pilier ; le pilier pointe vers les satellites.
      </p>

      <p>
        Cette structure envoie un signal fort à Google : ces pages forment un ensemble
        cohérent autour d'une thématique précise. C'est particulièrement efficace
        pour les sites de services locaux ou les blogs professionnels.
      </p>

      <h2>Les erreurs de maillage les plus courantes</h2>

      <ul>
        <li>
          <strong>Liens uniquement dans le footer.</strong> Les liens en pied de page
          ont moins de valeur que ceux intégrés dans le corps du texte. Privilégiez
          les liens contextuels, intégrés naturellement dans le contenu.
        </li>
        <li>
          <strong>Textes d'ancrage génériques.</strong> "Cliquez ici" ou "en savoir plus"
          ne donnent aucune indication à Google sur la page de destination. Utilisez
          des ancres descriptives qui contiennent le mot-clé de la page cible.
        </li>
        <li>
          <strong>Pages orphelines.</strong> Une page sans liens internes est difficile
          à trouver pour Google. Chaque page importante doit recevoir au moins deux
          ou trois liens internes.
        </li>
      </ul>

      <h2>Par où commencer concrètement</h2>

      <p>
        Commencez par un audit simple : ouvrez chacune de vos pages importantes et
        vérifiez combien de liens internes elle reçoit. Pour chaque page à zéro lien,
        identifiez deux articles existants depuis lesquels vous pouvez ajouter un lien
        contextuel.
      </p>

      <p>
        Ensuite, quand vous publiez un nouvel article, revenez systématiquement sur
        vos anciens articles et ajoutez un lien vers le nouveau. Ce réflexe seul
        améliore significativement la cohérence de votre maillage au fil du temps.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez qu'on audite le maillage interne de votre site ?{' '}
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
            <Link href="/blog/structurer-site-web-seo-conception">
              Comment structurer un site web pour le SEO dès la conception
            </Link>
          </li>
          <li>
            <Link href="/blog/netlinking-backlinks">
              Netlinking : comment obtenir des backlinks sans spammer personne
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
