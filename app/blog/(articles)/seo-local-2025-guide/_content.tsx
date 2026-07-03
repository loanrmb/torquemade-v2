'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function SeoLocal2025Content() {
  const lang = useLang()
  return lang === 'en' ? <ArticleEN /> : <ArticleFR />
}

function ArticleFR() {
  return (
    <article className="blog-article">

      <header className="blog-header">
        <h1 className="blog-article-title">SEO local en 2025 : le guide complet pour les commerces de proximité</h1>
        <p className="blog-intro">
          Un restaurant, un garage, un salon de coiffure ou un cabinet de kiné : tous partagent
          le même enjeu. Quand un habitant du coin tape &ldquo;coiffeur bordeaux&rdquo; ou &ldquo;mécanicien
          près de chez moi&rdquo;, son téléphone décide en quelques millisecondes qui mérite
          d&apos;apparaître. Ce guide détaille, étape par étape, les leviers du SEO local
          qui font la différence en 2025, sans budget publicitaire, sans mystère.
        </p>
      </header>

      <nav className="blog-toc" aria-label="Sommaire">
        <p className="blog-toc-title">Dans cet article</p>
        <ol>
          <li><a href="#quest-ce-que-seo-local">Ce qu&apos;est vraiment le SEO local</a></li>
          <li><a href="#google-business-profile">Google Business Profile : votre vitrine numéro 1</a></li>
          <li><a href="#coherence-nap">Cohérence NAP : nom, adresse, téléphone partout</a></li>
          <li><a href="#avis-clients">Les avis clients : le signal de confiance le plus puissant</a></li>
          <li><a href="#mots-cles-locaux">Trouver les bons mots-clés locaux</a></li>
          <li><a href="#optimisation-on-page">Optimisation on-page : les pages locales</a></li>
          <li><a href="#schema-markup">Schema markup LocalBusiness</a></li>
          <li><a href="#backlinks-locaux">Backlinks locaux : qualité avant quantité</a></li>
          <li><a href="#mobile-et-vitesse">Mobile et vitesse : des fondations non négociables</a></li>
          <li><a href="#mesurer">Mesurer vos progrès avec Search Console</a></li>
          <li><a href="#conclusion">En résumé</a></li>
        </ol>
      </nav>

      <section id="quest-ce-que-seo-local">
        <h2>1. Ce qu&apos;est vraiment le SEO local</h2>
        <p>
          Le SEO local est l&apos;ensemble des techniques qui permettent à un établissement
          physique ou à un prestataire de service ancré géographiquement d&apos;apparaître
          dans les résultats de recherche pour des requêtes liées à sa zone.
          Il se distingue du SEO classique par un élément fondamental : la proximité
          géographique est un facteur de classement à part entière.
        </p>
        <p>
          Concrètement, les résultats locaux se manifestent sous deux formes :
        </p>
        <ul>
          <li>
            Le <strong>Local Pack</strong> (ou &ldquo;Pack 3&rdquo;) : le bloc de trois établissements
            qui s&apos;affiche en haut des résultats, avec carte, notes et horaires.
            C&apos;est l&apos;emplacement le plus cliqué sur mobile.
          </li>
          <li>
            Les <strong>résultats organiques classiques</strong> où votre site
            peut se positionner sur des requêtes avec intention locale.
          </li>
        </ul>
        <p>
          L&apos;algorithme local de Google repose sur trois piliers officiels :
          la <strong>pertinence</strong> (votre activité correspond-elle à la recherche ?),
          la <strong>distance</strong> (êtes-vous proche de l&apos;utilisateur ?)
          et la <strong>notoriété</strong> (êtes-vous une référence dans votre domaine ?).
          Ce guide couvre chacun de ces piliers en détail.
        </p>
      </section>

      <section id="google-business-profile">
        <h2>2. Google Business Profile : votre vitrine numéro 1</h2>
        <p>
          Anciennement Google My Business, <strong>Google Business Profile (GBP)</strong> est
          le point de départ absolu de toute stratégie SEO locale. C&apos;est gratuit,
          c&apos;est puissant, et la majorité des commerces de proximité n&apos;en exploitent
          qu&apos;une fraction du potentiel.
        </p>

        <h3>Revendiquer et vérifier sa fiche</h3>
        <p>
          Si votre fiche n&apos;existe pas encore, créez-la sur business.google.com.
          Si elle existe déjà (Google la génère parfois automatiquement), revendiquez-la.
          La vérification se fait généralement par courrier postal avec un code à 5 chiffres,
          ou par vidéo pour les nouvelles fiches.
        </p>

        <h3>Compléter chaque champ à 100 %</h3>
        <p>Google favorise les fiches complètes. Sans exception, renseignez :</p>
        <ul>
          <li>Le nom exact de votre établissement (sans mots-clés artificiels)</li>
          <li>La catégorie principale et les catégories secondaires pertinentes</li>
          <li>Adresse, numéro de téléphone, site web et horaires (y compris les jours fériés)</li>
          <li>La description de l&apos;établissement (750 caractères, utilisez vos mots-clés naturellement)</li>
          <li>Les attributs : paiement CB, WiFi, accessible PMR, livraison, etc.</li>
          <li>Des photos récentes et de qualité (façade, intérieur, équipe, produits)</li>
        </ul>

        <h3>Les Posts Google : un levier sous-utilisé</h3>
        <p>
          Depuis la fiche, vous pouvez publier des posts (offres, événements, actualités).
          Ces posts apparaissent dans votre fiche et envoient un signal d&apos;activité à Google.
          Une publication par semaine suffit à maintenir une fiche &ldquo;active&rdquo; aux yeux de l&apos;algorithme.
        </p>

        <h3>Questions &amp; Réponses</h3>
        <p>
          La section Q&amp;R est souvent ignorée par les commerçants et remplie par n&apos;importe qui.
          Prenez les devants : posez vous-même les questions fréquentes de vos clients (tarifs,
          parking, délais, modalités) et répondez-y.
        </p>
      </section>

      <section id="coherence-nap">
        <h2>3. Cohérence NAP : nom, adresse, téléphone partout</h2>
        <p>
          NAP est l&apos;acronyme anglais de <em>Name, Address, Phone</em>.
          Google consolide les informations vous concernant depuis des dizaines de sources :
          annuaires, presse locale, réseaux sociaux, sites partenaires. Si votre adresse
          est écrite différemment ici et là, l&apos;algorithme doute de votre existence physique.
        </p>

        <h3>Auditer vos citations existantes</h3>
        <p>
          Commencez par rechercher votre nom d&apos;établissement dans Google pour identifier
          toutes les mentions. Les principaux annuaires à vérifier en France sont :
          Pages Jaunes, Yelp, Tripadvisor, Foursquare, Cityvox, Infobel et les annuaires
          sectoriels de votre activité.
        </p>

        <h3>Corriger et unifier</h3>
        <p>Adoptez un format canonique et utilisez-le partout sans variation :</p>
        <ul>
          <li>Même orthographe du nom commercial</li>
          <li>Même format d&apos;adresse (abréviation ou mot en entier)</li>
          <li>Même format de téléphone</li>
        </ul>
      </section>

      <section id="avis-clients">
        <h2>4. Les avis clients : le signal de confiance le plus puissant</h2>
        <p>
          Les avis Google sont à la fois un facteur de classement et un levier de conversion.
          Un établissement avec 80 avis à 4,6 étoiles va systématiquement apparaître avant
          un concurrent avec 12 avis à 4,8, la quantité compte autant que la note moyenne.
        </p>

        <h3>Comment obtenir plus d&apos;avis légitimement</h3>
        <ul>
          <li>Oralement, juste après une prestation réussie</li>
          <li>Par SMS de remerciement avec lien direct</li>
          <li>Sur votre facture ou confirmation de commande</li>
          <li>Via un QR code à l&apos;accueil ou en caisse</li>
        </ul>
        <p>
          N&apos;achetez jamais d&apos;avis. Google les détecte et peut supprimer l&apos;intégralité
          de votre fiche sans préavis.
        </p>

        <h3>Répondre à tous les avis</h3>
        <p>
          Répondre aux avis (positifs comme négatifs) est un signal d&apos;activité pris en compte
          par Google. Pour les avis négatifs, une réponse calme, professionnelle et factuelle
          rassure les futurs clients bien plus qu&apos;un silence. Évitez les formules génériques.
          Personnalisez chaque réponse.
        </p>
      </section>

      <section id="mots-cles-locaux">
        <h2>5. Trouver les bons mots-clés locaux</h2>
        <p>
          La recherche de mots-clés locaux suit la même logique que le SEO classique,
          avec une dimension géographique ajoutée. L&apos;objectif est de cibler des requêtes
          avec une intention d&apos;achat ou de visite claire, et un volume raisonnable dans votre zone.
        </p>

        <h3>Les combinaisons à cibler en priorité</h3>
        <ul>
          <li><strong>[activité] + [ville]</strong> : &ldquo;restaurant japonais bordeaux&rdquo;</li>
          <li><strong>[activité] + &ldquo;près de moi&rdquo;</strong> : capturé automatiquement si votre fiche GBP est bien configurée</li>
          <li><strong>[activité] + [quartier]</strong> : &ldquo;coiffeur chartrons&rdquo;, &ldquo;boulangerie bacalan&rdquo;</li>
          <li><strong>[problème] + [ville]</strong> : &ldquo;pneu crevé bordeaux&rdquo;, &ldquo;urgence plombier nantes&rdquo;</li>
        </ul>

        <h3>Outils pour trouver ces mots-clés</h3>
        <p>
          Google Search Console (gratuit) vous indique déjà sur quelles requêtes vous apparaissez.
          Google Suggest est une mine d&apos;or pour comprendre ce que vos clients tapent vraiment.
          Ubersuggest et Semrush offrent des données de volume pour affiner vos choix.
        </p>
      </section>

      <section id="optimisation-on-page">
        <h2>6. Optimisation on-page : les pages locales</h2>
        <p>
          Votre site web est le deuxième pilier du SEO local, après GBP. Plusieurs optimisations
          on-page sont spécifiques à la recherche locale.
        </p>

        <h3>La page d&apos;accueil : signal géographique clair</h3>
        <p>Google doit comprendre en quelques secondes où vous opérez. Intégrez votre ville dans :</p>
        <ul>
          <li>La balise <code>&lt;title&gt;</code></li>
          <li>La balise <code>&lt;h1&gt;</code></li>
          <li>Le premier paragraphe de contenu</li>
          <li>L&apos;URL si vous avez plusieurs pages locales</li>
        </ul>

        <h3>Créer des pages locales dédiées</h3>
        <p>
          Si vous opérez dans plusieurs villes ou quartiers, créez une page spécifique par zone
, avec du contenu unique pour chacune. Google pénalise le contenu dupliqué,
          même pour des variations géographiques.
        </p>

        <h3>Le footer : NAP structuré</h3>
        <p>
          Votre adresse complète, téléphone et horaires dans le footer de chaque page permettent
          à Google de confirmer votre localisation sur l&apos;ensemble du site.
        </p>
      </section>

      <section id="schema-markup">
        <h2>7. Schema markup LocalBusiness</h2>
        <p>
          Le schema markup est un vocabulaire de données structurées (JSON-LD) que vous intégrez
          dans le code de votre site pour aider Google à comprendre précisément qui vous êtes.
          Pour le SEO local, le schema <code>LocalBusiness</code> est incontournable.
        </p>

        <h3>Ce qu&apos;il faut renseigner</h3>
        <ul>
          <li>Le type d&apos;activité (Plumber, Restaurant, BeautySalon, AutoRepair, etc.)</li>
          <li>Nom, adresse complète avec <code>streetAddress</code>, <code>addressLocality</code>, <code>postalCode</code></li>
          <li>Numéro de téléphone</li>
          <li>Horaires d&apos;ouverture</li>
          <li>URL du site et URL de la fiche GBP</li>
          <li>Coordonnées géographiques</li>
          <li>Note agrégée si disponible</li>
        </ul>

        <h3>Comment l&apos;implémenter en Next.js</h3>
        <p>
          Dans un projet Next.js, intégrez le JSON-LD dans votre <code>layout.tsx</code> ou
          directement dans la balise <code>&lt;head&gt;</code> via le composant <code>&lt;Script&gt;</code>
          de Next.js avec <code>type=&quot;application/ld+json&quot;</code>.
          Testez ensuite avec le Rich Results Test de Google pour valider l&apos;implémentation.
        </p>
      </section>

      <section id="backlinks-locaux">
        <h2>8. Backlinks locaux : qualité avant quantité</h2>
        <p>
          Les backlinks restent un signal de notoriété fort pour Google. En SEO local,
          un lien depuis un site local ou sectoriel vaut souvent plus qu&apos;un lien
          depuis un site générique à fort trafic.
        </p>

        <h3>Les sources de backlinks locaux à prioriser</h3>
        <ul>
          <li><strong>Presse locale</strong> : un article dans le journal régional génère un lien de qualité</li>
          <li><strong>Associations et événements locaux</strong> : sponsoriser un événement se traduit souvent par un lien</li>
          <li><strong>Partenaires commerciaux</strong> : fournisseurs ou revendeurs qui mentionnent votre établissement</li>
          <li><strong>Chambres de commerce et syndicats professionnels</strong> : annuaires membres avec liens</li>
          <li><strong>Blogs et médias de niche</strong> : article invité sur un blog sectoriel</li>
        </ul>
      </section>

      <section id="mobile-et-vitesse">
        <h2>9. Mobile et vitesse : des fondations non négociables</h2>
        <p>
          Plus de 70 % des recherches locales se font depuis un smartphone. Un site qui se charge
          en 4 secondes perd une partie significative de ses visiteurs avant même qu&apos;ils aient
          vu votre contenu. Google utilise l&apos;indexation mobile-first : c&apos;est la version mobile
          de votre site qui détermine votre classement.
        </p>

        <h3>Les Core Web Vitals à surveiller</h3>
        <ul>
          <li><strong>LCP (Largest Contentful Paint)</strong> : cible sous 2,5 secondes</li>
          <li><strong>INP (Interaction to Next Paint)</strong> : cible sous 200 ms</li>
          <li><strong>CLS (Cumulative Layout Shift)</strong> : cible sous 0,1</li>
        </ul>

        <h3>Le numéro de téléphone cliquable</h3>
        <p>
          Sur mobile, votre numéro de téléphone doit être un lien <code>href=&quot;tel:+33XXXXXXXXX&quot;</code>.
          Un visiteur en déplacement qui doit copier-coller un numéro ira chez votre concurrent.
        </p>
      </section>

      <section id="mesurer">
        <h2>10. Mesurer vos progrès avec Search Console</h2>
        <p>
          Le SEO local est un travail de fond qui porte ses fruits sur 3 à 6 mois.
          Concentrez-vous sur trois sources pour suivre vos progrès.
        </p>

        <h3>Google Search Console</h3>
        <ul>
          <li>Les impressions et clics sur vos requêtes locales cibles</li>
          <li>Le CTR par requête : un CTR faible indique une balise title à améliorer</li>
          <li>La position moyenne sur vos mots-clés géo-ciblés</li>
          <li>Les pages qui reçoivent le plus de trafic organique local</li>
        </ul>

        <h3>Google Business Profile Insights</h3>
        <p>
          Votre tableau de bord GBP indique combien de personnes ont trouvé votre fiche,
          par quelle requête, et quelle action elles ont effectuée (appel, itinéraire, clic).
        </p>
      </section>

      <section id="conclusion">
        <h2>En résumé</h2>
        <p>
          Le SEO local en 2025 n&apos;est pas réservé aux grandes enseignes. Un commerce de proximité
          qui soigne sa fiche GBP, maintient un NAP cohérent, accumule des avis authentiques
          et publie un site rapide et mobile-first peut dépasser des concurrents bien plus grands
          sur les requêtes locales.
        </p>
        <p>
          L&apos;ordre d&apos;action logique : commencer par Google Business Profile (impact immédiat),
          corriger la cohérence NAP, puis travailler les pages locales et le schema markup,
          et enfin développer les backlinks locaux sur la durée.
        </p>
        <p>
          C&apos;est exactement l&apos;approche que nous appliquons sur les projets que nous accompagnons.
          Sprint Motors est passé de 0 à 791 000 impressions Google en moins de 18 mois
          sans investir un euro en publicité. Le SEO local prend du temps, mais il génère
          du trafic qualifié durablement, là où une campagne publicitaire s&apos;arrête au premier
          euro non dépensé.
        </p>
      </section>

      <aside className="blog-cta">
        <p>
          Vous voulez qu&apos;on audite votre présence locale et qu&apos;on identifie
          les leviers prioritaires pour votre activité ?
        </p>
        <Link href="/contact" className="btn-primary">
          Parler de votre projet
        </Link>
      </aside>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/structurer-site-web-seo-conception">
              Comment structurer un site web pour le SEO dès la conception
            </Link>
          </li>
          <li>
            <Link href="/blog/core-web-vitals-explication">
              Core Web Vitals : ce que Google mesure vraiment sur votre site
            </Link>
          </li>
          <li>
            <Link href="/blog/site-mobile-first-2025">
              Pourquoi votre site doit être mobile-first en 2025
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}

function ArticleEN() {
  return (
    <article className="blog-article">

      <header className="blog-header">
        <h1 className="blog-article-title">Local SEO in 2025: The Complete Guide for Local Businesses</h1>
        <p className="blog-intro">
          A restaurant, a garage, a hair salon, or a physiotherapy practice, all share the same
          challenge. When a local resident types &ldquo;hairdresser bordeaux&rdquo; or &ldquo;mechanic
          near me,&rdquo; their phone decides in milliseconds who deserves to appear. This guide
          walks through, step by step, the local SEO levers that make the difference in 2025,
          with no advertising budget, no mystery.
        </p>
      </header>

      <nav className="blog-toc" aria-label="Table of contents">
        <p className="blog-toc-title">In this article</p>
        <ol>
          <li><a href="#quest-ce-que-seo-local">What local SEO really is</a></li>
          <li><a href="#google-business-profile">Google Business Profile: your #1 showcase</a></li>
          <li><a href="#coherence-nap">NAP consistency: name, address, phone everywhere</a></li>
          <li><a href="#avis-clients">Client reviews: the most powerful trust signal</a></li>
          <li><a href="#mots-cles-locaux">Finding the right local keywords</a></li>
          <li><a href="#optimisation-on-page">On-page optimisation: local pages</a></li>
          <li><a href="#schema-markup">LocalBusiness schema markup</a></li>
          <li><a href="#backlinks-locaux">Local backlinks: quality over quantity</a></li>
          <li><a href="#mobile-et-vitesse">Mobile and speed: non-negotiable foundations</a></li>
          <li><a href="#mesurer">Measuring your progress with Search Console</a></li>
          <li><a href="#conclusion">In summary</a></li>
        </ol>
      </nav>

      <section id="quest-ce-que-seo-local">
        <h2>1. What Local SEO Really Is</h2>
        <p>
          Local SEO is the set of techniques that allow a physical establishment or a geographically
          anchored service provider to appear in search results for queries related to their area.
          It differs from standard SEO by one fundamental element: geographic proximity is a ranking
          factor in its own right.
        </p>
        <p>Local results appear in two forms:</p>
        <ul>
          <li>
            The <strong>Local Pack</strong> (or &ldquo;Pack 3&rdquo;): the block of three establishments
            displayed at the top of results, with a map, ratings, and hours. The most clicked
            placement on mobile.
          </li>
          <li>
            <strong>Standard organic results</strong> where your site can rank for queries
            with local intent.
          </li>
        </ul>
        <p>
          Google&apos;s local algorithm rests on three official pillars: <strong>relevance</strong> (does
          your activity match the search?), <strong>distance</strong> (are you close to the user?),
          and <strong>prominence</strong> (are you a reference in your field?). This guide covers
          each pillar in detail.
        </p>
      </section>

      <section id="google-business-profile">
        <h2>2. Google Business Profile: Your #1 Showcase</h2>
        <p>
          Formerly Google My Business, <strong>Google Business Profile (GBP)</strong> is the absolute
          starting point for any local SEO strategy. It&apos;s free, it&apos;s powerful, and most local
          businesses only exploit a fraction of its potential.
        </p>

        <h3>Claiming and verifying your listing</h3>
        <p>
          If your listing doesn&apos;t exist yet, create it at business.google.com. If it already
          exists (Google sometimes generates them automatically), claim it. Verification is
          typically done by post with a 5-digit code, or by video for new listings.
        </p>

        <h3>Filling in every field to 100%</h3>
        <p>Google favours complete listings. Without exception, fill in:</p>
        <ul>
          <li>Your exact business name (no artificial keywords)</li>
          <li>Primary category and relevant secondary categories</li>
          <li>Address, phone number, website, and hours (including public holidays)</li>
          <li>Business description (750 characters, use your keywords naturally)</li>
          <li>Attributes: card payment, WiFi, accessibility, delivery, etc.</li>
          <li>Recent, quality photos (exterior, interior, team, products)</li>
        </ul>

        <h3>Google Posts: an underused lever</h3>
        <p>
          From your listing, you can publish posts (offers, events, news). These posts appear
          in your listing and send an activity signal to Google. One post per week is enough
          to maintain an &ldquo;active&rdquo; listing in the algorithm&apos;s eyes.
        </p>

        <h3>Questions &amp; Answers</h3>
        <p>
          The Q&amp;A section is often ignored by businesses and filled in by anyone. Take the initiative:
          post the most frequently asked questions yourself (pricing, parking, timelines, terms)
          and answer them.
        </p>
      </section>

      <section id="coherence-nap">
        <h2>3. NAP Consistency: Name, Address, Phone Everywhere</h2>
        <p>
          NAP stands for Name, Address, Phone. Google consolidates information about you from
          dozens of sources, directories, local press, social media, partner sites. If your
          address is written differently here and there, the algorithm doubts your physical existence.
        </p>

        <h3>Auditing your existing citations</h3>
        <p>
          Start by searching your business name in Google to identify all mentions. Key directories
          to check: Yelp, Tripadvisor, Foursquare, and sector-specific directories for your activity.
        </p>

        <h3>Correcting and unifying</h3>
        <p>Adopt a canonical format and use it everywhere without variation:</p>
        <ul>
          <li>Same commercial name spelling</li>
          <li>Same address format (abbreviation or full word)</li>
          <li>Same phone number format</li>
        </ul>
        <p>
          This consistency work is invisible to users but very visible to Google. It&apos;s one of
          the most solid foundations of local SEO.
        </p>
      </section>

      <section id="avis-clients">
        <h2>4. Client Reviews: The Most Powerful Trust Signal</h2>
        <p>
          Google reviews are both a ranking factor and a conversion lever. An establishment
          with 80 reviews at 4.6 stars will systematically appear before a competitor with
          12 reviews at 4.8: quantity matters as much as average rating.
        </p>

        <h3>How to get more reviews legitimately</h3>
        <ul>
          <li>Verbally, right after a successful service</li>
          <li>By thank-you SMS with a direct link</li>
          <li>On your invoice or order confirmation</li>
          <li>Via a QR code at reception or checkout</li>
        </ul>
        <p>
          Never buy reviews. Google detects them (recently created profiles, grouped IPs,
          generic vocabulary) and can remove your entire listing without notice.
        </p>

        <h3>Responding to all reviews</h3>
        <p>
          Responding to reviews (positive and negative) is an activity signal factored in by Google.
          For negative reviews, a calm, professional, factual response reassures future clients
          far more than silence. Avoid generic phrases. Personalise every response.
        </p>
      </section>

      <section id="mots-cles-locaux">
        <h2>5. Finding the Right Local Keywords</h2>
        <p>
          Local keyword research follows the same logic as standard SEO, with an added geographic
          dimension. The goal is to target queries with a clear purchase or visit intent,
          and reasonable volume in your area.
        </p>

        <h3>Priority combinations to target</h3>
        <ul>
          <li><strong>[activity] + [city]</strong>: &ldquo;japanese restaurant bordeaux&rdquo;</li>
          <li><strong>[activity] + &ldquo;near me&rdquo;</strong>: captured automatically if your GBP listing is well configured</li>
          <li><strong>[activity] + [neighbourhood]</strong>: &ldquo;hairdresser chartrons&rdquo;</li>
          <li><strong>[problem] + [city]</strong>: &ldquo;flat tyre bordeaux&rdquo;, &ldquo;emergency plumber nantes&rdquo;</li>
        </ul>

        <h3>Tools to find these keywords</h3>
        <p>
          Google Search Console (free) already shows which queries you appear for. Google Suggest
          is a goldmine for understanding what your clients actually type. Ubersuggest and Semrush
          offer volume data to refine your choices.
        </p>
      </section>

      <section id="optimisation-on-page">
        <h2>6. On-Page Optimisation: Local Pages</h2>
        <p>
          Your website is the second pillar of local SEO, after GBP. Several on-page optimisations
          are specific to local search.
        </p>

        <h3>Homepage: clear geographic signal</h3>
        <p>Google must understand in seconds where you operate. Include your city or region in:</p>
        <ul>
          <li>The <code>&lt;title&gt;</code> tag</li>
          <li>The <code>&lt;h1&gt;</code> tag</li>
          <li>The first content paragraph</li>
          <li>The URL if you have multiple local pages</li>
        </ul>

        <h3>Creating dedicated local pages</h3>
        <p>
          If you operate in multiple cities or neighbourhoods, create a specific page per area,
          with unique content for each. Google penalises duplicate content, even for geographic variations.
        </p>

        <h3>Footer: structured NAP</h3>
        <p>
          Your full address, phone, and hours in the footer of every page allow Google to confirm
          your location across the entire site. Use a format consistent with your GBP listing.
        </p>
      </section>

      <section id="schema-markup">
        <h2>7. LocalBusiness Schema Markup</h2>
        <p>
          Schema markup is a structured data vocabulary (JSON-LD) you embed in your site&apos;s code
          to help Google understand precisely who you are. For local SEO, the <code>LocalBusiness</code>{' '}
          schema is essential.
        </p>

        <h3>What to include</h3>
        <ul>
          <li>Activity type (Plumber, Restaurant, BeautySalon, AutoRepair, etc.)</li>
          <li>Name, full address with <code>streetAddress</code>, <code>addressLocality</code>, <code>postalCode</code></li>
          <li>Phone number</li>
          <li>Opening hours</li>
          <li>Website URL and GBP listing URL</li>
          <li>Geographic coordinates</li>
          <li>Aggregate rating if available</li>
        </ul>

        <h3>How to implement it in Next.js</h3>
        <p>
          In a Next.js project, embed the JSON-LD in your <code>layout.tsx</code> or directly
          in the <code>&lt;head&gt;</code> via Next.js&apos;s <code>&lt;Script&gt;</code> component
          with <code>type=&quot;application/ld+json&quot;</code>. Then validate with Google&apos;s
          Rich Results Test.
        </p>
      </section>

      <section id="backlinks-locaux">
        <h2>8. Local Backlinks: Quality Over Quantity</h2>
        <p>
          Backlinks remain a strong prominence signal for Google. In local SEO, a link from a local
          or sector-specific site is often worth more than a link from a high-traffic generic site.
        </p>

        <h3>Priority local backlink sources</h3>
        <ul>
          <li><strong>Local press</strong>: an article in the regional paper generates a quality link and real visibility</li>
          <li><strong>Local associations and events</strong>: sponsoring a local event often translates into a link on their site</li>
          <li><strong>Business partners</strong>: suppliers or resellers who mention your establishment</li>
          <li><strong>Chambers of commerce and trade unions</strong>: member directories with links</li>
          <li><strong>Niche blogs and media</strong>: a guest post on a sector blog in your region is doubly effective</li>
        </ul>
      </section>

      <section id="mobile-et-vitesse">
        <h2>9. Mobile and Speed: Non-Negotiable Foundations</h2>
        <p>
          More than 70% of local searches happen on a smartphone. A site that takes 4 seconds to load
          loses a significant share of visitors before they&apos;ve even seen your content. Google uses
          mobile-first indexing: it&apos;s the mobile version of your site that determines your ranking.
        </p>

        <h3>Core Web Vitals to monitor</h3>
        <ul>
          <li><strong>LCP (Largest Contentful Paint)</strong>: target under 2.5 seconds</li>
          <li><strong>INP (Interaction to Next Paint)</strong>: target under 200ms</li>
          <li><strong>CLS (Cumulative Layout Shift)</strong>: target under 0.1</li>
        </ul>

        <h3>Clickable phone number</h3>
        <p>
          On mobile, your phone number must be a <code>href=&quot;tel:+XXXXXXXXXXX&quot;</code> link.
          A visitor on the go who has to copy-paste a number will go to your competitor.
        </p>
      </section>

      <section id="mesurer">
        <h2>10. Measuring Your Progress with Search Console</h2>
        <p>
          Local SEO is steady work that pays off over 3 to 6 months. To track your progress
          without drowning in data, focus on three sources.
        </p>

        <h3>Google Search Console</h3>
        <ul>
          <li>Impressions and clicks on your target local queries</li>
          <li>CTR per query: a low CTR indicates a title or description to improve</li>
          <li>Average position on your geo-targeted keywords</li>
          <li>Pages receiving the most local organic traffic</li>
        </ul>

        <h3>Google Business Profile Insights</h3>
        <p>
          Your GBP dashboard shows how many people found your listing, through which query,
          and what action they took (call, directions, click to site). Invaluable data for
          calibrating your efforts.
        </p>
      </section>

      <section id="conclusion">
        <h2>In Summary</h2>
        <p>
          Local SEO in 2025 is not reserved for large brands with marketing teams. A local business
          that maintains a solid GBP listing, consistent NAP, genuine reviews, and a fast
          mobile-first site can outrank much larger competitors on local queries.
        </p>
        <p>
          The logical order of action: start with Google Business Profile (immediate impact),
          fix NAP consistency, then work on local pages and schema markup, and finally develop
          local backlinks over time.
        </p>
        <p>
          That&apos;s exactly the approach we apply on the projects we support. Sprint Motors went
          from 0 to 791,000 Google impressions in under 18 months without spending a single euro
          on advertising. Local SEO takes time, but it generates qualified traffic durably,
          unlike an ad campaign that stops the moment the budget does.
        </p>
      </section>

      <aside className="blog-cta">
        <p>
          Want us to audit your local presence and identify the priority levers for your business?
        </p>
        <Link href="/contact" className="btn-primary">
          Talk about your project
        </Link>
      </aside>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/structurer-site-web-seo-conception">
              How to structure a website for SEO from day one
            </Link>
          </li>
          <li>
            <Link href="/blog/core-web-vitals-explication">
              Core Web Vitals: what Google really measures on your site
            </Link>
          </li>
          <li>
            <Link href="/blog/site-mobile-first-2025">
              Why your site must be mobile-first in 2025
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
