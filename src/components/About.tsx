import { about } from '../content'
import { Rich } from './Rich'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" title="About">
      <div className="two-col">
        <div className="prose">
          {about.paragraphs.map((p, i) => (
            <p key={i}>
              <Rich text={p} />
            </p>
          ))}
        </div>
        <ul className="facts">
          {about.facts.map((fact) => (
            <li key={fact.label}>
              <span>{fact.label}</span>
              {fact.value}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
