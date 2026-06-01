import type { Metadata } from 'next'
import { MentionsLegalesContent } from './_content'

export const metadata: Metadata = {
  title: 'Mentions légales — Torquemade',
  description:
    'Mentions légales du site torquemade.com, édité par REMBEAU Loan, développeur web indépendant basé à Bordeaux.',
}

export default function Page() {
  return <MentionsLegalesContent />
}
