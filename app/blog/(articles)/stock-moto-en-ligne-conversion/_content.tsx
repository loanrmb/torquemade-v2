'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function StockMotoEnLigneConversionContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">How to Present Your Motorcycle Stock Online to Convert</h1>

      <p>
        A motorcycle buyer spends several weeks comparing online before visiting a
        dealership. During this phase, your online stock presentation is your first
        salesperson. If photos are blurry, prices are missing, or information is
        incomplete — the visitor moves to the next site. Here's how to avoid that.
      </p>

      <h2>Essential elements on each motorcycle listing</h2>

      <ul>
        <li><strong>Numerous, quality photos.</strong> Minimum 8 photos per bike: 3/4 front, 3/4 rear, left profile, right profile, dashboard, engine detail, seat and riding position. For used bikes, add general condition photos. Honesty reassures.</li>
        <li><strong>Price displayed clearly.</strong> "Price on request" is eliminating on mobile. A buyer comparing several sites has no time to call for each model. A displayed price, even indicative, creates a natural filter that qualifies the contact.</li>
        <li><strong>Complete technical specifications.</strong> Displacement, power, torque, weight, seat height, required licence type, fuel consumption. These answer questions the buyer has before visiting.</li>
        <li><strong>A clear call to action.</strong> "Request a test ride," "Get in touch," "Reserve this bike" — each listing must lead to an action, not just a generic contact page.</li>
      </ul>

      <h2>Catalogue organisation</h2>

      <p>
        Offer filters by category (roadster, trail, custom, scooter), by displacement,
        by budget, and by condition (new/used). A buyer who can't quickly find what they
        want leaves. Filters reduce search time and increase time on your site. For used
        bikes, add the registration date and number of previous owners — information any
        serious buyer will eventually ask for, so display it upfront.
      </p>

      <hr />

      <p>
        <em>
          Want to redesign your online stock presentation?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/fiche-produit-moto-redaction">
              Motorcycle product listing: how to write a description that sells
            </Link>
          </li>
          <li>
            <Link href="/blog/site-web-concessionnaire-moto">
              Why motorcycle dealers need a modern website
            </Link>
          </li>
          <li>
            <Link href="/blog/moto-neuve-occasion-seo">
              New vs used motorcycle: how to structure pages for SEO
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Comment présenter son stock de motos en ligne pour convertir</h1>

      <p>
        Un acheteur de moto passe en moyenne plusieurs semaines à comparer en ligne avant
        de visiter une concession. Pendant cette phase, votre présentation de stock
        en ligne est votre premier commercial. Si les photos sont floues, si les prix
        sont absents, si les informations sont incomplètes — le visiteur passe au site
        suivant. Voici comment éviter ça.
      </p>

      <h2>Les éléments indispensables sur chaque fiche moto</h2>

      <ul>
        <li>
          <strong>Des photos nombreuses et de qualité.</strong>
          Minimum 8 photos par moto : 3/4 avant, 3/4 arrière, profil gauche, profil droit,
          tableau de bord, détail moteur, selle et position de conduite. Pour les motos
          d'occasion, ajoutez des photos de l'état général (compteur kilométrique, petits
          défauts le cas échéant). L'honnêteté rassure.
        </li>
        <li>
          <strong>Le prix affiché clairement.</strong>
          "Prix sur demande" est éliminatoire sur mobile. L'acheteur qui compare
          plusieurs sites n'a pas le temps d'appeler pour chaque modèle. Un prix
          affiché, même indicatif, crée un filtre naturel qui qualifie le contact.
        </li>
        <li>
          <strong>Les caractéristiques techniques complètes.</strong>
          Cylindrée, puissance, couple, poids, hauteur de selle, type de permis requis,
          consommation. Ces informations répondent aux questions que l'acheteur se pose
          avant la visite.
        </li>
        <li>
          <strong>Un appel à l'action clair.</strong>
          "Demander un essai", "Prendre contact", "Réserver cette moto" — chaque
          fiche doit mener à une action. Pas juste à une page de contact générique.
        </li>
      </ul>

      <h2>L'organisation du catalogue</h2>

      <p>
        Proposez des filtres par catégorie (roadster, trail, custom, scooter),
        par cylindrée, par budget, et par état (neuf/occasion). Un acheteur qui ne
        trouve pas rapidement ce qu'il cherche part. Les filtres réduisent le temps
        de recherche et augmentent le temps passé sur votre site.
      </p>

      <p>
        Pour les motos d'occasion, ajoutez la date de mise en circulation et le
        nombre de propriétaires précédents. Ce sont des informations que tout acheteur
        sérieux finira par demander — autant les afficher d'emblée.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez refondre la présentation de votre stock en ligne ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/fiche-produit-moto-redaction">
              Fiche produit moto : comment rédiger une description qui vend
            </Link>
          </li>
          <li>
            <Link href="/blog/site-web-concessionnaire-moto">
              Pourquoi les concessionnaires moto ont besoin d'un site web moderne
            </Link>
          </li>
          <li>
            <Link href="/blog/moto-neuve-occasion-seo">
              Moto neuve vs occasion : comment structurer les pages pour le SEO
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
