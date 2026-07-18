/**
 * JSON-LD builders. Rendered unconditionally (for every request) via
 * `components/schema-renderer.tsx` — never gated on User-Agent.
 */

import { strings } from '@/lib/strings'

export const SITE_URL = 'https://torquemade.com'
export const ORG_ID = `${SITE_URL}/#organization`

/**
 * Organization + Service graph. Global — rendered once from the root layout so
 * every page (including the homepage) carries it.
 */
export const organizationGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
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
      provider: { '@id': ORG_ID },
    },
    {
      '@type': 'Service',
      name: 'Custom CRM',
      serviceType: 'Custom CRM software',
      url: `${SITE_URL}/services/crm`,
      provider: { '@id': ORG_ID },
    },
    {
      '@type': 'Service',
      name: 'ERP ↔ E-commerce Sync',
      serviceType: 'ERP to e-commerce inventory synchronization',
      url: `${SITE_URL}/services/erp-ecommerce`,
      provider: { '@id': ORG_ID },
    },
  ],
}

/**
 * TankLogic product page graph (/tanklogic): Service node linked back to the
 * org, plus a BreadcrumbList (Home → TankLogic). Rendered server-side from
 * app/tanklogic/page.tsx so it is present in the initial HTML.
 *
 * URL uses the www host to match the page's canonical
 * (https://www.torquemade.com/tanklogic).
 */
const TANKLOGIC_URL = 'https://www.torquemade.com/tanklogic'

export const tanklogicSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${TANKLOGIC_URL}/#service`,
      name: 'TankLogic',
      serviceType:
        'Inventory synchronization and chargeback evidence software for live fish and coral retailers',
      description:
        'TankLogic syncs unique-specimen (WYSIWYG) inventory to the online store in real time: one record per fish or coral, mortality removes the exact unit from sale. It manages orders and supplier/species analytics, and automatically assembles the packing-photo, QR delivery-proof and timestamp evidence file used to dispute DOA chargebacks. Built for mail-order live fish and coral shops.',
      url: TANKLOGIC_URL,
      provider: { '@id': ORG_ID },
      audience: {
        '@type': 'BusinessAudience',
        name: 'Mail-order live fish and coral retailers',
      },
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'France' },
        { '@type': 'Country', name: 'Switzerland' },
        { '@type': 'Country', name: 'Belgium' },
      ],
      availableLanguage: ['fr', 'en'],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'TankLogic', item: TANKLOGIC_URL },
      ],
    },
    /* FAQPage — sourced word-for-word from the FR strings rendered in the
       visible FAQ accordion on /tanklogic (Google rule: markup must mirror
       on-page content; FR is the server-rendered default language). */
    {
      '@type': 'FAQPage',
      '@id': `${TANKLOGIC_URL}/#faq`,
      mainEntity: strings.fr.tanklogic.faq.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
}

/**
 * BlogPosting schema for a blog article, built from its lib/blog.ts entry.
 *
 * Each article URL serves both FR and EN variants of the same content (the
 * language is toggled client-side via useLang, FR being the server-rendered
 * default), so `inLanguage` declares both languages and the EN title is kept
 * as `alternativeHeadline`. Rendered server-side from the article's page.tsx.
 */
export function blogPostingSchema(post: {
  slug: string
  title: { fr: string; en: string }
  description: { fr: string; en: string }
  publishedAt: string
  updatedAt?: string
}, opts?: {
  image?: string
  /** Optional FAQPage entity, sourced word-for-word from the FR strings
   *  rendered in the visible FAQ section of the article (Google rule: markup
   *  must mirror on-page content; FR is the server-rendered default language). */
  faq?: readonly { q: string; a: string }[]
}) {
  const url = `https://www.torquemade.com/blog/${post.slug}`
  const blogPosting = {
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: post.title.fr,
    alternativeHeadline: post.title.en,
    description: post.description.fr,
    url,
    inLanguage: ['fr', 'en'],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Loan Rembeau',
      url: SITE_URL,
    },
    publisher: { '@id': ORG_ID },
    ...(opts?.image
      ? { image: opts.image.startsWith('http') ? opts.image : `https://www.torquemade.com${opts.image}` }
      : {}),
  }

  if (!opts?.faq) {
    return { '@context': 'https://schema.org', ...blogPosting }
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      blogPosting,
      {
        '@type': 'FAQPage',
        '@id': `${url}/#faq`,
        mainEntity: opts.faq.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  }
}

/**
 * Per-service page graph: a detailed Service node (linked back to the org) plus
 * a BreadcrumbList (Home → Services → this service).
 */
export function serviceSchema(opts: {
  name: string
  serviceType: string
  slug: string
  description: string
  /** Optional FAQPage entity, sourced word-for-word from the FR strings
   *  rendered in the visible FAQ accordion on the page (Google rule: markup
   *  must mirror on-page content; FR is the server-rendered default language). */
  faq?: readonly { q: string; a: string }[]
}) {
  const url = `${SITE_URL}/services/${opts.slug}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: opts.name,
        serviceType: opts.serviceType,
        description: opts.description,
        url,
        provider: { '@id': ORG_ID },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Country', name: 'Switzerland' },
          { '@type': 'Country', name: 'Belgium' },
          { '@type': 'Country', name: 'United States' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${SITE_URL}/services`,
          },
          { '@type': 'ListItem', position: 3, name: opts.name, item: url },
        ],
      },
      ...(opts.faq
        ? [
            {
              '@type': 'FAQPage',
              '@id': `${url}/#faq`,
              mainEntity: opts.faq.map(({ q, a }) => ({
                '@type': 'Question',
                name: q,
                acceptedAnswer: { '@type': 'Answer', text: a },
              })),
            },
          ]
        : []),
    ],
  }
}
