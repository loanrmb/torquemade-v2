import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { AppProvider } from '@/components/app-provider'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
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

const SITE_URL = 'https://torquemade.com'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Torquemade',
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.svg`,
      founder: { '@type': 'Person', name: 'Loan Rembeau' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bordeaux',
        addressRegion: 'Nouvelle-Aquitaine',
        addressCountry: 'FR',
      },
      areaServed: [
        { '@type': 'Country', name: 'France' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'Switzerland' },
        { '@type': 'Country', name: 'Belgium' },
        { '@type': 'Country', name: 'United States' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Web Development',
      serviceType: 'Web development',
      url: `${SITE_URL}/services/web-dev`,
      provider: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'Service',
      name: 'Custom CRM',
      serviceType: 'Custom CRM software',
      url: `${SITE_URL}/services/crm`,
      provider: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'Service',
      name: 'ERP ↔ E-commerce Sync',
      serviceType: 'ERP to e-commerce inventory synchronization',
      url: `${SITE_URL}/services/erp-ecommerce`,
      provider: { '@id': `${SITE_URL}/#organization` },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <AppProvider>
          {children}
        </AppProvider>
        {/* Reveal script: runs before React hydration so above-the-fold
            `.fade-up` content paints immediately (fast LCP). Below-the-fold +
            client-side navigations are handled by useScrollReveal. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;document.documentElement.classList.add('js-reveal');var vh=window.innerHeight||document.documentElement.clientHeight;var els=document.querySelectorAll('.fade-up');for(var i=0;i<els.length;i++){if(els[i].getBoundingClientRect().top<vh)els[i].classList.add('is-visible');}}catch(e){}})();`,
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
