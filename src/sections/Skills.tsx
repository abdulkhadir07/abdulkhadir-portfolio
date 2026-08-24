const skillGroups = [
  {
    category: 'Programming Languages',
    skills: ['Java', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate',
      'React',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Databases & Cloud',
    skills: ['PostgreSQL', 'Flyway', 'Docker'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'GitHub Actions', 'Maven', 'Testcontainers', 'SpotBugs'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">Skills</h2>
        <p className="mt-3 max-w-2xl text-zinc-300">
          Technologies I&apos;m using to build backend systems, full-stack
          applications, and reliable development workflows.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.category}
            className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-6"
          >
            <h3 className="text-lg font-semibold text-white">
              {group.category}
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}