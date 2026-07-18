import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/schema-renderer'
import { tanklogicSchema } from '@/lib/schema'
import { TankLogicContent } from './_content'

const url = 'https://www.torquemade.com/tanklogic'

export const metadata: Metadata = {
  title: 'TankLogic: Inventory software for live fish & coral shops | Torquemade',
  description:
    'TankLogic gives live fish and coral retailers serialized WYSIWYG inventory, real-time online-store sync down to the individual mortality, orders, analytics, and the delivery-proof evidence file that fights DOA chargebacks.',
  alternates: { canonical: url },
  openGraph: {
    title: 'TankLogic: Inventory software for live fish & coral shops',
    description:
      'Serialized WYSIWYG inventory, real-time online-store sync, and DOA chargeback evidence for mail-order live fish and coral sellers.',
    url,
    siteName: 'Torquemade',
    type: 'website',
    images: [{ url: '/api/og?title=TankLogic&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TankLogic: Inventory software for live fish & coral shops',
    description:
      'Serialized WYSIWYG inventory, real-time online-store sync, and DOA chargeback evidence for mail-order live fish and coral sellers.',
  },
}

export default function Page() {
  return (
    <>
      <SchemaRenderer schema={tanklogicSchema} />
      <TankLogicContent />
    </>
  )
}
