import type { Metadata } from 'next'
import { ArticleBlogSeoContent } from './_content'

export const metadata: Metadata = {
  title: "Qu'est-ce qu'un article de blog SEO et comment en écrire un qui classe ?",
  openGraph: {
    images: [{ url: '/api/og?title=Qu%27est-ce+qu%27un+article+de+blog+SEO+et+comment+en+%C3%A9crire+un+qui+classe+%3F&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "Un article de blog SEO n'est pas un article de blog ordinaire. Voici exactement comment le structurer, le rédiger et l'optimiser pour qu'il remonte sur Google.",
}

export default function Page() {
  return <ArticleBlogSeoContent />
}
