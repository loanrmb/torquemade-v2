'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function ChoisirAgenceWebBordeauxContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">How to Choose a Web Agency in Bordeaux (Without Getting Burned)</h1>

      <p>
        Bordeaux's web agency market is broad and heterogeneous. From independent studios
        to large communication agencies, from freelance developers to standardised site
        creation platforms — the choice is vast. And the criteria aren't always obvious.
        Here's how to navigate this market effectively.
      </p>

      <h2>Questions to ask before signing</h2>

      <ul>
        <li><strong>"Who will actually work on my project?"</strong> Some agencies sell on their image but subcontract to developers on the other side of the world. Ask who codes, who writes, who is your daily contact.</li>
        <li><strong>"Can I see sites similar to mine in your portfolio?"</strong> An e-commerce portfolio doesn't guarantee competence for a local services site with booking.</li>
        <li><strong>"Who owns the site once delivered?"</strong> Some pricing models keep the code or CMS hostage. Verify you own the code, domain name, and hosting upon delivery.</li>
        <li><strong>"What happens after delivery?"</strong> SEO, maintenance, updates — included? Billed separately? Delegated? Post-delivery conditions are often the real subject.</li>
        <li><strong>"What's the process if you're late?"</strong> Delays exist. What matters is transparency and remedies for significant overruns.</li>
      </ul>

      <h2>Warning signs</h2>

      <p>
        Be wary of agencies that show no portfolio, offer "website package" prices without
        detailing what's included, or promise unrealistic timelines. A quality custom site
        takes time — a promise of "site delivered in 5 days" typically means a generic
        template with your logo.
      </p>

      <h2>What a good web provider should be able to tell you</h2>

      <p>
        The technical stack used (and why), targeted performance indicators (speed, Core Web
        Vitals), SEO strategy integrated from the design stage, and the testing and validation
        process. A provider who only talks about "beautiful design" without mentioning
        performance, SEO, and maintenance is missing the fundamentals.
      </p>

      <hr />

      <p>
        <em>
          Looking for a web studio in Bordeaux with a transparent, custom-built approach?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/constructeur-site-gratuit-pme">
              Small business: why not to use a free website builder
            </Link>
          </li>
          <li>
            <Link href="/blog/roi-site-web">
              Website ROI: how to measure what it really brings you
            </Link>
          </li>
          <li>
            <Link href="/blog/studio-web-bordeaux-sur-mesure">
              Torquemade: the custom approach of an independent web studio in Bordeaux
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Comment choisir son agence web à Bordeaux (sans se faire avoir)</h1>

      <p>
        Le marché des agences web à Bordeaux est large et hétérogène. Des studios
        indépendants aux grandes agences de communication, des développeurs freelance
        aux plateformes de création de sites standardisés — le choix est vaste.
        Et les critères ne sont pas toujours évidents. Voici comment naviguer
        efficacement dans ce marché.
      </p>

      <h2>Les questions à poser avant de signer</h2>

      <ul>
        <li>
          <strong>"Qui va réellement travailler sur mon projet ?"</strong>
          Certaines agences vendent sur leur image mais sous-traitent à des
          développeurs à l'autre bout du monde. Demandez qui code, qui rédige,
          qui est votre interlocuteur quotidien.
        </li>
        <li>
          <strong>"Puis-je voir des sites similaires au mien dans votre portfolio ?"</strong>
          Un portfolio de sites e-commerce ne garantit pas la compétence pour un
          site de services locaux avec réservation. Demandez des exemples pertinents.
        </li>
        <li>
          <strong>"À qui appartient le site une fois livré ?"</strong>
          Certains modèles tarifaires gardent le code ou le CMS en otage.
          Vérifiez que vous êtes propriétaire du code, du nom de domaine et
          de l'hébergement à la livraison.
        </li>
        <li>
          <strong>"Que se passe-t-il après la livraison ?"</strong>
          Le SEO, la maintenance, les mises à jour — sont-ils inclus ? Facturés
          séparément ? Délégués à quelqu'un d'autre ? Les conditions post-livraison
          sont souvent le vrai sujet.
        </li>
        <li>
          <strong>"Quel est le processus en cas de retard ?"</strong>
          Les retards existent. Ce qui compte, c'est la transparence et les recours
          prévus en cas de dépassement significatif.
        </li>
      </ul>

      <h2>Les signaux d'alerte</h2>

      <p>
        Méfiez-vous des agences qui ne montrent pas de portfolio, qui proposent
        des prix "forfait site web" sans détailler ce qui est inclus, ou qui
        promettent des délais irréalistes. Un site sur mesure de qualité prend
        du temps — une promesse de "site livré en 5 jours" signifie généralement
        un template générique avec votre logo.
      </p>

      <h2>Ce qu'un bon prestataire web devrait être capable de vous dire</h2>

      <p>
        La stack technique utilisée (et pourquoi), les indicateurs de performance
        ciblés (vitesse, Core Web Vitals), la stratégie SEO intégrée dès la
        conception, et le processus de recette et de validation. Un prestataire
        qui parle uniquement de "beau design" sans mentionner performance, SEO
        et maintenance manque des fondamentaux.
      </p>

      <hr />

      <p>
        <em>
          Vous cherchez un studio web à Bordeaux avec une approche transparente
          et sur mesure ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/constructeur-site-gratuit-pme">
              Petite entreprise : pourquoi ne pas utiliser un constructeur de site gratuit
            </Link>
          </li>
          <li>
            <Link href="/blog/roi-site-web">
              ROI d'un site web : comment mesurer ce que ça vous rapporte vraiment
            </Link>
          </li>
          <li>
            <Link href="/blog/studio-web-bordeaux-sur-mesure">
              Torquemade : l'approche sur mesure d'un studio web indépendant à Bordeaux
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
