import { projects } from '../content'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projects" title="Selected work">
      <div className="cards">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <p className="tag">{project.tag}</p>
            <h3>{project.title}</h3>
            <p>{project.body}</p>
            <p className="stack">{project.stack}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
