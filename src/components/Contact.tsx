import { contactBlurb, profile } from '../content'
import { Section } from './Section'

export function Contact() {
  return (
    <Section id="contact" title="Let's talk" className="contact">
      <p className="lede">{contactBlurb}</p>
      <ul className="contact-list">
        <li>
          <span>Email</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <span>LinkedIn</span>
          <a href={profile.linkedin.url} target="_blank" rel="noopener">
            {profile.linkedin.label}
          </a>
        </li>
      </ul>
    </Section>
  )
}
