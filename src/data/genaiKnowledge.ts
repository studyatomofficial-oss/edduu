import type { KnowledgeDefinition } from './knowledge'

export const genaiKnowledge: KnowledgeDefinition = {
  technologyId: 'genai',
  slug: 'genai',
  title: 'What is Generative AI?',
  summary:
    'Generative AI refers to AI systems that learn patterns from existing data and use those patterns to generate new content such as text, code, images, audio, video, and other forms of media.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Generative AI?',
      content:
        'Generative AI is a branch of artificial intelligence focused on creating new content. Instead of only predicting a label or classifying existing information, a generative system produces an output such as text, code, images, audio, or video based on an instruction, context, or other input.',
    },
    {
      title: 'Why do we need Generative AI?',
      content:
        'Traditional software normally produces outputs according to explicitly defined rules. Generative AI is useful when the desired output is difficult to describe with fixed rules, such as writing natural language, summarizing information, generating code, creating images, or interacting conversationally with users.',
    },
    {
      title: 'How does Generative AI work?',
      content:
        'A generative AI system learns statistical patterns from large amounts of training data. During inference, the system receives an input such as a prompt or another form of context and uses the learned patterns to generate a new output. Modern applications usually place additional software around the model, including APIs, retrieval systems, tools, databases, evaluation, and safety controls.',
    },
    {
      title: 'Generative AI vs traditional AI',
      content:
        'Traditional AI applications often focus on prediction, classification, detection, recommendation, or decision support. Generative AI focuses on producing new content. The distinction is not absolute because modern products can combine predictive and generative capabilities in the same system.',
    },
    {
      title: 'What can Generative AI create?',
      content:
        'Generative AI can produce many forms of content depending on the model and application. Text models can generate answers, summaries, and code. Image models can create or transform visual content. Audio systems can generate speech or music. Video models can generate or transform video. Multimodal systems can work across several of these forms.',
    },
    {
      title: 'Important Generative AI concepts',
      content:
        'Generative AI applications depend on several concepts that work together. Understanding these concepts helps explain how a model receives information, processes context, and produces an output.',
      highlights: [
        {
          title: 'Tokens',
          description:
            'Small units of text or other information that models process as part of their input and output.',
        },
        {
          title: 'Prompts',
          description:
            'Instructions and context provided to guide the model toward the desired output.',
        },
        {
          title: 'Embeddings',
          description:
            'Vector representations that capture useful semantic relationships between pieces of information.',
        },
        {
          title: 'Context',
          description:
            'Information supplied to the model that helps it understand the current task and generate a relevant response.',
        },
        {
          title: 'Inference',
          description:
            'The process of using a trained model to produce an output for a new input.',
        },
        {
          title: 'Generation',
          description:
            'The process through which the model produces new content based on its learned patterns and available context.',
        },
      ],
    },
    {
      title: 'Generative AI in real products',
      content:
        'Generative AI can be integrated into products such as AI assistants, coding tools, document intelligence systems, customer support applications, content creation platforms, search experiences, educational systems, and business intelligence workflows. The value comes from combining the model with a useful product workflow rather than exposing the model by itself.',
    },
    {
      title: 'Generative AI in production',
      content:
        'A production Generative AI system must consider output quality, evaluation, latency, token usage, model cost, security, privacy, reliability, prompt and context management, hallucination, access control, monitoring, and failure handling. Teams also need to decide when to use a model directly and when to add retrieval, tools, guardrails, or human review.',
    },
    {
      title: 'Explore Generative AI in EDDUU',
      content:
        'EDDUU connects Generative AI knowledge with the wider AI technology universe, including Large Language Models, RAG, embeddings, AI agents, prompt engineering, evaluation, and guardrails.',
    },
  ],
  relatedTechnologyIds: [
    'ai',
    'llms',
    'rag',
    'embeddings',
    'prompt-engineering',
    'agents',
    'ai-evaluation',
    'ai-guardrails',
  ],
}

export default genaiKnowledge
