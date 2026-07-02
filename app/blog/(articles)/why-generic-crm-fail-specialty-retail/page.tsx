import type { Metadata } from 'next'
import { WhyGenericCrmFailContent } from './_content'

export const metadata: Metadata = {
  title: "Why Generic CRMs Fail Specialty Retailers (Custom Works Better)",
  openGraph: {
    images: [{ url: '/api/og?title=Why+Generic+CRMs+Fail+Specialty+Retailers+%28Custom+Works+Better%29&category=crm', width: 1200, height: 630 }],
  },
  description: "Generic CRMs aren't built for specialty shops. Here's why custom CRM software pays for itself within months.",
}

export default function Page() {
  return <WhyGenericCrmFailContent />
}
