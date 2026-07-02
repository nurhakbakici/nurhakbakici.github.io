import { projects } from '../data/content'
import './Projects.css'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="projects-section">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-label">Projects</p>
          <h2 className="section-title">Selected work</h2>
        </div>

        {featured.length > 0 && (
          <>
            <p className="projects-subheading">Featured</p>
            <div className="featured-grid">
              {featured.map((project, i) => (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card featured"
                >
                  <span className="project-index">0{i + 1}</span>
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
          </>
        )}

        {others.length > 0 && (
          <>
            <p className="projects-subheading">More projects</p>
            <div className="other-grid">
              {others.map((project, i) => (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                >
                  <span className="project-index">
                    {String(featured.length + i + 1).padStart(2, '0')}
                  </span>
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
          </>
        )}
      </div>
    </section>
  )
}
