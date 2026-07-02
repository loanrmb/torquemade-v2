/**
 * JSON-LD builders. Rendered unconditionally (for every request) via
 * `components/schema-renderer.tsx` — never gated on User-Agent.
 */

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
 * Per-service page graph: a detailed Service node (linked back to the org) plus
 * a BreadcrumbList (Home → Services → this service).
 */
export function serviceSchema(opts: {
  name: string
  serviceType: string
  slug: string
  description: string
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
    ],
  }
}
