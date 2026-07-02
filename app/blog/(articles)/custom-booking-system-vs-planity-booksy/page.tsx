import type { Metadata } from 'next'
import { CustomBookingSystemContent } from './_content'

export const metadata: Metadata = {
  title: "Stop Paying Commission-Based Booking Systems: Build Your Own",
  openGraph: {
    images: [{ url: '/api/og?title=Stop+Paying+Commission-Based+Booking+Systems%3A+Build+Your+Own&category=crm', width: 1200, height: 630 }],
  },
  description: "Booking platforms take 1-3% per reservation. A custom booking system integrates with your site, keeps 100% of revenue, and costs less.",
}

export default function Page() {
  return <CustomBookingSystemContent />
}
