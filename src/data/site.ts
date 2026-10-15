export const site = {
  name: 'Abdul Khadir Jallow',
  role: 'Full-Stack Developer',
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
  { label: 'Coursework', href: '#coursework' },
  { label: 'Contact', href: '#contact' },
] as const

export const highlights = [
  { value: 'SFSU', label: 'B.S. Computer Science' },
  { value: '2x', label: "Dean's List" },
  { value: 'Java', label: 'Spring Boot & APIs' },
  { value: 'Open', label: 'To internships' },
]

export const experiences = [
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
    eyebrow: 'Fintech · Full-stack',
    description:
      'A digital wallet and remittance web app for sending money across borders, managing a wallet balance, depositing and withdrawing funds, and tracking transaction history. The Spring Boot API handles JWT auth, live transfer quotes, multi-currency FX conversion, and KYC checks on larger transfers.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'JavaScript', 'Tailwind CSS'],
    links: [
      { label: 'Live Demo', href: 'https://linkcoreweb.netlify.app' },
      { label: 'Frontend', href: 'https://github.com/abdulkhadir07/wallet-frontend' },
      { label: 'Backend API', href: 'https://github.com/abdulkhadir07/digital-wallet-api' },
    ],
  },
  {
    title: 'OpenSFSU',
    eyebrow: 'Campus social · AI',
    description:
      'Helps SFSU students find people to study, eat, and hang out with today. Students post open invites, a group chat opens once the host accepts, and Google Gemini drafts invites and screens every post and message for safety.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Gemini'],
    links: [
      { label: 'Live Demo', href: 'https://opensfsu.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/abdulkhadir07/opensfsu' },
    ],
  },
  {
    title: 'OpenCircle',
    eyebrow: 'Location-based social',
    description:
      'Location-based invites and conversations without a follower system. Covers expiring invite posts, engagement requests, chat rooms after an accepted invite, discussion threads, and user ratings.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'REST APIs'],
    links: [{ label: 'GitHub', href: 'https://github.com/abdulkhadir07/open-circle' }],
  },
]

export const skillGroups = [
  {
    category: 'Programming Languages',
    skills: ['Java', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frameworks and Libraries',
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
    category: 'Developer Tools',
    skills: ['Git', 'GitHub Actions', 'Maven', 'Testcontainers', 'SpotBugs'],
  },
]

export const coursework = [
  { code: 'CSC 101', title: 'Introduction to Computing' },
  { code: 'CSC 215', title: 'Intermediate Computer Programming' },
  { code: 'CSC 220', title: 'Data Structures' },
]

// The closing statement near the bottom of the page. Rewrite it in your own words.
export const closingMessage = {
  eyebrow: 'What drives me',
  statement:
    'I build software people can trust with what matters most to them: their money, their time, and their safety.',
  detail:
    'Every project I take on is held to that standard, from the first schema to the last pixel.',
}
