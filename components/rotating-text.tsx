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
    <p
      className="text-xl min-720:text-2xl leading-snug"
      style={{ color: 'hsl(var(--text-primary))' }}
    >
      {prefix}
      <strong
        style={{
          display: 'inline-block',
          fontWeight: 700,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 200ms ease, transform 200ms ease',
        }}
      >
        {words[index]}
      </strong>
    </p>
  )
}
