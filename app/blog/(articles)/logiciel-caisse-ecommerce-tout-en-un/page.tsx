import type { Metadata } from 'next'
import { LogicielCaisseEcommerceToutEnUnContent } from './_content'

export const metadata: Metadata = {
  title: "La connexion caisse / e-commerce : et si le problème venait du logiciel lui-même ?",
  description: "Plateformes unifiées caisse + e-commerce : comment elles éliminent le problème de synchronisation à la source, et les vraies contraintes d'une migration (coûts, écosystème, NF525).",
}

export default function Page() {
  return <LogicielCaisseEcommerceToutEnUnContent />
}
