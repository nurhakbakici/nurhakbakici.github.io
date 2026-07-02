import { profile } from '../data/content'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner section-inner">
        <p className="hero-eyebrow">{profile.location}</p>
        <h1 className="hero-title">
          <span className="hero-name">{profile.name}</span>
          <span className="hero-role">{profile.role}</span>
        </h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View projects
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub profile
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">8+</span>
            <span className="stat-label">Projects shipped</span>
          </div>
          <div className="stat">
            <span className="stat-value">Full-stack</span>
            <span className="stat-label">Web & mobile</span>
          </div>
          <div className="stat">
            <span className="stat-value">AI/ML</span>
            <span className="stat-label">Computer vision</span>
          </div>
        </div>
      </div>
      <div className="hero-glow" aria-hidden="true" />
    </section>
  )
}
