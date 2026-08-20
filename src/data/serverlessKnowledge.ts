import type { KnowledgeDefinition } from './knowledge'

export const serverlessKnowledge: KnowledgeDefinition = {
  technologyId: 'serverless',
  slug: 'serverless',
  title: 'Serverless',
  summary:
    'Serverless is a cloud execution model where the cloud provider manages much of the underlying infrastructure, allowing teams to focus primarily on application logic while capacity can scale automatically according to demand.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Serverless?',
      content:
        'Serverless is a cloud computing model in which application teams do not directly manage the underlying servers for the workload. The cloud provider handles infrastructure provisioning, capacity management, and much of the operational infrastructure while developers focus on application code and configuration.',
      highlights: [
        {
          title: 'Serverless',
          description:
            'A cloud execution model that abstracts much of the underlying server management.',
        },
        {
          title: 'Managed infrastructure',
          description:
            'Infrastructure operated by the cloud provider on behalf of the customer.',
        },
        {
          title: 'Elastic scaling',
          description:
            'Automatically increasing or decreasing capacity based on workload demand.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of serverless like using electricity from a utility company. You do not build and maintain the power plant yourself. You simply use the electricity when you need it and pay according to usage. Similarly, serverless lets a team run application workloads without directly managing the underlying servers.',
      highlights: [
        {
          title: 'Power plant',
          description:
            'Comparable to the cloud provider managing the infrastructure.',
        },
        {
          title: 'Electricity',
          description:
            'Comparable to the compute capacity consumed by the application.',
        },
        {
          title: 'Usage-based consumption',
          description:
            'Paying according to actual resource usage for applicable services.',
        },
      ],
    },

    {
      title: 'Serverless Does Not Mean No Servers',
      content:
        'The term serverless does not mean that physical or virtual servers disappear. Servers still run the workload, but the customer does not directly provision and manage those servers in the traditional way. The cloud provider abstracts that operational responsibility.',
      highlights: [
        {
          title: 'Abstraction',
          description:
            'Hiding infrastructure implementation details behind a managed service interface.',
        },
        {
          title: 'Provider-managed server',
          description:
            'A server whose provisioning and operational management is handled largely by the cloud provider.',
        },
        {
          title: 'Customer responsibility',
          description:
            'The application team still owns application code, configuration, security decisions, and workload behavior.',
        },
      ],
    },

    {
      title: 'Why Serverless Matters',
      content:
        'Serverless can reduce infrastructure management overhead, accelerate development, support automatic scaling, and make event-driven architectures easier to implement. It is especially useful when workloads are intermittent, event-driven, or naturally decomposable into independent services.',
      highlights: [
        {
          title: 'Reduced operations',
          description:
            'Less direct responsibility for provisioning and maintaining application servers.',
        },
        {
          title: 'Faster delivery',
          description:
            'Developers can focus on application functionality instead of low-level infrastructure operations.',
        },
        {
          title: 'Event-driven workloads',
          description:
            'Workloads triggered by events, messages, schedules, or requests.',
        },
      ],
    },

    {
      title: 'Serverless Compute',
      content:
        'Serverless compute executes application logic without requiring the customer to manage the underlying servers. Common examples include AWS Lambda, Azure Functions, and Google Cloud Functions.',
      highlights: [
        {
          title: 'AWS Lambda',
          description:
            'AWS serverless compute service for executing functions in response to events or requests.',
        },
        {
          title: 'Azure Functions',
          description:
            'Microsoft Azure serverless compute service.',
        },
        {
          title: 'Google Cloud Functions',
          description:
            'Google Cloud serverless function execution service.',
        },
      ],
    },

    {
      title: 'Function',
      content:
        'A function is a small unit of application logic that can be executed in response to a trigger. Functions are commonly designed around a specific responsibility rather than operating as a continuously running traditional server process.',
      highlights: [
        {
          title: 'Function',
          description:
            'A deployable unit of application logic executed by a serverless runtime.',
        },
        {
          title: 'Handler',
          description:
            'The application entry point invoked when a function executes.',
        },
        {
          title: 'Execution',
          description:
            'A single invocation or run of a serverless function.',
        },
      ],
    },

    {
      title: 'Serverless Trigger',
      content:
        'A trigger causes a serverless function to execute. Triggers can include HTTP requests, scheduled events, file uploads, database changes, queue messages, and events generated by other cloud services.',
      highlights: [
        {
          title: 'HTTP trigger',
          description:
            'A web request that invokes a serverless function.',
        },
        {
          title: 'Event trigger',
          description:
            'An event generated by another service or system that invokes a function.',
        },
        {
          title: 'Scheduled trigger',
          description:
            'A time-based trigger that invokes a function according to a schedule.',
        },
      ],
    },

    {
      title: 'Event-Driven Architecture',
      content:
        'Serverless architectures commonly use events to connect loosely coupled components. Instead of one service directly controlling every downstream operation, it can publish an event and allow independent consumers to process that event.',
      highlights: [
        {
          title: 'Event',
          description:
            'A record indicating that something happened in a system.',
        },
        {
          title: 'Producer',
          description:
            'A component that creates or publishes an event.',
        },
        {
          title: 'Consumer',
          description:
            'A component that receives and processes an event.',
        },
        {
          title: 'Loose coupling',
          description:
            'Reducing direct dependencies between application components.',
        },
      ],
    },

    {
      title: 'Serverless API',
      content:
        'Serverless functions can expose HTTP APIs through managed API gateway or routing services. This can create scalable backend endpoints without maintaining traditional application servers.',
      highlights: [
        {
          title: 'API',
          description:
            'An interface through which software components communicate.',
        },
        {
          title: 'API Gateway',
          description:
            'A managed entry point that can route, secure, throttle, and manage API traffic.',
        },
        {
          title: 'HTTP endpoint',
          description:
            'A network-accessible URL through which an application receives HTTP requests.',
        },
      ],
    },

    {
      title: 'Serverless Storage',
      content:
        'Serverless applications commonly use managed storage services rather than maintaining their own storage servers. Object storage, managed databases, queues, and key-value stores can provide persistent state for stateless functions.',
      highlights: [
        {
          title: 'Object storage',
          description:
            'Storage for files, media, datasets, backups, and other objects.',
        },
        {
          title: 'Managed database',
          description:
            'A database service where the provider handles significant infrastructure operations.',
        },
        {
          title: 'Persistent state',
          description:
            'Data that remains available beyond the lifetime of an individual function execution.',
        },
      ],
    },

    {
      title: 'Stateless Functions',
      content:
        'Serverless functions are commonly designed to be stateless. A function should not assume that local execution memory or local filesystem state will be available during a future invocation. Persistent state should be stored in external managed services.',
      highlights: [
        {
          title: 'Stateless',
          description:
            'A service design where important application state is not dependent on a particular running instance.',
        },
        {
          title: 'External state',
          description:
            'Persistent data stored outside the function execution environment.',
        },
        {
          title: 'Ephemeral environment',
          description:
            'A temporary execution environment that may be created and removed by the platform.',
        },
      ],
    },

    {
      title: 'Cold Start',
      content:
        'A cold start occurs when the platform must initialize a new execution environment before handling a function invocation. This initialization can add latency compared with an already-warm execution environment.',
      highlights: [
        {
          title: 'Cold start',
          description:
            'Latency introduced when a new serverless execution environment must be initialized.',
        },
        {
          title: 'Warm execution',
          description:
            'An invocation handled by an already initialized execution environment.',
        },
        {
          title: 'Startup latency',
          description:
            'Time required to initialize the application runtime before useful processing begins.',
        },
      ],
    },

    {
      title: 'Serverless Scaling',
      content:
        'Serverless platforms can automatically create additional execution environments as demand increases and reduce capacity when demand decreases. This can be valuable for variable workloads but must be designed with concurrency, downstream capacity, and cost limits in mind.',
      highlights: [
        {
          title: 'Automatic scaling',
          description:
            'Automatically adjusting execution capacity according to workload demand.',
        },
        {
          title: 'Concurrency',
          description:
            'The number of requests or executions handled at the same time.',
        },
        {
          title: 'Scaling limit',
          description:
            'A configured or platform-imposed boundary on how much workload can execute concurrently.',
        },
      ],
    },

    {
      title: 'Serverless Concurrency',
      content:
        'Concurrency determines how many function invocations can execute simultaneously. High concurrency can improve throughput but may overload downstream databases, APIs, queues, or other dependencies if those systems cannot scale at the same rate.',
      highlights: [
        {
          title: 'Concurrency',
          description:
            'The number of simultaneous function executions.',
        },
        {
          title: 'Downstream dependency',
          description:
            'A service that the function depends on, such as a database or external API.',
        },
        {
          title: 'Backpressure',
          description:
            'A mechanism for preventing a fast producer from overwhelming a slower downstream system.',
        },
      ],
    },

    {
      title: 'Serverless Queues',
      content:
        'Queues can decouple producers and consumers in serverless systems. A producer places work into a queue and serverless workers process the messages asynchronously according to available capacity.',
      highlights: [
        {
          title: 'Queue',
          description:
            'A system that stores messages until consumers process them.',
        },
        {
          title: 'Asynchronous processing',
          description:
            'Processing work without requiring the initiating request to wait for completion.',
        },
        {
          title: 'Retry',
          description:
            'Attempting to process a failed message again according to defined rules.',
        },
      ],
    },

    {
      title: 'Serverless Retries',
      content:
        'Serverless event processing often includes retry behavior. Teams must understand whether a failed event is retried, how many times it can be retried, and what happens when processing continues to fail.',
      highlights: [
        {
          title: 'Retry policy',
          description:
            'Rules determining when and how failed processing should be attempted again.',
        },
        {
          title: 'Dead-letter destination',
          description:
            'A destination used to retain messages that cannot be successfully processed.',
        },
        {
          title: 'Duplicate processing',
          description:
            'The possibility that the same event may be processed more than once.',
        },
      ],
    },

    {
      title: 'Idempotency in Serverless',
      content:
        'Because event delivery and retries can sometimes result in repeated processing, serverless applications should make important operations idempotent where possible. This prevents duplicate events from causing unintended duplicate business actions.',
      highlights: [
        {
          title: 'Idempotency',
          description:
            'The property that repeating an operation does not produce unintended additional effects.',
        },
        {
          title: 'Duplicate event',
          description:
            'The same logical event being delivered or processed more than once.',
        },
        {
          title: 'Deduplication',
          description:
            'Detecting and preventing duplicate processing when required.',
        },
      ],
    },

    {
      title: 'Serverless Timeouts',
      content:
        'Serverless functions generally have execution-duration limits or timeout configurations. Long-running workloads may need to be redesigned as asynchronous workflows, background jobs, containers, or other suitable compute patterns.',
      highlights: [
        {
          title: 'Timeout',
          description:
            'The maximum execution duration allowed for a function invocation.',
        },
        {
          title: 'Long-running workload',
          description:
            'A workload whose processing duration exceeds the practical limits of a function execution model.',
        },
        {
          title: 'Workflow',
          description:
            'A coordinated sequence of tasks that can manage longer-running business processes.',
        },
      ],
    },

    {
      title: 'Serverless Workflows',
      content:
        'Managed workflow services can coordinate multiple serverless functions and cloud services. This is useful when a business process contains multiple dependent or conditional steps.',
      highlights: [
        {
          title: 'Workflow',
          description:
            'A defined sequence of processing steps and decisions.',
        },
        {
          title: 'State machine',
          description:
            'A model representing states and transitions in a workflow.',
        },
        {
          title: 'Orchestration',
          description:
            'Coordinating multiple components and operations into a controlled process.',
        },
      ],
    },

    {
      title: 'Serverless Security',
      content:
        'Serverless security includes identity and access management, least privilege, secure secret handling, input validation, dependency security, network controls, logging, monitoring, and protection of downstream resources.',
      highlights: [
        {
          title: 'Least privilege',
          description:
            'Giving a function or identity only the permissions required for its responsibilities.',
        },
        {
          title: 'Secret management',
          description:
            'Securely storing and retrieving sensitive values such as API keys and credentials.',
        },
        {
          title: 'Input validation',
          description:
            'Checking incoming data before processing it.',
        },
      ],
    },

    {
      title: 'Serverless Observability',
      content:
        'Observability is critical because serverless infrastructure is abstracted from the application team. Teams need metrics, logs, traces, alerts, invocation information, error rates, duration, concurrency, and dependency visibility to understand production behavior.',
      highlights: [
        {
          title: 'Invocation metric',
          description:
            'A measurement of function executions.',
        },
        {
          title: 'Duration',
          description:
            'The amount of time required for a function execution.',
        },
        {
          title: 'Error rate',
          description:
            'The proportion of executions that fail.',
        },
        {
          title: 'Distributed tracing',
          description:
            'Tracking a request across multiple services and components.',
        },
      ],
    },

    {
      title: 'Serverless Cost Model',
      content:
        'Serverless services often use usage-based pricing based on factors such as invocations, execution duration, memory allocation, requests, data transfer, and associated managed services. Serverless can be highly cost-effective for some workloads but expensive for continuously busy workloads.',
      highlights: [
        {
          title: 'Pay per use',
          description:
            'A pricing model where cost is strongly associated with actual resource consumption.',
        },
        {
          title: 'Execution duration',
          description:
            'The amount of time a function consumes compute capacity.',
        },
        {
          title: 'Cost optimization',
          description:
            'Reducing unnecessary resource consumption while maintaining required performance and reliability.',
        },
      ],
    },

    {
      title: 'Serverless vs Containers',
      content:
        'Serverless functions provide stronger infrastructure abstraction and are well suited to event-driven workloads. Containers provide greater control over runtime, dependencies, networking, and long-running processes. The right choice depends on workload requirements.',
      highlights: [
        {
          title: 'Serverless',
          description:
            'Higher infrastructure abstraction and strong fit for event-driven workloads.',
        },
        {
          title: 'Container',
          description:
            'A packaged application environment providing greater runtime control.',
        },
        {
          title: 'Runtime control',
          description:
            'The degree of control a team has over the application execution environment.',
        },
      ],
    },

    {
      title: 'Serverless vs Kubernetes',
      content:
        'Serverless can be simpler for individual event-driven services, while Kubernetes provides broader control over application orchestration, networking, scheduling, and runtime behavior. Kubernetes usually requires greater platform expertise and operational ownership.',
      highlights: [
        {
          title: 'Kubernetes',
          description:
            'A platform for orchestrating containerized workloads.',
        },
        {
          title: 'Operational overhead',
          description:
            'The engineering effort required to operate and maintain a platform.',
        },
        {
          title: 'Platform control',
          description:
            'The degree of infrastructure and runtime control available to the engineering team.',
        },
      ],
    },

    {
      title: 'Serverless and APIs',
      content:
        'A common serverless architecture combines an API gateway, authentication, serverless functions, managed databases, object storage, queues, and monitoring. This can provide a scalable backend with limited direct infrastructure management.',
      highlights: [
        {
          title: 'API Gateway',
          description:
            'A managed entry point for APIs that can handle routing, authentication, throttling, and other concerns.',
        },
        {
          title: 'Authentication',
          description:
            'The process of verifying the identity of a user or application.',
        },
        {
          title: 'Throttling',
          description:
            'Limiting request rates to protect services and manage capacity.',
        },
      ],
    },

    {
      title: 'Serverless AI Applications',
      content:
        'Serverless is useful for AI application components that are event-driven or request-oriented, such as document ingestion, preprocessing, API orchestration, notifications, lightweight retrieval workflows, and asynchronous job processing. Heavy model inference may require specialized compute depending on model size and latency requirements.',
      highlights: [
        {
          title: 'AI inference',
          description:
            'Running an AI model to generate predictions or responses.',
        },
        {
          title: 'Document processing',
          description:
            'Extracting, transforming, indexing, or enriching information from documents.',
        },
        {
          title: 'AI orchestration',
          description:
            'Coordinating multiple AI and application services into a workflow.',
        },
      ],
    },

    {
      title: 'Serverless AI Example',
      content:
        'A document AI application could upload a document to object storage, trigger a serverless function, extract or preprocess content, place work on a queue, invoke an AI processing service, store the result in a database, and notify the application when processing completes.',
      highlights: [
        {
          title: 'Object storage',
          description:
            'Persistent storage for uploaded documents and generated artifacts.',
        },
        {
          title: 'Queue',
          description:
            'A mechanism for asynchronously managing processing work.',
        },
        {
          title: 'Processing function',
          description:
            'Serverless application logic triggered by document or queue events.',
        },
      ],
    },

    {
      title: 'Serverless Reliability',
      content:
        'Reliable serverless systems require careful handling of retries, duplicate events, timeouts, downstream limits, partial failures, observability, and recovery. Serverless removes some infrastructure responsibilities but does not remove distributed-system complexity.',
      highlights: [
        {
          title: 'Partial failure',
          description:
            'A condition where one component fails while other components continue operating.',
        },
        {
          title: 'Distributed system',
          description:
            'A system composed of multiple independently executing components communicating over a network.',
        },
        {
          title: 'Recovery strategy',
          description:
            'A defined approach for handling failures and restoring correct system behavior.',
        },
      ],
    },

    {
      title: 'Serverless Vendor Lock-In',
      content:
        'Serverless applications can become tightly coupled to provider-specific event systems, APIs, identity models, databases, and workflow services. Teams should evaluate portability requirements before heavily adopting provider-specific capabilities.',
      highlights: [
        {
          title: 'Vendor lock-in',
          description:
            'Dependence on provider-specific technologies that can make migration difficult.',
        },
        {
          title: 'Portability',
          description:
            'The ability to move an application or workload between environments with limited redesign.',
        },
        {
          title: 'Managed service dependency',
          description:
            'Reliance on provider-specific managed services as part of application architecture.',
        },
      ],
    },

    {
      title: 'Serverless for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, serverless should be evaluated as an architectural operating model rather than simply a compute product. Important considerations include workload shape, latency, scale, cost, reliability, security, team expertise, operational ownership, vendor dependency, and delivery velocity.',
      highlights: [
        {
          title: 'Workload shape',
          description:
            'Characteristics such as request frequency, duration, burstiness, and event-driven behavior.',
        },
        {
          title: 'Architecture trade-off',
          description:
            'Choosing between competing requirements such as simplicity, control, cost, latency, and portability.',
        },
        {
          title: 'Operational ownership',
          description:
            'Clearly defining who is responsible for reliability, security, cost, and support.',
        },
        {
          title: 'Delivery velocity',
          description:
            'How quickly teams can safely build, test, and release application capabilities.',
        },
      ],
    },

    {
      title: 'When Not to Use Serverless',
      content:
        'Serverless is not ideal for every workload. Long-running processes, specialized runtime requirements, consistently high-throughput workloads, workloads requiring deep infrastructure control, and applications with strict low-latency requirements may be better suited to containers, virtual machines, or specialized compute.',
      highlights: [
        {
          title: 'Long-running process',
          description:
            'A workload that runs continuously or for durations unsuitable for function execution limits.',
        },
        {
          title: 'Specialized runtime',
          description:
            'A workload requiring specific operating-system or runtime-level control.',
        },
        {
          title: 'High sustained utilization',
          description:
            'A workload that continuously consumes significant compute capacity.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include treating serverless as automatically cheaper, ignoring cold starts, allowing uncontrolled concurrency, failing to design for retries and duplicate events, storing state locally, creating overly fragmented architectures, ignoring downstream bottlenecks, and assuming serverless eliminates operational responsibility.',
      highlights: [
        {
          title: 'Cold-start blindness',
          description:
            'Ignoring initialization latency when designing latency-sensitive workloads.',
        },
        {
          title: 'Uncontrolled concurrency',
          description:
            'Allowing function concurrency to overwhelm downstream dependencies.',
        },
        {
          title: 'Local state dependency',
          description:
            'Assuming temporary function execution state will persist across invocations.',
        },
        {
          title: 'Serverless means no operations',
          description:
            'Incorrectly assuming that serverless removes the need for monitoring, security, reliability, and cost management.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'cloud',
    'docker',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
    'terraform',
    'ansible',
    'helm',
    'aws-lambda',
    'aws-ec2',
    'aws-s3',
    'ci-cd',
    'github-actions',
    'deployment',
    'deployment-strategy',
    'release-management',
    'artifact-management',
    'feature-flags',
    'rollback-strategy',
  ],
}

export default serverlessKnowledge
