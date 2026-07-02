import { profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      {profile.about.map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}
    </section>
  )
}
