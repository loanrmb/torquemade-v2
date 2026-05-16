import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {

    h1: ({ children }) => (
      <h1 className="mb-4 mt-0 text-3xl font-bold leading-tight md:text-4xl">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="mb-4 mt-14 text-xl font-bold leading-snug md:text-2xl">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="mb-3 mt-10 text-base font-bold">
        {children}
      </h3>
    ),

    p: ({ children }) => (
      <p className="mb-6 text-base leading-[1.85] text-text-secondary">
        {children}
      </p>
    ),

    ul: ({ children }) => (
      <ul className="mb-8 list-none space-y-3 pl-0">
        {children}
      </ul>
    ),

    li: ({ children }) => (
      <li className="flex items-start gap-4 text-base leading-relaxed text-text-secondary">
        <span className="mt-[0.45em] flex-shrink-0 font-mono text-xs">—</span>
        <span>{children}</span>
      </li>
    ),

    strong: ({ children }) => (
      <strong className="font-bold text-text-primary">{children}</strong>
    ),

    a: ({ href, children }) => (
      <a
        href={href}
        className="underline underline-offset-2 transition-opacity hover:opacity-40"
      >
        {children}
      </a>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-10 border-l-2 border-black pl-6 italic opacity-60">
        {children}
      </blockquote>
    ),

    hr: () => (
      <hr className="my-14 border-0 border-t border-black" />
    ),

    ...components,
  }
}
