'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { EASE_OUT } from '@/lib/motion'
import type { Lang } from '@/lib/strings'

// useTransform stale-closure fix: useTransform's internal subscription only
// re-evaluates when the input MotionValue changes, not when `lang` changes.
// After animation completes, val is static, so display would never reformat.
// Solution: drive display via animate() onUpdate + useState, with a langRef
// kept synchronously current so both effects always use the active locale.
export function CountUp({ target, reduced, lang }: { target: number; reduced: boolean; lang: Lang }) {
  const spanRef   = useRef<HTMLSpanElement>(null)
  const inView    = useInView(spanRef, { once: true })
  const langRef   = useRef(lang)
  langRef.current = lang                // sync before any effect runs

  const valRef    = useRef(0)           // tracks animated value for lang-change reformat
  const [text, setText] = useState('0')

  const fmt = (v: number) =>
    Math.round(v).toLocaleString(langRef.current === 'fr' ? 'fr-FR' : 'en-US')

  useEffect(() => {
    if (!inView) return
    if (reduced) { valRef.current = target; setText(fmt(target)); return }
    const ctrl = animate(0, target, {
      duration: 1.2,
      ease: EASE_OUT,
      onUpdate: (v) => { valRef.current = v; setText(fmt(v)) },
    })
    return () => ctrl.stop()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target, reduced])

  // Reformat the static final value whenever lang switches
  useEffect(() => {
    setText(fmt(valRef.current))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  return <span ref={spanRef}>{text}</span>
}
