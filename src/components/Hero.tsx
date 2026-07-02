import { profile } from '../data/content'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-avatar" aria-hidden="true">
          NB
        </div>
        <h1>{profile.name}</h1>
        <p>{profile.headline}</p>
        <a href="#contact" className="btn">
          Get in Touch
        </a>
      </div>
    </section>
  )
}
