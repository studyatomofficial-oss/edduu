import type {
  ExperienceDefinition,
} from './types'
import type {
  RandomizedQuestion,
} from './QuestionEngine'
import SimulationRenderer from './SimulationRenderer'
import SequencingRenderer from './SequencingRenderer'
import LessonRenderer from './LessonRenderer'
import AnimationRenderer from './AnimationRenderer'

type ExperienceRendererProps = {
  experience: ExperienceDefinition
  randomizedQuestion?: RandomizedQuestion | null
  onComplete?: () => void
  onAnswer?: (optionId: string) => void
  selectedAnswer?: string | null
  answered?: boolean
}

function ExperienceRenderer({
  experience,
  randomizedQuestion,
  onComplete,
  onAnswer,
  selectedAnswer,
  answered = false,
}: ExperienceRendererProps) {

  if (
    experience.type === 'lesson' &&
    experience.lesson
  ) {
    return (
      <LessonRenderer
        lesson={experience.lesson}
        title={experience.title}
        onComplete={onComplete}
      />
    )
  }
  if (experience.type === 'explanation') {
    return (
      <section className="edduu-masterclass-experience edduu-masterclass-explanation">
{experience.title && (
          <h3>{experience.title}</h3>
        )}

        {experience.description && (
          <p>{experience.description}</p>
        )}

        {onComplete && (
          <button
            type="button"
            className="edduu-masterclass-experience-action"
            onClick={onComplete}
          >
            I understand
          </button>
        )}
      </section>
    )
  }

  if (
    experience.type === 'animation' &&
    experience.animation
  ) {
    return (
      <AnimationRenderer
        animation={experience.animation}
        title={experience.title}
        description={experience.description}
        onComplete={onComplete}
      />
    )
  }
  if (
    experience.type === 'simulation' &&
    experience.simulation
  ) {
    return (
      <SimulationRenderer
        simulation={experience.simulation}
        onComplete={onComplete}
      />
    )
  }
  if (
    experience.type === 'sequencing' &&
    experience.sequencing
  ) {
    return (
      <SequencingRenderer
        sequencing={experience.sequencing}
        onComplete={onComplete}
      />
    )
  }
  if (
    experience.type === 'question' &&
    randomizedQuestion
  ) {
    const selectedOption =
      randomizedQuestion.options.find(
        (option) =>
          option.id === selectedAnswer,
      )

    const isCorrect =
      selectedOption?.correct === true

    return (
      <section className="edduu-masterclass-experience edduu-masterclass-question">
{experience.title && (
          <h3>{experience.title}</h3>
        )}

        {experience.description && (
          <p>
            {experience.description}
          </p>
        )}

        <p>
          {randomizedQuestion.question}
        </p>

        <div className="edduu-masterclass-options">
          {randomizedQuestion.options.map(
            (option) => (
              <button
                key={option.id}
                type="button"
                onClick={() =>
                  onAnswer?.(option.id)
                }
                disabled={answered}
                className={
                  selectedAnswer === option.id
                    ? option.correct
                      ? 'is-correct'
                      : 'is-wrong'
                    : ''
                }
              >
                {option.text}
              </button>
            ),
          )}
        </div>

        {!answered && (<button type="button" className="edduu-masterclass-show-answer" onClick={() => { const correctOption = randomizedQuestion.options.find((option) => option.correct === true); if (correctOption) onAnswer?.(correctOption.id) }}>Show Answer</button>)}

        {answered && (
          <div className="edduu-masterclass-feedback">
            <strong>
              {isCorrect
                ? 'Correct.'
                : 'Not quite.'}
            </strong>

            {!isCorrect && (
              <p className="edduu-masterclass-correct-answer">
                Correct answer:{' '}
                <strong>
                  {
                    randomizedQuestion.options.find(
                      (option) => option.correct,
                    )?.text
                  }
                </strong>
              </p>
            )}

            {randomizedQuestion.explanation && (
              <p>
                {randomizedQuestion.explanation}
              </p>
            )}

            {!isCorrect &&
              randomizedQuestion.hints?.[0] && (
                <p>
                  Hint:{' '}
                  {randomizedQuestion.hints[0]}
                </p>
              )}
          </div>
        )}

        {answered && onComplete && (
          <button
            type="button"
            onClick={onComplete}
            className="edduu-masterclass-next"
          >
            Continue
          </button>
        )}
      </section>
    )
  }
  return null
}

export default ExperienceRenderer










