import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc04Session07: SessionDefinition = {
  id: 'mc04-session-07',
  number: 7,
  stage: 'discover',
  title: 'SQL — Querying & Manipulating Data',
  objective:
    'Build a practical mental model of SQL and learn how to retrieve, filter, sort, aggregate, insert, update, delete and join relational data.',

  experiences: [
    {
      id: 'mc04-s07-sql-lesson',
      type: 'lesson',
      title: 'How SQL Talks to a Database',
      description:
        'Learn SQL from absolute zero by progressively turning questions into executable database operations.',

      lesson: {
        opening:
          'A database contains stored data, but applications need a way to ask questions about that data and change it. SQL, or Structured Query Language, provides a standard way to communicate with relational databases. Instead of manually opening database files, we describe what information we want or what change we need the database to perform.',

        sections: [
          {
            heading: 'SQL is a language for working with relational data',
            explanation:
              'SQL provides commands that allow applications and developers to retrieve and manipulate data stored in relational databases.',
            example:
              'A school application can use SQL to find all students whose marks are greater than 80.',
          },

          {
            heading: 'Start with SELECT',
            explanation:
              'SELECT tells the database which columns or expressions should appear in the result.',
            example:
              'SELECT name FROM students;',
          },

          {
            heading: 'FROM identifies the data source',
            explanation:
              'FROM tells the database which table the query should read from.',
            example:
              'SELECT name FROM students;',
          },

          {
            heading: 'WHERE filters rows',
            explanation:
              'WHERE applies a condition so that only matching records are returned.',
            example:
              'SELECT name FROM students WHERE marks > 80;',
          },

          {
            heading: 'ORDER BY sorts results',
            explanation:
              'ORDER BY controls the ordering of rows returned by a query.',
            example:
              'SELECT name, marks FROM students ORDER BY marks DESC;',
          },

          {
            heading: 'LIMIT controls the result size',
            explanation:
              'LIMIT restricts how many rows are returned when the database supports the syntax.',
            example:
              'SELECT name FROM students ORDER BY marks DESC LIMIT 5;',
          },

          {
            heading: 'INSERT adds data',
            explanation:
              'INSERT creates a new record in a table.',
            example:
              "INSERT INTO students (name, marks) VALUES ('Avinash', 85);",
          },

          {
            heading: 'UPDATE changes existing data',
            explanation:
              'UPDATE modifies values in existing records. A WHERE condition is normally essential when only specific rows should change.',
            example:
              "UPDATE students SET marks = 90 WHERE student_id = 101;",
          },

          {
            heading: 'DELETE removes data',
            explanation:
              'DELETE removes matching records from a table. Without an appropriate WHERE condition, many or all rows may be affected.',
            example:
              'DELETE FROM students WHERE student_id = 101;',
          },

          {
            heading: 'Aggregate functions answer summary questions',
            explanation:
              'Functions such as COUNT, SUM and AVG allow SQL to calculate information across multiple rows.',
            example:
              'SELECT AVG(marks) FROM students;',
          },

          {
            heading: 'GROUP BY creates groups',
            explanation:
              'GROUP BY combines rows into groups so aggregate functions can calculate results for each group.',
            example:
              'SELECT city, COUNT(*) FROM students GROUP BY city;',
          },

          {
            heading: 'HAVING filters groups',
            explanation:
              'HAVING applies conditions after rows have been grouped and aggregated.',
            example:
              'SELECT city, COUNT(*) FROM students GROUP BY city HAVING COUNT(*) > 10;',
          },

          {
            heading: 'JOIN combines related tables',
            explanation:
              'JOIN allows a query to combine related records from multiple tables using a matching relationship.',
            example:
              'SELECT students.name, courses.title FROM students JOIN enrollments ON students.student_id = enrollments.student_id JOIN courses ON enrollments.course_id = courses.course_id;',
          },

          {
            heading: 'SQL describes the result, not every physical operation',
            explanation:
              'SQL generally expresses what information is required. The database engine determines how to execute the request efficiently.',
            example:
              'The same SELECT request may be executed using different internal strategies depending on the database and available indexes.',
          },

          {
            heading: 'Applications use SQL through a data-access layer',
            explanation:
              'A real application normally receives user input, validates it, executes a controlled database operation and uses the returned result.',
            example:
              'A course portal receives a student ID, queries enrollment data and displays the students courses.',
          },
        ],

        realWorldConnection:
          'SQL is used throughout business software, banking, education, healthcare, e-commerce and analytics systems to retrieve and manipulate structured data.',

        keyIdea:
          'SQL turns questions and data operations into database instructions. SELECT retrieves data, WHERE filters it, ORDER BY sorts it, INSERT adds records, UPDATE changes records, DELETE removes records, aggregate functions summarize data and JOIN combines related tables.',

        recap: [
          'SELECT retrieves data.',
          'FROM identifies the source table.',
          'WHERE filters rows.',
          'ORDER BY sorts results.',
          'LIMIT restricts result size.',
          'INSERT adds records.',
          'UPDATE changes existing records.',
          'DELETE removes records.',
          'COUNT, SUM and AVG summarize data.',
          'GROUP BY creates groups.',
          'HAVING filters groups.',
          'JOIN combines related tables.',
          'Applications use SQL through a controlled data-access layer.',
        ],
      },
    },

    {
      id: 'mc04-s07-sql-animation',
      type: 'animation',
      title: 'Watch a SQL Query Become a Result',
      description:
        'Follow the journey from a business question to a database result.',

      animation: {
        opening:
          'A SQL query starts as a question about stored data. The database receives the request, identifies the relevant data, applies the requested operations and produces a result.',

        parts: [
          {
            id: 'question',
            label: 'BUSINESS QUESTION',
            explanation:
              'Start with the information the application actually needs.',
            example:
              'Which students scored above 80?',
          },

          {
            id: 'select',
            label: 'SELECT',
            explanation:
              'Specify which information should appear in the result.',
            example:
              'SELECT name, marks',
          },

          {
            id: 'from',
            label: 'FROM',
            explanation:
              'Identify the table containing the required data.',
            example:
              'FROM students',
          },

          {
            id: 'where',
            label: 'WHERE',
            explanation:
              'Apply a condition to keep only matching rows.',
            example:
              'WHERE marks > 80',
          },

          {
            id: 'database',
            label: 'DATABASE ENGINE',
            explanation:
              'The database engine processes the SQL request against stored data.',
            example:
              'Read matching student records.',
          },

          {
            id: 'result',
            label: 'RESULT',
            explanation:
              'The database returns the rows that satisfy the query.',
            example:
              'Avinash | 85',
          },

          {
            id: 'application',
            label: 'APPLICATION',
            explanation:
              'The application uses the result to produce something useful for the user.',
            example:
              'Display high-scoring students.',
          },
        ],

        closing:
          'SQL provides the instruction, the database engine processes it against stored data and the application uses the resulting data. This is the core query cycle behind countless database-driven applications.',
      },
    },

    {
      id: 'mc04-s07-sql-simulation',
      type: 'simulation',
      title: 'Build the Right SQL Operation',
      description:
        'Match common application requirements to the SQL operation that solves them.',

      simulation: {
        instruction:
          'Connect each real-world database task to the SQL operation that should perform it.',

        items: [
          {
            id: 'retrieve',
            label: 'Find students with marks above 80',
            description:
              'Read matching records from the database.',
            correctTargetId: 'select-target',
          },

          {
            id: 'filter',
            label: 'Keep only marks greater than 80',
            description:
              'Apply a condition to returned rows.',
            correctTargetId: 'where-target',
          },

          {
            id: 'sort',
            label: 'Show highest marks first',
            description:
              'Control the ordering of returned records.',
            correctTargetId: 'order-target',
          },

          {
            id: 'add',
            label: 'Register a new student',
            description:
              'Create a new record.',
            correctTargetId: 'insert-target',
          },

          {
            id: 'change',
            label: 'Change a students marks',
            description:
              'Modify an existing record.',
            correctTargetId: 'update-target',
          },

          {
            id: 'remove',
            label: 'Remove a cancelled registration',
            description:
              'Delete a matching record.',
            correctTargetId: 'delete-target',
          },

          {
            id: 'summary',
            label: 'Calculate average marks',
            description:
              'Produce a summary across multiple rows.',
            correctTargetId: 'aggregate-target',
          },

          {
            id: 'group',
            label: 'Count students in each city',
            description:
              'Create groups and calculate a result for each group.',
            correctTargetId: 'group-target',
          },

          {
            id: 'combine',
            label: 'Show student names with course names',
            description:
              'Combine related records from multiple tables.',
            correctTargetId: 'join-target',
          },
        ],

        targets: [
          {
            id: 'select-target',
            label: 'SELECT',
            description:
              'Retrieve data.',
          },

          {
            id: 'where-target',
            label: 'WHERE',
            description:
              'Filter rows.',
          },

          {
            id: 'order-target',
            label: 'ORDER BY',
            description:
              'Sort results.',
          },

          {
            id: 'insert-target',
            label: 'INSERT',
            description:
              'Add records.',
          },

          {
            id: 'update-target',
            label: 'UPDATE',
            description:
              'Modify records.',
          },

          {
            id: 'delete-target',
            label: 'DELETE',
            description:
              'Remove records.',
          },

          {
            id: 'aggregate-target',
            label: 'AGGREGATE',
            description:
              'Summarize multiple rows.',
          },

          {
            id: 'group-target',
            label: 'GROUP BY',
            description:
              'Create groups for aggregate analysis.',
          },

          {
            id: 'join-target',
            label: 'JOIN',
            description:
              'Combine related tables.',
          },
        ],

        successMessage:
          'Excellent. You mapped real application requirements to the correct SQL operations.',

        failureMessage:
          'Think about the action first: retrieve, filter, sort, add, change, remove, summarize, group or combine.',
      },
    },

    {
      id: 'mc04-s07-sql-question',
      type: 'question',
      title: 'SQL reasoning check',
      description:
        'Test whether you understand what SQL operations actually do.',

      question: {
        id: 'mc04-s07-sql',
        type: 'single-choice',
        question:
          'Which SQL query correctly finds students whose marks are greater than 80?',

        options: [
          {
            id: 'correct',
            text: 'SELECT name, marks FROM students WHERE marks > 80;',
            correct: true,
          },

          {
            id: 'wrong-insert',
            text: 'INSERT INTO students WHERE marks > 80;',
            correct: false,
          },

          {
            id: 'wrong-update',
            text: 'UPDATE students WHERE marks > 80;',
            correct: false,
          },

          {
            id: 'wrong-delete',
            text: 'DELETE students FROM marks > 80;',
            correct: false,
          },
        ],

        explanation:
          'SELECT retrieves data, FROM identifies the source table and WHERE filters rows according to the condition.',

        hints: [
          'The task is retrieving data, not changing it.',
          'Use SELECT for retrieval and WHERE for filtering.',
        ],
      },
    },
  ],
}