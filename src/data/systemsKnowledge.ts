import type { KnowledgeDefinition } from './knowledge'

export const systemsKnowledge: KnowledgeDefinition = {
  technologyId: 'systems',
  slug: 'systems',
  title: 'Systems',
  summary:
    'Systems thinking is the foundation of software architecture. It focuses on understanding how components, users, data, dependencies, constraints, and operational processes work together as one complete system.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is a System?',
      content:
        'A system is a group of connected components that work together to achieve a defined outcome. In software, a system can include users, applications, APIs, databases, queues, caches, external services, infrastructure, and operational processes.',
      highlights: [
        {
          title: 'System',
          description:
            'A collection of connected components working together toward a defined outcome.',
        },
        {
          title: 'Component',
          description:
            'An individual building block that performs a specific responsibility.',
        },
        {
          title: 'Outcome',
          description:
            'The business or technical result that the system is designed to produce.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think about a restaurant. Customers place orders, the cashier records them, the kitchen prepares food, the inventory system tracks ingredients, and delivery staff may deliver the order. No single employee represents the whole restaurant system. The system is the complete set of connected people, processes, information, and resources working together.',
      highlights: [
        {
          title: 'Customer',
          description:
            'The person interacting with the system.',
        },
        {
          title: 'Kitchen',
          description:
            'A component responsible for processing a specific part of the workflow.',
        },
        {
          title: 'Order',
          description:
            'Information flowing between different components.',
        },
        {
          title: 'Restaurant',
          description:
            'The complete system containing all connected components and processes.',
        },
      ],
    },

    {
      title: 'Why Systems Thinking Matters',
      content:
        'A software application rarely operates in isolation. A change in one component can affect databases, APIs, users, infrastructure, cost, security, reliability, and other services. Systems thinking helps teams understand these relationships before making architectural or product decisions.',
      highlights: [
        {
          title: 'Dependency',
          description:
            'A relationship where one component relies on another component or service.',
        },
        {
          title: 'Impact',
          description:
            'The effect a change or failure in one part of a system can have on other parts.',
        },
        {
          title: 'Systems thinking',
          description:
            'Analyzing a system as a connected whole rather than evaluating components independently.',
        },
      ],
    },

    {
      title: 'System Boundary',
      content:
        'A system boundary defines what belongs inside the system being designed or analyzed and what is considered external. Clear boundaries help teams identify responsibilities, dependencies, ownership, and interfaces.',
      highlights: [
        {
          title: 'System boundary',
          description:
            'The conceptual boundary separating the system under consideration from external systems.',
        },
        {
          title: 'Internal component',
          description:
            'A component owned or managed within the defined system boundary.',
        },
        {
          title: 'External dependency',
          description:
            'A service, system, or organization outside the boundary that the system depends on.',
        },
      ],
    },

    {
      title: 'System Components',
      content:
        'A modern software system can contain many types of components: frontend applications, backend services, databases, caches, message queues, object storage, authentication systems, third-party APIs, monitoring systems, and infrastructure.',
      highlights: [
        {
          title: 'Frontend',
          description:
            'The user-facing part of an application.',
        },
        {
          title: 'Backend',
          description:
            'The server-side logic responsible for processing application requests.',
        },
        {
          title: 'Database',
          description:
            'A system used to persist and retrieve structured or semi-structured data.',
        },
        {
          title: 'External service',
          description:
            'A service operated outside the immediate application boundary.',
        },
      ],
    },

    {
      title: 'System Inputs and Outputs',
      content:
        'Every useful system receives inputs, processes them, and produces outputs. Inputs can come from users, APIs, events, sensors, files, or external services. Outputs can include responses, database changes, events, notifications, reports, or business actions.',
      highlights: [
        {
          title: 'Input',
          description:
            'Information or signals entering a system.',
        },
        {
          title: 'Processing',
          description:
            'The logic and operations performed by the system.',
        },
        {
          title: 'Output',
          description:
            'The result produced by the system.',
        },
      ],
    },

    {
      title: 'System Flow',
      content:
        'System flow describes how requests, data, events, or commands move between components. Understanding the flow helps identify bottlenecks, failure points, security boundaries, latency sources, and scaling requirements.',
      highlights: [
        {
          title: 'Request flow',
          description:
            'The path followed by a request through system components.',
        },
        {
          title: 'Data flow',
          description:
            'The movement and transformation of data across components.',
        },
        {
          title: 'Control flow',
          description:
            'The sequence in which system operations or decisions occur.',
        },
      ],
    },

    {
      title: 'Synchronous Systems',
      content:
        'In a synchronous interaction, the caller sends a request and waits for a response before continuing the dependent operation. Synchronous communication is simple to reason about but can create latency and availability dependencies between components.',
      highlights: [
        {
          title: 'Synchronous',
          description:
            'A communication pattern where the caller waits for the dependent operation to produce a response.',
        },
        {
          title: 'Request-response',
          description:
            'A communication model where a request produces a corresponding response.',
        },
        {
          title: 'Dependency chain',
          description:
            'A sequence of components where one operation waits for another.',
        },
      ],
    },

    {
      title: 'Asynchronous Systems',
      content:
        'In asynchronous communication, the initiating component does not necessarily wait for downstream processing to complete. Queues, events, and background workers can decouple components and improve resilience and scalability.',
      highlights: [
        {
          title: 'Asynchronous',
          description:
            'A communication pattern where processing can continue independently of the initiating request.',
        },
        {
          title: 'Queue',
          description:
            'A mechanism for storing work until another component processes it.',
        },
        {
          title: 'Decoupling',
          description:
            'Reducing direct dependency between components so they can operate more independently.',
        },
      ],
    },

    {
      title: 'Stateful Systems',
      content:
        'A stateful component retains information about previous interactions or current conditions. Databases, sessions, workflow engines, and many business systems maintain state.',
      highlights: [
        {
          title: 'State',
          description:
            'Information representing the current or historical condition of a system or entity.',
        },
        {
          title: 'Stateful',
          description:
            'A component whose behavior depends on information retained across operations.',
        },
        {
          title: 'Session',
          description:
            'A period of interaction associated with a user or client and its related state.',
        },
      ],
    },

    {
      title: 'Stateless Systems',
      content:
        'A stateless component does not depend on locally retained client session state between independent requests. Stateless services are generally easier to scale horizontally because requests can be distributed across multiple instances.',
      highlights: [
        {
          title: 'Stateless',
          description:
            'A component designed so that individual requests do not depend on locally retained session state.',
        },
        {
          title: 'Horizontal scaling',
          description:
            'Adding more service instances to handle additional workload.',
        },
        {
          title: 'Shared state',
          description:
            'State stored in a shared system such as a database or cache rather than one application instance.',
        },
      ],
    },

    {
      title: 'System Dependencies',
      content:
        'Dependencies are relationships between components. A service may depend on a database, authentication provider, payment service, queue, cache, or another internal service. Every dependency introduces potential latency, failure, security, and operational considerations.',
      highlights: [
        {
          title: 'Dependency',
          description:
            'A component or service required by another component to complete an operation.',
        },
        {
          title: 'Critical dependency',
          description:
            'A dependency whose failure can prevent an important system capability from functioning.',
        },
        {
          title: 'Dependency map',
          description:
            'A representation of relationships between system components.',
        },
      ],
    },

    {
      title: 'Coupling',
      content:
        'Coupling describes how strongly components depend on each other. High coupling can make changes difficult because one component may require coordinated changes across many other components. Lower coupling generally increases flexibility, but excessive decoupling can add complexity.',
      highlights: [
        {
          title: 'Coupling',
          description:
            'The degree of dependency between components.',
        },
        {
          title: 'Tight coupling',
          description:
            'A strong dependency where changes in one component easily affect another.',
        },
        {
          title: 'Loose coupling',
          description:
            'A design where components interact through controlled interfaces with fewer direct dependencies.',
        },
      ],
    },

    {
      title: 'Cohesion',
      content:
        'Cohesion describes how closely related the responsibilities within a component are. High cohesion generally means a component has a clear purpose rather than containing unrelated responsibilities.',
      highlights: [
        {
          title: 'Cohesion',
          description:
            'The degree to which responsibilities within a component belong together.',
        },
        {
          title: 'High cohesion',
          description:
            'A component focused on closely related responsibilities.',
        },
        {
          title: 'Responsibility',
          description:
            'A clearly defined capability or job owned by a component.',
        },
      ],
    },

    {
      title: 'Interfaces',
      content:
        'Components communicate through interfaces. An interface defines how one component can interact with another without needing to know its internal implementation details.',
      highlights: [
        {
          title: 'Interface',
          description:
            'A defined contract through which components communicate.',
        },
        {
          title: 'API',
          description:
            'A programmatic interface that allows software components to interact.',
        },
        {
          title: 'Contract',
          description:
            'The expected structure, behavior, and rules governing an interaction between components.',
        },
      ],
    },

    {
      title: 'API Boundary',
      content:
        'An API boundary separates one component from another and defines the operations that can be requested. A well-designed API boundary reduces unnecessary knowledge of internal implementation details.',
      highlights: [
        {
          title: 'API boundary',
          description:
            'The interface boundary through which one component accesses another.',
        },
        {
          title: 'Consumer',
          description:
            'The component or client that uses an API.',
        },
        {
          title: 'Provider',
          description:
            'The component or service that implements and exposes the API.',
        },
      ],
    },

    {
      title: 'System Bottleneck',
      content:
        'A bottleneck is a component or resource that limits the throughput or performance of the overall system. Common bottlenecks include databases, network connections, CPU, memory, external APIs, locks, queues, or poorly designed algorithms.',
      highlights: [
        {
          title: 'Bottleneck',
          description:
            'A limiting component that restricts overall system performance or throughput.',
        },
        {
          title: 'Throughput',
          description:
            'The amount of work a system can successfully process during a period.',
        },
        {
          title: 'Resource constraint',
          description:
            'A limitation in CPU, memory, storage, network, connections, or another system resource.',
        },
      ],
    },

    {
      title: 'Latency',
      content:
        'Latency is the time required for an operation to produce a result. System latency can come from network communication, database queries, computation, serialization, external services, queues, and other dependencies.',
      highlights: [
        {
          title: 'Latency',
          description:
            'The elapsed time between an operation being initiated and its result becoming available.',
        },
        {
          title: 'Network latency',
          description:
            'Delay caused by communication across a network.',
        },
        {
          title: 'Processing latency',
          description:
            'Delay caused by computation or processing inside a system.',
        },
      ],
    },

    {
      title: 'Throughput',
      content:
        'Throughput measures how much work a system processes over time. Depending on the workload, throughput may be measured in requests per second, messages per second, transactions per minute, or data processed per second.',
      highlights: [
        {
          title: 'Throughput',
          description:
            'The amount of work successfully processed over a given period.',
        },
        {
          title: 'Requests per second',
          description:
            'A common measurement for HTTP or API workload throughput.',
        },
        {
          title: 'Processing capacity',
          description:
            'The amount of workload a component or system can handle within defined constraints.',
        },
      ],
    },

    {
      title: 'Scalability Thinking',
      content:
        'Scalability is the ability of a system to handle increasing workload while maintaining acceptable performance and reliability. Systems thinking requires understanding which components scale easily and which become bottlenecks as demand grows.',
      highlights: [
        {
          title: 'Scalability',
          description:
            'The ability of a system to handle increasing workload by adding or optimizing resources.',
        },
        {
          title: 'Workload',
          description:
            'The amount and type of work presented to a system.',
        },
        {
          title: 'Scaling strategy',
          description:
            'The approach used to increase system capacity as demand changes.',
        },
      ],
    },

    {
      title: 'Horizontal and Vertical Scaling',
      content:
        'Vertical scaling increases the resources of an existing machine or instance. Horizontal scaling adds more instances. Horizontal scaling can improve resilience and capacity but may require stateless application design, load balancing, shared state management, and distributed coordination.',
      highlights: [
        {
          title: 'Vertical scaling',
          description:
            'Increasing the CPU, memory, or other resources of an existing instance.',
        },
        {
          title: 'Horizontal scaling',
          description:
            'Adding additional instances of a service.',
        },
        {
          title: 'Scale-out',
          description:
            'Another term for increasing capacity by adding more instances.',
        },
      ],
    },

    {
      title: 'Reliability',
      content:
        'Reliability describes how consistently a system performs its intended function over time. Reliable systems account for failures in hardware, software, networks, dependencies, deployments, and human operations.',
      highlights: [
        {
          title: 'Reliability',
          description:
            'The ability of a system to perform its intended function consistently over time.',
        },
        {
          title: 'Failure',
          description:
            'A condition where a component or system does not perform its intended function.',
        },
        {
          title: 'Recovery',
          description:
            'Returning the system to correct operation after a failure.',
        },
      ],
    },

    {
      title: 'Resilience',
      content:
        'Resilience is the ability of a system to continue operating or recover effectively when components fail or conditions become unfavorable. Resilience requires both technical mechanisms and operational processes.',
      highlights: [
        {
          title: 'Resilience',
          description:
            'The ability to withstand failures and recover while maintaining acceptable service behavior.',
        },
        {
          title: 'Degraded mode',
          description:
            'A state where the system continues providing reduced functionality instead of completely failing.',
        },
        {
          title: 'Recovery mechanism',
          description:
            'A technical or operational process used to restore functionality.',
        },
      ],
    },

    {
      title: 'Failure Domains',
      content:
        'A failure domain is a group of resources that may fail together because they share a common dependency or infrastructure boundary. Good architecture tries to avoid placing all critical capacity inside one failure domain.',
      highlights: [
        {
          title: 'Failure domain',
          description:
            'A group of components that can be affected by the same failure.',
        },
        {
          title: 'Shared dependency',
          description:
            'A common resource whose failure can affect multiple components.',
        },
        {
          title: 'Isolation',
          description:
            'Separating resources so a single failure has a limited blast radius.',
        },
      ],
    },

    {
      title: 'Blast Radius',
      content:
        'Blast radius describes how much of a system can be affected when one component fails or a change goes wrong. Reducing blast radius is a core architectural and operational goal.',
      highlights: [
        {
          title: 'Blast radius',
          description:
            'The scope of impact resulting from a failure or change.',
        },
        {
          title: 'Isolation',
          description:
            'Separating components or workloads to limit failure impact.',
        },
        {
          title: 'Containment',
          description:
            'Preventing a problem from spreading across unrelated parts of the system.',
        },
      ],
    },

    {
      title: 'Single Point of Failure',
      content:
        'A single point of failure is a component whose failure can cause unacceptable failure of the system because there is no effective redundant alternative.',
      highlights: [
        {
          title: 'SPOF',
          description:
            'Single Point of Failure: a component whose failure can cause critical system failure.',
        },
        {
          title: 'Redundancy',
          description:
            'Providing multiple components capable of performing a critical responsibility.',
        },
        {
          title: 'Failover',
          description:
            'Switching workload to an alternative component when the primary component fails.',
        },
      ],
    },

    {
      title: 'System State and Data',
      content:
        'System architecture must account for where important state lives, who owns it, how it changes, and how other components access it. Poor state ownership can create synchronization problems and tightly coupled dependencies.',
      highlights: [
        {
          title: 'State ownership',
          description:
            'The component or service responsible for maintaining a particular piece of system state.',
        },
        {
          title: 'Source of truth',
          description:
            'The authoritative location from which a particular piece of information should be obtained.',
        },
        {
          title: 'Synchronization',
          description:
            'Keeping multiple representations of information aligned.',
        },
      ],
    },

    {
      title: 'Data Flow and Ownership',
      content:
        'A strong architecture makes data ownership explicit. Teams should know which component creates data, which component is authoritative, who can modify it, and how other components receive updates.',
      highlights: [
        {
          title: 'Data ownership',
          description:
            'Responsibility for creating, maintaining, and governing a particular data domain.',
        },
        {
          title: 'Mutation',
          description:
            'An operation that changes stored data or state.',
        },
        {
          title: 'Read model',
          description:
            'A representation optimized for retrieving information needed by consumers.',
        },
      ],
    },

    {
      title: 'System Constraints',
      content:
        'Architecture is shaped by constraints such as budget, latency, security, compliance, team skills, delivery deadlines, existing infrastructure, vendor dependencies, data volume, and operational maturity.',
      highlights: [
        {
          title: 'Constraint',
          description:
            'A condition or limitation that restricts available design choices.',
        },
        {
          title: 'Trade-off',
          description:
            'A decision where improving one characteristic requires accepting a cost or limitation in another.',
        },
        {
          title: 'Requirement',
          description:
            'A capability or property the system must satisfy.',
        },
      ],
    },

    {
      title: 'Functional and Non-Functional Requirements',
      content:
        'Functional requirements describe what a system must do. Non-functional requirements describe qualities such as performance, reliability, availability, scalability, security, and maintainability.',
      highlights: [
        {
          title: 'Functional requirement',
          description:
            'A behavior or capability the system must provide.',
        },
        {
          title: 'Non-functional requirement',
          description:
            'A quality or constraint describing how the system should operate.',
        },
        {
          title: 'Quality attribute',
          description:
            'A measurable or observable property such as latency, availability, or security.',
        },
      ],
    },

    {
      title: 'System Evolution',
      content:
        'Software systems evolve as traffic, users, products, teams, and business requirements change. Good architecture supports controlled evolution rather than optimizing only for the current state.',
      highlights: [
        {
          title: 'Evolution',
          description:
            'The process of changing a system over time as requirements and conditions change.',
        },
        {
          title: 'Technical debt',
          description:
            'The future cost created by expedient technical decisions or accumulated complexity.',
        },
        {
          title: 'Migration',
          description:
            'Moving a system, component, or data from one architecture or platform to another.',
        },
      ],
    },

    {
      title: 'Architecture Decision',
      content:
        'An architecture decision is a deliberate choice about how a system should be structured or operated. Good decisions identify the problem, constraints, alternatives, trade-offs, chosen approach, and consequences.',
      highlights: [
        {
          title: 'Architecture decision',
          description:
            'A deliberate technical choice that significantly affects system structure or behavior.',
        },
        {
          title: 'Alternative',
          description:
            'Another viable approach considered before selecting the preferred design.',
        },
        {
          title: 'Consequence',
          description:
            'The benefit, cost, risk, or limitation created by an architecture decision.',
        },
      ],
    },

    {
      title: 'Architecture Trade-offs',
      content:
        'There is rarely one universally best architecture. Teams balance simplicity, scalability, reliability, performance, security, cost, delivery speed, and operational complexity according to the actual business problem.',
      highlights: [
        {
          title: 'Simplicity',
          description:
            'Reducing unnecessary architectural and operational complexity.',
        },
        {
          title: 'Performance',
          description:
            'How efficiently a system responds and processes workload.',
        },
        {
          title: 'Operational complexity',
          description:
            'The effort required to deploy, monitor, secure, troubleshoot, and maintain a system.',
        },
        {
          title: 'Cost',
          description:
            'The financial resources required to build and operate the architecture.',
        },
      ],
    },

    {
      title: 'Systems and Security',
      content:
        'Security is a system property rather than a single feature. Architecture should consider identity, authentication, authorization, encryption, network boundaries, secrets, data protection, logging, monitoring, and failure behavior.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifying who a user or system is.',
        },
        {
          title: 'Authorization',
          description:
            'Determining what an authenticated identity is allowed to do.',
        },
        {
          title: 'Defense in depth',
          description:
            'Using multiple security controls so failure of one control does not expose the entire system.',
        },
      ],
    },

    {
      title: 'Systems and Observability',
      content:
        'Observability helps teams understand what is happening inside a system by using metrics, logs, and traces. Effective observability connects technical signals to business impact and makes failures easier to diagnose.',
      highlights: [
        {
          title: 'Metrics',
          description:
            'Numerical measurements describing system behavior.',
        },
        {
          title: 'Logs',
          description:
            'Recorded events and messages generated by system components.',
        },
        {
          title: 'Traces',
          description:
            'Records showing how a request travels across distributed components.',
        },
      ],
    },

    {
      title: 'Systems and Operations',
      content:
        'Architecture must include operational reality. Deployment, monitoring, incident response, backups, disaster recovery, capacity management, security updates, and ownership are part of the system rather than activities that happen outside it.',
      highlights: [
        {
          title: 'Operations',
          description:
            'The practices required to run and maintain a system in production.',
        },
        {
          title: 'Incident response',
          description:
            'The process of detecting, analyzing, containing, and recovering from production incidents.',
        },
        {
          title: 'Disaster recovery',
          description:
            'Planning and capabilities for restoring systems and data after major failures.',
        },
      ],
    },

    {
      title: 'Systems and Business Goals',
      content:
        'Technical architecture exists to support business outcomes. A technically sophisticated design that does not improve the required business outcome can be worse than a simpler solution.',
      highlights: [
        {
          title: 'Business outcome',
          description:
            'The measurable result the organization wants the system to enable.',
        },
        {
          title: 'Technical capability',
          description:
            'A technical feature or architectural property that enables a business requirement.',
        },
        {
          title: 'Value',
          description:
            'The business benefit produced relative to the investment and risk.',
        },
      ],
    },

    {
      title: 'Systems for AI Applications',
      content:
        'AI systems are also complete systems rather than just models. A production AI platform can include user interfaces, APIs, authentication, model providers, retrieval systems, databases, object storage, queues, observability, evaluation pipelines, safety controls, and human workflows.',
      highlights: [
        {
          title: 'AI system',
          description:
            'A complete application architecture that uses one or more AI capabilities to produce business outcomes.',
        },
        {
          title: 'Model service',
          description:
            'A service responsible for executing an AI model or accessing a model provider.',
        },
        {
          title: 'Retrieval system',
          description:
            'A component that finds relevant information for an AI application before or during generation.',
        },
        {
          title: 'Evaluation',
          description:
            'The process of measuring whether AI outputs satisfy defined quality and safety requirements.',
        },
      ],
    },

    {
      title: 'AI System Example',
      content:
        'Consider an AI customer-support platform. A user sends a question through a web application. An API authenticates the user, a service retrieves relevant knowledge, an AI model generates a response, a safety layer validates the output, and telemetry records latency and quality signals. Each component contributes to the complete system.',
      highlights: [
        {
          title: 'Client',
          description:
            'The application through which the user interacts with the AI system.',
        },
        {
          title: 'Retrieval',
          description:
            'The process of finding relevant information for the AI response.',
        },
        {
          title: 'Generation',
          description:
            'The process in which an AI model produces an output.',
        },
        {
          title: 'Safety layer',
          description:
            'Controls that reduce unsafe, unauthorized, or otherwise unacceptable system behavior.',
        },
      ],
    },

    {
      title: 'Systems Thinking for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, systems thinking means connecting business goals to architecture, engineering constraints, team ownership, delivery risk, operational requirements, and measurable outcomes. The leader does not need to implement every component but must understand how the pieces interact and where the major risks are.',
      highlights: [
        {
          title: 'Architecture thinking',
          description:
            'Understanding how technical components and decisions interact to produce system behavior.',
        },
        {
          title: 'Risk management',
          description:
            'Identifying and reducing technical, operational, security, delivery, and business risks.',
        },
        {
          title: 'Ownership',
          description:
            'Clearly assigning responsibility for components, data, decisions, and operational outcomes.',
        },
        {
          title: 'Trade-off management',
          description:
            'Balancing competing priorities such as speed, cost, reliability, scalability, and complexity.',
        },
      ],
    },

    {
      title: 'How to Analyze Any System',
      content:
        'A practical system-analysis sequence is: identify the users and business outcome, define system boundaries, identify major components, map request and data flows, identify dependencies, understand state ownership, estimate workload, identify bottlenecks and failure points, define reliability and security requirements, and then evaluate architecture alternatives.',
      highlights: [
        {
          title: 'Step 1: Outcome',
          description:
            'Understand what business result the system must achieve.',
        },
        {
          title: 'Step 2: Components',
          description:
            'Identify the major building blocks and their responsibilities.',
        },
        {
          title: 'Step 3: Flow',
          description:
            'Understand how requests, data, and events move through the system.',
        },
        {
          title: 'Step 4: Risks',
          description:
            'Identify bottlenecks, dependencies, failures, security concerns, and operational risks.',
        },
      ],
    },

    {
      title: 'Common Systems Mistakes',
      content:
        'Common mistakes include designing components without understanding the business problem, ignoring non-functional requirements, creating unnecessary complexity, failing to identify single points of failure, overlooking operational ownership, ignoring downstream dependencies, and optimizing for theoretical scale instead of actual workload.',
      highlights: [
        {
          title: 'Premature complexity',
          description:
            'Introducing sophisticated architecture before the problem requires it.',
        },
        {
          title: 'Missing requirements',
          description:
            'Designing without clearly defining functional and non-functional requirements.',
        },
        {
          title: 'Ignoring operations',
          description:
            'Designing architecture without considering deployment, monitoring, incidents, recovery, and maintenance.',
        },
        {
          title: 'Theoretical scaling',
          description:
            'Optimizing for hypothetical future workload instead of measured or reasonably forecasted demand.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'system-design',
    'distributed-systems',
    'microservices',
    'monolith',
    'event-driven-systems',
    'scalability',
    'load-balancing',
    'caching',
    'queues',
    'consistency',
    'availability',
    'fault-tolerance',
    'high-availability',
    'capacity-planning',
    'cloud',
    'docker',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
    'terraform',
    'ansible',
    'serverless',
    'aws-ec2',
    'aws-s3',
    'aws-lambda',
    'cloudflare',
    'nginx',
  ],
}

export default systemsKnowledge
