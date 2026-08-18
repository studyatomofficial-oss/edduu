import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function AllProjectsPage() {
  return (
    <section className="edduu-projects edduu-all-projects-page">
      <div className="edduu-container">
        <div className="edduu-projects-header">
          <p className="edduu-section-eyebrow">What I Build</p>

          <h1 className="edduu-section-title">
            Real systems. Practical AI. Production thinking.
          </h1>

          <p className="edduu-section-description">
            Explore the complete EDDUU project universe—systems designed to
            connect technology, architecture, engineering decisions, and
            real-world production thinking.
          </p>
        </div>

        <div className="edduu-projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              number={String(index + 1).padStart(2, '0')}
              title={project.title}
              description={project.summary}
              tags={project.technologyIds}
              learningLine={project.purpose}
              href={`#project/${project.slug}`}
            />
          ))}
        </div>

        <div className="edduu-projects-footer">
          <a href="/" className="edduu-button edduu-button-secondary">
            ← Back to EDDUU
          </a>

          <a href="#avinash" className="edduu-button edduu-button-primary">
            Meet Avinash →
          </a>
        </div>
      </div>
    </section>
  )
}

export default AllProjectsPage
