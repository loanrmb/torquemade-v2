'use client'

import { useState, useEffect } from 'react'

const WORDS: Record<'fr' | 'en', string[]> = {
  fr: [
    'convertissent.',
    'génèrent du trafic.',
    'augmentent vos revenus.',
    'marquent les esprits.',
    'performent sur Google.',
    'travaillent pendant que vous dormez.',
  ],
  en: [
    'convert.',
    'generate traffic.',
    'increase your revenue.',
    'make people remember you.',
    'rank on Google.',
    'work while you sleep.',
  ],
}

const PREFIX: Record<'fr' | 'en', string> = {
  fr: 'Nous construisons des sites qui ',
  en: 'We build websites that ',
}

export function RotatingHero({ lang }: { lang: 'fr' | 'en' }) {
  const words = WORDS[lang]
  const prefix = PREFIX[lang]
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      const timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length)
        setVisible(true)
      }, 200)
      return () => clearTimeout(timeout)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <>
      <style>{`
        @keyframes rainbowShift {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .rainbow-word {
          background: linear-gradient(
            90deg,
            #ff6b6b 0%,
            #ffd93d 20%,
            #6bcb77 40%,
            #4d96ff 60%,
            #c77dff 80%,
            #ff6b6b 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rainbowShift 3s linear infinite;
          font-weight: 700;
        }
      `}</style>
      <p
        className="text-xl min-720:text-2xl leading-snug"
        style={{ color: 'hsl(var(--text-primary))' }}
      >
        {prefix}
        <span
          style={{
            display: 'inline-block',
            padding: '0.05em 0.3em',
            borderRadius: '0.3em',
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow:
              '0 2px 12px rgba(120, 100, 255, 0.15), inset 0 1px 0 rgba(255,255,255,0.25)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 200ms ease, transform 200ms ease',
          }}
        >
          <span className="rainbow-word">{words[index]}</span>
        </span>
      </p>
    </>
  )
}
