import type { Metadata } from 'next'
import { IaCreationContenuAuthenticiteContent } from './_content'

export const metadata: Metadata = {
  title: "IA et création de contenu : comment l'utiliser sans perdre son authenticité",
  openGraph: {
    images: [{ url: '/api/og?title=IA+et+cr%C3%A9ation+de+contenu+%3A+comment+l%27utiliser+sans+perdre+son+authenticit%C3%A9&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "L'IA peut accélérer la création de contenu. Mais utilisée sans discernement, elle produit du générique que Google et vos clients reconnaissent. Voici comment éviter ça.",
}

export default function Page() {
  return <IaCreationContenuAuthenticiteContent />
}
