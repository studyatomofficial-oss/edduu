import type { KnowledgeDefinition } from './knowledge'

export const agentsKnowledge: KnowledgeDefinition = {
  technologyId: 'agents',
  slug: 'agents',
  title: 'What are AI Agents?',
  summary:
    'AI Agents are AI-powered systems that can reason about a goal, decide what to do next, use tools, observe results, and continue through multiple steps to accomplish a task.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What are AI Agents?',
      content:
        'An AI Agent is a software system that uses an AI model to decide and execute actions toward a goal. Unlike a simple question-and-answer application, an agent can determine what information it needs, select tools, perform actions, inspect results, and continue working through multiple steps. The model provides reasoning and decision-making capabilities while the surrounding application provides tools, state, permissions, and execution control.',
    },
    {
      title: 'Why do we need AI Agents?',
      content:
        'Many real-world tasks cannot be completed with a single model response. They may require searching for information, calling APIs, reading documents, updating systems, checking results, and making additional decisions. Agents provide a way to connect these capabilities into an execution loop so that the system can work through a multi-step objective instead of only generating a single response.',
    },
    {
      title: 'How do AI Agents work?',
      content:
        'A typical agent receives a goal, interprets the available context, decides on a next step, selects an appropriate tool or action, executes it, observes the result, and decides whether another step is required. This loop continues until the task is completed, a stopping condition is reached, or the system requires human intervention. Production systems usually add state management, permissions, validation, retries, monitoring, and limits around this loop.',
    },
    {
      title: 'The Agent execution loop',
      content:
        'The agent loop can be understood as a repeated cycle of goal, reasoning, action, observation, and decision. The model determines what should happen next, while the application executes the selected action and returns the result. This separation is important because the model should not automatically receive unrestricted access to production systems.',
      highlights: [
        {
          title: 'Goal',
          description:
            'Defines the outcome the agent is expected to accomplish.',
        },
        {
          title: 'Reasoning',
          description:
            'Determines what information or action may be needed next.',
        },
        {
          title: 'Tool selection',
          description:
            'Chooses an available capability such as search, database access, or an API.',
        },
        {
          title: 'Action',
          description:
            'Executes the selected tool or operation within defined permissions.',
        },
        {
          title: 'Observation',
          description:
            'Receives the result of the action and adds it to the agent state or context.',
        },
        {
          title: 'Decision',
          description:
            'Determines whether to continue, change strategy, request help, or finish.',
        },
      ],
    },
    {
      title: 'Agents vs traditional AI applications',
      content:
        'A traditional AI application often follows a relatively fixed flow: input enters the system, the model processes it, and an output is returned. An agent introduces a dynamic execution loop where the next action can depend on the result of the previous action. This makes agents more flexible, but also introduces additional complexity, latency, cost, and operational risk.',
    },
    {
      title: 'Agents and tools',
      content:
        'Tools give an agent access to capabilities that the language model does not have by itself. Examples include web search, databases, calculators, internal APIs, file systems, code execution, and business applications. A well-designed agent exposes only the tools it actually needs and validates tool inputs before execution.',
    },
    {
      title: 'Important AI Agent concepts',
      content:
        'Building reliable agents requires understanding the components that control reasoning, execution, state, and safety.',
      highlights: [
        {
          title: 'Tool calling',
          description:
            'Allows the model to request an external function or capability to perform work.',
        },
        {
          title: 'State',
          description:
            'Stores information about the current task, previous actions, observations, and progress.',
        },
        {
          title: 'Memory',
          description:
            'Provides mechanisms for retaining useful information across interactions or tasks.',
        },
        {
          title: 'Planning',
          description:
            'Breaks a larger objective into steps or determines what action should happen next.',
        },
        {
          title: 'Guardrails',
          description:
            'Constrain agent behavior by validating inputs, outputs, tools, and execution policies.',
        },
        {
          title: 'Human-in-the-loop',
          description:
            'Allows a person to review, approve, or take over important or risky decisions.',
        },
      ],
    },
    {
      title: 'Single-agent vs multi-agent systems',
      content:
        'A single-agent system uses one agent to coordinate the task and its available tools. A multi-agent system divides work between multiple specialized agents that may perform different roles, such as research, planning, verification, or execution. Multi-agent architectures can improve specialization but also introduce coordination, communication, state management, and debugging challenges.',
    },
    {
      title: 'AI Agents in real products',
      content:
        'Agents can support research workflows, customer support, software development, business operations, data analysis, lead qualification, document processing, and other multi-step workflows. The most useful applications are usually those where the agent can access reliable tools and where completing the task requires several connected actions rather than a single generated answer.',
    },
    {
      title: 'AI Agents in production',
      content:
        'Production agents require stronger controls than simple model integrations because they can perform actions. Teams need to consider tool permissions, authentication, authorization, state management, execution limits, retries, idempotency, validation, observability, latency, cost, failure recovery, and human approval. The system should always define what the agent is allowed to do and what happens when an action fails or produces an unexpected result.',
    },
    {
      title: 'Explore AI Agents in EDDUU',
      content:
        'EDDUU connects AI Agents with the wider technology universe, including LLMs, Generative AI, RAG, MCP, LangGraph, APIs, databases, Redis, security, and observability.',
    },
  ],
  relatedTechnologyIds: [
    'ai',
    'genai',
    'llms',
    'rag',
    'langgraph',
    'mcp',
    'rest-apis',
    'redis',
    'security',
    'observability',
  ],
}

export default agentsKnowledge
