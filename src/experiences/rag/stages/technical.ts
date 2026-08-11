import type { StageDefinition } from '../../../types/learning'

export const ragTechnicalStage: StageDefinition = {
  id: 'rag-stage-03-technical',
  number: 3,
  key: 'technical',
  title: 'Technical',

  objective: {
    statement:
      'Understand the retrieval architecture that connects documents, embeddings, retrieval, and generation.',
    evidence: [
      'Describes the flow from documents to answer.',
      'Explains the role of chunking and embeddings.',
      'Recognizes that retrieval supplies context before generation.',
    ],
  },

  content: {
    eyebrow: '03 — TECHNICAL',

    title: 'What is the actual RAG architecture?',

    description:
      'Documents are split into chunks, transformed into embeddings, stored in a vector database, retrieved for relevance, and used as context for the model to answer questions.',

    explanation:
      'The architecture is a pipeline: document intake, chunking, embedding generation, vector storage, retrieval, context assembly, and answer generation.',

    takeaway:
      'RAG is not one model call; it is a retrieval-and-context pipeline that grounds generation in relevant evidence.',
  },

  interactions: [
    {
      id: 'rag-technical-flow',
      type: 'flow',
      title: 'Map the architecture',
      instruction:
        'Follow the architecture from documents to final answer.',
      config: {
        steps: [
          { id: 'documents', label: 'Documents' },
          { id: 'chunking', label: 'Chunking' },
          { id: 'embeddings', label: 'Embeddings' },
          { id: 'vector-db', label: 'Vector Database' },
          { id: 'retrieval', label: 'Retrieval' },
          { id: 'context', label: 'Context' },
          { id: 'llm', label: 'LLM' },
          { id: 'answer', label: 'Answer' },
        ],
      },
    },
  ],

  completion: {
    type: 'interaction-complete',
  },
}
