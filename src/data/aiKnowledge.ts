import type { KnowledgeDefinition } from './knowledge'

export const aiKnowledge: KnowledgeDefinition = {
  technologyId: 'ai',
  slug: 'ai',
  title: 'What is Artificial Intelligence (AI)?',
  summary:
    'Artificial Intelligence is the field of building systems that can learn, reason, recognize patterns, understand information, and make decisions to perform tasks that normally require human intelligence.',
  difficulty: 'beginner',
  sections: [
    {
      title: 'What is Artificial Intelligence?',
      content:
        'Artificial Intelligence is the discipline of building computer systems that can perform tasks associated with human intelligence. These tasks include understanding language, recognizing images, making predictions, planning actions, detecting patterns, and supporting decisions. AI is not a single technology. It is a broad field that includes machine learning, deep learning, language models, computer vision, generative AI, and intelligent agent systems.',
    },
    {
      title: 'Why do we need AI?',
      content:
        'Traditional software normally follows rules explicitly written by developers. AI becomes useful when a problem contains patterns, uncertainty, large amounts of information, or decisions that are difficult to describe with fixed rules. For example, a normal program can check whether a number is greater than 100, while an AI system can learn patterns from historical data to predict whether a customer may cancel a subscription.',
    },
    {
      title: 'How do AI systems work?',
      content:
        'An AI system generally receives information, processes that information using a model or decision mechanism, and produces an output such as a prediction, classification, recommendation, generated response, or action. In machine learning systems, the model learns patterns from data during training and uses those learned patterns during inference. Modern AI applications often add data pipelines, retrieval, APIs, tools, monitoring, and human controls around the model.',
    },
    {
      title: 'AI vs Machine Learning vs Deep Learning',
      content:
        'AI is the broad field. Machine Learning is a major approach within AI where systems learn patterns from data instead of relying entirely on manually written rules. Deep Learning is a subset of machine learning that uses multilayer neural networks to learn complex representations. Modern generative AI and many language and vision systems are built using deep learning techniques.',
    },
    {
      title: 'Types of AI systems',
      content:
        'AI systems can be designed for different purposes. Each type solves a different kind of problem, from prediction and classification to recommendation, visual understanding, content generation, and multi-step action.',
      highlights: [
        {
          title: 'Predictive systems',
          description: 'Estimate future or unknown values from patterns in data.',
        },
        {
          title: 'Classification systems',
          description: 'Assign inputs to predefined categories or classes.',
        },
        {
          title: 'Recommendation systems',
          description: 'Select relevant products, content, or actions for a user.',
        },
        {
          title: 'Computer vision systems',
          description: 'Interpret images and visual information to detect or understand patterns.',
        },
        {
          title: 'Generative systems',
          description: 'Create new text, code, images, audio, or other content.',
        },
        {
          title: 'Agentic systems',
          description: 'Combine reasoning, tools, and actions to accomplish multi-step goals.',
        },
      ],
    },
    {
      title: 'AI in real products',
      content:
        'AI becomes valuable when it solves a real business or user problem. Examples include fraud detection in financial systems, recommendation engines in commerce, document intelligence for business operations, customer support assistants, demand forecasting, medical image analysis, search and knowledge assistants, and market intelligence platforms. The product is not simply the model; the surrounding data, workflow, user experience, integrations, and operational controls are equally important.',
    },
    {
      title: 'AI in production',
      content:
        'A production AI system must be treated as an end-to-end software system. Teams need to consider data quality, model quality, latency, infrastructure cost, security, privacy, reliability, evaluation, monitoring, failure handling, and human oversight. A model that performs well in a demonstration may still fail in production if its inputs are unreliable, its outputs are not evaluated, or the surrounding system cannot operate at the required scale.',
    },
    {
      title: 'Important AI concepts',
      content:
        'Important AI concepts include data, features, models, training, inference, predictions, classification, neural networks, embeddings, transformers, language models, generative AI, evaluation, hallucination, guardrails, retrieval, agents, and human-in-the-loop workflows. Understanding how these pieces connect is more important than treating each technology as an isolated tool.',
    },
  ],
  relatedTechnologyIds: [
    'machine-learning',
    'deep-learning',
    'llms',
    'genai',
    'neural-networks',
    'agents',
  ],
}

export default aiKnowledge


