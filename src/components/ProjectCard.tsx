import { ArrowUpRight, Check } from 'lucide-react'
import type { Project } from '../types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
  className={`project-card ${project.accent}`}
  data-cursor="view"
>
      <div className="project-topline">
        <span className="mono">{project.number} / SELECTED WORK</span>
        <span className="project-mark">{project.mark}</span>
      </div>
      <div className="project-copy">
        <span className="project-type">{project.type}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
      <ul className="project-details">
        {project.details.map((detail) => (
          <li key={detail}><Check size={14} strokeWidth={2.5} />{detail}</li>
        ))}
      </ul>
      <div className="tag-row">
        {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
      </div>
      <a className="project-link" href="#contact" aria-label={`Ask me about ${project.name}`}>
        DISCUSS THIS PROJECT <ArrowUpRight size={15} />
      </a>
    </article>
  )
}
