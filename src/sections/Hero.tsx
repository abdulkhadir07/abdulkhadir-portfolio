import profileImage from '../assets/profile.jpeg'
import { GitHubIcon, LinkedInIcon, DownloadIcon } from '../components/Icons'
import { site } from '../data/site'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen px-6 pt-24 text-ink">
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-6xl items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-chip px-3 py-1 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available for internships
          </p>

          <p className="mt-8 text-lg font-medium text-muted">Hello, I&apos;m</p>
          <h1 className="font-display mt-2 max-w-[14ch] text-5xl font-extrabold tracking-tight text-heading sm:text-6xl lg:text-[4.6rem] lg:leading-[1.05]">
            {site.name}
          </h1>
          <p className="mt-5 max-w-xl text-xl font-medium text-body">
            {site.role} · {site.school}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            I build secure, reliable software end to end, from REST APIs and databases to the
            interfaces people actually use. Right now that means a digital wallet for cross-border
            payments and a safer way for SFSU students to meet.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-accent px-6 py-3 font-semibold text-on-accent transition hover:bg-accent-2"
            >
              Get in touch
            </a>
            <a
              href={site.resumeHref}
              download={site.resumeFileName}
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 font-semibold text-heading transition hover:border-accent hover:text-accent"
            >
              <DownloadIcon className="h-4 w-4" />
              Download resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-chip text-heading transition hover:border-accent hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-chip text-heading transition hover:border-accent hover:text-accent"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <span className="ml-2 text-sm text-subtle">{site.location}</span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="accent-ring float-photo">
            <img
              src={profileImage}
              alt="Abdul Khadir Jallow in graduation attire"
              className="relative z-10 h-72 w-72 rounded-full object-cover ring-4 ring-canvas sm:h-96 sm:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
