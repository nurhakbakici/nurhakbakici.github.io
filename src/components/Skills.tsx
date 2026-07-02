import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section-alt">
      <div className="section-inner">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-category">
              <h3>{group.category}</h3>
              <ul>
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
