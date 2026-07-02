/**
 * SchemaRenderer — renders a JSON-LD `<script>` block for ALL requests.
 *
 * Structured data lives in a `<script type="application/ld+json">` tag, which
 * is invisible to human visitors, so there is no UX cost to serving it to
 * everyone — and doing so avoids UA-based cloaking, which Google's spam
 * policies prohibit. This component is intentionally NOT crawler-gated: it does
 * not read `x-is-crawler` and never calls `headers()`, so pages using it stay
 * statically rendered.
 *
 * (For the discouraged crawler-only variant, see `crawler-schema.tsx`, kept as
 * an unused building block.)
 *
 * Usage (server component / layout):
 *   import { SchemaRenderer } from '@/components/schema-renderer'
 *   <SchemaRenderer schema={myJsonLd} />
 */

type JsonLd = Record<string, unknown>

export function SchemaRenderer({ schema }: { schema: JsonLd | JsonLd[] }) {
  // Escape `<` so a stray "</script>" in any string value can't break out of
  // the script element. Data here is static/trusted, but this is cheap safety.
  const json = JSON.stringify(schema).replace(/</g, '\\u003c')

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
