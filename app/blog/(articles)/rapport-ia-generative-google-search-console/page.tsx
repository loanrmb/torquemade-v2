import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/schema-renderer'
import { blogPostingSchema } from '@/lib/schema'
import { posts } from '@/lib/blog'
import { RapportIaGenerativeGscContent } from './_content'

const ogImage = '/api/og?title=Rapport+IA+g%C3%A9n%C3%A9rative+dans+Google+Search+Console+%3A+comment+le+lire+(et+pourquoi+il+ne+dit+encore+rien+en+France)&category=SEO+%26+Contenu'
const post = posts.find((p) => p.slug === 'rapport-ia-generative-google-search-console')!

// FAQ sourced word-for-word from the FR strings rendered in _content.tsx.
const faq = [
  {
    q: 'Pourquoi je ne vois pas mon site français dans ce rapport ?',
    a: "Parce que les fonctionnalités IA générative de Google (AI Overviews, AI Mode) ne sont pas encore déployées en France. Le rapport ne peut afficher que les impressions provenant de marchés où ces fonctionnalités existent déjà : Royaume-Uni, États-Unis, Belgique, Maroc, selon votre audience. Un site français peut recevoir quelques impressions issues de visiteurs dans ces pays, mais l'essentiel de son trafic domestique n'est pas encore concerné.",
  },
  {
    q: "Faut-il s'inquiéter si les impressions sont à zéro ?",
    a: "Non. Des impressions à zéro, ou proches de zéro, reflètent simplement l'absence de déploiement d'AI Overviews en France, pas un problème technique ni une pénalité sur votre site. Le rapport Performances classique reste le bon indicateur pour suivre votre visibilité organique actuelle.",
  },
  {
    q: 'Ce rapport remplace-t-il le rapport Performances classique ?',
    a: "Non. Le rapport Performances classique (clics, impressions, CTR, position moyenne pour les résultats de recherche traditionnels) continue de fonctionner exactement comme avant. Le rapport IA générative est un rapport séparé et complémentaire, focalisé uniquement sur les impressions dans les réponses générées par IA.",
  },
  {
    q: 'Que faire en attendant le déploiement en France ?',
    a: "En attendant, la meilleure préparation consiste à structurer votre contenu pour qu'il réponde directement aux questions de vos lecteurs, avec des réponses claires et extractibles. C'est exactement ce qu'on détaille dans un prochain article de cette série, à partir de données réelles de Search Console.",
  },
]

export const metadata: Metadata = {
  title: 'Rapport IA générative dans Google Search Console : comment le lire (et pourquoi il ne dit encore rien en France)',
  openGraph: {
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  description: "Google a lancé un nouveau rapport dans Search Console pour mesurer sa visibilité dans les réponses IA. Voici ce qu'il contient, ce qu'il ne montre pas encore, et pourquoi les sites français voient si peu de données.",
}

export default function Page() {
  return (
    <>
      <SchemaRenderer schema={blogPostingSchema(post, { image: ogImage, faq })} />
      <RapportIaGenerativeGscContent />
    </>
  )
}
