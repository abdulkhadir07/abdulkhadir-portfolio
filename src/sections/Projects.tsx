const projects = [
  {
    title: 'Linkcore',
    description:
      'A software project focused on building reliable backend foundations, clean API design, and practical user-facing workflows.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Backend APIs'],
    githubUrl: 'https://github.com/abdulkhadir07/linkcore',
    demoUrl: 'https://linkcoreweb.netlify.app',
  },
  {
    title: 'OpenCircle',
    description:
      'A campus-focused social application backend with user profiles, invite posts, engagement requests, and chat-related API flows.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'JPA'],
    githubUrl: 'https://github.com/abdulkhadir07/opencircle',
    demoUrl: '',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <p className="mt-3 max-w-2xl text-zinc-300">
          Projects that show how I&apos;m building real products while
          strengthening my software engineering fundamentals.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/60 p-6"
          >
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>

            <p className="mt-4 flex-1 leading-relaxed text-zinc-300">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-zinc-700 px-2.5 py-1 text-sm text-zinc-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-teal-300 hover:text-teal-200"
              >
                GitHub
              </a>

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-teal-300 hover:text-teal-200"
                >
                  Live Demo
                </a>
              ) : (
                <span className="text-sm text-zinc-500">Live demo coming soon</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}