import type {
  SequencingDefinition,
  SequenceItem,
} from './types'

export type SequenceSelection = {
  itemId: string
  position: number
}

export function evaluateSequence(
  definition: SequencingDefinition,
  orderedItemIds: string[],
): {
  correct: boolean
  positions: SequenceSelection[]
} {
  const positions: SequenceSelection[] =
    orderedItemIds.map(
      (itemId, index) => ({
        itemId,
        position: index,
      }),
    )

  const correct =
    orderedItemIds.length ===
      definition.items.length &&
    orderedItemIds.every(
      (itemId, index) => {
        const item =
          definition.items.find(
            (candidate) =>
              candidate.id === itemId,
          )

        return (
          item?.correctPosition === index
        )
      },
    )

  return {
    correct,
    positions,
  }
}

export function isSequenceComplete(
  definition: SequencingDefinition,
  orderedItemIds: string[],
): boolean {
  return (
    orderedItemIds.length ===
    definition.items.length
  )
}

export function getSequenceItem(
  definition: SequencingDefinition,
  itemId: string,
): SequenceItem | null {
  return (
    definition.items.find(
      (item) => item.id === itemId,
    ) ?? null
  )
}
