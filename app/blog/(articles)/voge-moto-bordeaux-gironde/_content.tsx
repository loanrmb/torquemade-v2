'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function VogeMotoBordeauxContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Voge Moto Bordeaux: Models Available in Gironde</h1>

      <p>
        Voge is a motorcycle brand of Chinese origin that has established itself in Europe
        through well-equipped models and competitive pricing. In Gironde, the brand is
        accessible through a growing dealer network. Here's what to know about the Voge
        range before visiting a dealership.
      </p>

      <h2>The Voge range in 2025</h2>

      <ul>
        <li><strong>Voge 300R and 500R.</strong> Modern, well-finished roadsters suited for A2 licences and experienced riders seeking a reliable daily ride. Equipment/price ratio very competitive versus equivalent Japanese brands.</li>
        <li><strong>Voge Valico 300DS / 525DS.</strong> The adventure segment — versatile bikes suited to road and trail alike, with European-influenced design.</li>
        <li><strong>Voge 900DSX.</strong> The range's big adventure bike, positioned to compete with European and Japanese middleweights in the accessible premium segment.</li>
      </ul>

      <h2>Why Voge is gaining market share in France</h2>

      <p>
        The improvement in finish quality and electronic equipment (ABS, traction control,
        riding modes) on Voge models at prices 15–30% below Japanese or European equivalents
        is the main driver of adoption. The French after-sales network is progressively
        structuring, lifting the main objection — fear of parts and maintenance difficulties.
      </p>

      <h2>Test riding a Voge in Bordeaux</h2>

      <p>
        Before buying, a test ride is essential — as with any motorcycle. The Voge dealer
        network in Gironde allows you to get a feel for the models that interest you.
        Contact the dealership directly to check model availability and plan a test ride.
      </p>

      <hr />

      <p>
        <em>
          Want to test ride a Voge in Bordeaux?{' '}
          <Link href="/contact">Contact us</Link> to be directed to the nearest dealer.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/cyclone-moto-bordeaux">
              Cyclone moto Bordeaux: everything you need to know about the brand
            </Link>
          </li>
          <li>
            <Link href="/blog/moto-neuve-occasion-seo">
              New vs used motorcycle: how to structure pages for SEO
            </Link>
          </li>
          <li>
            <Link href="/blog/site-web-concessionnaire-moto">
              Why motorcycle dealers need a modern website
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Voge moto Bordeaux : les modèles disponibles en Gironde</h1>

      <p>
        Voge est une marque de motos d'origine chinoise qui s'est imposée en Europe
        grâce à des modèles bien équipés et des tarifs compétitifs. En Gironde, la
        marque est accessible via un réseau de concessionnaires qui s'étoffe. Voici
        ce qu'il faut savoir sur la gamme Voge avant de visiter une concession.
      </p>

      <h2>La gamme Voge en 2025</h2>

      <p>
        Voge propose plusieurs familles de motos adaptées à différents profils de motards :
      </p>

      <ul>
        <li>
          <strong>Voge 300R et 500R.</strong>
          Des roadsters modernes, bien finis, adaptés aux permis A2 et aux motards
          expérimentés cherchant un quotidien fiable. Rapport équipements/prix très
          compétitif face aux marques japonaises équivalentes.
        </li>
        <li>
          <strong>Voge Valico 300DS / 525DS.</strong>
          Le segment adventure, avec des motos polyvalentes adaptées à la route
          comme aux chemins. Design européen influencé par les grandes trails.
        </li>
        <li>
          <strong>Voge 900DSX.</strong>
          La grande adventure de la gamme, positionnée pour concurrencer les
          middleweights européens et japonais sur le segment premium accessible.
        </li>
      </ul>

      <h2>Pourquoi Voge gagne des parts de marché en France</h2>

      <p>
        La montée en qualité des finitions et des équipements électroniques (ABS,
        traction control, modes de conduite) sur des modèles Voge à des prix
        inférieurs de 15 à 30 % aux équivalents japonais ou européens est le
        principal moteur de l'adoption.
      </p>

      <p>
        Le réseau SAV se structure progressivement en France, ce qui lève l'une des
        principales objections à l'achat — la crainte des difficultés de pièces et
        d'entretien.
      </p>

      <h2>Essayer une Voge à Bordeaux</h2>

      <p>
        Avant d'acheter, l'essai est indispensable — comme pour n'importe quelle moto.
        Le réseau de concessionnaires Voge en Gironde vous permet de prendre en main
        les modèles qui vous intéressent. Contactez directement la concession pour
        vérifier la disponibilité des modèles et planifier un essai.
      </p>

      <hr />

      <p>
        <em>
          Vous souhaitez essayer une Voge à Bordeaux ?{' '}
          <Link href="/contact">Contactez-nous</Link> pour être orienté vers
          le concessionnaire le plus proche.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/cyclone-moto-bordeaux">
              Cyclone moto Bordeaux : tout ce qu'il faut savoir sur la marque
            </Link>
          </li>
          <li>
            <Link href="/blog/moto-neuve-occasion-seo">
              Moto neuve vs occasion : comment structurer les pages pour le SEO
            </Link>
          </li>
          <li>
            <Link href="/blog/site-web-concessionnaire-moto">
              Pourquoi les concessionnaires moto ont besoin d'un site web moderne
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
