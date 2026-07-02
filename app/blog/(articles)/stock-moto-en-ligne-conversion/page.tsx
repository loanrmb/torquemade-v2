import type { Metadata } from 'next'
import { StockMotoEnLigneConversionContent } from './_content'

export const metadata: Metadata = {
  title: "Comment présenter son stock de motos en ligne pour convertir",
  openGraph: {
    images: [{ url: '/api/og?title=Comment+pr%C3%A9senter+son+stock+de+motos+en+ligne+pour+convertir', width: 1200, height: 630 }],
  },
  description: "Un stock bien présenté en ligne transforme les visiteurs en acheteurs. Voici comment structurer vos fiches motos pour qu'elles convainquent avant même la visite.",
}

export default function Page() {
  return <StockMotoEnLigneConversionContent />
}
