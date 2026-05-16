export type Post = {
  slug: string
  title: string
  description: string
  date: string
  category: string
  readingTime: number
}

export const posts: Post[] = [
  {
    slug: 'shopify-vs-nextjs-2025',
    title: 'Shopify vs Next.js : lequel choisir pour votre commerce en 2025 ?',
    description: 'Shopify ou Next.js pour votre e-commerce ? Nous comparons les deux solutions pour vous aider à faire le bon choix selon votre projet et vos ambitions.',
    date: 'Janvier 2025',
    category: 'Web & Développement',
    readingTime: 4,
  },
  {
    slug: 'nextjs-plus-rapide-que-wordpress',
    title: 'Pourquoi un site Next.js est plus rapide qu\'un site WordPress',
    description: 'WordPress génère ses pages à la demande, Next.js les prépare à l\'avance. Cette différence fondamentale explique tout — performances, SEO, Core Web Vitals.',
    date: 'Janvier 2025',
    category: 'Web & Développement',
    readingTime: 4,
  },
  {
    slug: 'site-vitrine-professionnel-pme-locale',
    title: 'Ce qu\'un site vitrine professionnel apporte à une PME locale',
    description: 'Visibilité Google, crédibilité, leads entrants — ce qu\'un site vitrine bien construit change concrètement pour une PME ou un commerce de proximité.',
    date: 'Janvier 2025',
    category: 'Web & Développement',
    readingTime: 4,
  },
  {
    slug: 'site-sur-mesure-vs-template',
    title: 'Site web sur mesure vs template : ce que votre client voit vraiment',
    description: 'Un template peut ressembler à un site professionnel. Mais ce que voit votre client — et ce que lit Google — raconte une autre histoire.',
    date: 'Février 2025',
    category: 'Web & Développement',
    readingTime: 4,
  },
  {
    slug: 'structurer-site-web-seo-conception',
    title: 'Comment structurer un site web pour le SEO dès la conception',
    description: 'L\'architecture d\'un site web conditionne son SEO bien avant que le premier mot de contenu soit écrit. Voici comment l\'aborder correctement dès le départ.',
    date: 'Février 2025',
    category: 'Web & Développement',
    readingTime: 5,
  },
  // → Ajouter les prochains articles ici
]
