import type { KnowledgeDefinition } from './knowledge'

export const langgraphKnowledge: KnowledgeDefinition = {
  technologyId: 'langgraph',
  slug: 'langgraph',
  title: 'What is LangGraph?',
  summary:
    'LangGraph is a framework for building stateful, controllable AI workflows and agent systems using graph-based execution, explicit state, nodes, edges, and durable execution patterns.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is LangGraph?',
      content:
        'LangGraph is a framework for building AI applications where execution may involve multiple steps, decisions, tools, and state changes. It represents application behavior as a graph of nodes and transitions, allowing developers to explicitly control how an AI workflow moves from one step to another.',
    },
    {
      title: 'Why do we need LangGraph?',
      content:
        'Simple AI applications can often be implemented as a straightforward sequence of model calls. More complex agent systems may need loops, branching decisions, tool execution, retries, human approval, persistent state, and controlled stopping conditions. LangGraph provides structures for representing and managing these workflows explicitly instead of relying entirely on an uncontrolled model-driven loop.',
    },
    {
      title: 'How does LangGraph work?',
      content:
        'A LangGraph application defines a graph containing nodes that perform work and edges that determine how execution moves between those nodes. A shared state can carry information through the workflow. A node may call an AI model, execute a tool, validate information, update state, or perform another application operation. Conditional edges can determine what should happen next based on the current state.',
    },
    {
      title: 'The LangGraph execution model',
      content:
        'The core execution model can be understood as state flowing through a graph. A workflow starts with an initial state, executes a node, updates the state, follows an edge to the next node, and continues until a defined completion condition is reached. This structure makes multi-step AI behavior easier to inspect, control, test, and modify.',
      highlights: [
        {
          title: 'State',
          description:
            'Contains the information required to track the current workflow and its progress.',
        },
        {
          title: 'Node',
          description:
            'A unit of work that reads or modifies state and performs part of the workflow.',
        },
        {
          title: 'Edge',
          description:
            'Defines how execution moves from one node to another.',
        },
        {
          title: 'Conditional edge',
          description:
            'Selects the next path based on the current state or a decision.',
        },
        {
          title: 'Entry point',
          description:
            'Defines where execution begins in the graph.',
        },
        {
          title: 'End state',
          description:
            'Defines when the workflow has completed and execution should stop.',
        },
      ],
    },
    {
      title: 'Important LangGraph concepts',
      content:
        'LangGraph becomes particularly useful when an AI application needs explicit control over state, execution, branching, and persistence.',
      highlights: [
        {
          title: 'Stateful workflow',
          description:
            'Maintains information across multiple steps of an AI workflow.',
        },
        {
          title: 'Graph execution',
          description:
            'Represents workflow behavior through connected nodes and execution paths.',
        },
        {
          title: 'Loops',
          description:
            'Allow a workflow to repeat steps when additional work or validation is required.',
        },
        {
          title: 'Branching',
          description:
            'Allows different execution paths depending on the current state or decision.',
        },
        {
          title: 'Checkpointing',
          description:
            'Persists workflow state so execution can be inspected, resumed, or recovered.',
        },
        {
          title: 'Human-in-the-loop',
          description:
            'Allows execution to pause for human review, approval, or intervention.',
        },
      ],
    },
    {
      title: 'LangGraph and AI Agents',
      content:
        'LangGraph is particularly useful for agent systems because an agent often needs to reason, select a tool, execute it, inspect the result, and decide what to do next. The graph can make this loop explicit while allowing developers to define state, tool boundaries, validation steps, retry behavior, and stopping conditions around the model.',
    },
    {
      title: 'LangGraph and LLMs',
      content:
        'LangGraph does not replace a language model. Instead, it provides orchestration around model calls and other application operations. An LLM may be used inside one or more graph nodes for reasoning, classification, planning, extraction, or tool selection, while the graph controls how the overall application proceeds.',
    },
    {
      title: 'LangGraph and tools',
      content:
        'Tools can be represented as workflow operations that an AI system can request or that application logic can execute. A well-designed LangGraph workflow can validate tool inputs, execute the operation, return the result to the workflow state, and decide whether another step is necessary. Tool permissions should remain controlled by the application rather than being determined solely by the model.',
    },
    {
      title: 'LangGraph and RAG',
      content:
        'LangGraph can orchestrate multi-step RAG workflows. A graph might receive a question, classify the request, retrieve documents, evaluate retrieval quality, rewrite the query when necessary, generate an answer, validate the response, and either return the result or continue through another retrieval cycle. This makes complex retrieval workflows explicit and controllable.',
    },
    {
      title: 'Single-agent vs multi-agent workflows',
      content:
        'LangGraph can be used for both single-agent and multi-agent architectures. A single-agent workflow may contain one reasoning component connected to multiple tools, while a multi-agent workflow can represent specialized agents as separate nodes or subgraphs. Multi-agent designs can provide specialization but also increase coordination, state management, latency, and debugging complexity.',
      highlights: [
        {
          title: 'Single-agent',
          description:
            'One primary agent coordinates the task and interacts with its available tools.',
        },
        {
          title: 'Multi-agent',
          description:
            'Multiple specialized agents collaborate to complete different parts of a larger task.',
        },
        {
          title: 'Subgraph',
          description:
            'A reusable graph or workflow component that can represent a specialized part of a larger system.',
        },
        {
          title: 'Supervisor',
          description:
            'A coordinating component that can decide which specialized workflow or agent should handle the next step.',
        },
      ],
    },
    {
      title: 'LangGraph and memory',
      content:
        'State and memory are related but should not be treated as identical concepts. Workflow state represents information needed during execution, while longer-lived memory can retain information across interactions or tasks. A production system should explicitly decide what information needs to persist, for how long, who can access it, and how it should be updated.',
    },
    {
      title: 'LangGraph and human approval',
      content:
        'Some AI workflows should not execute every action automatically. LangGraph can support workflows where execution pauses before a sensitive or consequential operation and resumes after human review or approval. This pattern is useful when an AI system can make recommendations or prepare actions but a person must remain responsible for important decisions.',
    },
    {
      title: 'LangGraph in real products',
      content:
        'LangGraph can support research agents, customer support workflows, document processing, coding assistants, business automation, lead qualification, data analysis, enterprise knowledge systems, and other applications involving multi-step AI execution. Its value is strongest when the workflow requires explicit state, branching, iteration, or controlled actions.',
    },
    {
      title: 'LangGraph in production',
      content:
        'Production LangGraph systems require careful attention to state management, persistence, retries, idempotency, tool permissions, observability, latency, cost, failure recovery, concurrency, security, and versioning. Teams should define clear execution limits and failure behavior because graph-based agents can otherwise become expensive or difficult to control.',
      highlights: [
        {
          title: 'Persistence',
          description:
            'Stores workflow state so execution can survive interruptions or support later continuation.',
        },
        {
          title: 'Retry policy',
          description:
            'Defines how recoverable failures should be retried without creating uncontrolled execution loops.',
        },
        {
          title: 'Idempotency',
          description:
            'Ensures repeating an operation does not unintentionally perform the same side effect multiple times.',
        },
        {
          title: 'Execution limits',
          description:
            'Controls recursion, runtime, tool calls, or other resources consumed by a workflow.',
        },
        {
          title: 'Observability',
          description:
            'Provides visibility into node execution, state changes, failures, latency, and workflow behavior.',
        },
      ],
    },
    {
      title: 'Common LangGraph mistakes',
      content:
        'Common mistakes include putting too much logic inside a single node, allowing uncontrolled agent loops, storing unnecessary information in state, giving agents excessive tool permissions, failing to define stopping conditions, ignoring persistence and recovery, and creating complex multi-agent architectures before a simpler workflow has been proven.',
      highlights: [
        {
          title: 'Uncontrolled loops',
          description:
            'The workflow repeatedly executes without a reliable stopping condition.',
        },
        {
          title: 'Oversized state',
          description:
            'The workflow stores unnecessary information that increases complexity, cost, or persistence overhead.',
        },
        {
          title: 'Excessive permissions',
          description:
            'Agents receive access to tools or actions that are not required for their task.',
        },
        {
          title: 'Missing recovery',
          description:
            'A failed node or interrupted workflow cannot safely resume or recover.',
        },
        {
          title: 'Premature multi-agent design',
          description:
            'Multiple agents are introduced when a simpler single-agent or deterministic workflow would be sufficient.',
        },
      ],
    },
    {
      title: 'Explore LangGraph in EDDUU',
      content:
        'EDDUU connects LangGraph with AI Agents, LLMs, Generative AI, RAG, MCP, Prompt Engineering, Redis, APIs, Databases, Security, and Observability.',
    },
  ],
  relatedTechnologyIds: [
    'ai',
    'genai',
    'llms',
    'agents',
    'rag',
    'mcp',
    'prompt-engineering',
    'redis',
    'rest-apis',
    'security',
    'observability',
  ],
}

export default langgraphKnowledge
