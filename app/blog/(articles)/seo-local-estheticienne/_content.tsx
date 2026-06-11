'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function SeoLocalEstheticienneContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Local SEO for beauty salons: the complete playbook (2026)</h1>

      <p>
        Most clients searching for a beautician type a local query on Google — and look
        at the first three results. If you're not there, you lose clients who are
        geographically close and ready to book. Here's how to get there without advertising.
      </p>

      <h2>Google Business Profile: the absolute priority</h2>

      <p>
        For a beautician, Google Business Profile is the most impactful local SEO lever.
        A well-filled listing positions you in the "local pack" — the three listings appearing
        under the Google map for local queries.
      </p>

      <ul>
        <li>Fill in all information: name, address (or area if mobile), phone, hours</li>
        <li>Choose a precise primary category: "Beautician" or "Beauty salon"</li>
        <li>Add services in GBP — Google displays them directly in results</li>
        <li>Publish photos regularly — before/after, workspace, products</li>
        <li>Respond to all reviews, positive and negative</li>
      </ul>

      <h2>Local keywords to target on your site</h2>

      <p>
        Each service can have its own page optimised for a local query: "Waxing [your city],"
        "Facial [your city]," "Gel manicure [your city]." These pages must mention your city
        naturally in the title, subheadings, and text — without artificial over-optimisation.
      </p>

      <h2>Client reviews: the fuel of local SEO</h2>

      <p>
        For a beautician, reviews are particularly important as clients seek a trusted provider.
        A simple system to get more reviews: after each appointment, send an SMS or thank-you
        email with the direct link to your Google page. Within months, you build a review base
        that reassures and ranks.
      </p>

      <hr />

      <p>
        <em>
          Want us to optimise your local presence?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/site-web-estheticienne">
              Website for a beautician: what you absolutely must display
            </Link>
          </li>
          <li>
            <Link href="/blog/google-business-profile-optimisation">
              Google Business Profile: how to optimise your listing for local SEO
            </Link>
          </li>
          <li>
            <Link href="/blog/prise-rdv-estheticienne">
              Online booking: why it's essential for a beautician
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">SEO local pour une esthéticienne : se positionner dans sa ville</h1>

      <p>
        La majorité des clientes qui cherchent une esthéticienne tapent une requête
        locale sur Google — et regardent les trois premiers résultats. Si vous n'y
        êtes pas, vous perdez des clientes qui sont géographiquement proches de vous
        et prêtes à prendre RDV. Voici comment y arriver sans publicité.
      </p>

      <h2>Google Business Profile : la priorité absolue</h2>

      <p>
        Pour une esthéticienne, le Google Business Profile (anciennement Google My Business)
        est le levier SEO local le plus impactant. Une fiche bien remplie vous positionne
        dans le "pack local" — les trois fiches qui apparaissent sous la carte Google
        pour les requêtes locales.
      </p>

      <ul>
        <li>Remplissez toutes les informations : nom, adresse (ou zone si itinérante), téléphone, horaires</li>
        <li>Choisissez une catégorie principale précise : "Esthéticienne" ou "Institut de beauté"</li>
        <li>Ajoutez les services dans GBP — Google les affiche directement dans les résultats</li>
        <li>Publiez des photos régulièrement — avant/après, espace de travail, produits</li>
        <li>Répondez à tous les avis, positifs comme négatifs</li>
      </ul>

      <h2>Les mots-clés locaux à cibler sur votre site</h2>

      <p>
        Votre site doit être optimisé pour les requêtes que vos futures clientes tapent.
        Chaque prestation peut avoir sa propre page optimisée pour une requête locale :
      </p>

      <ul>
        <li>"Épilation [votre ville]" — souvent la prestation la plus recherchée</li>
        <li>"Soin du visage [votre ville]"</li>
        <li>"Manucure gel [votre ville]"</li>
        <li>"Extension de cils [votre département]"</li>
      </ul>

      <p>
        Ces pages doivent mentionner votre ville naturellement dans le titre,
        les sous-titres et le texte — sans sur-optimisation artificielle.
      </p>

      <h2>Les avis clients : le carburant du SEO local</h2>

      <p>
        Pour une esthéticienne, les avis sont particulièrement importants car
        les clientes cherchent une prestataire de confiance. Un système simple
        pour obtenir plus d'avis : après chaque RDV, envoyez un SMS ou email
        de remerciement avec le lien direct vers votre page Google. En quelques
        mois, vous construisez une base d'avis qui rassure et qui classe.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez qu'on optimise votre présence locale ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/site-web-estheticienne">
              Site web pour esthéticienne : ce qu'il faut absolument afficher
            </Link>
          </li>
          <li>
            <Link href="/blog/google-business-profile-optimisation">
              Google Business Profile : optimiser sa fiche pour le SEO local
            </Link>
          </li>
          <li>
            <Link href="/blog/prise-rdv-estheticienne">
              Prise de RDV en ligne : pourquoi c'est indispensable pour une esthéticienne
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
