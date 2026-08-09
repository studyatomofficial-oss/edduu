import type { StageDefinition } from '../../../types/learning'

export const ragUnderstandStage: StageDefinition = {
  id: 'rag-stage-02-understand',
  number: 2,
  key: 'understand',
  title: 'Understand',

  objective: {
    statement:
      'Understand the basic RAG lifecycle from a user question to a grounded answer.',
    evidence: [
      'Identifies retrieval as a step before generation.',
      'Understands that retrieved content becomes context for the LLM.',
      'Recognizes the basic flow: question → retrieval → context → generation.',
    ],
  },

  content: {
    eyebrow: '02 — UNDERSTAND',

    title:
      'How does RAG connect external knowledge to an LLM?',

    description:
      'RAG retrieves relevant information first and then gives that information to the language model as context for generating the answer.',

    explanation:
      'The core idea is simple: retrieve the right knowledge before asking the model to generate the response.',

    takeaway:
      'RAG separates knowledge retrieval from answer generation.',
  },

  interactions: [
  {
    id: 'rag-understand-flow',
    type: 'flow',
    title: 'Trace the RAG lifecycle',
    instruction:
      'Follow the path from the user question to the generated answer.',
    config: {
      steps: [
        {
          id: 'question',
          label: 'Question',
        },
        {
          id: 'retrieve',
          label: 'Retrieve',
        },
        {
          id: 'context',
          label: 'Context',
        },
        {
          id: 'generate',
          label: 'Generate',
        },
      ],
    },
  },
],

  completion: {
    type: 'interaction-complete',
  },
}