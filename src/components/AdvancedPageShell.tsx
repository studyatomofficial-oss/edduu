import type { MouseEvent } from 'react'
import type { AdvancedDefinition } from '../data/advanced/types'

type AdvancedPageShellProps = {
  definition: AdvancedDefinition
}

function AdvancedPageShell({ definition }: AdvancedPageShellProps) {
  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault()

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <section className="edduu-advanced-page">
      <div className="edduu-container">
        <header className="edduu-advanced-header">
          <p className="edduu-advanced-eyebrow">
            {definition.eyebrow}
          </p>

          <h1 className="edduu-advanced-title">
            {definition.title}
          </h1>

          <p className="edduu-advanced-summary">
            {definition.summary}
          </p>

          <nav
            className="edduu-advanced-nav"
            aria-label={`${definition.slug} guide sections`}
          >
            {definition.sections.map((section) => (
              <a
                key={section.id}
                href={`#advanced/${definition.slug}`}
                onClick={(event) =>
                  scrollToSection(event, section.id)
                }
              >
                {section.step} · {section.title}
              </a>
            ))}
          </nav>
        </header>

        <div className="edduu-advanced-layout">
          <main className="edduu-advanced-content">
            {definition.sections.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className={`edduu-advanced-section ${
                  index === definition.sections.length - 1
                    ? 'edduu-advanced-final'
                    : ''
                }`}
              >
                <p className="edduu-advanced-step">
                  {section.step} — IMPLEMENTATION
                </p>

                <h2>{section.title}</h2>

                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${section.id}-paragraph-${paragraphIndex}`}>
                    {paragraph}
                  </p>
                ))}

                {section.flow ? (
                  <div className="edduu-advanced-flow">
                    {section.flow.map((item, flowIndex) => (
                      <span key={`${section.id}-flow-${flowIndex}`}>
                        {item}
                        {flowIndex < section.flow!.length - 1 ? ' →' : ''}
                      </span>
                    ))}
                  </div>
                ) : null}

                {section.items ? (
                  <div className="edduu-advanced-grid">
                    {section.items.map(([label, description]) => (
                      <div key={label}>
                        <strong>{label}</strong>
                        <p>{description}</p>
                      </div>
                    ))}
                  </div>
                ) : null}

                {section.production ? (
                  <div className="edduu-advanced-production">
                    {section.production.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                ) : null}

                {section.id === 'verify' ? (
                  <strong>
                    The final question is simple: can the system reliably
                    turn the right knowledge into a useful, production-ready
                    result?
                  </strong>
                ) : null}
              </article>
            ))}
          </main>

          <aside className="edduu-advanced-sidebar">
            <strong>
              {definition.slug.toUpperCase()} navigation
            </strong>

            {definition.sections.map((section) => (
              <a
                key={section.id}
                href={`#advanced/${definition.slug}`}
                onClick={(event) =>
                  scrollToSection(event, section.id)
                }
              >
                {section.step} — {section.title}
              </a>
            ))}

            <div className="edduu-advanced-sidebar-divider" />

            <a
              className="edduu-advanced-lab-link"
              href={`#lab/${definition.slug}`}
            >
              Enter Lab →
            </a>

            <a href={`#knowledge/${definition.slug}`}>
              Back to {definition.slug.toUpperCase()} Knowledge →
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default AdvancedPageShell




