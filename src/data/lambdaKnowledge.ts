import type { KnowledgeDefinition } from './knowledge'

export const lambdaKnowledge: KnowledgeDefinition = {
  technologyId: 'aws-lambda',
  slug: 'aws-lambda',
  title: 'AWS Lambda',
  summary:
    'AWS Lambda is a serverless compute service that runs application code in response to events and requests without requiring teams to provision or manage traditional application servers.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is AWS Lambda?',
      content:
        'AWS Lambda is an AWS serverless compute service. You upload application code as a function, define how it should be invoked, and AWS manages the underlying compute infrastructure. Lambda automatically handles much of the provisioning and scaling required to execute the function.',
      highlights: [
        {
          title: 'AWS Lambda',
          description:
            'AWS service for executing application code without directly managing servers.',
        },
        {
          title: 'Function',
          description:
            'A deployable unit of application logic executed by the Lambda runtime.',
        },
        {
          title: 'Invocation',
          description:
            'A request or event that causes a Lambda function to execute.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of Lambda like calling a technician only when you need a specific job done. You do not keep the technician sitting in your office all day. When a request arrives, the technician performs the task, and the service handles the operational logistics behind the scenes.',
      highlights: [
        {
          title: 'Technician',
          description:
            'Comparable to a Lambda function.',
        },
        {
          title: 'Job request',
          description:
            'Comparable to a Lambda invocation or event.',
        },
        {
          title: 'Managed logistics',
          description:
            'Comparable to AWS managing the underlying execution infrastructure.',
        },
      ],
    },

    {
      title: 'Why Lambda Matters',
      content:
        'Lambda is useful for event-driven applications, APIs, asynchronous processing, automation, scheduled jobs, file processing, integrations, and application workflows where continuously running servers are unnecessary or undesirable.',
      highlights: [
        {
          title: 'Event-driven',
          description:
            'Application behavior triggered by events rather than only continuous processes.',
        },
        {
          title: 'Automatic scaling',
          description:
            'AWS can create execution capacity according to incoming workload within configured limits.',
        },
        {
          title: 'Managed compute',
          description:
            'AWS manages much of the infrastructure required to execute the function.',
        },
      ],
    },

    {
      title: 'Lambda Function',
      content:
        'A Lambda function contains the application logic that AWS executes. A function has configuration such as runtime, handler, memory, timeout, environment variables, permissions, and concurrency settings.',
      highlights: [
        {
          title: 'Function',
          description:
            'The deployable Lambda application unit.',
        },
        {
          title: 'Handler',
          description:
            'The function entry point that Lambda invokes.',
        },
        {
          title: 'Runtime',
          description:
            'The managed execution environment in which the function code runs.',
        },
      ],
    },

    {
      title: 'Lambda Runtime',
      content:
        'The Lambda runtime provides the execution environment required by the function. AWS supports several programming language runtimes and also provides mechanisms for using custom runtimes when appropriate.',
      highlights: [
        {
          title: 'Runtime',
          description:
            'The environment responsible for executing Lambda application code.',
        },
        {
          title: 'Supported language',
          description:
            'A programming language supported by the Lambda execution environment.',
        },
        {
          title: 'Custom runtime',
          description:
            'A runtime implementation used when the standard supported runtimes do not meet a requirement.',
        },
      ],
    },

    {
      title: 'Lambda Handler',
      content:
        'The handler identifies the code entry point that Lambda should execute. When a function is invoked, Lambda passes the relevant event information to the handler along with execution context.',
      highlights: [
        {
          title: 'Handler',
          description:
            'The application entry point invoked by Lambda.',
        },
        {
          title: 'Event',
          description:
            'Input data describing what caused the function to execute.',
        },
        {
          title: 'Context',
          description:
            'Runtime information made available to the function during execution.',
        },
      ],
    },

    {
      title: 'Lambda Invocation',
      content:
        'A Lambda invocation is an execution request. Invocations can be synchronous, where the caller waits for a response, or asynchronous, where Lambda accepts the event and processes it independently.',
      highlights: [
        {
          title: 'Synchronous invocation',
          description:
            'The caller waits for the function response.',
        },
        {
          title: 'Asynchronous invocation',
          description:
            'The event is accepted for processing without requiring the caller to wait for completion.',
        },
        {
          title: 'Invocation',
          description:
            'One execution request for a Lambda function.',
        },
      ],
    },

    {
      title: 'Lambda Triggers',
      content:
        'Lambda can be triggered by many AWS services and application events, including API requests, S3 object events, queues, event buses, database streams, and schedules.',
      highlights: [
        {
          title: 'API trigger',
          description:
            'An HTTP or API request that invokes a Lambda function.',
        },
        {
          title: 'S3 trigger',
          description:
            'An S3 object event that invokes a Lambda function.',
        },
        {
          title: 'Queue trigger',
          description:
            'Messages from a supported queue that cause Lambda processing.',
        },
        {
          title: 'Schedule',
          description:
            'A time-based event that invokes a Lambda function.',
        },
      ],
    },

    {
      title: 'Lambda and API Gateway',
      content:
        'API Gateway can expose Lambda functions through HTTP APIs. This is a common serverless backend pattern where API Gateway handles API-facing concerns and Lambda executes application logic.',
      highlights: [
        {
          title: 'API Gateway',
          description:
            'AWS managed service used to create and manage APIs.',
        },
        {
          title: 'HTTP API',
          description:
            'An API interface that receives HTTP requests.',
        },
        {
          title: 'Backend function',
          description:
            'Lambda code that performs the application operation behind an API endpoint.',
        },
      ],
    },

    {
      title: 'Lambda and S3',
      content:
        'S3 can invoke Lambda when objects are created or changed. This enables event-driven workflows such as image processing, document extraction, validation, metadata generation, and AI pipeline initiation.',
      highlights: [
        {
          title: 'Object event',
          description:
            'An event associated with an S3 object operation.',
        },
        {
          title: 'Document processing',
          description:
            'Automated processing performed when a document is uploaded or changed.',
        },
        {
          title: 'Pipeline trigger',
          description:
            'An event that starts a downstream processing workflow.',
        },
      ],
    },

    {
      title: 'Lambda and SQS',
      content:
        'Amazon SQS can act as an event source for Lambda. Lambda polls supported queues and invokes functions to process messages, enabling asynchronous and decoupled workloads.',
      highlights: [
        {
          title: 'SQS',
          description:
            'AWS managed message-queue service.',
        },
        {
          title: 'Message',
          description:
            'A unit of work stored in a queue.',
        },
        {
          title: 'Consumer',
          description:
            'A component that retrieves and processes queue messages.',
        },
      ],
    },

    {
      title: 'Lambda and EventBridge',
      content:
        'Amazon EventBridge can route events to Lambda functions. This supports event-driven architectures where producers publish events and independent consumers respond to them.',
      highlights: [
        {
          title: 'EventBridge',
          description:
            'AWS event-routing service for connecting applications and services through events.',
        },
        {
          title: 'Event bus',
          description:
            'A logical channel through which events are published and routed.',
        },
        {
          title: 'Event rule',
          description:
            'A rule that determines which events should be routed to a target.',
        },
      ],
    },

    {
      title: 'Lambda and DynamoDB',
      content:
        'DynamoDB Streams can trigger Lambda functions when items change. This allows applications to perform asynchronous processing after database updates.',
      highlights: [
        {
          title: 'DynamoDB',
          description:
            'AWS managed NoSQL database service.',
        },
        {
          title: 'DynamoDB Stream',
          description:
            'A stream of item-level changes from a DynamoDB table.',
        },
        {
          title: 'Change processing',
          description:
            'Application logic executed in response to database changes.',
        },
      ],
    },

    {
      title: 'Lambda Environment Variables',
      content:
        'Environment variables allow configuration values to be supplied to a Lambda function without hard-coding them into application code. Sensitive values should generally be handled through appropriate secrets-management mechanisms rather than simply placing secrets in configuration.',
      highlights: [
        {
          title: 'Environment variable',
          description:
            'A configuration value supplied to the function runtime.',
        },
        {
          title: 'Configuration',
          description:
            'Values that influence application behavior without changing application code.',
        },
        {
          title: 'Secret',
          description:
            'Sensitive information such as passwords, tokens, or API keys that requires secure handling.',
        },
      ],
    },

    {
      title: 'Lambda IAM Role',
      content:
        'Lambda functions use IAM execution roles to obtain permissions for accessing AWS services. The execution role should follow least-privilege principles and provide only the permissions required by the function.',
      highlights: [
        {
          title: 'Execution role',
          description:
            'An IAM role assumed by Lambda during function execution.',
        },
        {
          title: 'IAM',
          description:
            'AWS Identity and Access Management service for controlling permissions.',
        },
        {
          title: 'Least privilege',
          description:
            'Granting only the permissions required to perform the function responsibility.',
        },
      ],
    },

    {
      title: 'Lambda Timeout',
      content:
        'Lambda functions have a configured maximum execution duration. Functions that regularly approach their timeout should be investigated for performance issues or redesigned as asynchronous workflows, parallel tasks, containers, or other suitable architectures.',
      highlights: [
        {
          title: 'Timeout',
          description:
            'The maximum allowed execution duration for a Lambda invocation.',
        },
        {
          title: 'Long-running workload',
          description:
            'A workload whose processing duration does not fit well within the function execution model.',
        },
        {
          title: 'Asynchronous processing',
          description:
            'Moving longer work into independently processed background operations.',
        },
      ],
    },

    {
      title: 'Lambda Memory and CPU',
      content:
        'Lambda memory configuration influences the resources available to a function, including CPU allocation. Choosing an appropriate memory size is therefore a performance and cost decision rather than simply a storage decision.',
      highlights: [
        {
          title: 'Memory',
          description:
            'Configured memory capacity available to a Lambda execution.',
        },
        {
          title: 'CPU allocation',
          description:
            'Compute capacity associated with the configured Lambda resource size.',
        },
        {
          title: 'Right-sizing',
          description:
            'Selecting a resource configuration that balances performance and cost.',
        },
      ],
    },

    {
      title: 'Lambda Cold Start',
      content:
        'A cold start occurs when Lambda needs to initialize a new execution environment before processing an invocation. Initialization can add latency, especially for larger packages or applications with substantial startup work.',
      highlights: [
        {
          title: 'Cold start',
          description:
            'Initialization latency when a new Lambda execution environment is created.',
        },
        {
          title: 'Warm invocation',
          description:
            'An invocation handled by an already initialized execution environment.',
        },
        {
          title: 'Initialization',
          description:
            'The work required to prepare a new execution environment before the handler processes the request.',
        },
      ],
    },

    {
      title: 'Lambda Concurrency',
      content:
        'Concurrency controls how many Lambda invocations can execute simultaneously. AWS provides account and function-level concurrency controls that can help protect downstream systems and manage workload capacity.',
      highlights: [
        {
          title: 'Concurrency',
          description:
            'The number of Lambda invocations executing at the same time.',
        },
        {
          title: 'Reserved concurrency',
          description:
            'A function-level concurrency control that can reserve and limit execution capacity.',
        },
        {
          title: 'Downstream protection',
          description:
            'Preventing Lambda scaling from overwhelming databases, APIs, or other dependencies.',
        },
      ],
    },

    {
      title: 'Lambda Retries',
      content:
        'Retry behavior depends on how Lambda is invoked and which event source is being used. Asynchronous events can be retried, while event-source integrations such as queues have their own retry and failure-handling behavior.',
      highlights: [
        {
          title: 'Retry',
          description:
            'Attempting to process failed work again.',
        },
        {
          title: 'Failure handling',
          description:
            'The mechanisms used to deal with events or invocations that cannot be successfully processed.',
        },
        {
          title: 'Dead-letter destination',
          description:
            'A destination used to retain failed asynchronous events for later analysis or processing.',
        },
      ],
    },

    {
      title: 'Lambda Idempotency',
      content:
        'Serverless event processing can result in repeated processing, especially when retries occur. Important Lambda operations should therefore be designed to be idempotent where possible so duplicate events do not create unintended duplicate business effects.',
      highlights: [
        {
          title: 'Idempotency',
          description:
            'The property that repeated execution produces the intended result without unintended duplicate effects.',
        },
        {
          title: 'Duplicate event',
          description:
            'The same logical event being processed more than once.',
        },
        {
          title: 'Deduplication',
          description:
            'Detecting and preventing duplicate processing when required.',
        },
      ],
    },

    {
      title: 'Lambda Layers',
      content:
        'Lambda Layers provide a way to package shared libraries, dependencies, or other supporting content separately from function code. Layers can help reduce duplication across multiple functions.',
      highlights: [
        {
          title: 'Layer',
          description:
            'A separately packaged set of libraries or supporting content that can be attached to Lambda functions.',
        },
        {
          title: 'Shared dependency',
          description:
            'A library or package used by multiple functions.',
        },
        {
          title: 'Dependency reuse',
          description:
            'Avoiding repeated packaging of the same dependency across multiple functions.',
        },
      ],
    },

    {
      title: 'Lambda Versions',
      content:
        'Lambda supports function versions so teams can preserve immutable versions of function code and configuration. This can support controlled deployments and stable references to known application versions.',
      highlights: [
        {
          title: 'Published version',
          description:
            'An immutable version of a Lambda function.',
        },
        {
          title: 'Latest configuration',
          description:
            'The current unpublished function configuration and code state.',
        },
        {
          title: 'Version pinning',
          description:
            'Referencing a specific function version rather than an automatically changing latest version.',
        },
      ],
    },

    {
      title: 'Lambda Aliases',
      content:
        'Lambda aliases provide stable names that point to specific function versions. Aliases are useful for deployment workflows because traffic or callers can reference a stable alias while the underlying version changes.',
      highlights: [
        {
          title: 'Alias',
          description:
            'A named pointer to a specific Lambda function version.',
        },
        {
          title: 'Stable reference',
          description:
            'A name that can remain constant while the underlying function version changes.',
        },
        {
          title: 'Deployment control',
          description:
            'Using aliases to support controlled promotion between function versions.',
        },
      ],
    },

    {
      title: 'Lambda Deployment Strategies',
      content:
        'Lambda supports controlled deployment patterns using versions, aliases, and traffic-shifting capabilities. Teams can gradually move traffic from an existing version to a new version and monitor results before completing the rollout.',
      highlights: [
        {
          title: 'Canary',
          description:
            'Sending a limited portion of traffic to a new function version before broader rollout.',
        },
        {
          title: 'Linear rollout',
          description:
            'Increasing traffic to the new version gradually over defined steps.',
        },
        {
          title: 'Rollback',
          description:
            'Returning traffic to a previous known-good function version.',
        },
      ],
    },

    {
      title: 'Lambda Monitoring',
      content:
        'Amazon CloudWatch provides Lambda metrics, logs, and alarms. Teams should monitor invocations, errors, duration, throttles, concurrency, and business-level signals relevant to the function.',
      highlights: [
        {
          title: 'Invocation metric',
          description:
            'A measurement of how many times a function executes.',
        },
        {
          title: 'Error metric',
          description:
            'A measurement of failed function executions.',
        },
        {
          title: 'Throttle',
          description:
            'A condition where an invocation cannot execute because available concurrency or another execution limit has been reached.',
        },
      ],
    },

    {
      title: 'Lambda Logging',
      content:
        'Lambda integrates with CloudWatch Logs for application and runtime logging. Logs should provide enough context to troubleshoot failures without exposing sensitive information.',
      highlights: [
        {
          title: 'CloudWatch Logs',
          description:
            'AWS-managed log service commonly used for Lambda execution logs.',
        },
        {
          title: 'Structured logging',
          description:
            'Writing logs in a consistent machine-readable structure to improve search and analysis.',
        },
        {
          title: 'Sensitive data',
          description:
            'Information such as credentials or personal data that should not be unnecessarily written to logs.',
        },
      ],
    },

    {
      title: 'Lambda Cost Model',
      content:
        'Lambda pricing is primarily associated with requests and compute duration, with cost influenced by factors such as memory configuration and execution time. Additional AWS services used by the function can generate separate costs.',
      highlights: [
        {
          title: 'Invocation cost',
          description:
            'Cost associated with function execution requests.',
        },
        {
          title: 'Duration cost',
          description:
            'Cost associated with the amount of compute time consumed by executions.',
        },
        {
          title: 'Downstream cost',
          description:
            'Additional charges generated by databases, APIs, storage, networking, or other services used by the function.',
        },
      ],
    },

    {
      title: 'Lambda Security',
      content:
        'Lambda security includes least-privilege IAM roles, secure dependency management, input validation, secret management, encryption, controlled networking, logging, monitoring, and careful handling of event payloads.',
      highlights: [
        {
          title: 'Input validation',
          description:
            'Checking event and request data before processing it.',
        },
        {
          title: 'Dependency security',
          description:
            'Maintaining and scanning third-party libraries used by the function.',
        },
        {
          title: 'Secret management',
          description:
            'Securely storing and retrieving credentials and sensitive configuration.',
        },
      ],
    },

    {
      title: 'Lambda VPC Integration',
      content:
        'Lambda functions can connect to resources inside an Amazon VPC when required. This can enable access to private databases and services, but networking configuration can introduce additional complexity and should be used only when needed.',
      highlights: [
        {
          title: 'VPC',
          description:
            'A logically isolated virtual network in AWS.',
        },
        {
          title: 'Private resource',
          description:
            'A resource intentionally not exposed directly to the public internet.',
        },
        {
          title: 'Network complexity',
          description:
            'Additional configuration required for routing, security, and connectivity.',
        },
      ],
    },

    {
      title: 'Lambda and Step Functions',
      content:
        'AWS Step Functions can coordinate multiple Lambda functions and other AWS services into workflows. This is useful when a business process contains multiple stages, decisions, retries, or parallel operations.',
      highlights: [
        {
          title: 'Step Functions',
          description:
            'AWS workflow orchestration service.',
        },
        {
          title: 'Workflow',
          description:
            'A defined sequence of processing steps and decisions.',
        },
        {
          title: 'Orchestration',
          description:
            'Coordinating multiple services into a controlled process.',
        },
      ],
    },

    {
      title: 'Lambda for AI Applications',
      content:
        'Lambda is useful for AI application orchestration, document processing, preprocessing, asynchronous jobs, API endpoints, notifications, data transformations, and integrations. Heavy model inference may require dedicated GPU compute or managed AI services instead.',
      highlights: [
        {
          title: 'AI orchestration',
          description:
            'Coordinating multiple AI and application services.',
        },
        {
          title: 'Preprocessing',
          description:
            'Preparing data before it is passed to an AI model or downstream processing system.',
        },
        {
          title: 'Model inference',
          description:
            'Executing a trained AI model to generate predictions or responses.',
        },
      ],
    },

    {
      title: 'Lambda AI Pipeline Example',
      content:
        'A document AI workflow could receive an S3 upload event, invoke Lambda to validate the file, place a processing message on SQS, run an AI processing service asynchronously, store results in S3, and update application metadata in a database.',
      highlights: [
        {
          title: 'S3',
          description:
            'AWS object storage used for uploaded documents and generated artifacts.',
        },
        {
          title: 'SQS',
          description:
            'AWS message queue used to decouple asynchronous processing.',
        },
        {
          title: 'AI processing',
          description:
            'The stage where extracted or prepared data is sent through an AI model or service.',
        },
      ],
    },

    {
      title: 'Lambda vs EC2',
      content:
        'Lambda provides stronger infrastructure abstraction and automatic scaling for supported workloads, while EC2 provides direct control over the virtual server and operating system. Lambda is often a good fit for event-driven and request-based workloads; EC2 is often better when teams need long-running processes or deeper infrastructure control.',
      highlights: [
        {
          title: 'Lambda',
          description:
            'Managed serverless function execution.',
        },
        {
          title: 'EC2',
          description:
            'AWS virtual-server compute service with greater infrastructure control.',
        },
        {
          title: 'Control versus abstraction',
          description:
            'The architectural trade-off between infrastructure control and reduced operational responsibility.',
        },
      ],
    },

    {
      title: 'Lambda vs Containers',
      content:
        'Lambda is optimized for function-based execution and event-driven workloads, while containers provide greater control over application runtime, packaging, networking, and long-running processes. Container-based architectures can be more suitable for applications with specialized runtime requirements.',
      highlights: [
        {
          title: 'Container',
          description:
            'A packaged application environment containing code and dependencies.',
        },
        {
          title: 'Runtime control',
          description:
            'The amount of control available over the application execution environment.',
        },
        {
          title: 'Long-running service',
          description:
            'An application process intended to remain continuously available.',
        },
      ],
    },

    {
      title: 'Lambda Reliability',
      content:
        'Reliable Lambda systems require careful handling of retries, duplicate events, timeouts, concurrency, downstream limits, partial failures, monitoring, and recovery. Serverless reduces infrastructure management but does not remove distributed-system design responsibilities.',
      highlights: [
        {
          title: 'Partial failure',
          description:
            'A condition where one part of a distributed workflow fails while other components continue.',
        },
        {
          title: 'Recovery',
          description:
            'Returning a system to correct operation after a failure.',
        },
        {
          title: 'Resilience',
          description:
            'The ability to continue operating or recover when components fail.',
        },
      ],
    },

    {
      title: 'Lambda for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Lambda should be evaluated as a serverless execution building block. Key decisions include workload fit, latency, concurrency, downstream capacity, security, cost, observability, deployment strategy, vendor dependency, and operational ownership.',
      highlights: [
        {
          title: 'Workload fit',
          description:
            'Determining whether the workload characteristics match the Lambda execution model.',
        },
        {
          title: 'Operational ownership',
          description:
            'Understanding which responsibilities remain with the engineering team.',
        },
        {
          title: 'Cost-performance trade-off',
          description:
            'Balancing execution speed, resource configuration, reliability, and cost.',
        },
        {
          title: 'Delivery velocity',
          description:
            'How quickly teams can safely build, test, and deploy application capabilities.',
        },
      ],
    },

    {
      title: 'When Not to Use Lambda',
      content:
        'Lambda is not ideal for every workload. Continuously running services, workloads requiring specialized operating-system control, extremely long-running processing, some high-throughput sustained workloads, or applications requiring specialized hardware may be better suited to EC2, containers, Kubernetes, or dedicated AI compute.',
      highlights: [
        {
          title: 'Long-running workload',
          description:
            'A workload that does not fit naturally into function execution limits.',
        },
        {
          title: 'Specialized hardware',
          description:
            'Compute requirements such as GPUs or other specialized accelerators.',
        },
        {
          title: 'Infrastructure control',
          description:
            'A requirement for deeper operating-system or runtime-level control.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common Lambda mistakes include creating excessively large functions, ignoring cold starts, allowing uncontrolled concurrency, failing to make processing idempotent, storing secrets in code, giving functions broad IAM permissions, ignoring downstream limits, and using Lambda for workloads that require long-running or specialized compute.',
      highlights: [
        {
          title: 'Large function',
          description:
            'A function containing excessive responsibilities or dependencies that increase complexity and startup time.',
        },
        {
          title: 'Uncontrolled concurrency',
          description:
            'Allowing Lambda scaling to overwhelm downstream systems.',
        },
        {
          title: 'Broad IAM permissions',
          description:
            'Giving a function more AWS access than its business responsibility requires.',
        },
        {
          title: 'Wrong workload fit',
          description:
            'Using Lambda for workloads better suited to another compute architecture.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'cloud',
    'aws',
    'aws-ec2',
    'aws-s3',
    'serverless',
    'docker',
    'kubernetes',
    'terraform',
    'ansible',
    'helm',
    'ci-cd',
    'github-actions',
    'deployment',
    'blue-green-deployment',
    'canary-deployment',
    'rolling-deployment',
    'deployment-strategy',
    'release-management',
    'artifact-management',
    'feature-flags',
    'rollback-strategy',
  ],
}

export default lambdaKnowledge
