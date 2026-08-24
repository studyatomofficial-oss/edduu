import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc04Session04: SessionDefinition = {
  id: 'mc04-session-04',
  number: 4,
  stage: 'discover',
  title: 'What Is a Database?',
  objective:
    'Understand why databases exist, how a DBMS works and how databases differ from simple file storage.',
  experiences: [
    {
      id: 'mc04-s04-database-lesson',
      type: 'lesson',
      title: 'Why Do We Need Databases?',
      description:
        'Understand the problem that databases solve and the role of a database management system.',
      lesson: {
        opening:
          'A small application may be able to store information in a few files. But as the amount of data and number of users grows, simply keeping files is not enough. Applications need a reliable system for storing, finding, changing and protecting data.',
        sections: [
          {
            heading: 'Files can store data',
            explanation:
              'A file is a useful way to persist information, especially for simple or small tasks.',
            example:
              'A CSV file can contain a list of students and their marks.',
          },
          {
            heading: 'Growing systems create new problems',
            explanation:
              'Large applications may have many users, many records and many operations happening at the same time.',
            example:
              'An e-commerce platform may process thousands of product searches and orders.',
          },
          {
            heading: 'Finding data must be efficient',
            explanation:
              'Applications need reliable ways to locate specific information without manually processing an entire collection every time.',
            example:
              'A banking application must quickly find an account using an account identifier.',
          },
          {
            heading: 'Multiple users may work at once',
            explanation:
              'A database system must coordinate changes when many users or application processes access the same data.',
            example:
              'Two customers should not accidentally overwrite each others order information.',
          },
          {
            heading: 'A DBMS manages database operations',
            explanation:
              'A Database Management System provides software capabilities for storing, retrieving, updating and managing database data.',
            example:
              'PostgreSQL and MySQL are examples of database management systems.',
          },
          {
            heading: 'Applications communicate with databases',
            explanation:
              'Applications normally do not ask a user to manipulate database storage directly. The application sends requests through its data-access layer to the database system.',
            example:
              'A shopping application requests product information and receives matching database results.',
          },
        ],
        realWorldConnection:
          'Modern banking, education, healthcare, e-commerce and social applications depend on database systems to manage persistent information reliably across many users and operations.',
        keyIdea:
          'A database is an organized collection of data, while a DBMS provides the software capabilities used to store, retrieve, update and manage that data reliably.',
        recap: [
          'Files can store data for simple use cases.',
          'Growing applications create storage and coordination challenges.',
          'Applications need efficient ways to find and update data.',
          'Multiple users may access the same data.',
          'A DBMS manages database operations.',
          'Applications communicate with databases through software interfaces.',
        ],
      },
    },

    {
      id: 'mc04-s04-database-animation',
      type: 'animation',
      title: 'From Files to a Database System',
      description:
        'Visualize why growing applications need a database management system.',
      animation: {
        opening:
          'Start with a simple file and gradually introduce the problems that appear as an application grows.',
        parts: [
          {
            id: 'simple-file',
            label: 'SIMPLE FILE',
            explanation:
              'A small application can store structured information in a file.',
            example:
              'students.csv',
          },
          {
            id: 'more-data',
            label: 'MORE DATA',
            explanation:
              'As records increase, manually handling files becomes more difficult.',
            example:
              '100 students becomes 100,000 students.',
          },
          {
            id: 'many-operations',
            label: 'MANY OPERATIONS',
            explanation:
              'Applications need to search, insert, update and retrieve information efficiently.',
            example:
              'Search for a student while other records are being updated.',
          },
          {
            id: 'many-users',
            label: 'MANY USERS',
            explanation:
              'Multiple users or application processes may access data at the same time.',
            example:
              'Thousands of customers accessing an online store.',
          },
          {
            id: 'dbms',
            label: 'DBMS',
            explanation:
              'A database management system provides software capabilities for managing persistent data.',
            example:
              'PostgreSQL managing application data.',
          },
          {
            id: 'application',
            label: 'APPLICATION',
            explanation:
              'The application sends requests to the database system and uses the results.',
            example:
              'An online store retrieves products and creates orders.',
          },
        ],
        closing:
          'The database is not simply a bigger file. A database system provides structured ways to manage persistent data as applications, users and operations grow.',
      },
    },

    {
      id: 'mc04-s04-database-simulation',
      type: 'simulation',
      title: 'Choose the Right Storage Model',
      description:
        'Identify which problem is being solved by a database management system.',
      simulation: {
        instruction:
          'Connect each application situation to the database capability it needs.',
        items: [
          {
            id: 'search',
            label: 'Find one customer quickly',
            description:
              'The application needs efficient access to stored information.',
            correctTargetId: 'retrieval-target',
          },
          {
            id: 'update',
            label: 'Change an order status',
            description:
              'The application needs to modify existing persistent data.',
            correctTargetId: 'update-target',
          },
          {
            id: 'multi-user',
            label: 'Many users access orders together',
            description:
              'The system must coordinate concurrent access to shared data.',
            correctTargetId: 'concurrency-target',
          },
          {
            id: 'database-software',
            label: 'PostgreSQL',
            description:
              'Software used to manage database operations.',
            correctTargetId: 'dbms-target',
          },
        ],
        targets: [
          {
            id: 'retrieval-target',
            label: 'Efficient Retrieval',
            description:
              'Finding stored data efficiently.',
          },
          {
            id: 'update-target',
            label: 'Data Update',
            description:
              'Changing persistent data.',
          },
          {
            id: 'concurrency-target',
            label: 'Concurrent Access',
            description:
              'Managing multiple users or operations accessing shared data.',
          },
          {
            id: 'dbms-target',
            label: 'DBMS',
            description:
              'Software that manages database operations.',
          },
        ],
        successMessage:
          'Excellent. You identified the core problems that database systems help applications manage.',
        failureMessage:
          'Think about what a growing application needs: finding data, changing data, handling concurrent access and software that manages the database.',
      },
    },

    {
      id: 'mc04-s04-database-question',
      type: 'question',
      title: 'Database fundamentals check',
      description:
        'Check your understanding of databases and DBMSs.',
      question: {
        id: 'mc04-s04-database',
        type: 'single-choice',
        question:
          'What is the main role of a Database Management System?',
        options: [
          {
            id: 'manage',
            text: 'To provide software capabilities for storing, retrieving, updating and managing database data',
            correct: true,
          },
          {
            id: 'screen',
            text: 'To control the physical brightness of a computer screen',
            correct: false,
          },
          {
            id: 'internet',
            text: 'To replace the internet connection used by an application',
            correct: false,
          },
          {
            id: 'keyboard',
            text: 'To convert every keyboard key into a database table',
            correct: false,
          },
        ],
        explanation:
          'A DBMS is the software layer that provides capabilities for managing data stored in a database.',
        hints: [
          'Think about what happens between an application and persistent data.',
          'A DBMS manages database operations.',
        ],
      },
    },
  ],
}