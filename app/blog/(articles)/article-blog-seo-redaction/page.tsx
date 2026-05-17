import type { Metadata } from 'next'
import { ArticleBlogSeoContent } from './_content'

export const metadata: Metadata = {
  title: "Qu'est-ce qu'un article de blog SEO et comment en écrire un qui classe ?",
  description: "Un article de blog SEO n'est pas un article de blog ordinaire. Voici exactement comment le structurer, le rédiger et l'optimiser pour qu'il remonte sur Google.",
}

export default function Page() {
  return <ArticleBlogSeoContent />
}
