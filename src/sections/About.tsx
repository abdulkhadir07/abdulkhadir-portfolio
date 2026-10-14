import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { highlights } from '../data/site'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index="01 — About"
          title="Building useful software with a strong engineering core."
        />
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <Reveal className="space-y-5 text-base leading-relaxed text-body md:text-lg">
          <p>
            I&apos;m a computer science student at San Francisco State University, focused on
            software engineering, data structures, algorithms, and full-stack development.
          </p>
          <p>
            I enjoy turning ideas into usable products — especially work that combines backend
            systems, clean user experiences, and real-world problem solving. I&apos;m currently
            building a financial app.
          </p>
          <p>
            I&apos;m looking for internships where I can contribute to meaningful products, ship
            with care, and learn from experienced teams.
          </p>
        </Reveal>

        <Reveal delayMs={120} className="grid grid-cols-2 gap-3">
          {highlights.map((item) => (
            <article key={item.label} className="surface rounded-2xl p-5">
              <p className="font-display text-2xl font-bold text-heading">{item.value}</p>
              <p className="mt-2 text-sm text-muted">{item.label}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
