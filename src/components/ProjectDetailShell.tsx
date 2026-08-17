import { technologyById } from '../data/technologies'
import type { ProjectDefinition } from '../types/learning'
import { getTechnologyPrimaryHref } from '../utils/technologyRouting'

type ProjectDetailShellProps = {
  project: ProjectDefinition
}

function ProjectDetailShell({ project }: ProjectDetailShellProps) {
  const components = project.architecture.components
  const componentMap = new Map(components.map((component) => [component.id, component]))

  const technologies = project.technologyIds
    .map((technologyId) => technologyById.get(technologyId))
    .filter((technology): technology is NonNullable<typeof technology> => Boolean(technology))

  const getTechnologyWhyUsed = (technology: NonNullable<typeof technologies[number]>, roles: string[]) => {
    if (roles.length > 0) {
      return `This supports the ${roles.join(', ')} layer of the system.`
    }

    return `This is a core part of the ${technology.name.toLowerCase()} architecture.`
  }

  return (
    <section className="edduu-project-detail">
      <div className="edduu-container">
        <p className="edduu-section-eyebrow">Project</p>

        <h1 className="edduu-project-detail-title">{project.title}</h1>

        <p className="edduu-project-detail-summary">{project.summary}</p>

        <div className="edduu-project-detail-grid">
          <article className="edduu-project-detail-panel">
            <h2>Purpose</h2>
            <p>{project.purpose}</p>
          </article>

          <article className="edduu-project-detail-panel">
            <h2>Technologies used</h2>
            <ul className="edduu-project-tech-list">
              {technologies.map((technology) => {
                const roles = components
                  .filter((component) => component.techId === technology.id)
                  .map((component) => component.label)

                const techHref = getTechnologyPrimaryHref(technology.slug)

                const techName = techHref ? (
                  <a href={techHref} className="edduu-project-tech-name edduu-project-link">
                    {technology.name}
                  </a>
                ) : (
                  <span className="edduu-project-tech-name">{technology.name}</span>
                )

                const content = (
                  <li key={technology.id} className="edduu-project-tech-item">
                    <div className="edduu-project-tech-header">
                      {techName}
                      {techHref ? (
                  <a href={techHref} className="edduu-project-link">
                          Learn this →
                        </a>
                      ) : (
                        <span className="edduu-project-link is-locked">Coming Soon</span>
                      )}
                    </div>
                    <p className="edduu-project-tech-role">
                      {roles.length > 0 ? roles.join(' · ') : 'Core system component'}
                    </p>
                    <p className="edduu-project-tech-reason">
                      {getTechnologyWhyUsed(technology, roles)}
                    </p>
                  </li>
                )

                return content
              })}
            </ul>
          </article>
        </div>

        <article className="edduu-project-detail-panel edduu-project-detail-panel-wide">
          <h2>Architecture</h2>

          <div className="edduu-project-architecture-grid">
            {components.map((component) => {
              const tech = component.techId ? technologyById.get(component.techId) : null

              return (
                <div key={component.id} className="edduu-project-architecture-card">
                  <span className="edduu-project-architecture-id">{component.id}</span>
                  <strong>{component.label}</strong>
                  {tech ? <span className="edduu-project-architecture-tech">{tech.name}</span> : null}
                </div>
              )
            })}
          </div>

          <div className="edduu-project-flow-list">
            {project.architecture.flow.map((step, index) => (
              <div key={`${step.from}-${step.to}-${index}`} className="edduu-project-flow-item">
                <span>{componentMap.get(step.from)?.label ?? step.from}</span>
                <span className="edduu-project-flow-arrow">→</span>
                <span>{componentMap.get(step.to)?.label ?? step.to}</span>
                {step.label ? <small>{step.label}</small> : null}
              </div>
            ))}
          </div>
        </article>

        {project.failureScenarios && project.failureScenarios.length > 0 ? (
          <article className="edduu-project-detail-panel">
            <h2>Failure scenarios</h2>
            <ul className="edduu-project-list">
              {project.failureScenarios.map((scenario) => {
                const relatedTechnology = scenario.relatedTechId
                  ? technologyById.get(scenario.relatedTechId)
                  : null

                return (
                  <li key={scenario.title}>
                    <strong>{scenario.title}</strong>
                    <p>
                      <strong>Consequence:</strong> {scenario.description}
                    </p>
                    <p>
                      <strong>Mitigation:</strong>{' '}
                      {relatedTechnology?.experienceId ? (
                        <a href={getTechnologyPrimaryHref(relatedTechnology.slug) ?? '#technologies'} className="edduu-project-link">
                          Review {relatedTechnology.name}
                        </a>
                      ) : (
                        'Review the system safeguards and operational checks around this dependency.'
                      )}
                    </p>
                  </li>
                )
              })}
            </ul>
          </article>
        ) : null}

        {project.productionConcerns && project.productionConcerns.length > 0 ? (
          <article className="edduu-project-detail-panel">
            <h2>Production concerns</h2>
            <ul className="edduu-project-list">
              {project.productionConcerns.map((concern) => (
                <li key={concern}>{concern}</li>
              ))}
            </ul>
          </article>
        ) : null}
      </div>
    </section>
  )
}

export default ProjectDetailShell




