import { profile } from '../data/content'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-inner contact-inner">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let&apos;s connect</h2>
        <p className="contact-text">
          Open to collaboration, freelance work, and interesting projects.
          Reach out via GitHub or explore my repositories.
        </p>
        <div className="contact-links">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-link-label">GitHub</span>
            <span className="contact-link-value">@nurhakbakici</span>
          </a>
          <div className="contact-link">
            <span className="contact-link-label">Location</span>
            <span className="contact-link-value">{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
