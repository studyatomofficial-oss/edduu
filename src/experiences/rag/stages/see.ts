import type { StageDefinition } from '../../../types/learning'

export const ragSeeStage: StageDefinition = {
  id: 'rag-stage-01-see',
  number: 1,
  key: 'see',
  title: 'See',

  objective: {
    statement:
      'Identify why an LLM cannot automatically answer questions about private company documents.',
    evidence: [
      'Recognizes that the documents exist outside the model context.',
      'Observes that the LLM does not automatically have access to those documents.',
      'Identifies the resulting knowledge gap.',
    ],
  },

  content: {
    eyebrow: '01 — SEE',

    title:
      "Why can't an LLM simply answer questions about my company's documents?",

    description:
      "The documents may exist inside the company, but the LLM does not automatically have access to their contents.",

    explanation:
      'The first problem is not generation. It is access to the right information before generation happens.',

    takeaway:
      'An LLM can only use information available in the context provided to it.',
  },

  interactions: [
  {
    id: 'rag-see-start',
    type: 'click',
    title: 'Start the observation',
    instruction:
      'Click the button to observe the knowledge gap.',
    config: {
      label: 'Observe the gap',
    },
  },
],

  completion: {
    type: 'interaction-complete',
  },
}