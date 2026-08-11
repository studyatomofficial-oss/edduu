import { useState } from 'react'

type PipelineStep = {
  id: string
  label: string
}

type PipelineBuilderProps = {
  steps?: PipelineStep[]
  instruction?: string
  onComplete?: () => void
}

function shuffleSteps<T>(items: T[]): T[] {
  const next = [...items]

  for (let index = next.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(
      Math.random() * (index + 1),
    )

    ;[next[index], next[randomIndex]] = [
      next[randomIndex],
      next[index],
    ]
  }

  return next
}

function PipelineBuilder({
  steps = [],
  instruction,
  onComplete,
}: PipelineBuilderProps) {
  const [selectedSteps, setSelectedSteps] = useState<
    string[]
  >([])

  const [completed, setCompleted] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [displaySteps, setDisplaySteps] = useState<
    PipelineStep[]
  >(() => shuffleSteps(steps))

  const handleStepClick = (stepId: string) => {
    if (completed) {
      return
    }

    if (selectedSteps.includes(stepId)) {
      return
    }

    const expectedStepId = steps[selectedSteps.length]?.id

    if (stepId !== expectedStepId) {
      setFeedback(
        'That step is out of order. Try the next step in sequence.',
      )
      return
    }

    const nextSteps = [...selectedSteps, stepId]
    setSelectedSteps(nextSteps)
    setFeedback('')

    if (nextSteps.length === steps.length) {
      setCompleted(true)
      onComplete?.()
    }
  }

  const handleReset = () => {
    setDisplaySteps(shuffleSteps(steps))
    setSelectedSteps([])
    setCompleted(false)
    setFeedback('')
  }

  return (
    <div
      className={[
        'edduu-pipeline-builder',
        completed ? 'is-completed' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <p className="edduu-pipeline-instruction">
        {instruction ??
          'Select the components in the correct execution order.'}
      </p>

      <div className="edduu-pipeline-options">
        {displaySteps.map((step) => {
          const position =
            selectedSteps.indexOf(step.id)

          const isSelected = position !== -1

          return (
            <button
              key={step.id}
              type="button"
              className={isSelected ? 'is-selected' : ''}
              onClick={() => handleStepClick(step.id)}
              disabled={isSelected || completed}
            >
              {isSelected
                ? `${position + 1}. ${step.label}`
                : step.label}
            </button>
          )
        })}
      </div>

      {feedback && (
        <p className="edduu-pipeline-feedback">
          {feedback}
        </p>
      )}

      {completed && (
        <div className="edduu-pipeline-success">
          <strong>Pipeline completed ✓</strong>
          <p>You assembled the complete workflow.</p>
        </div>
      )}

      {selectedSteps.length > 0 && !completed && (
        <p className="edduu-pipeline-progress">
          Components selected:{' '}
          {selectedSteps.length} / {steps.length}
        </p>
      )}

      {selectedSteps.length > 0 && !completed && (
        <button
          type="button"
          className="edduu-pipeline-reset"
          onClick={handleReset}
        >
          Reset pipeline
        </button>
      )}
    </div>
  )
}

export default PipelineBuilder
