import type { StageDefinition } from '../../../types/learning'

export const ragBreakStage: StageDefinition = {
  id: 'rag-stage-04-break',
  number: 4,
  key: 'break',
  title: 'Break',

  objective: {
    statement:
      'Diagnose a RAG failure by identifying when retrieval returns irrelevant information and causes poor downstream answers.',
    evidence: [
      'Identifies retrieval as the failing stage.',
      'Distinguishes retrieval failure from LLM generation failure.',
      'Explains why irrelevant retrieved context can produce a poor answer.',
    ],
  },

  content: {
    eyebrow: '04 — BREAK',

    title:
      'What happens when RAG retrieves the wrong information?',

    description:
      'A RAG pipeline can fail even when the LLM itself is working correctly. If retrieval returns irrelevant chunks, the model receives poor context and the final answer can become inaccurate or incomplete.',

    explanation:
      'The important debugging question is not simply "Did the LLM answer incorrectly?" Instead, trace the pipeline and ask whether the system retrieved the right evidence for the user question.',

    takeaway:
      'A bad RAG answer can originate before generation. Always inspect retrieval quality and the context supplied to the LLM.',

    failureScenario: {
      title: 'Retrieval failure',
      description:
        'The user asks a question about the company refund policy, but the retriever returns unrelated onboarding and employee-benefits documents.',
      expectedDiagnosis:
        'The retrieval layer returned irrelevant chunks, so the LLM received incorrect context.',
    },
  },

  interactions: [
  {
    id: 'rag-break-diagnosis',
    type: 'diagnostic',
    title: 'Diagnose the retrieval failure',
    instruction:
      'Identify the layer that is most likely causing the failure.',
    config: {
      options: [
        {
          id: 'ingestion',
          label: 'Document ingestion',
        },
        {
          id: 'chunking',
          label: 'Chunking',
        },
        {
          id: 'retrieval',
          label: 'Retrieval',
        },
        {
          id: 'generation',
          label: 'LLM generation',
        },
      ],
      correctOptionId: 'retrieval',
    },
  },
],

  completion: {
    type: 'interaction-complete',
  },
}