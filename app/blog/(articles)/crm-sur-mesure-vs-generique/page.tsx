import type { Metadata } from 'next'
import { CrmSurMesureVsGeneriqueContent } from './_content'

export const metadata: Metadata = {
  title: "CRM sur mesure vs logiciel générique : ce que ça change en pratique",
  openGraph: {
    images: [{ url: '/api/og?title=CRM+sur+mesure+vs+logiciel+g%C3%A9n%C3%A9rique+%3A+ce+que+%C3%A7a+change+en+pratique&category=crm', width: 1200, height: 630 }],
  },
  description: "Custom CRM vs Salesforce: which actually pays for itself (cost breakdown)",
}

export default function Page() {
  return <CrmSurMesureVsGeneriqueContent />
}
