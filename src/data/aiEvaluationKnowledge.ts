import type { KnowledgeDefinition } from './knowledge'

export const aiEvaluationKnowledge: KnowledgeDefinition = {
  technologyId: 'ai-evaluation',
  slug: 'ai-evaluation',
  title: 'What is AI Evaluation?',
  summary:
    'AI Evaluation is the systematic process of measuring whether an AI model or AI-powered application is accurate, reliable, safe, useful, and suitable for its intended task.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is AI Evaluation?',
      content:
        'AI Evaluation is the process of testing and measuring the behavior and performance of an AI system. Instead of assuming that a model is good because it produces impressive examples, evaluation uses representative inputs, defined criteria, and measurable outcomes to determine whether the system actually meets its requirements.',
    },
    {
      title: 'Why do we need AI Evaluation?',
      content:
        'AI systems can produce different outputs for similar inputs, fail on unusual cases, or appear convincing while being incorrect. Traditional software can often be tested against an expected exact result, while AI systems frequently require evaluation of quality, relevance, reasoning, safety, consistency, and usefulness. Evaluation gives teams a repeatable way to detect problems and measure improvement.',
    },
    {
      title: 'How does AI Evaluation work?',
      content:
        'A typical evaluation process defines the task and success criteria, creates representative test cases, runs the AI system against those cases, measures the outputs using automated or human evaluation, analyzes failures, and compares results across model or application versions. The evaluation dataset should represent the situations the system is expected to handle in production.',
    },
    {
      title: 'The AI Evaluation pipeline',
      content:
        'A practical evaluation pipeline can be understood as: define the objective, create evaluation data, define metrics, run the system, score the outputs, inspect failures, compare versions, and use the findings to improve the system. Evaluation should continue after deployment because production inputs and system behavior can change over time.',
      highlights: [
        {
          title: 'Evaluation dataset',
          description:
            'A representative collection of inputs used to test the AI system.',
        },
        {
          title: 'Ground truth',
          description:
            'The expected answer, label, behavior, or reference used when judging an output.',
        },
        {
          title: 'Metric',
          description:
            'A defined measurement used to quantify some aspect of system performance.',
        },
        {
          title: 'Evaluator',
          description:
            'A method, model, or human reviewer that judges the quality of an AI output.',
        },
        {
          title: 'Failure analysis',
          description:
            'The process of examining incorrect or undesirable outputs to understand why they occurred.',
        },
        {
          title: 'Regression testing',
          description:
            'Repeated evaluation used to detect whether a new version has made existing behavior worse.',
        },
      ],
    },
    {
      title: 'Important AI Evaluation concepts',
      content:
        'AI evaluation involves several dimensions because a system can be strong in one area and weak in another. The appropriate dimensions depend on the actual product and its risk level.',
      highlights: [
        {
          title: 'Accuracy',
          description:
            'Measures whether the system produces correct answers or decisions for the task.',
        },
        {
          title: 'Relevance',
          description:
            'Measures whether the output addresses the user request and available context appropriately.',
        },
        {
          title: 'Faithfulness',
          description:
            'Measures whether generated claims remain supported by the provided evidence or source information.',
        },
        {
          title: 'Consistency',
          description:
            'Measures whether the system behaves reliably across similar or repeated inputs.',
        },
        {
          title: 'Safety',
          description:
            'Measures whether the system avoids harmful, prohibited, or unsafe behavior.',
        },
        {
          title: 'Latency',
          description:
            'Measures how long the system takes to produce a usable result.',
        },
      ],
    },
    {
      title: 'Model evaluation vs application evaluation',
      content:
        'Evaluating a model and evaluating an AI application are not the same thing. A model may perform well on general benchmarks while the application performs poorly because of bad prompts, retrieval, tool integration, data quality, or application logic. Production teams should therefore evaluate the complete system in addition to evaluating the underlying model.',
    },
    {
      title: 'AI Evaluation for LLMs',
      content:
        'Large Language Models require evaluation across dimensions such as factual correctness, instruction following, relevance, style, consistency, safety, and hallucination. Some tasks can be measured using exact or structured metrics, while open-ended generation may require reference-based comparison, model-based evaluation, human review, or combinations of these approaches.',
    },
    {
      title: 'AI Evaluation for RAG',
      content:
        'RAG systems require evaluation of both retrieval and generation. The system should determine whether the correct information was retrieved, whether the retrieved context was relevant, and whether the generated answer was supported by that context. A strong final answer cannot compensate for consistently retrieving the wrong evidence.',
      highlights: [
        {
          title: 'Retrieval quality',
          description:
            'Measures whether relevant source information is successfully retrieved.',
        },
        {
          title: 'Context relevance',
          description:
            'Measures whether retrieved information is useful for answering the current question.',
        },
        {
          title: 'Faithfulness',
          description:
            'Measures whether the generated answer is supported by the retrieved evidence.',
        },
        {
          title: 'Answer quality',
          description:
            'Measures whether the final response actually answers the user question correctly and usefully.',
        },
      ],
    },
    {
      title: 'AI Evaluation for Agents',
      content:
        'Agent evaluation must consider more than the final response because agents can perform multiple actions. Teams may need to evaluate tool selection, tool arguments, execution sequence, state management, task completion, unnecessary actions, failure recovery, and adherence to permissions. An agent can produce a good final answer while still taking inefficient or unsafe actions along the way.',
      highlights: [
        {
          title: 'Task completion',
          description:
            'Measures whether the agent successfully accomplishes the intended objective.',
        },
        {
          title: 'Tool selection',
          description:
            'Measures whether the agent chooses appropriate tools for each situation.',
        },
        {
          title: 'Tool correctness',
          description:
            'Measures whether tools are called with appropriate inputs and parameters.',
        },
        {
          title: 'Execution efficiency',
          description:
            'Measures whether the agent completes tasks without unnecessary actions, latency, or cost.',
        },
        {
          title: 'Policy compliance',
          description:
            'Measures whether the agent remains within its defined permissions and safety constraints.',
        },
      ],
    },
    {
      title: 'Automated evaluation vs human evaluation',
      content:
        'Automated evaluation is useful for repeatability, scale, and fast regression testing. Human evaluation is valuable when quality depends on judgment, nuance, tone, or domain expertise. Many production systems combine both approaches, using automated checks for large-scale monitoring and human review for difficult or high-impact cases.',
      highlights: [
        {
          title: 'Automated evaluation',
          description:
            'Uses deterministic metrics, rules, programs, or evaluator models to score outputs at scale.',
        },
        {
          title: 'Human evaluation',
          description:
            'Uses people with appropriate expertise to judge quality, usefulness, safety, or correctness.',
        },
        {
          title: 'LLM-as-judge',
          description:
            'Uses another language model as an evaluator according to a defined rubric or comparison method.',
        },
        {
          title: 'Hybrid evaluation',
          description:
            'Combines automated measurements with human review to balance scale and judgment.',
        },
      ],
    },
    {
      title: 'Evaluation datasets',
      content:
        'A useful evaluation dataset should represent the real situations the system is expected to handle. It should include normal cases, difficult cases, edge cases, ambiguous inputs, adversarial inputs where relevant, and important failure scenarios. The dataset should be maintained over time because production failures can reveal new cases that deserve permanent inclusion in regression testing.',
    },
    {
      title: 'AI Evaluation in production',
      content:
        'Production AI evaluation should be connected to monitoring and release management. Teams can evaluate candidate model or prompt versions before deployment, monitor quality signals after release, investigate failures, and maintain a regression suite. High-risk systems may also require approval workflows and explicit quality thresholds before a new version can reach production.',
    },
    {
      title: 'Common AI Evaluation mistakes',
      content:
        'Common mistakes include evaluating only a few impressive examples, using unrealistic test data, measuring only model benchmarks, relying on a single metric, changing evaluation criteria between versions, leaking evaluation data into training, and ignoring production failures. Evaluation is most useful when it is repeatable, representative, and directly connected to the product objective.',
      highlights: [
        {
          title: 'Demo-driven evaluation',
          description:
            'Judges quality using a few selected examples instead of representative test cases.',
        },
        {
          title: 'Single metric',
          description:
            'Uses one measurement even though the system has multiple quality and risk dimensions.',
        },
        {
          title: 'Poor test data',
          description:
            'The evaluation dataset does not represent real user behavior or important edge cases.',
        },
        {
          title: 'No baseline',
          description:
            'A new version is evaluated without comparing it with the current production or reference version.',
        },
        {
          title: 'Ignoring failures',
          description:
            'Teams record aggregate scores without examining the actual cases where the system fails.',
        },
      ],
    },
    {
      title: 'Explore AI Evaluation in EDDUU',
      content:
        'EDDUU connects AI Evaluation with LLMs, Generative AI, RAG, AI Agents, Prompt Engineering, Fine-Tuning, and AI Guardrails to create a complete approach to building reliable AI systems.',
    },
  ],
  relatedTechnologyIds: [
    'ai',
    'genai',
    'llms',
    'rag',
    'agents',
    'prompt-engineering',
    'fine-tuning',
    'ai-guardrails',
    'embeddings',
  ],
}

export default aiEvaluationKnowledge
