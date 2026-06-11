import type { Metadata } from 'next'
import { CrmSurMesureVsGeneriqueContent } from './_content'

export const metadata: Metadata = {
  title: "CRM sur mesure vs logiciel générique : ce que ça change en pratique",
  description: "Custom CRM vs Salesforce: which actually pays for itself (cost breakdown)",
}

export default function Page() {
  return <CrmSurMesureVsGeneriqueContent />
}
