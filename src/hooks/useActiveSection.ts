import { useEffect, useState } from 'react'

/**
 * Returns the id of the section crossing the middle band of the viewport,
 * or null above the first section (e.g. while the hero is in view).
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join(',')

  useEffect(() => {
    const sections = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      // A thin band just above the middle of the screen.
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((el) => observer.observe(el))

    // Clear the highlight when scrolled back above the first section.
    const first = sections[0]
    const onScroll = () => {
      if (first.getBoundingClientRect().top > window.innerHeight * 0.45) setActive(null)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [key])

  return active
}
