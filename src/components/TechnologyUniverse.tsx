import { modules } from '../data/modules'
import {
  homepageTechnologySlugs,
  technologies,
} from '../data/technologies'

const technologyGroups = modules
  .map((module) => {
    const items = homepageTechnologySlugs
      .map((slug) => technologies.find((technology) => technology.slug === slug))
      .filter((technology): technology is (typeof technologies)[number] => {
        if (!technology) {
          return false
        }

        return technology.moduleId === module.id
      })
      .map((technology) => ({
        label: technology.shortName ?? technology.name,
        slug: technology.slug,
        experienceId: technology.experienceId,
      }))

    return {
      title: module.name,
      items,
    }
  })
  .filter((group) => group.items.length > 0)

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
                {group.items.map((item) => {
                  const content = (
                    <span className="edduu-technology-pill">
                      {item.label}
                    </span>
                  )

                  if (!item.experienceId) {
                    return <span key={item.slug}>{content}</span>
                  }

                  return (
                    <a
                      key={item.slug}
                      href={`#lab/${item.slug}`}
                      className="edduu-technology-pill edduu-technology-pill-link"
                    >
                      {item.label}
                    </a>
                  )
                })}
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
