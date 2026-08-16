import { useEffect, useRef, useState } from 'react'

type ThinkingStage = {
  label: string
  description: string
}

const thinkingStages: ThinkingStage[] = [
  {
    label: 'TOOLS',
    description:
      'Know the technologies that can be used to solve a problem.',
  },
  {
    label: 'CONNECTIONS',
    description:
      'See how different technologies depend on and communicate with each other.',
  },
  {
    label: 'DECISIONS',
    description:
      'Understand why one technical approach is chosen over another.',
  },
  {
    label: 'TRADE-OFFS',
    description:
      'Recognize what is gained, what is sacrificed, and what the decision costs.',
  },
  {
    label: 'SYSTEM THINKING',
    description:
      'See the complete system as a set of connected decisions working toward an outcome.',
  },
]

function ExperienceDemo() {
  const [currentStage, setCurrentStage] = useState(-1)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [])

  const startExperience = () => {
    if (isRunning) {
      return
    }

    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current)
    }

    setIsRunning(true)
    setCurrentStage(0)

    let stage = 0

    intervalRef.current = window.setInterval(() => {
      stage += 1

      if (stage < thinkingStages.length) {
        setCurrentStage(stage)
      } else {
        if (intervalRef.current !== null) {
          window.clearInterval(intervalRef.current)
          intervalRef.current = null
        }

        setIsRunning(false)
      }
    }, 900)
  }

  const selectStage = (index: number) => {
    if (isRunning) {
      return
    }

    setCurrentStage((current) =>
      current === index ? -1 : index,
    )
  }

  const activeDescription =
    currentStage >= 0
      ? thinkingStages[currentStage].description
      : 'Move from knowing individual technologies to understanding the decisions that shape complete systems.'

  return (
    <section className="edduu-experience edduu-shift-section" id="learn">
      <div className="edduu-container">
        <div className="edduu-shift-heading">
          <p className="edduu-section-eyebrow edduu-shift-eyebrow">
            THE SHIFT
          </p>

          <h2 className="edduu-section-title edduu-shift-title">
            From knowing tools to thinking in systems.
          </h2>

          <p className="edduu-section-description edduu-shift-description">
            Technology becomes useful when you understand not only what
            each tool does, but how connections, decisions, and trade-offs
            shape the system around it.
          </p>
        </div>

        <div className="edduu-shift-experience">
          <div className="edduu-shift-status" aria-live="polite">
            <span className="edduu-shift-status-index">
              {currentStage >= 0
                ? String(currentStage + 1).padStart(2, '0')
                : '—'}
            </span>

            <span>{activeDescription}</span>
          </div>

          <div
            className="edduu-shift-track"
            aria-label="EDDUU system thinking progression"
          >
            {thinkingStages.map((stage, index) => {
              const isActive = index === currentStage
              const isComplete =
                currentStage >= 0 && index < currentStage

              return (
                <div
                  className="edduu-shift-stage-wrapper"
                  key={stage.label}
                >
                  <button
                    type="button"
                    className={`edduu-shift-stage ${
                      isActive ? 'is-active' : ''
                    } ${isComplete ? 'is-complete' : ''}`}
                    onClick={() => selectStage(index)}
                    disabled={isRunning}
                    aria-pressed={isActive}
                  >
                    <span className="edduu-shift-stage-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="edduu-shift-stage-label">
                      {stage.label}
                    </span>
                  </button>

                  {index < thinkingStages.length - 1 && (
                    <div
                      className={`edduu-shift-connector ${
                        isComplete ? 'is-complete' : ''
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </div>
              )
            })}
          </div>

          <div className="edduu-shift-footer">
            <p>
              One technology becomes a connected system of decisions.
            </p>

            <button
              type="button"
              className="edduu-button edduu-button-primary edduu-shift-button"
              onClick={startExperience}
              disabled={isRunning}
            >
              {isRunning
                ? 'Following the shift…'
                : 'Experience the Shift →'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceDemo
