import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/schema-renderer'
import { blogPostingSchema } from '@/lib/schema'
import { posts } from '@/lib/blog'
import { ProuverPoissonArriveVivantContent } from './_content'

const ogImage = '/api/og?title=Prouver+qu%27un+poisson+est+arriv%C3%A9+vivant+pour+contester+une+r%C3%A9trofacturation&category=ERP+%26+Gestion+de+stock'
const post = posts.find((p) => p.slug === 'prouver-poisson-arrive-vivant-retrofacturation')!

export const metadata: Metadata = {
  title: "Comment prouver qu'un poisson est arrivé vivant pour contester une rétrofacturation ?",
  openGraph: {
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  description: "Gagner une contestation de rétrofacturation sur un animal vivant se joue sur la preuve. Voici le dossier numérique (fiche spécimen, photo d'emballage, preuve de livraison) à constituer automatiquement.",
}

export default function Page() {
  return (
    <>
      <SchemaRenderer schema={blogPostingSchema(post, { image: ogImage })} />
      <ProuverPoissonArriveVivantContent />
    </>
  )
}
