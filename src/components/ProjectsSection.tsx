import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <section className="edduu-section edduu-projects">
      <div className="edduu-container">
        <div className="edduu-projects-header">
          <p className="edduu-section-eyebrow">What I Build</p>

          <h2 className="edduu-section-title">
            Real systems. Practical AI. Production thinking.
          </h2>

          <p className="edduu-section-description">
            Explore systems that connect technology, architecture and
            real-world engineering decisions—not isolated tutorials or
            disconnected demos.
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
      </div>
    </section>
  )
}

export default ProjectsSection