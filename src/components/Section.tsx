import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface SectionProps {
  id: string
  title: string
  className?: string
  children: ReactNode
}

/** A titled page section that fades in on first scroll into view. */
export function Section({ id, title, className, children }: SectionProps) {
  const ref = useReveal<HTMLElement>()
  return (
    <section id={id} ref={ref} className={['section', 'wrap', 'reveal', className].filter(Boolean).join(' ')}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
