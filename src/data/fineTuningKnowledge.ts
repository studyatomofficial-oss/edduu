import type { KnowledgeDefinition } from './knowledge'

export const fineTuningKnowledge: KnowledgeDefinition = {
  technologyId: 'fine-tuning',
  slug: 'fine-tuning',
  title: 'What is Fine-Tuning?',
  summary:
    'Fine-Tuning is the process of adapting a pretrained AI model by training it further on a focused dataset so that it performs better for a particular task, domain, behavior, or output pattern.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is Fine-Tuning?',
      content:
        'Fine-Tuning is a machine learning technique in which an already pretrained model is trained further using a smaller, task-specific dataset. Instead of building a model from scratch, teams start with a model that already contains broad learned representations and adapt it for a more specific requirement.',
    },
    {
      title: 'Why do we need Fine-Tuning?',
      content:
        'A pretrained model may already understand general language, patterns, or other information but may not consistently follow the exact behavior required by a product. Fine-Tuning can help adapt a model to a specialized task, output style, domain vocabulary, classification behavior, or instruction-following pattern when prompting and application-level techniques are not sufficient.',
    },
    {
      title: 'How does Fine-Tuning work?',
      content:
        'A pretrained model is supplied with a curated training dataset representing the desired behavior. During additional training, selected model parameters are adjusted so that the model becomes better aligned with the examples. The resulting model can then be evaluated against representative tasks and deployed if it provides a meaningful improvement over the original model.',
    },
    {
      title: 'The Fine-Tuning pipeline',
      content:
        'A reliable fine-tuning workflow starts by defining the target behavior, collecting representative examples, preparing and validating the dataset, selecting a suitable base model, configuring training, running experiments, evaluating the resulting model, and deploying the best version. Production teams should compare the fine-tuned model against the original model rather than assuming that additional training automatically improves quality.',
      highlights: [
        {
          title: 'Base model',
          description:
            'The pretrained model that provides the starting capabilities for adaptation.',
        },
        {
          title: 'Training dataset',
          description:
            'Curated examples that represent the behavior or task the model should learn.',
        },
        {
          title: 'Training',
          description:
            'The optimization process that adjusts model parameters using the selected examples.',
        },
        {
          title: 'Evaluation',
          description:
            'Measures whether the adapted model actually improves the target task.',
        },
        {
          title: 'Model version',
          description:
            'A specific trained model artifact that can be compared, deployed, monitored, and rolled back.',
        },
        {
          title: 'Deployment',
          description:
            'Makes the selected model available to the application for inference.',
        },
      ],
    },
    {
      title: 'Important Fine-Tuning concepts',
      content:
        'Fine-Tuning involves several concepts that affect training cost, model quality, and the reliability of the resulting system.',
      highlights: [
        {
          title: 'Pretraining',
          description:
            'The large-scale training stage that gives a base model broad learned capabilities.',
        },
        {
          title: 'Instruction tuning',
          description:
            'Adapts a model using examples that demonstrate how instructions should be followed.',
        },
        {
          title: 'Dataset quality',
          description:
            'The accuracy, consistency, diversity, and relevance of training examples strongly affect the result.',
        },
        {
          title: 'Learning rate',
          description:
            'Controls how strongly model parameters are updated during additional training.',
        },
        {
          title: 'Overfitting',
          description:
            'Occurs when the model adapts too closely to training examples and loses generalization.',
        },
        {
          title: 'Validation set',
          description:
            'A separate set of examples used to evaluate model behavior during development.',
        },
      ],
    },
    {
      title: 'Fine-Tuning vs prompting',
      content:
        'Prompting changes the instructions and context provided to a model without changing its learned parameters. Fine-Tuning changes the model through additional training. Prompting is often faster and easier to iterate, while fine-tuning can be useful when a desired behavior needs to become more consistent across many requests. The right choice depends on the task, data, model capabilities, and operational requirements.',
    },
    {
      title: 'Fine-Tuning vs RAG',
      content:
        'Fine-Tuning and RAG solve different problems. RAG provides external information to the model at inference time and is useful when knowledge changes or must come from an external source. Fine-Tuning changes model behavior using additional training. A system may use both when it needs specialized behavior together with access to current or private information.',
    },
    {
      title: 'Fine-Tuning approaches',
      content:
        'Fine-Tuning does not always require updating every parameter of a large model. Full fine-tuning changes a large portion or all of the trainable parameters, while parameter-efficient approaches update a much smaller set of parameters or add trainable components. The choice affects compute requirements, storage, training time, and deployment complexity.',
      highlights: [
        {
          title: 'Full fine-tuning',
          description:
            'Updates a large portion or the full set of trainable model parameters.',
        },
        {
          title: 'Parameter-efficient fine-tuning',
          description:
            'Adapts a model while training only a smaller set of parameters or additional components.',
        },
        {
          title: 'LoRA',
          description:
            'A parameter-efficient approach that learns low-rank updates instead of modifying the full model directly.',
        },
        {
          title: 'Adapters',
          description:
            'Small trainable components added to a pretrained model for task-specific adaptation.',
        },
      ],
    },
    {
      title: 'Fine-Tuning in real products',
      content:
        'Fine-Tuning can be useful for specialized classification, structured extraction, consistent response formats, domain-specific terminology, coding behavior, support workflows, and other applications where repeated prompting does not provide sufficient consistency. The business value should be measured through the improvement in the actual product task rather than model metrics alone.',
    },
    {
      title: 'Fine-Tuning in production',
      content:
        'Production fine-tuning requires careful dataset governance, experiment tracking, evaluation, model versioning, cost management, security, privacy, deployment controls, monitoring, and rollback. Teams must also monitor whether the fine-tuned model introduces regressions on capabilities that were already working well in the base model.',
    },
    {
      title: 'Evaluating Fine-Tuned models',
      content:
        'Evaluation should compare the fine-tuned model with the original model using a representative test set. Teams should measure both the target improvement and possible regressions. Human evaluation may be important for subjective tasks, while automated metrics can provide repeatable measurements for structured or measurable outputs.',
      highlights: [
        {
          title: 'Task performance',
          description:
            'Measures how effectively the model performs the specific task it was adapted for.',
        },
        {
          title: 'Regression',
          description:
            'Identifies cases where fine-tuning causes previously useful capabilities to become worse.',
        },
        {
          title: 'Generalization',
          description:
            'Measures whether improvements extend beyond the exact examples used during training.',
        },
        {
          title: 'Human evaluation',
          description:
            'Uses expert or user judgment when quality cannot be captured completely by automated metrics.',
        },
      ],
    },
    {
      title: 'Common Fine-Tuning mistakes',
      content:
        'Common mistakes include fine-tuning before understanding the actual problem, using low-quality or inconsistent examples, training on too little representative data, failing to maintain a separate evaluation set, optimizing for training performance instead of real-world behavior, and using fine-tuning to solve a knowledge freshness problem that would be better addressed with retrieval.',
      highlights: [
        {
          title: 'Poor training data',
          description:
            'Inconsistent or incorrect examples teach the model behavior that the product does not actually want.',
        },
        {
          title: 'No baseline',
          description:
            'Without comparing against the original model, it is difficult to know whether fine-tuning created real improvement.',
        },
        {
          title: 'Data leakage',
          description:
            'Evaluation information accidentally appears in training data and produces misleading performance results.',
        },
        {
          title: 'Wrong problem',
          description:
            'Fine-tuning is used when prompting, RAG, tools, or application logic would be a better solution.',
        },
        {
          title: 'No rollback',
          description:
            'A new model version is deployed without a safe way to return to a known-good version.',
        },
      ],
    },
    {
      title: 'Explore Fine-Tuning in EDDUU',
      content:
        'EDDUU connects Fine-Tuning with Large Language Models, Generative AI, Prompt Engineering, RAG, Embeddings, AI Evaluation, PyTorch, and Hugging Face.',
    },
  ],
  relatedTechnologyIds: [
    'ai',
    'genai',
    'llms',
    'prompt-engineering',
    'rag',
    'embeddings',
    'ai-evaluation',
    'pytorch',
    'hugging-face',
  ],
}

export default fineTuningKnowledge
