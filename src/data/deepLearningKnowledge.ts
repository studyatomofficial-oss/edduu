import type { KnowledgeDefinition } from './knowledge'

export const deepLearningKnowledge: KnowledgeDefinition = {
  technologyId: 'deep-learning',
  slug: 'deep-learning',
  title: 'What is Deep Learning?',
  summary:
    'Deep Learning is a branch of Machine Learning that uses multilayer neural networks to learn increasingly complex representations from data.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is Deep Learning?',
      content:
        'Deep Learning is a Machine Learning approach that uses neural networks with multiple layers to learn patterns and representations from data. Instead of requiring engineers to manually define every useful feature, deep learning models can learn increasingly complex representations directly from large amounts of training data.',
    },
    {
      title: 'Why do we need Deep Learning?',
      content:
        'Many real-world problems involve complex patterns that are difficult to represent using manually designed rules or simple models. Deep Learning became particularly powerful for tasks involving images, language, audio, video, and other high-dimensional data because neural networks can learn useful representations directly from examples.',
    },
    {
      title: 'How does Deep Learning work?',
      content:
        'A deep learning model receives input data and passes it through multiple computational layers. Earlier layers can learn simpler patterns while later layers combine those representations into increasingly complex features. During training, the model compares its output with the desired result and adjusts its parameters to reduce the error. This process is repeated across many examples until the model learns useful patterns.',
    },
    {
      title: 'The Deep Learning pipeline',
      content:
        'A typical deep learning workflow includes collecting and preparing data, selecting a neural network architecture, training the model, evaluating its performance, and deploying it for inference. Large-scale systems may also require distributed training, specialized hardware, model optimization, monitoring, and continuous evaluation.',
      highlights: [
        {
          title: 'Data',
          description:
            'Examples used by the model to learn useful patterns and representations.',
        },
        {
          title: 'Neural network',
          description:
            'A layered computational model containing parameters that are learned during training.',
        },
        {
          title: 'Forward pass',
          description:
            'The process of passing input through the network to produce an output.',
        },
        {
          title: 'Loss',
          description:
            'A measurement of how different the model output is from the desired result.',
        },
        {
          title: 'Backpropagation',
          description:
            'A method for calculating how model parameters contributed to the observed error.',
        },
        {
          title: 'Optimization',
          description:
            'The process of updating model parameters to reduce the training loss.',
        },
      ],
    },
    {
      title: 'Important Deep Learning concepts',
      content:
        'Understanding the core building blocks of deep learning helps explain how modern neural network systems are trained and deployed.',
      highlights: [
        {
          title: 'Layers',
          description:
            'Computational stages that transform representations as information moves through the network.',
        },
        {
          title: 'Weights',
          description:
            'Learned numerical parameters that determine how strongly inputs influence computations.',
        },
        {
          title: 'Activation functions',
          description:
            'Functions that introduce nonlinear behavior so networks can learn complex relationships.',
        },
        {
          title: 'Learning rate',
          description:
            'A training setting that controls how strongly model parameters are updated during optimization.',
        },
        {
          title: 'Epoch',
          description:
            'One complete pass through the training dataset.',
        },
        {
          title: 'Batch',
          description:
            'A subset of training examples processed together during an optimization step.',
        },
      ],
    },
    {
      title: 'Deep Learning vs traditional Machine Learning',
      content:
        'Traditional Machine Learning often depends more heavily on manually engineered features, while Deep Learning can learn useful representations automatically through multiple neural network layers. Deep Learning can achieve strong results on complex data, but it commonly requires more training data, compute, and engineering effort.',
    },
    {
      title: 'Types of Deep Learning models',
      content:
        'Different neural network architectures are suited to different types of problems. Convolutional Neural Networks have historically been important for visual tasks. Recurrent architectures were widely used for sequential data. Transformers became highly influential for language and multimodal systems. Autoencoders and generative architectures are used for representation learning and content generation.',
    },
    {
      title: 'Deep Learning in real products',
      content:
        'Deep Learning powers many practical systems including image recognition, speech processing, recommendation, document understanding, language models, generative AI, anomaly detection, and autonomous systems. In a production product, the neural network is only one component of a larger pipeline involving data, APIs, infrastructure, monitoring, and user workflows.',
    },
    {
      title: 'Deep Learning in production',
      content:
        'Production deep learning systems must consider training cost, inference latency, GPU or accelerator requirements, model size, memory consumption, reliability, data quality, model drift, security, monitoring, versioning, reproducibility, and deployment strategy. Model optimization techniques can be used when the original model is too expensive or slow for the target environment.',
    },
    {
      title: 'Deep Learning and modern AI',
      content:
        'Deep Learning is a foundation for many modern AI technologies. Neural networks provide the core architecture, Transformers power many language and multimodal models, and frameworks such as PyTorch provide tools for training and deploying these systems. Generative AI, computer vision, speech systems, and many other AI applications rely heavily on deep learning.',
    },
    {
      title: 'Explore Deep Learning in EDDUU',
      content:
        'EDDUU connects Deep Learning with Machine Learning, Neural Networks, Transformers, PyTorch, Computer Vision, Multimodal AI, Generative AI, and Large Language Models.',
    },
  ],
  relatedTechnologyIds: [
    'ai',
    'machine-learning',
    'neural-networks',
    'transformers',
    'pytorch',
    'computer-vision',
    'multimodal-ai',
    'genai',
    'llms',
  ],
}

export default deepLearningKnowledge
