import type {
  GuideDefinition,
} from './types'

type GuideRendererProps = {
  guide: GuideDefinition
  onClose: () => void
}

function GuideRenderer({
  guide,
  onClose,
}: GuideRendererProps) {
  return (
    <div
      className="edduu-guide-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={guide.title}
    >
      <div className="edduu-guide-panel">

        <div className="edduu-guide-header">

          <div>
            <div className="edduu-guide-label">
              {guide.label}
            </div>

            <h2>
              {guide.title}
            </h2>

            <p>
              {guide.objective}
            </p>
          </div>

          <button
            type="button"
            className="edduu-guide-close"
            onClick={onClose}
            aria-label="Close guide"
          >
            ×
          </button>

        </div>

        <div className="edduu-guide-steps">

          {guide.steps.map((step) => (
            <section
              className="edduu-guide-step"
              key={step.id}
            >

              <div className="edduu-guide-step-number">
                {step.step}
              </div>

              <div className="edduu-guide-step-content">

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.action}
                </p>

                {step.details &&
                  step.details.length > 0 && (
                    <ul>
                      {step.details.map(
                        (detail) => (
                          <li key={detail}>
                            {detail}
                          </li>
                        ),
                      )}
                    </ul>
                  )}

                {step.url && (
                  <div className="edduu-guide-code">
                    <strong>
                      Visit
                    </strong>

                    <code>
                      {step.url}
                    </code>
                  </div>
                )}

                {step.command && (
                  <div className="edduu-guide-code">
                    <strong>
                      Run
                    </strong>

                    <code>
                      {step.command}
                    </code>
                  </div>
                )}

                {step.code && (
                  <div className="edduu-guide-code">
                    <strong>
                      Code
                    </strong>

                    <pre>
                      <code>
                        {step.code}
                      </code>
                    </pre>
                  </div>
                )}

                {step.explanation && (
                  <div className="edduu-guide-explanation">
                    <strong>
                      Why this works
                    </strong>

                    <p>
                      {step.explanation}
                    </p>
                  </div>
                )}

              </div>

            </section>
          ))}

        </div>

        {guide.finalResult && (
          <div className="edduu-guide-result">

            <strong>
              Final result
            </strong>

            <p>
              {guide.finalResult}
            </p>

          </div>
        )}

        <div className="edduu-guide-footer">

          <button
            type="button"
            className="edduu-guide-close-action"
            onClick={onClose}
          >
            Back to Masterclass
          </button>

        </div>

      </div>
    </div>
  )
}

export default GuideRenderer
