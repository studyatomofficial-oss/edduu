export type QuestionSessionState = {
  questionId: string
  lastOptionOrder: string[]
  correctPositions: number[]
}

export function createQuestionSession(
  questionId: string,
): QuestionSessionState {
  return {
    questionId,
    lastOptionOrder: [],
    correctPositions: [],
  }
}

export function rememberOptionOrder(
  state: QuestionSessionState,
  optionIds: string[],
): QuestionSessionState {
  return {
    ...state,
    lastOptionOrder: [...optionIds],
  }
}

export function rememberCorrectPosition(
  state: QuestionSessionState,
  position: number,
): QuestionSessionState {
  return {
    ...state,
    correctPositions: [
      ...state.correctPositions,
      position,
    ],
  }
}
