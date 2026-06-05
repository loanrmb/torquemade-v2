import type { Metadata } from 'next'
import { ConnecterCaisseSiteEcommerceGuideContent } from './_content'

export const metadata: Metadata = {
  title: "Connecter sa caisse à son site e-commerce : ce que tout commerçant doit savoir avant de se lancer",
  description: "Les grandes familles de solutions pour relier un logiciel de caisse à un site marchand, leurs conditions et leurs risques. Un guide honnête pour franchisés et indépendants.",
}

export default function Page() {
  return <ConnecterCaisseSiteEcommerceGuideContent />
}
