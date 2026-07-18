import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/schema-renderer'
import { blogPostingSchema } from '@/lib/schema'
import { posts } from '@/lib/blog'
import { AiOverviewsFranceChecklistContent } from './_content'

const ogImage = '/api/og?title=AI+Overviews+arrivent+en+France+avant+septembre+2026+%3A+ce+qu%27il+faut+avoir+fait+avant&category=SEO+%26+Contenu'
const post = posts.find((p) => p.slug === 'ai-overviews-france-checklist-avant-deploiement')!

// FAQ sourced word-for-word from the FR strings rendered in _content.tsx.
const faq = [
  {
    q: 'Quand les AI Overviews seront-ils disponibles en France ?',
    a: "Google n'a pas communiqué de date exacte, mais le déploiement en France est attendu avant septembre 2026. Le Royaume-Uni, la Belgique et le Maroc reçoivent déjà des réponses génératives IA sur les requêtes en français ou en anglais, la France reste l'un des derniers grands marchés à ne pas encore montrer de volume significatif dans le rapport IA générative de Search Console.",
  },
  {
    q: 'Faut-il refaire tout son contenu avant le déploiement ?',
    a: "Non. Identifiez les pages qui répondent déjà à une question explicite et mettez-les en conformité avec la checklist (réponse en premier, hiérarchie de titres propre, schema FAQ le cas échéant). Retravailler l'intégralité du site serait une perte de temps : concentrez l'effort sur le contenu qui a le potentiel d'être cité.",
  },
  {
    q: 'Le llms.txt est-il obligatoire ?',
    a: "Non, ce n'est pas un standard reconnu officiellement par Google ni par les autres moteurs IA. Mais c'est une pratique qui ne coûte rien à mettre en place et qui clarifie l'accès de vos contenus aux robots IA. Ça ne remplace pas un contenu bien structuré, ça le complète.",
  },
  {
    q: "Comment savoir si mon site est déjà cité par l'IA de Google ?",
    a: "Le rapport IA générative dans Google Search Console montre les impressions générées par les réponses IA de Google pour votre site, y compris sur les marchés hors France si vous avez du trafic international. Nous expliquons comment le lire dans un précédent article.",
  },
]

export const metadata: Metadata = {
  title: "AI Overviews arrivent en France avant septembre 2026 : ce qu'il faut avoir fait avant",
  openGraph: {
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  description: "Google déploiera les AI Overviews en France avant septembre 2026. Voici la checklist concrète pour que votre contenu soit prêt à être cité.",
}

export default function Page() {
  return (
    <>
      <SchemaRenderer schema={blogPostingSchema(post, { image: ogImage, faq })} />
      <AiOverviewsFranceChecklistContent />
    </>
  )
}
