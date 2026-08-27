import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc12Session04: SessionDefinition = {
  id: 'mc12-session-04',
  number: 4,
  stage: 'guided',
  title: 'Database Performance - Indexes, Query Plans and Connection Pools',
  objective:
    'Understand how database access becomes a scalability bottleneck and how indexes, query plans, pagination and connection pooling improve performance.',
  experiences: [
    {
      id: 'mc12-s04-database-lesson',
      type: 'lesson',
      title: 'Making PostgreSQL Work Efficiently',
      lesson: {
        opening:
          'A fast API can still be slow if every request waits on an inefficient database query. Database performance requires understanding how queries are executed.',
        sections: [
          {
            heading: '1. Indexes',
            explanation:
              'An index provides an additional data structure that can help the database find rows without scanning the entire table.',
            example:
              'An index on student_id can accelerate repeated lookups for a student.',
          },
          {
            heading: '2. Query plans',
            explanation:
              'A query plan shows how PostgreSQL intends to execute a query.',
            example:
              'EXPLAIN can reveal whether PostgreSQL is using an index or scanning many rows.',
          },
          {
            heading: '3. Full table scans',
            explanation:
              'Scanning a large table can become expensive as data grows.',
            example:
              'Searching millions of learning events without a suitable index can increase latency.',
          },
          {
            heading: '4. Composite indexes',
            explanation:
              'Indexes can cover multiple columns when query patterns commonly filter or sort using those columns.',
            example:
              'A query filtering by student_id and event_date may benefit from an appropriate composite index.',
          },
          {
            heading: '5. Pagination',
            explanation:
              'Returning enormous result sets increases database work, network transfer and application memory usage.',
            example:
              'EDDUU should paginate a large learning-event history instead of returning every event at once.',
          },
          {
            heading: '6. Connection pooling',
            explanation:
              'Opening a new database connection for every request can be expensive. Pools reuse a controlled set of connections.',
            example:
              'Multiple API replicas can share carefully sized database connection pools.',
          },
          {
            heading: '7. N+1 queries',
            explanation:
              'Repeated queries inside a loop can create unexpectedly large database workloads.',
            example:
              'Loading one course query and then one instructor query per course can produce an N+1 pattern.',
          },
          {
            heading: '8. Database limits affect horizontal scaling',
            explanation:
              'Adding API replicas can multiply database connections and query traffic.',
            example:
              'Ten API replicas with large connection pools may overwhelm PostgreSQL.',
          },
        ],
        realWorldConnection:
          'Database scalability often becomes a central constraint because many application requests ultimately depend on durable data.',
        keyIdea:
          'Database performance requires understanding query behavior, indexes, connection usage and workload growth.',
        recap: [
          'Indexes can reduce unnecessary scanning.',
          'EXPLAIN reveals query execution strategy.',
          'Pagination limits unnecessary data transfer.',
          'Connection pools reuse controlled connections.',
          'N+1 queries can multiply database load.',
          'More API replicas can increase database pressure.',
        ],
      },
    },
    {
      id: 'mc12-s04-database-animation',
      type: 'animation',
      title: 'See an Index Change a Database Query',
      animation: {
        visual: 'database',
        opening:
          'Compare an inefficient table scan with an indexed lookup.',
        parts: [
          {
            id: 'table',
            label: 'LARGE TABLE',
            explanation:
              'The database contains a growing number of records.',
          },
          {
            id: 'scan',
            label: 'TABLE SCAN',
            explanation:
              'Without a useful access path, many rows may need to be inspected.',
          },
          {
            id: 'index',
            label: 'INDEX',
            explanation:
              'An index can provide a faster path to matching rows.',
          },
          {
            id: 'plan',
            label: 'QUERY PLAN',
            explanation:
              'EXPLAIN helps verify how PostgreSQL plans to execute the query.',
          },
        ],
        closing:
          'Indexes are not automatically beneficial for every query. Measure and verify the execution plan.',
      },
    },
    {
      id: 'mc12-s04-database-simulation',
      type: 'simulation',
      title: 'Diagnose the Database Bottleneck',
      simulation: {
        instruction:
          'Match each database symptom with the appropriate investigation or solution.',
        items: [
          {
            id: 'slow-filter',
            label: 'A frequent filter query becomes slow as the table grows.',
            correctTargetId: 'index',
          },
          {
            id: 'unknown-plan',
            label: 'The team does not know how PostgreSQL executes a slow query.',
            correctTargetId: 'explain',
          },
          {
            id: 'huge-response',
            label: 'An endpoint returns tens of thousands of rows.',
            correctTargetId: 'pagination',
          },
          {
            id: 'connections',
            label: 'Database connection count spikes after adding API replicas.',
            correctTargetId: 'pool',
          },
        ],
        targets: [
          { id: 'index', label: 'CREATE APPROPRIATE INDEX' },
          { id: 'explain', label: 'INSPECT EXPLAIN PLAN' },
          { id: 'pagination', label: 'ADD PAGINATION' },
          { id: 'pool', label: 'CONTROL CONNECTION POOLING' },
        ],
        successMessage:
          'Good. You are connecting application scale with database behavior.',
        failureMessage:
          'Identify whether the issue is query access, query visibility, result size or connection pressure.',
      },
    },
    {
      id: 'mc12-s04-database-question',
      type: 'question',
      title: 'Database Performance Check',
      question: {
        id: 'mc12-s04-database-question',
        type: 'single-choice',
        question:
          'What does EXPLAIN primarily help an engineer understand?',
        options: [
          {
            id: 'query-plan',
            text: 'How PostgreSQL plans to execute a query.',
            correct: true,
          },
          {
            id: 'backup',
            text: 'Whether a backup has been successfully restored.',
            correct: false,
          },
          {
            id: 'api',
            text: 'Whether an HTTP client is using HTTPS.',
            correct: false,
          },
          {
            id: 'cache',
            text: 'Whether Redis has enough memory.',
            correct: false,
          },
        ],
        explanation:
          'EXPLAIN exposes the database execution plan, which is essential when investigating query performance.',
      },
    },
  ],
}