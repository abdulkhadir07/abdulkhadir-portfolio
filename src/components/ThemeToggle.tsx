import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from './Icons'

type Theme = 'light' | 'dark'

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'light' ? '#f7f8fa' : '#07090d')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Storage can be blocked; the theme still applies for this visit.
    }
  }, [theme])

  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-heading transition hover:border-accent hover:text-accent ${className}`}
    >
      {theme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  )
}
