'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import createGlobe, { type COBEOptions } from 'cobe'
import { useLang } from '@/components/app-provider'
import Link from 'next/link'

// Config dark (fond sombre, continents visibles via mapBrightness élevée)
// `onRender` n'est pas déclaré dans COBEOptions de cobe@2 → cast bypass.
const GLOBE_CONFIG_DARK = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0.6,
  theta: 0.25,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 20000,
  mapBrightness: 6,
  baseColor: [0.18, 0.18, 0.18],
  markerColor: [1, 1, 1],
  glowColor: [0.3, 0.3, 0.3],
  markers: [
    { location: [44.8378, -0.5792], size: 0.08 },
    { location: [46.2044, 6.1432], size: 0.09 },
    { location: [46.5197, 6.6323], size: 0.07 },
    { location: [48.8566, 2.3522], size: 0.08 },
    { location: [50.8503, 4.3517], size: 0.07 },
    { location: [49.6116, 6.1319], size: 0.06 },
    { location: [51.5074, -0.1278], size: 0.07 },
    { location: [40.7128, -74.006], size: 0.07 },
    { location: [1.3521, 103.8198], size: 0.05 },
    { location: [-33.8688, 151.2093], size: 0.05 },
  ],
} as COBEOptions

// Config clair (fond blanc, continents sombres)
const GLOBE_CONFIG_LIGHT = {
  ...GLOBE_CONFIG_DARK,
  dark: 0,
  diffuse: 0.4,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [0.08, 0.08, 0.08],
  glowColor: [0.9, 0.9, 0.9],
} as COBEOptions

function Globe({
  className,
  dark,
}: {
  className?: string
  dark: boolean
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)

  const config = dark ? GLOBE_CONFIG_DARK : GLOBE_CONFIG_LIGHT

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? 'grabbing' : 'grab'
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.003
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
    },
    [r],
  )

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    } as COBEOptions)

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = '1'
    })

    return () => {
      window.removeEventListener('resize', onResize)
      globe.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dark])

  return (
    <div
      className={`absolute inset-0 mx-auto aspect-square w-full max-w-[600px] ${className ?? ''}`}
    >
      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-500"
        style={{ contain: 'layout paint size' }}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}

const STRINGS = {
  fr: {
    eyebrow: 'Présence mondiale',
    title: 'Parlons de votre projet.',
    subtitle:
      'Nous travaillons partout dans le monde — du brief au lancement, en remote ou sur site.',
    cta: 'Démarrer une conversation',
  },
  en: {
    eyebrow: 'Working worldwide',
    title: "Let's talk about your project.",
    subtitle: 'We work worldwide — from brief to launch, remote or on-site.',
    cta: 'Start a conversation',
  },
}

export function GlobeCTA() {
  const lang = useLang()
  const t = STRINGS[lang]
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const update = () =>
      setDark(document.documentElement.classList.contains('dark'))
    update()
    const observer = new MutationObserver(update)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="relative w-full mx-auto overflow-hidden rounded-3xl border my-16 md:my-24 px-8 py-16 md:px-16 md:py-20"
      style={{
        background: dark
          ? 'hsl(var(--bg-secondary, 0 0% 8%))'
          : 'hsl(var(--bg-secondary, 0 0% 96%))',
        borderColor: 'hsl(var(--border-subtle))',
      }}
    >
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">

        {/* Texte */}
        <div className="z-10 flex-1 max-w-xl text-left">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'hsl(var(--text-secondary))' }}
          >
            {t.eyebrow}
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight mb-4"
            style={{ color: 'hsl(var(--text-primary))' }}
          >
            {t.title}
          </h2>
          <p
            className="text-base md:text-lg mb-8"
            style={{ color: 'hsl(var(--text-secondary))' }}
          >
            {t.subtitle}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{
              background: 'hsl(var(--text-primary))',
              color: 'hsl(var(--bg-primary))',
            }}
          >
            {t.cta} &#8594;
          </Link>
        </div>

        {/* Globe — overflow contrôlé par la section */}
        <div className="relative h-[260px] w-full max-w-xl md:h-[340px]">
          <Globe
            dark={dark}
            className="absolute -bottom-16 -right-24 scale-125 md:scale-150"
          />
        </div>

      </div>
    </section>
  )
}
