import { projects } from '../data/content'
import Timeline from './Timeline'

export default function Projects() {
  return (
    <section id="projects" className="section-alt">
      <div className="section-inner">
        <h2>Projects</h2>
        <Timeline items={projects} />
      </div>
    </section>
  )
}
