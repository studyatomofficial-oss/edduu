const learningMethod = [
  'Understand',
  'Experience',
  'Build',
  'Break',
  'Fix',
  'Production',
]

function WhatIsEDDUU() {
  return (
    <section
      className="edduu-what-is"
      aria-labelledby="edduu-what-is-title"
    >
      <div className="edduu-container">
        <div className="edduu-what-is-compact">
          <div>
            <p className="edduu-section-eyebrow">What is EDDUU?</p>

            <h2 id="edduu-what-is-title" className="edduu-section-title">
              EDDUU is an experiential technology learning platform.
            </h2>
          </div>

          <div className="edduu-what-is-summary">
            <p>
              Learn by understanding systems, interacting with them,
              building them, breaking them, fixing them, and seeing how
              they behave in production.
            </p>

            <div className="edduu-method-strip" aria-label="EDDUU learning method">
              {learningMethod.map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsEDDUU
