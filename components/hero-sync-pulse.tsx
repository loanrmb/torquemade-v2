'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'

/**
 * Élément signature du Hero — deux nœuds "ERP" ↔ "Boutique" reliés par une
 * ligne 1px sur laquelle un pulse circule dans les deux sens, matérialisant
 * la synchronisation temps réel. Monochrome strict, hairline, Geist Mono.
 */
export function HeroSyncPulse() {
  const lang = useLang()
  const t = strings[lang].hero
  const reduceMotion = useReducedMotion()

  return (
    <div
      className="glow-soft flex items-center gap-0 select-none"
      aria-label={`${t.syncErp} — ${t.syncStatus} — ${t.syncShop}`}
    >
      <SyncNode label={t.syncErp} />

      <div
        className="relative h-[3px] w-20 min-720:w-32 flex-shrink-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Ligne de base 1px, centrée dans le rail de 3px */}
        <div
          className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2"
          style={{ background: 'hsl(var(--hairline))' }}
        />
        {/* Pulse aller-retour — transform uniquement (GPU), overshoot masqué
            par overflow-hidden pour rester correct sur les deux breakpoints */}
        {reduceMotion ? (
          <div
            className="absolute top-0 left-1/2 h-full w-8 -translate-x-1/2 rounded-full"
            style={{
              background:
                'linear-gradient(90deg, transparent, hsl(var(--text-primary) / 0.35), transparent)',
            }}
          />
        ) : (
          <motion.div
            className="absolute top-0 left-0 h-full w-8 rounded-full"
            style={{
              background:
                'linear-gradient(90deg, transparent, hsl(var(--text-primary) / 0.7), transparent)',
            }}
            animate={{ x: ['-100%', '500%', '-100%'] }}
            transition={{ duration: 3.6, ease: 'easeInOut', repeat: Infinity }}
          />
        )}
      </div>

      <SyncNode label={t.syncShop} />

      <span
        className="ml-3 min-720:ml-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] whitespace-nowrap"
        style={{ color: 'hsl(var(--text-tertiary))' }}
      >
        {t.syncStatus}
      </span>
    </div>
  )
}

function SyncNode({ label }: { label: string }) {
  return (
    <span
      className="hairline inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em] whitespace-nowrap"
      style={{
        color: 'hsl(var(--text-primary))',
        background: 'hsl(var(--bg-primary))',
      }}
    >
      <span
        className="block h-1 w-1 rounded-full"
        style={{ background: 'hsl(var(--text-primary))' }}
        aria-hidden="true"
      />
      {label}
    </span>
  )
}
