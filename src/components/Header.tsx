import { navLinks, profile } from '../data/content'
import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav className={open ? 'active' : ''}>
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          {profile.name}
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
