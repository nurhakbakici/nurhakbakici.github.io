export type TimelineItem = {
  title: string
  subtitle?: string
  description?: string
  bullets?: string[]
  url?: string
}

export type Project = TimelineItem

export const profile = {
  name: 'Nurhak Bakıcı',
  photo: '/profile.jpg',
  headline:
    'Junior Full Stack Developer | Laravel | .NET | React Native | Computer Vision',
  location: 'Buca, İzmir, Turkey',
  email: 'nurhakbakici@gmail.com',
  phone: '+905346728266',
  github: 'https://github.com/nurhakbakici',
  linkedin: 'https://www.linkedin.com/in/nurhak-bak%C4%B1c%C4%B1-a30781199',
  about: [
    'An MIS graduate and Junior Full Stack Developer with hands-on experience in engineering scalable web and cross-platform mobile applications, optimizing backend architectures, and driving complex, data-heavy systems.',
    'Adept in the .NET and Laravel ecosystems, with practical expertise extending to mobile development via React Native and computer vision-driven software design. Proven leader and project life cycle manager with a record of presiding over a 1,000+ member community and executing large-scale industry conventions.',
  ],
}

export const experience: TimelineItem[] = [
  {
    title: 'Junior Software Developer — Full Stack & Mobile',
    subtitle: 'Basefy Bilişim Hizmetleri A.Ş. | March 2024 — July 2026',
    bullets: [
      'Contribute to end-to-end software development life cycles (SDLC) utilizing PHP and the Laravel framework.',
      'Engage directly with clients to translate business requirements into technical specifications and deliver customized software solutions.',
      'Implement efficient database management using MySQL and MSSQL and clean code practices to ensure project scalability.',
    ],
  },
  {
    title: 'Back-End Developer Intern',
    subtitle:
      'Qimia Enterprise Bilgi ve Teknoloji Hizmetleri A.Ş. | August 2023 — September 2023',
    bullets: [
      'Developed an API for student-course enrollment using .NET and Entity Framework.',
      'Integrated Auth0 and JWT tokens to establish secure, industry-standard authentication and authorization.',
      'Implemented Mediator pattern and Redis caching to optimize system performance and reduce latency.',
      'Configured RabbitMQ for message queuing and established ELK Stack for real-time logging and system monitoring.',
      'Conducted comprehensive unit and integration testing to ensure high software reliability.',
    ],
  },
  {
    title: 'Front-End Developer Intern',
    subtitle:
      'Qimia Enterprise Bilgi ve Teknoloji Hizmetleri A.Ş. | February 2023 — March 2023',
    bullets: [
      'Developed responsive and cross-browser compatible web interfaces using HTML5, CSS3, JavaScript (ES6+), and React.',
      'Transformed Figma designs into production-ready frontend components, strictly adhering to modern UI/UX and accessibility standards.',
    ],
  },
  {
    title: 'Information Technology Intern',
    subtitle: 'Murat Ticaret Kablo SAN. AŞ. | July 2022 — September 2022',
    bullets: [
      'Provided comprehensive technical support to employees, diagnosing and resolving hardware and software-related issues.',
      'Managed organizational software deployments and performed critical system updates.',
    ],
  },
]

export const volunteer: TimelineItem[] = [
  {
    title: 'Event Coordinator & Manager — İzmirCon 2026',
    subtitle: 'December 2025 — Present',
    bullets: [
      'Spearheading the strategic planning and execution of a large-scale tabletop gaming convention with over two thousand participants.',
      'Executing rigorous budget forecasting and cost-benefit analysis to maintain project sustainability in high-inflation environments.',
      'Negotiating with industry-leading board game companies and vendors to secure sponsorships and enhance event quality.',
    ],
  },
  {
    title:
      'President — DEU Fantasy, Science Fiction, and Board Games Community',
    subtitle: 'September 2022 — September 2025',
    bullets: [
      'Presided over a student organization with 1,000+ active members, overseeing activity planning and strategic growth.',
      'Supervised volunteer duties, club room logistics, and resource allocation to ensure consistent community services.',
    ],
  },
]

export const education: TimelineItem[] = [
  {
    title: 'B.Sc. Management Information Systems',
    subtitle: 'Dokuz Eylül University | September 2021 — July 2026',
    description:
      'Focus on software engineering, information systems, and applied development across web, mobile, and backend platforms.',
  },
  {
    title: 'High School Diploma',
    subtitle: 'İstanbul Kadıköy Lisesi | September 2016 — July 2020',
  },
]

export const projects: Project[] = [
  {
    title: 'Kule Sakinleri Mobile App',
    description:
      'Developed a cross-platform mobile application using React Native and Expo, featuring real-time notifications, a modular UI design, and integrated state management for community engagement.',
    url: 'https://github.com/nurhakbakici/DernekYonetimSistemi',
  },
  {
    title: 'HEMA Motion Analyzer',
    description:
      'Conceptualized a PC-based video analysis app for Historical European Martial Arts (HEMA) practitioners. Uses computer vision models (OpenCV/MediaPipe) for real-time skeletal tracking, movement trajectory extraction, and velocity mapping to provide data-driven biomechanical feedback.',
    url: 'https://github.com/nurhakbakici/hema-motion-analyzer',
  },
  {
    title: 'Smart Bin IoT System',
    description:
      'Designed and implemented an automated waste monitoring system using a Raspberry Pi 3B+ integrated with distance and gas sensors. Configured localized data processing pipelines to trigger real-time system alerts and automated email notifications based on sensor threshold analysis.',
  },
  {
    title: 'Aykutsan Stok Yönetim',
    description:
      'Stock management dashboard with CRUD operations, session control, and Chart.js analytics — university information systems project.',
    url: 'https://github.com/nurhakbakici/BilisimAnalizProje',
  },
]

export const skills = [
  {
    category: 'Programming & Backend',
    items: [
      'PHP (Laravel)',
      'C# (.NET Core)',
      'Entity Framework',
      'TypeScript',
      'JavaScript',
    ],
  },
  {
    category: 'Frontend & Mobile',
    items: ['React Native', 'Expo', 'React', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    category: 'Databases & Caching',
    items: ['MySQL', 'MSSQL', 'NoSQL', 'Redis'],
  },
  {
    category: 'Data & Tools',
    items: ['RabbitMQ', 'ELK Stack', 'Auth0', 'JWT', 'Figma', 'Git'],
  },
  {
    category: 'Soft Skills',
    items: [
      'Project Management',
      'Financial Planning',
      'Team Leadership',
      'Crisis Management',
      'Stakeholder Relations',
    ],
  },
  {
    category: 'Languages',
    items: ['Turkish — Native', 'English — B2'],
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
