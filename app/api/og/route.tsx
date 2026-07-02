import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

// Strict monochrome (black background / white text) — aligned with the site aesthetic.
export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const rawTitle = searchParams.get('title') ?? 'Torquemade'
  const rawCategory = searchParams.get('category') ?? ''

  // Guard against absurdly long values.
  const title = rawTitle.slice(0, 160)
  const category = rawCategory.slice(0, 60)

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#000000',
          color: '#ffffff',
          padding: '80px',
        }}
      >
        {/* Top row: category tag */}
        <div
          style={{
            display: 'flex',
            fontFamily: 'monospace',
            fontSize: 22,
            letterSpacing: 6,
            textTransform: 'uppercase',
            opacity: 0.6,
          }}
        >
          {category || 'Torquemade'}
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: title.length > 80 ? 58 : 72,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: -1,
          }}
        >
          {title}
        </div>

        {/* Bottom row: wordmark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            fontSize: 24,
            letterSpacing: 4,
            textTransform: 'uppercase',
          }}
        >
          <div style={{ display: 'flex' }}>Torquemade</div>
          <div style={{ display: 'flex', opacity: 0.6 }}>torquemade.com</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
