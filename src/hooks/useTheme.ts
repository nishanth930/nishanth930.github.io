import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

// Keep in sync with the inline script in index.html.
const STORAGE_KEY = 'theme'

const prefersDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches

function readStored(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

function writeStored(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Storage blocked (private mode etc.) — the choice just won't persist.
  }
}

/**
 * Light/dark theme. Follows the OS until the visitor picks one, then
 * remembers that choice and pins it with `data-theme` on <html>.
 */
export function useTheme() {
  const [stored, setStored] = useState<Theme | null>(readStored)
  const [systemDark, setSystemDark] = useState(prefersDark)

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e: MediaQueryListEvent) => setSystemDark(e.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (stored) document.documentElement.dataset.theme = stored
    else delete document.documentElement.dataset.theme
  }, [stored])

  const theme: Theme = stored ?? (systemDark ? 'dark' : 'light')

  const toggle = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    writeStored(next)
    setStored(next)
  }, [theme])

  return { theme, toggle }
}
