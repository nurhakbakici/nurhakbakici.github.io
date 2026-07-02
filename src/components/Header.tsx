import { navLinks, profile } from '../data/content'
import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav className={open ? 'active' : ''}>
        <div className="logo">{profile.name}</div>
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
