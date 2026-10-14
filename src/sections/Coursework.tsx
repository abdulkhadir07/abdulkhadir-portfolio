import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { coursework, site } from '../data/site'

export default function Coursework() {
  return (
    <section id="coursework" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index="05 — Coursework"
          title="Completed coursework"
          description={`B.S. Computer Science at ${site.school}.`}
        />
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {coursework.map((course, index) => (
          <Reveal key={course.code} delayMs={index * 60}>
            <article className="surface h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-0.5">
              <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                {course.code}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-heading">{course.title}</h3>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
