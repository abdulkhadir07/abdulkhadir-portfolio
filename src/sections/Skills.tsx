import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import TechnologyBadge from '../components/TechnologyBadge'
import { skillGroups } from '../data/site'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index="04 — Skills"
          title="Technical capabilities"
          description="Languages, frameworks, infrastructure, model integrations, and engineering tools I use to design, build, test, and deploy full-scale software applications."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.category} delayMs={index * 80}>
            <article className="surface h-full rounded-3xl p-7 transition duration-300 hover:-translate-y-0.5">
              <h3 className="text-lg font-semibold text-heading">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <TechnologyBadge key={skill.name} technology={skill} size="large" />
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
