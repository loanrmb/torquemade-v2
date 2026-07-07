import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'min-480': '480px',
        'min-720': '720px',
        'min-1024': '1024px',
        'min-1280': '1280px',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        bg: {
          primary: 'hsl(var(--bg-primary))',
          secondary: 'hsl(var(--bg-secondary))',
          tertiary: 'hsl(var(--bg-tertiary))',
          inverse: 'hsl(var(--bg-inverse))',
        },
        text: {
          primary: 'hsl(var(--text-primary))',
          secondary: 'hsl(var(--text-secondary))',
          tertiary: 'hsl(var(--text-tertiary))',
        },
        border: {
          subtle: 'hsl(var(--border-subtle))',
          hover: 'hsl(var(--border-hover))',
        },
      },
      borderRadius: {
        '32': '32px',
      },
      fontSize: {
        'caption':   ['13px', { lineHeight: '1.4', letterSpacing: '0.2px' }],
        'body':      ['16px', { lineHeight: '22px', letterSpacing: '0.15px' }],
        'body-lg':   ['18px', { lineHeight: '28px' }],
        'headline':  ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'title-2':   ['clamp(28px,4vw,40px)', { lineHeight: '1.1', letterSpacing: '-0.4px', fontWeight: '600' }],
        'title-1':   ['clamp(40px,6vw,56px)', { lineHeight: '1.05', letterSpacing: '-0.6px', fontWeight: '650' }],
        'spotlight': ['clamp(52px,8vw,72px)', { lineHeight: '1',    letterSpacing: '-0.8px', fontWeight: '650' }],
        'hero-display': ['clamp(2.75rem,6.5vw,5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.045em', fontWeight: '650' }],
        'showcase':  ['clamp(64px,10vw,96px)',{ lineHeight: '0.95', letterSpacing: '-1px',   fontWeight: '650' }],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'fade-in': 'fade-in 0.6s cubic-bezier(0,0,0.2,1) both',
        'fade-up': 'fade-up 0.6s cubic-bezier(0,0,0.2,1) both',
      },
      keyframes: {
        'marquee': {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'mobbin': 'cubic-bezier(0,0,0.2,1)',
      },
      backdropBlur: {
        'lg': '16px',
      },
      boxShadow: {
        'hairline': '0 0 0 1px hsl(var(--hairline))',
        'hairline-faint': '0 0 0 1px hsl(var(--hairline-faint))',
        'nav': '0 4px 20px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
        'card': '0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 2px 4px rgba(0,0,0,0.06), 0 12px 28px rgba(0,0,0,0.10)',
        'image-inset': 'inset 0 0 0 0.5px rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
}

export default config
