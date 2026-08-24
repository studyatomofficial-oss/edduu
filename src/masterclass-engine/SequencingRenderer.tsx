import { useState } from 'react'
import type {
  SequencingDefinition,
} from './types'
import {
  evaluateSequence,
} from './SequencingEngine'

type SequencingRendererProps = {
  sequencing: SequencingDefinition
  onComplete?: () => void
}

function createInitialOrder(
  sequencing: SequencingDefinition,
): string[] {
  const correctOrder =
    [...sequencing.items]
      .sort(
        (a, b) =>
          a.correctPosition -
          b.correctPosition,
      )
      .map((item) => item.id)

  const shuffled = [...correctOrder]

  for (
    let index = shuffled.length - 1;
    index > 0;
    index -= 1
  ) {
    const randomIndex =
      Math.floor(
        Math.random() * (index + 1),
      )

    ;[
      shuffled[index],
      shuffled[randomIndex],
    ] = [
      shuffled[randomIndex],
      shuffled[index],
    ]
  }

  const isAlreadyCorrect =
    shuffled.every(
      (itemId, index) =>
        itemId === correctOrder[index],
    )

  if (
    isAlreadyCorrect &&
    shuffled.length > 1
  ) {
    ;[
      shuffled[0],
      shuffled[1],
    ] = [
      shuffled[1],
      shuffled[0],
    ]
  }

  return shuffled
}

function getCorrectOrder(
  sequencing: SequencingDefinition,
): string[] {
  return [...sequencing.items]
    .sort(
      (a, b) =>
        a.correctPosition -
        b.correctPosition,
    )
    .map((item) => item.id)
}

function SequencingRenderer({
  sequencing,
  onComplete,
}: SequencingRendererProps) {
  const [orderedItemIds, setOrderedItemIds] =
    useState<string[]>(() =>
      createInitialOrder(sequencing),
    )

  const [result, setResult] =
    useState<boolean | null>(null)

  const moveItem = (
    index: number,
    direction: -1 | 1,
  ) => {
    if (result === true) {
      return
    }

    const nextIndex =
      index + direction

    if (
      nextIndex < 0 ||
      nextIndex >= orderedItemIds.length
    ) {
      return
    }

    setResult(null)

    setOrderedItemIds(
      (current) => {
        const next = [...current]

        ;[
          next[index],
          next[nextIndex],
        ] = [
          next[nextIndex],
          next[index],
        ]

        return next
      },
    )
  }

  const checkOrder = () => {
    const evaluation =
      evaluateSequence(
        sequencing,
        orderedItemIds,
      )

    setResult(evaluation.correct)
  }

  const showAnswer = () => {
    setOrderedItemIds(
      getCorrectOrder(sequencing),
    )

    setResult(true)
  }

  const orderedItems =
    orderedItemIds
      .map((itemId) =>
        sequencing.items.find(
          (item) => item.id === itemId,
        ),
      )
      .filter(
        (
          item,
        ): item is SequencingDefinition['items'][number] =>
          Boolean(item),
      )

  return (
    <section className="edduu-masterclass-experience edduu-masterclass-sequencing">

      <h3>
        Arrange the steps in the correct order
      </h3>

      <p>
        {sequencing.instruction}
      </p>

      <div className="edduu-sequencing-list">
        {orderedItems.map(
          (item, index) => (
            <div
              key={item.id}
              className="edduu-sequencing-item"
            >
              <div className="edduu-sequencing-number">
                {index + 1}
              </div>

              <div className="edduu-sequencing-content">
                <strong>
                  {item.label}
                </strong>

                {item.description && (
                  <span>
                    {item.description}
                  </span>
                )}
              </div>

              <div className="edduu-sequencing-controls">
                <button
                  type="button"
                  onClick={() =>
                    moveItem(index, -1)
                  }
                  disabled={
                    result === true ||
                    index === 0
                  }
                  aria-label="Move up"
                >
                  {'\u2191'}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    moveItem(index, 1)
                  }
                  disabled={
                    result === true ||
                    index ===
                      orderedItems.length - 1
                  }
                  aria-label="Move down"
                >
                  {'\u2193'}
                </button>
              </div>
            </div>
          ),
        )}
      </div>

      {result !== true && (
        <>
          <button
            type="button"
            className="edduu-masterclass-next"
            onClick={checkOrder}
          >
            Check order
          </button>

          <button
            type="button"
            className="edduu-masterclass-show-answer"
            onClick={showAnswer}
          >
            Show Answer
          </button>
        </>
      )}

      {result !== null && (
        <div className="edduu-masterclass-feedback">
          <strong>
            {result
              ? 'Correct.'
              : 'Not quite.'}
          </strong>

          <p>
            {result
              ? sequencing.successMessage ??
                'You arranged the steps correctly.'
              : sequencing.failureMessage ??
                'The order is not correct yet. Think about what happens first, next, and last.'}
          </p>
        </div>
      )}

      {result === true && onComplete && (
        <button
          type="button"
          className="edduu-masterclass-next"
          onClick={onComplete}
        >
          Continue
        </button>
      )}
    </section>
  )
}

export default SequencingRenderer
