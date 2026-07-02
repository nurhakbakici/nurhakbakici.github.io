export type Project = {
  title: string
  description: string
  tags: string[]
  url: string
  featured?: boolean
}

export const profile = {
  name: 'Nurhak Bakıcı',
  role: 'Full-Stack Developer',
  location: 'İzmir, Turkey',
  tagline:
    'I build web apps, mobile experiences, and AI-powered tools — from Laravel backends to React Native and computer vision pipelines.',
  github: 'https://github.com/nurhakbakici',
}

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
    category: 'Tools',
    items: ['Git', 'Docker', 'Filament', 'MediaPipe', 'OpenCV'],
  },
]

export const projects: Project[] = [
  {
    title: 'HEMA Motion Analyzer',
    description:
      'AI-powered martial arts coaching app. Extracts MediaPipe pose landmarks from expert videos, then scores your technique with DTW spatial matching, timing correlation, and smoothness metrics.',
    tags: ['Python', 'FastAPI', 'React', 'MediaPipe', 'OpenCV'],
    url: 'https://github.com/nurhakbakici/hema-motion-analyzer',
    featured: true,
  },
  {
    title: 'Kule Sakinleri',
    description:
      'Mobile app for a community association — room reservations, library, events, dues tracking, announcements, and an admin web panel. Built with Expo and Firebase.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
    url: 'https://github.com/nurhakbakici/DernekYonetimSistemi',
    featured: true,
  },
  {
    title: 'Reservoria',
    description:
      'Hospitality reservation backend with property management, dynamic pricing, financial reports, iCal sync, and Filament admin panel.',
    tags: ['Laravel', 'Filament', 'PHP', 'MySQL'],
    url: 'https://github.com/nurhakbakici',
  },
  {
    title: 'Mordheim Warband Manager',
    description:
      'Warband management tool for Mordheim tabletop gaming — members, equipment, skills, and battle logs across 16 database tables.',
    tags: ['Laravel', 'Tailwind', 'Breeze', 'MySQL'],
    url: 'https://github.com/nurhakbakici',
  },
  {
    title: 'Aykutsan Stok Yönetim',
    description:
      'Stock management dashboard with CRUD operations, session control, and Chart.js analytics — university information systems project.',
    tags: ['PHP', 'MySQL', 'jQuery', 'Bootstrap'],
    url: 'https://github.com/nurhakbakici/BilisimAnalizProje',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
