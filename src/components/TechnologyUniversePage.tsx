import { technologyDomains } from '../data/technologyDomains'
import { technologies } from '../data/technologies'
import { getTechnologyPrimaryHref } from '../utils/technologyRouting'

function TechnologyUniversePage() {
  return (
    <section className="edduu-technology-universe-page">
      <div className="edduu-container">

        <header className="edduu-technology-universe-page-header">
          <p className="edduu-section-eyebrow">
            Technology universe
          </p>

          <h1 className="edduu-section-title">
            10 technology domains. 100+ technologies.
          </h1>

          <p className="edduu-section-description">
            Explore the technologies behind modern AI systems,
            applications, data platforms, infrastructure, and
            production systems.
          </p>
        </header>

        <div className="edduu-technology-universe-page-grid">
          {technologyDomains.map((domain) => {
            const domainTechnologies = technologies.filter((technology) =>
              domain.moduleIds.includes(technology.moduleId),
            )

            return (
              <article
                key={domain.id}
                className="edduu-technology-universe-domain"
              >
                <div className="edduu-technology-universe-domain-header">
                  <p className="edduu-technology-universe-domain-index">
                    {String(
                      technologyDomains.indexOf(domain) + 1,
                    ).padStart(2, '0')}
                  </p>

                  <div>
                    <h2>{domain.name}</h2>

                    <p>{domain.description}</p>
                  </div>
                </div>

                {domainTechnologies.length > 0 ? (
                  <div className="edduu-technology-universe-page-pills">
                    {domainTechnologies.map((technology) => {
                      const content = (
                        <span className="edduu-technology-pill">
                          {technology.shortName ?? technology.name}
                        </span>
                      )

                      const href = getTechnologyPrimaryHref(technology.slug)

                      if (href) {
                        return (
                          <a
                            key={technology.slug}
                            href={href}
                            className="edduu-technology-pill edduu-technology-pill-link"
                          >
                            {technology.shortName ?? technology.name}
                          </a>
                        )
                      }

                      return (
                        <span key={technology.slug}>
                          {content}
                        </span>
                      )
                    })}
                  </div>
                ) : (
                  <p className="edduu-technology-universe-coming-soon">
                    This domain is part of the expanding EDDUU technology universe.
                  </p>
                )}
              </article>
            )
          })}
        </div>

        <div className="edduu-technology-universe-page-footer">
          <p>
            EDDUU is designed to grow from a focused technology
            foundation into a broader universe of modern engineering
            systems.
          </p>

          <a href="#" className="edduu-button edduu-button-secondary edduu-technology-universe-back-button">
            Back to EDDUU
          </a>
        </div>

      </div>
    </section>
  )
}

export default TechnologyUniversePage







