import { volunteer } from '../data/content'
import Timeline from './Timeline'

export default function Volunteer() {
  return (
    <section id="volunteer" className="section">
      <h2>Volunteer Experience</h2>
      <Timeline items={volunteer} />
    </section>
  )
}
