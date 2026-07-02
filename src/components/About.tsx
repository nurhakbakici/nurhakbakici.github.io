import './About.css'

export default function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-label">About</p>
          <h2 className="section-title">Building software across the stack</h2>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <p className="about-text">
              I&apos;m a full-stack developer based in İzmir, working across web,
              mobile, and backend systems. My projects range from Laravel fintech
              platforms and Filament admin panels to React Native community apps
              and Python computer-vision pipelines.
            </p>
          </div>
          <div className="about-card about-card-accent">
            <p className="about-text">
              I enjoy taking ideas from prototype to production — whether that
              means shipping a Firebase-backed mobile app for a local association,
              building reservation systems with dynamic pricing, or scoring martial
              arts techniques with pose estimation and DTW algorithms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
