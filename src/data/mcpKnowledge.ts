import type { KnowledgeDefinition } from './knowledge'

export const mcpKnowledge: KnowledgeDefinition = {
  technologyId: 'mcp',
  slug: 'mcp',
  title: 'What is Model Context Protocol (MCP)?',
  summary:
    'Model Context Protocol is an open protocol for connecting AI applications with external tools, resources, and data through a standardized interface.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is Model Context Protocol?',
      content:
        'Model Context Protocol, commonly called MCP, is a protocol designed to standardize how AI applications connect with external capabilities. Instead of building a separate integration pattern for every model, application, and tool combination, MCP provides a common way for an AI application to discover and interact with external tools and resources.',
    },
    {
      title: 'Why do we need MCP?',
      content:
        'AI applications often need access to information and capabilities outside the model itself. A system may need to search a database, read files, access business systems, call APIs, or perform specialized operations. Without a common protocol, every integration can require custom interfaces and application-specific logic. MCP provides a standardized integration layer that can reduce this repeated integration work.',
    },
    {
      title: 'How does MCP work?',
      content:
        'An MCP-enabled AI application acts as a client and connects to an MCP server. The server exposes capabilities such as tools and resources through the protocol. The client can discover what capabilities are available and interact with them using standardized messages. The actual business system remains behind the MCP server, allowing the AI application to use capabilities without requiring every model integration to understand the underlying system directly.',
    },
    {
      title: 'The MCP architecture',
      content:
        'MCP can be understood as a standardized communication layer between an AI application and external capabilities. The AI application provides the interaction environment, an MCP client manages the protocol connection, and an MCP server exposes tools or resources connected to an underlying system.',
      highlights: [
        {
          title: 'MCP Host',
          description:
            'The AI application or environment that provides the overall user experience and coordinates MCP interactions.',
        },
        {
          title: 'MCP Client',
          description:
            'The component inside the host application that maintains a connection to an MCP server.',
        },
        {
          title: 'MCP Server',
          description:
            'A program that exposes tools, resources, or other capabilities through the MCP protocol.',
        },
        {
          title: 'Tool',
          description:
            'An executable capability that an AI application can invoke through an MCP server.',
        },
        {
          title: 'Resource',
          description:
            'Information or data that an MCP server can make available to the AI application.',
        },
        {
          title: 'Protocol',
          description:
            'The standardized communication rules that allow clients and servers to exchange MCP messages.',
        },
      ],
    },
    {
      title: 'Important MCP concepts',
      content:
        'MCP provides several concepts that help separate AI reasoning from external system capabilities.',
      highlights: [
        {
          title: 'Capability discovery',
          description:
            'Allows the client to learn which capabilities an MCP server makes available.',
        },
        {
          title: 'Tool invocation',
          description:
            'Allows the AI application to request execution of an exposed tool.',
        },
        {
          title: 'Resources',
          description:
            'Provide structured access to information that an application may need as context.',
        },
        {
          title: 'Structured input',
          description:
            'Defines the expected shape of information supplied when interacting with a capability.',
        },
        {
          title: 'Structured output',
          description:
            'Provides predictable result information that the application can process.',
        },
        {
          title: 'Session',
          description:
            'Represents the communication relationship between an MCP client and server.',
        },
      ],
    },
    {
      title: 'MCP and AI Agents',
      content:
        'MCP is particularly useful for AI agents because agents frequently need to discover and use external tools. An agent can reason about a task while MCP provides a standardized way to connect the application to capabilities such as search, databases, file systems, or business APIs. MCP does not replace the agent or the language model; it provides a standardized connectivity mechanism around them.',
    },
    {
      title: 'MCP and LLMs',
      content:
        'An LLM does not automatically gain access to external systems simply because MCP exists. The AI application uses MCP to discover and interact with external capabilities, and the application can then provide relevant tool information or results to the model. The model remains responsible for generating or requesting the appropriate action while the application controls how that action is executed.',
    },
    {
      title: 'MCP and tools',
      content:
        'Tools are one of the most important MCP capabilities. An MCP server can expose operations such as querying data, searching information, creating records, or interacting with an external service. The application should still validate tool arguments, enforce permissions, and control which tools are available to a particular user or workflow.',
      highlights: [
        {
          title: 'Tool definition',
          description:
            'Describes what a tool does and what input it expects.',
        },
        {
          title: 'Tool call',
          description:
            'Represents a request from the AI application to execute an available capability.',
        },
        {
          title: 'Tool result',
          description:
            'Contains the result returned by the external operation.',
        },
        {
          title: 'Tool authorization',
          description:
            'Controls whether a particular user, agent, or workflow is allowed to execute the operation.',
        },
      ],
    },
    {
      title: 'MCP and resources',
      content:
        'MCP resources provide a standardized way to make information available to an AI application. A resource could represent information from a document system, database, repository, or another external source. The application can use the resource as context without requiring a completely custom integration for every source.',
    },
    {
      title: 'MCP vs traditional API integrations',
      content:
        'Traditional APIs remain an important way to integrate software systems. MCP addresses a different layer by standardizing how AI applications can discover and interact with external capabilities. An MCP server may itself communicate with existing REST APIs, databases, or business systems. In this way, MCP can sit above existing infrastructure rather than requiring organizations to replace their existing systems.',
      highlights: [
        {
          title: 'Traditional API',
          description:
            'Defines an application-specific interface for software-to-software communication.',
        },
        {
          title: 'MCP',
          description:
            'Provides a standardized interface for AI applications to discover and use external capabilities.',
        },
        {
          title: 'MCP server',
          description:
            'Can act as an adapter between the MCP protocol and an existing internal system or API.',
        },
      ],
    },
    {
      title: 'MCP and RAG',
      content:
        'MCP and RAG can work together but solve different problems. RAG is an application architecture for retrieving relevant information and providing it to a model as context. MCP is a protocol for connecting an AI application to external capabilities and information sources. An MCP server could expose access to a knowledge source that participates in a larger RAG workflow.',
    },
    {
      title: 'MCP and LangGraph',
      content:
        'LangGraph can orchestrate complex stateful AI workflows, while MCP can provide standardized access to external tools and resources. A LangGraph-based agent could use MCP-connected capabilities as part of its execution loop. This separates workflow orchestration from the protocol used to connect external capabilities.',
    },
    {
      title: 'MCP and security',
      content:
        'Connecting an AI application to external systems introduces security considerations because tools may perform real operations. Authentication, authorization, input validation, output handling, secret management, audit logging, network controls, and least-privilege access should be considered. MCP standardization does not automatically make an integration secure; security remains an application and infrastructure responsibility.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifies the identity of the user, application, or service involved in the connection.',
        },
        {
          title: 'Authorization',
          description:
            'Determines which tools, resources, and actions the caller is permitted to access.',
        },
        {
          title: 'Least privilege',
          description:
            'Provides only the minimum permissions required to complete the intended task.',
        },
        {
          title: 'Audit logging',
          description:
            'Records important tool and resource interactions for investigation and accountability.',
        },
        {
          title: 'Input validation',
          description:
            'Checks tool arguments before allowing an external operation to execute.',
        },
      ],
    },
    {
      title: 'MCP in real products',
      content:
        'MCP can support AI assistants, coding environments, enterprise knowledge systems, research agents, data analysis applications, customer support workflows, business automation, and developer tools. Its value becomes more apparent when an AI application needs to connect with many different external systems through a consistent integration model.',
    },
    {
      title: 'MCP in production',
      content:
        'Production MCP systems require careful management of server availability, authentication, authorization, tool permissions, input validation, observability, latency, error handling, versioning, and dependency failures. Teams should also establish governance around which MCP servers are trusted, which tools they expose, and which users or agents can invoke those tools.',
      highlights: [
        {
          title: 'Server governance',
          description:
            'Controls which MCP servers are trusted and allowed to participate in the organization.',
        },
        {
          title: 'Tool governance',
          description:
            'Defines which capabilities can be exposed and under what conditions they may be executed.',
        },
        {
          title: 'Observability',
          description:
            'Tracks connections, tool calls, errors, latency, and other operational behavior.',
        },
        {
          title: 'Failure handling',
          description:
            'Defines what the AI application should do when an MCP server or underlying system becomes unavailable.',
        },
        {
          title: 'Version management',
          description:
            'Controls changes to servers, tools, schemas, and integrations so clients are not unexpectedly broken.',
        },
      ],
    },
    {
      title: 'Common MCP mistakes',
      content:
        'Common mistakes include exposing too many tools, giving tools excessive permissions, trusting external MCP servers without review, failing to validate inputs, assuming tool output is trustworthy, ignoring server failures, and treating protocol connectivity as a replacement for application security.',
      highlights: [
        {
          title: 'Too many tools',
          description:
            'Exposes unnecessary capabilities that increase complexity and can make agent decisions less reliable.',
        },
        {
          title: 'Excessive permissions',
          description:
            'Allows an AI workflow to perform actions beyond what the task actually requires.',
        },
        {
          title: 'Untrusted servers',
          description:
            'Connects external MCP servers without evaluating their behavior, security, or ownership.',
        },
        {
          title: 'No input validation',
          description:
            'Allows model-generated arguments to reach sensitive systems without application-level checks.',
        },
        {
          title: 'Trusting tool output',
          description:
            'Treats external tool results as automatically correct or safe without validation.',
        },
      ],
    },
    {
      title: 'Explore MCP in EDDUU',
      content:
        'EDDUU connects Model Context Protocol with AI Agents, LLMs, RAG, LangGraph, APIs, databases, security, authentication, authorization, and observability.',
    },
  ],
  relatedTechnologyIds: [
    'ai',
    'genai',
    'llms',
    'agents',
    'rag',
    'langgraph',
    'rest-apis',
    'authentication',
    'authorization',
    'security',
    'observability',
  ],
}

export default mcpKnowledge
