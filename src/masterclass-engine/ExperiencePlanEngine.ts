import type {
  ExperienceDefinition,
  SequencingDefinition,
} from './types'

export function createAutoSequencingExperience(
  animationExperience: ExperienceDefinition,
): ExperienceDefinition | null {
  if (
    animationExperience.type !== 'animation' ||
    !animationExperience.animation
  ) {
    return null
  }

  const parts = animationExperience.animation.parts

  if (parts.length < 3) {
    return null
  }

  const sequencing: SequencingDefinition = {
    instruction:
      'Arrange the steps in the correct order. Use the arrows to arrange these steps in the order they happen.',
    items: parts.map((part, index) => ({
      id: `auto-sequence-${part.id}`,
      label: part.label,
      description: part.explanation,
      correctPosition: index,
    })),
    successMessage:
      'Excellent. You reconstructed the process in the correct order.',
    failureMessage:
      'Not quite. Think about what happens first, what happens next, and what happens at the end.',
  }

  return {
    id: `${animationExperience.id}-auto-sequencing`,
    type: 'sequencing',
    title: 'Arrange the steps in the correct order',
    description:
      'Use the arrows to arrange these steps in the order they happen.',
    sequencing,
  }
}

function hasSequencingExperience(
  experiences: ExperienceDefinition[],
): boolean {
  return experiences.some(
    (experience) =>
      experience.type === 'sequencing' &&
      Boolean(experience.sequencing),
  )
}

export function prepareSessionExperiences(
  experiences: ExperienceDefinition[],
  masterclassNumber: number,
): ExperienceDefinition[] {
  /*
   * MC01 and MC02 remain exactly as authored.
   *
   * From MC03 onward, the engine guarantees that
   * an animation-driven sequencing exercise exists.
   */
  if (masterclassNumber === 1) {
    return experiences
  }

  const prepared = [...experiences]

  /*
   * If the session already contains a sequencing
   * experience, preserve the author's version.
   */
  if (hasSequencingExperience(prepared)) {
    return prepared
  }

  /*
   * Otherwise, create one automatically from
   * the first suitable animation.
   */
  const animationExperience =
    prepared.find(
      (experience) => {
        if (
          experience.type !== 'animation' ||
          !experience.animation
        ) {
          return false
        }

        return experience.animation.parts.length >= 3
      },
    )

  if (!animationExperience) {
    return prepared
  }

  const sequencing =
    createAutoSequencingExperience(
      animationExperience,
    )

  if (!sequencing) {
    return prepared
  }

  const animationIndex =
    prepared.indexOf(animationExperience)

  prepared.splice(
    animationIndex + 1,
    0,
    sequencing,
  )

  return prepared
}




