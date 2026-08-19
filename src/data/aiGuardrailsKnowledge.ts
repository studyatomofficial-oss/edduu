import type { KnowledgeDefinition } from './knowledge'

export const aiGuardrailsKnowledge: KnowledgeDefinition = {
  technologyId: 'ai-guardrails',
  slug: 'ai-guardrails',
  title: 'What are AI Guardrails?',
  summary:
    'AI Guardrails are controls, policies, validations, and monitoring mechanisms that constrain AI systems so they behave within defined safety, security, quality, and business boundaries.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What are AI Guardrails?',
      content:
        'AI Guardrails are mechanisms that control how an AI system receives information, generates responses, selects tools, and performs actions. They can validate inputs and outputs, enforce policies, detect unsafe behavior, restrict access to capabilities, and prevent an AI application from operating outside its intended boundaries.',
    },
    {
      title: 'Why do we need AI Guardrails?',
      content:
        'AI models are probabilistic systems and may produce incorrect, unsafe, irrelevant, or unexpected outputs. The risk becomes greater when an AI system can access private information, call external tools, or perform real-world actions. Guardrails provide an additional control layer so that the application does not rely entirely on the model to behave correctly.',
    },
    {
      title: 'How do AI Guardrails work?',
      content:
        'Guardrails can operate at different points in an AI application. An input can be checked before it reaches the model, retrieved context can be validated before being included in a prompt, model output can be checked before being shown to a user, and tool calls can be validated before execution. If a policy is violated, the system can block, modify, escalate, or safely handle the request.',
    },
    {
      title: 'The AI Guardrails pipeline',
      content:
        'A practical guardrail architecture can be understood as input validation, context validation, model execution, output validation, tool authorization, action validation, and monitoring. Not every application requires every layer, but higher-risk systems generally benefit from multiple independent controls.',
      highlights: [
        {
          title: 'Input validation',
          description:
            'Checks incoming requests for malformed, unsafe, unauthorized, or unexpected content.',
        },
        {
          title: 'Context validation',
          description:
            'Checks retrieved or supplied information before it is passed to the model.',
        },
        {
          title: 'Output validation',
          description:
            'Checks generated responses against safety, quality, format, and policy requirements.',
        },
        {
          title: 'Tool authorization',
          description:
            'Controls which tools the model or agent is allowed to invoke.',
        },
        {
          title: 'Action validation',
          description:
            'Checks potentially consequential actions before they are executed.',
        },
        {
          title: 'Monitoring',
          description:
            'Tracks guardrail events, policy violations, failures, and suspicious behavior over time.',
        },
      ],
    },
    {
      title: 'Important AI Guardrails concepts',
      content:
        'Guardrails can address several different classes of risk. A reliable design starts by identifying what can go wrong and then placing controls at the appropriate layer.',
      highlights: [
        {
          title: 'Policy',
          description:
            'Defines what the AI system is allowed, required, or prohibited from doing.',
        },
        {
          title: 'Validation',
          description:
            'Checks whether an input, output, or action satisfies predefined rules.',
        },
        {
          title: 'Filtering',
          description:
            'Detects and blocks or transforms content that violates defined requirements.',
        },
        {
          title: 'Authorization',
          description:
            'Determines whether a user, model, or agent has permission to perform an operation.',
        },
        {
          title: 'Human approval',
          description:
            'Requires a person to review important or high-risk actions before execution.',
        },
        {
          title: 'Fallback',
          description:
            'Defines a safer alternative when the AI system cannot confidently or safely complete a request.',
        },
      ],
    },
    {
      title: 'Input Guardrails',
      content:
        'Input guardrails operate before the model processes a request. They can validate schemas, detect malicious or prohibited content, enforce authentication requirements, identify sensitive information, and reject requests that are outside the intended scope of the application.',
      highlights: [
        {
          title: 'Schema validation',
          description:
            'Ensures incoming structured data matches the expected format and constraints.',
        },
        {
          title: 'Prompt injection detection',
          description:
            'Identifies attempts to manipulate the model into ignoring application instructions or security boundaries.',
        },
        {
          title: 'Sensitive data detection',
          description:
            'Identifies potentially sensitive information that should not be processed or exposed.',
        },
        {
          title: 'Scope enforcement',
          description:
            'Ensures the request is related to the purpose and capabilities of the application.',
        },
      ],
    },
    {
      title: 'Output Guardrails',
      content:
        'Output guardrails inspect model-generated results before they reach the user or another system. They can validate structure, detect unsafe content, check required fields, enforce business rules, and reject responses that fail important requirements.',
      highlights: [
        {
          title: 'Structured output validation',
          description:
            'Checks whether generated data follows the expected schema or format.',
        },
        {
          title: 'Content safety',
          description:
            'Checks generated content against defined safety and policy requirements.',
        },
        {
          title: 'Grounding checks',
          description:
            'Checks whether generated claims are appropriately supported by available evidence.',
        },
        {
          title: 'Business-rule validation',
          description:
            'Ensures generated decisions or recommendations remain within application-specific rules.',
        },
      ],
    },
    {
      title: 'Guardrails for AI Agents',
      content:
        'Agentic systems require additional controls because an agent can select tools and perform actions. Guardrails should restrict available capabilities, validate tool arguments, enforce authorization, limit execution, detect unsafe plans, and require human approval for high-impact operations. The model should never be treated as the final security boundary.',
      highlights: [
        {
          title: 'Tool permissions',
          description:
            'Limits the tools and capabilities available to an agent.',
        },
        {
          title: 'Parameter validation',
          description:
            'Checks tool arguments before an external operation is executed.',
        },
        {
          title: 'Execution limits',
          description:
            'Restricts loops, retries, spending, runtime, or the number of actions an agent can perform.',
        },
        {
          title: 'Human-in-the-loop',
          description:
            'Requires explicit human approval for sensitive or consequential operations.',
        },
        {
          title: 'Kill switch',
          description:
            'Provides a mechanism to stop an agent or workflow when unsafe behavior is detected.',
        },
      ],
    },
    {
      title: 'Guardrails and RAG',
      content:
        'RAG systems can introduce risks through retrieved content. Documents may contain irrelevant, outdated, malicious, or instruction-like text. Guardrails can help validate sources, restrict retrieval scope, protect sensitive information, and check whether generated responses remain grounded in approved evidence.',
    },
    {
      title: 'Guardrails vs AI Evaluation',
      content:
        'AI Evaluation measures how well an AI system performs, while guardrails actively constrain or control system behavior. Evaluation may discover that a system produces unsafe outputs; a guardrail can then prevent those outputs from reaching users. Strong production systems commonly use both because measuring quality and controlling behavior are complementary responsibilities.',
    },
    {
      title: 'Guardrails vs traditional security',
      content:
        'Traditional application security protects systems, identities, networks, data, and infrastructure using mechanisms such as authentication, authorization, encryption, and access controls. AI guardrails address additional risks created by probabilistic model behavior and natural-language interaction. Guardrails should complement traditional security rather than replace it.',
    },
    {
      title: 'AI Guardrails in real products',
      content:
        'Guardrails are useful in customer support assistants, financial applications, healthcare workflows, enterprise search, coding assistants, educational systems, AI agents, document processing, and automated business operations. The appropriate controls depend on the consequences of an incorrect, unsafe, or unauthorized AI action.',
    },
    {
      title: 'AI Guardrails in production',
      content:
        'Production guardrail systems require clear policies, layered controls, observability, testing, versioning, failure handling, access control, and operational ownership. Teams should monitor both false positives, where safe requests are incorrectly blocked, and false negatives, where dangerous behavior passes through the controls.',
      highlights: [
        {
          title: 'False positive',
          description:
            'A safe or valid request is incorrectly blocked by a guardrail.',
        },
        {
          title: 'False negative',
          description:
            'Unsafe or prohibited behavior is incorrectly allowed through a guardrail.',
        },
        {
          title: 'Fail-safe',
          description:
            'The system moves toward a safer state when a validation or control cannot operate correctly.',
        },
        {
          title: 'Layered defense',
          description:
            'Multiple independent controls reduce reliance on any single safety mechanism.',
        },
      ],
    },
    {
      title: 'Common AI Guardrails mistakes',
      content:
        'Common mistakes include relying on a single guardrail, treating prompt instructions as a security boundary, allowing models unrestricted access to tools, failing to validate tool parameters, ignoring sensitive data, blocking too aggressively, and deploying controls without monitoring their effectiveness.',
      highlights: [
        {
          title: 'Prompt-only security',
          description:
            'Assumes model instructions alone can reliably enforce security or authorization policies.',
        },
        {
          title: 'Unrestricted tools',
          description:
            'Gives an agent access to capabilities that are unnecessary for its task.',
        },
        {
          title: 'No output validation',
          description:
            'Sends generated results directly to users or systems without checking important constraints.',
        },
        {
          title: 'No monitoring',
          description:
            'Deploys guardrails without measuring violations, blocked requests, or failure patterns.',
        },
        {
          title: 'Overblocking',
          description:
            'Creates excessive restrictions that prevent legitimate users from completing valid tasks.',
        },
      ],
    },
    {
      title: 'Explore AI Guardrails in EDDUU',
      content:
        'EDDUU connects AI Guardrails with AI Evaluation, LLMs, Generative AI, RAG, AI Agents, Security, Identity, Authentication, Authorization, and Observability.',
    },
  ],
  relatedTechnologyIds: [
    'ai',
    'genai',
    'llms',
    'rag',
    'agents',
    'ai-evaluation',
    'security',
    'identity',
    'authentication',
    'authorization',
    'observability',
  ],
}

export default aiGuardrailsKnowledge
