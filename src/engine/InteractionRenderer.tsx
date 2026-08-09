import type { InteractionDefinition } from '../types/learning'
import { interactionRegistry } from './InteractionRegistry'

type InteractionRendererProps = {
  interaction: InteractionDefinition
  onComplete?: () => void
}

function InteractionRenderer({
  interaction,
  onComplete,
}: InteractionRendererProps) {
  const InteractionComponent =
    interactionRegistry[interaction.type]

  if (!InteractionComponent) {
    return (
      <div
        className="edduu-interaction"
        data-interaction-type={interaction.type}
      >
        <p className="edduu-interaction-type">
          {interaction.type}
        </p>

        {interaction.title && (
          <h3 className="edduu-interaction-title">
            {interaction.title}
          </h3>
        )}

        {interaction.instruction && (
          <p className="edduu-interaction-instruction">
            {interaction.instruction}
          </p>
        )}

        <div className="edduu-interaction-placeholder">
          This interaction is not registered yet.
        </div>
      </div>
    )
  }

  return (
    <InteractionComponent
      {...interaction.config}
      onComplete={onComplete}
    />
  )
}

export default InteractionRenderer