import type { Metadata } from 'next'
import { StockMotoEnLigneConversionContent } from './_content'

export const metadata: Metadata = {
  title: "Comment présenter son stock de motos en ligne pour convertir",
  description: "Un stock bien présenté en ligne transforme les visiteurs en acheteurs. Voici comment structurer vos fiches motos pour qu'elles convainquent avant même la visite.",
}

export default function Page() {
  return <StockMotoEnLigneConversionContent />
}
