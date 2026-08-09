import type { StageDefinition } from '../types/learning'

export type ProgressState = {
  currentStage: number
  completedStages: number[]
}

export function createInitialProgress(
  stages: StageDefinition[],
): ProgressState {
  return {
    currentStage: stages[0]?.number ?? 1,
    completedStages: [],
  }
}

export function completeStage(
  state: ProgressState,
  stageNumber: number,
  stages: StageDefinition[],
): ProgressState {
  const completedStages = state.completedStages.includes(
    stageNumber,
  )
    ? state.completedStages
    : [...state.completedStages, stageNumber]

  const nextStage = stages.find(
    (stage) => stage.number === stageNumber + 1,
  )

  return {
    completedStages,
    currentStage: nextStage?.number ?? stageNumber,
  }
}

export function isStageCompleted(
  state: ProgressState,
  stageNumber: number,
): boolean {
  return state.completedStages.includes(stageNumber)
}