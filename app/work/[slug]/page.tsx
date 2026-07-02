import type { Metadata } from 'next'
import { projects } from '@/lib/projects'
import { CaseStudyContent } from './_content'

const baseUrl = 'https://www.torquemade.com'

export function generateStaticParams() {
  return projects
    .filter((p) => p.caseStudy)
    .map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  const canonical = `${baseUrl}/work/${slug}`

  if (!project) {
    return { alternates: { canonical } }
  }

  return {
    title: `${project.client} | Torquemade`,
    description: project.description.fr,
    alternates: { canonical },
  }
}

export default function CaseStudyPage() {
  return <CaseStudyContent />
}
