import type { KnowledgeDefinition } from './knowledge'

export const llmsKnowledge: KnowledgeDefinition = {
  technologyId: 'llms',
  slug: 'llms',
  title: 'What are Large Language Models (LLMs)?',
  summary:
    'Large Language Models are AI models trained on large collections of text and other data to understand and generate language, code, and increasingly multimodal information.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What are Large Language Models?',
      content:
        'Large Language Models are machine learning models designed to process and generate language. They learn statistical patterns from very large datasets and use those learned patterns to predict and produce sequences of tokens. Modern LLMs can answer questions, summarize information, generate code, translate text, extract information, and support conversational applications.',
    },
    {
      title: 'Why do we need LLMs?',
      content:
        'Traditional software requires developers to explicitly define many rules for working with language. Human language is highly variable and difficult to describe completely with fixed rules. LLMs provide a general-purpose language capability that applications can use for tasks such as understanding user requests, generating responses, summarizing documents, extracting information, and interacting with software through natural language.',
    },
    {
      title: 'How do LLMs work?',
      content:
        'An LLM is trained on large amounts of data to learn patterns in language. During inference, an input is converted into tokens and processed by the model. The model estimates likely next tokens based on the available context and repeatedly generates tokens until the response is complete. Modern LLM applications often add retrieval, tools, structured outputs, memory, guardrails, and other software around the model.',
    },
    {
      title: 'How are LLMs trained?',
      content:
        'Training typically involves exposing a model to large datasets and optimizing its parameters so that it becomes better at predicting or representing patterns in the training data. Large-scale training requires substantial compute, data pipelines, optimization techniques, and distributed infrastructure. After pretraining, additional techniques such as instruction tuning and preference optimization can adapt a model for more useful interactions.',
    },
    {
      title: 'Important LLM concepts',
      content:
        'Several concepts are essential for understanding how LLMs behave and how they are used in applications.',
      highlights: [
        {
          title: 'Tokens',
          description:
            'Units of text that the model processes as input and produces as output.',
        },
        {
          title: 'Parameters',
          description:
            'Learned numerical values inside the model that determine how it transforms input into output.',
        },
        {
          title: 'Context window',
          description:
            'The amount of information a model can consider within a single request and response context.',
        },
        {
          title: 'Attention',
          description:
            'A mechanism that allows the model to determine which parts of the available context are important to one another.',
        },
        {
          title: 'Inference',
          description:
            'The process of running a trained model to generate an output for a new input.',
        },
        {
          title: 'Temperature',
          description:
            'A generation setting that influences how predictable or varied the model output can be.',
        },
      ],
    },
    {
      title: 'LLMs vs traditional machine learning',
      content:
        'Traditional machine learning systems are often designed and trained for specific tasks such as classification, regression, or forecasting. LLMs are general-purpose models capable of supporting many language tasks through prompts and context. This flexibility can reduce the need to build a separate model for every language-oriented task, although specialized models can still be more appropriate for particular requirements.',
    },
    {
      title: 'LLMs in real products',
      content:
        'LLMs can power conversational assistants, coding tools, search experiences, document intelligence, customer support, educational applications, content workflows, data analysis, and AI agents. In production products, the LLM is usually only one component of a larger system that includes application logic, data, APIs, retrieval, authentication, monitoring, and user experience.',
    },
    {
      title: 'LLMs in production',
      content:
        'A production LLM system must consider response quality, hallucination, latency, token consumption, model cost, context management, privacy, security, reliability, evaluation, monitoring, rate limits, and failure handling. Teams also need to select models according to the task rather than assuming that the largest or most capable model is always the best choice.',
    },
    {
      title: 'LLMs and surrounding AI technologies',
      content:
        'LLMs are often combined with other technologies to create useful AI systems. RAG provides external knowledge, embeddings support semantic representation and retrieval, agents add planning and tool use, prompt engineering improves instruction design, evaluation measures quality, and guardrails help control system behavior.',
    },
    {
      title: 'Explore LLMs in EDDUU',
      content:
        'EDDUU connects Large Language Models with the wider AI technology universe, including Generative AI, RAG, embeddings, agents, prompt engineering, evaluation, and guardrails.',
    },
  ],
  relatedTechnologyIds: [
    'ai',
    'genai',
    'rag',
    'embeddings',
    'agents',
    'prompt-engineering',
    'ai-evaluation',
    'ai-guardrails',
    'transformers',
  ],
}

export default llmsKnowledge
