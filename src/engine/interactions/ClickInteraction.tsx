import { useState } from 'react'

type ClickInteractionProps = {
  label?: string
  instruction?: string
  onComplete?: () => void
}

function ClickInteraction({
  label = 'Complete interaction',
  instruction = 'Click the button to continue.',
  onComplete,
}: ClickInteractionProps) {
  const [completed, setCompleted] = useState(false)

  const handleClick = () => {
    setCompleted(true)
    onComplete?.()
  }

  return (
    <div
      className={[
        'edduu-interaction-click',
        completed ? 'is-completed' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <p className="edduu-click-instruction">{instruction}</p>

      <button
        type="button"
        className="edduu-interaction-button"
        onClick={handleClick}
        disabled={completed}
      >
        {completed ? 'Completed ✓' : label}
      </button>
    </div>
  )
}

export default ClickInteraction
