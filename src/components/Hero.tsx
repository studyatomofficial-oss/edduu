import { useState } from 'react'

type NodeId = 'USER' | 'AI' | 'TOOL' | 'RAG' | 'LLM' | 'ANSWER'

const nodeDetails: Record<NodeId, string> = {
  USER: 'A user starts the task or asks a question.',
  AI: 'The AI decides what information or action is needed.',
  TOOL: 'A tool lets the AI interact with an external capability.',
  RAG: 'RAG retrieves relevant information before the model responds.',
  LLM: 'The language model processes the available context and generates a response.',
  ANSWER: 'The system returns the final result to the user.',
}

function Hero() {
  const [activeNode, setActiveNode] = useState<NodeId | null>(null)

  const toggleNode = (node: NodeId) => {
    setActiveNode((current) => (current === node ? null : node))
  }

  return (
    <section className="edduu-hero">
      <div className="edduu-container edduu-hero-grid">
        <div className="edduu-hero-content">
          <p className="edduu-hero-eyebrow">
            EDDUU · AVINASH MISHRA
          </p>

          <h1 className="edduu-hero-title">
            Learn AI by experiencing it.
          </h1>

          <p className="edduu-hero-description">
            An interactive AI & technology laboratory where you can
            explore modern systems, experiment with real engineering
            concepts, and understand how technology works from
            fundamentals to production.
          </p>

          <p className="edduu-hero-scale">
            Explore 100+ technologies, build 15+ advanced systems,
            and learn through interactive simulations, practical
            implementation and production-level thinking.
          </p>

          <div className="edduu-hero-actions">
            <a
              href="#learn"
              className="edduu-button edduu-button-primary"
            >
              Explore EDDUU →
            </a>

            <a
              href="#about"
              className="edduu-button edduu-button-secondary"
            >
              Meet Avinash →
            </a>
          </div>
        </div>

        <div className="edduu-hero-system">
          <p className="edduu-hero-system-label">
            Interactive system
          </p>

          <div className="edduu-system-canvas">
            <button
              type="button"
              className={`edduu-system-node edduu-system-node-user ${
                activeNode === 'USER' ? 'is-active' : ''
              }`}
              onClick={() => toggleNode('USER')}
            >
              USER
            </button>

            {activeNode === 'USER' && (
              <p className="edduu-system-detail">
                {nodeDetails.USER}
              </p>
            )}

            <div className="edduu-system-line" />

            <button
              type="button"
              className={`edduu-system-node edduu-system-node-ai ${
                activeNode === 'AI' ? 'is-active' : ''
              }`}
              onClick={() => toggleNode('AI')}
            >
              AI
            </button>

            {activeNode === 'AI' && (
              <p className="edduu-system-detail">
                {nodeDetails.AI}
              </p>
            )}

            <div className="edduu-system-branches">
              <button
                type="button"
                className={`edduu-system-node ${
                  activeNode === 'TOOL' ? 'is-active' : ''
                }`}
                onClick={() => toggleNode('TOOL')}
              >
                TOOL
              </button>

              <button
                type="button"
                className={`edduu-system-node ${
                  activeNode === 'RAG' ? 'is-active' : ''
                }`}
                onClick={() => toggleNode('RAG')}
              >
                RAG
              </button>
            </div>

            {activeNode === 'TOOL' && (
              <p className="edduu-system-detail">
                {nodeDetails.TOOL}
              </p>
            )}

            {activeNode === 'RAG' && (
              <p className="edduu-system-detail">
                {nodeDetails.RAG}
              </p>
            )}

            <div className="edduu-system-line" />

            <button
              type="button"
              className={`edduu-system-node edduu-system-node-llm ${
                activeNode === 'LLM' ? 'is-active' : ''
              }`}
              onClick={() => toggleNode('LLM')}
            >
              LLM
            </button>

            {activeNode === 'LLM' && (
              <p className="edduu-system-detail">
                {nodeDetails.LLM}
              </p>
            )}

            <div className="edduu-system-line" />

            <button
              type="button"
              className={`edduu-system-node edduu-system-node-answer ${
                activeNode === 'ANSWER' ? 'is-active' : ''
              }`}
              onClick={() => toggleNode('ANSWER')}
            >
              ANSWER
            </button>

            {activeNode === 'ANSWER' && (
              <p className="edduu-system-detail">
                {nodeDetails.ANSWER}
              </p>
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