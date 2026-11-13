import { experience } from '../content'
import { Rich } from './Rich'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((role) => (
          <li key={role.period} className={role.earlier ? 'earlier' : undefined}>
            <div className="when">{role.period}</div>
            <div className="what">
              <h3>
                {role.title}
                {role.org && <span> · {role.org}</span>}
              </h3>
              {role.sub && <p className="sub">{role.sub}</p>}
              {role.summary && (
                <p>
                  <Rich text={role.summary} />
                </p>
              )}
              {role.bullets && (
                <ul>
                  {role.bullets.map((b, i) => (
                    <li key={i}>
                      <Rich text={b} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
