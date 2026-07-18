import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { AppProvider } from '@/components/app-provider'
import { SchemaRenderer } from '@/components/schema-renderer'
import { organizationGraph } from '@/lib/schema'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://torquemade.com'),
  title: 'Torquemade: Web Dev & CRM sur mesure',
  description:
    'Studio de développement web et CRM sur mesure. Sites Shopify et Next.js, logiciels de réservation, SEO et optimisation IA.',
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
  openGraph: {
    title: 'Torquemade: Web Dev & CRM sur mesure',
    description:
      'Studio de développement web et CRM sur mesure. Sites Shopify et Next.js, logiciels de réservation, SEO et optimisation IA.',
    url: 'https://torquemade.com',
    siteName: 'Torquemade',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Torquemade: Web Dev & CRM sur mesure',
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
        <SchemaRenderer schema={organizationGraph} />
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
