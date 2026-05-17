import type { Metadata } from 'next'
import { CrmSurMesureVsGeneriqueContent } from './_content'

export const metadata: Metadata = {
  title: "CRM sur mesure vs logiciel générique : ce que ça change en pratique",
  description: "Salesforce, HubSpot, Pipedrive couvrent 80 % des besoins. Le sur mesure couvre les 20 % qui font la différence pour votre métier. Voici comment choisir.",
}

export default function Page() {
  return <CrmSurMesureVsGeneriqueContent />
}
