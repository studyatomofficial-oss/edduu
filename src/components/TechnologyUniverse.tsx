const technologyGroups = [
  {
    title: 'AI / Intelligence',
    items: ['AI', 'GenAI', 'LLMs', 'RAG', 'Agents', 'MCP'],
  },
  {
    title: 'Application engineering',
    items: ['Full Stack', 'Python', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'Data',
    items: ['Data', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Infrastructure',
    items: ['Cloud', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Systems / execution',
    items: ['Systems', 'Production', 'GitHub Actions', 'Loop Engineering'],
  },
]

function TechnologyUniverse() {
  return (
    <section className="edduu-technology-universe" aria-labelledby="edduu-technology-universe-title">
      <div className="edduu-container">
        <div className="edduu-universe-intro">
          <p className="edduu-section-eyebrow">Technology universe</p>

          <h2 id="edduu-technology-universe-title">
            10 modules. 100+ technologies.
          </h2>

          <p>
            A curated sample of modern systems, tools and infrastructure
            that EDDUU helps you understand.
          </p>
        </div>

        <div className="edduu-technology-grid">
          {technologyGroups.map((group) => (
            <article key={group.title} className="edduu-technology-group">
              <h3 className="edduu-technology-group-title">
                {group.title}
              </h3>

              <div className="edduu-technology-pills">
                {group.items.map((item) => (
                  <span key={item} className="edduu-technology-pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="edduu-technology-footer">
          <p>
            These are just a few examples. The full EDDUU universe extends
            far beyond this sample.
          </p>

          <a href="#lab" className="edduu-button edduu-button-primary">
            Explore EDDUU →
          </a>
        </div>
      </div>
    </section>
  )
}

export default TechnologyUniverse
