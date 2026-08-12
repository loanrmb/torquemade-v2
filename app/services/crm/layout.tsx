import { Metadata } from 'next'
import { strings } from '@/lib/strings'
import { SchemaRenderer } from '@/components/schema-renderer'
import { serviceSchema } from '@/lib/schema'
import { siteUrl } from '@/lib/site'

const meta = strings.fr.meta.crm
const url = siteUrl('/services/crm')

const schema = serviceSchema({
  name: 'CRM sur mesure',
  serviceType: 'Custom CRM software',
  slug: 'crm',
  description: meta.description,
  faq: strings.fr.crm.faq,
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

export default function CrmLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaRenderer schema={schema} />
      {children}
    </>
  )
}
