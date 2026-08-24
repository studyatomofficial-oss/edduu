import type { GuideDefinition } from '../../../masterclass-engine/types'

export const codeGuide04: GuideDefinition = {
  type: 'code',
  label: 'CODE GUIDE 04',
  title: 'Database & SQL → Code Reference',
  objective:
    'Use these SQL examples to connect relational database concepts with practical database operations.',

  steps: [
    {
      id: 'mc04-code-01',
      step: 1,
      title: 'Create a Students table',
      action:
        'Use this SQL to define a simple table for student records.',
      mapStepId: 'mc04-map-04',
      code: `CREATE TABLE students (
  student_id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  marks INTEGER
);`,
      explanation:
        'CREATE TABLE defines the structure of a table. student_id identifies each record, PRIMARY KEY enforces uniqueness and name is required because of NOT NULL.',
    },

    {
      id: 'mc04-code-02',
      step: 2,
      title: 'Create a Courses table',
      action:
        'Use this SQL to store course information separately.',
      mapStepId: 'mc04-map-04',
      code: `CREATE TABLE courses (
  course_id INTEGER PRIMARY KEY,
  title TEXT NOT NULL
);`,
      explanation:
        'Courses are represented separately from students because they are a different entity. course_id uniquely identifies each course.',
    },

    {
      id: 'mc04-code-03',
      step: 3,
      title: 'Create an Enrollments table',
      action:
        'Use this table to represent the relationship between students and courses.',
      mapStepId: 'mc04-map-06',
      code: `CREATE TABLE enrollments (
  enrollment_id INTEGER PRIMARY KEY,
  student_id INTEGER NOT NULL,
  course_id INTEGER NOT NULL,
  FOREIGN KEY (student_id)
    REFERENCES students(student_id),
  FOREIGN KEY (course_id)
    REFERENCES courses(course_id)
);`,
      explanation:
        'The enrollment table connects students and courses. The foreign keys reference records in the related tables and make the relationship explicit.',
    },

    {
      id: 'mc04-code-04',
      step: 4,
      title: 'Insert a student',
      action:
        'Add a new student record.',
      mapStepId: 'mc04-map-10',
      code: `INSERT INTO students (
  student_id,
  name,
  marks
)
VALUES (
  101,
  'Avinash',
  85
);`,
      explanation:
        'INSERT creates a new record. The values are stored in the corresponding columns.',
    },

    {
      id: 'mc04-code-05',
      step: 5,
      title: 'Read student data',
      action:
        'Retrieve selected columns from the Students table.',
      mapStepId: 'mc04-map-08',
      code: `SELECT
  name,
  marks
FROM students;`,
      explanation:
        'SELECT chooses the information to return and FROM identifies the table from which the data should be read.',
    },

    {
      id: 'mc04-code-06',
      step: 6,
      title: 'Filter and sort students',
      action:
        'Find high-scoring students and show the highest scores first.',
      mapStepId: 'mc04-map-09',
      code: `SELECT
  name,
  marks
FROM students
WHERE marks > 80
ORDER BY marks DESC
LIMIT 5;`,
      explanation:
        'WHERE filters rows, ORDER BY controls their order and LIMIT restricts how many results are returned.',
    },

    {
      id: 'mc04-code-07',
      step: 7,
      title: 'Update a record',
      action:
        'Change the marks of one specific student.',
      mapStepId: 'mc04-map-10',
      code: `UPDATE students
SET marks = 90
WHERE student_id = 101;`,
      explanation:
        'UPDATE changes existing data. The WHERE condition is critical because it identifies which record should be changed.',
    },

    {
      id: 'mc04-code-08',
      step: 8,
      title: 'Delete a record',
      action:
        'Remove one specific student record.',
      mapStepId: 'mc04-map-10',
      code: `DELETE FROM students
WHERE student_id = 101;`,
      explanation:
        'DELETE removes matching records. A carefully chosen WHERE condition prevents accidentally removing unrelated records.',
    },

    {
      id: 'mc04-code-09',
      step: 9,
      title: 'Calculate an average',
      action:
        'Use an aggregate function to calculate average marks.',
      mapStepId: 'mc04-map-11',
      code: `SELECT
  AVG(marks) AS average_marks
FROM students;`,
      explanation:
        'AVG calculates the average across the selected rows and returns a summary value.',
    },

    {
      id: 'mc04-code-10',
      step: 10,
      title: 'Group and count records',
      action:
        'Count students within each city.',
      mapStepId: 'mc04-map-11',
      code: `SELECT
  city,
  COUNT(*) AS student_count
FROM students
GROUP BY city;`,
      explanation:
        'GROUP BY creates one group for each city and COUNT calculates how many records belong to each group.',
    },

    {
      id: 'mc04-code-11',
      step: 11,
      title: 'Filter grouped results',
      action:
        'Return only cities containing more than ten students.',
      mapStepId: 'mc04-map-11',
      code: `SELECT
  city,
  COUNT(*) AS student_count
FROM students
GROUP BY city
HAVING COUNT(*) > 10;`,
      explanation:
        'HAVING filters groups after aggregation. This differs from WHERE, which filters individual rows before grouping.',
    },

    {
      id: 'mc04-code-12',
      step: 12,
      title: 'Join related tables',
      action:
        'Retrieve student names together with the courses they are enrolled in.',
      mapStepId: 'mc04-map-12',
      code: `SELECT
  students.name,
  courses.title
FROM students
JOIN enrollments
  ON students.student_id = enrollments.student_id
JOIN courses
  ON enrollments.course_id = courses.course_id;`,
      explanation:
        'JOIN combines related records across tables by matching their key relationships.',
    },

    {
      id: 'mc04-code-13',
      step: 13,
      title: 'Trace the application flow',
      action:
        'Use the database operation as part of a larger application request.',
      mapStepId: 'mc04-map-13',
      code: `User
  ↓
Frontend
  ↓
API
  ↓
Application Logic
  ↓
SQL Query
  ↓
Database
  ↓
Result
  ↓
API Response
  ↓
Frontend`,
      explanation:
        'A real application normally places the database behind an application layer. The user interacts with the frontend while backend logic controls database access and prepares the response.',
    },
  ],

  finalResult:
    'You now have a practical SQL reference covering table creation, relationships, CRUD operations, filtering, sorting, aggregation, grouping, HAVING, JOIN and the application-to-database flow.',
}