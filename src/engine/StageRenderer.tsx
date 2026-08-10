import type { StageDefinition } from '../types/learning'
import InteractionRenderer from './InteractionRenderer'

type StageRendererProps = {
  stage: StageDefinition
  onInteractionComplete?: (
    interactionId: string,
  ) => void
}

function StageRenderer({
  stage,
  onInteractionComplete,
}: StageRendererProps) {
  return (
    <article className="edduu-stage">
      <p className="edduu-section-eyebrow">
        {stage.number.toString().padStart(2, '0')} —{' '}
        {stage.key.toUpperCase()}
      </p>

      <h2 className="edduu-section-title">
        {stage.content.title}
      </h2>

      {stage.content.description && (
        <p className="edduu-section-description">
          {stage.content.description}
        </p>
      )}

      {stage.content.explanation && (
        <p className="edduu-stage-explanation">
          {stage.content.explanation}
        </p>
      )}

      {stage.content.takeaway && (
        <div className="edduu-stage-takeaway">
          <strong>Key takeaway</strong>
          <p>{stage.content.takeaway}</p>
        </div>
      )}

      <div className="edduu-stage-objective">
        <strong>Learning objective</strong>
        <p>{stage.objective.statement}</p>
      </div>

      {stage.content.failureScenario && (
        <section className="edduu-stage-failure-scenario">
          <p className="edduu-stage-failure-label">
            Incident report
          </p>

          <p>{stage.content.failureScenario.description}</p>
        </section>
      )}

      {stage.interactions.length > 0 && (
        <div className="edduu-stage-interactions">
          {stage.interactions.map((interaction) => (
            <InteractionRenderer
              key={interaction.id}
              interaction={interaction}
              onComplete={() =>
                onInteractionComplete?.(
                  interaction.id,
                )
              }
            />
          ))}
        </div>
      )}
    </article>
  )
}

export default StageRenderer
