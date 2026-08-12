'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLang } from '@/components/app-provider'
import { EASE_OUT, useReducedMotionSafe } from '@/lib/motion'
import type { Lang } from '@/lib/strings'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type Bilingual = Record<Lang, string>

export interface FaqItem {
  question: Bilingual
  answer: Bilingual
}

interface FaqSectionProps {
  title: Bilingual
  description: Bilingual
  items: FaqItem[]
  contactHref: string
  contactText: Bilingual
  contactLinkText: Bilingual
}

/**
 * Answer reveal, adapted from the homepage hero arrival (HeroRevealBlock in
 * hero-heading.tsx): same opacity + y + blur signature and EASE_OUT curve,
 * scaled down for a repeatable UI interaction (~0.4s vs the hero's 1.4s) per
 * the emil-design-eng "occasional interaction" duration band. No clip-path
 * here — Radix's own height animation on AccordionContent already clips the
 * reveal boundary, so a second clip-path would fight it.
 *
 * AccordionContent now uses `forceMount` so the answer text is in the server
 * HTML (see components/ui/accordion.tsx). That means this no longer remounts
 * on open, so the reveal is driven off the `isOpen` prop instead — same
 * animation, replayed on every open. `initial={false}` keeps it from firing
 * for all items at once on page load.
 */
function FaqAnswer({ text, isOpen }: { text: string; isOpen: boolean }) {
  const reducedMotion = useReducedMotionSafe()

  if (reducedMotion) {
    return (
      <p
        className="pb-5 text-body leading-relaxed min-720:pb-6"
        style={{ color: 'hsl(var(--text-secondary))' }}
      >
        {text}
      </p>
    )
  }

  return (
    <motion.p
      className="pb-5 text-body leading-relaxed min-720:pb-6"
      style={{ color: 'hsl(var(--text-secondary))' }}
      initial={false}
      animate={
        isOpen
          ? { opacity: 1, y: 0, filter: 'blur(0px)' }
          : { opacity: 0, y: 6, filter: 'blur(4px)' }
      }
      transition={{ duration: 0.4, ease: EASE_OUT }}
    >
      {text}
    </motion.p>
  )
}

export function FaqSection({
  title,
  description,
  items,
  contactHref,
  contactText,
  contactLinkText,
}: FaqSectionProps) {
  const lang = useLang()
  // Controlled so FaqAnswer can read the open state — AccordionContent is
  // force-mounted, so it can no longer rely on remounting to replay its reveal.
  const [openItem, setOpenItem] = useState('')

  return (
    <section
      className="px-5 py-20 min-720:py-28"
      style={{ background: 'hsl(var(--bg-secondary))' }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 min-1024:grid-cols-[2fr_3fr] min-1024:gap-16">
        {/* Left column — heading, description, contact line */}
        <div className="fade-up">
          <h2
            className="text-title-2 font-semibold tracking-tight"
            style={{ color: 'hsl(var(--text-primary))' }}
          >
            {title[lang]}
          </h2>
          <p
            className="mt-4 text-body leading-relaxed"
            style={{ color: 'hsl(var(--text-secondary))' }}
          >
            {description[lang]}
          </p>
          <p
            className="mt-6 text-body leading-relaxed"
            style={{ color: 'hsl(var(--text-secondary))' }}
          >
            {contactText[lang]}{' '}
            <Link
              href={contactHref}
              className="font-semibold underline-offset-4 hover:underline"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {contactLinkText[lang]}
            </Link>
          </p>
        </div>

        {/* Right column — accordion */}
        <div
          className="fade-up overflow-hidden rounded-2xl"
          style={{
            background: 'hsl(var(--bg-primary))',
            border: '1px solid hsl(var(--border-subtle))',
          }}
        >
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
          >
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                style={{
                  borderTop: i === 0 ? 'none' : '1px solid hsl(var(--border-subtle))',
                }}
              >
                <AccordionTrigger className="px-5 py-4 min-720:px-7 min-720:py-5 hover:bg-[hsl(var(--bg-secondary))]">
                  <h3
                    className="text-body font-semibold leading-snug"
                    style={{ color: 'hsl(var(--text-primary))' }}
                  >
                    {item.question[lang]}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-5 min-720:px-7">
                  <FaqAnswer
                    text={item.answer[lang]}
                    isOpen={openItem === `item-${i}`}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
