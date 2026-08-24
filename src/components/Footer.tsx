export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-zinc-400 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Abdul Khadir Jallow</p>

        <a
          href="#home"
          className="font-medium text-zinc-300 transition hover:text-teal-300"
        >
          Back to top
        </a>
      </div>
    </footer>
  )
}