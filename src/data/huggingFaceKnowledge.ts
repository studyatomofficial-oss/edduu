import type { KnowledgeDefinition } from './knowledge'

export const huggingFaceKnowledge: KnowledgeDefinition = {
  technologyId: 'hugging-face',
  slug: 'hugging-face',
  title: 'What is Hugging Face?',
  summary:
    'Hugging Face is an AI and machine learning ecosystem that provides models, datasets, libraries, and tools for building, training, evaluating, sharing, and deploying modern machine learning systems.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Hugging Face?',
      content:
        'Hugging Face is an ecosystem for machine learning developers and researchers. It provides access to models, datasets, libraries, demos, and development tools that help teams build and experiment with modern AI systems. It is particularly well known for its open model ecosystem and the Transformers library used across natural language processing, computer vision, audio, and multimodal AI.',
    },
    {
      title: 'Why do we need Hugging Face?',
      content:
        'Building modern AI systems from scratch can require large amounts of model code, training infrastructure, datasets, and supporting tooling. Hugging Face provides reusable components and a shared ecosystem so teams can discover existing models and datasets, experiment with them, adapt them to their requirements, and share their own work.',
    },
    {
      title: 'How does Hugging Face work?',
      content:
        'Hugging Face provides several connected parts of the machine learning workflow. Developers can discover a model or dataset from the Hub, load it using supported libraries, experiment locally or in hosted environments, fine-tune or adapt the model when appropriate, evaluate the result, and deploy it through a suitable serving approach. The ecosystem connects these activities rather than representing only a single library.',
    },
    {
      title: 'The Hugging Face ecosystem',
      content:
        'The Hugging Face ecosystem contains multiple components that address different stages of AI development.',
      highlights: [
        {
          title: 'Hugging Face Hub',
          description:
            'A platform for discovering, storing, sharing, and collaborating around models, datasets, and other machine learning artifacts.',
        },
        {
          title: 'Transformers',
          description:
            'A library providing implementations and utilities for many transformer-based models across language, vision, audio, and multimodal tasks.',
        },
        {
          title: 'Datasets',
          description:
            'A library and ecosystem for loading, processing, and sharing machine learning datasets.',
        },
        {
          title: 'Tokenizers',
          description:
            'Tools for efficiently converting text into the token representations expected by many language models.',
        },
        {
          title: 'Diffusers',
          description:
            'A library focused on diffusion models and applications such as image, video, and audio generation.',
        },
        {
          title: 'Spaces',
          description:
            'A way to build and share interactive machine learning demonstrations and applications.',
        },
      ],
    },
    {
      title: 'Important Hugging Face concepts',
      content:
        'Understanding the main Hugging Face concepts makes it easier to navigate the ecosystem and select the right tool for a particular AI workflow.',
      highlights: [
        {
          title: 'Model',
          description:
            'A trained machine learning artifact that can be loaded and used for a particular task or capability.',
        },
        {
          title: 'Dataset',
          description:
            'A collection of data used for training, validation, evaluation, or experimentation.',
        },
        {
          title: 'Model card',
          description:
            'Documentation describing a model, including its intended use, limitations, training information, and evaluation details.',
        },
        {
          title: 'Dataset card',
          description:
            'Documentation describing a dataset, its contents, intended use, limitations, and relevant metadata.',
        },
        {
          title: 'Pipeline',
          description:
            'A higher-level interface that simplifies common inference tasks by combining model and preprocessing components.',
        },
        {
          title: 'Checkpoint',
          description:
            'A saved model state or training artifact that can be loaded for evaluation, continued training, or deployment.',
        },
      ],
    },
    {
      title: 'Hugging Face and Transformers',
      content:
        'Transformers is one of the most important libraries in the Hugging Face ecosystem. It provides standardized interfaces for working with many pretrained transformer models. Applications can use these models for tasks such as text generation, classification, summarization, question answering, translation, image understanding, speech processing, and multimodal workloads.',
    },
    {
      title: 'Hugging Face and LLMs',
      content:
        'Hugging Face provides an extensive ecosystem around large language models. Developers can discover pretrained models, inspect their documentation and licenses, download model artifacts when permitted, run inference, fine-tune models, evaluate them, and integrate them into applications. The appropriate model should be selected based on capability, license, size, hardware requirements, latency, and the intended use case.',
    },
    {
      title: 'Hugging Face and Fine-Tuning',
      content:
        'Hugging Face tools can support the workflow required to adapt pretrained models to specialized tasks. Teams can prepare datasets, tokenize examples, configure training, run experiments, save checkpoints, evaluate results, and publish model artifacts. Fine-tuning should still be treated as an engineering process requiring a clear objective, high-quality data, evaluation, and version management.',
    },
    {
      title: 'Hugging Face and datasets',
      content:
        'Datasets are a fundamental part of machine learning development. Hugging Face provides tools for accessing and processing datasets in a standardized way. Teams can use datasets for experimentation, training, validation, and evaluation while maintaining appropriate documentation, licensing, privacy, and data-quality controls.',
      highlights: [
        {
          title: 'Training data',
          description:
            'Examples used to teach or adapt the model during training.',
        },
        {
          title: 'Validation data',
          description:
            'Data used during development to help compare configurations and detect training problems.',
        },
        {
          title: 'Evaluation data',
          description:
            'Independent examples used to measure how well the resulting system performs.',
        },
        {
          title: 'Data preprocessing',
          description:
            'Transforms raw data into a representation suitable for model training or evaluation.',
        },
      ],
    },
    {
      title: 'Hugging Face and model deployment',
      content:
        'A model discovered or trained through Hugging Face can be deployed in different ways depending on the application. It may run locally, on dedicated infrastructure, through a model-serving system, or through a managed inference service. Deployment decisions should consider model size, hardware requirements, traffic, latency, cost, security, and operational requirements.',
    },
    {
      title: 'Open models and model selection',
      content:
        'Hugging Face makes it easier to discover models from different organizations and communities, but availability does not automatically mean that a model is appropriate for production. Teams should review model documentation, license terms, training information, benchmark results, known limitations, safety considerations, hardware requirements, and whether the model is suitable for the intended application.',
      highlights: [
        {
          title: 'Model capability',
          description:
            'Determines what tasks and behaviors the model can reasonably support.',
        },
        {
          title: 'Model size',
          description:
            'Affects memory requirements, inference cost, latency, and hardware selection.',
        },
        {
          title: 'License',
          description:
            'Defines how the model or associated artifacts may legally be used, modified, and distributed.',
        },
        {
          title: 'Model limitations',
          description:
            'Documents known weaknesses, risks, and situations where the model may perform poorly.',
        },
      ],
    },
    {
      title: 'Hugging Face in real products',
      content:
        'Hugging Face technologies can support search systems, document intelligence, chat applications, recommendation systems, classification, summarization, computer vision, speech applications, content generation, and specialized enterprise AI systems. In production, the ecosystem is usually combined with application APIs, databases, cloud infrastructure, observability, evaluation, security, and product-specific business logic.',
    },
    {
      title: 'Hugging Face in production',
      content:
        'Production use requires more than downloading a model. Teams need to consider model versioning, licensing, reproducibility, dependency management, hardware utilization, inference latency, throughput, security, monitoring, evaluation, data governance, and rollback. Model updates should be tested before replacing a known-good production version.',
      highlights: [
        {
          title: 'Versioning',
          description:
            'Tracks the exact model, dataset, code, and configuration used by an AI system.',
        },
        {
          title: 'Reproducibility',
          description:
            'Makes it possible to recreate experiments and deployments using known artifacts and configurations.',
        },
        {
          title: 'Inference optimization',
          description:
            'Improves latency, throughput, or resource consumption when serving a model.',
        },
        {
          title: 'Artifact governance',
          description:
            'Controls which models, datasets, and versions are approved for use in the organization.',
        },
      ],
    },
    {
      title: 'Common Hugging Face mistakes',
      content:
        'Common mistakes include selecting models based only on benchmark scores, ignoring licenses, downloading models without checking their documentation, assuming a large model is always better, using training data without proper governance, and deploying a model without evaluating it against the actual product workload.',
      highlights: [
        {
          title: 'Benchmark-only selection',
          description:
            'Chooses a model from general benchmarks without testing the actual business task.',
        },
        {
          title: 'Ignoring licensing',
          description:
            'Uses a model without understanding its usage, modification, or distribution requirements.',
        },
        {
          title: 'No application evaluation',
          description:
            'Deploys a model without measuring its behavior on representative production scenarios.',
        },
        {
          title: 'Ignoring hardware requirements',
          description:
            'Selects a model without considering memory, accelerator, latency, and infrastructure constraints.',
        },
        {
          title: 'Untracked artifacts',
          description:
            'Fails to record the exact model, dataset, and configuration used to create a deployment.',
        },
      ],
    },
    {
      title: 'Explore Hugging Face in EDDUU',
      content:
        'EDDUU connects Hugging Face with Machine Learning, Deep Learning, Transformers, LLMs, Fine-Tuning, PyTorch, Embeddings, Computer Vision, and Generative AI.',
    },
  ],
  relatedTechnologyIds: [
    'ai',
    'machine-learning',
    'deep-learning',
    'neural-networks',
    'transformers',
    'llms',
    'fine-tuning',
    'pytorch',
    'embeddings',
    'computer-vision',
    'genai',
  ],
}

export default huggingFaceKnowledge
