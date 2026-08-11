import type { StageDefinition } from '../../../types/learning'

export const ragBuildStage: StageDefinition = {
  id: 'rag-stage-05-build',
  number: 5,
  key: 'build',
  title: 'Build',

  objective: {
    statement:
      'Build a basic RAG pipeline by connecting document processing, retrieval, context construction, and answer generation.',
    evidence: [
      'Identifies the major components of a basic RAG pipeline.',
      'Places the components in the correct execution order.',
      'Understands how retrieved knowledge reaches the LLM.',
    ],
  },

  content: {
    eyebrow: '05 — BUILD',

    title:
      'Can you assemble a basic RAG pipeline?',

    description:
      'A RAG system turns documents into searchable knowledge, retrieves the most relevant information for a question, and supplies that information to the LLM as context.',

    explanation:
      'Start with the source documents, prepare them for retrieval, retrieve relevant information for the user question, construct the context, and finally let the LLM generate a grounded answer.',

    takeaway:
      'A basic RAG pipeline connects knowledge preparation, retrieval, context construction, and generation.',
  },

  interactions: [
  {
    id: 'rag-build-pipeline',
    type: 'pipeline',
    title: 'Build the RAG pipeline',
    instruction:
      'Select the components in the order they participate in a basic RAG system.',
    config: {
      instruction:
        'Select the components in the order they participate in a basic RAG system.',
      steps: [
        {
          id: 'documents',
          label: 'Documents',
        },
        {
          id: 'chunk',
          label: 'Chunk',
        },
        {
          id: 'embed',
          label: 'Embed',
        },
        {
          id: 'vector-store',
          label: 'Vector Store',
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
          id: 'llm',
          label: 'LLM',
        },
        {
          id: 'answer',
          label: 'Answer',
        },
      ],
    },
  },
],

  completion: {
    type: 'interaction-complete',
  },
}