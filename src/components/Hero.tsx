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

  const nodeClass = (node: NodeId) => [
    'edduu-system-node',
    node === 'USER' ? 'edduu-system-node-user' : '',
    node === 'LLM' ? 'edduu-system-node-llm' : '',
    node === 'ANSWER' ? 'edduu-system-node-answer' : '',
    node === 'AI' ? 'edduu-system-node-ai' : '',
    activeNode === node ? 'is-active' : '',
  ].filter(Boolean).join(' ')

  return (
    <section className="edduu-hero">
      <div className="edduu-container edduu-hero-grid">
        <div className="edduu-hero-content">
          <p className="edduu-hero-eyebrow">
            Interactive technology learning
          </p>

          <h1 className="edduu-hero-title">
            Learn AI by experiencing it.
          </h1>

          <p className="edduu-hero-description">
            Don't just read how technology works. Experience it.
          </p>

          <p className="edduu-hero-scale">
            100+ technologies · 15+ real projects · Interactive simulations
          </p>

          <div className="edduu-hero-actions">
            <a href="#lab" className="edduu-button edduu-button-primary">
              Explore EDDUU →
            </a>
          </div>
        </div>

        <div className="edduu-hero-system">
          <p className="edduu-hero-system-label">Interactive system</p>

          <div className="edduu-system-canvas">
            <button
              type="button"
              className={nodeClass('USER')}
              onClick={() => toggleNode('USER')}
            >
              USER
            </button>

            {activeNode === 'USER' && <p className="edduu-system-detail">{nodeDetails.USER}</p>}

            <div className="edduu-system-line" />

            <button
              type="button"
              className={nodeClass('AI')}
              onClick={() => toggleNode('AI')}
            >
              AI
            </button>

            {activeNode === 'AI' && <p className="edduu-system-detail">{nodeDetails.AI}</p>}

            <div className="edduu-system-branches">
              {(['TOOL', 'RAG'] as const).map((node) => (
                <button
                  key={node}
                  type="button"
                  className={nodeClass(node)}
                  onClick={() => toggleNode(node)}
                >
                  {node}
                </button>
              ))}
            </div>

            {(activeNode === 'TOOL' || activeNode === 'RAG') && (
              <p className="edduu-system-detail">{nodeDetails[activeNode]}</p>
            )}

            <div className="edduu-system-line" />

            <button
              type="button"
              className={nodeClass('LLM')}
              onClick={() => toggleNode('LLM')}
            >
              LLM
            </button>

            {activeNode === 'LLM' && <p className="edduu-system-detail">{nodeDetails.LLM}</p>}

            <div className="edduu-system-line" />

            <button
              type="button"
              className={nodeClass('ANSWER')}
              onClick={() => toggleNode('ANSWER')}
            >
              ANSWER
            </button>

            {activeNode === 'ANSWER' && <p className="edduu-system-detail">{nodeDetails.ANSWER}</p>}
          </div>

          <p className="edduu-hero-system-hint">Click any component to explore.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
