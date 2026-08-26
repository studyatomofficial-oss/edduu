import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc08Session02: SessionDefinition = {
  id: 'mc08-session-02',
  number: 2,
  stage: 'discover',
  title: 'Compute Architecture - VMs, Containers & Serverless',
  objective:
    'Learn how to choose, operate, scale and secure different cloud compute models by reasoning from workload characteristics, reliability, operational ownership and cost.',
  experiences: [
    {
      id: 'mc08-s02-compute-lesson',
      type: 'lesson',
      title: 'Choosing the Right Compute Model',
      description:
        'Understand compute as an architectural decision rather than memorizing cloud provider products.',
      lesson: {
        opening:
          'EDUUU has a growing learning platform. The same platform contains a student-facing API, a background report generator, an AI processing workload and scheduled administrative jobs. Putting every workload on one large server may appear simple, but different workloads have different traffic patterns, startup requirements, isolation needs, scaling behaviour and operational costs. Cloud compute architecture begins by understanding those differences.',
        sections: [
          {
            heading: '1. Compute is where application work happens',
            explanation:
              'Every application needs somewhere to execute its code. Compute resources provide CPU, memory, operating-system capabilities and execution environments. The architecture question is not whether compute is required, but which compute model provides the right balance of control, isolation, scalability, reliability and operational effort.',
            example:
              'EDUUU needs compute for APIs, background processing, AI orchestration and scheduled jobs, but those workloads do not necessarily need the same execution model.',
          },
          {
            heading: '2. Virtual machines provide strong control',
            explanation:
              'A virtual machine provides an isolated operating-system environment on cloud infrastructure. Teams can control installed software, operating-system configuration, networking and runtime dependencies. This flexibility is useful when applications require operating-system-level control or have legacy dependencies.',
            example:
              'A legacy EDDUU application that requires a specific Linux package, operating-system configuration and long-running process may be easier to migrate to a virtual machine than immediately redesigning it for another compute model.',
          },
          {
            heading: '3. More control also means more responsibility',
            explanation:
              'With a virtual machine, the team generally has more operational responsibility. Operating-system patching, runtime configuration, process management, capacity planning and security hardening remain important responsibilities.',
            example:
              'If the EDDUU API runs on a VM, the team must consider OS patching, disk capacity, process health, instance sizing and replacement when the machine becomes unhealthy.',
          },
          {
            heading: '4. Containers package the application environment',
            explanation:
              'Containers package an application together with its runtime dependencies in a portable unit. They provide a consistent execution environment and can make deployment and scaling more predictable. Containers do not remove infrastructure concerns completely; they change the level at which those concerns are managed.',
            example:
              'The EDDUU API can be packaged with its Python runtime and required dependencies into a container image so the same application artifact can move across development, testing and production environments.',
          },
          {
            heading: '5. Container orchestration solves a different problem',
            explanation:
              'Running one container is relatively simple. Operating hundreds of containers introduces scheduling, service discovery, health checks, rolling deployment, resource allocation and failure-recovery problems. Orchestration platforms exist to manage those operational concerns.',
            example:
              'If EDDUU runs separate API, assessment and AI orchestration services as containers, an orchestration platform can help place workloads, restart unhealthy containers and distribute traffic across healthy instances.',
          },
          {
            heading: '6. Serverless changes the execution model',
            explanation:
              'Serverless compute allows teams to execute application logic without directly managing the underlying servers. The provider handles much of the infrastructure lifecycle while the customer focuses on functions, triggers, permissions and application behaviour.',
            example:
              'Generating a monthly student report may be a good candidate for a serverless function triggered by a scheduled event instead of maintaining a permanently running server only for that job.',
          },
          {
            heading: '7. Serverless is not automatically better',
            explanation:
              'Serverless introduces its own constraints. Startup latency, execution duration, runtime limits, event-driven design and provider-specific integration patterns can influence whether it is appropriate. Architecture decisions should therefore begin with workload characteristics rather than the popularity of a technology.',
            example:
              'A continuously running, latency-sensitive service with complex long-lived connections may be a better fit for containers or VMs than a short-lived function model.',
          },
          {
            heading: '8. Workload shape should drive compute selection',
            explanation:
              'Important workload characteristics include traffic volume, predictability, duration, startup sensitivity, CPU and memory requirements, concurrency, statefulness and deployment frequency. These characteristics provide a more reliable basis for compute decisions than choosing a service because it is familiar.',
            example:
              'A predictable always-on API, an unpredictable event processor and a legacy application may all require different compute strategies even though they belong to the same product.',
          },
          {
            heading: '9. Scaling the application is not the same as scaling the database',
            explanation:
              'Increasing compute instances can improve application capacity, but downstream dependencies can become bottlenecks. A system should therefore be analysed as a chain of capacity constraints rather than assuming that adding more application servers solves every scaling problem.',
            example:
              'EDUUU may increase API instances from four to twenty during examinations, but if all twenty instances send heavy queries to one database, the database can become the new bottleneck.',
          },
          {
            heading: '10. Stateless services are easier to scale',
            explanation:
              'A stateless application instance does not depend on local memory or local disk to preserve user session state between requests. Externalizing sessions and shared state makes it easier to distribute requests across multiple instances and replace unhealthy instances.',
            example:
              'Instead of storing a student session only in one API server memory, EDDUU can use an external session or cache layer so another healthy instance can handle the next request.',
          },
          {
            heading: '11. Health checks turn scaling into an operational system',
            explanation:
              'A compute platform needs a way to distinguish healthy instances from unhealthy ones. Health checks can verify whether an application is responding correctly and allow traffic management or orchestration systems to remove failed instances from service.',
            example:
              'If one EDDUU API container becomes unable to reach a required dependency, the platform should be able to stop sending new traffic to that unhealthy instance.',
          },
          {
            heading: '12. Deployment strategy affects compute architecture',
            explanation:
              'Production deployment is not only about starting a new version. Teams need to control how traffic moves between versions and how failures are reversed. Rolling, blue-green and canary approaches provide different trade-offs between infrastructure cost, deployment speed and risk.',
            example:
              'EDUUU could send a small percentage of student traffic to a new API version first, observe errors and latency, and increase traffic only if the new version behaves correctly.',
          },
          {
            heading: '13. Compute cost depends on utilisation and architecture',
            explanation:
              'Cloud compute cost is influenced by capacity, runtime duration, instance size, scaling behaviour and supporting services. A design that is technically scalable can still be financially inefficient if it maintains excessive idle capacity.',
            example:
              'Running ten large VMs continuously for a workload that normally requires two instances may provide theoretical capacity but create unnecessary recurring cost.',
          },
          {
            heading: '14. Failure must be considered before production',
            explanation:
              'Compute resources can fail. Instances can become unhealthy, containers can crash, deployments can introduce defects and availability zones can experience infrastructure problems. A production architecture should define what happens when individual compute resources fail.',
            example:
              'If one EDDUU application instance crashes during an examination, traffic should move to healthy instances without requiring an engineer to manually restart the failed machine.',
          },
          {
            heading: '15. Choose the simplest model that satisfies the requirements',
            explanation:
              'Architecture should avoid unnecessary operational complexity. A team should not introduce containers, orchestration or serverless functions merely because they are modern technologies. The chosen compute model should satisfy functional, reliability, security, scalability and operational requirements with an appropriate level of complexity.',
            example:
              'A small internal administrative application with predictable traffic may not need a complex container orchestration platform if a simpler managed compute option satisfies its requirements.',
          },
        ],
        realWorldConnection:
          'In real cloud programs, compute selection is often a trade-off between developer velocity, operational ownership, workload characteristics, reliability requirements and cost. Senior technical leaders need to explain why a compute model was selected and what assumptions support that decision.',
        keyIdea:
          'VMs provide control, containers provide portable application environments and serverless reduces direct infrastructure management. The right choice comes from workload characteristics, operational responsibility, scaling behaviour, reliability requirements and cost.',
        recap: [
          'Compute is an architectural capability, not a product name.',
          'VMs provide strong control but require more operational responsibility.',
          'Containers package application runtime dependencies consistently.',
          'Container orchestration becomes important as container fleets grow.',
          'Serverless reduces infrastructure management for suitable event-driven workloads.',
          'Scaling compute does not automatically solve downstream bottlenecks.',
          'Stateless services are generally easier to scale horizontally.',
          'Health checks and deployment strategies are part of production compute architecture.',
          'Cost and operational complexity must be considered alongside technical capability.',
        ],
      },
    },
    {
      id: 'mc08-s02-compute-animation',
      type: 'animation',
      title: 'See Three Compute Models',
      description:
        'Compare virtual machines, containers and serverless execution using the same EDDUU workload.',
      animation: {
        visual: 'cloud',
        opening:
          'The same application requirement can be implemented using different compute models. The important question is what responsibility and behaviour each model creates.',
        parts: [
          {
            id: 'vm-model',
            label: 'Virtual Machine',
            explanation:
              'The application runs inside a virtual operating-system environment with significant customer control.',
            example:
              'EDUUU runs a legacy API that needs custom operating-system packages and long-running processes.',
          },
          {
            id: 'container-model',
            label: 'Container',
            explanation:
              'The application and runtime dependencies are packaged into a portable container image.',
            example:
              'EDUUU packages its API into a container so the same artifact can move consistently through environments.',
          },
          {
            id: 'serverless-model',
            label: 'Serverless',
            explanation:
              'Application logic executes in response to events while the provider manages the underlying execution infrastructure.',
            example:
              'A scheduled EDDUUU report-generation job runs only when a monthly reporting event occurs.',
          },
          {
            id: 'scaling-model',
            label: 'Horizontal Scaling',
            explanation:
              'Multiple execution units can handle workload concurrently instead of relying on one larger machine.',
            example:
              'EDUUU adds additional API instances during examination traffic.',
          },
          {
            id: 'failure-model',
            label: 'Failure Recovery',
            explanation:
              'Production systems should detect unhealthy compute resources and replace or remove them from traffic.',
            example:
              'A failed API instance is removed from the load balancer while healthy instances continue serving students.',
          },
        ],
        closing:
          'Compute architecture is a set of trade-offs between control, portability, operational responsibility, scaling, reliability and cost.',
      },
    },
    {
      id: 'mc08-s02-compute-simulation',
      type: 'simulation',
      title: 'Choose the Compute Model',
      description:
        'Select the most appropriate compute model for different EDDUU workloads.',
      simulation: {
        instruction:
          'Match each workload with the compute approach that best fits its requirements.',
        items: [
          {
            id: 'legacy-api',
            label:
              'A legacy application requires operating-system-level configuration and runs continuously.',
            description:
              'The workload needs strong control and a persistent runtime.',
            correctTargetId: 'vm-target',
          },
          {
            id: 'modern-api',
            label:
              'A modern API should have a portable deployment artifact and run as multiple replicated services.',
            description:
              'The workload benefits from packaging and repeatable deployment.',
            correctTargetId: 'container-target',
          },
          {
            id: 'scheduled-job',
            label:
              'A monthly report should run for a short period when a scheduled event occurs.',
            description:
              'The workload is event-driven and does not require continuous compute.',
            correctTargetId: 'serverless-target',
          },
          {
            id: 'exam-api',
            label:
              'Student API traffic can increase sharply during examinations.',
            description:
              'The architecture needs multiple execution instances that can respond to demand.',
            correctTargetId: 'horizontal-target',
          },
          {
            id: 'failed-instance',
            label:
              'One API instance becomes unhealthy during production traffic.',
            description:
              'The platform must stop routing traffic to the failed instance.',
            correctTargetId: 'health-target',
          },
        ],
        targets: [
          {
            id: 'vm-target',
            label: 'VIRTUAL MACHINE',
            description:
              'Provides strong operating-system and runtime control.',
          },
          {
            id: 'container-target',
            label: 'CONTAINER',
            description:
              'Packages application code and runtime dependencies consistently.',
          },
          {
            id: 'serverless-target',
            label: 'SERVERLESS',
            description:
              'Executes suitable workloads without direct server lifecycle management.',
          },
          {
            id: 'horizontal-target',
            label: 'HORIZONTAL SCALING',
            description:
              'Adds additional execution instances to handle increased workload.',
          },
          {
            id: 'health-target',
            label: 'HEALTH CHECKS',
            description:
              'Detects unhealthy instances and supports safe traffic routing.',
          },
        ],
        successMessage:
          'Correct. Compute selection should begin with workload characteristics and operational requirements rather than cloud product names.',
        failureMessage:
          'Look at the workload requirement first: operating-system control, portable packaging, event-driven execution, changing traffic or failure detection.',
      },
    },
    {
      id: 'mc08-s02-compute-question',
      type: 'question',
      title: 'Compute Architecture Check',
      description:
        'Test whether you can reason about compute architecture under production conditions.',
      question: {
        id: 'mc08-s02-compute-architecture',
        type: 'single-choice',
        question:
          'During an examination, EDDUU increases its API capacity from four instances to twenty, but response times continue increasing because every API instance sends heavy queries to the same database. What is the most accurate architectural conclusion?',
        options: [
          {
            id: 'database-bottleneck',
            text:
              'The database has become a downstream bottleneck, so increasing application compute alone is insufficient.',
            correct: true,
          },
          {
            id: 'compute-only',
            text:
              'The application should keep adding compute instances because more servers always remove bottlenecks.',
            correct: false,
          },
          {
            id: 'serverless-only',
            text:
              'The problem automatically means the application must be rewritten using serverless functions.',
            correct: false,
          },
          {
            id: 'no-scaling',
            text:
              'The system should disable scaling because scaling creates more application instances.',
            correct: false,
          },
        ],
        explanation:
          'Scaling one layer does not automatically scale its dependencies. If many application instances depend heavily on one database, the database can become the limiting resource. Architecture must therefore consider the complete dependency chain.',
      },
    },
  ],
}