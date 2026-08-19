import type { KnowledgeDefinition } from './knowledge'

export const embeddingsKnowledge: KnowledgeDefinition = {
  technologyId: 'embeddings',
  slug: 'embeddings',
  title: 'What are Embeddings?',
  summary:
    'Embeddings are numerical vector representations that capture useful semantic or structural relationships between pieces of information, enabling systems to compare and retrieve related data.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What are Embeddings?',
      content:
        'An embedding is a numerical representation of information such as text, images, audio, or other data. A model converts the original information into a vector, and information with similar meaning or characteristics can often be represented by vectors that are closer together in the embedding space.',
    },
    {
      title: 'Why do we need Embeddings?',
      content:
        'Traditional keyword matching mainly looks for exact or closely related words. Embeddings allow systems to compare information based on learned representations and semantic relationships. This makes them useful when two pieces of information express a similar idea using different words or structures.',
    },
    {
      title: 'How do Embeddings work?',
      content:
        'An embedding model receives an input and transforms it into a vector containing numerical values. The resulting vector can then be stored, compared, searched, or combined with other systems. Applications commonly compare vectors using a similarity measure to identify information that is semantically or structurally related to the query.',
    },
    {
      title: 'The Embedding pipeline',
      content:
        'A typical embedding workflow is: collect information, prepare the input, generate embeddings using an embedding model, store the vectors with relevant metadata, generate an embedding for a new query, compare the query vector with stored vectors, and return the most relevant results.',
      highlights: [
        {
          title: 'Input',
          description:
            'The original information that needs to be represented as a vector.',
        },
        {
          title: 'Embedding model',
          description:
            'A trained model that converts information into numerical vector representations.',
        },
        {
          title: 'Vector',
          description:
            'An ordered collection of numerical values representing the input in an embedding space.',
        },
        {
          title: 'Similarity',
          description:
            'A measurement used to estimate how closely two vector representations are related.',
        },
        {
          title: 'Vector search',
          description:
            'A retrieval method that finds stored vectors that are most similar to a query vector.',
        },
        {
          title: 'Metadata',
          description:
            'Additional information stored alongside vectors to support filtering, identification, and retrieval.',
        },
      ],
    },
    {
      title: 'Important Embedding concepts',
      content:
        'Several concepts are important when designing systems that use embeddings for search, retrieval, recommendation, or similarity analysis.',
      highlights: [
        {
          title: 'Embedding dimension',
          description:
            'The number of numerical values contained in each vector representation.',
        },
        {
          title: 'Vector space',
          description:
            'The mathematical space in which embedding vectors are represented and compared.',
        },
        {
          title: 'Cosine similarity',
          description:
            'A common similarity measure based on the angle between two vectors.',
        },
        {
          title: 'Euclidean distance',
          description:
            'A distance measure based on the geometric separation between two vectors.',
        },
        {
          title: 'Nearest neighbors',
          description:
            'The vectors that are closest to a query according to a selected similarity or distance measure.',
        },
        {
          title: 'Semantic similarity',
          description:
            'The degree to which two pieces of information express related meaning or concepts.',
        },
      ],
    },
    {
      title: 'Embeddings and semantic search',
      content:
        'Semantic search uses embeddings to retrieve information based on meaning rather than relying only on exact keyword matches. A user query is converted into a vector and compared against vectors representing stored content. The most relevant results can then be returned to the user or supplied as context to another system.',
    },
    {
      title: 'Embeddings in RAG',
      content:
        'Embeddings are a key component of many Retrieval-Augmented Generation systems. Documents can be divided into chunks, each chunk can be converted into an embedding, and those vectors can be stored in a vector-capable retrieval system. When a user asks a question, the question is embedded and similar document chunks are retrieved before the language model generates an answer.',
    },
    {
      title: 'Embeddings vs keyword search',
      content:
        'Keyword search is effective when exact terms, identifiers, or precise textual matches are important. Embedding-based search is useful when semantic relationships matter. Many production systems combine both approaches because lexical matching can provide precision for exact terms while vector retrieval can improve recall for conceptually related information.',
    },
    {
      title: 'Embeddings in real products',
      content:
        'Embeddings are used in semantic search, RAG systems, recommendation systems, document clustering, duplicate detection, content discovery, classification workflows, and similarity analysis. They can also be used to connect information from different modalities when the underlying models produce compatible representations.',
    },
    {
      title: 'Embeddings in production',
      content:
        'Production embedding systems must consider embedding model selection, dimensionality, indexing strategy, retrieval latency, storage cost, metadata filtering, data freshness, model versioning, security, evaluation, and migration strategy. Changing an embedding model can change the vector space, which may require re-embedding previously stored data.',
    },
    {
      title: 'Evaluating Embedding systems',
      content:
        'Embedding quality should be evaluated against the actual retrieval or similarity task rather than assuming that a higher-dimensional vector is automatically better. Teams can create representative queries and expected results, then measure whether relevant information is retrieved consistently. Latency, storage cost, and operational complexity should also be considered.',
      highlights: [
        {
          title: 'Recall',
          description:
            'Measures how effectively the retrieval system finds relevant information.',
        },
        {
          title: 'Precision',
          description:
            'Measures how much of the retrieved information is actually relevant.',
        },
        {
          title: 'Top-K retrieval',
          description:
            'Returns the K highest-ranked candidate results for a query.',
        },
        {
          title: 'Retrieval quality',
          description:
            'Measures whether retrieved results provide useful evidence for the downstream task.',
        },
      ],
    },
    {
      title: 'Explore Embeddings in EDDUU',
      content:
        'EDDUU connects Embeddings with RAG, Large Language Models, Generative AI, Multimodal AI, vector retrieval, databases, and AI evaluation.',
    },
  ],
  relatedTechnologyIds: [
    'ai',
    'genai',
    'llms',
    'rag',
    'multimodal-ai',
    'ai-evaluation',
    'postgresql',
    'redis',
    'elasticsearch',
  ],
}

export default embeddingsKnowledge
