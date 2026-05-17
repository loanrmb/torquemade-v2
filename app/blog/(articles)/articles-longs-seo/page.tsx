import type { Metadata } from 'next'
import { ArticlesLongsSeoContent } from './_content'

export const metadata: Metadata = {
  title: "Pourquoi les articles longs surclassent les articles courts sur Google",
  description: "Les articles de 1 500 à 2 500 mots occupent la majorité des premières positions Google. Voici pourquoi la longueur est un signal fort — et ses limites réelles.",
}

export default function Page() {
  return <ArticlesLongsSeoContent />
}
