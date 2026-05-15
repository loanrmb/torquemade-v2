import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { AppProvider } from '@/components/app-provider'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Torquemade — Web Dev & CRM sur mesure',
  description:
    'Studio de développement web et CRM sur mesure. Sites Shopify et Next.js, logiciels de réservation, SEO et optimisation IA.',
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
  openGraph: {
    title: 'Torquemade — Web Dev & CRM sur mesure',
    description:
      'Studio de développement web et CRM sur mesure. Sites Shopify et Next.js, logiciels de réservation, SEO et optimisation IA.',
    url: 'https://torquemade.com',
    siteName: 'Torquemade',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Torquemade — Web Dev & CRM sur mesure',
    description: 'Studio de développement web et CRM sur mesure.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="isolate flex flex-col bg-bg-primary text-text-secondary font-sans">
        <AppProvider>
          {children}
        </AppProvider>
        <Analytics />
      </body>
    </html>
  )
}
