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
      fr: 'De zéro à 791 000 impressions Google.',
      en: 'From zero to 791K Google impressions.',
    },
    description: {
      fr: 'Un concessionnaire moto bordelais sans présence en ligne au départ. Aujourd\'hui, sprintmotors.com approche le million d\'impressions — plus de 1 000 visites organiques par mois et en hausse constante.',
      en: 'A Bordeaux motorcycle dealer with zero online presence. Today, sprintmotors.com is approaching one million Google impressions — over 1,000 organic visits per month and growing.',
    },
    outcomes: [
      { fr: '791 000 impressions Google · 16 mois', en: '791K Google impressions · 16 months' },
      { fr: '15 290 clics organiques — zéro publicité', en: '15,290 organic clicks — zero paid ads' },
      { fr: '74 541 impressions en un seul mois (pic juillet 2025)', en: '74,541 impressions in a single month (peak July 2025)' },
    ],
    image: 'https://www.torquemade.com/image/sprint-hero.png',
    url: 'https://sprintmotors.com',
    featured: true,
  },
  {
    id: 'sprint-ecosystem',
    tags: ['web', 'seo'],
    client: 'Sprint Motors — Écosystème marques',
    location: 'Bordeaux, France',
    type: { fr: '3 microsites de marque', en: '3 brand microsites' },
    headline: {
      fr: 'Un écosystème de marques. 3 sites, 3 positions SEO distinctes.',
      en: 'A brand ecosystem. 3 sites, 3 distinct SEO positions.',
    },
    description: {
      fr: 'Sprint Motors distribue plusieurs marques. Chaque marque a son propre microsite pour capturer les recherches que le domaine principal ne peut pas classer — Cyclone, Voge, Orcal.',
      en: 'Sprint Motors carries multiple brands. Each brand gets its own microsite to capture search intent the main domain can\'t rank for — Cyclone, Voge, Orcal.',
    },
    outcomes: [
      { fr: 'cyclonebordeaux.fr — 1 765 impressions · 118 clics · 4 semaines', en: 'cyclonebordeaux.fr — 1,765 impressions · 118 clicks · 4 weeks' },
      { fr: 'vogebordeaux.fr — 7 948 impressions · 208 clics · 3 mois', en: 'vogebordeaux.fr — 7,948 impressions · 208 clicks · 3 months' },
      { fr: 'orcalbordeaux.fr — 473 impressions · 41 clics · 4 semaines', en: 'orcalbordeaux.fr — 473 impressions · 41 clicks · 4 weeks' },
    ],
    image: 'https://www.torquemade.com/image/cyclone-catalogue.png',
    featured: false,
  },
  {
    id: 'motopassion65',
    tags: ['web', 'seo'],
    client: 'Motopassion 65',
    location: 'Tarbes, Hautes-Pyrénées',
    type: { fr: 'Refonte + SEO local', en: 'Rebuild + Local SEO' },
    headline: {
      fr: 'Invisible à Top 3 en 30 jours.',
      en: 'Invisible to Top 3 in 30 days.',
    },
    description: {
      fr: 'Quasi zéro trafic avant le nouveau site. La combinaison d\'une refonte propre et d\'une stratégie de contenu ciblant les riders des Pyrénées a tout changé — 171 nouveaux mots-clés en 30 jours.',
      en: 'Close to zero traffic before the new site. A clean rebuild combined with a content strategy targeting Pyrénées riders changed everything — 171 new keywords in 30 days.',
    },
    outcomes: [
      { fr: 'Top 3 pour "concessionnaire moto Pyrénées"', en: 'Top 3 for "motorcycle dealer Pyrénées"' },
      { fr: '171 nouveaux mots-clés classés en 30 jours', en: '171 new keywords ranked in 30 days' },
      { fr: '0 → Visible sur CFMOTO, VOGE, et les recherches locales', en: '0 → Visible on CFMOTO, VOGE, and local searches' },
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
    type: { fr: 'Site + Réservation + SEO', en: 'Site + Booking + SEO' },
    headline: {
      fr: 'Design premium. Système de réservation sur mesure. SEO de fond.',
      en: 'Premium design. Custom booking system. Long-game SEO.',
    },
    description: {
      fr: 'Chauffeur privé premium face à Uber et Bolt. Site Apple/Tesla, système de réservation sans commission (Mapbox temps réel, tarification fixe automatique), et 59 articles SEO permanents.',
      en: 'Premium private chauffeur competing against Uber and Bolt. Apple/Tesla-style site, zero-commission booking system (real-time Mapbox, automatic fixed pricing), and 59 permanent SEO articles.',
    },
    outcomes: [
      { fr: 'Réservation complète — 0% de commission', en: 'Full booking flow — 0% commission' },
      { fr: '59 articles publiés — capital trafic permanent', en: '59 articles published — permanent traffic asset' },
      { fr: 'Routing Mapbox temps réel + prix fixes automatiques', en: 'Real-time Mapbox routing + automatic fixed pricing' },
    ],
    image: 'https://www.torquemade.com/image/br-hero.png',
    url: 'https://bordeauxride.com',
    featured: true,
  },
  {
    id: 'bordeaux-ride-app',
    tags: ['logiciel'],
    client: 'Bordeaux Ride — Admin App',
    location: 'Bordeaux, France',
    type: { fr: 'Application web (base44)', en: 'Web application (base44)' },
    headline: {
      fr: 'Le CRM complet d\'un service VTC premium.',
      en: 'The full CRM for a premium chauffeur service.',
    },
    description: {
      fr: 'Application de gestion opérationnelle : réservations en temps réel, tracking des revenus, gestion des chauffeurs, devis et analytics — tout depuis un seul dashboard sombre et épuré.',
      en: 'Operational management app: real-time bookings, revenue tracking, driver management, quotes, and analytics — everything from a single clean dark dashboard.',
    },
    outcomes: [
      { fr: 'Vue globale temps réel — courses en cours, statuts, montants', en: 'Real-time global view — live rides, statuses, amounts' },
      { fr: 'Modules : Revenus / Clients / Chauffeurs / Devis / Analytics / Blog', en: 'Modules: Revenue / Clients / Drivers / Quotes / Analytics / Blog' },
      { fr: 'Interface sombre — design terminal, zéro friction', en: 'Dark interface — terminal design, zero friction' },
    ],
    image: '/images/bdxride-app-3.png',
    featured: false,
  },
  {
    id: 'jetski-arcachon',
    tags: ['web', 'logiciel'],
    client: 'Jetski\'n Arcachon',
    location: 'Arcachon, Gironde',
    type: { fr: 'Site + Réservation + CRM', en: 'Site + Booking + CRM' },
    headline: {
      fr: 'Location de jet ski Sea-Doo sur le Bassin d\'Arcachon — du catalogue à la réservation.',
      en: 'Sea-Doo jet ski rental on the Arcachon Bay — from catalogue to booking.',
    },
    description: {
      fr: 'Site vitrine avec présentation des 3 modèles Sea-Doo, système de réservation en ligne (calendrier de disponibilités, sélection de créneau, formulaire) et CRM de suivi des réservations — zéro commission, zéro plateforme tierce.',
      en: 'Showcase site presenting 3 Sea-Doo models, online booking system (availability calendar, time slot selection, contact form) and reservations CRM — zero commission, zero third-party platform.',
    },
    outcomes: [
      { fr: '3 modèles Sea-Doo — présentation complète + tarifs en ligne', en: '3 Sea-Doo models — full presentation + online pricing' },
      { fr: 'Réservation en ligne avec calendrier de disponibilités', en: 'Online booking with availability calendar' },
      { fr: 'CRM de suivi des réservations — zéro commission', en: 'Reservations CRM — zero commission' },
    ],
    image: '/images/jetski-arcachon.png',
    url: 'https://jetski-n-arcachon.vercel.app',
    featured: false,
  },
    tags: ['web'],
    client: 'Spicy Beauty by T.',
    location: 'Valenciennes, France',
    type: { fr: 'Site vitrine', en: 'Showcase site' },
    headline: {
      fr: 'Un site épuré pour une esthéticienne indépendante.',
      en: 'A clean site for an independent beauty specialist.',
    },
    description: {
      fr: 'Site vitrine mobile-first pour une esthéticienne à Valenciennes : prestations, tarifs, galerie, localisation. Chargement rapide, contact direct SMS/Instagram, SEO local intégré.',
      en: 'Mobile-first showcase site for a beauty specialist in Valenciennes: services, pricing, gallery, location. Fast loading, direct SMS/Instagram contact, built-in local SEO.',
    },
    outcomes: [
      { fr: 'Présence locale complète sur Google Maps & Search', en: 'Complete local presence on Google Maps & Search' },
      { fr: 'Contact direct SMS et Instagram DM intégrés', en: 'Direct SMS and Instagram DM contact integrated' },
      { fr: 'Mobile-first — chargement < 2s', en: 'Mobile-first — loads < 2s' },
    ],
    image: 'https://www.spicybeautybyt.com/images/gallery-1.jpg',
    url: 'https://spicybeautybyt.com',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
