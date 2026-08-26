import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc08Session08: SessionDefinition = {
  id: 'mc08-session-08',
  number: 8,
  stage: 'challenge',
  title: 'Cloud Architecture Capstone — Design the EDDUUU Platform',
  objective:
    'Design and defend an end-to-end cloud architecture by connecting compute, storage, networking, security, scalability, observability, deployment, cost and disaster recovery decisions to explicit business requirements.',
  experiences: [
    {
      id: 'mc08-s08-capstone-lesson',
      type: 'lesson',
      title: 'From Requirements to a Cloud Architecture',
      description:
        'Turn a realistic product requirement into a cloud architecture and explain every major decision.',
      lesson: {
        opening:
          'The final cloud architecture exercise is not about naming the largest number of cloud services. It is about making a sequence of justified decisions. Start with business requirements, identify constraints, design the request path and data path, protect the system, plan for failure, define operational signals and then evaluate cost.',
        sections: [
          {
            heading: '1. Start with business requirements',
            explanation:
              'Architecture should begin with what the product needs to achieve. Functional requirements describe what the system does. Non-functional requirements describe qualities such as latency, availability, security and recovery.',
            example:
              'EDUUU needs students to access courses, submit assessments and receive results while administrators manage content and teachers monitor performance.',
          },
          {
            heading: '2. Quantify important workload assumptions',
            explanation:
              'Architecture decisions depend on workload. Estimate users, request volume, storage growth, peak traffic and important traffic patterns before selecting capacity.',
            example:
              'EDUUU may have relatively low normal traffic but very high traffic during examination windows. Peak traffic should therefore influence scaling decisions.',
          },
          {
            heading: '3. Separate the request path from the data path',
            explanation:
              'The request path describes how a user request reaches application logic. The data path describes how application components access persistent and temporary data. Separating these paths makes bottlenecks and trust boundaries easier to reason about.',
            example:
              'A student request can travel through DNS, CDN or load balancing, application services and then cache or database resources.',
          },
          {
            heading: '4. Select compute based on workload characteristics',
            explanation:
              'Choose VMs, containers or serverless execution based on control requirements, workload duration, scaling characteristics, operational model and cost.',
            example:
              'A continuously running EDDUUU API may use containerized services, while a small event-driven background operation may be appropriate for serverless execution.',
          },
          {
            heading: '5. Design storage around access patterns',
            explanation:
              'Different data has different storage requirements. Transactional records, files, temporary objects, logs and analytical data should not automatically use the same storage mechanism.',
            example:
              'EDUUU assessment records belong in transactional storage while course video assets are better suited to object storage.',
          },
          {
            heading: '6. Keep the database private',
            explanation:
              'Sensitive data stores should generally be protected by network boundaries and identity controls. Public application traffic should not automatically imply public database access.',
            example:
              'Students can access the public application while the assessment database remains reachable only from approved application services.',
          },
          {
            heading: '7. Add caching where repeated reads justify it',
            explanation:
              'Caching can reduce database load and latency for data that is frequently requested and can tolerate the required consistency model. It introduces invalidation and freshness considerations.',
            example:
              'Frequently accessed course metadata may be cached while highly sensitive transactional assessment writes continue through the authoritative database.',
          },
          {
            heading: '8. Design traffic distribution and failure isolation',
            explanation:
              'Load balancing distributes requests across healthy capacity. Failure-domain separation reduces the chance that one infrastructure failure removes all serving capacity.',
            example:
              'EDUUU can distribute application instances across multiple availability zones behind a load balancer.',
          },
          {
            heading: '9. Define the security boundary explicitly',
            explanation:
              'Identify public resources, private resources, identities, permissions, secrets and network boundaries. Security should be visible in the architecture rather than added after the diagram is complete.',
            example:
              'The EDDUUU web entry point can be public while internal services and databases use restricted network access and service identities.',
          },
          {
            heading: '10. Design for peak demand without paying peak cost all year',
            explanation:
              'Cloud architecture can use elasticity to match capacity with workload. The baseline should support normal operation while scaling mechanisms handle predictable or unexpected peaks.',
            example:
              'EDUUU can maintain baseline API capacity and scale out during examination traffic instead of running peak capacity continuously.',
          },
          {
            heading: '11. Define observability before production',
            explanation:
              'The architecture should specify what must be measured to know whether the system is healthy. Observability requirements should cover technical and business signals.',
            example:
              'EDUUU should monitor API error rate, P95 latency, database health, request volume and assessment submission success.',
          },
          {
            heading: '12. Choose a deployment strategy based on risk',
            explanation:
              'Production release strategy should reflect the impact of failure and the ability to detect and recover from problems.',
            example:
              'A canary release can reduce exposure when EDDUUU introduces a high-impact change to assessment processing.',
          },
          {
            heading: '13. Define recovery objectives',
            explanation:
              'RTO and RPO translate business recovery expectations into technical architecture. Without them, disaster recovery decisions become arbitrary.',
            example:
              'EDUUU leadership should decide how much assessment data can be lost and how quickly the examination platform must recover after a major incident.',
          },
          {
            heading: '14. Distinguish redundancy from backup',
            explanation:
              'Redundant live systems help maintain availability, while backups provide historical recovery. A mature architecture can need both.',
            example:
              'A database replica can help with availability while protected backups provide recovery from accidental deletion or corruption.',
          },
          {
            heading: '15. Evaluate cloud cost as part of architecture',
            explanation:
              'Cost should be estimated before implementation rather than discovered after deployment. Identify the resources that dominate spending and the assumptions behind their usage.',
            example:
              'EDUUU should evaluate compute hours, database capacity, storage growth, data transfer and observability costs before finalizing the architecture.',
          },
          {
            heading: '16. Make trade-offs explicit',
            explanation:
              'There is rarely one universally correct cloud architecture. A strong architecture explains why one option was selected and which downside was accepted.',
            example:
              'EDUUU may choose multi-zone application deployment while keeping a single primary database architecture if the database recovery design meets the agreed business objectives.',
          },
          {
            heading: '17. Identify the remaining risks',
            explanation:
              'A design review should end with known risks, assumptions and validation work. Architecture is a hypothesis that becomes stronger through testing and operational evidence.',
            example:
              'EDUUU may need load testing to validate examination traffic assumptions before production launch.',
          },
          {
            heading: '18. Defend the architecture like a technical leader',
            explanation:
              'The final skill is not drawing the diagram. It is explaining why the architecture satisfies business requirements, where it can fail, how it will be operated and what trade-offs leadership accepted.',
            example:
              'A technical leader should be able to explain why each major component exists and what would happen if it failed or became too expensive.',
          },
        ],
        realWorldConnection:
          'The capstone represents the real work of a cloud technical leader: translating product requirements into architecture, making trade-offs visible and ensuring that security, reliability, operations and cost are considered before implementation.',
        keyIdea:
          'A good cloud architecture is a justified system of decisions. Every major component should exist because a requirement, constraint, risk or operational need makes it necessary.',
        recap: [
          'Start from business requirements and measurable constraints.',
          'Estimate workload before choosing capacity.',
          'Separate request flow, data flow and trust boundaries.',
          'Choose compute and storage based on workload characteristics.',
          'Keep sensitive resources private.',
          'Design scaling and failure isolation together.',
          'Define observability and deployment strategy before production.',
          'Use RTO and RPO to drive recovery architecture.',
          'Treat redundancy and backup as different protections.',
          'Evaluate cost as an architecture constraint.',
          'Make trade-offs and remaining risks explicit.',
        ],
      },
    },
    {
      id: 'mc08-s08-capstone-animation',
      type: 'animation',
      title: 'Assemble the EDDUUU Cloud Architecture',
      description:
        'Build the architecture layer by layer from user traffic to data, security, observability and recovery.',
      animation: {
        visual: 'cloud',
        opening:
          'A complete architecture emerges by connecting responsibilities instead of collecting unrelated cloud services.',
        parts: [
          {
            id: 'entry',
            label: 'USER ENTRY',
            explanation:
              'Users reach the platform through the public application entry point.',
            example:
              'Students access EDDUUU through DNS and the public web layer.',
          },
          {
            id: 'traffic',
            label: 'TRAFFIC LAYER',
            explanation:
              'Traffic is distributed toward healthy application capacity.',
            example:
              'Load balancing distributes requests across application instances.',
          },
          {
            id: 'compute',
            label: 'COMPUTE',
            explanation:
              'Application services process business operations.',
            example:
              'EDUUU runs its core API across multiple application instances.',
          },
          {
            id: 'cache',
            label: 'CACHE',
            explanation:
              'Frequently accessed data can be served from a lower-latency cache when appropriate.',
            example:
              'Course metadata can be cached to reduce repeated database reads.',
          },
          {
            id: 'data',
            label: 'DATA',
            explanation:
              'Authoritative transactional data is persisted in the database layer.',
            example:
              'Assessment results and enrollment records are stored in protected transactional storage.',
          },
          {
            id: 'security',
            label: 'SECURITY',
            explanation:
              'Identity, authorization, secrets and network controls protect the architecture.',
            example:
              'Only approved application identities can reach protected internal resources.',
          },
          {
            id: 'observe',
            label: 'OBSERVABILITY',
            explanation:
              'Metrics, logs and traces provide evidence about system health.',
            example:
              'Operations can investigate latency, errors and dependency failures.',
          },
          {
            id: 'recovery',
            label: 'RECOVERY',
            explanation:
              'Backups, replication and recovery procedures protect against infrastructure and data failures.',
            example:
              'EDUUU can restore data and application capacity according to defined recovery objectives.',
          },
        ],
        closing:
          'The final architecture is not a collection of cloud products. It is a connected system of responsibilities, boundaries, failure protections and measurable objectives.',
      },
    },
    {
      id: 'mc08-s08-capstone-simulation',
      type: 'simulation',
      title: 'Build the Architecture Decision by Decision',
      description:
        'Select architecture components for the EDDUUU platform and connect each choice to a requirement.',
      simulation: {
        instruction:
          'Match each EDDUUU requirement with the architecture decision that best addresses it.',
        items: [
          {
            id: 'public-entry',
            label: 'Students need to access the application from the internet.',
            description:
              'The platform requires a controlled public entry point.',
            correctTargetId: 'entry-target',
          },
          {
            id: 'traffic-scale',
            label: 'Examination traffic can increase rapidly.',
            description:
              'Application capacity must adapt to workload.',
            correctTargetId: 'scale-target',
          },
          {
            id: 'private-data',
            label: 'Assessment records must not be directly exposed to the internet.',
            description:
              'Sensitive data needs a protected access path.',
            correctTargetId: 'private-data-target',
          },
          {
            id: 'failure',
            label: 'One application infrastructure zone may fail.',
            description:
              'The application needs failure isolation.',
            correctTargetId: 'ha-target',
          },
          {
            id: 'recovery',
            label: 'The business needs protection from accidental destructive changes.',
            description:
              'Historical recovery is required.',
            correctTargetId: 'backup-target',
          },
          {
            id: 'operations',
            label: 'The team needs to understand latency and errors in production.',
            description:
              'The system needs operational visibility.',
            correctTargetId: 'observe-target',
          },
          {
            id: 'release',
            label: 'A high-risk application release should not immediately reach every user.',
            description:
              'Production exposure should be controlled.',
            correctTargetId: 'deploy-target',
          },
        ],
        targets: [
          {
            id: 'entry-target',
            label: 'CONTROLLED PUBLIC ENTRY',
            description:
              'DNS and the public traffic layer provide the application entry path.',
          },
          {
            id: 'scale-target',
            label: 'ELASTIC COMPUTE',
            description:
              'Application capacity can increase and decrease with workload.',
          },
          {
            id: 'private-data-target',
            label: 'PRIVATE DATA LAYER',
            description:
              'Sensitive data is accessible only through approved internal paths.',
          },
          {
            id: 'ha-target',
            label: 'MULTI-ZONE HIGH AVAILABILITY',
            description:
              'Critical application capacity is distributed across failure domains.',
          },
          {
            id: 'backup-target',
            label: 'BACKUP & RECOVERY',
            description:
              'Protected recovery points support historical data recovery.',
          },
          {
            id: 'observe-target',
            label: 'OBSERVABILITY',
            description:
              'Metrics, logs and traces expose production behaviour.',
          },
          {
            id: 'deploy-target',
            label: 'CONTROLLED DEPLOYMENT',
            description:
              'Canary or another controlled release strategy limits initial exposure.',
          },
        ],
        successMessage:
          'Correct. Each architecture component exists because a concrete requirement, risk or operational responsibility justified it.',
        failureMessage:
          'Start with the business requirement and ask which architecture capability directly addresses it.',
      },
    },
    {
      id: 'mc08-s08-capstone-question',
      type: 'question',
      title: 'Final Cloud Architecture Defense',
      description:
        'Test whether you can defend an architecture rather than simply name cloud services.',
      question: {
        id: 'mc08-s08-final-defense',
        type: 'single-choice',
        question:
          'Leadership asks why the EDDUUU architecture uses multiple application instances, a private database, observability, backups and a controlled deployment strategy. What is the strongest answer?',
        options: [
          {
            id: 'requirements',
            text:
              'Each decision addresses a specific requirement or risk: capacity and availability, data protection, operational visibility, recovery and controlled release risk.',
            correct: true,
          },
          {
            id: 'services',
            text:
              'These services are popular cloud services, so using them makes the architecture modern.',
            correct: false,
          },
          {
            id: 'maximum',
            text:
              'More cloud services always make a system more reliable.',
            correct: false,
          },
          {
            id: 'vendor',
            text:
              'The architecture should use every available cloud capability so future requirements will never require change.',
            correct: false,
          },
        ],
        explanation:
          'Architecture should be justified by business requirements, constraints and risks. A strong technical leader explains the purpose and trade-off behind each major decision instead of selecting services because they are popular or available.',
      },
    },
  ],
}