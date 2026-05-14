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
    image: 'https://sprintmotors.com/wp-content/uploads/2023/09/sprint-motors-bordeaux.jpg',
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
      fr: 'Le projet a démarré par un audit complet du secteur local et des opportunités de mots-clés. Puis une refonte intégrale du site : architecture pensée pour le SEO, pages dédiées par univers (motos neuves, occasions, accessoires), descriptions de stock optimisées avec données structurées, et clarification de chaque servi
