import type { ReactNode } from 'react'
import type { Rich as RichText } from '../types'

// Matches **bold** or [label](url).
const TOKEN = /\*\*(.+?)\*\*|\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g

/** Renders the small inline markup allowed in content.ts. */
export function Rich({ text }: { text: RichText }) {
  const parts: ReactNode[] = []
  let last = 0

  for (const match of text.matchAll(TOKEN)) {
    const index = match.index
    if (index > last) parts.push(text.slice(last, index))
    const [, bold, label, url] = match
    parts.push(
      bold !== undefined ? (
        <strong key={index}>{bold}</strong>
      ) : (
        <a key={index} href={url} target="_blank" rel="noopener">
          {label}
        </a>
      ),
    )
    last = index + match[0].length
  }
  if (last < text.length) parts.push(text.slice(last))

  return <>{parts}</>
}
