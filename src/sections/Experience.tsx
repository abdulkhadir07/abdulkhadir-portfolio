const experiences = [
  {
    title: 'Computer Science Student',
    organization: 'San Francisco State University',
    date: '2025 - Present',
    description:
      'Building a foundation in software engineering, data structures, algorithms, object-oriented programming, and full-stack development.',
  },
  {
    title: 'Fintech App Developer',
    organization: 'Independent Project',
    date: '2026 - Present',
    description:
      'Designing and building a fintech application for global transfers with a focus on secure workflows, backend reliability, and a simple user experience.',
  },
  {
    title: 'Backend Developer',
    organization: 'Campus Social App',
    date: '2026',
    description:
      'Developed backend features for user profiles, invite posts, engagement requests, and chat flows using Java, Spring Boot, and REST API design.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="mb-8 text-3xl font-bold text-white">Experience</h2>

      <div className="space-y-6">
        {experiences.map((experience) => (
          <article
            key={experience.title}
            className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {experience.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-teal-400">
                  {experience.organization}
                </p>
              </div>

              <p className="text-sm text-zinc-400">{experience.date}</p>
            </div>

            <p className="mt-4 leading-relaxed text-zinc-300">
              {experience.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}