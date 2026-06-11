import type { Metadata } from 'next'
import { StockUpdatesContent } from './_content'

export const metadata: Metadata = {
  title: "Stock Updates Should Be Instant, Not Spreadsheets",
  description: "Manual inventory updates are slow and error-prone. Automated real-time sync costs less than you think.",
}

export default function Page() {
  return <StockUpdatesContent />
}
