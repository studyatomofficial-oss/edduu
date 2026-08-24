import type {
  ExperienceDefinition,
} from './types'

export type ExperienceResult = {
  experienceId: string
  completed: boolean
  correct?: boolean
  score?: number
}

export type ExperienceProgressState = {
  currentExperienceIndex: number
  completedExperienceIds: string[]
  results: ExperienceResult[]
}

export function createExperienceProgress(
  _experiences: ExperienceDefinition[],
): ExperienceProgressState {
  return {
    currentExperienceIndex: 0,
    completedExperienceIds: [],
    results: [],
  }
}

export function getCurrentExperience(
  experiences: ExperienceDefinition[],
  progress: ExperienceProgressState,
): ExperienceDefinition | null {
  return (
    experiences[progress.currentExperienceIndex] ??
    null
  )
}

export function completeExperience(
  progress: ExperienceProgressState,
  experience: ExperienceDefinition,
  experiences: ExperienceDefinition[],
  result?: Omit<ExperienceResult, 'experienceId' | 'completed'>,
): ExperienceProgressState {
  if (
    progress.completedExperienceIds.includes(
      experience.id,
    )
  ) {
    return progress
  }

  const completedExperienceIds = [
    ...progress.completedExperienceIds,
    experience.id,
  ]

  const nextIndex =
    Math.min(
      progress.currentExperienceIndex + 1,
      experiences.length,
    )

  const experienceResult: ExperienceResult = {
    experienceId: experience.id,
    completed: true,
    ...result,
  }

  return {
    currentExperienceIndex: nextIndex,
    completedExperienceIds,
    results: [
      ...progress.results,
      experienceResult,
    ],
  }
}

export function isExperienceComplete(
  progress: ExperienceProgressState,
  experienceId: string,
): boolean {
  return progress.completedExperienceIds.includes(
    experienceId,
  )
}

export function isSessionComplete(
  progress: ExperienceProgressState,
  experiences: ExperienceDefinition[],
): boolean {
  return (
    experiences.length > 0 &&
    experiences.every((experience) =>
      progress.completedExperienceIds.includes(
        experience.id,
      ),
    )
  )
}