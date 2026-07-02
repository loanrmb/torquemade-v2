import type { Metadata } from 'next'
import { LogicielCaisseEcommerceToutEnUnContent } from './_content'

export const metadata: Metadata = {
  title: "La connexion caisse / e-commerce : et si le problème venait du logiciel lui-même ?",
  openGraph: {
    images: [{ url: '/api/og?title=La+connexion+caisse+%2F+e-commerce+%3A+et+si+le+probl%C3%A8me+venait+du+logiciel+lui-m%C3%AAme+%3F&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Plateformes unifiées caisse + e-commerce : comment elles éliminent le problème de synchronisation à la source, et les vraies contraintes d'une migration (coûts, écosystème, NF525).",
}

export default function Page() {
  return <LogicielCaisseEcommerceToutEnUnContent />
}
