export const site = {
  name: 'Abdul Khadir Jallow',
  role: 'Software Engineering Student',
  school: 'San Francisco State University',
  location: 'San Francisco, CA',
  resumeHref: `${import.meta.env.BASE_URL}Abdul_Khadir_Jallow_Resume.pdf`,
  resumeFileName: 'Abdul_Khadir_Jallow_Resume.pdf',
  email: 'abdulkhadirjallow743@gmail.com',
  phone: '628-289-5993',
  github: 'https://github.com/abdulkhadir07',
  linkedin: 'https://www.linkedin.com/in/abdulkhadirjallow',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const

export const highlights = [
  { value: 'SFSU', label: 'B.S. Computer Science' },
  { value: '2x', label: "Dean's List" },
  { value: 'Java', label: 'Spring Boot & APIs' },
  { value: 'Open', label: 'To internships' },
]

export type Technology = {
  name: string
  icon?: string
}

const technology = {
  java: { name: 'Java', icon: 'openjdk' },
  typescript: { name: 'TypeScript', icon: 'typescript' },
  javascript: { name: 'JavaScript', icon: 'javascript' },
  sql: { name: 'SQL' },
  springBoot: { name: 'Spring Boot', icon: 'springboot' },
  springSecurity: { name: 'Spring Security', icon: 'springsecurity' },
  springData: { name: 'Spring Data JPA', icon: 'spring' },
  hibernate: { name: 'Hibernate', icon: 'hibernate' },
  react: { name: 'React', icon: 'react' },
  nextjs: { name: 'Next.js', icon: 'nextdotjs' },
  tailwind: { name: 'Tailwind CSS', icon: 'tailwindcss' },
  prisma: { name: 'Prisma', icon: 'prisma' },
  postgres: { name: 'PostgreSQL', icon: 'postgresql' },
  neon: { name: 'Neon', icon: 'neon' },
  jwt: { name: 'JWT', icon: 'jsonwebtokens' },
  gemini: { name: 'Google Gemini', icon: 'googlegemini' },
  awsS3: { name: 'AWS S3', icon: 'amazons3' },
  brevo: { name: 'Brevo', icon: 'brevo' },
  docker: { name: 'Docker', icon: 'docker' },
  vercel: { name: 'Vercel', icon: 'vercel' },
  railway: { name: 'Railway', icon: 'railway' },
  netlify: { name: 'Netlify', icon: 'netlify' },
  render: { name: 'Render', icon: 'render' },
  flyway: { name: 'Flyway', icon: 'flyway' },
  git: { name: 'Git', icon: 'git' },
  githubActions: { name: 'GitHub Actions', icon: 'githubactions' },
  maven: { name: 'Maven', icon: 'apachemaven' },
  testcontainers: { name: 'Testcontainers', icon: 'testcontainers' },
  spotbugs: { name: 'SpotBugs' },
} satisfies Record<string, Technology>

export const experiences = [
  {
    title: 'Gator Leadership Circle',
    organization: 'Career & Leadership Development, San Francisco State University',
    location: 'San Francisco, CA',
    date: 'Fall 2026',
    bullets: [
      'Completed a cohort-based leadership and career-readiness program for first- and second-year students.',
      'Took part in workshops on leadership styles, communication, and resilience, alongside personal strengths assessments.',
      'Built a network of peers and mentors across campus through community-building activities.',
    ],
  },
  {
    title: 'IT Technician',
    organization: 'MSJ Bureau De Change Ltd',
    location: 'The Gambia',
    date: 'Apr 2023 — Dec 2024',
    bullets: [
      'Resolved an average of 20 support requests per week across computer systems and infrastructure, supporting 50+ staff.',
      'Performed routine system checks and maintenance to prevent disruptions and keep operations reliable.',
    ],
  },
  {
    title: 'Cashier',
    organization: 'MSJ Bureau De Change Ltd',
    location: 'The Gambia',
    date: 'Aug 2022 — Mar 2023',
    bullets: [
      'Processed high-volume transactions in a fast-paced environment while meeting compliance and operational standards.',
      'Delivered accurate, professional customer service under pressure.',
    ],
  },
]

export const projects = [
  {
    title: 'Linkcore',
    eyebrow: 'Fintech · Full-scale application',
    description:
      'A digital wallet and remittance platform with OTP onboarding, wallet balances, live FX quotes, domestic and cross-border transfers, searchable transaction history, and printable receipts. Its Spring Boot API uses JWT authentication, an append-only ledger, and KYC validation for higher-value transfers.',
    technologies: [
      technology.java,
      technology.springBoot,
      technology.postgres,
      technology.neon,
      technology.jwt,
      technology.javascript,
      technology.tailwind,
      technology.docker,
      technology.render,
      technology.netlify,
    ],
    links: [
      { label: 'Live Demo', href: 'https://linkcoreweb.netlify.app' },
      { label: 'Frontend', href: 'https://github.com/abdulkhadir07/wallet-frontend' },
      { label: 'API Repository', href: 'https://github.com/abdulkhadir07/digital-wallet-api' },
    ],
  },
  {
    title: 'OpenSFSU',
    eyebrow: 'Campus social · AI',
    description:
      'A campus community platform that helps SFSU students find people to study, eat, and spend time with. Students create short-lived invites, join group chats, participate in Banter discussions, and build reputation, while Gemini supports drafting, safety screening, personal digests, matching explanations, and reply suggestions.',
    technologies: [
      technology.nextjs,
      technology.typescript,
      technology.tailwind,
      technology.prisma,
      technology.postgres,
      technology.neon,
      technology.gemini,
      technology.vercel,
    ],
    links: [
      { label: 'Live Demo', href: 'https://opensfsu.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/abdulkhadir07/opensfsu' },
    ],
  },
  {
    title: 'OpenCircle',
    eyebrow: 'Location-based social',
    description:
      'A production-deployed social platform built around location-based discovery instead of followers. It supports verified accounts, local and global feeds, expiring invite posts, engagement workflows, real-time chat and notifications, persistent discussions, media uploads, ratings, leaderboards, and immediate account deletion.',
    technologies: [
      technology.java,
      technology.springBoot,
      technology.postgres,
      technology.react,
      technology.typescript,
      technology.awsS3,
      technology.brevo,
      technology.docker,
      technology.railway,
      technology.vercel,
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/abdulkhadir07/open-circle' },
      { label: 'Live Demo', href: 'https://open-circle-puce.vercel.app/' },
    ],
  },
]

export const skillGroups = [
  {
    category: 'Programming Languages',
    skills: [technology.java, technology.typescript, technology.javascript, technology.sql],
  },
  {
    category: 'Frameworks and Libraries',
    skills: [
      technology.springBoot,
      technology.springSecurity,
      technology.springData,
      technology.hibernate,
      technology.react,
      technology.nextjs,
      technology.tailwind,
      technology.prisma,
    ],
  },
  {
    category: 'Data, Cloud and Delivery',
    skills: [
      technology.postgres,
      technology.neon,
      technology.awsS3,
      technology.docker,
      technology.vercel,
      technology.railway,
      technology.netlify,
      technology.render,
    ],
  },
  {
    category: 'Developer Tools and AI',
    skills: [
      technology.git,
      technology.githubActions,
      technology.maven,
      technology.flyway,
      technology.testcontainers,
      technology.gemini,
      technology.spotbugs,
    ],
  },
]

// The closing statement near the bottom of the page. Rewrite it in your own words.
export const closingMessage = {
  eyebrow: 'What drives me',
  statement:
    'The limits of technology are still being written, and every opportunity to learn is a chance to help shape what comes next.',
}
