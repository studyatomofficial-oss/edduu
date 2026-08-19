import type { KnowledgeDefinition } from './knowledge'

export const machineLearningKnowledge: KnowledgeDefinition = {
  technologyId: 'machine-learning',
  slug: 'machine-learning',
  title: 'What is Machine Learning (ML)?',
  summary:
    'Machine Learning is an approach to building systems that learn patterns from data and use those patterns to make predictions, classifications, recommendations, or decisions.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Machine Learning?',
      content:
        'Machine Learning is a branch of artificial intelligence in which systems learn patterns from data instead of relying entirely on explicitly programmed rules. A machine learning model learns from examples during training and uses what it learned to make predictions or decisions when it receives new data.',
    },
    {
      title: 'Why do we need Machine Learning?',
      content:
        'Many problems contain patterns that are difficult to describe using fixed rules. For example, detecting fraudulent transactions, predicting customer churn, recommending products, or estimating demand can involve thousands of interacting signals. Machine Learning allows a system to learn useful patterns from historical data and apply them to new situations.',
    },
    {
      title: 'How does Machine Learning work?',
      content:
        'A typical Machine Learning workflow starts with collecting and preparing data. Relevant inputs are selected as features and the desired outcome may be represented as a target. A model is trained using historical examples, evaluated against data it has not seen during training, and then deployed for inference. Production systems also require monitoring because real-world data and model performance can change over time.',
    },
    {
      title: 'The Machine Learning lifecycle',
      content:
        'Machine Learning is not simply the act of training a model. A reliable system usually moves through a lifecycle that includes problem definition, data collection, preparation, feature engineering, training, evaluation, deployment, monitoring, and continuous improvement.',
      highlights: [
        {
          title: 'Data',
          description:
            'The information from which useful patterns are learned.',
        },
        {
          title: 'Features',
          description:
            'Input signals or representations used by a model to make predictions.',
        },
        {
          title: 'Model',
          description:
            'A learned mathematical representation that maps inputs to useful outputs.',
        },
        {
          title: 'Training',
          description:
            'The process of adjusting model parameters using historical examples.',
        },
        {
          title: 'Evaluation',
          description:
            'Measures how well the trained model performs against defined objectives.',
        },
        {
          title: 'Inference',
          description:
            'The process of using a trained model to produce predictions for new data.',
        },
      ],
    },
    {
      title: 'Supervised vs unsupervised learning',
      content:
        'Supervised learning uses examples where the desired outcome is known, such as historical transactions labeled as fraudulent or legitimate. Unsupervised learning works with data without predefined target labels and attempts to discover useful structure, such as groups or patterns. Other approaches, including semi-supervised and reinforcement learning, address different types of learning problems.',
    },
    {
      title: 'Important Machine Learning concepts',
      content:
        'Understanding a few core concepts makes it easier to reason about model quality and production behavior.',
      highlights: [
        {
          title: 'Training data',
          description:
            'Examples used by the learning algorithm to identify patterns.',
        },
        {
          title: 'Validation data',
          description:
            'Data used during development to compare approaches and tune model choices.',
        },
        {
          title: 'Test data',
          description:
            'Previously unseen data used to estimate how the final model performs.',
        },
        {
          title: 'Overfitting',
          description:
            'When a model learns training examples too closely and performs poorly on new data.',
        },
        {
          title: 'Underfitting',
          description:
            'When a model is too simple to capture important patterns in the data.',
        },
        {
          title: 'Generalization',
          description:
            'The ability of a trained model to perform well on previously unseen examples.',
        },
      ],
    },
    {
      title: 'Machine Learning vs traditional programming',
      content:
        'In traditional programming, developers define rules and provide inputs to produce outputs. In Machine Learning, developers provide data and a learning method, and the system learns a model that can produce outputs for new inputs. This does not remove the need for engineering; data preparation, model selection, evaluation, deployment, and monitoring remain important parts of the system.',
    },
    {
      title: 'Machine Learning in real products',
      content:
        'Machine Learning can power fraud detection, recommendation engines, demand forecasting, search ranking, anomaly detection, customer churn prediction, document classification, personalization, and many other business applications. The best production systems connect model predictions to a clear business workflow rather than treating model accuracy as the only measure of success.',
    },
    {
      title: 'Machine Learning in production',
      content:
        'A production Machine Learning system must consider data quality, model accuracy, latency, infrastructure cost, security, privacy, reliability, monitoring, model drift, data drift, retraining strategy, versioning, reproducibility, and rollback. A model that performs well during development can still degrade when real-world data changes.',
    },
    {
      title: 'Machine Learning and modern AI',
      content:
        'Machine Learning is the broader learning approach behind many modern AI systems. Deep Learning uses neural networks for more complex representation learning, while Generative AI uses learned models to create new content. LLMs, computer vision systems, recommendation engines, and many other AI applications are built using Machine Learning techniques.',
    },
    {
      title: 'Explore Machine Learning in EDDUU',
      content:
        'EDDUU connects Machine Learning with related technologies including Deep Learning, Neural Networks, Transformers, Generative AI, AI Evaluation, Python, PyTorch, and data platforms.',
    },
  ],
  relatedTechnologyIds: [
    'ai',
    'deep-learning',
    'neural-networks',
    'genai',
    'ai-evaluation',
    'python',
    'pytorch',
    'data',
    'postgresql',
  ],
}

export default machineLearningKnowledge
