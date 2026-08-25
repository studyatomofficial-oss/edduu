import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc07Session04: SessionDefinition = {
  id: 'mc07-session-04',
  number: 4,
  stage: 'discover',
  title: 'Data Flow, Storage & Consistency',
  objective:
    'Learn how architects reason about data ownership, request flow, storage choices, consistency and the movement of information through a system.',

  experiences: [
    {
      id: 'mc07-s04-data-lesson',
      type: 'lesson',
      title: 'Follow the Data Through the System',
      description:
        'Understand how architecture decisions become clearer when we trace where information enters, where it is processed, where it is stored and who owns it.',

      lesson: {
        opening:
          'A system is not just boxes and APIs. Information is constantly moving through it. A student logs in, opens a course, submits an assessment and receives a result. Architecture becomes much easier to evaluate when we follow that information from the first request to the final response.',

        sections: [
          {
            heading: '1. Start with the data journey',
            explanation:
              'A data flow describes how information moves between users, components, storage systems and external services. Tracing the journey exposes dependencies that may not be obvious from a component diagram alone.',
            example:
              'An assessment submission may travel from the browser to an API, through validation and assessment processing, into persistent storage and finally back to the student as a result.',
          },
          {
            heading: '2. Identify the system source of truth',
            explanation:
              'A source of truth is the authoritative location from which a piece of business information should be considered correct. Without clear ownership, multiple components may maintain conflicting versions of the same fact.',
            example:
              'If the assessment component owns official scores, another component should not independently maintain a competing score that can become inconsistent.',
          },
          {
            heading: '3. Storage should support the responsibility',
            explanation:
              'Database selection should follow the data and access requirements rather than starting with a technology preference. Consider structure, query patterns, transaction requirements, scale and operational needs.',
            example:
              'Structured assessment records with relationships between students, tests, questions and submissions may fit a relational model well.',
          },
          {
            heading: '4. Transactions protect important state changes',
            explanation:
              'A transaction allows related changes to be treated as one logical operation when the business requires them to succeed or fail together. This prevents partially completed state from becoming visible.',
            example:
              'Recording an assessment submission and its final score may require transactional protection when both pieces of information must remain consistent.',
          },
          {
            heading: '5. Consistency means agreeing on the state',
            explanation:
              'Consistency concerns whether different readers and components observe compatible versions of data. Stronger consistency can simplify some business operations but may increase coordination or reduce flexibility.',
            example:
              'A payment confirmation may require reliable state before granting premium course access, while a non-critical analytics dashboard may tolerate delayed updates.',
          },
          {
            heading: '6. Not every piece of data needs immediate consistency',
            explanation:
              'Different business data has different correctness requirements. Architects should decide where immediate consistency is necessary and where eventual consistency is acceptable.',
            example:
              'A student should see an authoritative assessment result after submission, while a reporting dashboard may update a few seconds later without affecting the core workflow.',
          },
          {
            heading: '7. Caches are copies, not the source of truth',
            explanation:
              'A cache stores data temporarily to reduce latency or database load. Because cached data can become stale, the architecture must define when it can be refreshed, invalidated or safely ignored.',
            example:
              'Frequently accessed course metadata can be cached, but the cache should not become the authoritative record for a studentâ€™s official assessment score.',
          },
          {
            heading: '8. Asynchronous flows change when data becomes visible',
            explanation:
              'When work is moved to a queue or event-driven process, the final result may not be immediately available. The architecture must communicate that behaviour and define how failures and retries are handled.',
            example:
              'After an assessment is submitted, generating a notification can happen asynchronously while the submission itself is recorded immediately.',
          },
          {
            heading: '9. Data ownership affects service boundaries',
            explanation:
              'If multiple components constantly need to directly modify the same data, their boundaries may be poorly designed. Strong ownership usually means other components interact through APIs or events.',
            example:
              'The progress component can request an assessment result through an interface rather than directly editing assessment tables.',
          },
          {
            heading: '10. Follow data before choosing infrastructure',
            explanation:
              'Storage engines, caches, queues and replication strategies should solve identified data and workload problems. Adding infrastructure without understanding the data flow increases complexity without guaranteeing better architecture.',
            example:
              'Before introducing a distributed cache, determine whether database latency is actually the bottleneck and whether the data can safely be cached.',
          },
        ],

        realWorldConnection:
          'Architecture reviews frequently trace one important user journey end-to-end. Following the data reveals latency, ownership, consistency and failure points that are easy to miss when looking only at individual components.',

        keyIdea:
          'Good data architecture answers four questions: who owns the data, where is the source of truth, how does the data move, and what level of consistency does the business actually require?',

        recap: [
          'Trace important data from request to final state.',
          'Give business data a clear owner and source of truth.',
          'Choose storage based on data and access requirements.',
          'Use transactions when related state changes must remain atomic.',
          'Decide explicitly where strong or eventual consistency is appropriate.',
          'Treat caches as temporary copies rather than authoritative data.',
          'Use asynchronous flows when immediate completion is not required.',
        ],
      },
    },

    {
      id: 'mc07-s04-data-animation',
      type: 'animation',
      title: 'Follow a Student Submission',
      description:
        'Visualize how an assessment submission moves through an application and becomes persistent business state.',

      animation: {
        visual: 'concept-flow',
        opening:
          'Think of a parcel moving through a delivery system. You need to know where it entered, who handled it, where it was recorded and when the recipient received it.',

        parts: [
          {
            id: 'request',
            label: 'Student Request',
            explanation:
              'The student sends assessment answers to the application.',
            example:
              'POST assessment submission containing the student answers.',
          },
          {
            id: 'validation',
            label: 'Validation',
            explanation:
              'The application checks identity, assessment state and input validity.',
            example:
              'Verify that the student is allowed to submit the assessment.',
          },
          {
            id: 'processing',
            label: 'Assessment Processing',
            explanation:
              'The assessment responsibility evaluates and records the submission.',
            example:
              'Calculate marks and create the official result.',
          },
          {
            id: 'storage',
            label: 'Persistent Storage',
            explanation:
              'The authoritative result is stored for later retrieval.',
            example:
              'Persist submission and score records.',
          },
          {
            id: 'response',
            label: 'Student Result',
            explanation:
              'The system returns the appropriate result to the student.',
            example:
              'Return the score and relevant assessment status.',
          },
        ],

        closing:
          'Tracing data end-to-end helps architects see where ownership, latency, consistency and failure handling actually matter.',
      },
    },

    {
      id: 'mc07-s04-data-simulation',
      type: 'simulation',
      title: 'Choose the Right Data Strategy',
      description:
        'Match common data situations with the architecture strategy that best fits the requirement.',

      simulation: {
        instruction:
          'Match each situation with the data strategy that best addresses its requirement.',

        items: [
          {
            id: 'score',
            label: 'Official assessment score',
            description:
              'The score must have one authoritative business value.',
            correctTargetId: 'source-target',
          },
          {
            id: 'cache',
            label: 'Frequently requested course metadata',
            description:
              'The information can be temporarily copied to reduce repeated database reads.',
            correctTargetId: 'cache-target',
          },
          {
            id: 'transaction',
            label: 'Submission and score must change together',
            description:
              'The related state changes should not be partially committed.',
            correctTargetId: 'transaction-target',
          },
          {
            id: 'eventual',
            label: 'Analytics dashboard updates',
            description:
              'A small delay is acceptable because the dashboard does not control the core transaction.',
            correctTargetId: 'eventual-target',
          },
        ],

        targets: [
          {
            id: 'source-target',
            label: 'SOURCE OF TRUTH',
            description:
              'Maintain one authoritative owner for the business value.',
          },
          {
            id: 'cache-target',
            label: 'CACHE',
            description:
              'Use a temporary copy to improve access performance.',
          },
          {
            id: 'transaction-target',
            label: 'TRANSACTION',
            description:
              'Keep related state changes atomic when the business requires it.',
          },
          {
            id: 'eventual-target',
            label: 'EVENTUAL CONSISTENCY',
            description:
              'Allow a controlled delay when immediate consistency is not required.',
          },
        ],

        successMessage:
          'Correct. Data decisions should follow business correctness and workload requirements rather than technology fashion.',

        failureMessage:
          'Ask whether the data needs one authoritative owner, faster reads, atomic changes or whether delayed updates are acceptable.',
      },
    },

    {
      id: 'mc07-s04-data-question',
      type: 'question',
      title: 'Data Architecture Check',
      description:
        'Check whether you can reason about consistency and data ownership.',

      question: {
        id: 'mc07-s04-data',
        type: 'single-choice',
        question:
          'Which situation is the strongest candidate for eventual consistency rather than immediate consistency?',
        options: [
          {
            id: 'analytics',
            text:
              'A reporting dashboard that can tolerate a short delay before showing the latest activity.',
            correct: true,
          },
          {
            id: 'payment',
            text:
              'Granting paid course access immediately after a successful payment.',
            correct: false,
          },
          {
            id: 'score',
            text:
              'Recording the official score for a completed examination.',
            correct: false,
          },
          {
            id: 'authorization',
            text:
              'Checking whether a user is currently authorized to access protected data.',
            correct: false,
          },
        ],
        explanation:
          'Analytics commonly tolerates delayed updates because it does not control the core transaction. Payment access, official scores and authorization require stronger guarantees about the current state.',
      },
    },
  ],
}