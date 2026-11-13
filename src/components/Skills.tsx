import { skills } from '../content'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills">
        {skills.map((group) => (
          <div key={group.group}>
            <h3>{group.group}</h3>
            <p>{group.items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
