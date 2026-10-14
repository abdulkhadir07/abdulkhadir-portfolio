import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { skillGroups } from '../data/site'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index="04 — Skills"
          title="Tools I reach for"
          description="Technologies I use to build backend systems, full-stack applications, and reliable development workflows."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.category} delayMs={index * 80}>
            <article className="surface h-full rounded-3xl p-7 transition duration-300 hover:-translate-y-0.5">
              <h3 className="text-lg font-semibold text-heading">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line bg-canvas px-4 py-2 text-sm font-medium text-body"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
