import { profile } from '../data/content'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img
          src={profile.photo}
          alt={profile.name}
          className="hero-photo"
          width={160}
          height={160}
        />
        <h1>{profile.name}</h1>
        <p className="hero-headline">{profile.headline}</p>
        <p className="hero-location">{profile.location}</p>
        <a href="#contact" className="btn btn-hero">
          Get in Touch
        </a>
      </div>
    </section>
  )
}
