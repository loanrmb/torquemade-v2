import { Metadata } from 'next'
import { strings } from '@/lib/strings'
import { SchemaRenderer } from '@/components/schema-renderer'
import { serviceSchema } from '@/lib/schema'
import { siteUrl } from '@/lib/site'

const meta = strings.fr.meta.erp
const url = siteUrl('/services/erp-ecommerce')

const schema = serviceSchema({
  name: 'Synchronisation ERP ↔ E-commerce',
  serviceType: 'ERP to e-commerce inventory synchronization',
  slug: 'erp-ecommerce',
  description: meta.description,
  faq: strings.fr.erp.faq,
})

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: url },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url,
    siteName: 'Torquemade',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
  },
}

export default function ErpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaRenderer schema={schema} />
      {children}
    </>
  )
}
