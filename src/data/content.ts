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
  headline: 'Full-Stack Developer | Laravel | React | Mobile Apps | AI/ML',
  location: 'İzmir, Turkey',
  github: 'https://github.com/nurhakbakici',
  about: [
    'I am a full-stack developer based in İzmir, working across web, mobile, and backend systems. My experience spans Laravel fintech platforms, Filament admin panels, React Native community apps, and Python computer-vision pipelines.',
    'I enjoy taking ideas from prototype to production — whether that means shipping a Firebase-backed mobile app for a local association, building reservation systems with dynamic pricing, or scoring martial arts techniques with pose estimation and DTW algorithms.',
  ],
}

export const experience: TimelineItem[] = [
  {
    title: 'Full-Stack Developer',
    subtitle: 'Ofinans Teknik | İzmir, Turkey',
    bullets: [
      'Developed and maintained Laravel-based fintech platforms including NFT asset management, affiliate systems, and payment integrations.',
      'Worked on the Ofinans core platform — multi-domain API infrastructure with Redis, Horizon, and Vue-based admin tooling.',
      'Built checkout flows, KYC modules, and admin dashboards using Laravel, Redis, and Tailwind.',
    ],
  },
  {
    title: 'Backend Developer — Reservoria',
    subtitle: 'Freelance / Collaboration',
    bullets: [
      'Built hospitality reservation backend with property management, dynamic pricing, and financial reporting.',
      'Implemented Filament 3 admin panel, iCal sync, Spatie Media Library, and AWS S3 integrations.',
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'HEMA Motion Analyzer',
    description:
      'AI-powered martial arts coaching app. Extracts MediaPipe pose landmarks from expert videos, then scores your technique with DTW spatial matching, timing correlation, and smoothness metrics.',
    url: 'https://github.com/nurhakbakici/hema-motion-analyzer',
  },
  {
    title: 'Kule Sakinleri',
    description:
      'Mobile app for a community association — room reservations, library, events, dues tracking, announcements, and an admin web panel. Built with Expo, React Native, and Firebase.',
    url: 'https://github.com/nurhakbakici/DernekYonetimSistemi',
  },
  {
    title: 'Reservoria',
    description:
      'Hospitality reservation backend with property management, dynamic pricing, financial reports, iCal sync, and Filament admin panel.',
  },
  {
    title: 'Mordheim Warband Manager',
    description:
      'Warband management tool for Mordheim tabletop gaming — members, equipment, skills, and battle logs across 16 database tables.',
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
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend',
    items: ['Laravel', 'PHP', 'FastAPI', 'Python', 'Node.js', 'Firebase'],
  },
  {
    category: 'Mobile & Cloud',
    items: ['React Native', 'Expo', 'Supabase', 'AWS S3', 'Redis'],
  },
  {
    category: 'AI & Tools',
    items: ['MediaPipe', 'OpenCV', 'Docker', 'Git', 'Filament'],
  },
  {
    category: 'Languages',
    items: ['Turkish — Native', 'English'],
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
