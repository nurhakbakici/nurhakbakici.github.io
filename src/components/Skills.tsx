import { skills } from '../data/content'
import './Skills.css'

const categoryColors = ['coral', 'sage', 'blue', 'violet'] as const

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technologies I work with</h2>
        </div>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`skill-group skill-${categoryColors[i % categoryColors.length]}`}
            >
              <h3 className="skill-category">{group.category}</h3>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
