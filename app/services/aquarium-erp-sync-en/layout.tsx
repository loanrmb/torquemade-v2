import { Metadata } from 'next'
import { strings } from '@/lib/strings'
import { SchemaRenderer } from '@/components/schema-renderer'
import { serviceSchema } from '@/lib/schema'
import { siteUrl } from '@/lib/site'

const meta = strings.en.meta.aquariumEn
const url = siteUrl('/services/aquarium-erp-sync-en')
// French-market counterpart (page #1). Paired via hreflang so search engines
// treat the two as language variants, not competing pages.
const frUrl = siteUrl('/services/aquarium-erp-sync-quebec')

const schema = serviceSchema({
  name: 'Coral & livestock inventory sync for aquarium shops',
  serviceType: 'Aquarium POS to e-commerce inventory synchronization',
  slug: 'aquarium-erp-sync-en',
  description: meta.description,
})

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: url,
    languages: {
      'en-CA': url,
      'fr-CA': frUrl,
      'x-default': url,
    },
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url,
    siteName: 'Torquemade',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
  },
}

export default function AquariumEnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaRenderer schema={schema} />
      {children}
    </>
  )
}
