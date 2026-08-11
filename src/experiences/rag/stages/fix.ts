import type { StageDefinition } from '../../../types/learning'

export const ragFixStage: StageDefinition = {
  id: 'rag-stage-07-fix',
  number: 7,
  key: 'fix',
  title: 'Fix',

  objective: {
    statement:
      'Repair the retrieval layer so the system supplies relevant evidence to the model.',
    evidence: [
      'Selects an appropriate repair action for the retrieval failure.',
      'Explains why the chosen repair addresses the root cause.',
      'Verifies that the repair will improve retrieved evidence quality.',
    ],
  },

  content: {
    eyebrow: '07 — FIX',

    title: 'How can we fix the retrieval failure?',

    description:
      'Choose a repair action that addresses the underlying retrieval problem and improves the evidence returned for user questions.',

    explanation:
      'Repairs can include reindexing documents, adjusting chunking, improving retrieval configuration, or fixing ingestion metadata. Pick the action most likely to restore relevant retrieval results.',

    takeaway:
      'A focused repair to the retrieval layer (reindex, query tuning, chunking) is often the fastest way to restore a RAG system to correct behavior.',
  },

  interactions: [
    {
      id: 'rag-fix-choice',
      type: 'diagnostic',
      title: 'Choose a repair action',
      instruction:
        'Select the repair you would perform first to restore relevant retrieval results.',
      config: {
        options: [
          { id: 'reindex', label: 'Reindex the document corpus' },
          { id: 'chunking', label: 'Adjust chunking strategy' },
          { id: 'tune-retriever', label: 'Tune retriever configuration' },
          { id: 'generation', label: 'Change the LLM prompt (not recommended)' },
        ],
        correctOptionId: 'reindex',
      },
    },
  ],

  completion: {
    type: 'interaction-complete',
  },
}
