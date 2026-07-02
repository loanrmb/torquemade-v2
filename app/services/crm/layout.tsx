import { Metadata } from 'next'
import { strings } from '@/lib/strings'

const meta = strings.fr.meta.crm
const url = 'https://torquemade.com/services/crm'

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
  return children
}
