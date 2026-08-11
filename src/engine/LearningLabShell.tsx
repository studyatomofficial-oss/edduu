import { useState } from 'react'
import type { ExperienceDefinition } from '../types/learning'
import {
  completeStage,
  createInitialProgress,
} from './ProgressEngine'
import StageNavigator from './StageNavigator'
import StageRenderer from './StageRenderer'

type LearningLabShellProps = {
  experience: ExperienceDefinition
}

function LearningLabShell({
  experience,
}: LearningLabShellProps) {
  const [progress, setProgress] = useState(() =>
    createInitialProgress(experience.stages),
  )

  const activeStage =
    experience.stages.find(
      (stage) => stage.number === progress.currentStage,
    ) ?? experience.stages[0]

  if (!activeStage) {
    return (
      <section className="edduu-learning-lab">
        <div className="edduu-container">
          <p>No learning stages are available.</p>
        </div>
      </section>
    )
  }

  const handleInteractionComplete = () => {
    setProgress((currentProgress) =>
      completeStage(
        currentProgress,
        activeStage.number,
        experience.stages,
      ),
    )
  }

  const handleStageSelect = (stageNumber: number) => {
    setProgress((currentProgress) => {
      const isSelectable =
        stageNumber <= currentProgress.currentStage ||
        currentProgress.completedStages.includes(stageNumber)

      if (!isSelectable) {
        return currentProgress
      }

      return {
        ...currentProgress,
        currentStage: stageNumber,
      }
    })
  }

  return (
    <section className="edduu-learning-lab">
      <div className="edduu-container">
        <header className="edduu-learning-lab-header">
          <p className="edduu-section-eyebrow">
            Learning Lab
          </p>

          <h1 className="edduu-section-title">
            {experience.title}
          </h1>

          <p className="edduu-section-description">
            {experience.objective}
          </p>
        </header>

        <StageNavigator
          stages={experience.stages}
          currentStage={progress.currentStage}
          completedStages={progress.completedStages}
          onStageSelect={handleStageSelect}
        />

        <StageRenderer
          key={activeStage.id}
          stage={activeStage}
          onInteractionComplete={
            handleInteractionComplete
          }
        />
      </div>
    </section>
  )
}

export default LearningLabShell