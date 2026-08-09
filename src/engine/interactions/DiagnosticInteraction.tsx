import { useState } from 'react'

type DiagnosticOption = {
  id: string
  label: string
}

type DiagnosticInteractionProps = {
  options?: DiagnosticOption[]
  correctOptionId?: string
  onComplete?: () => void
}

function DiagnosticInteraction({
  options = [],
  correctOptionId,
  onComplete,
}: DiagnosticInteractionProps) {
  const [selectedOption, setSelectedOption] =
    useState<string | null>(null)

  const [completed, setCompleted] = useState(false)

  const handleSelect = (optionId: string) => {
    if (completed) {
      return
    }

    setSelectedOption(optionId)

    if (optionId === correctOptionId) {
      setCompleted(true)
      onComplete?.()
    }
  }

  return (
    <div className="edduu-diagnostic-interaction">
      <p>
        Identify the layer that is most likely causing
        the failure.
      </p>

      <div className="edduu-diagnostic-options">
        {options.map((option) => {
          const isSelected =
            selectedOption === option.id

          const isCorrect =
            isSelected &&
            option.id === correctOptionId

          const isIncorrect =
            isSelected &&
            option.id !== correctOptionId

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSelect(option.id)}
              disabled={completed}
            >
              {option.label}

              {isCorrect && ' ✓'}
              {isIncorrect && ' ✕'}
            </button>
          )
        })}
      </div>

      {completed && (
        <div className="edduu-diagnostic-success">
          <strong>Diagnosis correct ✓</strong>
          <p>
            You identified the failing layer correctly.
          </p>
        </div>
      )}

      {selectedOption &&
        selectedOption !== correctOptionId &&
        !completed && (
          <p>
            Not quite. Trace the RAG pipeline again and
            inspect where the evidence becomes irrelevant.
          </p>
        )}
    </div>
  )
}

export default DiagnosticInteraction