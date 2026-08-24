import { useState } from 'react'
import type {
  SimulationDefinition,
} from './types'
import {
  evaluateSimulationSelection,
  isSimulationComplete,
  type SimulationSelection,
} from './SimulationEngine'

type SimulationRendererProps = {
  simulation: SimulationDefinition
  onComplete?: () => void
}

function createInitialSimulationItems(
  simulation: SimulationDefinition,
): SimulationDefinition['items'] {
  const shuffled = [...simulation.items]

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

  return shuffled
}

function createCorrectSelections(
  simulation: SimulationDefinition,
): SimulationSelection[] {
  return simulation.items
    .filter(
      (item) =>
        Boolean(item.correctTargetId),
    )
    .map((item) => ({
      itemId: item.id,
      targetId: item.correctTargetId!,
    }))
}

function SimulationRenderer({
  simulation,
  onComplete,
}: SimulationRendererProps) {
  const [simulationItems] =
    useState<SimulationDefinition['items']>(() =>
      createInitialSimulationItems(simulation),
    )

  const [selections, setSelections] =
    useState<SimulationSelection[]>([])

  const [selectedItemId, setSelectedItemId] =
    useState<string | null>(null)

  const [lastResult, setLastResult] =
    useState<boolean | null>(null)

  const completed =
    isSimulationComplete(
      simulation,
      selections,
    )

  const handleTargetSelect = (
    targetId: string,
  ) => {
    if (!selectedItemId || completed) {
      return
    }

    const result =
      evaluateSimulationSelection(
        simulation,
        {
          itemId: selectedItemId,
          targetId,
        },
      )

    setLastResult(result.correct)

    if (result.correct) {
      setSelections((current) => [
        ...current.filter(
          (selection) =>
            selection.itemId !== selectedItemId,
        ),
        {
          itemId: selectedItemId,
          targetId,
        },
      ])

      setSelectedItemId(null)
    }
  }

  const showAnswer = () => {
    setSelections(
      createCorrectSelections(simulation),
    )

    setSelectedItemId(null)
    setLastResult(true)
  }

  const getTargetLabel = (
    itemId: string,
  ) => {
    const selection =
      selections.find(
        (current) =>
          current.itemId === itemId,
      )

    if (!selection) {
      return null
    }

    return (
      simulation.targets.find(
        (target) =>
          target.id === selection.targetId,
      )?.label ?? null
    )
  }

  return (
    <section className="edduu-masterclass-experience edduu-masterclass-simulation">

      <h3>
        Place each item where it belongs
      </h3>

      <p>
        {simulation.instruction}
      </p>

      <div className="edduu-simulation-layout">
        <div className="edduu-simulation-items">
          <p className="edduu-simulation-label">
            ITEMS
          </p>

          {simulationItems.map((item) => {
            const assigned =
              selections.some(
                (selection) =>
                  selection.itemId === item.id,
              )

            const targetLabel =
              getTargetLabel(item.id)

            return (
              <button
                key={item.id}
                type="button"
                disabled={
                  assigned ||
                  completed
                }
                className={
                  selectedItemId === item.id
                    ? 'is-selected'
                    : assigned
                      ? 'is-assigned'
                      : ''
                }
                onClick={() => {
                  setSelectedItemId(item.id)
                  setLastResult(null)
                }}
              >
                <strong>
                  {item.label}
                </strong>

                {item.description && (
                  <span>
                    {item.description}
                  </span>
                )}

                {assigned && targetLabel && (
                  <span className="edduu-simulation-completed">
                    Completed: {targetLabel}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        <div className="edduu-simulation-targets">
          <p className="edduu-simulation-label">
            TARGETS
          </p>

          {simulation.targets.map(
            (target) => (
              <button
                key={target.id}
                type="button"
                disabled={
                  !selectedItemId ||
                  completed
                }
                onClick={() =>
                  handleTargetSelect(
                    target.id,
                  )
                }
              >
                <strong>
                  {target.label}
                </strong>

                {target.description && (
                  <span>
                    {target.description}
                  </span>
                )}
              </button>
            ),
          )}
        </div>
      </div>

      {!completed && (
        <button
          type="button"
          className="edduu-masterclass-show-answer"
          onClick={showAnswer}
        >
          Show Answer
        </button>
      )}

      {lastResult !== null && (
        <div className="edduu-masterclass-feedback">
          <strong>
            {lastResult
              ? 'Correct.'
              : 'Try again.'}
          </strong>

          <p>
            {lastResult
              ? simulation.successMessage ??
                'Good choice. You placed the item correctly.'
              : simulation.failureMessage ??
                'That is not the best match. Think about what this component is responsible for.'}
          </p>
        </div>
      )}

      {completed && (
        <>
          <div className="edduu-simulation-result">
            <p className="edduu-simulation-label">
              YOUR RESULT
            </p>

            <h4>
              You matched every activity correctly.
            </h4>

            <div className="edduu-simulation-result-list">
              {simulation.items.map(
                (item) => {
                  const targetLabel =
                    getTargetLabel(item.id)

                  return (
                    <div
                      key={item.id}
                      className="edduu-simulation-result-row"
                    >
                      <strong>
                        {item.label}
                      </strong>

                      <span>
                        {targetLabel}
                      </span>
                    </div>
                  )
                },
              )}
            </div>
          </div>

          <button
            type="button"
            className="edduu-masterclass-next"
            onClick={onComplete}
          >
            Continue
          </button>
        </>
      )}
    </section>
  )
}

export default SimulationRenderer
