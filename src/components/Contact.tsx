import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <div className="social-links">
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
