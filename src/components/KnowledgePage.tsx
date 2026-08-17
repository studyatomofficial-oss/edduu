import { technologyById } from '../data/technologies'
import { getAdvancedBySlug } from '../data/advanced'
import type { KnowledgeDefinition } from '../data/knowledge'

type KnowledgePageProps = {
  knowledge: KnowledgeDefinition
}

function KnowledgePage({ knowledge }: KnowledgePageProps) {
  const technology = technologyById.get(knowledge.technologyId)
  const advanced = getAdvancedBySlug(knowledge.slug)

  const relatedTechnologies = (knowledge.relatedTechnologyIds ?? [])
    .map((technologyId) => technologyById.get(technologyId))
    .filter(
      (relatedTechnology): relatedTechnology is NonNullable<typeof relatedTechnology> =>
        Boolean(relatedTechnology),
    )

  return (
    <section className="edduu-knowledge-page">
      <div className="edduu-container">
        <p className="edduu-section-eyebrow">
          AI Knowledge Universe
        </p>

        <div className="edduu-knowledge-header">
          <div>
            <p className="edduu-knowledge-technology">
              {technology?.category ?? 'Technology'}
            </p>

            <h1 className="edduu-knowledge-title">
              {knowledge.title}
            </h1>

            <p className="edduu-knowledge-summary">
              {knowledge.summary}
            </p>
          </div>

          <div className="edduu-knowledge-meta">
            {advanced ? (
              <a
                href={`#advanced/${advanced.slug}`}
                className="edduu-knowledge-advanced-link"
              >
                Advanced
              </a>
            ) : null}

            {technology?.experienceId ? (
              <a
                href={`#lab/${technology.slug}`}
                className="edduu-project-link"
              >
                Enter Lab
              </a>
            ) : null}
          </div>
        </div>

        <div className="edduu-knowledge-layout">
          <main className="edduu-knowledge-content">
            {knowledge.sections.map((section, index) => (
              <article
                key={`${section.title}-${index}`}
                className="edduu-knowledge-section"
              >
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </article>
            ))}
          </main>

          {relatedTechnologies.length > 0 ? (
            <aside className="edduu-knowledge-sidebar">
              <h2>Related technologies</h2>

              <div className="edduu-knowledge-related-list">
                {relatedTechnologies.map((relatedTechnology) => (
                  <a
                    key={relatedTechnology.id}
                    href={`#knowledge/${relatedTechnology.slug}`}
                    className="edduu-knowledge-related-item"
                  >
                    <strong>{relatedTechnology.name}</strong>
                    <span>{relatedTechnology.category}</span>
                  </a>
                ))}
              </div>
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default KnowledgePage










