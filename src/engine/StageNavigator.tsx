import type { StageDefinition } from '../types/learning'

type StageNavigatorProps = {
  stages: StageDefinition[]
  currentStage: number
  completedStages: number[]
  onStageSelect?: (stageNumber: number) => void
}

function StageNavigator({
  stages,
  currentStage,
  completedStages,
  onStageSelect,
}: StageNavigatorProps) {
  return (
    <nav
      className="edduu-stage-navigator"
      aria-label="Learning stages"
    >
      {stages.map((stage) => {
        const isCompleted = completedStages.includes(
          stage.number,
        )

        const isCurrent = currentStage === stage.number

        const isLocked =
          !isCompleted &&
          !isCurrent &&
          stage.number > currentStage

        return (
          <button
            key={stage.id}
            type="button"
            className={[
              'edduu-stage-nav-item',
              isCurrent ? 'is-current' : '',
              isCompleted ? 'is-completed' : '',
              isLocked ? 'is-locked' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            disabled={isLocked}
            onClick={() => onStageSelect?.(stage.number)}
            aria-current={
              isCurrent ? 'step' : undefined
            }
          >
            <span className="edduu-stage-nav-number">
              {String(stage.number).padStart(2, '0')}
            </span>

            <span className="edduu-stage-nav-title">
              {stage.title}
            </span>
          </button>
        )
      })}
    </nav>
  )
}

export default StageNavigator