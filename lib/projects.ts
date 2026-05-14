export type ProjectTag = 'web' | 'seo' | 'logiciel'

export type Project = {
  id: string
  slug: string
  tags: ProjectTag[]
  client: string
  location: string
  type: { fr: string; en: string }
  headline: { fr: string; en: string }
  description: { fr: string; en: string }
  outcomes: { fr: string; en: string }[]
  image: string
  url?: string
  featured: boolean
  caseStudy: boolean
  challengeTitle: { fr: string; en: string }
  challenge: { fr: string; en: string }
  approachTitle: { fr: string; en: string }
  approach: { fr: string; en: string }
  resultsTitle: { fr: string; en: string }
  results: { fr: string; en: string }
  quote?: string
  quoteAuthor?: string
  quoteRole?: string
}

export const projects: Project[] = [
  // ─── SPRINT MOTORS ───────────────────────────────────────────────────────
  {
    id: 'sprint-motors',
    slug: 'sprint-motors',
    tags: ['web', 'seo'],
    client: 'Sprint Motors',
    location: 'Bordeaux, France',
    type: { fr: 'Site web + SEO', en: 'Website + SEO' },
    headline: {
      fr: 'De zéro à 791 000 impressions Google.',
      en: 'From zero to 791K Google impressions.',
    },
    description: {
      fr: 'Sprint Motors est un concessionnaire moto bordelais spécialisé dans la vente de motos neuves, occasions et accessoires. À l\'origine sans présence digitale, le site est aujourd\'hui le premier point de contact commercial avant même l\'appel téléphonique.',
      en: 'Sprint Motors is a Bordeaux motorcycle dealer specializing in new bikes, used vehicles and accessories. Originally with no digital presence, the site is now the primary commercial touchpoint — before the phone call.',
    },
    outcomes: [
      { fr: '791 000 impressions Google — en partant de zéro', en: '791K Google impressions — starting from scratch' },
      { fr: 'Plus de 1 000 visites organiques par mois, en hausse constante', en: 'Over 1,000 organic monthly visits and growing' },
      { fr: 'Stock motos et accessoires visible et indexé en ligne', en: 'Bike and accessory stock visible and indexed online' },
      { fr: 'Site adopté comme outil de vente par l\'équipe commerciale', en: 'Site adopted as a sales tool by the commercial team' },
    ],
    image: '/images/sprintmotors-1.png',
    url: 'https://sprintmotors.com',
    featured: true,
    caseStudy: true,

    challengeTitle: {
      fr: 'Le point de départ : invisible sur Google',
      en: 'The starting point: invisible on Google',
    },
    challenge: {
      fr: 'Sprint Motors était un concessionnaire établi à Bordeaux, mais totalement absent du web. Le vieux site non optimisé n\'apparaissait sur aucune requête pertinente. Le stock de motos n\'était pas visible en ligne. Les services proposés manquaient de clarté. Les accessoires n\'étaient pas vendables en ligne. Dans un marché où les acheteurs comparent tout avant de pousser la porte d\'un concessionnaire, ne pas exister sur Google, c\'est perdre des clients avant même qu\'ils vous connaissent.',
      en: 'Sprint Motors was an established Bordeaux dealer, but completely absent online. The old unoptimized site ranked on no relevant searches. Bike stock was invisible online. Services were poorly presented. Accessories couldn\'t be sold online. In a market where buyers research everything before visiting a dealer, not existing on Google means losing customers before they even know you.',
    },

    approachTitle: {
      fr: 'Une refonte pensée pour le référencement et la conversion',
      en: 'A rebuild designed for SEO and conversion',
    },
    approach: {
      fr: 'Le projet a démarré par un audit complet du secteur local et des opportunités de mots-clés. Puis une refonte intégrale du site : architecture pensée pour le SEO, pages dédiées par univers (motos neuves, occasions, accessoires), descriptions de stock optimisées avec données structurées, et clarification de chaque service proposé. En parallèle, mise en place d\'une stratégie de contenu locale pour ancrer Sprint Motors sur les requêtes bordelaises à fort intent commercial.',
      en: 'The project started with a full local market audit and keyword opportunity mapping. Then a complete rebuild: SEO-first architecture, dedicated pages per category (new bikes, used, accessories), optimized stock descriptions with structured data, and a clearer service presentation. Alongside this, a local content strategy to anchor Sprint Motors on high-intent Bordeaux search queries.',
    },

    resultsTitle: {
      fr: 'De zéro à 791 000 impressions — et ça continue',
      en: 'From zero to 791K impressions — and growing',
    },
    results: {
      fr: 'En partant d\'une page blanche côté SEO, sprintmotors.com approche aujourd\'hui le million d\'impressions Google. Plus de 1 000 visites organiques par mois, en croissance constante. Le site est devenu le premier point de contact commercial — avant l\'appel téléphonique. Les résultats ont été suffisamment convaincants pour que Sprint Motors confie ensuite deux missions supplémentaires : deux microsites de marque dédiés pour Cyclone et Voge Bordeaux.',
      en: 'Starting from a blank SEO slate, sprintmotors.com is now approaching one million Google impressions. Over 1,000 organic visits per month, consistently growing. The site has become the primary commercial touchpoint — before the phone call. Results were convincing enough for Sprint Motors to commission two additional brand microsites for Cyclone and Voge Bordeaux.',
    },

    quote: 'Loan a pris le temps d\'écouter et a proposé les solutions les plus adaptées. Le site a eu un impact énorme sur notre activité — les retours ont été extrêmement positifs. Nous lui avons ensuite confié 2 missions supplémentaires pour mettre en valeur 2 marques importantes via 2 sites séparés, avec le même résultat. Je recommande vivement Loan pour sa disponibilité et son professionnalisme.',
    quoteAuthor: 'Pierre',
    quoteRole: 'Commercial · Sprint Motors, Bordeaux',
  },

  // ─── MOTO PASSION 65 ─────────────────────────────────────────────────────
  {
    id: 'motopassion',
    slug: 'motopassion-65',
    tags: ['web', 'seo'],
    client: 'Moto Passion 65',
    location: 'Tarbes, France',
    type: { fr: 'Site web + SEO + Blog', en: 'Website + SEO + Blog' },
    headline: {
      fr: 'Un concessionnaire moto de Tarbes enfin visible sur Google.',
      en: 'A Tarbes motorcycle dealer finally visible on Google.',
    },
    description: {
      fr: 'Moto Passion 65 est un concessionnaire moto tarbais indépendant. Comme beaucoup de petits acteurs locaux, leur présence digitale ne reflétait pas la qualité de leur offre. La refonte a tout changé.',
      en: 'Moto Passion 65 is an independent motorcycle dealer in Tarbes. Like many small local businesses, their digital presence didn\'t reflect the quality of their offering. The rebuild changed everything.',
    },
    outcomes: [
      { fr: 'Présence SEO locale construite de zéro sur Tarbes et la région', en: 'Local SEO presence built from scratch across Tarbes and the region' },
      { fr: 'Articles de blog réguliers pour ancrer les positions organiques', en: 'Regular blog content to lock in organic rankings' },
      { fr: 'Stock et services clairement présentés — trafic qualifié en hausse', en: 'Stock and services clearly presented — qualified traffic growing' },
      { fr: 'Très bon retour client — satisfaction immédiate', en: 'Very positive client feedback — immediate satisfaction' },
    ],
    image: '/images/motopassion65.png',
    url: 'https://motopassion65.com',
    featured: true,
    caseStudy: true,

    challengeTitle: {
      fr: 'Même problème que trop de commerces locaux',
      en: 'The same problem as too many local businesses',
    },
    challenge: {
      fr: 'Vieux site, aucun référencement naturel travaillé, stock invisible en ligne, services peu lisibles. Moto Passion 65 s\'appuyait uniquement sur le bouche-à-oreille et la fidélité locale — sans chercher à capter de nouveaux clients via Google. Sur un marché où la recherche en ligne précède systématiquement la visite physique, c\'est une part de marché entière qui s\'échappe.',
      en: 'Old site, no SEO work done, stock invisible online, services unclear. Moto Passion 65 relied entirely on word-of-mouth and local loyalty — without trying to capture new clients through Google. In a market where online research consistently precedes the physical visit, that\'s an entire segment of market share slipping away.',
    },

    approachTitle: {
      fr: 'Refonte + stratégie de contenu local sur le long terme',
      en: 'Rebuild + long-term local content strategy',
    },
    approach: {
      fr: 'Refonte complète du site avec une architecture claire par service et type de moto. Mise en place d\'un blog régulier ciblant les requêtes locales (entretien moto Tarbes, achat moto occasion Hautes-Pyrénées…) pour construire une autorité SEO sur la durée. Chaque article est pensé pour répondre à une intention de recherche précise et rediriger vers les pages produits.',
      en: 'Full site rebuild with a clear architecture by service and bike type. Launch of a regular blog targeting local queries (motorcycle maintenance Tarbes, used bike purchase Hautes-Pyrénées…) to build SEO authority over time. Each article is designed to match a specific search intent and funnel readers toward product pages.',
    },

    resultsTitle: {
      fr: 'Visibilité locale construite, satisfaction client immédiate',
      en: 'Local visibility built, immediate client satisfaction',
    },
    results: {
      fr: 'Le site a rapidement pris des positions sur les requêtes locales liées à la moto dans les Hautes-Pyrénées. Le blog génère un trafic organique régulier qui alimente les pages produits. L\'équipe de Moto Passion 65 a exprimé une satisfaction immédiate — le site reflète enfin ce qu\'ils proposent vraiment, et les retours clients ont été très positifs dès le lancement.',
      en: 'The site quickly ranked for local motorcycle queries in the Hautes-Pyrénées area. The blog generates steady organic traffic feeding the product pages. The Moto Passion 65 team expressed immediate satisfaction — the site finally reflects what they actually offer, and client feedback was very positive from day one.',
    },

    quote: 'Je recommande vivement le professionnalisme de Loan pour la création de site internet. Il a su écouter mes demandes et rapidement comprendre mes attentes. Je suis extrêmement satisfait de son travail. Merci pour la qualité, la disponibilité et la rapidité.',
    quoteAuthor: 'Paul',
    quoteRole: 'Propriétaire · Moto Passion 65, Tarbes',
  },

  // ─── CYCLONE BORDEAUX ────────────────────────────────────────────────────
  {
    id: 'cyclone-bordeaux',
    slug: 'cyclone-bordeaux',
    tags: ['web', 'seo'],
    client: 'Cyclone Bordeaux',
    location: 'Bordeaux, France',
    type: { fr: 'Microsite de marque + SEO', en: 'Brand microsite + SEO' },
    headline: {
      fr: 'Capter le trafic de marque Cyclone avant les concurrents.',
      en: 'Capturing Cyclone brand traffic before competitors.',
    },
    description: {
      fr: 'Cyclonebordeaux.com est un microsite dédié à la marque Cyclone — 100 % conçu pour apparaître sur les recherches Google propres à la marque, présenter chaque modèle, et transformer les visites en contacts qualifiés.',
      en: 'Cyclonebordeaux.com is a dedicated brand microsite for Cyclone — 100% designed to rank on brand-specific Google searches, present each model, and convert visits into qualified leads.',
    },
    outcomes: [
      { fr: 'Positions SEO sur les requêtes "Cyclone moto Bordeaux" et variantes', en: 'SEO rankings on "Cyclone moto Bordeaux" queries and variants' },
      { fr: 'Catalogue complet de modèles avec fiche par moto', en: 'Full model catalogue with individual bike pages' },
      { fr: 'Formulaire de contact intégré à chaque fiche modèle', en: 'Contact form integrated on every model page' },
      { fr: 'Articles de blog dédiés à la marque pour ancrer l\'autorité SEO', en: 'Brand-dedicated blog articles to build SEO authority' },
    ],
    image: '/images/cyclone-bordeaux.png',
    url: 'https://cyclonebordeaux.com',
    featured: false,
    caseStudy: true,

    challengeTitle: {
      fr: 'Un trafic de marque qui s\'évaporait',
      en: 'Brand traffic that was evaporating',
    },
    challenge: {
      fr: 'Les personnes qui cherchaient "Cyclone moto Bordeaux" sur Google trouvaient des résultats génériques, des pages de marques concurrentes ou rien de pertinent. Ce trafic qualifié — des acheteurs avec une intention claire sur une marque précise — n\'était pas capté. Il fallait une présence dédiée, rapide à indexer et assez autoritaire pour s\'imposer sur ces requêtes.',
      en: 'People searching "Cyclone moto Bordeaux" on Google found generic results, competitor brand pages, or nothing relevant. This qualified traffic — buyers with clear intent on a specific brand — wasn\'t being captured. A dedicated presence was needed: fast to index and authoritative enough to rank on those queries.',
    },

    approachTitle: {
      fr: 'Un microsite conçu autour de l\'identité et du référencement de marque',
      en: 'A microsite built around brand identity and brand SEO',
    },
    approach: {
      fr: 'Création d\'un microsite entièrement dédié à la marque Cyclone : identité visuelle fidèle, catalogue des modèles disponibles avec fiche complète par moto (specs, visuels, prix indicatif), formulaire de contact intégré sur chaque fiche pour capter les demandes directement. En parallèle, rédaction d\'articles de blog ciblés sur les modèles et la marque pour construire une autorité SEO sur la durée.',
      en: 'Creation of a brand-dedicated microsite: faithful visual identity, model catalogue with complete individual pages per bike (specs, visuals, indicative price), contact form embedded on every model page to capture inquiries directly. Alongside this, targeted blog articles on models and the brand to build long-term SEO authority.',
    },

    resultsTitle: {
      fr: 'La marque Cyclone enfin trouvable à Bordeaux',
      en: 'The Cyclone brand finally findable in Bordeaux',
    },
    results: {
      fr: 'Le microsite s\'est positionné sur les requêtes de marque ciblées, captant un trafic qualifié qui passait auparavant sous les radars. Les visiteurs arrivent avec une intention claire — ils cherchent précisément Cyclone à Bordeaux — et le formulaire de contact sur chaque fiche modèle convertit ces visites en demandes directes.',
      en: 'The microsite ranked on targeted brand queries, capturing qualified traffic that previously slipped through. Visitors arrive with clear intent — specifically searching for Cyclone in Bordeaux — and the contact form on every model page converts those visits into direct inquiries.',
    },
  },

  // ─── VOGE BORDEAUX ───────────────────────────────────────────────────────
  {
    id: 'voge-bordeaux',
    slug: 'voge-bordeaux',
    tags: ['web', 'seo'],
    client: 'Voge Bordeaux',
    location: 'Bordeaux, France',
    type: { fr: 'Microsite de marque + SEO', en: 'Brand microsite + SEO' },
    headline: {
      fr: 'Une position SEO dédiée pour Voge en Gironde.',
      en: 'A dedicated SEO position for Voge in Gironde.',
    },
    description: {
      fr: 'Vogebordeaux.com est le microsite officieux de la marque Voge pour le marché bordelais. Identité de marque, catalogue complet, formulaire par modèle — et un blog pour tenir les positions dans le temps.',
      en: 'Vogebordeaux.com is the brand-aligned microsite for Voge on the Bordeaux market. Brand identity, full catalogue, per-model contact forms — and a blog to hold rankings over time.',
    },
    outcomes: [
      { fr: 'Positions SEO sur les requêtes "Voge moto Bordeaux" et Gironde', en: 'SEO rankings on "Voge moto Bordeaux" and Gironde queries' },
      { fr: 'Catalogue des modèles Voge avec fiche complète par moto', en: 'Full Voge model catalogue with individual bike pages' },
      { fr: 'Formulaire de contact intégré à chaque fiche modèle', en: 'Contact form embedded on every model page' },
      { fr: 'Articles de blog pour l\'autorité de la marque en local', en: 'Blog articles for local brand authority' },
    ],
    image: '/images/voge-bordeaux.png',
    url: 'https://vogebordeaux.com',
    featured: false,
    caseStudy: true,

    challengeTitle: {
      fr: 'Voge : une marque en croissance, absente des SERP locaux',
      en: 'Voge: a growing brand, absent from local search results',
    },
    challenge: {
      fr: 'Voge est une marque moto en fort développement, mais les acheteurs bordelais qui la cherchaient sur Google ne trouvaient rien de local. Sans microsite dédié, le trafic se dispersait vers des sites génériques ou des comparateurs sans lien avec le concessionnaire. La marque avait besoin d\'une ancre locale forte.',
      en: 'Voge is a rapidly growing motorcycle brand, but Bordeaux buyers searching for it on Google found nothing local. Without a dedicated microsite, traffic scattered toward generic sites or comparison platforms with no link to the dealer. The brand needed a strong local anchor.',
    },

    approachTitle: {
      fr: 'Même stratégie, marque différente : fidélité d\'identité et SEO de marque',
      en: 'Same strategy, different brand: identity fidelity and brand SEO',
    },
    approach: {
      fr: 'Microsite dédié avec l\'identité visuelle Voge : couleurs, typographie, ton de la marque. Catalogue complet avec fiche individuelle par modèle (specs, visuels, prix indicatif). Formulaire de contact sur chaque fiche pour capter les demandes. Blog avec articles ciblés sur Voge pour construire une présence organique locale sur la durée.',
      en: 'Dedicated microsite with Voge visual identity: colors, typography, brand tone. Full catalogue with individual pages per model (specs, visuals, indicative price). Contact form on every page to capture inquiries. Blog with targeted articles on Voge to build sustained local organic presence.',
    },

    resultsTitle: {
      fr: 'Voge visible à Bordeaux — et le trafic de marque capté',
      en: 'Voge visible in Bordeaux — brand traffic captured',
    },
    results: {
      fr: 'Le microsite a pris des positions sur les requêtes de marque Voge en Gironde, capturant un trafic intentionnel que la concurrence n\'avait pas anticipé. Le formulaire de contact génère des leads directs, sans intermédiaire ni plateforme tierce.',
      en: 'The microsite ranked on Voge brand queries in Gironde, capturing intentional traffic that competitors hadn\'t anticipated. The contact form generates direct leads, with no intermediary or third-party platform.',
    },
  },

  // ─── ORCAL BORDEAUX ──────────────────────────────────────────────────────
  {
    id: 'orcal-bordeaux',
    slug: 'orcal-bordeaux',
    tags: ['web', 'seo'],
    client: 'Orcal Bordeaux',
    location: 'Bordeaux, France',
    type: { fr: 'Microsite de marque + SEO', en: 'Brand microsite + SEO' },
    headline: {
      fr: 'La marque Orcal enfin trouvable sur Bordeaux.',
      en: 'The Orcal brand finally findable in Bordeaux.',
    },
    description: {
      fr: 'Orcalbordeaux.com est le microsite dédié à la marque Orcal sur le marché girondins. Conçu pour capter les recherches de marque, présenter l\'univers Orcal et transformer les visites en prises de contact.',
      en: 'Orcalbordeaux.com is the dedicated microsite for the Orcal brand in the Gironde market. Designed to capture brand searches, present the Orcal universe and convert visits into contact inquiries.',
    },
    outcomes: [
      { fr: 'Positions SEO sur les requêtes "Orcal Bordeaux" et variantes régionales', en: 'SEO rankings on "Orcal Bordeaux" and regional variant queries' },
      { fr: 'Catalogue complet : identité de marque + tous les modèles', en: 'Complete catalogue: brand identity + all models' },
      { fr: 'Formulaire de contact par modèle pour des leads qualifiés', en: 'Per-model contact forms for qualified leads' },
      { fr: 'Articles de blog pour ancrer la marque sur le long terme', en: 'Blog articles to anchor the brand long-term' },
    ],
    image: '/images/orcal-bordeaux.png',
    url: 'https://orcalbordeaux.com',
    featured: false,
    caseStudy: true,

    challengeTitle: {
      fr: 'Orcal : une niche, un trafic de marque non capté',
      en: 'Orcal: a niche, an uncaptured brand traffic stream',
    },
    challenge: {
      fr: 'Orcal est une marque de motos électriques haut de gamme à forte identité. Mais les acheteurs qui la cherchaient à Bordeaux tombaient sur des résultats sans rapport avec le concessionnaire local. Sans présence propre, impossible de capter ce trafic niche et très qualifié.',
      en: 'Orcal is a premium electric motorcycle brand with strong brand identity. But buyers searching for it in Bordeaux landed on results unrelated to the local dealer. Without its own presence, capturing this niche and highly qualified traffic was impossible.',
    },

    approachTitle: {
      fr: 'Un microsite à l\'image de la marque, ancré sur les requêtes locales',
      en: 'A brand-aligned microsite anchored on local queries',
    },
    approach: {
      fr: 'Microsite conçu pour refléter l\'identité forte de la marque Orcal : univers visuel soigné, présentation détaillée de chaque modèle (design, motorisation, autonomie), formulaire de contact sur chaque fiche. Blog d\'articles dédiés à Orcal pour renforcer l\'autorité SEO locale et construire une présence organique durable.',
      en: 'Microsite designed to reflect the strong Orcal brand identity: polished visual universe, detailed presentation of each model (design, motor, range), contact form on every page. Dedicated Orcal blog articles to reinforce local SEO authority and build lasting organic presence.',
    },

    resultsTitle: {
      fr: 'Le trafic de marque capté, les leads qualifiés générés',
      en: 'Brand traffic captured, qualified leads generated',
    },
    results: {
      fr: 'Orcalbordeaux.com s\'est positionné sur les recherches de marque en Gironde. La niche est précise — les visiteurs qui arrivent cherchent spécifiquement Orcal — ce qui génère des contacts directs d\'une qualité nettement supérieure à celle des leads obtenus via des agrégateurs ou des places de marché.',
      en: 'Orcalbordeaux.com ranked on brand searches in Gironde. The niche is precise — visitors who land here are specifically looking for Orcal — generating direct contacts of significantly higher quality than leads from aggregators or marketplaces.',
    },
  },

  // ─── BORDEAUX RIDE (site VTC) ─────────────────────────────────────────────
  {
    id: 'bordeaux-ride',
    slug: 'bordeaux-ride',
    tags: ['web', 'seo'],
    client: 'Bordeaux Ride',
    location: 'Bordeaux, France',
    type: { fr: 'Site web + SEO + Blog', en: 'Website + SEO + Blog' },
    headline: {
      fr: 'Un groupe VTC bordelais enfin lisible sur le web.',
      en: 'A Bordeaux chauffeur group finally readable on the web.',
    },
    description: {
      fr: 'Bordeaux Ride est un groupe de chauffeurs privés et VTC basé à Bordeaux. Le site expose clairement leurs services, permet de demander une course, d\'estimer un tarif de trajet et génère du trafic organique via un blog SEO.',
      en: 'Bordeaux Ride is a private chauffeur and VTC group based in Bordeaux. The site clearly presents their services, allows ride requests, fare estimation, and generates organic traffic through an SEO blog.',
    },
    outcomes: [
      { fr: 'Services clairement détaillés — chaque prestation a sa propre page', en: 'Services clearly detailed — each offering has its own page' },
      { fr: 'Formulaire de demande de course intégré directement sur le site', en: 'Ride request form integrated directly on the site' },
      { fr: 'Estimation de tarifs de trajet en ligne', en: 'Online journey fare estimation' },
      { fr: 'Blog SEO pour capter les recherches VTC et chauffeur Bordeaux', en: 'SEO blog to capture VTC and chauffeur Bordeaux searches' },
    ],
    image: '/images/bdxride.png',
    url: 'https://bordeauxride.com',
    featured: true,
    caseStudy: true,

    challengeTitle: {
      fr: 'Un groupe sérieux, sans vitrine à la hauteur',
      en: 'A serious group, without a matching showcase',
    },
    challenge: {
      fr: 'Bordeaux Ride proposait un service de chauffeur privé haut de gamme, mais sans présence digitale claire pour en convaincre les clients potentiels. Les services étaient difficiles à distinguer, l\'estimation de prix inexistante en ligne, et aucune stratégie pour capter les recherches Google des personnes qui cherchent un VTC ou chauffeur privé à Bordeaux.',
      en: 'Bordeaux Ride offered a premium private chauffeur service, but with no clear digital presence to convince potential clients. Services were hard to distinguish, online price estimation was nonexistent, and there was no strategy to capture Google searches from people looking for a VTC or private driver in Bordeaux.',
    },

    approachTitle: {
      fr: 'Clarté des services, outils de conversion, et SEO local',
      en: 'Service clarity, conversion tools, and local SEO',
    },
    approach: {
      fr: 'Refonte centrée sur trois axes : 1/ Clarté de l\'offre — chaque service a une page dédiée avec description complète, zone de couverture et cas d\'usage. 2/ Conversion — formulaire de demande de course simplifié et estimateur de tarifs trajet pour qualifier l\'intention avant contact. 3/ Visibilité — blog SEO ciblant les requêtes locales (VTC Bordeaux, chauffeur privé Gironde, taxi aéroport Bordeaux...) pour capter un trafic organique qualifié.',
      en: 'Rebuild focused on three axes: 1/ Service clarity — each service has a dedicated page with full description, coverage area and use cases. 2/ Conversion — simplified ride request form and journey fare estimator to qualify intent before contact. 3/ Visibility — SEO blog targeting local queries (VTC Bordeaux, private chauffeur Gironde, airport taxi Bordeaux...) to capture qualified organic traffic.',
    },

    resultsTitle: {
      fr: 'Un site qui génère des leads qualifiés, pas des curieux',
      en: 'A site that generates qualified leads, not curious visitors',
    },
    results: {
      fr: 'Le site Bordeaux Ride est devenu le premier outil commercial du groupe. L\'estimateur de tarifs capte les demandes en ligne, le formulaire qualifie les courses à l\'avance, et le blog génère un trafic organique continu sur les requêtes chauffeur et VTC bordelaises. Les leads entrants sont qualifiés et prêts à confirmer.',
      en: 'The Bordeaux Ride site became the group\'s primary commercial tool. The fare estimator captures online requests, the form qualifies rides in advance, and the blog generates ongoing organic traffic on Bordeaux chauffeur and VTC queries. Incoming leads are qualified and ready to confirm.',
    },
  },

  // ─── BORDEAUX RIDE CRM (.app) ────────────────────────────────────────────
  {
    id: 'bdxride-crm',
    slug: 'bdxride-crm',
    tags: ['logiciel'],
    client: 'Bordeaux Ride CRM',
    location: 'Bordeaux, France',
    type: { fr: 'Plateforme opérationnelle', en: 'Operational platform' },
    headline: {
      fr: 'Le CRM complet d\'un groupe de chauffeurs privés.',
      en: 'The full CRM for a private chauffeur group.',
    },
    description: {
      fr: 'Une plateforme de gestion opérationnelle sur mesure pour Bordeaux Ride : prise de RDV en temps réel, suivi de course en direct, historique client, chat interne pour devis, statistiques et panneau admin — tout depuis un seul tableau de bord.',
      en: 'A custom operational management platform for Bordeaux Ride: real-time booking, live ride tracking, client history, internal chat for quotes, statistics and admin panel — all from one dashboard.',
    },
    outcomes: [
      { fr: 'Prise de RDV instantanée — disponibilités en temps réel', en: 'Instant booking — real-time availability' },
      { fr: 'Suivi de course en direct pour le client et l\'équipe', en: 'Live ride tracking for client and team' },
      { fr: 'Historique complet des courses par client', en: 'Complete ride history per client' },
      { fr: 'Chat interne pour les demandes de devis', en: 'Internal chat for quote requests' },
      { fr: 'Stats, revenus et analytics — panneau admin complet', en: 'Stats, revenue and analytics — complete admin panel' },
    ],
    image: '/images/bordeauxride-crm-.png',
    url: 'https://bordeauxride.app',
    featured: true,
    caseStudy: true,

    challengeTitle: {
      fr: 'Une gestion opérationnelle dispersée et manuelle',
      en: 'A scattered and manual operational management',
    },
    challenge: {
      fr: 'Bordeaux Ride gérait ses courses à travers un mix de WhatsApp, d\'emails et de notes papier. Aucune visibilité globale sur les revenus, les chauffeurs ou l\'historique client. Les devis étaient traités à la main, les disponibilités étaient floues, et l\'équipe manquait d\'outils pour suivre l\'activité en temps réel. Avec la croissance du groupe, le système montrait ses limites.',
      en: 'Bordeaux Ride managed its rides through a mix of WhatsApp, emails and paper notes. No global visibility on revenue, drivers or client history. Quotes were handled manually, availability was unclear, and the team lacked tools to track activity in real time. With the group\'s growth, the system was showing its limits.',
    },

    approachTitle: {
      fr: 'Une plateforme taillée pour les opérations du groupe',
      en: 'A platform built for the group\'s operations',
    },
    approach: {
      fr: 'Développement d\'une plateforme .app sur mesure, organisée en modules distincts et cohérents : un module de réservation avec calendrier de disponibilités en temps réel, un suivi de course en direct, un CRM client avec historique complet, un chat interne pour les demandes de devis, un module de statistiques et revenus, et un panneau admin. Interface sombre et dense en information, pensée pour être utilisée au quotidien par l\'équipe opérationnelle.',
      en: 'Development of a custom .app platform, organized into distinct and coherent modules: a booking module with real-time availability calendar, live ride tracking, client CRM with complete history, internal chat for quote requests, stats and revenue module, and admin panel. Dark, information-dense interface designed for daily use by the operational team.',
    },

    resultsTitle: {
      fr: 'Zéro WhatsApp. Tout dans un seul dashboard.',
      en: 'Zero WhatsApp. Everything in one dashboard.',
    },
    results: {
      fr: 'La plateforme a centralisé l\'ensemble des opérations de Bordeaux Ride. Les prises de RDV sont instantanées, les courses suivies en direct, les devis traités via le chat interne. L\'équipe dispose enfin d\'une visibilité globale sur les revenus, les chauffeurs et l\'activité — sans jongler entre plusieurs outils.',
      en: 'The platform centralized all of Bordeaux Ride\'s operations. Bookings are instant, rides tracked live, quotes handled via internal chat. The team finally has full visibility on revenue, drivers and activity — without juggling multiple tools.',
    },
  },

  // ─── SPICY BEAUTY ────────────────────────────────────────────────────────
  {
    id: 'spicy-beauty',
    slug: 'spicy-beauty',
    tags: ['web'],
    client: 'Spicy Beauty by T.',
    location: 'Valenciennes, France',
    type: { fr: 'Site vitrine + SEO local', en: 'Showcase site + Local SEO' },
    headline: {
      fr: 'Une esthéticienne indépendante enfin trouvable à Valenciennes.',
      en: 'An independent beauty specialist finally findable in Valenciennes.',
    },
    description: {
      fr: 'Spicy Beauty by T. est une esthéticienne indépendante basée dans la région de Valenciennes. Site mobile-first, tarifs et prestations clairs, zone d\'intervention visible, prise de RDV directe.',
      en: 'Spicy Beauty by T. is an independent beauty specialist based in the Valenciennes area. Mobile-first site, clear pricing and services, service area visible, direct appointment booking.',
    },
    outcomes: [
      { fr: 'Présence locale sur Google — esthéticienne Valenciennes', en: 'Local Google presence — esthéticienne Valenciennes' },
      { fr: 'Tarifs et prestations lisibles en 30 secondes', en: 'Pricing and services readable in 30 seconds' },
      { fr: 'Zone d\'intervention affichée sans exposer l\'adresse exacte', en: 'Service area displayed without exposing the exact address' },
      { fr: 'CTA direct — prise de RDV par SMS ou Instagram DM', en: 'Direct CTA — appointment booking via SMS or Instagram DM' },
    ],
    image: 'images/sbbt.png',
    url: 'https://spicybeautybyt.com',
    featured: false,
    caseStudy: true,

    challengeTitle: {
      fr: 'Une activité sérieuse, sans vitrine numérique',
      en: 'A serious business, without a digital storefront',
    },
    challenge: {
      fr: 'Spicy Beauty by T. exerçait avec une clientèle fidèle, mais sans site internet. Dans un marché local très concurrentiel — les recherches "esthéticienne Valenciennes" affichent de nombreux résultats — l\'absence de présence en ligne freine directement l\'acquisition de nouveaux clients. Par ailleurs, la nature de l\'activité à domicile imposait de communiquer sur une zone sans dévoiler l\'adresse précise.',
      en: 'Spicy Beauty by T. had a loyal client base but no website. In a highly competitive local market — "esthéticienne Valenciennes" searches return many results — the absence of an online presence directly limits new client acquisition. Additionally, the home-based nature of the business required communicating a service area without revealing the exact address.',
    },

    approachTitle: {
      fr: 'Mobile-first, mots-clés locaux, et prise de RDV directe',
      en: 'Mobile-first, local keywords, and direct appointment booking',
    },
    approach: {
      fr: 'Site conçu mobile-first car 90 % des recherches locales se font sur téléphone. Architecture simple et directe : page d\'accueil, prestations et tarifs, galerie, zone d\'intervention, contact. Les mots-clés locaux liés à l\'esthétique à Valenciennes sont intégrés nativement dans les contenus. La zone d\'intervention est affichée sous forme de périmètre géographique, sans adresse précise. Un bouton CTA proéminent pour la prise de RDV via SMS ou Instagram DM.',
      en: 'Site designed mobile-first since 90% of local searches happen on phones. Simple and direct architecture: homepage, services and pricing, gallery, service area, contact. Local keywords related to beauty services in Valenciennes are natively integrated throughout. The service area is shown as a geographic perimeter, without a specific address. A prominent CTA button for booking via SMS or Instagram DM.',
    },

    resultsTitle: {
      fr: 'Visible localement, accessible directement',
      en: 'Locally visible, directly accessible',
    },
    results: {
      fr: 'Spicy Beauty by T. dispose aujourd\'hui d\'une vitrine professionnelle qui reflète la qualité de ses prestations. Le site est optimisé pour les recherches locales liées à l\'esthétique dans la région de Valenciennes. Les nouvelles clientes trouvent les infos dont elles ont besoin — tarifs, prestations, zone, contact — en quelques secondes, et passent directement à la prise de RDV.',
      en: 'Spicy Beauty by T. now has a professional showcase that reflects the quality of its services. The site is optimized for local beauty-related searches in the Valenciennes region. New clients find the information they need — pricing, services, area, contact — in seconds, and go straight to booking.',
    },
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
