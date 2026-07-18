import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/schema-renderer'
import { blogPostingSchema } from '@/lib/schema'
import { posts } from '@/lib/blog'
import { CommentApparaitreReponsesIaContent } from './_content'

const ogImage = '/api/og?title=Comment+appara%C3%AEtre+dans+les+r%C3%A9ponses+IA+g%C3%A9n%C3%A9rative+de+Google+%3F&category=SEO+%26+Contenu'
const post = posts.find((p) => p.slug === 'comment-apparaitre-reponses-google-ia-generative')!

// FAQ sourced word-for-word from the FR strings rendered in _content.tsx.
const faq = [
  {
    q: 'Une fiche produit peut-elle être citée par l\'IA générative de Google ?',
    a: "Oui. Sprint Motors le montre : sa fiche produit la plus citée (Voge SR4 Max 400cc) capte 190 impressions sur 660, soit 29% du total du site. La condition est que la fiche présente ses caractéristiques comme une réponse claire et structurée, pas comme un simple argumentaire commercial.",
  },
  {
    q: 'Faut-il privilégier le blog plutôt que les pages produit ?',
    a: "Sur trois des quatre sites analysés (BordeauxRide, Voge Bordeaux, MotoPassion65), c'est effectivement un article de blog qui capte la majorité des impressions. Mais Sprint Motors prouve que ce n'est pas le format qui compte, c'est la structure. Une fiche produit bien construite peut fonctionner aussi bien qu'un article.",
  },
  {
    q: 'Le format FAQ aide-t-il à être cité par l\'IA ?',
    a: "Le format FAQ aide parce qu'il force une structure question/réponse explicite, exactement ce que montrent les quatre sites analysés. Ajouter un schema FAQPage renforce ce signal pour les moteurs, mais le contenu visible doit déjà répondre clairement à la question : le balisage seul ne suffit pas.",
  },
  {
    q: 'Combien de temps faut-il pour être cité par Google IA générative ?',
    a: "Les données de cet article couvrent une période de 3 mois. Aucun des quatre sites n'a modifié son contenu spécifiquement pour ce rapport : ces citations viennent de contenu déjà en place. Le facteur déterminant n'est donc pas l'ancienneté de la page mais sa structure : une page ancienne mal structurée reste invisible, une page récente bien structurée peut être citée rapidement.",
  },
]

export const metadata: Metadata = {
  title: 'Comment apparaître dans les réponses IA générative de Google ?',
  openGraph: {
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  description: 'Ce qui détermine si une page est citée par Google IA générative, avec des données réelles issues de quatre sites différents.',
}

export default function Page() {
  return (
    <>
      <SchemaRenderer schema={blogPostingSchema(post, { image: ogImage, faq })} />
      <CommentApparaitreReponsesIaContent />
    </>
  )
}
