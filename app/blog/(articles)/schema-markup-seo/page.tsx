import type { Metadata } from 'next'
import { SchemaMarkupSeoContent } from './_content'

export const metadata: Metadata = {
  title: "Schema markup : comment aider Google à comprendre votre contenu",
  description: "Le schema markup permet à Google de comprendre le sens de votre contenu et d'afficher des rich snippets. Guide pratique pour l'implémenter sur votre site.",
}

export default function Page() {
  return <SchemaMarkupSeoContent />
}
