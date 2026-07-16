/**
 * Icon set for SeoFeatureCarousel (/services/web-dev).
 * Client-supplied PNG icons, stored in public/icons/. Already strictly
 * monochrome (solid black glyphs), matching the site's design system.
 */

import Image from 'next/image'

export function ArchitectureIllustration() {
  return <Image src="/icons/torquemade-development.png" alt="" width={160} height={160} className="h-full w-full object-contain" />
}

export function PerformanceIllustration() {
  return <Image src="/icons/torquemade-fast-website.png" alt="" width={160} height={160} className="h-full w-full object-contain" />
}

export function IndexingIllustration() {
  return <Image src="/icons/torquemade-google-search.png" alt="" width={160} height={160} className="h-full w-full object-contain" />
}

export function GeoIllustration() {
  return <Image src="/icons/torquemade-llm.png" alt="" width={160} height={160} className="h-full w-full object-contain" />
}

export function SeoIllustration() {
  return <Image src="/icons/torquemade-seo.png" alt="" width={160} height={160} className="h-full w-full object-contain" />
}
