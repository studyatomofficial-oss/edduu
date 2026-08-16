const approachPrinciples = [
  {
    number: '01',
    title: 'Understand the system',
    description:
      'Start with the problem, the components, and the decisions that make the technology work.',
  },
  {
    number: '02',
    title: 'Experience the behaviour',
    description:
      'Interact with working flows so concepts become something you can see and reason about.',
  },
  {
    number: '03',
    title: 'Build with context',
    description:
      'Move from individual concepts into complete systems, projects, and real engineering decisions.',
  },
  {
    number: '04',
    title: 'Think about production',
    description:
      'Understand reliability, scale, trade-offs, cost, and the decisions that matter beyond a demo.',
  },
]

function WhatIsEDDUU() {
  return (
    <section
      className="edduu-what-is"
      aria-labelledby="edduu-what-is-title"
    >
      <div className="edduu-container">
        <div className="edduu-what-is-heading">
          <p className="edduu-section-eyebrow">
            THE EDDUU APPROACH
          </p>

          <h2
            id="edduu-what-is-title"
            className="edduu-section-title"
          >
            Technology makes more sense when you experience the system.
          </h2>

          <p className="edduu-section-description">
            EDDUU connects concepts, interaction, implementation, and
            production thinking so learning does not stop at knowing what
            a technology is.
          </p>
        </div>

        <div className="edduu-approach-grid">
          {approachPrinciples.map((principle) => (
            <article
              key={principle.number}
              className="edduu-approach-card"
            >
              <span className="edduu-approach-number">
                {principle.number}
              </span>

              <h3>{principle.title}</h3>

              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIsEDDUU
