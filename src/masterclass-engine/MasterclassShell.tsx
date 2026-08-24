import { useMemo, useState } from 'react'
import type {
  MasterclassDefinition,
  SessionDefinition,
} from './types'
import { randomizeQuestion } from './QuestionEngine'
import ExperienceRenderer from './ExperienceRenderer'
import {
  createExperienceProgress,
  completeExperience,
  getCurrentExperience,
  isSessionComplete,
  type ExperienceProgressState,
} from './ExperienceProgress'
import {
  createQuestionSession,
  type QuestionSessionState,
} from './QuestionSession'

type MasterclassShellProps = {
  masterclass: MasterclassDefinition
}

function MasterclassShell({
  masterclass,
}: MasterclassShellProps) {
  const [currentSessionIndex, setCurrentSessionIndex] =
    useState(0)

  const [questionSessions, setQuestionSessions] =
    useState<Record<string, QuestionSessionState>>({})

  const [experienceProgress, setExperienceProgress] =
    useState<ExperienceProgressState>(() =>
      createExperienceProgress(
        masterclass.sessions[0]?.experiences ?? [],
      ),
    )

  const [selectedAnswer, setSelectedAnswer] =
    useState<string | null>(null)

  const [answered, setAnswered] =
    useState(false)

  const [masterclassComplete, setMasterclassComplete] =
    useState(false)

  const session: SessionDefinition | undefined =
    masterclass.sessions[currentSessionIndex]

  const activeExperience =
    getCurrentExperience(
      session?.experiences ?? [],
      experienceProgress,
    )

  const randomizedQuestion = useMemo(() => {
    if (
      activeExperience?.type !== 'question' ||
      !activeExperience.question
    ) {
      return null
    }

    const question =
      activeExperience.question

    const existingSession =
      questionSessions[question.id] ??
      createQuestionSession(question.id)

    const result = randomizeQuestion(
      question,
      existingSession,
    )

    return result
  }, [
    activeExperience,
  ])

  if (masterclassComplete) {
    return (
      <section className="edduu-masterclass-shell">
        <div className="edduu-container">
          <section className="edduu-masterclass-complete">
            <p className="edduu-section-eyebrow">
              MASTERCLASS COMPLETE
            </p>

            <h1 className="edduu-section-title">
              You completed the masterclass.
            </h1>

            <p className="edduu-section-description">
              You have completed all experiences in this masterclass.
            </p>
          </section>
        </div>
      </section>
    )
  }

  if (!session) {
    return (
      <section className="edduu-masterclass-shell">
        <div className="edduu-container">
          <p>Masterclass complete.</p>
        </div>
      </section>
    )
  }

  const handleBack = () => {
    setSelectedAnswer(null)
    setAnswered(false)

    if (experienceProgress.currentExperienceIndex > 0) {
      setExperienceProgress((current) => {
        const previousIndex = current.currentExperienceIndex - 1
        const keepIds = new Set(
          session?.experiences.slice(0, previousIndex).map((experience) => experience.id) ?? [],
        )

        return {
          ...current,
          currentExperienceIndex: previousIndex,
          completedExperienceIds: current.completedExperienceIds.filter((id) => keepIds.has(id)),
          results: current.results.filter((result) => keepIds.has(result.experienceId)),
        }
      })
      return
    }

    if (currentSessionIndex > 0) {
      const previousSessionIndex = currentSessionIndex - 1
      const previousSession = masterclass.sessions[previousSessionIndex]

      setCurrentSessionIndex(previousSessionIndex)
      setExperienceProgress({
        currentExperienceIndex:
          Math.max((previousSession?.experiences.length ?? 1) - 1, 0),
        completedExperienceIds:
          previousSession?.experiences.slice(0, Math.max((previousSession.experiences.length ?? 1) - 1, 0)).map((experience) => experience.id) ?? [],
        results: [],
      })
      return
    }

    window.history.back()
  }

  const handleAnswer = (
    optionId: string,
  ) => {
    if (
      answered ||
      !randomizedQuestion
    ) {
      return
    }

    setSelectedAnswer(optionId)
    setAnswered(true)

    setQuestionSessions(
      (current) => ({
        ...current,
        [randomizedQuestion.question.id]:
          randomizedQuestion.session,
      }),
    )
  }


  return (
    <section className="edduu-masterclass-shell">
      <div className="edduu-container">

        <header className="edduu-masterclass-shell-header">
          <p className="edduu-section-eyebrow">
            MASTERCLASS {String(masterclass.number).padStart(2, '0')}
          </p>

          <h1 className="edduu-section-title">
            {masterclass.title}
          </h1>

          <p className="edduu-section-description">
            {masterclass.subtitle}
          </p>
        </header>

        <button type="button" className="edduu-masterclass-back" onClick={handleBack}>Back</button>

        <div className="edduu-masterclass-progress">
          SESSION {session.number} / {masterclass.sessions.length}
        </div>

        <article className="edduu-masterclass-session">

          <p className="edduu-section-eyebrow">
            {session.stage.toUpperCase()}
          </p>

          <h2>{session.title}</h2>

          <p>{session.objective}</p>

          {activeExperience && (
            <ExperienceRenderer
              key={activeExperience.id}
              experience={activeExperience}
              randomizedQuestion={
                activeExperience.type === 'question'
                  ? randomizedQuestion?.question ?? null
                  : null
              }
              selectedAnswer={selectedAnswer}
              answered={answered}
              onAnswer={handleAnswer}
              onComplete={() => {
                if (!activeExperience || !session) {
                  return
                }

                const isQuestion =
                  activeExperience.type === 'question' &&
                  randomizedQuestion

                const selectedOption =
                  isQuestion
                    ? randomizedQuestion.question.options.find(
                        (option) =>
                          option.id === selectedAnswer,
                      )
                    : undefined

                const result =
                  isQuestion
                    ? {
                        correct:
                          selectedOption?.correct === true,
                        score:
                          selectedOption?.correct === true
                            ? 1
                            : 0,
                      }
                    : undefined

                const nextProgress =
                  completeExperience(
                    experienceProgress,
                    activeExperience,
                    session.experiences,
                    result,
                  )

                const sessionComplete =
                  isSessionComplete(
                    nextProgress,
                    session.experiences,
                  )

                setSelectedAnswer(null)
                setAnswered(false)

                if (
                  sessionComplete &&
                  currentSessionIndex <
                    masterclass.sessions.length - 1
                ) {
                  const nextSessionIndex =
                    currentSessionIndex + 1

                  setCurrentSessionIndex(
                    nextSessionIndex,
                  )

                  setExperienceProgress(
                    createExperienceProgress(
                      masterclass.sessions[
                        nextSessionIndex
                      ]?.experiences ?? [],
                    ),
                  )

                  return
                }

                if (sessionComplete) {
                  setMasterclassComplete(true)
                }

                setExperienceProgress(
                  nextProgress,
                )
              }}
            />
          )}




        </article>

      </div>
    </section>
  )
}

export default MasterclassShell
























