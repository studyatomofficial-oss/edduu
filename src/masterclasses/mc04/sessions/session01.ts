import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc04Session01: SessionDefinition = {
  id: 'mc04-session-01',
  number: 1,
  stage: 'discover',
  title: 'What Is Data?',
  objective:
    'Understand what data is, how individual values become information, and why software systems depend on data.',
  experiences: [
    {
      id: 'mc04-s01-data-lesson',
      type: 'lesson',
      title: 'From Data to Information',
      description:
        'Build a simple mental model of data and understand why software systems need it.',
      lesson: {
        opening:
          'Every software system works with information. A student name, a temperature reading, a product price, a bank balance and a photograph are all examples of data. Before learning databases, we first need to understand what data actually means.',
        sections: [
          {
            heading: 'Data is a recorded value',
            explanation:
              'Data is a recorded representation of something that a person or computer can store, process or communicate.',
            example:
              'Avinash, 85, Mumbai and 2999 can each be stored as data values.',
          },
          {
            heading: 'A single value has meaning in context',
            explanation:
              'A value becomes more useful when we know what it represents.',
            example:
              'The value 85 could represent marks, temperature or age. The context tells us what the value means.',
          },
          {
            heading: 'Different kinds of data exist',
            explanation:
              'Software systems work with many forms of data, including numbers, text, dates, images, audio and other digital information.',
            example:
              'A student record may contain a name, roll number, date of birth, marks and profile image.',
          },
          {
            heading: 'Data becomes information through context',
            explanation:
              'When raw values are organized and interpreted in a meaningful context, they can communicate useful information.',
            example:
              '85, 72 and 91 become useful information when identified as a students three examination scores.',
          },
          {
            heading: 'Software depends on data',
            explanation:
              'Applications need data to remember users, products, transactions, preferences and results.',
            example:
              'A shopping application needs customer, product, order and payment data to operate.',
          },
          {
            heading: 'Databases organize data',
            explanation:
              'As the amount of data grows, software needs reliable ways to organize, store, retrieve and update it.',
            example:
              'A school application may store thousands of students and their marks in a database.',
          },
        ],
        realWorldConnection:
          'Almost every modern application depends on data. Social networks, banking systems, education platforms, hospitals and e-commerce applications all create, store, process and retrieve data continuously.',
        keyIdea:
          'Data is recorded information that software can store and process. Context gives values meaning, and databases help applications manage large amounts of data reliably.',
        recap: [
          'Data is a recorded representation of something.',
          'Context helps us understand what a value means.',
          'Data can represent numbers, text, dates, images and more.',
          'Organized data can become useful information.',
          'Software applications depend on data.',
          'Databases help applications manage growing amounts of data.',
        ],
      },
    },

    {
      id: 'mc04-s01-data-animation',
      type: 'animation',
      title: 'Watch Raw Values Become Useful Information',
      description:
        'Follow a set of raw values as context turns them into meaningful information.',
      animation: {
        visual: 'database',
        opening:
          'A computer does not automatically know what a value means. Meaning comes from context and organization.',
        parts: [
          {
            id: 'raw-values',
            label: 'RAW VALUES',
            explanation:
              'Start with values that have been recorded but have little context.',
            example:
              '85, 72, 91',
          },
          {
            id: 'context',
            label: 'ADD CONTEXT',
            explanation:
              'Identify what the values represent.',
            example:
              'Three examination scores.',
          },
          {
            id: 'record',
            label: 'CREATE A RECORD',
            explanation:
              'Connect related values so they describe one meaningful entity.',
            example:
              'Student: Avinash | Physics: 85 | Maths: 72 | Chemistry: 91',
          },
          {
            id: 'organize',
            label: 'ORGANIZE DATA',
            explanation:
              'Structure related records so software can work with them consistently.',
            example:
              'Many student records organized into a collection.',
          },
          {
            id: 'information',
            label: 'USEFUL INFORMATION',
            explanation:
              'Once data has context and structure, software can calculate, search and display meaningful results.',
            example:
              'Average score: 82.67',
          },
          {
            id: 'application',
            label: 'APPLICATION',
            explanation:
              'Applications use stored data to provide real functionality to users.',
            example:
              'A student dashboard showing marks and performance.',
          },
        ],
        closing:
          'Data becomes useful when software can understand its context, organize it and process it. This is why data organization becomes increasingly important as applications grow.',
      },
    },

    {
      id: 'mc04-s01-data-simulation',
      type: 'simulation',
      title: 'Give Meaning to the Data',
      description:
        'Connect raw values to the context that makes them meaningful.',
      simulation: {
        instruction:
          'Match each data value with the context that explains what it represents.',
        items: [
          {
            id: 'value-85',
            label: '85',
            description:
              'A recorded numeric value.',
            correctTargetId: 'marks-target',
          },
          {
            id: 'value-avinash',
            label: 'Avinash',
            description:
              'A recorded text value representing a person.',
            correctTargetId: 'student-target',
          },
          {
            id: 'value-2999',
            label: '2999',
            description:
              'A recorded numeric value that could represent money.',
            correctTargetId: 'price-target',
          },
          {
            id: 'value-2026',
            label: '2026-08-25',
            description:
              'A recorded value representing a date.',
            correctTargetId: 'date-target',
          },
        ],
        targets: [
          {
            id: 'marks-target',
            label: 'Exam Mark',
            description:
              'A score recorded for an examination.',
          },
          {
            id: 'student-target',
            label: 'Student Name',
            description:
              'A name identifying a student.',
          },
          {
            id: 'price-target',
            label: 'Product Price',
            description:
              'A monetary value associated with a product.',
          },
          {
            id: 'date-target',
            label: 'Date',
            description:
              'A value representing a calendar date.',
          },
        ],
        successMessage:
          'Excellent. You used context to understand what each data value represents.',
        failureMessage:
          'Remember that a raw value may have several possible meanings. Look at the context to determine what the value represents.',
      },
    },

    {
      id: 'mc04-s01-data-question',
      type: 'question',
      title: 'Data fundamentals check',
      description:
        'Check your understanding of data and context.',
      question: {
        id: 'mc04-s01-data',
        type: 'single-choice',
        question:
          'Why is context important when working with data?',
        options: [
          {
            id: 'context',
            text: 'Because context helps us understand what a recorded value represents',
            correct: true,
          },
          {
            id: 'speed',
            text: 'Because context automatically makes the computer processor faster',
            correct: false,
          },
          {
            id: 'memory',
            text: 'Because context physically increases the computer memory',
            correct: false,
          },
          {
            id: 'network',
            text: 'Because context automatically increases internet speed',
            correct: false,
          },
        ],
        explanation:
          'A value such as 85 can represent many different things. Context tells us what the value means and how it should be interpreted.',
        hints: [
          'Think about what a number means rather than the number itself.',
          'Context describes the role or meaning of a value.',
        ],
      },
    },
  ],
}