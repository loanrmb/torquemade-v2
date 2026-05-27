'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { useLang } from '@/components/app-provider'
import { strings } from '@/lib/strings'

/** Animated dashed connector — horizontal, data flows left → right */
function ConnectorH() {
  return (
    <div
      style={{
        flex: '1 1 auto',
        minWidth: 32,
        position: 'relative',
        height: 1,
        alignSelf: 'center',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(90deg, hsl(var(--border-subtle)) 0, hsl(var(--border-subtle)) 5px, transparent 5px, transparent 10px)',
          backgroundSize: '10px 1px',
        }}
        animate={{ backgroundPositionX: ['0px', '10px'] }}
        transition={{ duration: 0.65, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

/** Animated dashed connector — vertical, data flows top → bottom */
function ConnectorV() {
  return (
    <div
      style={{
        width: 1,
        height: 28,
        position: 'relative',
        alignSelf: 'center',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(180deg, hsl(var(--border-subtle)) 0, hsl(var(--border-subtle)) 5px, transparent 5px, transparent 10px)',
          backgroundSize: '1px 10px',
        }}
        animate={{ backgroundPositionY: ['0px', '10px'] }}
        transition={{ duration: 0.65, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: 'easeOut' } },
}

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
        <div className="hidden min-720:flex items-stretch gap-4 max-w-4xl mx-auto mb-12">
          {/* Node 0 — ERP */}
          <motion.div
            className="flex-1 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0 }}
          >
            <div className="flow-box w-full">{t.home.erp.erpBox}</div>
          </motion.div>

          <ConnectorH />

          {/* Node 1 — Synchronisation */}
          <motion.div
            className="flex-1 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="flow-box w-full">{t.home.erp.syncBox}</div>
            <div
              className="flex justify-center gap-2 mt-2 text-xs"
              style={{ color: 'hsl(var(--text-tertiary))' }}
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
            className="flex-1 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.4 }}
          >
            <div className="flow-box w-full">{t.home.erp.siteBox}</div>
          </motion.div>
        </div>

        {/* ── Flow diagram — mobile (vertical) ── */}
        <div className="flex flex-col min-720:hidden items-stretch max-w-xs mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0 }}
          >
            <div className="flow-box">{t.home.erp.erpBox}</div>
          </motion.div>

          <div className="my-3 mx-auto">
            <ConnectorV />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="flow-box">{t.home.erp.syncBox}</div>
            <div
              className="flex justify-center gap-2 mt-2 text-xs"
              style={{ color: 'hsl(var(--text-tertiary))' }}
            >
              <span>{t.home.erp.syncItem1}</span>
              <span>·</span>
              <span>{t.home.erp.syncItem2}</span>
              <span>·</span>
              <span>{t.home.erp.syncItem3}</span>
            </div>
          </motion.div>

          <div className="my-3 mx-auto">
            <ConnectorV />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.4 }}
          >
            <div className="flow-box">{t.home.erp.siteBox}</div>
          </motion.div>
        </div>

        {/* ── Comparison table with staggered items ── */}
        <div
          className="grid grid-cols-1 min-720:grid-cols-2 gap-px rounded-2xl overflow-hidden"
          style={{
            background: 'hsl(var(--border-subtle))',
            border: '1px solid hsl(var(--border-subtle))',
          }}
        >
          {/* Sans connexion ERP */}
          <div
            className="p-6 min-720:p-8"
            style={{ background: 'hsl(var(--bg-secondary))' }}
          >
            <h3
              className="text-base font-semibold mb-5"
              style={{ color: 'hsl(var(--text-secondary))' }}
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
                  style={{ color: 'hsl(var(--text-secondary))' }}
                  variants={itemVariants}
                >
                  <span
                    aria-hidden="true"
                    className="font-bold flex-shrink-0 text-red-500"
                  >
                    ✗
                  </span>
                  <span>{row[0]}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Avec connexion ERP */}
          <div
            className="p-6 min-720:p-8"
            style={{ background: 'hsl(var(--bg-primary))' }}
          >
            <h3
              className="text-base font-semibold mb-5"
              style={{ color: 'hsl(var(--text-primary))' }}
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
                  style={{ color: 'hsl(var(--text-primary))' }}
                  variants={itemVariants}
                >
                  <span
                    aria-hidden="true"
                    className="font-bold flex-shrink-0 text-emerald-600"
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
