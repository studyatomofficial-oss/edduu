import type { GuideDefinition } from '../../../masterclass-engine/types'

export const mapGuide04: GuideDefinition = {
  type: 'map',
  label: 'MAP GUIDE 04',
  title: 'Build a Small Database-Driven System → Implementation Map',
  objective:
    'Follow the path from understanding stored data to designing tables, connecting records, writing SQL and tracing a database request through a real application.',

  steps: [
    {
      id: 'mc04-map-01',
      step: 1,
      title: 'Understand the data',
      action:
        'Identify what information the system needs to store and what each piece of information represents.',
      details: [
        'List the main things the system needs to remember.',
        'Separate real-world entities such as students, courses and enrollments.',
        'Identify the information associated with each entity.',
      ],
    },

    {
      id: 'mc04-map-02',
      step: 2,
      title: 'Turn information into fields',
      action:
        'Represent each piece of information as a field or column.',
      details: [
        'A field represents one kind of value.',
        'Examples include student_id, name, marks and course_id.',
        'Choose meaningful names for fields.',
      ],
      mapStepId: 'mc04-map-01',
    },

    {
      id: 'mc04-map-03',
      step: 3,
      title: 'Create records and tables',
      action:
        'Organize related fields into records and tables.',
      details: [
        'A record represents one stored item.',
        'Rows represent records.',
        'Columns represent fields.',
        'A table organizes related records.',
      ],
      mapStepId: 'mc04-map-02',
    },

    {
      id: 'mc04-map-04',
      step: 4,
      title: 'Separate related entities',
      action:
        'Create separate tables for different entities instead of putting everything into one large table.',
      details: [
        'Create a Students table.',
        'Create a Courses table.',
        'Create an Enrollments table.',
        'Keep each table focused on its role.',
      ],
      mapStepId: 'mc04-map-03',
    },

    {
      id: 'mc04-map-05',
      step: 5,
      title: 'Define primary keys',
      action:
        'Give each table a reliable way to uniquely identify its records.',
      details: [
        'Students can use student_id.',
        'Courses can use course_id.',
        'Each identifier should distinguish one record from another.',
      ],
      mapStepId: 'mc04-map-04',
    },

    {
      id: 'mc04-map-06',
      step: 6,
      title: 'Create relationships',
      action:
        'Use foreign keys to connect records between related tables.',
      details: [
        'Enrollments can reference student_id.',
        'Enrollments can reference course_id.',
        'Relationships connect separate tables into one data model.',
      ],
      mapStepId: 'mc04-map-05',
    },

    {
      id: 'mc04-map-07',
      step: 7,
      title: 'Protect data integrity',
      action:
        'Define rules that prevent invalid or inconsistent relationships.',
      details: [
        'Avoid duplicate primary-key values.',
        'Do not allow references to records that do not exist.',
        'Use database constraints where appropriate.',
      ],
      mapStepId: 'mc04-map-06',
    },

    {
      id: 'mc04-map-08',
      step: 8,
      title: 'Retrieve data with SELECT',
      action:
        'Write a basic SQL query that retrieves information from a table.',
      details: [
        'Use SELECT to choose the required columns.',
        'Use FROM to identify the table.',
        'Start with simple retrieval before adding conditions.',
      ],
      command:
        'SELECT name, marks FROM students;',
      mapStepId: 'mc04-map-07',
    },

    {
      id: 'mc04-map-09',
      step: 9,
      title: 'Filter and sort results',
      action:
        'Use WHERE and ORDER BY to control which rows appear and how they are arranged.',
      details: [
        'WHERE filters matching rows.',
        'ORDER BY sorts the result.',
        'LIMIT can restrict the number of returned rows.',
      ],
      command:
        'SELECT name, marks FROM students WHERE marks > 80 ORDER BY marks DESC LIMIT 5;',
      mapStepId: 'mc04-map-08',
    },

    {
      id: 'mc04-map-10',
      step: 10,
      title: 'Manipulate stored data',
      action:
        'Use INSERT, UPDATE and DELETE to change database records.',
      details: [
        'INSERT creates a new record.',
        'UPDATE changes an existing record.',
        'DELETE removes a record.',
        'Use conditions carefully when changing or removing data.',
      ],
      mapStepId: 'mc04-map-09',
    },

    {
      id: 'mc04-map-11',
      step: 11,
      title: 'Analyze the data',
      action:
        'Use aggregate functions and grouping to answer summary questions.',
      details: [
        'COUNT can count records.',
        'SUM can calculate totals.',
        'AVG can calculate averages.',
        'GROUP BY creates groups.',
        'HAVING filters grouped results.',
      ],
      command:
        'SELECT city, COUNT(*) FROM students GROUP BY city HAVING COUNT(*) > 10;',
      mapStepId: 'mc04-map-10',
    },

    {
      id: 'mc04-map-12',
      step: 12,
      title: 'Join related tables',
      action:
        'Use JOIN to retrieve information that is distributed across related tables.',
      details: [
        'Identify the relationship between the tables.',
        'Match related identifiers.',
        'Return the combined information required by the application.',
      ],
      command:
        'SELECT students.name, courses.title FROM students JOIN enrollments ON students.student_id = enrollments.student_id JOIN courses ON enrollments.course_id = courses.course_id;',
      mapStepId: 'mc04-map-11',
    },

    {
      id: 'mc04-map-13',
      step: 13,
      title: 'Connect SQL to the application',
      action:
        'Trace how a user request travels from the frontend to the backend and database and back again.',
      details: [
        'User performs an action.',
        'Frontend sends a request.',
        'API receives the request.',
        'Application logic validates and processes it.',
        'Database performs the required operation.',
        'Result returns to the application.',
        'Frontend displays the result.',
      ],
      mapStepId: 'mc04-map-12',
    },

    {
      id: 'mc04-map-14',
      step: 14,
      title: 'Verify the complete system',
      action:
        'Use the complete mental model to explain how stored data becomes useful application information.',
      details: [
        'Data is represented as structured information.',
        'Tables organize records.',
        'Keys create relationships.',
        'Constraints protect integrity.',
        'SQL retrieves and manipulates data.',
        'Applications use database results to serve users.',
      ],
      mapStepId: 'mc04-map-13',
    },
  ],

  finalResult:
    'You can now trace a database-driven system from raw information and table design through keys, relationships, SQL operations and the complete application request-response flow.',
}