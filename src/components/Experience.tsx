import { experience } from '../data/content'
import Timeline from './Timeline'

export default function Experience() {
  return (
    <section id="experience" className="section-alt">
      <div className="section-inner">
        <h2>Work Experience</h2>
        <Timeline items={experience} />
      </div>
    </section>
  )
}
