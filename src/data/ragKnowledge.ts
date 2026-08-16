import type { KnowledgeDefinition } from './knowledge'

export const ragKnowledge: KnowledgeDefinition = {
  technologyId: 'rag',
  slug: 'rag',
  title: 'What is Retrieval-Augmented Generation (RAG)?',
  summary:
    'Retrieval-Augmented Generation combines information retrieval with a language model so the model can generate answers using relevant external knowledge.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is RAG?',
      content:
        'RAG is an AI architecture in which a user question is first used to retrieve relevant information from an external knowledge source. That retrieved information is then provided to a language model as context so the model can generate a grounded answer.',
    },
    {
      title: 'Why do we need RAG?',
      content:
        'A language model may not know an organisation\'s private, recent, or domain-specific information. RAG allows the system to connect the model with an external knowledge base instead of expecting the model to contain every piece of information in its parameters.',
    },
    {
      title: 'How does RAG work?',
      content:
        'A typical RAG system receives a question, converts the question into a representation suitable for retrieval, searches a knowledge store for relevant information, constructs context from the retrieved results, and sends that context together with the question to the language model.',
    },
    {
      title: 'The RAG pipeline',
      content:
        'A common pipeline is: documents are ingested, documents are divided into chunks, chunks are converted into embeddings, embeddings are stored in a retrieval system, a user question is processed, relevant chunks are retrieved, and the retrieved context is passed to the language model for answer generation.',
    },
    {
      title: 'Important RAG concepts',
      content:
        'Important concepts include document ingestion, chunking, embeddings, vector search, retrieval, top-K results, context construction, reranking, prompt construction, generation, and evaluation. Each stage can affect the quality, latency, and cost of the final answer.',
    },
    {
      title: 'RAG and hallucination',
      content:
        'RAG can reduce hallucination by giving the language model relevant evidence before generation, but retrieval alone does not guarantee a correct answer. Poor chunking, irrelevant retrieval, missing documents, weak context construction, or incorrect generation can still produce unreliable results.',
    },
    {
      title: 'RAG in production',
      content:
        'A production RAG system must consider retrieval quality, faithfulness, latency, caching, infrastructure cost, monitoring, failure handling, data freshness, access control, and evaluation. The system should be treated as an end-to-end pipeline rather than only a vector database connected to an LLM.',
    },
    {
      title: 'RAG vs fine-tuning',
      content:
        'RAG and fine-tuning solve different problems. RAG is useful when the system needs access to changing or external knowledge. Fine-tuning changes model behaviour or teaches the model a particular pattern. Many production systems can use either approach or combine them depending on the requirement.',
    },
    {
      title: 'Explore RAG in EDDUU',
      content:
        'EDDUU provides an interactive RAG Lab where you can move through the eight-stage learning experience: See, Understand, Technical, Interact, Build, Break, Fix, and Production.',
    },
  ],
  relatedTechnologyIds: [
    'llms',
    'genai',
    'agents',
    'mcp',
    'postgresql',
  ],
}

export default ragKnowledge




