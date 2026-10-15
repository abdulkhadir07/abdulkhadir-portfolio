import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { experiences } from '../data/site'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index="02 — Experience"
          title="Where I’ve built the habits."
          description="Leadership training at SFSU, and the roles where I learned to keep systems running and people supported."
        />
      </Reveal>

      <div className="relative mt-12 space-y-6 before:absolute before:top-3 before:bottom-3 before:left-[11px] before:w-px before:bg-line md:before:left-[15px]">
        {experiences.map((experience, index) => (
          <Reveal key={experience.title} delayMs={index * 80}>
            <article className="relative grid gap-4 pl-10 md:grid-cols-[180px_1fr] md:gap-8 md:pl-12">
              <span className="absolute top-2 left-0 h-6 w-6 rounded-full border border-accent/40 bg-canvas shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent)_14%,transparent)]">
                <span className="absolute inset-1.5 rounded-full bg-accent" />
              </span>
              <p className="pt-1 text-sm font-medium tracking-wide text-subtle">
                {experience.date}
              </p>
              <div className="surface rounded-2xl p-6 transition duration-300 hover:-translate-y-0.5">
                <h3 className="text-xl font-semibold text-heading">{experience.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {experience.organization}
                  <span className="text-subtle"> · {experience.location}</span>
                </p>
                <ul className="mt-4 space-y-2 leading-relaxed text-body">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
