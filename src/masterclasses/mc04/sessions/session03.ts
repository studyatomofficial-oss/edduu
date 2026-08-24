import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc04Session03: SessionDefinition = {
  id: 'mc04-session-03',
  number: 3,
  stage: 'discover',
  title: 'Files, Records & Tables',
  objective:
    'Understand how related information can be organized into files, records, fields and tables.',
  experiences: [
    {
      id: 'mc04-s03-organization-lesson',
      type: 'lesson',
      title: 'How Data Gets Organized',
      description:
        'Move from individual values to records and structured collections of data.',
      lesson: {
        opening:
          'A single data value is rarely enough for a real application. Software usually works with groups of related values. To manage those values, we need a way to organize them into meaningful structures.',
        sections: [
          {
            heading: 'A value is one piece of data',
            explanation:
              'An individual value represents one piece of information.',
            example:
              'Avinash, 85 and Mumbai are individual values.',
          },
          {
            heading: 'A field describes one property',
            explanation:
              'A field gives a value a defined role or meaning within a record.',
            example:
              'Name, Marks and City can be fields in a student record.',
          },
          {
            heading: 'A record groups related fields',
            explanation:
              'A record combines related fields that describe one entity or event.',
            example:
              'Name: Avinash, Marks: 85, City: Mumbai forms one student record.',
          },
          {
            heading: 'Multiple records form a collection',
            explanation:
              'Applications normally need to manage many related records rather than only one.',
            example:
              'A school application may have one record for every student.',
          },
          {
            heading: 'Tables organize records',
            explanation:
              'A table provides a structured way to organize records using rows and columns.',
            example:
              'Columns represent fields and each row represents one student record.',
          },
          {
            heading: 'Files can store structured data',
            explanation:
              'Data can be stored in files using different formats, but larger applications eventually need stronger ways to organize and manage growing data.',
            example:
              'A CSV file can store student records as rows and fields as columns.',
          },
        ],
        realWorldConnection:
          'Applications constantly organize data into meaningful structures. Student records, product catalogs, customer lists and transaction histories all require consistent organization.',
        keyIdea:
          'Data organization moves from individual values to fields, records and collections. Tables provide a structured representation where columns describe fields and rows represent records.',
        recap: [
          'A value is one piece of data.',
          'A field gives a value a defined meaning within a record.',
          'A record groups related fields.',
          'Applications usually manage many records.',
          'Tables organize records into rows and columns.',
          'Files can store structured data but have limitations as systems grow.',
        ],
      },
    },

    {
      id: 'mc04-s03-organization-animation',
      type: 'animation',
      title: 'Watch Data Become a Table',
      description:
        'Build a structured table step by step from individual values.',
      animation: {
        visual: 'database',
        opening:
          'Instead of treating every value separately, organize related values into a structure that software can work with consistently.',
        parts: [
          {
            id: 'value',
            label: 'VALUES',
            explanation:
              'Start with individual pieces of information.',
            example:
              'Avinash, 85, Mumbai.',
          },
          {
            id: 'fields',
            label: 'FIELDS',
            explanation:
              'Give each value a defined role.',
            example:
              'Name = Avinash, Marks = 85, City = Mumbai.',
          },
          {
            id: 'record',
            label: 'RECORD',
            explanation:
              'Group related fields that describe one entity.',
            example:
              'One complete student record.',
          },
          {
            id: 'rows',
            label: 'ROWS',
            explanation:
              'Add records for multiple entities.',
            example:
              'Student 1, Student 2, Student 3.',
          },
          {
            id: 'table',
            label: 'TABLE',
            explanation:
              'Organize the records using consistent columns and rows.',
            example:
              'Students table with Name, Marks and City columns.',
          },
        ],
        closing:
          'The table is useful because every record follows the same structure. This consistency makes data easier for software to store, search and process.',
      },
    },

    {
      id: 'mc04-s03-organization-simulation',
      type: 'simulation',
      title: 'Build the Student Table',
      description:
        'Match data concepts to the correct parts of a structured table.',
      simulation: {
        instruction:
          'Connect each concept to the role it plays when organizing student data.',
        items: [
          {
            id: 'name-field',
            label: 'Name',
            description:
              'A property that identifies a student.',
            correctTargetId: 'field-target',
          },
          {
            id: 'student-record',
            label: 'Avinash | 85 | Mumbai',
            description:
              'A group of related values describing one student.',
            correctTargetId: 'record-target',
          },
          {
            id: 'student-row',
            label: 'One complete student row',
            description:
              'One record represented inside a table.',
            correctTargetId: 'row-target',
          },
          {
            id: 'students-table',
            label: 'Students',
            description:
              'A structured collection of student records.',
            correctTargetId: 'table-target',
          },
        ],
        targets: [
          {
            id: 'field-target',
            label: 'Field / Column',
            description:
              'Defines one property in the structure.',
          },
          {
            id: 'record-target',
            label: 'Record',
            description:
              'Groups related fields for one entity.',
          },
          {
            id: 'row-target',
            label: 'Row',
            description:
              'Represents one record in a table.',
          },
          {
            id: 'table-target',
            label: 'Table',
            description:
              'Contains related records using a common structure.',
          },
        ],
        successMessage:
          'Excellent. You connected fields, records, rows and tables into one consistent data model.',
        failureMessage:
          'Think from small to large: a field describes one property, a record groups properties, rows represent records and a table organizes many records.',
      },
    },

    {
      id: 'mc04-s03-organization-question',
      type: 'question',
      title: 'Data organization check',
      description:
        'Check your understanding of fields, records and tables.',
      question: {
        id: 'mc04-s03-organization',
        type: 'single-choice',
        question:
          'In a typical table, what does one row usually represent?',
        options: [
          {
            id: 'record',
            text: 'One record containing related values for an entity',
            correct: true,
          },
          {
            id: 'database',
            text: 'The entire database server',
            correct: false,
          },
          {
            id: 'field',
            text: 'Every possible field in the system',
            correct: false,
          },
          {
            id: 'network',
            text: 'A network connection between two computers',
            correct: false,
          },
        ],
        explanation:
          'A row normally represents one record, while columns describe the fields or properties shared by records in the table.',
        hints: [
          'Think about one student inside a Students table.',
          'A row represents one complete record.',
        ],
      },
    },
  ],
}