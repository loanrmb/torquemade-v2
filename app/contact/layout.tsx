import type { Metadata } from 'next'
import { siteUrl } from '@/lib/site'

/**
 * app/contact/page.tsx is a client component (contact form + useLang), so it
 * can't export `metadata` itself — without this layout the page silently
 * inherits the homepage title/description from the root layout.
 */
const url = siteUrl('/contact')
const title = 'Contact : parlons de votre projet | Torquemade'
const description =
  'Studio web à Bordeaux. Décrivez votre projet, nous revenons vers vous sous 24h. Sites sur mesure, CRM, connexion ERP.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Torquemade',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
