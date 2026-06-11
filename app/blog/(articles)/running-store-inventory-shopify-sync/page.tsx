import type { Metadata } from 'next'
import { RunningStoreInventorySyncContent } from './_content'

export const metadata: Metadata = {
  title: "Real-Time Stock Sync: Running Store Inventory to Shopify",
  description: "Running stores with both in-store + online sales lose sales to overselling. Here's how real-time inventory sync fixes that.",
}

export default function Page() {
  return <RunningStoreInventorySyncContent />
}
