import type { Metadata } from 'next'
import { StockUpdatesContent } from './_content'

export const metadata: Metadata = {
  title: "Stock Updates Should Be Instant, Not Spreadsheets",
  openGraph: {
    images: [{ url: '/api/og?title=Stock+Updates+Should+Be+Instant%2C+Not+Spreadsheets&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Manual inventory updates are slow and error-prone. Automated real-time sync costs less than you think.",
}

export default function Page() {
  return <StockUpdatesContent />
}
