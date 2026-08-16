import "./AvinashPage.css"

const metrics = [
  {
    value: "10+",
    label: "Years of experience",
    description:
      "A decade across software delivery, platform foundations, engineering leadership, and AI transformation.",
  },
  {
    value: "60+",
    label: "Software systems",
    description:
      "Systems spanning institutional workflows, learning platforms, automation, SaaS, and AI-enabled products.",
  },
  {
    value: "22",
    label: "Enterprise clients",
    description:
      "Programs delivered across different client environments, priorities, constraints, and operating models.",
  },
  {
    value: "25K+",
    label: "Active users",
    description:
      "Products operated at meaningful scale where reliability, usability, and execution discipline mattered.",
  },
  {
    value: "99.95%",
    label: "Availability target",
    description:
      "Reliability treated as an engineering and program outcome rather than simply a technical metric.",
  },
  {
    value: ">90%",
    label: "RAG faithfulness",
    description:
      "AI transformation work focused on retrieval quality, evaluation, and production readiness.",
  },
  {
    value: "2–3×",
    label: "AI-assisted output",
    description:
      "AI used as an engineering productivity lever across development workflows.",
  },
  {
    value: "20–30%",
    label: "Cloud cost savings",
    description:
      "FinOps and cloud economics considered alongside reliability, performance, and delivery.",
  },
]

const thinkingStages = [
  {
    number: "01",
    title: "Problem",
    description:
      "Start with the outcome that needs to change, not with a technology looking for a use case.",
  },
  {
    number: "02",
    title: "Context",
    description:
      "Understand users, constraints, business priorities, technical realities, and dependencies.",
  },
  {
    number: "03",
    title: "System",
    description:
      "See how architecture, data, people, processes, and technology interact as one system.",
  },
  {
    number: "04",
    title: "Decisions",
    description:
      "Turn ambiguity into explicit technical and program decisions with clear ownership.",
  },
  {
    number: "05",
    title: "Trade-offs",
    description:
      "Balance speed, reliability, cost, scale, quality, and customer value.",
  },
  {
    number: "06",
    title: "Outcome",
    description:
      "Measure whether the system actually produced the intended business and engineering outcome.",
  },
]

const programs = [
  {
    number: "01",
    period: "2016–2018",
    category: "PLATFORM",
    title: "Building the foundation.",
    problem:
      "Fragmented, spreadsheet-driven institutional workflows were difficult to scale and reuse.",
    move:
      "Directed the transition toward reusable multi-tenant SaaS platform foundations.",
    proof: "5 core systems · 2K+ active users",
  },
  {
    number: "02",
    period: "2019–2021",
    category: "SCALE",
    title: "Scaling under pressure.",
    problem:
      "Demand increased sharply while reliability, incident response, and concurrent releases became critical.",
    move:
      "Directed platform-wide scaling while coordinating reliability and multiple concurrent releases.",
    proof: "60+ systems · 25K+ users · 99.95% availability",
  },
  {
    number: "03",
    period: "2022–2023",
    category: "PRODUCT",
    title: "Productizing the platform.",
    problem:
      "An existing digital-learning capability needed to become a premium, reusable product.",
    move:
      "Directed StudyAtom while shaping architecture, product delivery, and release governance.",
    proof: "22-client product line · Up to 5 deploys/day",
  },
  {
    number: "04",
    period: "2024–2026",
    category: "AI TRANSFORMATION",
    title: "Transforming with AI.",
    problem:
      "Move GenAI and RAG from isolated capabilities toward reusable, production-ready systems.",
    move:
      "Directed orchestration, evaluation, responsible AI, semantic caching, FinOps, and AI-assisted engineering.",
    proof: ">90% RAG faithfulness · 20–30% cloud savings · 2–3× AI-assisted output",
    featured: true,
  },
]

