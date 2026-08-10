import { useState } from 'react'

type PipelineStep = {
  id: string
  label: string
}

type PipelineBuilderProps = {
  steps?: PipelineStep[]
  onComplete?: () => void
}

function PipelineBuilder({
  steps = [],
  onComplete,
}: PipelineBuilderProps) {
  const [selectedSteps, setSelectedSteps] = useState<
    string[]
  >([])

  const [completed, setCompleted] = useState(false)

  const handleStepClick = (stepId: string) => {
    if (completed) {
      return
    }

    if (selectedSteps.includes(stepId)) {
      return
    }

    const nextSteps = [...selectedSteps, stepId]

    setSelectedSteps(nextSteps)

    if (nextSteps.length === steps.length) {
      setCompleted(true)
      onComplete?.()
    }
  }

  const handleReset = () => {
    setSelectedSteps([])
    setCompleted(false)
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
        Select the RAG components in the correct
        execution order.
      </p>

      <div className="edduu-pipeline-options">
        {steps.map((step) => {
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

      {completed && (
        <div className="edduu-pipeline-success">
          <strong>Pipeline completed ✓</strong>
          <p>
            You assembled the complete RAG pipeline.
          </p>
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
