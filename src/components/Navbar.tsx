import { useEffect, useState } from 'react'
import { navLinks, site } from '../data/site'
import { CloseIcon, MenuIcon } from './Icons'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${scrolled || open ? 'glass-nav' : ''}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-lg font-bold tracking-tight text-heading">
          AK<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-3 lg:gap-8">
          <div className="hidden items-center gap-8 text-sm font-medium text-body lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-accent">
                {link.label}
              </a>
            ))}
            <a
              href={site.resumeHref}
              download={site.resumeFileName}
              className="rounded-full border border-line-strong px-4 py-2 text-heading transition hover:border-accent hover:text-accent"
            >
              Resume
            </a>
          </div>
          <ThemeToggle />
          <button
            type="button"
            className="rounded-lg p-2 text-heading lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="absolute inset-x-0 top-full min-h-[100dvh] border-t border-line bg-canvas px-6 py-8 lg:hidden">
          <div className="flex flex-col gap-5 text-lg font-medium text-ink">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a
              href={site.resumeHref}
              download={site.resumeFileName}
              onClick={() => setOpen(false)}
              className="text-accent"
            >
              Download resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
