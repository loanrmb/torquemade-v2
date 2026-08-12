'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { cn } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group flex flex-1 cursor-pointer items-baseline justify-between gap-4 text-left transition-colors duration-150',
        className
      )}
      {...props}
    >
      {children}
      <svg
        aria-hidden="true"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mt-1 shrink-0 transition-transform duration-200 ease-out group-data-[state=open]:rotate-180"
        style={{ color: 'hsl(var(--text-tertiary))' }}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

/**
 * `forceMount` is deliberate and load-bearing for SEO/GEO, not a styling choice.
 *
 * Radix's Content renders `{isOpen && children}` (see
 * @radix-ui/react-collapsible), so a closed panel ships **no answer text at
 * all** — the copy only enters the DOM on click. Crawlers and generative
 * engines that don't drive the accordion therefore never see it, which is
 * exactly what we're paying for on the FAQ pages.
 *
 * With `forceMount`, Radix keeps the children mounted and drops the `hidden`
 * attribute, so the panel would render open. `data-[state=closed]:h-0` (paired
 * with the existing `overflow-hidden`) collapses it instead: the text stays in
 * the initial HTML, clipped rather than unmounted. `data-state` still tracks
 * the real open state, so both keyframe animations behave as before.
 */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    forceMount
    className="overflow-hidden data-[state=closed]:h-0 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn(className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
