'use client'

/**
 * GlobeCTA — section finale "Parlons de votre projet" avec un globe
 * interactif (cobe). Le globe s'auto-roule, peut être saisi à la souris,
 * et bascule entre palette claire/sombre selon le thème actif.
 *
 * Strings : lib/strings.ts → t.globeCta
 * Thème  : useApp() (context React, source de vérité du projet)
 */

import { useEffect, useRef, useState } from 'react'
import createGlobe from 'cobe'
import Link from 'next/link'
import { useApp } from '@/components/app-provider'
import { strings } from '@/lib/strings'

function GlobeCanvas({ dark }: { dark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)
  const phiRef = useRef(0)
  const pointerInteracting = useRef<number | null>(null)
  const pointerMovement = useRef(0)
  const [r, setR] = useState(0)

  useEffect(() => {
    let currentGlobe: ReturnType<typeof createGlobe> | null = null

    const init = () => {
      if (!canvasRef.current) return

      const canvas = canvasRef.current
      // Read the real rendered size — offsetWidth can be 0 on first
      // mount before the browser has laid out the canvas.
      const rect = canvas.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height, 300)

      canvas.width = size * 2
      canvas.height = size * 2

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      currentGlobe = createGlobe(canvas, {
        width: size * 2,
        height: size * 2,
        devicePixelRatio: 2,
        phi: 0.6,
        theta: 0.25,
        dark: dark ? 1 : 0,
        diffuse: 0.4,
        mapSamples: 20000,
        mapBrightness: dark ? 1.4 : 1.8,
        baseColor: dark ? [0.12, 0.12, 0.12] : [0.95, 0.95, 0.95],
        markerColor: dark ? [1, 1, 1] : [0.08, 0.08, 0.08],
        glowColor: dark ? [0.08, 0.08, 0.08] : [0.88, 0.88, 0.88],
        markers: [
          { location: [44.8378, -0.5792], size: 0.08 },   // Bordeaux
          { location: [46.2044, 6.1432], size: 0.09 },    // Genève
          { location: [46.5197, 6.6323], size: 0.07 },    // Lausanne
          { location: [48.8566, 2.3522], size: 0.08 },    // Paris
          { location: [50.8503, 4.3517], size: 0.07 },    // Bruxelles
          { location: [49.6116, 6.1319], size: 0.06 },    // Luxembourg
          { location: [51.5074, -0.1278], size: 0.07 },   // Londres
          { location: [40.7128, -74.006], size: 0.07 },   // New York
          { location: [1.3521, 103.8198], size: 0.05 },   // Singapour
          { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
        ],
        onRender: (state: Record<string, number>) => {
          if (!pointerInteracting.current) phiRef.current += 0.003
          state.phi = phiRef.current + r
          state.width = size * 2
          state.height = size * 2
        },
      } as any)

      globeRef.current = currentGlobe

      // Fade in once the WebGL context is up
      requestAnimationFrame(() => {
        if (canvas) canvas.style.opacity = '1'
      })
    }

    // Wait one tick so the DOM is laid out before reading dimensions
    let timer = setTimeout(init, 100)

    // Re-init cleanly if the parent layout changes (responsive resize)
    const observer = new ResizeObserver(() => {
      if (currentGlobe) {
        currentGlobe.destroy()
        currentGlobe = null
      }
      clearTimeout(timer)
      timer = setTimeout(init, 50)
    })

    if (canvasRef.current?.parentElement) {
      observer.observe(canvasRef.current.parentElement)
    }

    return () => {
      clearTimeout(timer)
      observer.disconnect()
      if (currentGlobe) currentGlobe.destroy()
    }
  }, [dark, r])

  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto">
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerMovement.current
          if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing'
        }}
        onPointerUp={() => {
          pointerInteracting.current = null
          if (canvasRef.current) canvasRef.current.style.cursor = 'grab'
        }}
        onPointerOut={() => {
          pointerInteracting.current = null
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current
            pointerMovement.current = delta
            setR(delta / 200)
          }
        }}
        onTouchMove={(e) => {
          if (e.touches[0] && pointerInteracting.current !== null) {
            const delta = e.touches[0].clientX - pointerInteracting.current
            pointerMovement.current = delta
            setR(delta / 200)
          }
        }}
        className="w-full h-full opacity-0 transition-opacity duration-700 cursor-grab"
        style={{ contain: 'layout paint size' }}
      />
    </div>
  )
}

export function GlobeCTA() {
  const { lang, theme } = useApp()
  const t = strings[lang].globeCta
  const dark = theme === 'dark'

  return (
    <section className="px-5 pb-20 min-720:pb-24">
      <div className="mx-auto max-w-5xl">
        <div
          className="relative w-full overflow-hidden rounded-3xl border px-8 py-16 md:px-16 md:py-20"
          style={{
            background: 'hsl(var(--bg-secondary))',
            borderColor: 'hsl(var(--border-subtle))',
          }}
        >
          <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16">

            {/* Texte + CTA */}
            <div className="z-10 flex-1 text-left">
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
                className="text-base md:text-lg mb-8 max-w-md"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                {t.subtitle}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity duration-150 hover:opacity-80"
                style={{
                  background: 'hsl(var(--text-primary))',
                  color: 'hsl(var(--bg-primary))',
                }}
              >
                {t.cta} &rarr;
              </Link>
            </div>

            {/* Globe */}
            <div className="flex-1 flex items-center justify-center w-full">
              <GlobeCanvas dark={dark} />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
