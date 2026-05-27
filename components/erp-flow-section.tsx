'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'

/* ─── Styles ──────────────────────────────────────────────── */

const NODE = {
  background: '#111111',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 8,
  padding: '16px 24px',
  boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.4)',
  color: '#ffffff',
  fontWeight: 500,
  textAlign: 'center' as const,
  fontSize: '0.9375rem',
  lineHeight: 1.25,
  width: '100%',
}

/** Central node — slightly brighter border to pull focus */
const NODE_SYNC = {
  ...NODE,
  border: '1px solid rgba(255,255,255,0.22)',
}

/* ─── SVG Connectors ─────────────────────────────────────── */

/**
 * Horizontal dashed connector with animated stroke-dashoffset
 * and two pulsing endpoint dots.
 */
function ConnectorH() {
  return (
    <svg
      aria-hidden="true"
      height={8}
      style={{
        flex: '1 1 auto',
        minWidth: 40,
        alignSelf: 'center',
        overflow: 'visible',
        display: 'block',
      }}
    >
      {/* Animated dashed line — CSS handles stroke-dashoffset */}
      <line
        x1="0%"
        y1="4"
        x2="100%"
        y2="4"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
        strokeDasharray="4 6"
        strokeDashoffset="0"
        style={{ animation: 'erp-dash 3s linear infinite' }}
      />
      {/* Endpoint dots — CSS pulse */}
      <circle cx="0%" cy="4" r="3" fill="white" fillOpacity="0.6" className="erp-dot" />
      <circle cx="100%" cy="4" r="3" fill="white" fillOpacity="0.6" className="erp-dot erp-dot-d1" />
    </svg>
  )
}

/** Vertical dashed connector (mobile layout) */
function ConnectorV() {
  return (
    <svg
      aria-hidden="true"
      width={8}
      height={36}
      style={{ alignSelf: 'center', overflow: 'visible', display: 'block' }}
    >
      <line
        x1="4"
        y1="0%"
        x2="4"
        y2="100%"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
        strokeDasharray="4 6"
        strokeDashoffset="0"
        style={{ animation: 'erp-dash 3s linear infinite' }}
      />
      <circle cx="4" cy="0%" r="3" fill="white" fillOpacity="0.6" className="erp-dot" />
      <circle cx="4" cy="100%" r="3" fill="white" fillOpacity="0.6" className="erp-dot erp-dot-d1" />
    </svg>
  )
}

/* ─── Framer Motion variants ─────────────────────────────── */

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: 'easeOut' } },
}

/* ─── Section ────────────────────────────────────────────── */

export function ErpFlowSection() {
  const lang = useLang()
  const t = strings[lang]

  return (
    <section className="relative px-5 py-20 min-720:py-24">
      {/* FIG. 1.1 — Linear-style label */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '1.5rem',
          left: '1.75rem',
          fontFamily: 'monospace',
          fontSize: '0.625rem',
          letterSpacing: '0.1em',
          color: 'hsl(var(--text-tertiary))',
          opacity: 0.45,
          textTransform: 'uppercase',
        }}
      >
        FIG. 1.1
      </span>

      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <h2
          className="fade-up text-title-2 font-semibold tracking-tight text-center mb-4"
          style={{ color: 'hsl(var(--text-primary))' }}
        >
          {t.home.erp.title}
        </h2>
        <p
          className="fade-up fade-up-d1 text-body-lg text-center max-w-2xl mx-auto mb-14"
          style={{ color: 'hsl(var(--text-secondary))' }}
        >
          {t.home.erp.subtitle}
        </p>

        {/* ── Flow diagram — desktop (horizontal) ── */}
        <div className="hidden min-720:flex items-center max-w-4xl mx-auto mb-12">
          {/* Node 0 — ERP */}
          <motion.div
            style={{ flex: 1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0 }}
          >
            <div style={NODE}>{t.home.erp.erpBox}</div>
          </motion.div>

          <ConnectorH />

          {/* Node 1 — Synchronisation (highlighted) */}
          <motion.div
            style={{ flex: 1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
          >
            <div style={NODE_SYNC}>{t.home.erp.syncBox}</div>
            <div
              className="flex justify-center gap-2 mt-2 text-xs"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              <span>{t.home.erp.syncItem1}</span>
              <span>·</span>
              <span>{t.home.erp.syncItem2}</span>
              <span>·</span>
              <span>{t.home.erp.syncItem3}</span>
            </div>
          </motion.div>

          <ConnectorH />

          {/* Node 2 — Site e-commerce */}
          <motion.div
            style={{ flex: 1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.4 }}
          >
            <div style={NODE}>{t.home.erp.siteBox}</div>
          </motion.div>
        </div>

        {/* ── Flow diagram — mobile (vertical) ── */}
        <div className="flex flex-col min-720:hidden items-center max-w-xs mx-auto mb-12">
          <motion.div
            style={{ width: '100%' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0 }}
          >
            <div style={NODE}>{t.home.erp.erpBox}</div>
          </motion.div>

          <ConnectorV />

          <motion.div
            style={{ width: '100%' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
          >
            <div style={NODE_SYNC}>{t.home.erp.syncBox}</div>
            <div
              className="flex justify-center gap-2 mt-2 text-xs"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              <span>{t.home.erp.syncItem1}</span>
              <span>·</span>
              <span>{t.home.erp.syncItem2}</span>
              <span>·</span>
              <span>{t.home.erp.syncItem3}</span>
            </div>
          </motion.div>

          <ConnectorV />

          <motion.div
            style={{ width: '100%' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.4 }}
          >
            <div style={NODE}>{t.home.erp.siteBox}</div>
          </motion.div>
        </div>

        {/* ── Comparison table ── */}
        <div
          className="grid grid-cols-1 min-720:grid-cols-2 rounded-2xl overflow-hidden"
          style={{
            background: '#0d0d0d',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Sans connexion ERP */}
          <div className="erp-compare-left p-6 min-720:p-8">
            <h3
              className="text-base font-semibold mb-5"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              {t.home.erp.comparisonWithoutHeader}
            </h3>
            <motion.ul
              className="flex flex-col gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={listVariants}
            >
              {t.home.erp.comparisonRows.map((row, i) => (
                <motion.li
                  key={i}
                  className="text-sm flex items-start gap-2"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                  variants={itemVariants}
                >
                  <span
                    aria-hidden="true"
                    className="font-bold flex-shrink-0"
                    style={{ color: 'rgba(255,80,80,0.7)' }}
                  >
                    ✗
                  </span>
                  <span>{row[0]}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Avec connexion ERP */}
          <div className="p-6 min-720:p-8">
            <h3
              className="text-base font-semibold mb-5"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              {t.home.erp.comparisonWithHeader}
            </h3>
            <motion.ul
              className="flex flex-col gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={listVariants}
            >
              {t.home.erp.comparisonRows.map((row, i) => (
                <motion.li
                  key={i}
                  className="text-sm flex items-start gap-2"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                  variants={itemVariants}
                >
                  <span
                    aria-hidden="true"
                    className="font-bold flex-shrink-0"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    ✓
                  </span>
                  <span>{row[1]}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* CTA */}
        <div className="fade-up fade-up-d4 mt-12 text-center">
          <Link href="/services/erp-ecommerce" className="btn-outline">
            {t.home.erp.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  )
}
