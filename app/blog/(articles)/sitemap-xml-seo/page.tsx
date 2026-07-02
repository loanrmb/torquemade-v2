import type { Metadata } from 'next'
import { SitemapXmlSeoContent } from './_content'

export const metadata: Metadata = {
  title: "Sitemap.xml : pourquoi c'est indispensable et comment le générer",
  openGraph: {
    images: [{ url: '/api/og?title=Sitemap.xml+%3A+pourquoi+c%27est+indispensable+et+comment+le+g%C3%A9n%C3%A9rer&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "Un sitemap.xml bien configuré aide Google à explorer votre site efficacement. Voici pourquoi c'est indispensable et comment le générer correctement en 2025.",
}

export default function Page() {
  return <SitemapXmlSeoContent />
}
