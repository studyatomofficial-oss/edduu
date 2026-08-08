import { useState } from 'react'

type LensKey = 'systems' | 'product' | 'people' | 'delivery' | 'ai'

type Lens = {
  number: string
  key: LensKey
  title: string
  statement: string
  principle: string
  flow: string[]
}

const lenses: Lens[] = [
  {
    number: '01',
    key: 'systems',
    title: 'SYSTEMS',
    statement: 'See the whole system, not just the component.',
    principle:
      'I think in connections, dependencies and behaviour. A feature is never isolated—its impact travels through architecture, data, people, delivery and operations.',
    flow: [
      'Components',
      'Dependencies',
      'Architecture',
      'Scale',
      'System behaviour',
    ],
  },
  {
    number: '02',
    key: 'product',
    title: 'PRODUCT',
    statement: 'Technology matters when it solves the right problem.',
    principle:
      'I start with the user and business problem, then work backward into the technology. The goal is not to build more—it is to build what creates meaningful value.',
    flow: [
      'User problem',
      'Business objective',
      'Product decision',
      'Technology',
      'Outcome',
    ],
  },
  {
    number: '03',
    key: 'people',
    title: 'PEOPLE',
    statement: 'Great systems are built by aligned teams.',
    principle:
      'Technology delivery is a team sport. I focus on clarity, ownership, communication and alignment so engineering, product and business teams can move toward the same outcome.',
    flow: [
      'People',
      'Alignment',
      'Ownership',
      'Execution',
      'Outcome',
    ],
  },
  {
    number: '04',
    key: 'delivery',
    title: 'DELIVERY',
    statement: 'A good strategy means little if the system cannot ship.',
    principle:
      'I think about scope, dependencies, risks, capacity and release readiness together. Delivery is about turning a decision into a reliable outcome—not simply completing a backlog.',
    flow: [
      'Strategy',
      'Scope',
      'Dependencies',
      'Risk',
      'Execution',
      'Release',
      'Outcome',
    ],
  },
  {
    number: '05',
    key: 'ai',
    title: 'AI',
    statement: 'AI is a system capability, not just a feature.',
    principle:
      'I think beyond the model. AI products need the right data, context, evaluation, security, cost controls and operational architecture to create reliable business value.',
    flow: [
      'Model',
      'Data',
      'Context',
      'Evaluation',
      'Security',
      'Cost',
      'Operations',
      'Reliable AI',
    ],
  },
]

function LeadershipLens() {
  const [openLens, setOpenLens] = useState<LensKey | null>(null)

  const handleToggle = (key: LensKey) => {
    setOpenLens((current) => (current === key ? null : key))
  }

  return (
    <section className="edduu-section edduu-leadership">
      <div className="edduu-container">
        <div className="edduu-leadership-header">
          <p className="edduu-section-eyebrow">Who is Avinash?</p>

          <h2 className="edduu-section-title">
            Avinash's Leadership Lens
          </h2>

          <p className="edduu-section-description">
            An engineering-trained technology leader who builds systems,
            leads transformation, and turns complex technology into
            experiences people can understand.
          </p>
        </div>

        <div className="edduu-lens-grid">
          {lenses.map((lens) => {
            const isOpen = openLens === lens.key

            return (
              <article
                key={lens.key}
                className={`edduu-lens-card edduu-lens-card-${lens.key} ${
                  isOpen ? 'is-open' : ''
                }`}
              >
                <button
                  type="button"
                  className="edduu-lens-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`edduu-lens-content-${lens.key}`}
                  onClick={() => handleToggle(lens.key)}
                >
                  <span className="edduu-lens-number">
                    {lens.number}
                  </span>

                  <span className="edduu-lens-title">
                    {lens.title}
                  </span>

                  <span className="edduu-lens-statement">
                    {lens.statement}
                  </span>

                  <span
                    className="edduu-lens-arrow"
                    aria-hidden="true"
                  >
                    {isOpen ? '↑' : '→'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`edduu-lens-content-${lens.key}`}
                    className="edduu-lens-expanded"
                  >
                    <div className="edduu-lens-divider" />

                    <p className="edduu-lens-principle">
                      {lens.principle}
                    </p>

                    <div className="edduu-lens-flow">
                      {lens.flow.map((item, index) => (
                        <div
                          key={item}
                          className="edduu-lens-flow-item"
                        >
                          <span>{item}</span>

                          {index < lens.flow.length - 1 && (
                            <span
                              className="edduu-lens-flow-arrow"
                              aria-hidden="true"
                            >
                              ↓
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        <div className="edduu-leadership-cta">
          <a href="/about" className="edduu-button edduu-button-primary">
            Meet Avinash →
          </a>
        </div>
      </div>
    </section>
  )
}

export default LeadershipLens