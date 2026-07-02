import type { Metadata } from 'next'
import { InventorySoftwareCustomFitContent } from './_content'

export const metadata: Metadata = {
  title: "Off-the-Shelf Inventory Software Doesn't Fit Your Workflow",
  openGraph: {
    images: [{ url: '/api/og?title=Off-the-Shelf+Inventory+Software+Doesn%27t+Fit+Your+Workflow&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Generic inventory software solves 80% of problems. Your business isn't generic. Here's why custom makes sense.",
}

export default function Page() {
  return <InventorySoftwareCustomFitContent />
}
