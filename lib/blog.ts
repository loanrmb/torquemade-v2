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
  // → Ajouter les prochains articles ici
]
