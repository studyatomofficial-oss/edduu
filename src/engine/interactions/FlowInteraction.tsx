import { useState } from 'react'

type FlowStep = {
  id: string
  label: string
}

type FlowInteractionProps = {
  steps?: FlowStep[]
  onComplete?: () => void
}

function FlowInteraction({
  steps = [],
  onComplete,
}: FlowInteractionProps) {
  const [completed, setCompleted] = useState(false)

  const handleComplete = () => {
    setCompleted(true)
    onComplete?.()
  }

  return (
    <div className="edduu-interaction-flow">
      <div className="edduu-flow-steps">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="edduu-flow-step"
          >
            <div className="edduu-flow-step-card">
              {step.label}
            </div>

            {index < steps.length - 1 && (
              <span
                className="edduu-flow-arrow"
                aria-hidden="true"
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>

      {steps.length > 0 && (
        <button
          type="button"
          onClick={handleComplete}
          disabled={completed}
        >
          {completed ? 'Flow completed ✓' : 'Complete flow'}
        </button>
      )}
    </div>
  )
}

export default FlowInteraction