'use client'

import Link from 'next/link'

export function SeoLocal2025Content() {
  return (
    <article className="blog-article">

      {/* ── HERO ── */}
      <header className="blog-header">
        <div className="blog-meta">
          <span className="blog-category">SEO &amp; Contenu</span>
          <span className="blog-read-time">9 min de lecture</span>
        </div>
        <h1>SEO local en 2025 : le guide complet pour les commerces de proximité</h1>
        <p className="blog-intro">
          Un restaurant, un garage, un salon de coiffure ou un cabinet de kiné : tous partagent
          le même enjeu. Quand un habitant du coin tape "coiffeur bordeaux" ou "mécanicien
          près de chez moi", son téléphone décide en quelques millisecondes qui mérite
          d'apparaître. Ce guide détaille, étape par étape, les leviers du SEO local
          qui font la différence en 2025 — sans budget publicitaire, sans mystère.
        </p>
      </header>

      {/* ── SOMMAIRE ── */}
      <nav className="blog-toc" aria-label="Sommaire">
        <p className="blog-toc-title">Dans cet article</p>
        <ol>
          <li><a href="#quest-ce-que-seo-local">Ce qu'est vraiment le SEO local</a></li>
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

      {/* ── 1 ── */}
      <section id="quest-ce-que-seo-local">
        <h2>1. Ce qu'est vraiment le SEO local</h2>
        <p>
          Le SEO local est l'ensemble des techniques qui permettent à un établissement
          physique ou à un prestataire de service ancré géographiquement d'apparaître
          dans les résultats de recherche pour des requêtes liées à sa zone.
          Il se distingue du SEO classique par un élément fondamental : la proximité
          géographique est un facteur de classement à part entière.
        </p>
        <p>
          Concrètement, les résultats locaux se manifestent sous deux formes :
        </p>
        <ul>
          <li>
            Le <strong>Local Pack</strong> (ou "Pack 3") : le bloc de trois établissements
            qui s'affiche en haut des résultats, avec carte, notes et horaires.
            C'est l'emplacement le plus cliqué sur mobile.
          </li>
          <li>
            Les <strong>résultats organiques classiques</strong> où votre site
            peut se positionner sur des requêtes avec intention locale.
          </li>
        </ul>
        <p>
          L'algorithme local de Google repose sur trois piliers officiels :
          la <strong>pertinence</strong> (votre activité correspond-elle à la recherche ?),
          la <strong>distance</strong> (êtes-vous proche de l'utilisateur ?)
          et la <strong>notoriété</strong> (êtes-vous une référence dans votre domaine ?).
          Ce guide couvre chacun de ces piliers en détail.
        </p>
      </section>

      {/* ── 2 ── */}
      <section id="google-business-profile">
        <h2>2. Google Business Profile : votre vitrine numéro 1</h2>
        <p>
          Anciennement Google My Business, <strong>Google Business Profile (GBP)</strong> est
          le point de départ absolu de toute stratégie SEO locale. C'est gratuit,
          c'est puissant, et la majorité des commerces de proximité n'en exploitent
          qu'une fraction du potentiel.
        </p>

        <h3>Revendiquer et vérifier sa fiche</h3>
        <p>
          Si votre fiche n'existe pas encore, créez-la sur
          business.google.com. Si elle existe déjà (Google la génère parfois
          automatiquement), revendiquez-la. La vérification se fait généralement
          par courrier postal avec un code à 5 chiffres, ou par vidéo pour
          les nouvelles fiches.
        </p>

        <h3>Compléter chaque champ à 100 %</h3>
        <p>
          Google favorise les fiches complètes. Sans exception, renseignez :
        </p>
        <ul>
          <li>Le nom exact de votre établissement (sans mots-clés artificiels)</li>
          <li>La catégorie principale et les catégories secondaires pertinentes</li>
          <li>Adresse, numéro de téléphone, site web et horaires (y compris les jours fériés)</li>
          <li>La description de l'établissement (750 caractères, utilisez vos mots-clés naturellement)</li>
          <li>Les attributs : paiement CB, WiFi, accessible PMR, livraison, etc.</li>
          <li>Des photos récentes et de qualité (façade, intérieur, équipe, produits)</li>
        </ul>

        <h3>Les Posts Google : un levier sous-utilisé</h3>
        <p>
          Depuis la fiche, vous pouvez publier des posts (offres, événements,
          actualités). Ces posts apparaissent dans votre fiche et envoient un
          signal d'activité à Google. Une publication par semaine suffit
          à maintenir une fiche "active" aux yeux de l'algorithme.
        </p>

        <h3>Questions &amp; Réponses</h3>
        <p>
          La section Q&amp;R est souvent ignorée par les commerçants et remplie par
          n'importe qui. Prenez les devants : posez vous-même les questions fréquentes
          de vos clients (tarifs, parking, délais, modalités) et répondez-y.
          Cela enrichit votre fiche et rassure les visiteurs.
        </p>
      </section>

      {/* ── 3 ── */}
      <section id="coherence-nap">
        <h2>3. Cohérence NAP : nom, adresse, téléphone partout</h2>
        <p>
          NAP est l'acronyme anglais de <em>Name, Address, Phone</em>.
          Google consolide les informations vous concernant depuis
          des dizaines de sources — annuaires, presse locale, réseaux sociaux,
          sites partenaires. Si votre adresse est écrite différemment ici et là
          (numéro de voie manquant, variante de nom), l'algorithme
          doute de votre existence physique.
        </p>

        <h3>Auditer vos citations existantes</h3>
        <p>
          Commencez par rechercher votre nom d'établissement dans Google
          pour identifier toutes les mentions. Les principaux annuaires à vérifier
          en France sont : Pages Jaunes, Yelp, Tripadvisor, Foursquare/Swarm,
          Cityvox, Infobel, 118000 et les annuaires sectoriels de votre activité.
        </p>

        <h3>Corriger et unifier</h3>
        <p>
          Adoptez un format canonique et utilisez-le partout sans variation :
        </p>
        <ul>
          <li>Même orthographe du nom commercial (avec ou sans accent, avec ou sans guillemets)</li>
          <li>Même format d'adresse (abréviation ou mot en entier : "Rue" ou "R.")</li>
          <li>Même format de téléphone (01 XX XX XX XX ou 01XXXXXXXX)</li>
        </ul>
        <p>
          Ce travail de cohérence est invisible pour l'utilisateur mais
          très visible pour Google. C'est l'une des bases les plus solides
          du référencement local.
        </p>
      </section>

      {/* ── 4 ── */}
      <section id="avis-clients">
        <h2>4. Les avis clients : le signal de confiance le plus puissant</h2>
        <p>
          Les avis Google sont à la fois un facteur de classement et un levier
          de conversion. Un établissement avec 80 avis à 4,6 étoiles va systématiquement
          apparaître avant un concurrent avec 12 avis à 4,8 — la quantité compte autant
          que la note moyenne.
        </p>

        <h3>Comment obtenir plus d'avis légitimement</h3>
        <p>
          La méthode la plus efficace est la plus simple : demander.
          Créez un lien court vers votre page d'avis depuis Google
          (disponible dans le tableau de bord GBP) et partagez-le :
        </p>
        <ul>
          <li>Oralement, juste après une prestation réussie</li>
          <li>Par SMS de remerciement avec lien direct</li>
          <li>Sur votre facture ou confirmation de commande</li>
          <li>Via un QR code à l'accueil ou en caisse</li>
        </ul>
        <p>
          N'achetez jamais d'avis. Google les détecte (profils crées récemment,
          IP groupées, vocabulaire générique) et peut supprimer l'intégralité
          de votre fiche sans préavis.
        </p>

        <h3>Répondre à tous les avis</h3>
        <p>
          Répondre aux avis — positifs comme négatifs — est un signal
          d'activité pris en compte par Google. Pour les avis négatifs,
          une réponse calme, professionnelle et factuelle rassure les futurs
          clients bien plus qu'une suppression ou un silence.
          Évitez les formules génériques ("Merci pour votre avis").
          Personnalisez chaque réponse.
        </p>
      </section>

      {/* ── 5 ── */}
      <section id="mots-cles-locaux">
        <h2>5. Trouver les bons mots-clés locaux</h2>
        <p>
          La recherche de mots-clés locaux suit la même logique que le SEO classique,
          avec une dimension géographique ajoutée. L'objectif est de cibler
          des requêtes avec une intention d'achat ou de visite claire,
          et un volume raisonnable dans votre zone.
        </p>

        <h3>Les combinaisons à cibler en priorité</h3>
        <ul>
          <li><strong>[activité] + [ville]</strong> : "restaurant japonais bordeaux"</li>
          <li><strong>[activité] + "près de moi"</strong> : capturé automatiquement si votre fiche GBP est bien configurée</li>
          <li><strong>[activité] + [quartier]</strong> : "coiffeur chartrons", "boulangerie bacalan"</li>
          <li><strong>[problème] + [ville]</strong> : "pneu crevé bordeaux", "urgence plombier nantes"</li>
          <li><strong>[produit spécifique] + [département ou région]</strong></li>
        </ul>

        <h3>Outils pour trouver ces mots-clés</h3>
        <p>
          Google Search Console (gratuit) vous indique déjà sur quelles requêtes
          vous apparaissez. Google Suggest (les suggestions automatiques dans
          la barre de recherche) est une mine d'or pour comprendre ce que
          vos clients tapent vraiment. Ubersuggest et Semrush offrent des données
          de volume pour affiner vos choix.
        </p>
        <p>
          Attention aux mots-clés trop génériques ("coiffeur") : la concurrence
          y est nationale et le volume local ne justifie pas l'effort.
          Préférez des requêtes géo-ciblées avec une intention claire.
        </p>
      </section>

      {/* ── 6 ── */}
      <section id="optimisation-on-page">
        <h2>6. Optimisation on-page : les pages locales</h2>
        <p>
          Votre site web est le deuxième pilier du SEO local, après GBP.
          Plusieurs optimisations on-page sont spécifiques à la recherche locale.
        </p>

        <h3>La page d'accueil : signal géographique clair</h3>
        <p>
          Google doit comprendre en quelques secondes où vous opérez.
          Intégrez votre ville ou région dans :
        </p>
        <ul>
          <li>La balise <code>&lt;title&gt;</code> : "Plombier à Bordeaux — Intervention rapide | MonPlombier"</li>
          <li>La balise <code>&lt;h1&gt;</code></li>
          <li>Le premier paragraphe de contenu</li>
          <li>L'URL si vous avez plusieurs pages locales (ex. <code>/plombier-bordeaux</code>)</li>
        </ul>

        <h3>Créer des pages locales dédiées</h3>
        <p>
          Si vous opérez dans plusieurs villes ou quartiers, créez une page
          spécifique par zone — avec du contenu unique pour chacune.
          Une page "Prestataire à Mérignac" et une page "Prestataire à Pessac"
          ne doivent pas être des copies l'une de l'autre.
          Google pénalise le contenu dupliqué, même pour des variations géographiques.
        </p>

        <h3>Intégrer une carte Google Maps</h3>
        <p>
          Intégrez la carte de votre établissement directement sur la page
          contact ou la page dédiée à votre adresse. C'est un signal de
          cohérence géographique supplémentaire.
        </p>

        <h3>Le footer : NAP structuré</h3>
        <p>
          Votre adresse complète, téléphone et horaires dans le footer
          de chaque page permettent à Google de confirmer votre localisation
          sur l'ensemble du site. Utilisez un format cohérent avec votre fiche GBP.
        </p>
      </section>

      {/* ── 7 ── */}
      <section id="schema-markup">
        <h2>7. Schema markup LocalBusiness</h2>
        <p>
          Le schema markup est un vocabulaire de données structurées (JSON-LD)
          que vous intégrez dans le code de votre site pour aider Google
          à comprendre précisément qui vous êtes. Pour le SEO local,
          le schema <code>LocalBusiness</code> est incontournable.
        </p>

        <h3>Ce qu'il faut renseigner</h3>
        <p>
          Un schema LocalBusiness minimal contient :
        </p>
        <ul>
          <li>Le type d'activité (Plumber, Restaurant, BeautySalon, AutoRepair, etc.)</li>
          <li>Nom, adresse complète (avec <code>streetAddress</code>, <code>addressLocality</code>, <code>postalCode</code>)</li>
          <li>Numéro de téléphone (<code>telephone</code>)</li>
          <li>Horaires d'ouverture (<code>openingHoursSpecification</code>)</li>
          <li>URL du site et URL de la fiche GBP</li>
          <li>Coordonnées géographiques (<code>geo</code> avec latitude et longitude)</li>
          <li>Note agrégée (<code>aggregateRating</code>) si vous l'avez</li>
        </ul>

        <h3>Comment l'implémenter en Next.js</h3>
        <p>
          Dans un projet Next.js, intégrez le JSON-LD dans
          votre <code>layout.tsx</code> ou directement dans la balise
          <code>&lt;head&gt;</code> via le composant <code>&lt;Script&gt;</code>
          de Next.js avec <code>type="application/ld+json"</code>.
          Testez ensuite avec le Rich Results Test de Google pour
          valider l'implémentation.
        </p>
      </section>

      {/* ── 8 ── */}
      <section id="backlinks-locaux">
        <h2>8. Backlinks locaux : qualité avant quantité</h2>
        <p>
          Les backlinks (liens entrants depuis d'autres sites) restent
          un signal de notoriété fort pour Google. En SEO local,
          un lien depuis un site local ou sectoriel vaut souvent
          plus qu'un lien depuis un site générique à fort trafic.
        </p>

        <h3>Les sources de backlinks locaux à prioriser</h3>
        <ul>
          <li>
            <strong>Presse locale</strong> : un article dans le journal régional
            ou un blog local génère un lien de qualité et de la notoriété réelle.
          </li>
          <li>
            <strong>Associations et événements locaux</strong> : sponsoriser
            un événement de quartier ou une association sportive locale
            se traduit souvent par un lien sur leur site.
          </li>
          <li>
            <strong>Partenaires commerciaux</strong> : un fournisseur, un partenaire
            de référence ou un revendeur peut mentionner votre établissement
            avec un lien.
          </li>
          <li>
            <strong>Chambres de commerce et syndicats professionnels</strong> :
            CCI, réseaux BNI, syndicats sectoriels disposent souvent d'annuaires
            membres avec liens.
          </li>
          <li>
            <strong>Blogs et médias de niche</strong> : un article invité
            sur un blog sectoriel dans votre région est doublement efficace.
          </li>
        </ul>

        <h3>Ce qu'il faut éviter</h3>
        <p>
          Les annuaires génériques de faible qualité, les échanges de liens
          artificiels et les réseaux de liens privés (PBN) sont des pratiques
          que Google identifie et pénalise. En SEO local, la règle est simple :
          si un lien ne vous apporterait pas de clients réels, il ne vous
          apportera pas de SEO durable.
        </p>
      </section>

      {/* ── 9 ── */}
      <section id="mobile-et-vitesse">
        <h2>9. Mobile et vitesse : des fondations non négociables</h2>
        <p>
          Plus de 70 % des recherches locales se font depuis un smartphone.
          Un site qui se charge en 4 secondes perd une partie significative
          de ses visiteurs avant même qu'ils aient vu votre contenu.
          Google utilise l'indexation mobile-first depuis 2021 :
          c'est la version mobile de votre site qui détermine
          votre classement, sur mobile comme sur desktop.
        </p>

        <h3>Les Core Web Vitals à surveiller</h3>
        <p>
          Google mesure la qualité de l'expérience utilisateur via trois métriques :
        </p>
        <ul>
          <li>
            <strong>LCP (Largest Contentful Paint)</strong> : temps d'affichage
            du plus grand élément visible. Cible : sous 2,5 secondes.
          </li>
          <li>
            <strong>INP (Interaction to Next Paint)</strong> : réactivité
            aux interactions. Cible : sous 200 ms.
          </li>
          <li>
            <strong>CLS (Cumulative Layout Shift)</strong> : stabilité visuelle
            pendant le chargement. Cible : sous 0,1.
          </li>
        </ul>
        <p>
          Un site Next.js bien configuré atteint naturellement ces seuils
          grâce au rendu serveur, à l'optimisation automatique des images
          et au code splitting. Mesurez régulièrement avec
          PageSpeed Insights ou le rapport Core Web Vitals de Search Console.
        </p>

        <h3>Le numéro de téléphone cliquable</h3>
        <p>
          Détail souvent oublié : sur mobile, votre numéro de téléphone
          doit être un lien <code>href="tel:+33XXXXXXXXX"</code>.
          C'est trivial à implémenter et crucial pour la conversion locale.
          Un visiteur en déplacement qui doit copier-coller un numéro
          ira chez votre concurrent.
        </p>
      </section>

      {/* ── 10 ── */}
      <section id="mesurer">
        <h2>10. Mesurer vos progrès avec Search Console</h2>
        <p>
          Le SEO local est un travail de fond qui porte ses fruits sur
          3 à 6 mois. Pour suivre vos progrès sans vous noyer dans les données,
          concentrez-vous sur trois sources :
        </p>

        <h3>Google Search Console</h3>
        <p>
          C'est l'outil gratuit le plus fiable pour mesurer votre visibilité
          organique. Suivez chaque semaine :
        </p>
        <ul>
          <li>Les impressions et clics sur vos requêtes locales cibles</li>
          <li>Le CTR (taux de clic) par requête — un CTR faible indique une balise title ou description à améliorer</li>
          <li>La position moyenne sur vos mots-clés géo-ciblés</li>
          <li>Les pages qui reçoivent le plus de trafic organique local</li>
        </ul>

        <h3>Google Business Profile Insights</h3>
        <p>
          Votre tableau de bord GBP indique combien de personnes ont trouvé
          votre fiche, par quelle requête, et quelle action elles ont effectuée
          (appel, itinéraire, clic vers le site). Ces données sont précieuses
          pour calibrer vos efforts.
        </p>

        <h3>Un suivi de positions localisé</h3>
        <p>
          Les outils de suivi classiques (Semrush, Ahrefs) permettent de simuler
          des recherches depuis une ville précise. Configurez un suivi hebdomadaire
          de vos 10 à 15 requêtes locales prioritaires pour avoir une vision
          objective de votre progression.
        </p>
      </section>

      {/* ── CONCLUSION ── */}
      <section id="conclusion">
        <h2>En résumé</h2>
        <p>
          Le SEO local en 2025 n'est pas réservé aux grandes enseignes avec des
          équipes marketing. Un commerce de proximité qui soigne sa fiche GBP,
          maintient un NAP cohérent, accumule des avis authentiques et publie
          un site rapide et mobile-first peut dépasser des concurrents bien plus
          grands sur les requêtes locales.
        </p>
        <p>
          L'ordre d'action logique est le suivant : commencer par Google Business
          Profile (impact immédiat), corriger la cohérence NAP, puis travailler
          les pages locales et le schema markup, et enfin développer les backlinks
          locaux sur la durée.
        </p>
        <p>
          C'est exactement l'approche que nous appliquons sur les projets que
          nous accompagnons. Sprint Motors est passé de 0 à 791 000 impressions
          Google en moins de 18 mois sans investir un euro en publicité.
          Le SEO local prend du temps, mais il génère du trafic qualifié
          durablement — là où une campagne publicitaire s'arrête au premier
          euro non dépensé.
        </p>
      </section>

      {/* ── CTA ── */}
      <aside className="blog-cta">
        <p>
          Vous voulez qu'on audite votre présence locale et qu'on identifie
          les leviers prioritaires pour votre activité ?
        </p>
        <Link href="/contact" className="btn-primary">
          Parler de votre projet
        </Link>
      </aside>

      {/* ── INTERNAL LINKS ── */}
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
