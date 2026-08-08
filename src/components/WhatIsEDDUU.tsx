import { useState } from 'react'

type JourneyKey =
  | 'knowledge'
  | 'experience'
  | 'build'
  | 'lead'

type JourneyStage = {
  number: string
  key: JourneyKey
  title: string
  headline: string
  supporting: string
  principle: string
  flow: string[]
}

const journeyStages: JourneyStage[] = [
  {
    number: '01',
    key: 'knowledge',
    title: 'KNOWLEDGE',
    headline: 'Make complexity simple.',
    supporting: 'Explain · Visualize · Understand',
    principle:
      'Start with the fundamentals. Explain the idea, visualize how it works, and build the mental model before touching the technology.',
    flow: ['Explain', 'Visualize', 'Understand'],
  },
  {
    number: '02',
    key: 'experience',
    title: 'EXPERIENCE',
    headline: "Don't just read it. Interact with it.",
    supporting: 'Click · Change · Experiment',
    principle:
      'Click, change, experiment, and see what happens. Turn abstract technical concepts into something you can actually experience.',
    flow: ['Click', 'Change', 'Experiment', 'Observe'],
  },
  {
    number: '03',
    key: 'build',
    title: 'BUILD',
    headline: 'Turn understanding into working systems.',
    supporting: 'Build · Debug · Fix',
    principle:
      'Write code, run it, see the output, debug what breaks, and fix it. Learn by building—not by watching someone else build.',
    flow: ['Build', 'Run', 'Debug', 'Fix', 'Build again'],
  },
  {
    number: '04',
    key: 'lead',
    title: 'LEAD',
    headline: 'Think beyond the code.',
    supporting: 'Production · TPM · Interview',
    principle:
      'Understand what happens in production, make trade-offs, manage risk, and explain technical decisions like a technology leader.',
    flow: ['Production', 'Trade-offs', 'Risk', 'TPM Decisions', 'Communicate'],
  },
]

function WhatIsEDDUU() {
  const [openStage, setOpenStage] = useState<JourneyKey | null>(null)

  const handleToggle = (key: JourneyKey) => {
    setOpenStage((current) => (current === key ? null : key))
  }

  return (
    <section
      className="edduu-what-is"
      aria-labelledby="edduu-what-is-title"
    >
      <div className="edduu-container">
        <header className="edduu-what-is-header">
          <p className="edduu-section-eyebrow">WHAT IS EDDUU?</p>

          <h2
            id="edduu-what-is-title"
            className="edduu-section-title"
          >
            What is EDDUU?
          </h2>

          <p className="edduu-what-is-description">
            EDDUU is an interactive AI and technology learning laboratory
            where you don't just learn how systems work—you experience,
            build, break, fix, and understand them from fundamentals to
            production.
          </p>
        </header>

        <div className="edduu-learning-journey">
          <div
            className="edduu-learning-journey-line"
            aria-hidden="true"
          />

          {journeyStages.map((stage) => {
            const isOpen = openStage === stage.key
            const contentId = `edduu-journey-content-${stage.key}`

            return (
              <article
                key={stage.key}
                className={[
                  'edduu-journey-card',
                  `edduu-journey-card-${stage.key}`,
                  isOpen ? 'is-open' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <button
                  type="button"
                  className="edduu-journey-trigger"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => handleToggle(stage.key)}
                >
                  <span className="edduu-journey-number">
                    {stage.number}
                  </span>

                  <span className="edduu-journey-title">
                    {stage.title}
                  </span>

                  <span className="edduu-journey-headline">
                    {stage.headline}
                  </span>

                  <span className="edduu-journey-supporting">
                    {stage.supporting}
                  </span>

                  <span
                    className="edduu-journey-action"
                    aria-hidden="true"
                  >
                    {isOpen ? 'Close ↑' : 'Explore →'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    className="edduu-journey-expanded"
                  >
                    <div
                      className="edduu-journey-divider"
                      aria-hidden="true"
                    />

                    <p className="edduu-journey-principle">
                      {stage.principle}
                    </p>

                    <div
                      className="edduu-journey-flow"
                      aria-label={`${stage.title} learning flow`}
                    >
                      {stage.flow.map((item, flowIndex) => (
                        <div
                          key={item}
                          className="edduu-journey-flow-item"
                        >
                          <span>{item}</span>

                          {flowIndex < stage.flow.length - 1 && (
                            <span
                              className="edduu-journey-flow-arrow"
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

        <p className="edduu-what-is-principle">
          Simple explanation. Deep technology. Real systems.
        </p>
      </div>
    </section>
  )
}

export default WhatIsEDDUU