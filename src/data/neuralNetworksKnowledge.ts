import type { KnowledgeDefinition } from './knowledge'

export const neuralNetworksKnowledge: KnowledgeDefinition = {
  technologyId: 'neural-networks',
  slug: 'neural-networks',
  title: 'What are Neural Networks?',
  summary:
    'Neural Networks are computational models made of interconnected layers that learn patterns and representations from data by adjusting learned parameters during training.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What are Neural Networks?',
      content:
        'A Neural Network is a Machine Learning model made from interconnected computational units organized into layers. The network receives input data, transforms it through those layers, and produces an output such as a prediction, classification, or generated representation. During training, the network adjusts its learned parameters so that its outputs become more useful for the target task.',
    },
    {
      title: 'Why do we need Neural Networks?',
      content:
        'Many real-world relationships are too complex to describe with simple rules or manually designed formulas. Neural Networks can learn nonlinear relationships and useful representations from examples, making them valuable for tasks involving language, images, audio, recommendations, forecasting, and other complex data.',
    },
    {
      title: 'How do Neural Networks work?',
      content:
        'Input data enters the network and moves through a sequence of layers. Each layer performs mathematical transformations using learned weights and biases, often followed by an activation function. The final layer produces the model output. During training, the output is compared with the desired result using a loss function, and optimization methods adjust the network parameters to reduce the error.',
    },
    {
      title: 'The Neural Network learning process',
      content:
        'Training a neural network involves repeatedly presenting examples to the model, calculating an output, measuring the error, calculating how the error relates to model parameters, and updating those parameters. Repeating this process across many examples allows the network to learn representations that can generalize to new inputs.',
      highlights: [
        {
          title: 'Input',
          description:
            'The data supplied to the network, such as text, images, numbers, or audio representations.',
        },
        {
          title: 'Forward pass',
          description:
            'The process of transforming input through the network to produce an output.',
        },
        {
          title: 'Loss',
          description:
            'A measurement of how far the model output is from the desired result.',
        },
        {
          title: 'Backpropagation',
          description:
            'Calculates how model parameters contributed to the observed error.',
        },
        {
          title: 'Gradient',
          description:
            'Indicates how changing a parameter would affect the loss.',
        },
        {
          title: 'Weight update',
          description:
            'Adjusts learned parameters so the model can improve on future examples.',
        },
      ],
    },
    {
      title: 'Important Neural Network concepts',
      content:
        'Neural Networks contain several building blocks that determine how information is represented and transformed.',
      highlights: [
        {
          title: 'Neuron',
          description:
            'A computational unit that combines inputs using learned weights and applies an activation function.',
        },
        {
          title: 'Layer',
          description:
            'A group of computational units that transforms a representation before passing it to another layer.',
        },
        {
          title: 'Weight',
          description:
            'A learned parameter that controls the influence of one input on a computation.',
        },
        {
          title: 'Bias',
          description:
            'A learned parameter that shifts a neuron or layer output independently of its inputs.',
        },
        {
          title: 'Activation function',
          description:
            'Introduces nonlinear behavior so the network can learn more complex relationships.',
        },
        {
          title: 'Architecture',
          description:
            'The arrangement and connectivity of layers that defines how information moves through the network.',
        },
      ],
    },
    {
      title: 'Types of Neural Networks',
      content:
        'Different architectures are designed for different patterns and workloads. Feedforward networks process information through directed layers. Convolutional Neural Networks are commonly associated with spatial and visual data. Recurrent architectures were designed for sequential information. Transformer architectures use attention mechanisms and have become central to modern language and multimodal systems.',
      highlights: [
        {
          title: 'Feedforward networks',
          description:
            'Process information from input toward output without recurrent connections.',
        },
        {
          title: 'Convolutional Neural Networks',
          description:
            'Use convolution operations to learn useful spatial patterns, especially in visual data.',
        },
        {
          title: 'Recurrent Neural Networks',
          description:
            'Process sequences while maintaining information across previous steps.',
        },
        {
          title: 'Transformers',
          description:
            'Use attention mechanisms to model relationships between elements in a sequence or context.',
        },
      ],
    },
    {
      title: 'Neural Networks vs traditional Machine Learning',
      content:
        'Traditional Machine Learning models can rely heavily on manually engineered features, while Neural Networks can learn increasingly useful representations through multiple layers. Neural Networks are particularly powerful for complex unstructured data, but they can require more training data, compute, tuning, and operational infrastructure.',
    },
    {
      title: 'Neural Networks in real products',
      content:
        'Neural Networks are used in image recognition, speech systems, recommendation engines, fraud detection, natural language processing, search, document intelligence, generative AI, and many other products. Their practical value depends not only on model quality but also on data pipelines, infrastructure, application integration, evaluation, and monitoring.',
    },
    {
      title: 'Neural Networks in production',
      content:
        'Production neural network systems must consider inference latency, memory consumption, accelerator requirements, model size, reliability, security, data quality, monitoring, model versioning, evaluation, and deployment strategy. Optimization techniques such as quantization, pruning, batching, and distillation can help reduce operational cost or improve latency when appropriate.',
    },
    {
      title: 'Neural Networks and modern AI',
      content:
        'Neural Networks are a foundational technology behind Deep Learning and many modern AI systems. Transformers power many Large Language Models, convolution-based architectures remain important in computer vision, and neural network components are used across multimodal, generative, recommendation, and predictive systems.',
    },
    {
      title: 'Explore Neural Networks in EDDUU',
      content:
        'EDDUU connects Neural Networks with Machine Learning, Deep Learning, Transformers, PyTorch, Computer Vision, Multimodal AI, Generative AI, and Large Language Models.',
    },
  ],
  relatedTechnologyIds: [
    'ai',
    'machine-learning',
    'deep-learning',
    'transformers',
    'pytorch',
    'computer-vision',
    'multimodal-ai',
    'genai',
    'llms',
  ],
}

export default neuralNetworksKnowledge
