export type Post = {
  slug: string
  title: { fr: string; en: string }
  description: { fr: string; en: string }
  date: { fr: string; en: string }
  category: string
  readingTime: number
}

export const posts: Post[] = [
  {
    slug: 'shopify-vs-nextjs-2025',
    title: {
      fr: 'Shopify vs Next.js : lequel choisir pour votre commerce en 2025 ?',
      en: 'Shopify vs Next.js: Which to Choose for Your Online Store in 2025?',
    },
    description: {
      fr: 'Shopify ou Next.js pour votre e-commerce ? Nous comparons les deux solutions pour vous aider à faire le bon choix selon votre projet et vos ambitions.',
      en: 'Shopify or Next.js for your e-commerce? We compare both solutions to help you make the right choice based on your project and ambitions.',
    },
    date: { fr: 'Janvier 2025', en: 'January 2025' },
    category: 'Web & Développement',
    readingTime: 4,
  },
  {
    slug: 'nextjs-plus-rapide-que-wordpress',
    title: {
      fr: "Pourquoi un site Next.js est plus rapide qu'un site WordPress",
      en: 'Why a Next.js Site Is Faster Than a WordPress Site',
    },
    description: {
      fr: "WordPress génère ses pages à la demande, Next.js les prépare à l'avance. Cette différence fondamentale explique tout — performances, SEO, Core Web Vitals.",
      en: 'WordPress generates pages on demand, Next.js prepares them in advance. This fundamental difference explains everything — performance, SEO, Core Web Vitals.',
    },
    date: { fr: 'Janvier 2025', en: 'January 2025' },
    category: 'Web & Développement',
    readingTime: 4,
  },
  {
    slug: 'site-vitrine-professionnel-pme-locale',
    title: {
      fr: "Ce qu'un site vitrine professionnel apporte à une PME locale",
      en: 'What a Professional Website Brings to a Local SME',
    },
    description: {
      fr: "Visibilité Google, crédibilité, leads entrants — ce qu'un site vitrine bien construit change concrètement pour une PME ou un commerce de proximité.",
      en: 'Google visibility, credibility, inbound leads — what a well-built website concretely changes for an SME or local business.',
    },
    date: { fr: 'Janvier 2025', en: 'January 2025' },
    category: 'Web & Développement',
    readingTime: 4,
  },
  {
    slug: 'site-sur-mesure-vs-template',
    title: {
      fr: 'Site web sur mesure vs template : ce que votre client voit vraiment',
      en: 'Custom Website vs Template: What Your Client Really Sees',
    },
    description: {
      fr: "Un template peut ressembler à un site professionnel. Mais ce que voit votre client — et ce que lit Google — raconte une autre histoire.",
      en: "A template can look like a professional site. But what your client sees — and what Google reads — tells a different story.",
    },
    date: { fr: 'Février 2025', en: 'February 2025' },
    category: 'Web & Développement',
    readingTime: 4,
  },
  {
    slug: 'structurer-site-web-seo-conception',
    title: {
      fr: 'Comment structurer un site web pour le SEO dès la conception',
      en: 'How to Structure a Website for SEO from Day One',
    },
    description: {
      fr: "L'architecture d'un site web conditionne son SEO bien avant que le premier mot de contenu soit écrit. Voici comment l'aborder correctement dès le départ.",
      en: "A website's architecture determines its SEO long before the first word of content is written. Here's how to approach it correctly from the start.",
    },
    date: { fr: 'Février 2025', en: 'February 2025' },
    category: 'Web & Développement',
    readingTime: 5,
  },
  {
    slug: 'erreurs-vitesse-site-web',
    title: {
      fr: "Les 7 erreurs qui plombent la vitesse d'un site web",
      en: "The 7 Mistakes That Kill Your Website's Speed",
    },
    description: {
      fr: "Images non compressées, plugins inutiles, hébergement sous-dimensionné — les 7 erreurs les plus fréquentes qui ralentissent un site et comment les corriger.",
      en: "Uncompressed images, unnecessary plugins, underpowered hosting — the 7 most common mistakes that slow down a site and how to fix them.",
    },
    date: { fr: 'Février 2025', en: 'February 2025' },
    category: 'Web & Développement',
    readingTime: 5,
  },
  {
    slug: 'site-mobile-first-2025',
    title: {
      fr: 'Pourquoi votre site doit être mobile-first en 2025',
      en: 'Why Your Site Must Be Mobile-First in 2025',
    },
    description: {
      fr: "63 % du trafic web mondial vient du mobile. Google indexe en priorité la version mobile de votre site. Ce que ça implique concrètement pour votre présence en ligne.",
      en: "63% of global web traffic comes from mobile. Google primarily indexes the mobile version of your site. What this means concretely for your online presence.",
    },
    date: { fr: 'Mars 2025', en: 'March 2025' },
    category: 'Web & Développement',
    readingTime: 4,
  },
  {
    slug: 'core-web-vitals-explication',
    title: {
      fr: 'Core Web Vitals : ce que Google mesure vraiment sur votre site',
      en: 'Core Web Vitals: What Google Really Measures on Your Site',
    },
    description: {
      fr: "LCP, INP, CLS — les trois métriques que Google utilise pour évaluer l'expérience utilisateur de votre site et les intégrer dans son algorithme de classement.",
      en: "LCP, INP, CLS — the three metrics Google uses to evaluate user experience on your site and factor them into its ranking algorithm.",
    },
    date: { fr: 'Mars 2025', en: 'March 2025' },
    category: 'Web & Développement',
    readingTime: 5,
  },
  {
    slug: 'landing-page-vs-site-complet',
    title: {
      fr: 'Landing page vs site complet : quand opter pour quelle solution ?',
      en: 'Landing Page vs Full Site: When to Choose Which?',
    },
    description: {
      fr: "Une landing page ou un site complet ? La réponse dépend de votre objectif, de votre stade de développement et de ce que vous voulez que votre visiteur fasse.",
      en: "A landing page or a full site? The answer depends on your goal, your stage of development, and what you want your visitor to do.",
    },
    date: { fr: 'Mars 2025', en: 'March 2025' },
    category: 'Web & Développement',
    readingTime: 4,
  },
  {
    slug: 'systeme-reservation-sans-commission',
    title: {
      fr: 'Comment intégrer un système de réservation sans commission',
      en: 'How to Integrate a Booking System Without Commission',
    },
    description: {
      fr: "Planity, Booksy, ResaOnline prennent entre 1 % et 3 % de chaque réservation. Un système sur mesure intégré à votre site vous coûte moins et vous appartient.",
      en: "Planity, Booksy, ResaOnline take between 1% and 3% of every booking. A custom system integrated into your site costs less and belongs to you.",
    },
    date: { fr: 'Mars 2025', en: 'March 2025' },
    category: 'Web & Développement',
    readingTime: 5,
  },
  {
    slug: 'formulaire-contact-conversion',
    title: {
      fr: "Pourquoi votre formulaire de contact ne convertit pas (et comment le fixer)",
      en: "Why Your Contact Form Isn't Converting (And How to Fix It)",
    },
    description: {
      fr: "Un formulaire trop long, mal placé ou sans retour visuel fait fuir les visiteurs. Voici les erreurs les plus fréquentes et comment les corriger.",
      en: "A form that's too long, poorly placed, or lacking visual feedback drives visitors away. Here are the most common mistakes and how to fix them.",
    },
    date: { fr: 'Mars 2025', en: 'March 2025' },
    category: 'Web & Développement',
    readingTime: 5,
  },
  {
    slug: 'refonte-site-web-seo',
    title: {
      fr: "Refonte de site web : comment l'aborder sans perdre son SEO",
      en: "Website Redesign: How to Do It Without Losing Your SEO",
    },
    description: {
      fr: "Une refonte mal préparée peut effacer des mois de travail SEO en quelques jours. Voici la méthode pour migrer sans perdre vos positions Google.",
      en: "A poorly prepared redesign can erase months of SEO work in just a few days. Here's the method to migrate without losing your Google rankings.",
    },
    date: { fr: 'Avril 2025', en: 'April 2025' },
    category: 'Web & Développement',
    readingTime: 6,
  },
  {
    slug: 'seo-local-2025-guide',
    title: {
      fr: 'SEO local en 2025 : le guide complet pour les commerces de proximité',
      en: 'Local SEO in 2025: The Complete Guide for Local Businesses',
    },
    description: {
      fr: "Google Business Profile, avis clients, mots-clés locaux, schema markup — tout ce qu'il faut maîtriser pour apparaître en tête des recherches locales en 2025.",
      en: "Google Business Profile, customer reviews, local keywords, schema markup — everything you need to master to appear at the top of local search results in 2025.",
    },
    date: { fr: 'Avril 2025', en: 'April 2025' },
    category: 'SEO & Contenu',
    readingTime: 9,
  },
  {
    slug: 'impressions-google-sans-publicite',
    title: {
      fr: 'Comment passer de 0 à 800 000 impressions Google sans publicité',
      en: 'How to Go from 0 to 800,000 Google Impressions Without Advertising',
    },
    description: {
      fr: "Pas un euro en Google Ads. Sprint Motors est passé de zéro à 791 000 impressions organiques en moins de 18 mois. Voici exactement comment.",
      en: "Not a single euro in Google Ads. Sprint Motors went from zero to 791,000 organic impressions in under 18 months. Here's exactly how.",
    },
    date: { fr: 'Avril 2025', en: 'April 2025' },
    category: 'SEO & Contenu',
    readingTime: 8,
  },
]
