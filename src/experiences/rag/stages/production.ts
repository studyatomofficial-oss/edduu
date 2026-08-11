import type { StageDefinition } from '../../../types/learning'

export const ragProductionStage: StageDefinition = {
  id: 'rag-stage-08-production',
  number: 8,
  key: 'production',
  title: 'Production',

  objective: {
    statement:
      'Verify the system under realistic conditions and observe production concerns such as latency, cost, and retrieval quality.',
    evidence: [
      'Runs a basic production verification and observes metrics.',
      'Explains one production risk and how it would be monitored.',
    ],
  },

  content: {
    eyebrow: '08 — PRODUCTION',

    title: 'How do we verify the system in production?',

    description:
      'Run a quick verification test to confirm that retrieval and generation work together when the system is exercised. Observe the primary metric: retrieval relevance and response latency.',

    explanation:
      'A production check confirms the system behaves correctly at scale and surfaces problems like increased latency, cost or variable retrieval quality.',

    takeaway:
      'Verification in production requires metrics and monitoring — what worked in a demo may fail under load without observability and evaluation.',
  },

  interactions: [
    {
      id: 'rag-production-verify',
      type: 'click',
      title: 'Run a production verification',
      instruction: 'Trigger a verification run to exercise retrieval and generation together.',
      config: {
        label: 'Run verification',
      },
    },
  ],

  completion: {
    type: 'interaction-complete',
  },
}
