import { NextResponse } from 'next/server'
import { TOPIC_CLUSTERS, revalidateCluster, type ClusterId } from '@/lib/revalidate'

const VALID_CLUSTERS = Object.keys(TOPIC_CLUSTERS) as ClusterId[]

/**
 * Secret-protected on-publish revalidation. Trigger after an article ships
 * (e.g. from a Vercel Deploy Hook or manually) to refresh a topic cluster's
 * `/blog` index, service pages, and article routes without a full rebuild:
 *
 *   POST /api/revalidate
 *   Header: x-revalidate-secret: <REVALIDATE_SECRET>
 *   Body:   { "cluster": "erp-sync" }
 */
export async function POST(req: Request) {
  const secret = process.env.REVALIDATE_SECRET
  if (!secret) {
    return NextResponse.json({ error: 'REVALIDATE_SECRET non configuré' }, { status: 500 })
  }

  if (req.headers.get('x-revalidate-secret') !== secret) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  let cluster: unknown
  try {
    ;({ cluster } = await req.json())
  } catch {
    return NextResponse.json({ error: 'Corps JSON invalide' }, { status: 400 })
  }

  if (typeof cluster !== 'string' || !VALID_CLUSTERS.includes(cluster as ClusterId)) {
    return NextResponse.json(
      { error: 'Cluster invalide', validClusters: VALID_CLUSTERS },
      { status: 400 },
    )
  }

  const revalidated = await revalidateCluster(cluster as ClusterId)
  return NextResponse.json({ success: true, cluster, revalidated })
}
