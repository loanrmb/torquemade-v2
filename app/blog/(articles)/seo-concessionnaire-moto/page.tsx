import type { Metadata } from 'next'
import { SeoConcessionnaireMotoCont } from './_content'

export const metadata: Metadata = {
  title: "SEO pour concessionnaire moto : les mots-clés qui convertissent",
  description: "«Moto Bordeaux», «concessionnaire Honda Gironde», «essai Yamaha Bordeaux» — voici les requêtes que vos clients tapent et comment vous positionner dessus.",
}

export default function Page() {
  return <SeoConcessionnaireMotoCont />
}
