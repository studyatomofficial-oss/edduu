import { useState } from 'react'

type NodeId =
  | 'USER'
  | 'APPLICATION'
  | 'API'
  | 'DATA'
  | 'AI'
  | 'INFRASTRUCTURE'
  | 'RESULT'

const nodeDetails: Record<NodeId, string> = {
  USER:
    'A real problem, question, or goal starts the experience.',

  APPLICATION:
    'The application is where people interact with the technology system.',

  API:
    'APIs connect different parts of the system and allow services to communicate.',

  DATA:
    'Data provides the information the system stores, retrieves, transforms, and uses.',

  AI:
    'AI can add reasoning, retrieval, prediction, or decision-making to the system.',

  INFRASTRUCTURE:
    'Infrastructure provides the runtime, deployment, scalability, and reliability underneath the system.',

  RESULT:
    'The complete system produces an outcome that the user can actually experience.',
}

function Hero() {
  const [activeNode, setActiveNode] = useState<NodeId | null>(null)

  const toggleNode = (node: NodeId) => {
    setActiveNode((current) => (current === node ? null : node))
  }

  const nodeClass = (node: NodeId) =>
    [
      'edduu-architecture-node',
      node === 'USER' ? 'edduu-architecture-node-user' : '',
      node === 'APPLICATION' ? 'edduu-architecture-node-application' : '',
      node === 'AI' ? 'edduu-architecture-node-ai' : '',
      node === 'RESULT' ? 'edduu-architecture-node-result' : '',
      activeNode === node ? 'is-active' : '',
    ]
      .filter(Boolean)
      .join(' ')

  const renderNode = (node: NodeId, label: string = node) => (
    <button
      type="button"
      className={nodeClass(node)}
      onClick={() => toggleNode(node)}
      aria-pressed={activeNode === node}
    >
      <span>{label}</span>
    </button>
  )

  return (
    <section className="edduu-hero">
      <div className="edduu-container edduu-hero-grid">

        <div className="edduu-hero-content">
          <p className="edduu-hero-eyebrow">
            Experiential technology learning
          </p>

          <h1 className="edduu-hero-title">
            Experience how modern technology actually works.
          </h1>

          <p className="edduu-hero-description">
            Understand systems by seeing them, interacting with them,
            building with them, and thinking about how they behave in the
            real world.
          </p>

          <p className="edduu-hero-scale">
            100+ technologies · 17 real projects · Interactive experiences
          </p>

          <div className="edduu-hero-actions">
            <a
              href="#technologies"
              className="edduu-button edduu-button-primary"
            >
              Explore All Technologies →
            </a>

            <a
              href="#avinash"
              className="edduu-button edduu-button-secondary"
            >
              Meet Avinash →
            </a>
          </div>
        </div>

        <div className="edduu-hero-system">
          <p className="edduu-hero-system-label">
            A connected technology system
          </p>

          <div className="edduu-architecture-canvas">

            <div className="edduu-architecture-stage">

              <div className="edduu-architecture-row edduu-architecture-row-center">
                {renderNode('USER')}
              </div>

              <div className="edduu-flow-connector" />

              <div className="edduu-architecture-row edduu-architecture-row-center">
                {renderNode('APPLICATION')}
              </div>

              <div className="edduu-branch-connector">
                <span />
                <span />
                <span />
              </div>

              <div className="edduu-architecture-row edduu-architecture-row-three">
                {renderNode('API')}
                {renderNode('DATA')}
                {renderNode('AI')}
              </div>

              <div className="edduu-merge-connector">
                <span />
                <span />
                <span />
              </div>

              <div className="edduu-architecture-row edduu-architecture-row-center">
                {renderNode('INFRASTRUCTURE')}
              </div>

              <div className="edduu-flow-connector" />

              <div className="edduu-architecture-row edduu-architecture-row-center">
                {renderNode('RESULT')}
              </div>

            </div>

            {activeNode && (
              <div className="edduu-architecture-detail">
                <span className="edduu-architecture-detail-label">
                  {activeNode}
                </span>

                <p>
                  {nodeDetails[activeNode]}
                </p>
              </div>
            )}

          </div>

          <p className="edduu-hero-system-hint">
            Click any component to explore.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Hero

