import type { Metadata } from 'next'
import { RunningStoreInventorySyncContent } from './_content'

export const metadata: Metadata = {
  title: "Real-Time Stock Sync: Running Store Inventory to Shopify",
  openGraph: {
    images: [{ url: '/api/og?title=Real-Time+Stock+Sync%3A+Running+Store+Inventory+to+Shopify&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Running stores with both in-store + online sales lose sales to overselling. Here's how real-time inventory sync fixes that.",
}

export default function Page() {
  return <RunningStoreInventorySyncContent />
}
