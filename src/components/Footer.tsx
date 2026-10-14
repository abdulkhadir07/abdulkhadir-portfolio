import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-subtle sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a href="#home" className="font-medium text-body transition hover:text-accent">
          Back to top
        </a>
      </div>
    </footer>
  )
}
