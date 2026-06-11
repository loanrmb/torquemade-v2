import type { Metadata } from 'next'
import { CustomBookingSystemContent } from './_content'

export const metadata: Metadata = {
  title: "Stop Paying Commission-Based Booking Systems: Build Your Own",
  description: "Booking platforms take 1-3% per reservation. A custom booking system integrates with your site, keeps 100% of revenue, and costs less.",
}

export default function Page() {
  return <CustomBookingSystemContent />
}
