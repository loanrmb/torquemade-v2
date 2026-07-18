import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Torquemade: Web dev & CRM'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Frozen wave frame — same deterministic formula as WavesStatic in
// components/ui/wave-background.tsx (buildStaticPaths), regenerated at the
// exact card dimensions so the lines fill 1200x630 without slicing/cropping.
function buildWavePaths(width: number, height: number): string[] {
  const xGap = 48
  const yGap = 25
  const cols = Math.ceil(width / xGap) + 1
  const rows = Math.ceil(height / yGap) + 1
  const paths: string[] = []

  for (let i = 0; i < cols; i++) {
    const x0 = i * xGap
    let d = ''
    for (let j = 0; j < rows; j++) {
      const y = j * yGap
      const x = x0 + Math.cos(y * 0.02 + i * 0.6) * 12 + Math.sin(y * 0.008 + i) * 6
      d += (j === 0 ? 'M' : 'L') + ` ${x.toFixed(1)} ${y}`
    }
    paths.push(d)
  }
  return paths
}

const WAVE_PATHS = buildWavePaths(1200, 630)

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // Literal value for the site's --bg-primary token (light mode,
          // 0 0% 91%) — the site's default light surface.
          backgroundColor: 'hsl(0, 0%, 91%)',
        }}
      >
        {/* Frozen wave field */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          {WAVE_PATHS.map((d, i) => (
            <path key={i} d={d} fill="none" stroke="rgba(0,0,0,0.10)" strokeWidth={1} />
          ))}
        </svg>

        {/* Icon + wordmark lockup — same combo as the nav LogoMark (black
            square, light "tm", black wordmark), literal light-mode token
            values: bg-inverse -> 0 0% 8%, bg-primary -> 0 0% 91%,
            text-primary -> 0 0% 8%. */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
          <div
            style={{
              width: '96px',
              height: '96px',
              borderRadius: '15px',
              background: 'hsl(0, 0%, 8%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '54px',
              fontWeight: 600,
              letterSpacing: '-3px',
              color: 'hsl(0, 0%, 91%)',
            }}
          >
            tm
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '60px',
              fontWeight: 600,
              letterSpacing: '-1.5px',
              color: 'hsl(0, 0%, 8%)',
            }}
          >
            Torquemade
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
