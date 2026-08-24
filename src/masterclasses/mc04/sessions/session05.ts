import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc04Session05: SessionDefinition = {
  id: 'mc04-session-05',
  number: 5,
  stage: 'discover',
  title: 'Relational Databases',
  objective:
    'Understand tables, rows, columns and relationships as the foundation of relational database systems.',
  experiences: [
    {
      id: 'mc04-s05-relational-lesson',
      type: 'lesson',
      title: 'How Relational Databases Connect Data',
      description:
        'Understand how related tables represent connected information without keeping everything in one large table.',
      lesson: {
        opening:
          'Real applications rarely store everything in one giant table. A school system may have students, courses and enrollments. A shopping system may have customers, products and orders. Relational databases organize these related pieces into separate tables and connect them through relationships.',
        sections: [
          {
            heading: 'A relational database uses tables',
            explanation:
              'Relational databases organize structured data into tables made of rows and columns.',
            example:
              'A Students table can contain student records with columns such as student_id and name.',
          },
          {
            heading: 'Each table represents a subject or entity',
            explanation:
              'A table normally focuses on one type of thing or a closely related set of information.',
            example:
              'Students, Courses and Enrollments can be separate tables.',
          },
          {
            heading: 'Tables can be related',
            explanation:
              'A relationship connects records in one table with related records in another table.',
            example:
              'An enrollment can connect a student to a course.',
          },
          {
            heading: 'One-to-many relationships',
            explanation:
              'One record can be related to many records in another table.',
            example:
              'One student can have many enrollment records.',
          },
          {
            heading: 'Separating data reduces unnecessary repetition',
            explanation:
              'Keeping related information in appropriate tables can reduce repeated values and make updates more consistent.',
            example:
              'A student name does not need to be copied into every enrollment record.',
          },
          {
            heading: 'Relationships allow the application to combine information',
            explanation:
              'Applications can retrieve related information from multiple tables when they need a complete view.',
            example:
              'A query can combine a student with the courses they are enrolled in.',
          },
        ],
        realWorldConnection:
          'Relational databases are widely used in business systems where structured information has clear relationships, such as customers and orders, students and courses, or employees and departments.',
        keyIdea:
          'A relational database organizes related information into tables and connects those tables through relationships, allowing applications to store structured data without unnecessary duplication.',
        recap: [
          'Relational databases organize data into tables.',
          'Tables contain rows and columns.',
          'Different tables can represent different entities.',
          'Relationships connect related records.',
          'One-to-many relationships are common in real systems.',
          'Separating data can reduce unnecessary duplication.',
        ],
      },
    },

    {
      id: 'mc04-s05-relational-animation',
      type: 'animation',
      title: 'Watch Separate Tables Become One Connected System',
      description:
        'Visualize how students, courses and enrollments connect through relationships.',
      animation: {
        visual: 'database',
        opening:
          'Instead of putting every piece of information into one huge table, separate related concepts and connect them through relationships.',
        parts: [
          {
            id: 'students',
            label: 'STUDENTS',
            explanation:
              'Store information about students in one focused table.',
            example:
              'student_id | name',
          },
          {
            id: 'courses',
            label: 'COURSES',
            explanation:
              'Store information about courses in another focused table.',
            example:
              'course_id | title',
          },
          {
            id: 'enrollments',
            label: 'ENROLLMENTS',
            explanation:
              'Store the relationship between students and courses.',
            example:
              'student_id | course_id',
          },
          {
            id: 'relationship',
            label: 'RELATIONSHIP',
            explanation:
              'Matching identifiers connect records across the tables.',
            example:
              'Student 101 → Course 20.',
          },
          {
            id: 'combined-view',
            label: 'COMBINED VIEW',
            explanation:
              'The application can use the relationships to produce a useful combined result.',
            example:
              'Avinash is enrolled in Python.',
          },
        ],
        closing:
          'Relational design separates related concepts into focused tables while preserving the connections between them. The relationships are what allow the separate pieces to work together as one data model.',
      },
    },

    {
      id: 'mc04-s05-relational-simulation',
      type: 'simulation',
      title: 'Connect the Relational Model',
      description:
        'Match each table and relationship to its role in a simple course system.',
      simulation: {
        instruction:
          'Connect each item to the part of the relational model it represents.',
        items: [
          {
            id: 'student-table',
            label: 'Students',
            description:
              'Stores information about students.',
            correctTargetId: 'entity-target',
          },
          {
            id: 'course-table',
            label: 'Courses',
            description:
              'Stores information about courses.',
            correctTargetId: 'entity-target',
          },
          {
            id: 'enrollment',
            label: 'student_id + course_id',
            description:
              'Connects a student with a course.',
            correctTargetId: 'relationship-target',
          },
          {
            id: 'many-enrollments',
            label: 'One student → many enrollments',
            description:
              'Represents a common one-to-many relationship.',
            correctTargetId: 'one-many-target',
          },
        ],
        targets: [
          {
            id: 'entity-target',
            label: 'Entity Table',
            description:
              'A table representing a subject or entity.',
          },
          {
            id: 'relationship-target',
            label: 'Relationship',
            description:
              'A connection between related records.',
          },
          {
            id: 'one-many-target',
            label: 'One-to-Many',
            description:
              'One record can relate to multiple records.',
          },
        ],
        successMessage:
          'Excellent. You separated entities and connected them using relationships.',
        failureMessage:
          'Think about what each table represents and which structure actually connects records between tables.',
      },
    },

    {
      id: 'mc04-s05-relational-question',
      type: 'question',
      title: 'Relational database check',
      description:
        'Check your understanding of tables and relationships.',
      question: {
        id: 'mc04-s05-relational',
        type: 'single-choice',
        question:
          'Why might a relational database store Students and Courses in separate tables?',
        options: [
          {
            id: 'separation',
            text: 'To represent different entities separately and connect them through relationships',
            correct: true,
          },
          {
            id: 'speed',
            text: 'To make every computer processor run at a higher clock speed',
            correct: false,
          },
          {
            id: 'network',
            text: 'To replace the application internet connection',
            correct: false,
          },
          {
            id: 'display',
            text: 'To automatically increase screen resolution',
            correct: false,
          },
        ],
        explanation:
          'Separating entities into appropriate tables creates a clearer data model and allows relationships to connect the related records.',
        hints: [
          'Think about students and courses as two different entities.',
          'The important idea is separation plus relationships.',
        ],
      },
    },
  ],
}