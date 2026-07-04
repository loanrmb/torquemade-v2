'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function DevisLigneVsAppelContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Online Quote vs Phone Quote: Which Converts Better?</h1>

      <p>
        "Contact us for a quote", the standard formula. But is it really the most
        effective? The choice between an online quote form and a phone call first changes
        your lead volume, their quality, and your commercial processing time.
      </p>

      <h2>When online quotes work better</h2>

      <ul>
        <li><strong>Low to medium average ticket (under €2,000).</strong> For services whose price can be estimated online, a form that produces an immediate estimate reduces friction and increases request volume.</li>
        <li><strong>Standardisable services.</strong> If your service has a relatively defined scope, a form with a few fields can produce a reliable estimate.</li>
        <li><strong>Audience that avoids the phone.</strong> A growing share of prospects prefer to research and request online before any human contact. A quote form lets them advance without friction.</li>
      </ul>

      <h2>When phone first works better</h2>

      <ul>
        <li><strong>High ticket and complex project.</strong> For a €10,000+ project, no form replaces a conversation to understand needs, qualify the prospect, and establish the necessary trust relationship.</li>
        <li><strong>Highly personalised services.</strong> When the quote depends on many variables the client can't easily formulate in writing, a call is more effective for collecting the necessary information.</li>
      </ul>

      <h2>The hybrid solution</h2>

      <p>
        For many activities, the best approach is hybrid: a short form collecting basic
        information (project type, indicative budget, timeline), followed by a quick
        15-minute qualification call before sending a formal quote. The form reduces
        unqualified lead volume; the call enables qualification before investing time in
        writing the quote.
      </p>

      <hr />

      <p>
        <em>
          Want to optimise your conversion journey?{' '}
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
            <Link href="/blog/formulaire-contact-conversion">
              Why your contact form doesn't convert
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
      <h1 className="blog-article-title">Devis en ligne vs devis sur appel : lequel convertit le mieux ?</h1>

      <p>
        "Contactez-nous pour obtenir un devis": c'est la formule standard. Mais est-ce
        vraiment la plus efficace ? Le choix entre un formulaire de devis en ligne et
        une prise de contact téléphonique d'abord n'est pas anodin : il change votre
        volume de leads, leur qualité, et votre temps de traitement commercial.
      </p>

      <h2>Quand le devis en ligne fonctionne mieux</h2>

      <ul>
        <li>
          <strong>Ticket moyen faible à moyen (moins de 2 000 €).</strong>
          Pour des prestations dont le prix peut être estimé en ligne, un formulaire
          qui permet de recevoir une estimation immédiate réduit la friction et augmente
          le volume de demandes.
        </li>
        <li>
          <strong>Prestations standardisables.</strong>
          Si votre prestation a un scope relativement défini (création d'un site vitrine,
          entretien de jardin, nettoyage de locaux), un formulaire avec quelques champs
          peut produire une estimation fiable.
        </li>
        <li>
          <strong>Audience qui évite le téléphone.</strong>
          Une part croissante des prospects préfère s'informer et faire une demande en
          ligne avant tout contact humain. Un formulaire de devis leur permet d'avancer
          sans friction.
        </li>
      </ul>

      <h2>Quand l'appel d'abord fonctionne mieux</h2>

      <ul>
        <li>
          <strong>Ticket élevé et projet complexe.</strong>
          Pour un projet à 10 000 € ou plus, aucun formulaire ne remplace un échange
          pour comprendre les besoins, qualifier le prospect et établir la relation
          de confiance nécessaire.
        </li>
        <li>
          <strong>Services très personnalisés.</strong>
          Quand le devis dépend de nombreuses variables que le client ne peut pas
          facilement formuler par écrit (travaux de rénovation, consulting stratégique),
          l'appel est plus efficace pour collecter l'information nécessaire.
        </li>
      </ul>

      <h2>La solution hybride</h2>

      <p>
        Pour beaucoup d'activités, la meilleure approche est hybride : un formulaire court
        qui collecte les informations de base (type de projet, budget indicatif, délai),
        suivi d'un appel de qualification rapide (15 minutes) avant d'envoyer un devis
        formalisé. Le formulaire réduit le volume de leads non qualifiés ; l'appel
        permet de qualifier avant d'investir du temps dans la rédaction du devis.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez optimiser votre parcours de conversion ?{' '}
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
            <Link href="/blog/formulaire-contact-conversion">
              Pourquoi votre formulaire de contact ne convertit pas
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
