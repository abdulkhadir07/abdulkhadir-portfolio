import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from '../components/Icons'
import { site } from '../data/site'

const contactLinks = [
  {
    label: 'Email',
    href: `mailto:${site.email}`,
    detail: site.email,
    icon: MailIcon,
    external: false,
  },
  {
    label: 'Phone',
    href: `tel:${site.phone}`,
    detail: site.phone,
    icon: PhoneIcon,
    external: false,
  },
  {
    label: 'GitHub',
    href: site.github,
    detail: '@abdulkhadir07',
    icon: GitHubIcon,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: site.linkedin,
    detail: 'abdulkhadirjallow',
    icon: LinkedInIcon,
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          align="center"
          index="05 — Contact"
          title="Let’s build something useful."
          description="I’m open to internships, collaborations, and conversations about software engineering, AI product development, and creating useful applications."
        />
      </Reveal>

      <Reveal delayMs={100}>
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {contactLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                className="surface group flex items-center justify-between rounded-3xl p-6 transition duration-300 hover:-translate-y-0.5"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-chip text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-heading">{link.label}</span>
                    <span className="mt-1 block truncate text-sm text-muted">{link.detail}</span>
                  </span>
                </span>
                <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-subtle transition group-hover:text-accent" />
              </a>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
