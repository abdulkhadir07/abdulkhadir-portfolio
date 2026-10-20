import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { highlights } from '../data/site'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index="01 — About"
          title="Curiosity became the foundation for everything I build."
        />
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <Reveal className="space-y-5 text-base leading-relaxed text-body md:text-lg">
          <p>
            I grew up in The Gambia, where access to advanced technology and technical resources
            can be limited. That experience taught me to value every opportunity to learn, and it
            continues to make me curious about how technology works behind the scenes and how far
            it can take us.
          </p>
          <p>
            I chose computer science because I wanted to understand and build the systems I used,
            not only consume them. AI strengthened that ambition. Human imagination gave us
            airplanes, mobile phones, and the internet; I believe the next generation of ideas can
            reach even further and create technology that makes everyday life better.
          </p>
          <p>
            My experience working in financial services gave me a practical understanding of money
            movement and the gap between African financial systems and markets such as the United
            States and Europe. It now informs Linkcore, the remittance platform I am building to
            make cross-border financial access more connected and useful.
          </p>
          <p>
            Linkcore was also the first major application I built from the ground up. Writing its
            early code myself gave me the foundation to understand, review, and improve AI-assisted
            code today. Seeing it function as a complete product showed me that ideas in my head
            could become real software and gave me the confidence to keep building at a larger
            scale.
          </p>
          <p>
            I bring curiosity, persistence, attention to detail, reliability, and resilience to my
            work. I am seeking an internship where I can learn how production software is designed,
            shipped, and maintained while contributing to a team that is equally motivated to
            create technology that improves people&apos;s lives.
          </p>
          <p>
            Outside technology, I am passionate about football. Its discipline, teamwork, and drive
            to improve reflect how I approach engineering: keep learning, respond to setbacks, and
            work toward the next win.
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
