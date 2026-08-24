import type {
  SimulationDefinition,
} from './types'

export type SimulationSelection = {
  itemId: string
  targetId: string
}

export type SimulationResult = {
  correct: boolean
  completed: boolean
  itemId: string
  targetId: string
}

export function evaluateSimulationSelection(
  simulation: SimulationDefinition,
  selection: SimulationSelection,
): SimulationResult {
  const item = simulation.items.find(
    (candidate) =>
      candidate.id === selection.itemId,
  )

  if (!item) {
    return {
      correct: false,
      completed: false,
      itemId: selection.itemId,
      targetId: selection.targetId,
    }
  }

  const correct =
    item.correctTargetId === selection.targetId

  return {
    correct,
    completed: false,
    itemId: selection.itemId,
    targetId: selection.targetId,
  }
}

export function isSimulationComplete(
  simulation: SimulationDefinition,
  selections: SimulationSelection[],
): boolean {
  if (simulation.items.length === 0) {
    return false
  }

  return simulation.items.every((item) => {
    const selection = selections.find(
      (candidate) =>
        candidate.itemId === item.id,
    )

    return (
      selection?.targetId ===
      item.correctTargetId
    )
  })
}
