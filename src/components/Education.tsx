import { education } from '../data/content'
import Timeline from './Timeline'

export default function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <Timeline items={education} />
    </section>
  )
}
