import type {
  LessonDefinition,
} from './types'

type LessonRendererProps = {
  lesson: LessonDefinition
  title?: string
  onComplete?: () => void
}

function LessonRenderer({
  lesson,
  title,
  onComplete,
}: LessonRendererProps) {
  return (
    <section className="edduu-masterclass-experience edduu-masterclass-lesson">

      {title && (
        <h3>{title}</h3>
      )}

      {lesson.opening && (
        <p>
          {lesson.opening}
        </p>
      )}

      <div className="edduu-masterclass-lesson-sections">
        {lesson.sections.map(
          (section, index) => (
            <div
              key={`${section.heading}-${index}`}
              className="edduu-masterclass-lesson-section"
            >
              <h4>
                {section.heading}
              </h4>

              <p>
                {section.explanation}
              </p>

              {section.example && (
                <div className="edduu-masterclass-lesson-example">
                  <strong>Example</strong>
                  <p>
                    {section.example}
                  </p>
                </div>
              )}
            </div>
          ),
        )}
      </div>

      {lesson.realWorldConnection && (
        <div className="edduu-masterclass-lesson-real-world">
          <strong>Real-world connection</strong>
          <p>
            {lesson.realWorldConnection}
          </p>
        </div>
      )}

      {lesson.keyIdea && (
        <div className="edduu-masterclass-lesson-key-idea">
          <strong>Key idea</strong>
          <p>
            {lesson.keyIdea}
          </p>
        </div>
      )}

      {lesson.recap && lesson.recap.length > 0 && (
        <div className="edduu-masterclass-lesson-recap">
          <strong>Quick recap</strong>
          <ul>
            {lesson.recap.map((item, index) => (
              <li key={`${item}-${index}`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {onComplete && (
        <button
          type="button"
          className="edduu-masterclass-experience-action"
          onClick={onComplete}
        >
          Continue
        </button>
      )}
    </section>
  )
}

export default LessonRenderer