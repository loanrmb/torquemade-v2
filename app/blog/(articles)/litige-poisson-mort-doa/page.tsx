import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/schema-renderer'
import { blogPostingSchema } from '@/lib/schema'
import { posts } from '@/lib/blog'
import { LitigePoissonMortDoaContent } from './_content'

const ogImage = '/api/og?title=Comment+remporter+un+litige+pour+un+poisson+mort+%C3%A0+la+livraison&category=ERP+%26+Gestion+de+stock'
const post = posts.find((p) => p.slug === 'litige-poisson-mort-doa')!

// FAQ sourced word-for-word from the FR strings rendered in _content.tsx.
const faq = [
  {
    q: 'Qui paie les frais de retour ?',
    a: "Sur un animal mort à la livraison, il n'y a en général rien à retourner physiquement : la preuve remplace le retour. La question des frais se règle plutôt sur le remplacement ou le remboursement, selon ce qui est écrit dans vos conditions de vente et selon que la cause est identifiée comme un défaut au départ ou un incident de transport.",
  },
  {
    q: 'Un logiciel peut-il générer automatiquement les preuves pour un litige DOA ?',
    a: "Oui, à condition que la capture de preuve soit intégrée au workflow d'expédition plutôt qu'ajoutée après coup. Un système comme TankLogic horodate automatiquement la photo, la remise au transporteur et la livraison à chaque étape de manutention, puis assemble ces éléments en un PDF prêt à transmettre, ce qui remplace la reconstitution manuelle sous pression au moment du litige.",
  },
  {
    q: "Que faire si je n'ai pas pris de photo avant l'envoi ?",
    a: "Sans photo horodatée, le dossier repose uniquement sur la preuve de livraison et les échanges avec le client, ce qui est nettement plus faible. C'est précisément la raison pour laquelle la capture doit être automatique et systématique, pas une étape qu'on pense à faire au cas par cas.",
  },
  {
    q: 'La preuve de livraison seule suffit-elle à gagner un litige ?',
    a: "Non. Une preuve de livraison confirme que quelque chose est arrivé, pas dans quel état c'était au départ. Sans photo ou vidéo horodatée avant l'envoi, l'examinateur ne peut pas établir si l'animal était vivant au moment où il a quitté le vendeur, ce qui est justement le cœur du litige.",
  },
]

export const metadata: Metadata = {
  title: 'Comment remporter un litige pour un poisson mort à la livraison',
  openGraph: {
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  description: "Gagner un litige DOA sur un poisson mort à la livraison se joue sur la preuve réunie avant l'envoi. Ce que Stripe et Square exigent réellement, et comment l'automatiser.",
}

export default function Page() {
  return (
    <>
      <SchemaRenderer schema={blogPostingSchema(post, { image: ogImage, faq })} />
      <LitigePoissonMortDoaContent />
    </>
  )
}
