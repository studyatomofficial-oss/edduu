import type {
  GuideDefinition,
  MasterclassDefinition,
} from './types'

type GuidePageProps = {
  masterclass: MasterclassDefinition
  guide: GuideDefinition
}

function GuidePage({
  masterclass,
  guide,
}: GuidePageProps) {
  const masterclassHash =
    `#masterclass/${masterclass.slug}`

  const handleBack = () => {
    window.location.hash = masterclassHash
  }

  const guideTypeLabel =
    guide.type === 'map'
      ? 'IMPLEMENTATION MAP'
      : 'CODE REFERENCE'

  return (
    <section
      className={`edduu-guide-page edduu-guide-page-${guide.type}`}
    >
      <div className="edduu-container">

        <div className="edduu-guide-page-topbar">

          <button
            type="button"
            className="edduu-guide-back"
            onClick={handleBack}
          >
            Back to Masterclass
          </button>

          <div className="edduu-guide-page-meta">
            <span>
              MASTERCLASS {String(masterclass.number).padStart(2, '0')}
            </span>

            <span className="edduu-guide-page-meta-divider">
              /
            </span>

            <span>
              {guide.label}
            </span>
          </div>

        </div>

        <header className="edduu-guide-page-header">

          <div className="edduu-guide-page-kicker">
            {guideTypeLabel}
          </div>

          <h1>
            {guide.title}
          </h1>

          <p className="edduu-guide-page-objective">
            {guide.objective}
          </p>

          <div className="edduu-guide-page-summary">

            <div className="edduu-guide-summary-item">
              <span className="edduu-guide-summary-label">
                GUIDE
              </span>

              <strong>
                {guide.label}
              </strong>
            </div>

            <div className="edduu-guide-summary-item">
              <span className="edduu-guide-summary-label">
                STEPS
              </span>

              <strong>
                {guide.steps.length}
              </strong>
            </div>

            <div className="edduu-guide-summary-item">
              <span className="edduu-guide-summary-label">
                MODE
              </span>

              <strong>
                Read / Do / Understand
              </strong>
            </div>

          </div>

        </header>

        <div className="edduu-guide-page-intro">

          <div>
            <p className="edduu-guide-page-intro-label">
              IMPLEMENTATION PATH
            </p>

            <h2>
              Follow the system from start to finish.
            </h2>
          </div>

          <p>
            Work through each step in order. Use the code,
            commands and explanations when they are provided.
          </p>

        </div>

        <div className="edduu-guide-page-steps">

          {guide.steps.map((step, index) => (
            <section
              className="edduu-guide-page-step"
              key={step.id}
            >

              <div className="edduu-guide-page-step-rail">

                <div className="edduu-guide-page-step-number">
                  {String(step.step).padStart(2, '0')}
                </div>

                {index < guide.steps.length - 1 && (
                  <div className="edduu-guide-page-step-line" />
                )}

              </div>

              <div className="edduu-guide-page-step-card">

                <div className="edduu-guide-page-step-heading">

                  <div>
                    <p className="edduu-guide-page-step-label">
                      STEP {String(step.step).padStart(2, '0')}
                    </p>

                    <h2>
                      {step.title}
                    </h2>
                  </div>

                  <span className="edduu-guide-page-step-status">
                    {guide.type === 'map'
                      ? 'BUILD'
                      : 'REFERENCE'}
                  </span>

                </div>

                <div className="edduu-guide-page-step-body">

                  <div className="edduu-guide-page-action">

                    <span className="edduu-guide-content-label">
                      WHAT YOU DO
                    </span>

                    <p>
                      {step.action}
                    </p>

                  </div>

                  {step.details &&
                    step.details.length > 0 && (
                      <div className="edduu-guide-page-checklist">

                        <span className="edduu-guide-content-label">
                          CHECKLIST
                        </span>

                        <ul>
                          {step.details.map(
                            (detail) => (
                              <li key={detail}>
                                <span className="edduu-guide-check">
                                  OK
                                </span>

                                <span>
                                  {detail}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>

                      </div>
                    )}

                  {step.url && (
                    <div className="edduu-guide-page-code-block">

                      <div className="edduu-guide-code-header">
                        <span>
                          VISIT
                        </span>

                        <span>
                          URL
                        </span>
                      </div>

                      <code>
                        {step.url}
                      </code>

                    </div>
                  )}

                  {step.command && (
                    <div className="edduu-guide-page-code-block">

                      <div className="edduu-guide-code-header">
                        <span>
                          RUN
                        </span>

                        <span>
                          TERMINAL
                        </span>
                      </div>

                      <pre>
                        <code>
                          {step.command}
                        </code>
                      </pre>

                    </div>
                  )}

                  {step.code && (
                    <div className="edduu-guide-page-code-block">

                      <div className="edduu-guide-code-header">
                        <span>
                          CODE
                        </span>

                        <span>
                          SOURCE
                        </span>
                      </div>

                      <pre>
                        <code>
                          {step.code}
                        </code>
                      </pre>

                    </div>
                  )}

                  {step.explanation && (
                    <div className="edduu-guide-page-explanation">

                      <div className="edduu-guide-explanation-marker">
                        WHY
                      </div>

                      <div>
                        <strong>
                          Why this works
                        </strong>

                        <p>
                          {step.explanation}
                        </p>
                      </div>

                    </div>
                  )}

                </div>

              </div>

            </section>
          ))}

        </div>

        {guide.finalResult && (
          <section className="edduu-guide-page-result">

            <div className="edduu-guide-result-marker">
              DONE
            </div>

            <div>
              <p className="edduu-guide-content-label">
                FINAL RESULT
              </p>

              <h2>
                You completed the guide.
              </h2>

              <p>
                {guide.finalResult}
              </p>
            </div>

          </section>
        )}

        <footer className="edduu-guide-page-footer">

          <div>
            <p className="edduu-guide-content-label">
              MASTERCLASS {String(masterclass.number).padStart(2, '0')}
            </p>

            <p>
              Continue learning from the masterclass.
            </p>
          </div>

          <button
            type="button"
            className="edduu-guide-back edduu-guide-back-bottom"
            onClick={handleBack}
          >
            Back to Masterclass
          </button>

        </footer>

      </div>
    </section>
  )
}

export default GuidePage