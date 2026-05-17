import type { Metadata } from 'next'
import { CrmTpePmeContent } from './_content'

export const metadata: Metadata = {
  title: "Qu'est-ce qu'un CRM et pourquoi chaque TPE/PME en a besoin ?",
  description: "Un CRM ne sert pas qu'aux grandes entreprises. Pour une TPE ou une PME, c'est l'outil qui centralise les clients, automatise les relances et évite les oublis.",
}

export default function Page() {
  return <CrmTpePmeContent />
}
