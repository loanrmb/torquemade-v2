'use client'

import createGlobe, { type COBEOptions } from 'cobe'
import { useCallback, useEffect, useRef, useState } from 'react'

// Target markets — Bordeaux (HQ), Suisse Romande, Belgique/Wallonie, Canada, USA.
const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.5, 0.5, 0.5],
  markerColor: [1, 1, 1],
  glowColor: [0.4, 0.4, 0.4],
  markers: [
    { location: [44.8378, -0.5792], size: 0.08 }, // Bordeaux
    { location: [46.2044, 6.1432], size: 0.06 }, // Genève
    { location: [46.5197, 6.6323], size: 0.05 }, // Lausanne
    { location: [50.8503, 4.3517], size: 0.06 }, // Bruxelles
    { location: [45.5019, -73.5674], size: 0.08 }, // Montréal
    { location: [40.7128, -74.006], size: 0.06 }, // New York
  ],
}

export function Globe({ className }: { className?: string }) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)

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
    (state: Record<string, unknown>) => {
      if (pointerInteracting.current === null) phi += 0.005
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
    },
    [r]
  )

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    onResize()

    // `onRender` is a valid runtime option (see cobe README) but missing from
    // the published COBEOptions type — cast to bypass the stale type gap.
    const globe = createGlobe(canvasRef.current!, {
      ...GLOBE_CONFIG,
      width: width * 2,
      height: width * 2,
      onRender,
    } as COBEOptions & { onRender: typeof onRender })

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = '1'
    })

    return () => {
      window.removeEventListener('resize', onResize)
      globe.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={`absolute aspect-square w-full max-w-[600px]${className ? ` ${className}` : ''}`}>
      <canvas
        className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        ref={canvasRef}
        onPointerDown={(e) => updatePointerInteraction(e.clientX - pointerInteractionMovement.current)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  )
}
