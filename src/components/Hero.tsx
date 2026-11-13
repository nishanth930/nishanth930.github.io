import { profile, stats } from '../content'
import { Rich } from './Rich'

export function Hero() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-text">
          <p className="eyebrow">{profile.eyebrow}</p>
          <h1>{profile.headline}</h1>
          <p className="lede">
            <Rich text={profile.lede} />
          </p>
          <div className="cta">
            <a className="btn btn-primary" href={profile.resume.href} download={profile.resume.filename}>
              Download résumé
            </a>
            <a className="btn" href="#contact">
              Get in touch
            </a>
          </div>
          <p className="location">{profile.location}</p>
        </div>
        <figure className="hero-photo">
          <img src="/assets/profile.jpg" alt={`Portrait of ${profile.name}`} width={520} height={520} />
        </figure>
      </section>

      <section className="stats wrap" aria-label="Highlights">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>
    </>
  )
}
