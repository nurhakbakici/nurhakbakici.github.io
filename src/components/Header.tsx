import { useState } from 'react'
import { navLinks, profile } from '../data/content'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" className="logo" onClick={() => setOpen(false)}>
          {profile.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </a>

        <nav
          className={`nav ${open ? 'nav-open' : ''}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="header-cta"
          >
            GitHub
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
