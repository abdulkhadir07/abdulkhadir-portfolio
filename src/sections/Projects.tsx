import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { ArrowUpRightIcon } from '../components/Icons'
import TechnologyBadge from '../components/TechnologyBadge'
import { projects } from '../data/site'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index="03 — Projects"
          title="Projects"
          description="Full-scale software applications built around financial access, student success, community, and safety."
        />
      </Reveal>

      <div className="mt-12 grid gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.title} delayMs={index * 90}>
            <article className="surface group flex h-full flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-1 md:min-h-[220px]">
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                  {project.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-heading">{project.title}</h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-body">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <TechnologyBadge key={technology.name} technology={technology} />
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-heading transition hover:text-accent"
                  >
                    {link.label}
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
