'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function SiteWebConcessionnaireMotoCont() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Why Motorcycle Dealers Need a Modern Website</h1>

      <p>
        Before entering a dealership, more than 80% of motorcycle buyers research online.
        They compare models, read reviews, check available stock. If your site is slow,
        poorly presented, or unfindable on Google, you lose these clients before they've
        set foot in your showroom — and they go to the competitor who appears first.
      </p>

      <h2>What a modern site brings to a dealership</h2>

      <ul>
        <li><strong>Visible, navigable stock.</strong> Your new and used bikes must be browsable online, with photos, specs, and prices. A static PDF catalogue or "contact us for availability" no longer suffices — buyers compare in real time.</li>
        <li><strong>Local visibility on Google.</strong> "Motorcycle dealer [your city]", "used Honda motorbike [department]" — these queries are typed daily. A well-optimised site positions you ahead of competitors on these searches.</li>
        <li><strong>A lead generation tool.</strong> Contact form, test ride request, quote request, service appointment — every page should convert visitors into qualified prospects.</li>
        <li><strong>A showcase for your distributed brands.</strong> If you distribute multiple brands, each deserves its own page — or even its own microsite. Buyers often search by brand before searching by dealership.</li>
      </ul>

      <h2>The most costly mistakes</h2>

      <p>
        A site developed once seven years ago and never updated. Blurred or poorly framed
        stock photos. No prices — "on request" is the best way to lose a buyer comparing
        on mobile. Loading time too slow, pushing visitors away before they see the first
        model. Each additional second of loading time costs conversions. An optimised,
        fast, well-referenced site generates continuous leads — without advertising.
      </p>

      <hr />

      <p>
        <em>
          Managing a motorcycle dealership and want a site that generates leads?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/seo-local-vente-moto-gironde">
              How to sell more motorcycles through local SEO in Gironde
            </Link>
          </li>
          <li>
            <Link href="/blog/stock-moto-en-ligne-conversion">
              How to present your motorcycle stock online to convert
            </Link>
          </li>
          <li>
            <Link href="/blog/microsite-marque-moto">
              Motorcycle brand microsite: why create a dedicated site per brand
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Pourquoi les concessionnaires moto ont besoin d'un site web moderne</h1>

      <p>
        Avant d'entrer dans une concession, plus de 80 % des acheteurs de moto font
        des recherches en ligne. Ils comparent les modèles, lisent les avis, regardent
        les stocks disponibles. Si votre site est lent, mal présenté ou introuvable sur
        Google, vous perdez ces clients avant qu'ils aient mis un pied dans votre
        showroom — et ils vont chez le concurrent qui apparaît en premier.
      </p>

      <h2>Ce qu'un site moderne apporte à une concession</h2>

      <ul>
        <li>
          <strong>Un stock visible et navigable.</strong>
          Vos motos neuves et d'occasion doivent être consultables en ligne, avec photos,
          caractéristiques et prix. Un catalogue statique en PDF ou une page "contactez-nous
          pour connaître la disponibilité" ne suffit plus — les acheteurs comparent
          en temps réel.
        </li>
        <li>
          <strong>Une visibilité locale sur Google.</strong>
          "Concessionnaire moto [votre ville]", "moto Honda d'occasion [département]" —
          ces requêtes sont tapées chaque jour. Un site bien optimisé pour le SEO
          local vous positionne devant vos concurrents sur ces recherches.
        </li>
        <li>
          <strong>Un outil de génération de leads.</strong>
          Formulaire de prise de contact, demande d'essai, demande de devis, prise
          de rendez-vous SAV — chaque page du site doit convertir les visiteurs en
          prospects qualifiés.
        </li>
        <li>
          <strong>La vitrine de vos marques distribuées.</strong>
          Si vous distribuez plusieurs marques, chacune mérite sa propre page —
          voire son propre microsite. Les acheteurs cherchent souvent par marque
          avant de chercher par concession.
        </li>
      </ul>

      <h2>Les erreurs les plus coûteuses</h2>

      <p>
        Le site développé une fois il y a sept ans et jamais mis à jour. Les photos de
        stock floutées ou mal cadrées. L'absence de prix — "sur demande" est le meilleur
        moyen de perdre un acheteur qui compare sur mobile. Le temps de chargement trop
        long qui pousse les visiteurs à partir avant même de voir le premier modèle.
      </p>

      <p>
        Chaque seconde de chargement supplémentaire coûte des conversions. Un site
        optimisé, rapide et bien référencé génère des leads continus — sans publicité.
      </p>

      <hr />

      <p>
        <em>
          Vous gérez une concession moto et voulez un site qui génère des leads ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/seo-local-vente-moto-gironde">
              Comment vendre plus de motos grâce au SEO local en Gironde
            </Link>
          </li>
          <li>
            <Link href="/blog/stock-moto-en-ligne-conversion">
              Comment présenter son stock de motos en ligne pour convertir
            </Link>
          </li>
          <li>
            <Link href="/blog/microsite-marque-moto">
              Microsite de marque moto : pourquoi créer un site dédié par marque
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
