import type { KnowledgeDefinition } from './knowledge'

export const multimodalAiKnowledge: KnowledgeDefinition = {
  technologyId: 'multimodal-ai',
  slug: 'multimodal-ai',
  title: 'What is Multimodal AI?',
  summary:
    'Multimodal AI enables systems to understand, reason across, and generate information from multiple modalities such as text, images, audio, and video.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is Multimodal AI?',
      content:
        'Multimodal AI refers to artificial intelligence systems that can work with more than one type of information, such as text, images, audio, and video. Instead of treating each modality as a completely separate problem, a multimodal system can combine information from different modalities to understand context, answer questions, generate content, or perform actions.',
    },
    {
      title: 'Why do we need Multimodal AI?',
      content:
        'Real-world information rarely exists in only one format. A customer may send a message together with an image, a doctor may work with clinical notes and medical scans, or a business user may ask questions about a video and its transcript. Multimodal AI allows applications to reason over these different forms of information as part of a connected workflow.',
    },
    {
      title: 'What are modalities?',
      content:
        'A modality is a particular type or channel of information. Common modalities include text, images, audio, video, and structured data. Different modalities contain different kinds of signals, so multimodal systems need ways to represent and connect them before they can reason across them.',
      highlights: [
        {
          title: 'Text',
          description:
            'Language-based information such as questions, documents, instructions, and conversations.',
        },
        {
          title: 'Images',
          description:
            'Visual information such as photographs, diagrams, screenshots, scans, and illustrations.',
        },
        {
          title: 'Audio',
          description:
            'Sound information such as speech, conversations, music, and environmental signals.',
        },
        {
          title: 'Video',
          description:
            'Sequences of visual frames combined with temporal information and often audio.',
        },
        {
          title: 'Structured data',
          description:
            'Organized information such as tables, records, measurements, and business data.',
        },
      ],
    },
    {
      title: 'How does Multimodal AI work?',
      content:
        'A multimodal system typically converts information from different modalities into representations that can be processed together. Depending on the architecture, specialized encoders may process images, audio, or other inputs before those representations are connected with a language or reasoning model. The system can then use the combined context to produce an answer, prediction, generated output, or action.',
    },
    {
      title: 'The Multimodal AI pipeline',
      content:
        'A simplified multimodal pipeline is: collect inputs from one or more modalities, preprocess each input, convert the inputs into useful representations, align or combine those representations, reason over the combined context, and produce the required output. Production applications usually add retrieval, APIs, storage, evaluation, security, monitoring, and application-specific business logic around the model.',
      highlights: [
        {
          title: 'Input processing',
          description:
            'Prepares each modality so it can be processed by the appropriate model or encoder.',
        },
        {
          title: 'Representation',
          description:
            'Converts information into a machine-readable form that captures useful features or meaning.',
        },
        {
          title: 'Alignment',
          description:
            'Connects information from different modalities so their relationships can be understood.',
        },
        {
          title: 'Fusion',
          description:
            'Combines multimodal information into a shared or coordinated representation.',
        },
        {
          title: 'Reasoning',
          description:
            'Uses the available multimodal context to answer questions, infer information, or decide what to do.',
        },
        {
          title: 'Output',
          description:
            'Produces a response, prediction, structured result, generated media, or action.',
        },
      ],
    },
    {
      title: 'Important Multimodal AI concepts',
      content:
        'Several concepts help explain how multimodal systems connect different types of information.',
      highlights: [
        {
          title: 'Encoder',
          description:
            'Transforms a particular modality into a representation that a larger system can process.',
        },
        {
          title: 'Embedding',
          description:
            'Represents information as vectors that can capture useful semantic or structural relationships.',
        },
        {
          title: 'Cross-modal understanding',
          description:
            'Allows information from one modality to influence interpretation of another modality.',
        },
        {
          title: 'Fusion',
          description:
            'Combines representations from multiple modalities for shared processing or reasoning.',
        },
        {
          title: 'Vision-language model',
          description:
            'A model capable of connecting visual information with natural language understanding or generation.',
        },
        {
          title: 'Multimodal generation',
          description:
            'Uses multimodal context to produce outputs such as text, images, audio, or other media.',
        },
      ],
    },
    {
      title: 'Multimodal AI vs single-modal AI',
      content:
        'A single-modal system focuses primarily on one type of information, such as text-only language processing or image-only classification. A multimodal system can combine multiple types of information when solving a task. This can provide richer context, but it also increases system complexity because each modality introduces its own processing, quality, latency, and evaluation considerations.',
    },
    {
      title: 'Multimodal AI and Large Language Models',
      content:
        'Modern Large Language Models are increasingly used as part of multimodal systems. Visual, audio, or other inputs can be converted into representations that a capable model can reason about alongside text. This allows applications to move beyond text-only interaction and support experiences such as image question answering, document understanding, voice assistants, and visual analysis.',
    },
    {
      title: 'Multimodal AI and Generative AI',
      content:
        'Multimodal AI and Generative AI often overlap but describe different ideas. Multimodal AI focuses on working across multiple information types, while Generative AI focuses on producing new content. A system can therefore be multimodal without being primarily generative, and a generative system can work with one or multiple modalities.',
    },
    {
      title: 'Multimodal AI in real products',
      content:
        'Multimodal AI can power visual assistants, document intelligence, voice assistants, educational applications, medical analysis, customer support, content creation, accessibility tools, visual search, robotics, and business workflows. The strongest products connect multimodal understanding to a clear user need rather than using multiple modalities simply because they are available.',
    },
    {
      title: 'Multimodal AI in production',
      content:
        'Production multimodal systems must consider input quality, model accuracy, latency, compute cost, storage, privacy, security, modality-specific failures, evaluation, monitoring, and fallback behavior. Different modalities may fail in different ways, so teams need to evaluate both individual components and the complete end-to-end user experience.',
    },
    {
      title: 'Evaluating Multimodal AI',
      content:
        'Evaluation depends heavily on the task and modalities involved. Teams may measure visual recognition quality, language quality, speech accuracy, grounding, factuality, instruction following, and task completion. End-to-end evaluation is especially important because a system can perform well on individual components while still producing poor results when information from multiple modalities must be combined.',
      highlights: [
        {
          title: 'Grounding',
          description:
            'Measures whether the generated response is appropriately connected to the provided visual, audio, or other evidence.',
        },
        {
          title: 'Cross-modal accuracy',
          description:
            'Measures whether relationships between different information types are interpreted correctly.',
        },
        {
          title: 'Speech recognition quality',
          description:
            'Measures how accurately spoken input is converted into usable information.',
        },
        {
          title: 'Task completion',
          description:
            'Measures whether the complete multimodal system successfully accomplishes the intended user task.',
        },
      ],
    },
    {
      title: 'Explore Multimodal AI in EDDUU',
      content:
        'EDDUU connects Multimodal AI with Computer Vision, Large Language Models, Transformers, Embeddings, Generative AI, RAG, AI Agents, and AI Evaluation.',
    },
  ],
  relatedTechnologyIds: [
    'ai',
    'genai',
    'llms',
    'transformers',
    'embeddings',
    'computer-vision',
    'rag',
    'agents',
    'ai-evaluation',
  ],
}

export default multimodalAiKnowledge
