import { Metadata } from 'next'
import { strings } from '@/lib/strings'
import { SchemaRenderer } from '@/components/schema-renderer'
import { serviceSchema } from '@/lib/schema'
import { siteUrl } from '@/lib/site'

const meta = strings.fr.meta.aquariumQc
const url = siteUrl('/services/aquarium-erp-sync-quebec')
// English-market counterpart (page #2). Paired via hreflang so search engines
// treat the two as language variants, not competing pages.
const enUrl = siteUrl('/services/aquarium-erp-sync-en')

const schema = serviceSchema({
  name: 'Synchronisation stock aquariophilie ↔ e-commerce (Québec)',
  serviceType: 'Aquarium POS to e-commerce inventory synchronization',
  slug: 'aquarium-erp-sync-quebec',
  description: meta.description,
})

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: url,
    languages: {
      'fr-CA': url,
      'en-CA': enUrl,
      'x-default': enUrl,
    },
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url,
    siteName: 'Torquemade',
    locale: 'fr_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
  },
}

export default function AquariumQcLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaRenderer schema={schema} />
      {children}
    </>
  )
}
