import type { KnowledgeDefinition } from './knowledge'

export const promptEngineeringKnowledge: KnowledgeDefinition = {
  technologyId: 'prompt-engineering',
  slug: 'prompt-engineering',
  title: 'What is Prompt Engineering?',
  summary:
    'Prompt Engineering is the practice of designing instructions, context, examples, constraints, and output formats so AI models can produce more reliable and useful results.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Prompt Engineering?',
      content:
        'Prompt Engineering is the practice of designing the input given to an AI model so that the model can better understand the task and produce the desired result. A prompt can contain instructions, context, examples, constraints, data, and output requirements. Good prompt engineering focuses on making the intended behavior clear and repeatable rather than simply writing longer instructions.',
    },
    {
      title: 'Why do we need Prompt Engineering?',
      content:
        'AI models are general-purpose systems that can perform many different tasks, but the quality and consistency of their output depend partly on how the task is communicated. A well-designed prompt can clarify the objective, provide relevant context, define constraints, and specify how the response should be structured. This can make an AI application more predictable and easier to evaluate.',
    },
    {
      title: 'How does Prompt Engineering work?',
      content:
        'A prompt provides the model with information and instructions that influence its response. The application defines the task, supplies the necessary context, and may provide examples or formatting rules. The model processes this information together with its learned capabilities and generates an output. Developers can then test different prompt designs and evaluate which approach performs best for the actual task.',
    },
    {
      title: 'The Prompt Engineering structure',
      content:
        'A practical prompt often combines several components. Not every prompt needs every component, but understanding them helps teams design reliable instructions for different use cases.',
      highlights: [
        {
          title: 'Instruction',
          description:
            'Clearly defines what the model is expected to do.',
        },
        {
          title: 'Context',
          description:
            'Provides information the model needs to understand the current task.',
        },
        {
          title: 'Examples',
          description:
            'Demonstrate the expected behavior or output pattern using representative cases.',
        },
        {
          title: 'Constraints',
          description:
            'Defines boundaries such as allowed information, length, tone, or behavior.',
        },
        {
          title: 'Output format',
          description:
            'Specifies how the response should be structured, such as JSON, a table, or a fixed schema.',
        },
        {
          title: 'Evaluation criteria',
          description:
            'Defines what makes the generated result useful, correct, safe, or acceptable.',
        },
      ],
    },
    {
      title: 'Important Prompt Engineering techniques',
      content:
        'Different tasks benefit from different prompting approaches. The right technique should be selected based on the task, model capabilities, reliability requirements, and available context.',
      highlights: [
        {
          title: 'Zero-shot prompting',
          description:
            'Asks the model to perform a task without providing worked examples.',
        },
        {
          title: 'Few-shot prompting',
          description:
            'Provides examples that demonstrate the expected input-output behavior.',
        },
        {
          title: 'Role or behavior instructions',
          description:
            'Defines the behavior, responsibilities, or perspective the model should follow.',
        },
        {
          title: 'Structured output',
          description:
            'Requires the model to produce information in a predictable structure or schema.',
        },
        {
          title: 'Chain-of-thought alternatives',
          description:
            'Uses structured intermediate representations or explicit task decomposition when useful without requiring unrestricted internal reasoning to be exposed.',
        },
        {
          title: 'Prompt templates',
          description:
            'Uses reusable prompt structures with variable inputs for consistent application behavior.',
        },
      ],
    },
    {
      title: 'Prompt Engineering vs context engineering',
      content:
        'Prompt Engineering traditionally focuses on designing instructions and prompts. Context engineering is broader and focuses on ensuring that the model receives the right information at the right time, including retrieved documents, conversation state, tool results, user information, and structured application data. Modern AI systems often require both because a good instruction is not enough if the model receives poor or irrelevant context.',
    },
    {
      title: 'Prompt Engineering and RAG',
      content:
        'In a RAG system, prompting determines how retrieved information is presented to the language model and how the model should use that information. A useful prompt can instruct the model to distinguish retrieved evidence from unsupported assumptions, follow the requested output format, and avoid generating answers when the available evidence is insufficient.',
    },
    {
      title: 'Prompt Engineering and AI Agents',
      content:
        'Agent systems use prompts to define objectives, available behaviors, tool usage rules, decision boundaries, and response formats. However, reliable agents should not depend on prompts alone. Tool permissions, validation, application logic, state management, guardrails, and human approval may be required when an agent can perform real actions.',
    },
    {
      title: 'Prompt Engineering in real products',
      content:
        'Prompt Engineering is used in customer support assistants, coding tools, document processing, educational applications, search systems, content workflows, data extraction, business automation, and AI agents. In production, prompts are usually treated as part of the application logic and should be versioned, tested, evaluated, and monitored rather than edited casually.',
    },
    {
      title: 'Prompt Engineering in production',
      content:
        'Production prompt systems must consider consistency, model changes, context limits, latency, token usage, cost, security, prompt injection, sensitive information, evaluation, versioning, and fallback behavior. A prompt that works well in a demonstration can fail when inputs become more diverse or when the underlying model changes.',
    },
    {
      title: 'Evaluating prompts',
      content:
        'Prompt quality should be measured against representative tasks rather than judged from a few examples. Teams can create evaluation datasets, define success criteria, compare prompt versions, measure output quality, and monitor production behavior. Evaluation should focus on the actual business or user outcome instead of assuming that a longer or more sophisticated prompt is automatically better.',
      highlights: [
        {
          title: 'Accuracy',
          description:
            'Measures whether the model produces factually or task-wise correct results.',
        },
        {
          title: 'Consistency',
          description:
            'Measures whether similar inputs produce reliably useful outputs.',
        },
        {
          title: 'Instruction following',
          description:
            'Measures whether the model follows the requested task, constraints, and format.',
        },
        {
          title: 'Grounding',
          description:
            'Measures whether the response remains appropriately supported by the provided context or evidence.',
        },
        {
          title: 'Safety',
          description:
            'Measures whether the system behaves appropriately under harmful, adversarial, or unexpected inputs.',
        },
      ],
    },
    {
      title: 'Common Prompt Engineering mistakes',
      content:
        'Common mistakes include giving ambiguous instructions, adding irrelevant context, relying on prompts to solve problems that require application logic, failing to define output requirements, ignoring adversarial inputs, and evaluating prompts using only a few hand-picked examples. Production systems should treat prompts as one part of a larger engineering solution.',
      highlights: [
        {
          title: 'Ambiguous instructions',
          description:
            'The model is asked to perform a task without clearly defining the intended outcome.',
        },
        {
          title: 'Too much irrelevant context',
          description:
            'Unnecessary information makes it harder for the model to focus on the important evidence.',
        },
        {
          title: 'No evaluation set',
          description:
            'Prompt changes are made without a repeatable way to compare their effect on quality.',
        },
        {
          title: 'Prompt-only solutions',
          description:
            'Application-level problems are incorrectly treated as something that instructions alone can reliably solve.',
        },
        {
          title: 'Ignoring security',
          description:
            'The design does not account for prompt injection, sensitive data, or malicious inputs.',
        },
      ],
    },
    {
      title: 'Explore Prompt Engineering in EDDUU',
      content:
        'EDDUU connects Prompt Engineering with Large Language Models, Generative AI, RAG, AI Agents, AI Evaluation, AI Guardrails, embeddings, and application architecture.',
    },
  ],
  relatedTechnologyIds: [
    'ai',
    'genai',
    'llms',
    'rag',
    'agents',
    'ai-evaluation',
    'ai-guardrails',
    'embeddings',
  ],
}

export default promptEngineeringKnowledge
