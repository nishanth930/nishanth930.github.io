import { certifications, education } from '../content'
import { Section } from './Section'

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications & education">
      <div className="two-col">
        <div>
          <h3 className="minor">Certifications</h3>
          <ul className="list">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="minor">Education</h3>
          <ul className="list edu">
            {education.map((edu) => (
              <li key={edu.school}>
                <strong>{edu.school}</strong>
                <br />
                {edu.detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
