import type { Metadata } from 'next'
import { ConnecterCaisseSiteEcommerceGuideContent } from './_content'

export const metadata: Metadata = {
  title: "Connecter sa caisse à son site e-commerce : ce que tout commerçant doit savoir avant de se lancer",
  openGraph: {
    images: [{ url: '/api/og?title=Connecter+sa+caisse+%C3%A0+son+site+e-commerce+%3A+ce+que+tout+commer%C3%A7ant+doit+savoir+avant+de+se+lancer&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Les grandes familles de solutions pour relier un logiciel de caisse à un site marchand, leurs conditions et leurs risques. Un guide honnête pour franchisés et indépendants.",
}

export default function Page() {
  return <ConnecterCaisseSiteEcommerceGuideContent />
}
