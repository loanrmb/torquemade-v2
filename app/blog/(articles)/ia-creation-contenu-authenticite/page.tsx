import type { Metadata } from 'next'
import { IaCreationContenuAuthenticiteContent } from './_content'

export const metadata: Metadata = {
  title: "IA et création de contenu : comment l'utiliser sans perdre son authenticité",
  description: "L'IA peut accélérer la création de contenu. Mais utilisée sans discernement, elle produit du générique que Google et vos clients reconnaissent. Voici comment éviter ça.",
}

export default function Page() {
  return <IaCreationContenuAuthenticiteContent />
}
