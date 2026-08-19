import type { KnowledgeDefinition } from './knowledge'

export const transformersKnowledge: KnowledgeDefinition = {
  technologyId: 'transformers',
  slug: 'transformers',
  title: 'What are Transformers?',
  summary:
    'Transformers are neural network architectures built around attention mechanisms that allow models to efficiently learn relationships between elements in a sequence or context.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What are Transformers?',
      content:
        'Transformers are a class of neural network architecture introduced for sequence processing and now widely used across language, vision, audio, and multimodal AI. Their key idea is attention, which allows the model to determine how different parts of the available input relate to one another. Transformers became the foundation of many modern Large Language Models and Generative AI systems.',
    },
    {
      title: 'Why do we need Transformers?',
      content:
        'Earlier sequence models often processed information step by step, which could make training difficult to parallelize and make it harder to model relationships across long sequences. Transformers use attention to examine relationships between elements more directly and can process many positions in parallel during training. This made large-scale training much more practical and enabled highly capable general-purpose models.',
    },
    {
      title: 'How do Transformers work?',
      content:
        'A Transformer converts input information into representations and processes those representations through layers containing attention and neural network transformations. Attention determines which parts of the available context are relevant to one another. The transformed representations are then passed through additional layers, allowing the model to build increasingly useful contextual representations.',
    },
    {
      title: 'The Transformer pipeline',
      content:
        'A simplified Transformer flow is: input is converted into tokens or other representations, positional information is incorporated, attention is calculated between elements, the resulting representations pass through feed-forward transformations, and multiple layers progressively refine the representation. In language generation, the final representations are used to predict the next token.',
      highlights: [
        {
          title: 'Input representation',
          description:
            'Converts raw information such as text into a representation the network can process.',
        },
        {
          title: 'Positional information',
          description:
            'Provides information about the order or position of elements in the input.',
        },
        {
          title: 'Attention',
          description:
            'Determines how strongly different elements should influence one another.',
        },
        {
          title: 'Feed-forward network',
          description:
            'Transforms each position representation using learned nonlinear computations.',
        },
        {
          title: 'Transformer layers',
          description:
            'Stack multiple attention and transformation stages to build richer representations.',
        },
        {
          title: 'Output prediction',
          description:
            'Produces task-specific outputs such as token probabilities, classifications, or representations.',
        },
      ],
    },
    {
      title: 'Important Transformer concepts',
      content:
        'Several concepts are essential for understanding how Transformer-based systems process context and scale to modern AI workloads.',
      highlights: [
        {
          title: 'Self-attention',
          description:
            'Allows elements in the same input sequence to attend to one another.',
        },
        {
          title: 'Query, Key, Value',
          description:
            'Three learned projections used to determine which information should influence each attention calculation.',
        },
        {
          title: 'Multi-head attention',
          description:
            'Runs multiple attention mechanisms so the model can capture different relationships at the same time.',
        },
        {
          title: 'Positional encoding',
          description:
            'Adds information that helps the model represent the order of elements in a sequence.',
        },
        {
          title: 'Context',
          description:
            'The information available to the model when producing a representation or prediction.',
        },
        {
          title: 'Attention mask',
          description:
            'Controls which positions are allowed to interact during an attention operation.',
        },
      ],
    },
    {
      title: 'Encoder vs decoder Transformers',
      content:
        'Transformer architectures can be organized around different patterns depending on the task. Encoder-focused architectures are commonly used for understanding and representation tasks. Decoder-focused architectures are commonly used for autoregressive generation. Encoder-decoder architectures combine both patterns and are useful for tasks such as sequence transformation and text-to-text generation.',
      highlights: [
        {
          title: 'Encoder',
          description:
            'Builds contextual representations of the input for understanding-oriented tasks.',
        },
        {
          title: 'Decoder',
          description:
            'Generates outputs autoregressively, typically predicting one token or element at a time.',
        },
        {
          title: 'Encoder-decoder',
          description:
            'Uses an encoder to understand input and a decoder to generate a transformed output.',
        },
      ],
    },
    {
      title: 'Transformers vs traditional sequence models',
      content:
        'Traditional recurrent sequence models process information sequentially and maintain a recurrent state. Transformers rely primarily on attention rather than recurrence, allowing much greater parallelism during training. Attention also provides a direct mechanism for modeling relationships between distant elements, although the computational cost of attention and context length remains an important engineering consideration.',
    },
    {
      title: 'Transformers in Large Language Models',
      content:
        'Large Language Models use Transformer-based architectures to process token sequences and predict language. During pretraining, the model learns statistical relationships from very large datasets. During inference, the model uses the available context to generate output tokens. Additional techniques such as instruction tuning, preference optimization, retrieval, tools, and guardrails can turn the underlying model into a useful production application.',
    },
    {
      title: 'Transformers beyond language',
      content:
        'Transformer architectures are no longer limited to text. Variants can process images, audio, video, and combinations of multiple modalities. This flexibility comes from representing different types of information in forms that can be processed by attention-based architectures.',
    },
    {
      title: 'Transformers in real products',
      content:
        'Transformer-based systems power conversational assistants, search and retrieval, coding tools, document intelligence, translation, summarization, recommendation, image understanding, speech applications, and multimodal experiences. In production, the Transformer model is normally surrounded by APIs, data systems, retrieval, security, evaluation, monitoring, and application logic.',
    },
    {
      title: 'Transformers in production',
      content:
        'Production Transformer systems must consider model size, context length, inference latency, memory consumption, throughput, accelerator requirements, token cost, batching, caching, quantization, reliability, evaluation, security, and monitoring. The most capable model is not automatically the best production choice; teams need to balance quality, latency, cost, and operational requirements.',
    },
    {
      title: 'Explore Transformers in EDDUU',
      content:
        'EDDUU connects Transformers with Neural Networks, Deep Learning, Large Language Models, Generative AI, Embeddings, Multimodal AI, PyTorch, and AI Agents.',
    },
  ],
  relatedTechnologyIds: [
    'ai',
    'machine-learning',
    'deep-learning',
    'neural-networks',
    'llms',
    'genai',
    'embeddings',
    'multimodal-ai',
    'pytorch',
    'agents',
  ],
}

export default transformersKnowledge
