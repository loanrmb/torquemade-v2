import type { Metadata } from 'next'
import { SiteWebMeilleurCommercialContent } from './_content'

export const metadata: Metadata = {
  title: "Pourquoi votre site web est votre meilleur commercial en 2025",
  description: "Un commercial travaille 8h par jour. Votre site web travaille 24h/24, 7j/7, sans charges sociales. Voici comment en faire un vrai moteur de croissance.",
}

export default function Page() {
  return <SiteWebMeilleurCommercialContent />
}
