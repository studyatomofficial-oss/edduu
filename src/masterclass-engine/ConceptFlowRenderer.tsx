import type {
  AnimationDefinition,
  AnimationVisual,
} from './types'

type ConceptFlowRendererProps = {
  animation: AnimationDefinition
  visual: AnimationVisual
}

const VISUAL_LABELS: Record<AnimationVisual, string> = {
  programming: 'PROGRAMMING FLOW',
  database: 'DATA & DATABASE FLOW',
  api: 'API & BACKEND FLOW',
  architecture: 'SYSTEM ARCHITECTURE',
  cloud: 'CLOUD FLOW',
  distributed: 'DISTRIBUTED SYSTEM FLOW',
  security: 'SECURITY FLOW',
  'machine-learning': 'MACHINE LEARNING FLOW',
  llm: 'LANGUAGE MODEL FLOW',
  rag: 'RAG KNOWLEDGE FLOW',
  agent: 'AI AGENT FLOW',
  'production-ai': 'PRODUCTION AI FLOW',
  'concept-flow': 'CONCEPT FLOW',
  computer: 'COMPUTER FLOW',
  storage: 'STORAGE FLOW',
  process: 'PROCESS FLOW',
  network: 'NETWORK FLOW',
  internet: 'INTERNET FLOW',
  web: 'WEB FLOW',
  capstone: 'CAPSTONE FLOW',
  'browser-render': 'BROWSER RENDER FLOW',
  'html-structure': 'HTML STRUCTURE FLOW',
  'css-presentation': 'CSS PRESENTATION FLOW',
  'javascript-interaction': 'JAVASCRIPT INTERACTION FLOW',
  'frontend-components': 'FRONTEND COMPONENT FLOW',
}

function ConceptFlowRenderer({
  animation,
  visual,
}: ConceptFlowRendererProps) {
  return (
    <div className={`edduu-concept-flow edduu-concept-flow-${visual}`}>
      <div className="edduu-concept-flow-label">
        {VISUAL_LABELS[visual]}
      </div>

      <div className="edduu-concept-flow-track">
        {animation.parts.map((part, index) => (
          <div
            className="edduu-concept-flow-step"
            key={part.id}
          >
            <div className="edduu-concept-flow-node">
              <strong>{part.label}</strong>

              <span>
                {part.explanation}
              </span>

              {part.example && (
                <small>
                  {part.example}
                </small>
              )}
            </div>

            {index <
              animation.parts.length - 1 && (
              <div
                className="edduu-concept-flow-arrow"
                aria-hidden="true"
              >
                &#8595;
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ConceptFlowRenderer


