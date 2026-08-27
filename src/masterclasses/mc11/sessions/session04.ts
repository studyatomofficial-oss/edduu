import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc11Session04: SessionDefinition = {
  id: 'mc11-session-04',
  number: 4,
  stage: 'discover',
  title: 'Database Performance & Indexing - Making Data Access Scale',
  objective:
    'Understand how database indexes, query plans, pagination, connection pools and query patterns affect application performance, then apply these ideas to scaling EDDUU PostgreSQL workloads.',
  experiences: [
    {
      id: 'mc11-s04-database-performance-lesson',
      type: 'lesson',
      title: 'Why Does the Database Become the Bottleneck?',
      description:
        'Learn how database access patterns influence latency, throughput and scalability, and how engineering teams diagnose inefficient queries before changing infrastructure.',
      lesson: {
        opening:
          'Imagine EDDUU has successfully scaled its Learning Service from two API instances to twenty. Traffic is now distributed across many application servers, but the dashboard is still slow. The database is receiving thousands of queries and spending most of its time searching, sorting and waiting for connections. This is a common scaling pattern: after the application tier scales, the database can become the next bottleneck.',
        sections: [
          {
            heading: '1. The database is often a shared dependency',
            explanation:
              'Multiple application instances may depend on the same database. Scaling the application tier therefore increases the amount of work arriving at the shared database.',
            example:
              'EDDUU grows from two Learning Service replicas to twenty. All twenty replicas now generate PostgreSQL traffic against the same database.',
          },
          {
            heading: '2. What is a database index?',
            explanation:
              'An index is an additional data structure that helps the database locate rows more efficiently for suitable queries instead of examining every row.',
            example:
              'If EDDUU frequently searches students by email, an index on the email column can help PostgreSQL locate the matching row much faster than scanning the entire student table.',
          },
          {
            heading: '3. Full table scan',
            explanation:
              'A sequential or full table scan examines many or all rows to find the rows required by a query. This can become expensive as a table grows.',
            example:
              'Searching a table containing millions of EDDUU learning records without a useful index may require PostgreSQL to inspect a very large number of rows.',
          },
          {
            heading: '4. Index lookup',
            explanation:
              'When a suitable index exists and the optimizer determines that it is beneficial, PostgreSQL can use the index to narrow the search instead of scanning the entire table.',
            example:
              'A query looking for a specific student_id can use an index on student_id to locate matching records efficiently.',
          },
          {
            heading: '5. Indexes are not free',
            explanation:
              'Indexes consume storage and must be maintained when indexed data changes. Adding every possible index can therefore increase write cost and storage usage.',
            example:
              'If EDDUU creates many indexes on a frequently updated table, inserts and updates can become more expensive because index structures must also be maintained.',
          },
          {
            heading: '6. Choose indexes based on real queries',
            explanation:
              'Useful indexes should be driven by important query patterns, workload characteristics and measured performance rather than by indexing every column automatically.',
            example:
              'If EDDUU frequently filters learning records by course_id and student_id together, the team should investigate whether a composite index supports that access pattern.',
          },
          {
            heading: '7. Composite indexes',
            explanation:
              'A composite index contains multiple columns and can support queries that use those columns together. Column order matters because database optimizers use the index according to its structure.',
            example:
              'An index on (course_id, student_id) may help a query filtering by course_id and student_id together.',
          },
          {
            heading: '8. Selectivity matters',
            explanation:
              'Selectivity describes how effectively a condition narrows the result set. Columns with highly repetitive values may provide less benefit for some queries than columns that distinguish many records.',
            example:
              'An index on a column containing only two possible values may be less useful for a query that returns half the table than an index on a highly selective identifier.',
          },
          {
            heading: '9. Use EXPLAIN to inspect query plans',
            explanation:
              'PostgreSQL EXPLAIN shows how the database plans to execute a query. EXPLAIN ANALYZE can execute the query and provide actual execution information.',
            example:
              'The EDDUU team can compare a slow dashboard query before and after adding an index and inspect whether PostgreSQL changes the execution plan.',
          },
          {
            heading: '10. Query plans reveal expensive operations',
            explanation:
              'A query plan can expose sequential scans, expensive joins, sorting, aggregation and other operations that contribute to execution cost.',
            example:
              'An EDDUU report query may reveal a large sequential scan followed by an expensive sort, indicating that the query or its supporting indexes need investigation.',
          },
          {
            heading: '11. Avoid SELECT * when unnecessary',
            explanation:
              'Selecting only required columns can reduce data read, transferred and processed, especially when rows contain large fields.',
            example:
              'A dashboard that needs student name and status does not necessarily need to retrieve a large profile document, history payload or every database column.',
          },
          {
            heading: '12. N+1 queries',
            explanation:
              'The N+1 pattern occurs when an application performs one query to retrieve a list and then performs another query for each returned item. This can create many unnecessary database round trips.',
            example:
              'EDDUU loads 100 courses with one query and then performs 100 additional queries to fetch instructor information for each course.',
          },
          {
            heading: '13. Pagination controls result size',
            explanation:
              'Returning very large result sets increases database work, network transfer, application memory usage and response latency. Pagination limits the amount of data returned per request.',
            example:
              'Instead of returning all 100,000 EDDUU learning records at once, the API can return a controlled page of records.',
          },
          {
            heading: '14. Offset pagination has trade-offs',
            explanation:
              'Offset-based pagination is simple but can become expensive for large offsets because the database may still need to process and skip many rows.',
            example:
              'Requesting page 10,000 with a large OFFSET can require PostgreSQL to process a substantial number of earlier rows before returning the requested page.',
          },
          {
            heading: '15. Cursor or keyset pagination',
            explanation:
              'Keyset pagination uses a stable ordering key to continue from the last retrieved position instead of repeatedly skipping earlier rows.',
            example:
              'EDDUU can request records where id is greater than the last returned id and limit the next result set.',
          },
          {
            heading: '16. Connection pools',
            explanation:
              'A connection pool maintains a controlled set of database connections that application requests can reuse. This avoids creating a new database connection for every request.',
            example:
              'Twenty EDDUU API instances should not independently create unlimited PostgreSQL connections because the database has finite connection capacity.',
          },
          {
            heading: '17. Too many connections can hurt',
            explanation:
              'More database connections do not automatically produce more throughput. Excessive concurrent connections can consume resources and increase contention.',
            example:
              'If every EDDUU replica opens hundreds of PostgreSQL connections, the database may spend more resources managing connections than executing useful queries.',
          },
          {
            heading: '18. Read and write pressure',
            explanation:
              'Read-heavy and write-heavy workloads create different database pressures. Indexes can accelerate reads but may increase write maintenance cost.',
            example:
              'A student activity system may generate a very large number of writes while dashboards generate a large number of reads.',
          },
          {
            heading: '19. Read replicas can separate workloads',
            explanation:
              'For appropriate workloads, read replicas can allow some read traffic to be served by additional database instances while writes continue through the primary.',
            example:
              'EDDUU could direct selected reporting reads toward replicas while transactional writes continue through the primary database.',
          },
          {
            heading: '20. Database caching and application caching are different',
            explanation:
              'Database-level mechanisms and application-level caches solve different problems. An application cache can avoid reaching the database entirely for suitable repeated reads.',
            example:
              'Redis may serve popular course metadata before PostgreSQL is contacted, while PostgreSQL indexes accelerate queries that still reach the database.',
          },
          {
            heading: '21. Optimize queries before blindly scaling hardware',
            explanation:
              'A poorly designed query can waste resources regardless of how powerful the database server is. Query optimization and indexing should be considered before simply increasing machine size.',
            example:
              'Replacing an inefficient EDDUU query that scans millions of rows can provide a much larger improvement than adding CPU to the database server.',
          },
          {
            heading: '22. Database performance requires measurement',
            explanation:
              'Teams should monitor query latency, slow queries, connection utilization, CPU, memory, I/O, locks and throughput to understand database behavior under real workloads.',
            example:
              'An EDDUU database dashboard can reveal whether slow requests are caused by expensive queries, connection exhaustion or storage I/O.',
          },
        ],
        realWorldConnection:
          'At scale, database performance is rarely solved by one index or a larger machine. Teams combine query design, indexing, pagination, connection management, caching, workload separation and measurement to keep shared data services within acceptable performance limits.',
        keyIdea:
          'A scalable application can still fail at scale if its shared database is accessed inefficiently. Measure query behavior, identify the bottleneck and optimize the data-access path.',
        recap: [
          'Databases can become shared bottlenecks as application replicas increase.',
          'Indexes can reduce the amount of data PostgreSQL must examine.',
          'Indexes consume storage and add write-maintenance cost.',
          'Composite index column order matters.',
          'Selectivity influences index usefulness.',
          'EXPLAIN helps inspect query execution plans.',
          'N+1 queries can create excessive database round trips.',
          'Pagination controls result size.',
          'Large OFFSET values can become expensive.',
          'Keyset pagination can avoid repeatedly skipping earlier rows.',
          'Connection pools control database connection usage.',
          'Too many connections can increase contention.',
          'Read replicas can separate suitable read workloads.',
          'Caching can prevent repeated requests from reaching the database.',
          'Database optimization should be driven by measurement.',
        ],
      },
    },

    {
      id: 'mc11-s04-database-performance-animation',
      type: 'animation',
      title: 'Watch an EDDUU Database Become the Bottleneck',
      description:
        'Follow increasing application traffic into PostgreSQL and see how inefficient queries, missing indexes and connection pressure affect performance.',
      animation: {
        visual: 'distributed',
        opening:
          'EDDUU has scaled the API tier, but all replicas still depend on PostgreSQL. Follow the database workload as traffic increases.',
        parts: [
          {
            id: 'many-api-replicas',
            label: 'MORE API REPLICAS',
            explanation:
              'Additional EDDUU API instances increase the number of concurrent requests reaching shared data services.',
            example:
              'Twenty API replicas now send requests to the same PostgreSQL cluster.',
          },
          {
            id: 'database-load',
            label: 'DATABASE LOAD',
            explanation:
              'PostgreSQL receives more reads and writes from the expanded application tier.',
            example:
              'Dashboard requests and learning activity writes increase at the same time.',
          },
          {
            id: 'slow-query',
            label: 'SLOW QUERY',
            explanation:
              'An inefficient query may examine far more rows than necessary.',
            example:
              'A dashboard query performs a large sequential scan over learning records.',
          },
          {
            id: 'index',
            label: 'INDEX',
            explanation:
              'A suitable index can allow PostgreSQL to locate relevant records more efficiently.',
            example:
              'An index supporting the dashboard filter reduces unnecessary row examination.',
          },
          {
            id: 'query-plan',
            label: 'QUERY PLAN',
            explanation:
              'EXPLAIN allows engineers to inspect how PostgreSQL intends to execute the query.',
            example:
              'The team compares the query plan before and after an indexing change.',
          },
          {
            id: 'connection-pool',
            label: 'CONNECTION POOL',
            explanation:
              'A controlled pool prevents every application request from creating an independent database connection.',
            example:
              'EDDUU limits connections per API instance so total database connections remain within safe capacity.',
          },
          {
            id: 'read-separation',
            label: 'READ WORKLOAD SEPARATION',
            explanation:
              'Suitable read-heavy workloads can be distributed to read replicas.',
            example:
              'Selected reporting requests are served by replicas while transactional writes remain on the primary.',
          },
        ],
        closing:
          'Scaling the application tier increases database pressure unless the data-access layer scales intelligently as well. Database performance must therefore be treated as part of the complete system architecture.',
      },
    },

    {
      id: 'mc11-s04-database-performance-simulation',
      type: 'simulation',
      title: 'Diagnose the Database Problem',
      description:
        'Practice selecting the most appropriate database-performance response from measured symptoms.',
      simulation: {
        instruction:
          'Match each EDDUU database observation with the engineering response that best addresses the described problem.',
        items: [
          {
            id: 'missing-index',
            label:
              'A frequent query scans millions of rows even though it filters on a commonly queried identifier.',
            description:
              'The query may benefit from a suitable index.',
            correctTargetId: 'add-index',
          },
          {
            id: 'n-plus-one',
            label:
              'One API request retrieves 100 courses and then performs 100 additional database queries.',
            description:
              'The application is creating excessive database round trips.',
            correctTargetId: 'remove-n-plus-one',
          },
          {
            id: 'large-offset',
            label:
              'A deep pagination request becomes increasingly slow as the page number grows.',
            description:
              'The database may be processing and skipping many earlier rows.',
            correctTargetId: 'keyset-pagination',
          },
          {
            id: 'connection-exhaustion',
            label:
              'Database requests queue because the PostgreSQL connection limit is being reached.',
            description:
              'Too many application connections are competing for finite database capacity.',
            correctTargetId: 'connection-pool',
          },
          {
            id: 'read-pressure',
            label:
              'Reporting traffic creates heavy read pressure while transactional writes remain important.',
            description:
              'Some suitable read workloads may be separated from the primary.',
            correctTargetId: 'read-replica',
          },
        ],
        targets: [
          {
            id: 'add-index',
            label: 'USE A SUITABLE INDEX',
            description:
              'Support an important query pattern with an appropriate index.',
          },
          {
            id: 'remove-n-plus-one',
            label: 'ELIMINATE N+1 QUERIES',
            description:
              'Reduce unnecessary repeated database round trips.',
          },
          {
            id: 'keyset-pagination',
            label: 'KEYSET PAGINATION',
            description:
              'Use a stable ordering key instead of repeatedly skipping large offsets.',
          },
          {
            id: 'connection-pool',
            label: 'CONTROL CONNECTIONS',
            description:
              'Use a controlled database connection pool.',
          },
          {
            id: 'read-replica',
            label: 'SEPARATE READ WORKLOAD',
            description:
              'Direct suitable read-heavy workloads toward replicas.',
          },
        ],
        successMessage:
          'Excellent. You connected each measured database symptom with an appropriate architectural response.',
        failureMessage:
          'Look carefully at what is actually limiting the database: row lookup, repeated queries, deep pagination, connection capacity or read pressure.',
      },
    },

    {
      id: 'mc11-s04-database-performance-question',
      type: 'question',
      title: 'Database Performance Check',
      description:
        'Check whether you can identify when an index is useful and understand its trade-offs.',
      question: {
        id: 'mc11-s04-database-performance',
        type: 'single-choice',
        question:
          'An EDDUU query frequently searches a very large table using a highly selective student_id value. PostgreSQL is currently performing a large sequential scan. What is the most appropriate first investigation?',
        options: [
          {
            id: 'index',
            text:
              'Investigate whether a suitable index on student_id can support the query.',
            correct: true,
          },
          {
            id: 'more-api',
            text:
              'Add more API replicas without changing or measuring the database query.',
            correct: false,
          },
          {
            id: 'remove-database',
            text:
              'Remove PostgreSQL and store all data only inside the API process.',
            correct: false,
          },
          {
            id: 'larger-payload',
            text:
              'Increase the response payload so the database can return more information.',
            correct: false,
          },
        ],
        explanation:
          'A highly selective lookup on a large table is a common candidate for index support. The correct engineering process is to inspect the query plan and measure whether an appropriate index improves the actual workload.',
        hints: [
          'The observed problem is a large database scan.',
          'Measure the query plan before and after changing the index strategy.',
        ],
      },
    },
  ],
}
