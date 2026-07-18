import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/schema-renderer'
import { blogPostingSchema } from '@/lib/schema'
import { posts } from '@/lib/blog'
import { EtudeCasQuatreSitesContent } from './_content'

const ogImage = '/api/og?title=%C3%89tude+de+cas+%3A+4+sites+cit%C3%A9s+par+Google+IA+g%C3%A9n%C3%A9rative+avant+l%27arriv%C3%A9e+du+mod%C3%A8le+en+France&category=SEO+%26+Contenu'
const post = posts.find((p) => p.slug === 'etude-de-cas-4-sites-cites-google-ia-generative-avant-france')!

// FAQ sourced word-for-word from the FR strings rendered in _content.tsx.
const faq = [
  {
    q: 'Ces sites ont-ils été optimisés spécifiquement pour l\'IA générative ?',
    a: "Non. Aucun des quatre n'a été refait ou réécrit spécifiquement pour être cité par l'IA. Leur contenu était déjà structuré autour de réponses claires et directes à des questions précises, le type de structure qui a toujours servi le SEO classique. Cette structure s'avère être exactement ce que l'IA générative de Google extrait et cite.",
  },
  {
    q: "Pourquoi une seule page capte-t-elle autant d'impressions sur certains sites ?",
    a: "Sur trois des quatre sites, un article répond à une question précise de manière assez complète pour devenir le passage clair et extractible pour cette question, donc il est repris dans la réponse IA bien plus souvent que les autres pages. C'est un effet de concentration, pas un hasard : la page qui répond le plus directement à une question absorbe généralement la majorité des citations qui s'y rapportent.",
  },
  {
    q: 'Ces impressions se traduisent-elles en visites ?',
    a: "Ça ne peut pas encore être mesuré directement. Le rapport Performance IA générative mesure aujourd'hui des impressions, pas des clics spécifiquement rattachés aux réponses IA, une limite que nous détaillons dans notre article sur ce rapport.",
  },
  {
    q: 'Mon site peut-il obtenir les mêmes résultats ?',
    a: "Le schéma se répète sur quatre sites indépendants et de secteurs différents, ce qui suggère que ce n'est pas un coup de chance. Structurer vos pages les plus fortes autour de réponses directes, selon notre checklist, est le point de départ concret. Les résultats apparaîtront probablement d'abord sur le trafic international, puisque le déploiement des AI Overviews en France n'a pas encore eu lieu.",
  },
]

export const metadata: Metadata = {
  title: "Étude de cas : 4 sites cités par Google IA générative avant l'arrivée du modèle en France",
  openGraph: {
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  description: 'Quatre sites, quatre profils différents, un même signal : ils sont déjà cités dans les réponses IA générative de Google, avant même le déploiement du modèle en France.',
}

export default function Page() {
  return (
    <>
      <SchemaRenderer schema={blogPostingSchema(post, { image: ogImage, faq })} />
      <EtudeCasQuatreSitesContent />
    </>
  )
}
