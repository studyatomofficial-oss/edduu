import type {
  MasterclassOption,
  QuestionDefinition,
} from './types'
import type { QuestionSessionState } from './QuestionSession'

export type RandomizedQuestion = QuestionDefinition & {
  options: MasterclassOption[]
}

function shuffle<T>(items: T[]): T[] {
  const result = [...items]

  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(
      Math.random() * (index + 1),
    )

    ;[result[index], result[randomIndex]] = [
      result[randomIndex],
      result[index],
    ]
  }

  return result
}

function sameOrder(
  first: string[],
  second: string[],
): boolean {
  if (first.length !== second.length) {
    return false
  }

  return first.every(
    (value, index) => value === second[index],
  )
}

function findCorrectPosition(
  options: MasterclassOption[],
): number {
  return options.findIndex(
    (option) => option.correct === true,
  )
}

export function randomizeQuestion(
  question: QuestionDefinition,
  session: QuestionSessionState,
): {
  question: RandomizedQuestion
  session: QuestionSessionState
} {
  if (!question.options || question.options.length <= 1) {
    return {
      question: {
        ...question,
        options: question.options ?? [],
      },
      session,
    }
  }

  const originalOptions = [...question.options]

  let randomizedOptions = shuffle(
    originalOptions,
  )

  /*
   * Do not immediately repeat the previous option order.
   */
  if (
    session.lastOptionOrder.length > 0 &&
    sameOrder(
      randomizedOptions.map((option) => option.id),
      session.lastOptionOrder,
    )
  ) {
    randomizedOptions = shuffle(
      originalOptions,
    )
  }

  /*
   * With four or more options, also try to avoid
   * repeatedly placing the correct answer in the
   * same position.
   */
  const previousCorrectPosition =
    session.correctPositions[
      session.correctPositions.length - 1
    ]

  if (
    randomizedOptions.length >= 4 &&
    previousCorrectPosition >= 0 &&
    findCorrectPosition(randomizedOptions) ===
      previousCorrectPosition
  ) {
    const correctIndex = findCorrectPosition(
      randomizedOptions,
    )

    const swapIndex =
      correctIndex === 0
        ? 1
        : 0

    ;[
      randomizedOptions[correctIndex],
      randomizedOptions[swapIndex],
    ] = [
      randomizedOptions[swapIndex],
      randomizedOptions[correctIndex],
    ]
  }

  const optionOrder = randomizedOptions.map(
    (option) => option.id,
  )

  const correctPosition =
    findCorrectPosition(randomizedOptions)

  return {
    question: {
      ...question,
      options: randomizedOptions,
    },
    session: {
      ...session,
      lastOptionOrder: optionOrder,
      correctPositions:
        correctPosition >= 0
          ? [
              ...session.correctPositions,
              correctPosition,
            ]
          : session.correctPositions,
    },
  }
}

export function isAnswerCorrect(
  question: RandomizedQuestion,
  selectedOptionId: string,
): boolean {
  return (
    question.options.find(
      (option) => option.id === selectedOptionId,
    )?.correct === true
  )
}
