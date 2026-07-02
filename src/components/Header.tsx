import { navLinks, profile } from '../data/content'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" className="logo">
          {profile.name.split(' ').map((n) => n[0]).join('')}
        </a>
        <nav className="nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="header-cta"
        >
          GitHub
        </a>
      </div>
    </header>
  )
}
