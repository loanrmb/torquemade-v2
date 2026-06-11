import type { Metadata } from 'next'
import { InventorySoftwareCustomFitContent } from './_content'

export const metadata: Metadata = {
  title: "Off-the-Shelf Inventory Software Doesn't Fit Your Workflow",
  description: "Generic inventory software solves 80% of problems. Your business isn't generic. Here's why custom makes sense.",
}

export default function Page() {
  return <InventorySoftwareCustomFitContent />
}
