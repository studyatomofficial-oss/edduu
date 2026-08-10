import { useState } from 'react'

type SimulationStep = {
  label: string
  description: string
}

const simulationSteps: SimulationStep[] = [
  {
    label: 'USER',
    description: 'A user request enters the system.',
  },
  {
    label: 'AI',
    description: 'The AI understands the request and decides what to do.',
  },
  {
    label: 'TOOL',
    description: 'The AI uses a tool to perform the required action.',
  },
  {
    label: 'RESULT',
    description: 'The system returns the result to the user.',
  },
]

const learningLoop = [
  'See', 'Interact', 'Build', 'Break', 'Fix', 'Production',
]

function ExperienceDemo() {
  const [currentStep, setCurrentStep] = useState(-1)
  const [isRunning, setIsRunning] = useState(false)

  const startSimulation = () => {
    if (isRunning) {
      return
    }

    setIsRunning(true)
    setCurrentStep(0)

    let step = 0

    const interval = window.setInterval(() => {
      step += 1

      if (step < simulationSteps.length) {
        setCurrentStep(step)
      } else {
        window.clearInterval(interval)
        setIsRunning(false)
      }
    }, 1200)
  }

  return (
    <section className="edduu-experience" id="learn">
      <div className="edduu-container">
        <div className="edduu-experience-heading">
          <p className="edduu-section-eyebrow">
            HOW EDDUU WORKS
          </p>

          <h2 className="edduu-section-title">
            Learn through systems, not slides.
          </h2>

          <p className="edduu-section-description">
            See a compact technology flow and feel how a real system
            progresses from request to result.
          </p>

          <div className="edduu-learning-loop" aria-label="EDDUU learning loop">
            {learningLoop.map((step) => <span key={step}>{step}</span>)}
          </div>
        </div>

        <div className="edduu-experience-demo">
          <div className="edduu-experience-status">
            {currentStep === -1
              ? 'Ready to run — start the compact system flow.'
              : isRunning
                ? simulationSteps[currentStep].description
                : 'Simulation complete — you saw how the system moved.'}
          </div>

          <div className="edduu-experience-flow">
            {simulationSteps.map((step, index) => {
              const isActive = index === currentStep
              const isComplete =
                currentStep >= 0 && index < currentStep

              return (
                <div
                  className="edduu-experience-step-wrapper"
                  key={step.label}
                >
                  <div
                    className={`edduu-experience-step ${
                      isActive ? 'is-active' : ''
                    } ${isComplete ? 'is-complete' : ''}`}
                  >
                    <span>{step.label}</span>
                  </div>

                  {index < simulationSteps.length - 1 && (
                    <div
                      className={`edduu-experience-connector ${
                        isComplete ? 'is-complete' : ''
                      }`}
                    />
                  )}
                </div>
              )
            })}
          </div>

          <button
            type="button"
            className="edduu-button edduu-button-primary edduu-experience-button"
            onClick={startSimulation}
            disabled={isRunning}
          >
            {isRunning ? 'Running…' : 'Start Simulation →'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default ExperienceDemo
