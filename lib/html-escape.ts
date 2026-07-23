const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

/**
 * Escapes HTML-significant characters in a single regex pass (order-safe —
 * chaining separate .replace() calls risks double-escaping the `&` that a
 * prior replacement just inserted).
 */
export function escapeHtml(value: unknown): string {
  const str = value == null ? '' : String(value)
  return str.replace(/[&<>"']/g, (char) => ESCAPES[char])
}
