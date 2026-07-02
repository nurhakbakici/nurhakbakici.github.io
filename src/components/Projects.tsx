import { projects } from '../data/content'
import './Projects.css'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="projects-section">
      <div className="section-inner">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Selected work</h2>

        <div className="featured-grid">
          {featured.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card featured"
            >
              <div className="project-card-top">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <p className="project-desc">{project.description}</p>
              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>

        <div className="other-grid">
          {others.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-card-top">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <p className="project-desc">{project.description}</p>
              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
