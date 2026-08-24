import profileImage from '../assets/profile.jpeg'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-zinc-950 px-6 text-zinc-100">
      <nav className="mx-auto flex max-w-5xl items-center justify-between py-6">
        <a href="#home" className="text-xl font-bold text-white">
          Abdul Khadir Jallow
        </a>

        <div className="hidden gap-6 text-sm font-medium text-zinc-300 sm:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-teal-300">
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-5xl items-center gap-12 py-16 md:grid-cols-2">
        <div className="flex justify-center md:justify-start">
          <img
            src={profileImage}
            alt="Abdul Khadir Jallow"
            className="h-72 w-72 rounded-full object-cover ring-4 ring-zinc-800 md:h-96 md:w-96"
          />
        </div>

        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-zinc-400">Hello, I&apos;m</p>

          <h1 className="mt-2 text-5xl font-bold text-white md:text-6xl">
            Abdul Khadir Jallow
          </h1>

          <p className="mt-4 text-2xl font-semibold text-zinc-300">
            Computer Science Student
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="/Abdul-Khadir-Jallow-Resume.pdf"
              download
              className="rounded-full border border-zinc-600 px-6 py-3 font-semibold text-white transition hover:border-teal-400 hover:text-teal-300"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="rounded-full bg-teal-400 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-teal-300"
            >
              Contact Info
            </a>
          </div>

          <div className="mt-6 flex justify-center gap-4 md:justify-start">
            <a
              href="https://www.linkedin.com/in/abdulkhadirjallow"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white font-bold text-zinc-950 transition hover:bg-teal-300"
            >
              in
            </a>

            <a
              href="https://github.com/abdulkhadir07"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-zinc-950 transition hover:bg-teal-300"
            >
              GH
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}