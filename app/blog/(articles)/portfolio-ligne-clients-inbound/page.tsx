import type { Metadata } from 'next'
import { PortfolioLigneClientsInboundContent } from './_content'

export const metadata: Metadata = {
  title: "Comment un portfolio en ligne attire des clients sans prospecter",
  description: "Un portfolio bien construit est une machine à leads entrants. Voici comment transformer vos réalisations passées en arguments qui convainquent de nouveaux clients.",
}

export default function Page() {
  return <PortfolioLigneClientsInboundContent />
}
