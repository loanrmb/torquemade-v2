import type { Metadata } from 'next'
import { SitemapXmlSeoContent } from './_content'

export const metadata: Metadata = {
  title: "Sitemap.xml : pourquoi c'est indispensable et comment le générer",
  description: "Un sitemap.xml bien configuré aide Google à explorer votre site efficacement. Voici pourquoi c'est indispensable et comment le générer correctement en 2025.",
}

export default function Page() {
  return <SitemapXmlSeoContent />
}
