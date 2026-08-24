const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:your-email@example.com',
  },
  {
    label: 'Phone',
    href: 'tel:+1XXXXXXXXXX',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/abdulkhadir07',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/your-linkedin',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
        Get In Touch
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">Contact Me</h2>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {contactLinks.map((link) => {
          const isExternalLink = link.href.startsWith('https://')

          return (
            <a
              key={link.label}
              href={link.href}
              target={isExternalLink ? '_blank' : undefined}
              rel={isExternalLink ? 'noreferrer' : undefined}
              aria-label={link.label}
              className="rounded-md border border-zinc-700 px-5 py-3 font-semibold text-white transition hover:border-teal-400 hover:text-teal-300"
            >
              {link.label}
            </a>
          )
        })}
      </div>
    </section>
  )
}