function AvinashPage() {
  return (
    <main className="av2-page">
      <div className="av2-grid" aria-hidden="true" />

      <div className="av2-shell">
        <div className="av2-topline">
          <span>AVINASH MISHRA</span>
          <span>AI · ENGINEERING · PROGRAMS</span>
          <span>2026</span>
        </div>

        {/* HERO */}

        <section className="av2-hero">
          <div className="av2-hero-main">
            <p className="av2-eyebrow">THE PERSON BEHIND THE SYSTEMS</p>

            <h1>
              Avinash
              <span>Mishra</span>
            </h1>

            <div className="av2-role">
              <span className="av2-status" />
              AI-FIRST TECHNICAL PROGRAM LEADER
            </div>

            <p className="av2-hero-lede">
              Turning AI, engineering, and complex programs into systems
              that work in the real world.
            </p>

            <p className="av2-hero-support">
              I operate at the intersection of technology, execution, and
              business outcomes — translating ambiguity into decisions,
              aligning teams, and moving complex systems toward production.
            </p>

            <div className="av2-actions">
              <a
                href="https://www.linkedin.com/in/avinash-mishra-edduu/"
                target="_blank"
                rel="noreferrer"
                className="av2-action av2-action-primary"
              >
                LinkedIn
                <span>↗</span>
              </a>

              <a
                href="/resume/Avinash-Mishra-Resume.pdf"
                download
                className="av2-action"
              >
                Download Resume
                <span>↓</span>
              </a>
            </div>
          </div>

          <aside className="av2-hero-side">
            <p className="av2-side-label">OPERATING ACROSS</p>

            <div className="av2-side-list">
              <div>
                <span>01</span>
                <strong>AI TRANSFORMATION</strong>
              </div>
              <div>
                <span>02</span>
                <strong>TECHNICAL PROGRAMS</strong>
              </div>
              <div>
                <span>03</span>
                <strong>ENGINEERING SYSTEMS</strong>
              </div>
              <div>
                <span>04</span>
                <strong>BUSINESS OUTCOMES</strong>
              </div>
            </div>

            <div className="av2-side-note">
              <span>CORE APPROACH</span>
              <p>
                Start with the problem. Understand the system. Make the
                decision. Align the people. Deliver the outcome.
              </p>
            </div>
          </aside>
        </section>

        {/* PROOF */}

        <section className="av2-section av2-proof">
          <div className="av2-section-head">
            <div>
              <p className="av2-eyebrow">PROOF, NOT CLAIMS</p>
              <h2>
                Scale is useful.
                <span>Context makes it meaningful.</span>
              </h2>
            </div>

            <p>
              The numbers describe the environments and outcomes. The real
              story is the responsibility behind them.
            </p>
          </div>

          <div className="av2-metric-grid">
            {metrics.map((metric) => (
              <article className="av2-metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <div className="av2-metric-label">{metric.label}</div>
                <p>{metric.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* THINKING */}

        <section className="av2-section av2-thinking">
          <div className="av2-section-head">
            <div>
              <p className="av2-eyebrow">HOW I THINK</p>
              <h2>
                I don't start
                <span>with technology.</span>
              </h2>
            </div>

            <p>
              Technology is one part of the system. The job is to understand
              the problem deeply enough to make the right decisions across
              product, engineering, people, cost, and execution.
            </p>
          </div>

          <div className="av2-thinking-grid">
            {thinkingStages.map((stage) => (
              <article className="av2-thinking-card" key={stage.number}>
                <span className="av2-thinking-number">{stage.number}</span>

                <h3>{stage.title}</h3>

                <p>{stage.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PROGRAMS */}

        <section className="av2-section av2-programs">
          <div className="av2-section-head">
            <div>
              <p className="av2-eyebrow">SIGNATURE PROGRAMS</p>
              <h2>
                Problems I've led.
                <span>Systems I've changed.</span>
              </h2>
            </div>

            <p>
              A selection of programs showing the progression from platform
              foundations and scale to productization and AI transformation.
            </p>
          </div>

          <div className="av2-program-list">
            {programs.map((program) => (
              <article
                key={program.number}
                className={`av2-program ${
                  program.featured ? "av2-program-featured" : ""
                }`}
              >
                <div className="av2-program-index">{program.number}</div>

                <div className="av2-program-body">
                  <div className="av2-program-meta">
  <span className="av2-program-years">{program.period}</span>
  <span className="av2-program-label">{program.category}</span>
</div>

                  <h3>{program.title}</h3>

                  <div className="av2-program-columns">
                    <div>
                      <span>THE PROBLEM</span>
                      <p>{program.problem}</p>
                    </div>

                    <div>
                      <span>THE MOVE</span>
                      <p>{program.move}</p>
                    </div>
                  </div>

                  <div className="av2-program-proof">
                    {program.proof}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* AI TRANSFORMATION */}

        <section className="av2-section av2-ai">
          <div className="av2-ai-header">
            <p className="av2-eyebrow">SELECTED AI TRANSFORMATION</p>

            <h2>
              From AI feature
              <span>to AI capability.</span>
            </h2>

            <p>
              The shift is not simply adding an LLM to a product. It is
              building the surrounding system — retrieval, orchestration,
              evaluation, governance, observability, cost controls, and
              production quality gates.
            </p>
          </div>

          <div className="av2-ai-flow">
            <div>
              <span>01</span>
              <strong>GENAI</strong>
            </div>

            <i>→</i>

            <div>
              <span>02</span>
              <strong>RAG</strong>
            </div>

            <i>→</i>

            <div>
              <span>03</span>
              <strong>EVALUATION</strong>
            </div>

            <i>→</i>

            <div>
              <span>04</span>
              <strong>GOVERNANCE</strong>
            </div>

            <i>→</i>

            <div>
              <span>05</span>
              <strong>PRODUCTION</strong>
            </div>
          </div>

          <div className="av2-ai-proof">
            <div>
              <strong>&gt;90%</strong>
              <span>RAG FAITHFULNESS</span>
            </div>

            <div>
              <strong>30–40%</strong>
              <span>CACHE HIT RATE</span>
            </div>

            <div>
              <strong>&lt;500ms</strong>
              <span>CACHED TTFT P95</span>
            </div>

            <div>
              <strong>20–30%</strong>
              <span>CLOUD SAVINGS</span>
            </div>
          </div>
        </section>

        {/* FINAL */}

        <section className="av2-final">
          <div className="av2-final-index">05</div>

          <div>
            <p className="av2-eyebrow">BEYOND THE RESUME</p>

            <h2>
              The interesting part is
              <span>what gets built next.</span>
            </h2>

            <p>
              Explore the systems, products, and ideas that continue to shape
              the work.
            </p>

            <div className="av2-actions">
              <a
                href="https://www.linkedin.com/in/avinash-mishra-edduu/"
                target="_blank"
                rel="noreferrer"
                className="av2-action av2-action-primary"
              >
                Connect on LinkedIn
                <span>↗</span>
              </a>

              <a href="/" className="av2-action">
                Back to EDDUU
                <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default AvinashPage

