export type ProjectTag = 'web' | 'seo' | 'logiciel'

export type Project = {
  id: string
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
}

export const projects: Project[] = [
  {
    id: 'sprint-motors',
    tags: ['web', 'seo'],
    client: 'Sprint Motors',
    location: 'Bordeaux, France',
    type: { fr: 'Site web + SEO', en: 'Website + SEO' },
    headline: {
      fr: 'De zero a 791 000 impressions Google.',
      en: 'From zero to 791K Google impressions.',
    },
    description: {
      fr: 'Un concessionnaire moto bordelais sans presence en ligne. Aujourd hui, sprintmotors.com approche le million d impressions. Plus de 1 000 visites organiques par mois.',
      en: 'A Bordeaux motorcycle dealer with zero online presence. Today, sprintmotors.com is approaching one million Google impressions — over 1,000 organic visits per month.',
    },
    outcomes: [
      { fr: '791 000 impressions Google en 16 mois', en: '791K Google impressions in 16 months' },
      { fr: '15 290 clics organiques — zero publicite', en: '15,290 organic clicks — zero paid ads' },
      { fr: '74 541 impressions en un seul mois (pic juillet 2025)', en: '74,541 impressions in one month (peak July 2025)' },
    ],
    image: 'https://www.torquemade.com/image/sprint-hero.png',
    url: 'https://sprintmotors.com',
    featured: true,
  },
  {
    id: 'cyclone-bordeaux',
    tags: ['web', 'seo'],
    client: 'Cyclone Bordeaux',
    location: 'Bordeaux, France',
    type: { fr: 'Microsite de marque + SEO', en: 'Brand microsite + SEO' },
    headline: {
      fr: 'Cyclone Bordeaux — 1 765 impressions en 4 semaines.',
      en: 'Cyclone Bordeaux — 1,765 impressions in 4 weeks.',
    },
    description: {
      fr: 'Microsite dedie a la marque Cyclone pour capturer les recherches que sprintmotors.com ne peut pas classer. Strategie de contenu et pages modeles optimisees.',
      en: 'Dedicated microsite for the Cyclone brand to capture searches the main domain cannot rank for. Content strategy and optimized model pages.',
    },
    outcomes: [
      { fr: '1 765 impressions Google en 4 semaines', en: '1,765 Google impressions in 4 weeks' },
      { fr: '118 clics organiques — zero publicite', en: '118 organic clicks — zero paid ads' },
      { fr: 'Pages modeles + articles de blog SEO', en: 'Model pages + SEO blog articles' },
    ],
    image: 'https://www.torquemade.com/image/cyclone-catalogue.png',
    url: 'https://cyclonebordeaux.fr',
    featured: false,
  },
  {
    id: 'voge-bordeaux',
    tags: ['web', 'seo'],
    client: 'Voge Bordeaux',
    location: 'Bordeaux, France',
    type: { fr: 'Microsite de marque + SEO', en: 'Brand microsite + SEO' },
    headline: {
      fr: 'Voge Bordeaux — 7 948 impressions en 3 mois.',
      en: 'Voge Bordeaux — 7,948 impressions in 3 months.',
    },
    description: {
      fr: 'Microsite dedie a la marque Voge. Strategie de contenu ciblant les recherches locales et les modeles Voge — 208 clics organiques en 3 mois.',
      en: 'Dedicated microsite for the Voge brand. Content strategy targeting local searches and Voge models — 208 organic clicks in 3 months.',
    },
    outcomes: [
      { fr: '7 948 impressions Google en 3 mois', en: '7,948 Google impressions in 3 months' },
      { fr: '208 clics organiques — zero publicite', en: '208 organic clicks — zero paid ads' },
      { fr: 'Pages modeles + articles de blog SEO locaux', en: 'Model pages + local SEO blog articles' },
    ],
    image: '/images/voge-bordeaux.png',
    url: 'https://vogebordeaux.fr',
    featured: false,
  },
  {
    id: 'orcal-bordeaux',
    tags: ['web', 'seo'],
    client: 'Orcal Bordeaux',
    location: 'Bordeaux, France',
    type: { fr: 'Microsite de marque + SEO', en: 'Brand microsite + SEO' },
    headline: {
      fr: 'Orcal Bordeaux — 473 impressions en 4 semaines au lancement.',
      en: 'Orcal Bordeaux — 473 impressions in 4 weeks at launch.',
    },
    description: {
      fr: 'Microsite dedie a la marque Orcal. Positionnement SEO local des le lancement — 41 clics organiques en 4 semaines sans budget publicitaire.',
      en: 'Dedicated microsite for the Orcal brand. Local SEO positioning from day one — 41 organic clicks in 4 weeks with zero ad spend.',
    },
    outcomes: [
      { fr: '473 impressions Google en 4 semaines', en: '473 Google impressions in 4 weeks' },
      { fr: '41 clics organiques des le lancement', en: '41 organic clicks from launch' },
      { fr: 'Pages modeles + contenu SEO local', en: 'Model pages + local SEO content' },
    ],
    image: '/images/orcal-bordeaux.png',
    url: 'https://orcalbordeaux.fr',
    featured: false,
  },
  {
    id: 'motopassion65',
    tags: ['web', 'seo'],
    client: 'Motopassion 65',
    location: 'Tarbes, Hautes-Pyrenees',
    type: { fr: 'Refonte + SEO local', en: 'Rebuild + Local SEO' },
    headline: {
      fr: 'Invisible a Top 3 en 30 jours.',
      en: 'Invisible to Top 3 in 30 days.',
    },
    description: {
      fr: 'Quasi zero trafic avant le nouveau site. Une refonte propre combinee a une strategie de contenu ciblant les riders des Pyrenees a tout change.',
      en: 'Close to zero traffic before the new site. A clean rebuild combined with a content strategy targeting Pyrenees riders changed everything.',
    },
    outcomes: [
      { fr: 'Top 3 pour concessionnaire moto Pyrenees', en: 'Top 3 for motorcycle dealer Pyrenees' },
      { fr: '171 nouveaux mots-cles classes en 30 jours', en: '171 new keywords ranked in 30 days' },
      { fr: 'Visible sur CFMOTO, VOGE et les recherches locales', en: 'Visible on CFMOTO, VOGE and local searches' },
    ],
    image: 'https://www.torquemade.com/image/mp65-catalogue.png',
    url: 'https://motopassion65.com',
    featured: true,
  },
  {
    id: 'bordeaux-ride',
    tags: ['web', 'seo', 'logiciel'],
    client: 'Bordeaux Ride',
    location: 'Bordeaux, France',
    type: { fr: 'Site + Reservation + SEO', en: 'Site + Booking + SEO' },
    headline: {
      fr: 'Design premium. Systeme de reservation sur mesure. SEO de fond.',
      en: 'Premium design. Custom booking system. Long-game SEO.',
    },
    description: {
      fr: 'Chauffeur prive premium face a Uber et Bolt. Site Apple-Tesla, systeme de reservation sans commission avec Mapbox temps reel, et 59 articles SEO permanents.',
      en: 'Premium private chauffeur competing against Uber and Bolt. Apple-Tesla style site, zero-commission booking system with real-time Mapbox, and 59 permanent SEO articles.',
    },
    outcomes: [
      { fr: 'Reservation complete — 0% de commission', en: 'Full booking flow — 0% commission' },
      { fr: '59 articles publies — capital trafic permanent', en: '59 articles published — permanent traffic asset' },
      { fr: 'Routing Mapbox temps reel + prix fixes automatiques', en: 'Real-time Mapbox routing + automatic fixed pricing' },
    ],
    image: 'https://www.torquemade.com/image/br-hero.png',
    url: 'https://bordeauxride.com',
    featured: true,
  },
  {
    id: 'bordeaux-ride-app',
    tags: ['logiciel'],
    client: 'Bordeaux Ride Admin App',
    location: 'Bordeaux, France',
    type: { fr: 'Application web', en: 'Web application' },
    headline: {
      fr: 'Le CRM complet pour un service VTC premium.',
      en: 'The full CRM for a premium chauffeur service.',
    },
    description: {
      fr: 'Application de gestion operationnelle: reservations temps reel, tracking revenus, gestion chauffeurs, devis et analytics depuis un seul dashboard sombre.',
      en: 'Operational management app: real-time bookings, revenue tracking, driver management, quotes, and analytics from a single dark dashboard.',
    },
    outcomes: [
      { fr: 'Vue globale temps reel — courses en cours, statuts, montants', en: 'Real-time global view — live rides, statuses, amounts' },
      { fr: 'Modules Revenus, Clients, Chauffeurs, Devis, Analytics, Blog', en: 'Modules: Revenue, Clients, Drivers, Quotes, Analytics, Blog' },
      { fr: 'Interface sombre — design terminal, zero friction', en: 'Dark interface — terminal design, zero friction' },
    ],
    image: '/images/bdxride-crm-2.png',
    featured: false,
  },
  {
    id: 'jetski-arcachon',
    tags: ['web', 'logiciel'],
    client: "Jetski n Arcachon",
    location: 'Arcachon, Gironde',
    type: { fr: 'Site + Reservation + CRM', en: 'Site + Booking + CRM' },
    headline: {
      fr: 'Location Sea-Doo sur le Bassin d Arcachon — du catalogue au CRM.',
      en: 'Sea-Doo rental on the Arcachon Bay — from catalogue to CRM.',
    },
    description: {
      fr: 'Site avec selection des 3 modeles Sea-Doo, systeme de reservation en ligne avec calendrier de disponibilites et CRM de suivi des reservations. Zero commission, zero plateforme tierce.',
      en: 'Site with 3 Sea-Doo model selection, online booking system with availability calendar and reservations CRM. Zero commission, zero third-party platform.',
    },
    outcomes: [
      { fr: '3 modeles Sea-Doo — presentation complete + tarifs en ligne', en: '3 Sea-Doo models — full presentation + online pricing' },
      { fr: 'Reservation en ligne avec calendrier de disponibilites', en: 'Online booking with availability calendar' },
      { fr: 'CRM de suivi des reservations — zero commission', en: 'Reservations CRM — zero commission' },
    ],
    image: '/images/jetski-arcachon.png',
    url: 'https://jetski-n-arcachon.vercel.app',
    featured: true,
  },
  {
    id: 'spicy-beauty',
    tags: ['web'],
    client: 'Spicy Beauty by T.',
    location: 'Valenciennes, France',
    type: { fr: 'Site vitrine', en: 'Showcase site' },
    headline: {
      fr: 'Un site epure pour une estheticienne independante.',
      en: 'A clean site for an independent beauty specialist.',
    },
    description: {
      fr: 'Site vitrine mobile-first pour une estheticienne a Valenciennes: prestations, tarifs, galerie, localisation. Chargement rapide, contact direct SMS-Instagram, SEO local integre.',
      en: 'Mobile-first showcase site for a beauty specialist in Valenciennes: services, pricing, gallery, location. Fast loading, direct contact, built-in local SEO.',
    },
    outcomes: [
      { fr: 'Presence locale complete sur Google Maps et Search', en: 'Complete local presence on Google Maps and Search' },
      { fr: 'Contact direct SMS et Instagram DM integres', en: 'Direct SMS and Instagram DM contact integrated' },
      { fr: 'Mobile-first — chargement inferieur a 2s', en: 'Mobile-first — loads under 2s' },
    ],
    image: '/images/sbbt.png',
    url: 'https://spicybeautybyt.com',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
