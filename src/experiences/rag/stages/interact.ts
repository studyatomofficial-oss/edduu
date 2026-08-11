import type { StageDefinition } from '../../../types/learning'

export const ragInteractStage: StageDefinition = {
  id: 'rag-stage-04-interact',
  number: 4,
  key: 'interact',
  title: 'Interact',

  objective: {
    statement:
      'Evaluate how retrieval parameters affect evidence quality, coverage, and latency in a RAG system.',
    evidence: [
      'Identifies how retrieval depth changes the evidence set.',
      'Recognizes the trade-off between recall and latency.',
      'Explains why broader retrieval can add noise or increase cost.',
    ],
  },

  content: {
    eyebrow: '04 — INTERACT',

    title: 'How do retrieval parameters change the answer?',

    description:
      'A small adjustment to retrieval depth or context size can change the relevant passages returned and the speed of the system.',

    explanation:
      'If you widen the retrieval set, you often increase recall but may also include irrelevant passages. If you narrow it too much, you may miss critical context. Every choice changes the quality and cost of the final answer.',

    takeaway:
      'Parameter tuning is not cosmetic. It changes the evidence the model sees and therefore changes answer quality, speed, and cost.',
  },

  interactions: [
    {
      id: 'rag-interact-parameters',
      type: 'diagnostic',
      title: 'Tune the retrieval strategy',
      instruction:
        'Which change most directly improves evidence coverage for an ambiguous query?',
      config: {
        options: [
          { id: 'top-k', label: 'Increase the number of retrieved chunks' },
          { id: 'temperature', label: 'Lower the generation temperature' },
          { id: 'schema', label: 'Change the document schema' },
          { id: 'prompt', label: 'Rewrite the final prompt' },
        ],
        correctOptionId: 'top-k',
      },
    },
  ],

  completion: {
    type: 'interaction-complete',
  },
}
