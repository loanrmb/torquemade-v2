import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Torquemade: Web dev & CRM'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#080808',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
        }}
      >
        {/* Logo + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              background: '#ffffff',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: 700,
              color: '#080808',
            }}
          >
            tm
          </div>
          <span style={{ fontSize: '28px', fontWeight: 600, color: '#ffffff' }}>
            Torquemade
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '96px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-4px',
          }}
        >
          Web dev & CRM
        </div>

        {/* URL */}
        <div style={{ fontSize: '20px', color: '#333333', letterSpacing: '1px' }}>
          torquemade.com
        </div>
      </div>
    ),
    { ...size }
  )
}
