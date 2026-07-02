import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <div className="social-links">
        <a
          href={`mailto:${profile.email}`}
          className="social-btn email"
          aria-label="Email"
        >
          <i className="fa fa-envelope" aria-hidden="true" />
        </a>
        <a
          href={`tel:${profile.phone}`}
          className="social-btn phone"
          aria-label="Phone"
        >
          <i className="fa fa-phone" aria-hidden="true" />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn linkedin"
          aria-label="LinkedIn"
        >
          <i className="fa fa-linkedin" aria-hidden="true" />
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn github"
          aria-label="GitHub"
        >
          <i className="fa fa-github" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
