import { useMemo, useState } from 'react'

type DiagnosticOption = {
  id: string
  label: string
}

type DiagnosticInteractionProps = {
  options?: DiagnosticOption[]
  correctOptionId?: string
  onComplete?: () => void
}

function getStableValue(value: string) {
  let hash = 0

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) | 0
  }

  return Math.abs(hash)
}

function DiagnosticInteraction({
  options = [],
  correctOptionId,
  onComplete,
}: DiagnosticInteractionProps) {
  const displayOptions = useMemo(() => {
    if (options.length < 2 || !correctOptionId) {
      return options
    }

    const shuffled = [...options].sort(
      (first, second) =>
        getStableValue(first.id) - getStableValue(second.id),
    )

    if (shuffled[0]?.id === correctOptionId) {
      const swapIndex = shuffled.findIndex(
        (option) => option.id !== correctOptionId,
      )

      if (swapIndex > 0) {
        ;[shuffled[0], shuffled[swapIndex]] = [
          shuffled[swapIndex],
          shuffled[0],
        ]
      }
    }

    return shuffled
  }, [options, correctOptionId])

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
    <div
      className={[
        'edduu-diagnostic-interaction',
        completed ? 'is-completed' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="edduu-diagnostic-options">
        {displayOptions.map((option) => {
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
              className={[
                isCorrect ? 'is-correct' : '',
                isIncorrect ? 'is-incorrect' : '',
              ]
                .filter(Boolean)
                .join(' ')}
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
          <p className="edduu-diagnostic-success-message">
            You identified the failing layer correctly.
          </p>
        </div>
      )}

      {selectedOption &&
        selectedOption !== correctOptionId &&
        !completed && (
          <p className="edduu-diagnostic-feedback">
            Not quite. Trace the pipeline again and inspect
            where the evidence becomes irrelevant.
          </p>
        )}
    </div>
  )
}

export default DiagnosticInteraction
