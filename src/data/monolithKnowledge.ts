import type { KnowledgeDefinition } from './knowledge'

export const monolithKnowledge: KnowledgeDefinition = {
  technologyId: 'monolith',
  slug: 'monolith',
  title: 'Monolithic Architecture',
  summary:
    'A monolithic architecture packages the major application capabilities into a single deployable application, while still allowing the internal codebase to be modular.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is a Monolith?',
      content:
        'A monolithic application is a system where the major application capabilities are packaged and deployed as one application unit. This does not mean the code has to be poorly organized. A monolith can have strong internal modules, clear boundaries, and well-designed interfaces.',
      highlights: [
        {
          title: 'Monolith',
          description:
            'An application delivered as one primary deployable unit.',
        },
        {
          title: 'Deployable unit',
          description:
            'The unit that is built, released, and deployed together.',
        },
        {
          title: 'Modular monolith',
          description:
            'A monolith with clear internal modules and boundaries.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a large restaurant operating from one building. The kitchen, billing counter, storage, customer service, and management are different departments inside the same building. They can have clear responsibilities, but the whole restaurant operates as one physical unit. A monolith works similarly: different modules can exist inside one deployable application.',
      highlights: [
        {
          title: 'Building',
          description:
            'Comparable to the monolithic application.',
        },
        {
          title: 'Department',
          description:
            'Comparable to an internal application module.',
        },
        {
          title: 'One building',
          description:
            'Comparable to one deployment unit.',
        },
      ],
    },

    {
      title: 'Monolith Does Not Mean Bad Architecture',
      content:
        'A common misconception is that monolith means messy or poorly designed code. A monolith can be modular, testable, scalable, secure, and highly maintainable. The architectural distinction is primarily about deployment and runtime boundaries, not code quality.',
      highlights: [
        {
          title: 'Modularity',
          description:
            'Separating responsibilities inside the application through well-defined modules.',
        },
        {
          title: 'Deployment boundary',
          description:
            'The boundary determining what must be deployed together.',
        },
        {
          title: 'Code quality',
          description:
            'The maintainability and correctness of the implementation, independent of whether it is monolithic or distributed.',
        },
      ],
    },

    {
      title: 'Typical Monolith Structure',
      content:
        'A monolithic application may contain presentation, API, business logic, authentication, payments, notifications, reporting, and persistence logic within one application. These capabilities can still be organized into internal modules.',
      highlights: [
        {
          title: 'Presentation layer',
          description:
            'Handles user-facing interfaces or incoming application requests.',
        },
        {
          title: 'Business layer',
          description:
            'Contains business rules and application workflows.',
        },
        {
          title: 'Data layer',
          description:
            'Handles persistence and interaction with data stores.',
        },
        {
          title: 'Infrastructure layer',
          description:
            'Handles external systems, messaging, storage, and infrastructure concerns.',
        },
      ],
    },

    {
      title: 'Modular Monolith',
      content:
        'A modular monolith keeps the application in one deployable unit while enforcing strong internal boundaries. This often provides many benefits of modular architecture without immediately introducing distributed-system complexity.',
      highlights: [
        {
          title: 'Module',
          description:
            'A cohesive internal part of the application responsible for a defined capability.',
        },
        {
          title: 'Internal API',
          description:
            'A controlled interface between modules inside the same application.',
        },
        {
          title: 'Boundary enforcement',
          description:
            'Rules preventing modules from creating uncontrolled dependencies on each other.',
        },
      ],
    },

    {
      title: 'Why Start with a Monolith?',
      content:
        'A monolith is often a strong starting architecture because early products have uncertain requirements and small teams. Keeping deployment and runtime architecture simple allows teams to focus on understanding the business domain before introducing distributed complexity.',
      highlights: [
        {
          title: 'Fast development',
          description:
            'Fewer infrastructure boundaries can make early feature development simpler.',
        },
        {
          title: 'Domain discovery',
          description:
            'The business model can evolve before service boundaries are permanently separated.',
        },
        {
          title: 'Lower operational overhead',
          description:
            'Fewer independently operated components reduce infrastructure and monitoring complexity.',
        },
      ],
    },

    {
      title: 'Advantages of Monoliths',
      content:
        'Monoliths can provide simpler development, testing, deployment, debugging, transactions, local communication, and operations. They are especially effective when the system and team are still relatively small.',
      highlights: [
        {
          title: 'Simple deployment',
          description:
            'One primary application needs to be built and deployed.',
        },
        {
          title: 'Simple communication',
          description:
            'Internal module communication usually does not cross a network.',
        },
        {
          title: 'Simple transactions',
          description:
            'A single database transaction can often span multiple modules when required.',
        },
        {
          title: 'Easy local debugging',
          description:
            'Developers can often reproduce workflows within one runtime.',
        },
      ],
    },

    {
      title: 'Disadvantages of Monoliths',
      content:
        'As a monolith grows without strong boundaries, development and deployment can become slower. A small change may require the entire application to be tested and deployed. Poorly structured monoliths can also become difficult for multiple teams to change safely.',
      highlights: [
        {
          title: 'Large deployment',
          description:
            'A change to one capability may require deployment of the whole application.',
        },
        {
          title: 'Code coupling',
          description:
            'Modules become difficult to change independently when their implementations are tightly connected.',
        },
        {
          title: 'Scaling limitation',
          description:
            'The whole application may need to scale even when only one capability requires additional capacity.',
        },
      ],
    },

    {
      title: 'Monolith vs Modular Monolith',
      content:
        'A traditional monolith may allow modules to directly access one another and share implementation details. A modular monolith intentionally enforces boundaries, making it easier to understand ownership and potentially extract a module into a separate service later.',
      highlights: [
        {
          title: 'Traditional monolith',
          description:
            'One application where internal boundaries may be relatively loose.',
        },
        {
          title: 'Modular monolith',
          description:
            'One application with explicit internal module boundaries.',
        },
        {
          title: 'Extraction readiness',
          description:
            'The degree to which a module can later become an independent service without major redesign.',
        },
      ],
    },

    {
      title: 'Monolith vs Microservices',
      content:
        'A monolith optimizes for simplicity and local communication. Microservices optimize for independent deployment, ownership, and scaling. Microservices introduce network calls, distributed state, service discovery, observability, and failure-handling complexity.',
      highlights: [
        {
          title: 'Monolith strength',
          description:
            'Operational and architectural simplicity.',
        },
        {
          title: 'Microservices strength',
          description:
            'Independent deployment and scaling of business capabilities.',
        },
        {
          title: 'Core trade-off',
          description:
            'Microservices exchange local simplicity for distributed independence.',
        },
      ],
    },

    {
      title: 'Monolith vs Distributed System',
      content:
        'A monolith describes how an application is packaged and deployed. A distributed system describes a system whose important components operate across multiple computing resources. A monolith can still participate in a distributed architecture through external databases, queues, cloud services, and APIs.',
      highlights: [
        {
          title: 'Deployment architecture',
          description:
            'Describes how application components are packaged and released.',
        },
        {
          title: 'Distributed system',
          description:
            'Describes coordination among components operating across computing boundaries.',
        },
        {
          title: 'Distributed monolith',
          description:
            'A system split into services but still tightly coupled through deployment, data, or runtime dependencies.',
        },
      ],
    },

    {
      title: 'The Distributed Monolith Anti-Pattern',
      content:
        'A distributed monolith occurs when an application is technically split into multiple services but those services remain tightly coupled. Examples include synchronized deployments, shared databases, long synchronous dependency chains, and frequent coordinated releases.',
      highlights: [
        {
          title: 'Distributed monolith',
          description:
            'Multiple deployable services that still behave like one tightly coupled application.',
        },
        {
          title: 'Coordinated deployment',
          description:
            'A situation where multiple services must be released together for changes to work.',
        },
        {
          title: 'Tight coupling',
          description:
            'Strong dependency that prevents components from evolving independently.',
        },
      ],
    },

    {
      title: 'Database in a Monolith',
      content:
        'A monolith commonly uses one primary database shared by its internal modules. This can simplify transactions and queries, but the application should still maintain logical ownership of data and avoid uncontrolled access between modules.',
      highlights: [
        {
          title: 'Shared database',
          description:
            'A database used by multiple modules inside the same application.',
        },
        {
          title: 'Logical ownership',
          description:
            'A defined module responsibility for specific data even when storage is shared.',
        },
        {
          title: 'Transaction',
          description:
            'A group of database operations that should succeed or fail according to defined atomicity rules.',
        },
      ],
    },

    {
      title: 'Transactions',
      content:
        'One major advantage of a monolith is the ability to use local database transactions across multiple business modules when they share the same database. This can make consistency easier to enforce than in distributed architectures.',
      highlights: [
        {
          title: 'Atomicity',
          description:
            'The transaction either completes all required operations or none of them according to the transaction model.',
        },
        {
          title: 'Local transaction',
          description:
            'A transaction executed within one transactional resource such as a database.',
        },
        {
          title: 'Consistency',
          description:
            'The guarantee that the database moves between valid states according to defined rules.',
        },
      ],
    },

    {
      title: 'Scaling a Monolith',
      content:
        'A monolith can scale horizontally by running multiple instances behind a load balancer. This is often sufficient for many applications. The challenge is that the whole application is replicated even if only one internal capability is under heavy load.',
      highlights: [
        {
          title: 'Horizontal scaling',
          description:
            'Running additional application instances to increase capacity.',
        },
        {
          title: 'Vertical scaling',
          description:
            'Increasing CPU, memory, or other resources of an existing instance.',
        },
        {
          title: 'Load balancer',
          description:
            'A component that distributes incoming traffic across application instances.',
        },
      ],
    },

    {
      title: 'Stateless Monolith',
      content:
        'A stateless monolith stores persistent state in external systems such as databases, caches, or object storage rather than relying on local instance memory. This makes horizontal scaling easier.',
      highlights: [
        {
          title: 'Stateless application',
          description:
            'An application that does not require persistent user or business state to remain on a particular instance.',
        },
        {
          title: 'External state',
          description:
            'Persistent state stored outside the application process.',
        },
        {
          title: 'Session store',
          description:
            'A shared system used to persist session information across application instances.',
        },
      ],
    },

    {
      title: 'Caching in a Monolith',
      content:
        'A monolith can use in-memory caching for local performance or a distributed cache when multiple instances need shared cached state. Cache strategy should consider invalidation, freshness, memory limits, and failure behavior.',
      highlights: [
        {
          title: 'In-memory cache',
          description:
            'Cached data stored in the memory of an application instance.',
        },
        {
          title: 'Distributed cache',
          description:
            'A shared cache accessible by multiple application instances.',
        },
        {
          title: 'Cache invalidation',
          description:
            'Removing or updating cached data after the underlying data changes.',
        },
      ],
    },

    {
      title: 'Background Jobs',
      content:
        'A monolith does not have to perform every operation synchronously. Background workers and queues can move slow or non-critical work outside the user request path while keeping the primary application architecture simple.',
      highlights: [
        {
          title: 'Background job',
          description:
            'Work performed asynchronously outside the immediate user request.',
        },
        {
          title: 'Worker',
          description:
            'A process that consumes and executes background work.',
        },
        {
          title: 'Queue',
          description:
            'A mechanism for storing work until a worker processes it.',
        },
      ],
    },

    {
      title: 'Modular Boundaries',
      content:
        'A healthy modular monolith establishes rules for module ownership, dependencies, data access, APIs, and events. Modules should communicate through explicit interfaces rather than reaching directly into one another’s implementation details.',
      highlights: [
        {
          title: 'Module interface',
          description:
            'A defined mechanism through which one module interacts with another.',
        },
        {
          title: 'Dependency rule',
          description:
            'A rule defining which modules may depend on which other modules.',
        },
        {
          title: 'Encapsulation',
          description:
            'Keeping implementation details internal to a module.',
        },
      ],
    },

    {
      title: 'Domain Modules',
      content:
        'A useful modular monolith can organize code around business domains such as users, orders, payments, inventory, notifications, and reporting rather than only technical layers.',
      highlights: [
        {
          title: 'Domain module',
          description:
            'A module organized around a specific business capability.',
        },
        {
          title: 'Business rule',
          description:
            'A rule defining how a business process should behave.',
        },
        {
          title: 'Technical layer',
          description:
            'A structure organized around implementation concerns such as controllers, services, and repositories.',
        },
      ],
    },

    {
      title: 'Internal APIs',
      content:
        'Modules can expose internal interfaces that behave like APIs even though calls remain inside the same process. This creates explicit contracts and reduces accidental coupling.',
      highlights: [
        {
          title: 'Internal API',
          description:
            'An explicit interface used by modules within the same application.',
        },
        {
          title: 'Contract',
          description:
            'The expected inputs, outputs, and behavior of an interface.',
        },
        {
          title: 'Encapsulation',
          description:
            'Preventing other modules from depending on internal implementation details.',
        },
      ],
    },

    {
      title: 'Events Inside a Monolith',
      content:
        'A modular monolith can use internal domain events to decouple modules. For example, a successful order operation can emit an OrderCreated event that triggers notifications or analytics without making the order module directly responsible for those concerns.',
      highlights: [
        {
          title: 'Domain event',
          description:
            'A record that something meaningful happened within a business domain.',
        },
        {
          title: 'Event handler',
          description:
            'A component that reacts to a published event.',
        },
        {
          title: 'Decoupling',
          description:
            'Reducing direct dependency between modules.',
        },
      ],
    },

    {
      title: 'Deployment of a Monolith',
      content:
        'A monolith can still have a modern automated delivery pipeline. Source code can be built, tested, scanned, packaged into an artifact or container image, deployed through staging, verified, and promoted to production.',
      highlights: [
        {
          title: 'Build',
          description:
            'Converting source code into a deployable application artifact.',
        },
        {
          title: 'Artifact',
          description:
            'A versioned output produced by a build and used for deployment.',
        },
        {
          title: 'Promotion',
          description:
            'Moving a validated version through environments toward production.',
        },
      ],
    },

    {
      title: 'Deployment Strategies',
      content:
        'Monoliths can use rolling, blue-green, or canary deployment strategies. The strategy depends on infrastructure capabilities, traffic requirements, rollback needs, and acceptable release risk.',
      highlights: [
        {
          title: 'Rolling deployment',
          description:
            'Gradually replacing old instances with a new application version.',
        },
        {
          title: 'Blue-green deployment',
          description:
            'Maintaining two environments and switching traffic from the old version to the new version.',
        },
        {
          title: 'Canary deployment',
          description:
            'Sending a small portion of traffic to the new version before increasing exposure.',
        },
      ],
    },

    {
      title: 'Rollback',
      content:
        'A monolithic deployment can often be rolled back relatively simply because the application is one primary deployable unit. Database migrations can complicate rollback and should be designed for compatibility when possible.',
      highlights: [
        {
          title: 'Rollback',
          description:
            'Returning the application to a previously known-good version.',
        },
        {
          title: 'Database migration',
          description:
            'A controlled change to database structure or data.',
        },
        {
          title: 'Backward-compatible migration',
          description:
            'A migration designed so old and new application versions can temporarily coexist safely.',
        },
      ],
    },

    {
      title: 'CI/CD for Monoliths',
      content:
        'A monolith can have an efficient CI/CD pipeline with automated tests, security checks, artifact creation, deployment verification, and rollback. The existence of one deployable application does not require manual delivery.',
      highlights: [
        {
          title: 'Continuous integration',
          description:
            'Frequently integrating changes and automatically validating them.',
        },
        {
          title: 'Continuous delivery',
          description:
            'Keeping the application continuously ready for release.',
        },
        {
          title: 'Deployment automation',
          description:
            'Using automated systems to deliver validated application versions.',
        },
      ],
    },

    {
      title: 'Testing a Monolith',
      content:
        'Monoliths can benefit from unit tests, module-level tests, integration tests, API tests, and end-to-end tests. Clear module boundaries reduce the need for every test to exercise the entire application.',
      highlights: [
        {
          title: 'Unit test',
          description:
            'A test focused on a small unit of behavior.',
        },
        {
          title: 'Integration test',
          description:
            'A test verifying interaction between application components or external systems.',
        },
        {
          title: 'End-to-end test',
          description:
            'A test validating a complete business workflow.',
        },
      ],
    },

    {
      title: 'Observability',
      content:
        'A monolith still requires production observability. Metrics, structured logs, traces, health checks, error tracking, and business-level indicators are needed to understand performance and failures.',
      highlights: [
        {
          title: 'Application metrics',
          description:
            'Measurements such as request rate, latency, error rate, CPU, and memory usage.',
        },
        {
          title: 'Structured logging',
          description:
            'Logs emitted in a machine-readable format for search and analysis.',
        },
        {
          title: 'Health check',
          description:
            'An endpoint or mechanism used to determine whether the application is functioning correctly.',
        },
      ],
    },

    {
      title: 'Security',
      content:
        'A monolith still needs authentication, authorization, secure secrets management, input validation, encryption, audit logging, dependency scanning, and secure configuration. Fewer network boundaries do not eliminate application security risks.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifying who a user or system identity is.',
        },
        {
          title: 'Authorization',
          description:
            'Determining what an authenticated identity is allowed to do.',
        },
        {
          title: 'Secrets management',
          description:
            'Securely storing and providing sensitive credentials and keys.',
        },
      ],
    },

    {
      title: 'When Monolith is a Good Choice',
      content:
        'A monolith is often appropriate for early-stage products, small teams, straightforward domains, systems with strong transactional requirements, and organizations that do not yet need independent service scaling or deployment.',
      highlights: [
        {
          title: 'Small team',
          description:
            'A team where the coordination cost of many services would outweigh the benefits.',
        },
        {
          title: 'Simple domain',
          description:
            'A product whose business boundaries are still relatively straightforward.',
        },
        {
          title: 'Strong transactions',
          description:
            'Workflows where atomic operations across several modules are important.',
        },
      ],
    },

    {
      title: 'When a Monolith Starts Hurting',
      content:
        'Warning signs include very slow deployments, frequent unrelated regressions, teams blocking each other, inability to scale individual workloads, unclear module ownership, large build times, and a codebase where every change requires understanding unrelated areas.',
      highlights: [
        {
          title: 'Deployment bottleneck',
          description:
            'Release processes become slow or risky because the entire application must move together.',
        },
        {
          title: 'Team coupling',
          description:
            'Teams frequently interfere with one another’s changes or releases.',
        },
        {
          title: 'Scaling mismatch',
          description:
            'One workload needs significantly more capacity while the rest of the application does not.',
        },
      ],
    },

    {
      title: 'Migration to Microservices',
      content:
        'If the monolith needs to evolve into independently deployable services, migration should normally be incremental. Identify a strong business boundary, establish an interface, extract the capability, route traffic gradually, monitor it, and then reduce the old implementation.',
      highlights: [
        {
          title: 'Strangler pattern',
          description:
            'Incrementally replacing parts of a legacy application with new services.',
        },
        {
          title: 'Extraction',
          description:
            'Moving a defined business capability into an independent service.',
        },
        {
          title: 'Incremental migration',
          description:
            'Changing architecture step by step rather than performing a complete rewrite.',
        },
      ],
    },

    {
      title: 'Do Not Rewrite Everything',
      content:
        'A full rewrite is often risky because it replaces a system whose behavior is already understood with a new system whose behavior may contain unknown defects. Incremental extraction provides smaller feedback loops and allows the existing system to continue serving users.',
      highlights: [
        {
          title: 'Big-bang rewrite',
          description:
            'Replacing the entire existing application with a new implementation in one large effort.',
        },
        {
          title: 'Incremental delivery',
          description:
            'Delivering architectural changes in small, verifiable steps.',
        },
        {
          title: 'Risk reduction',
          description:
            'Reducing the size and impact of each architectural change.',
        },
      ],
    },

    {
      title: 'Monolith for AI Products',
      content:
        'An AI product does not automatically need microservices. An early AI application can use a modular monolith containing authentication, prompt management, RAG orchestration, model routing, user management, billing, and analytics modules while using external infrastructure for databases, vector search, queues, and model APIs.',
      highlights: [
        {
          title: 'AI modular monolith',
          description:
            'A single application containing clearly separated AI product capabilities.',
        },
        {
          title: 'Model routing',
          description:
            'Selecting an appropriate model or provider for an AI request.',
        },
        {
          title: 'RAG orchestration',
          description:
            'Coordinating retrieval and generation steps within an AI workflow.',
        },
      ],
    },

    {
      title: 'AI Voice Platform Example',
      content:
        'An early AI voice-agent platform could begin as a modular monolith containing tenant management, agent configuration, call orchestration, provider integration, billing, analytics, and administration. Real-time constraints and workload growth can later justify extracting selected capabilities.',
      highlights: [
        {
          title: 'Tenant management',
          description:
            'Managing organizations, users, and tenant-specific configuration.',
        },
        {
          title: 'Call orchestration',
          description:
            'Coordinating the steps required during an AI voice interaction.',
        },
        {
          title: 'Provider integration',
          description:
            'Connecting the platform with telephony, speech, and AI model providers.',
        },
      ],
    },

    {
      title: 'Monolith and Technical Leadership',
      content:
        'For technical leaders, the important question is not “monolith or microservices?” in isolation. The right question is which architecture best supports business goals, team size, delivery speed, reliability, scalability, and future evolution with acceptable complexity.',
      highlights: [
        {
          title: 'Architecture fit',
          description:
            'How well an architecture matches current business and engineering requirements.',
        },
        {
          title: 'Complexity budget',
          description:
            'The amount of architectural and operational complexity an organization can realistically manage.',
        },
        {
          title: 'Evolution path',
          description:
            'A planned route for changing architecture as requirements and scale evolve.',
        },
      ],
    },

    {
      title: 'Interview Questions',
      content:
        'Interviewers commonly ask: What is a monolith? Is a monolith bad? What is a modular monolith? When would you choose a monolith over microservices? How would you scale a monolith? How would you migrate a monolith to microservices? What is a distributed monolith? How do you maintain module boundaries?',
      highlights: [
        {
          title: 'Modular monolith',
          description:
            'A frequent interview topic because it demonstrates architectural maturity beyond the simple monolith-versus-microservices debate.',
        },
        {
          title: 'Migration strategy',
          description:
            'Interviewers often want an incremental extraction approach rather than a big-bang rewrite.',
        },
        {
          title: 'Distributed monolith',
          description:
            'A key concept for recognizing when microservices have created complexity without true independence.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I would not choose microservices simply because the application is expected to grow. If the team and domain are still small, I would prefer a modular monolith with strong boundaries. It gives us simpler deployment and transactions while preserving an evolution path. I would extract services only when independent scaling, deployment, ownership, or fault isolation provides a clear business benefit.”',
      highlights: [
        {
          title: 'Requirement-driven decision',
          description:
            'Select architecture based on actual requirements rather than popularity.',
        },
        {
          title: 'Evolution path',
          description:
            'Design the monolith so future extraction remains possible if justified.',
        },
        {
          title: 'Business benefit',
          description:
            'Require a measurable reason before accepting the complexity of distributed services.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include assuming monolith means bad architecture, assuming microservices are always superior, creating a distributed monolith through tightly coupled services, ignoring internal module boundaries, and rewriting the entire system without a staged migration plan.',
      highlights: [
        {
          title: 'Monolith equals bad',
          description:
            'Confusing deployment style with code quality.',
        },
        {
          title: 'Microservices by default',
          description:
            'Introducing distributed complexity without a clear business or engineering requirement.',
        },
        {
          title: 'Big-bang rewrite',
          description:
            'Replacing the entire system in one risky migration.',
        },
      ],
    },

    {
      title: 'Leadership Perspective',
      content:
        'For an AI Engineering Manager, AI Product Manager, Technical Product Manager, or Senior TPM, the strongest architectural judgment is knowing when simplicity is an advantage. A well-designed modular monolith can be an excellent production architecture, and moving to microservices should be treated as an investment that needs a clear return.',
      highlights: [
        {
          title: 'Architectural judgment',
          description:
            'Choosing the simplest architecture that satisfies the required business and technical constraints.',
        },
        {
          title: 'Delivery velocity',
          description:
            'Considering how architecture affects the team’s ability to safely deliver business value.',
        },
        {
          title: 'Operational maturity',
          description:
            'Considering whether the organization can reliably operate the complexity introduced by distributed services.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'systems',
    'system-design',
    'distributed-systems',
    'microservices',
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
    'docker',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
    'terraform',
    'github-actions',
    'ci-cd',
    'deployment',
    'blue-green-deployment',
    'canary-deployment',
    'rolling-deployment',
    'deployment-strategy',
    'feature-flags',
    'rollback-strategy',
  ],
}

export default monolithKnowledge
