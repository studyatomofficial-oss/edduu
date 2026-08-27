import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc12Session06: SessionDefinition = {
  id: 'mc12-session-06',
  number: 6,
  stage: 'practice',
  title: 'Asynchronous Scale - Queues, Workers and Backpressure',
  objective:
    'Understand asynchronous processing, queues, workers, backpressure, retries and idempotent processing for scalable workloads.',
  experiences: [
    {
      id: 'mc12-s06-async-lesson',
      type: 'lesson',
      title: 'Why Synchronous Work Stops Scaling',
      lesson: {
        opening:
          'Not every operation must complete during the user request. Moving suitable work into a queue lets the system absorb bursts and process background work independently.',
        sections: [
          {
            heading: '1. Synchronous work',
            explanation:
              'A synchronous request waits for downstream work to complete before returning.',
            example:
              'A dashboard request may synchronously retrieve data needed immediately by the user.',
          },
          {
            heading: '2. Asynchronous work',
            explanation:
              'Asynchronous work can be accepted now and processed later.',
            example:
              'Generating a large analytics report can happen in a background worker.',
          },
          {
            heading: '3. Queues absorb bursts',
            explanation:
              'A queue can temporarily hold work when incoming demand exceeds immediate processing capacity.',
            example:
              'Thousands of certificate-generation requests can wait in a queue instead of overwhelming application servers.',
          },
          {
            heading: '4. Workers',
            explanation:
              'Workers consume queued jobs and perform the background processing.',
            example:
              'EDDUU workers can process report-generation jobs independently from the API.',
          },
          {
            heading: '5. Backpressure',
            explanation:
              'Backpressure prevents producers from overwhelming downstream consumers.',
            example:
              'The system can limit queue production or worker concurrency when downstream capacity is constrained.',
          },
          {
            heading: '6. Retries',
            explanation:
              'Transient job failures may be retried, but retry policies must be bounded.',
            example:
              'A temporary storage failure may cause a job to retry with increasing delays.',
          },
          {
            heading: '7. Dead-letter handling',
            explanation:
              'Jobs that repeatedly fail may need to be isolated for investigation instead of retrying forever.',
            example:
              'A malformed report job can move to a dead-letter queue after repeated failures.',
          },
          {
            heading: '8. Idempotency',
            explanation:
              'A worker should safely handle duplicate delivery when the messaging system can deliver a job more than once.',
            example:
              'A CourseCompleted event should not create duplicate rewards if processed twice.',
          },
        ],
        realWorldConnection:
          'Queues and workers are common scaling tools for workloads that do not need to finish during the user request.',
        keyIdea:
          'Asynchronous architecture separates request acceptance from background processing and can absorb workload bursts.',
        recap: [
          'Synchronous work keeps the caller waiting.',
          'Queues absorb temporary bursts.',
          'Workers process background jobs.',
          'Backpressure protects downstream capacity.',
          'Retries should be bounded.',
          'Idempotent consumers handle duplicate delivery safely.',
        ],
      },
    },
    {
      id: 'mc12-s06-async-animation',
      type: 'animation',
      title: 'Watch a Queue Absorb a Traffic Burst',
      animation: {
        visual: 'network',
        opening:
          'Follow thousands of incoming jobs as a queue buffers the burst for a controlled worker fleet.',
        parts: [
          {
            id: 'producer',
            label: 'PRODUCERS',
            explanation:
              'Application requests create background jobs.',
          },
          {
            id: 'queue',
            label: 'QUEUE',
            explanation:
              'The queue stores pending work.',
          },
          {
            id: 'workers',
            label: 'WORKERS',
            explanation:
              'Workers consume jobs at a controlled rate.',
          },
          {
            id: 'backpressure',
            label: 'BACKPRESSURE',
            explanation:
              'Processing limits prevent downstream systems from being overwhelmed.',
          },
        ],
        closing:
          'Queues do not remove work. They give the system a controlled place to wait and process work.',
      },
    },
    {
      id: 'mc12-s06-async-simulation',
      type: 'simulation',
      title: 'Design the Background Processing Flow',
      simulation: {
        instruction:
          'Match each workload condition with the correct asynchronous control.',
        items: [
          {
            id: 'burst',
            label: 'Incoming jobs temporarily exceed worker capacity.',
            correctTargetId: 'queue',
          },
          {
            id: 'consumer-limit',
            label: 'Workers must not overload a downstream database.',
            correctTargetId: 'backpressure',
          },
          {
            id: 'transient',
            label: 'A job fails because of a temporary dependency problem.',
            correctTargetId: 'retry',
          },
          {
            id: 'duplicate',
            label: 'The same event can be delivered more than once.',
            correctTargetId: 'idempotent',
          },
        ],
        targets: [
          { id: 'queue', label: 'QUEUE BUFFER' },
          { id: 'backpressure', label: 'BACKPRESSURE' },
          { id: 'retry', label: 'BOUNDED RETRY' },
          { id: 'idempotent', label: 'IDEMPOTENT PROCESSING' },
        ],
        successMessage:
          'Excellent. You can now connect burst absorption with safe background processing.',
        failureMessage:
          'Separate burst handling, downstream protection, transient failure and duplicate delivery.',
      },
    },
    {
      id: 'mc12-s06-async-question',
      type: 'question',
      title: 'Asynchronous Scale Check',
      question: {
        id: 'mc12-s06-async-question',
        type: 'single-choice',
        question:
          'What is a major benefit of putting suitable background work behind a queue?',
        options: [
          {
            id: 'buffer',
            text: 'The queue can absorb bursts and let workers process work at a controlled rate.',
            correct: true,
          },
          {
            id: 'instant',
            text: 'The queue makes every job complete instantly.',
            correct: false,
          },
          {
            id: 'zero-failure',
            text: 'The queue guarantees that no job can ever fail.',
            correct: false,
          },
          {
            id: 'database',
            text: 'The queue removes the need for database capacity planning.',
            correct: false,
          },
        ],
        explanation:
          'Queues provide buffering and decouple producers from consumer processing capacity.',
      },
    },
  ],
}