import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc04Session06: SessionDefinition = {
  id: 'mc04-session-06',
  number: 6,
  stage: 'discover',
  title: 'Keys & Data Integrity',
  objective:
    'Understand primary keys, foreign keys, constraints and the principles that keep stored data reliable.',
  experiences: [
    {
      id: 'mc04-s06-keys-lesson',
      type: 'lesson',
      title: 'How Databases Keep Data Connected and Reliable',
      description:
        'Understand the identifiers and rules that help databases distinguish records and protect relationships.',
      lesson: {
        opening:
          'A relational database may contain thousands or millions of records. The system needs reliable ways to identify individual records and connect related records without ambiguity. Keys and constraints provide important parts of that structure.',
        sections: [
          {
            heading: 'Why records need identifiers',
            explanation:
              'A database needs a reliable way to distinguish one record from another.',
            example:
              'Two students can have the same name, so a student_id can uniquely identify each student.',
          },
          {
            heading: 'Primary key',
            explanation:
              'A primary key identifies a record uniquely within a table.',
            example:
              'student_id can uniquely identify each row in a Students table.',
          },
          {
            heading: 'Primary keys should be reliable',
            explanation:
              'A primary key should provide a stable way to identify a record and should not ambiguously refer to multiple rows.',
            example:
              'Two students should not share the same student_id.',
          },
          {
            heading: 'Foreign key',
            explanation:
              'A foreign key stores a reference to a related record in another table.',
            example:
              'Enrollments.student_id can reference Students.student_id.',
          },
          {
            heading: 'Relationships depend on keys',
            explanation:
              'Keys allow tables to maintain explicit connections between related records.',
            example:
              'A course enrollment can identify exactly which student and course it belongs to.',
          },
          {
            heading: 'Constraints protect data integrity',
            explanation:
              'Database constraints define rules that help prevent invalid or inconsistent data from being stored.',
            example:
              'A foreign key can prevent an enrollment from referring to a student that does not exist.',
          },
          {
            heading: 'Integrity means trustworthy relationships',
            explanation:
              'Data integrity means that stored information remains accurate, consistent and logically valid according to the system rules.',
            example:
              'An order should reference a real customer rather than a customer identifier that does not exist.',
          },
        ],
        realWorldConnection:
          'Financial systems, education platforms, healthcare applications and e-commerce systems depend on reliable identifiers and integrity rules because incorrect relationships can lead to incorrect business results.',
        keyIdea:
          'Primary keys identify records, foreign keys connect related records and constraints enforce rules that help keep database information consistent and trustworthy.',
        recap: [
          'Records need reliable identifiers.',
          'A primary key uniquely identifies a record.',
          'A foreign key references a related record.',
          'Keys create explicit relationships between tables.',
          'Constraints help prevent invalid data.',
          'Data integrity keeps stored information consistent and trustworthy.',
        ],
      },
    },

    {
      id: 'mc04-s06-keys-animation',
      type: 'animation',
      title: 'Watch Keys Connect and Protect Data',
      description:
        'Visualize how primary and foreign keys connect tables while integrity rules prevent invalid relationships.',
      animation: {
        opening:
          'A database relationship becomes useful only when the system can identify records reliably and verify that references point to valid records.',
        parts: [
          {
            id: 'unique-record',
            label: 'UNIQUE RECORD',
            explanation:
              'Start with records that need reliable identities.',
            example:
              'Student 101 = Avinash.',
          },
          {
            id: 'primary-key',
            label: 'PRIMARY KEY',
            explanation:
              'Assign a unique identifier to the record.',
            example:
              'Students.student_id = 101.',
          },
          {
            id: 'reference',
            label: 'FOREIGN KEY',
            explanation:
              'Store the identifier when another table needs to refer to the record.',
            example:
              'Enrollments.student_id = 101.',
          },
          {
            id: 'relationship',
            label: 'CONNECTED RECORDS',
            explanation:
              'The matching identifiers create an explicit relationship.',
            example:
              'Enrollment 5001 → Student 101.',
          },
          {
            id: 'constraint',
            label: 'INTEGRITY RULE',
            explanation:
              'Database rules can reject references that do not point to valid records.',
            example:
              'An enrollment cannot reference student_id 999 if that student does not exist.',
          },
          {
            id: 'trusted-data',
            label: 'TRUSTWORTHY DATA',
            explanation:
              'Valid identifiers and enforced rules help maintain consistent relationships.',
            example:
              'Every enrollment points to a real student.',
          },
        ],
        closing:
          'Keys provide identity and relationships, while integrity rules help ensure those relationships remain valid as data changes.',
      },
    },

    {
      id: 'mc04-s06-keys-simulation',
      type: 'simulation',
      title: 'Protect the Database Relationship',
      description:
        'Identify the correct key and integrity role in a student enrollment system.',
      simulation: {
        instruction:
          'Connect each database concept to the role it performs.',
        items: [
          {
            id: 'student-id',
            label: 'Students.student_id',
            description:
              'Uniquely identifies a student record.',
            correctTargetId: 'primary-target',
          },
          {
            id: 'enrollment-student',
            label: 'Enrollments.student_id',
            description:
              'References a student from another table.',
            correctTargetId: 'foreign-target',
          },
          {
            id: 'duplicate-id',
            label: 'Two students with student_id = 101',
            description:
              'Creates ambiguity in record identity.',
            correctTargetId: 'integrity-target',
          },
          {
            id: 'missing-student',
            label: 'Enrollment references student_id = 999',
            description:
              'The referenced student does not exist.',
            correctTargetId: 'invalid-reference-target',
          },
        ],
        targets: [
          {
            id: 'primary-target',
            label: 'Primary Key',
            description:
              'Uniquely identifies a record.',
          },
          {
            id: 'foreign-target',
            label: 'Foreign Key',
            description:
              'References a related record.',
          },
          {
            id: 'integrity-target',
            label: 'Identity Integrity Problem',
            description:
              'The identifier is no longer unique.',
          },
          {
            id: 'invalid-reference-target',
            label: 'Referential Integrity Problem',
            description:
              'A reference points to a record that does not exist.',
          },
        ],
        successMessage:
          'Excellent. You identified record identity, relationships and integrity problems correctly.',
        failureMessage:
          'Remember: primary keys identify records, foreign keys reference records and integrity rules protect those relationships.',
      },
    },

    {
      id: 'mc04-s06-keys-question',
      type: 'question',
      title: 'Keys and integrity check',
      description:
        'Check your understanding of primary keys, foreign keys and data integrity.',
      question: {
        id: 'mc04-s06-keys',
        type: 'single-choice',
        question:
          'What is the main purpose of a foreign key?',
        options: [
          {
            id: 'reference',
            text: 'To reference a related record in another table',
            correct: true,
          },
          {
            id: 'display',
            text: 'To change the visual appearance of a database application',
            correct: false,
          },
          {
            id: 'processor',
            text: 'To increase the CPU clock speed',
            correct: false,
          },
          {
            id: 'network',
            text: 'To create a faster internet connection',
            correct: false,
          },
        ],
        explanation:
          'A foreign key stores a reference to a related record, allowing tables to maintain explicit relationships.',
        hints: [
          'Think about how an enrollment can refer to a student.',
          'A foreign key points to a related record.',
        ],
      },
    },
  ],
}