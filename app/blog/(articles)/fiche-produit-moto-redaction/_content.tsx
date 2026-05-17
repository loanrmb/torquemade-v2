'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function FicheProduitMotoRedactionContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Motorcycle Product Listing: How to Write a Description That Sells</h1>

      <p>
        Most motorcycle product listings read like homologation data sheets: displacement,
        power, torque, weight. This information is necessary — but it doesn't sell.
        What sells is the answer to an implicit question every buyer asks themselves:
        "Does this bike match me?"
      </p>

      <h2>Start with the target rider profile</h2>

      <p>
        Before writing a description, ask: who is this bike for? A beginner on an A2
        licence looking for a reassuring daily ride? An enthusiast wanting a comfortable
        trail for long trips? An urban rider wanting a nimble scooter in traffic?
        The description must speak to that specific profile. "Perfect for daily commuting,
        light and agile in the city, powerful enough for weekend excursions" sells
        infinitely better than "300cc displacement, 27 horsepower."
      </p>

      <h2>The structure of an effective description</h2>

      <ul>
        <li><strong>A hook that qualifies the use.</strong> The first sentence says who and what the bike is for — a natural filter that keeps the right buyer reading.</li>
        <li><strong>3 or 4 strong arguments.</strong> What differentiates this bike: design, equipment, ease of handling, comfort, range. Not all arguments — the best ones.</li>
        <li><strong>Technical specifications.</strong> Displacement, power, weight, seat height — in a clear list, after the argument. For used bikes: mileage, condition, history.</li>
        <li><strong>A personalised call to action.</strong> "Test this bike at our dealership" rather than "contact us." More precise, more engaging.</li>
      </ul>

      <h2>The SEO impact of well-written descriptions</h2>

      <p>
        A unique description written for each model has a dual benefit: it convinces buyers
        and helps Google index your page for model-specific queries. A copy-pasted
        manufacturer description is duplicate content — Google doesn't prioritise it.
      </p>

      <hr />

      <p>
        <em>
          Want us to write descriptions for your stock?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/stock-moto-en-ligne-conversion">
              How to present your motorcycle stock online to convert
            </Link>
          </li>
          <li>
            <Link href="/blog/moto-neuve-occasion-seo">
              New vs used motorcycle: how to structure pages for SEO
            </Link>
          </li>
          <li>
            <Link href="/blog/seo-concessionnaire-moto">
              SEO for motorcycle dealers: the keywords that convert
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Fiche produit moto : comment rédiger une description qui vend</h1>

      <p>
        La majorité des fiches produits moto ressemblent à des fiches techniques
        d'homologation : cylindrée, puissance, couple, poids. Ces informations sont
        nécessaires — mais elles ne vendent pas. Ce qui vend, c'est la réponse à une
        question implicite que tout acheteur se pose : "Est-ce que cette moto me
        correspond ?"
      </p>

      <h2>Commencer par le profil du motard cible</h2>

      <p>
        Avant de rédiger une description, posez-vous la question : à qui est destinée
        cette moto ? Un débutant en permis A2 qui cherche un quotidien rassurant ?
        Un passionné de balade qui veut une trail confortable sur longs trajets ?
        Un urbain qui veut un scooter maniable dans le trafic ?
      </p>

      <p>
        La description doit parler à ce profil spécifique. "Parfaite pour les trajets
        domicile-travail, légère et agile en ville, suffisamment puissante pour les
        excursions du weekend" vend infiniment mieux que "cylindrée 300cc, puissance
        27 chevaux".
      </p>

      <h2>La structure d'une description efficace</h2>

      <ul>
        <li>
          <strong>Une accroche qui qualifie l'usage.</strong>
          La première phrase dit à qui et à quoi la moto est destinée. Elle sert
          de filtre naturel — le bon acheteur continue à lire, les autres passent.
        </li>
        <li>
          <strong>Les 3 ou 4 arguments forts.</strong>
          Ce qui différencie cette moto des autres : son design, son équipement,
          sa facilité de prise en main, son confort, son autonomie. Pas tous les
          arguments — les meilleurs.
        </li>
        <li>
          <strong>Les caractéristiques techniques.</strong>
          Cylindrée, puissance, poids, hauteur de selle — en liste claire, après
          l'argumentaire. Pour les motos d'occasion : kilométrage, état, historique.
        </li>
        <li>
          <strong>Un appel à l'action personnalisé.</strong>
          "Essayez cette moto dans notre concession" plutôt que "contactez-nous".
          Plus précis, plus engageant.
        </li>
      </ul>

      <h2>L'impact SEO des descriptions bien rédigées</h2>

      <p>
        Une description unique et rédigée pour chaque modèle a un double bénéfice :
        elle convainc les acheteurs et elle aide Google à indexer votre page sur des
        requêtes spécifiques au modèle. Une description copiée-collée depuis le site
        fabricant est du contenu dupliqué — Google ne l'indexe pas en priorité.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez qu'on rédige les descriptions de votre stock ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/stock-moto-en-ligne-conversion">
              Comment présenter son stock de motos en ligne pour convertir
            </Link>
          </li>
          <li>
            <Link href="/blog/moto-neuve-occasion-seo">
              Moto neuve vs occasion : comment structurer les pages pour le SEO
            </Link>
          </li>
          <li>
            <Link href="/blog/seo-concessionnaire-moto">
              SEO pour concessionnaire moto : les mots-clés qui convertissent
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
