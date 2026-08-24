import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc03Session06: SessionDefinition = {
  id: 'mc03-session-06',
  number: 6,
  stage: 'discover',
  title: 'Changing and Combining Data',
  objective:
    'Understand how programs transform values using expressions and operations, and how multiple values can be combined to produce new results.',
  experiences: [
    {
      id: 'mc03-s06-operations-lesson',
      type: 'lesson',
      title: 'How does a program transform data?',
      description:
        'Learn how expressions and operators allow programs to calculate, combine and transform existing values.',
      lesson: {
        opening:
          'Programs become useful when they do more than store information. They transform information. A price can be increased, two scores can be added, or text can be combined to create a new value.',
        sections: [
          {
            heading: 'An expression produces a value',
            explanation:
              'An expression combines values and operations in a way that can be evaluated to produce a result.',
            example:
              '10 + 20 produces the value 30.',
          },
          {
            heading: 'Arithmetic operations transform numbers',
            explanation:
              'Arithmetic operators allow programs to add, subtract, multiply and divide numerical values.',
            example:
              'total = price * quantity',
          },
          {
            heading: 'Operators describe the operation',
            explanation:
              'An operator tells the program what kind of transformation or relationship should be applied.',
            example:
              '+ performs addition while * performs multiplication.',
          },
          {
            heading: 'Results can be stored',
            explanation:
              'The result of an expression can be associated with a variable so that the program can use it later.',
            example:
              'total = price * quantity',
          },
          {
            heading: 'Values can be combined',
            explanation:
              'Programs can combine information to create new values, including combining textual information.',
            example:
              'first_name + " " + last_name',
          },
          {
            heading: 'Transformation creates a flow of data',
            explanation:
              'A program often receives data, transforms it through one or more operations and produces a new value or output.',
            example:
              'Input price → multiply by quantity → calculate total → display total.',
          },
        ],
        realWorldConnection:
          'Business systems constantly transform raw information into useful results such as totals, discounts, scores, reports and messages.',
        keyIdea:
          'Programs become useful by transforming existing values through expressions and operations to create new values.',
        recap: [
          'Expressions can produce values.',
          'Operators describe operations performed on values.',
          'Arithmetic operators transform numerical data.',
          'Expression results can be stored in variables.',
          'Different values can be combined to create new information.',
          'Programs often follow an input → process → output flow.',
        ],
      },
    },

    {
      id: 'mc03-s06-operations-animation',
      type: 'animation',
      title: 'From raw values to a result',
      description:
        'Follow data as a program transforms separate values into a useful result.',
      animation: {
        opening:
          'Watch a simple shopping calculation move through the program as separate inputs become one final result.',
        parts: [
          {
            id: 'input',
            label: 'INPUT',
            explanation:
              'The program receives the values it needs.',
            example:
              'price = 200, quantity = 3',
          },
          {
            id: 'operator',
            label: 'OPERATION',
            explanation:
              'An operator describes how the values should be transformed.',
            example:
              'price * quantity',
          },
          {
            id: 'expression',
            label: 'EXPRESSION',
            explanation:
              'The expression combines the values and operation.',
            example:
              '200 * 3',
          },
          {
            id: 'result',
            label: 'RESULT',
            explanation:
              'Execution produces a new value.',
            example:
              '600',
          },
          {
            id: 'output',
            label: 'OUTPUT',
            explanation:
              'The program can display or use the resulting value.',
            example:
              'Total = 600',
          },
        ],
        closing:
          'Transformation is at the heart of programming: take information, process it and produce a new result.',
      },
    },

    {
      id: 'mc03-s06-operations-simulation',
      type: 'simulation',
      title: 'Build the data transformation',
      description:
        'Connect inputs, operations and results to understand how expressions transform data.',
      simulation: {
        instruction:
          'Match each programming element with its role in transforming data.',
        items: [
          {
            id: 'price',
            label: 'price = 200',
            description:
              'A numerical input.',
            correctTargetId: 'input-target',
          },
          {
            id: 'quantity',
            label: 'quantity = 3',
            description:
              'Another numerical input.',
            correctTargetId: 'input-target',
          },
          {
            id: 'expression',
            label: 'price * quantity',
            description:
              'An expression that combines the values.',
            correctTargetId: 'process-target',
          },
          {
            id: 'result',
            label: '600',
            description:
              'The value produced by the expression.',
            correctTargetId: 'result-target',
          },
        ],
        targets: [
          {
            id: 'input-target',
            label: 'Input',
            description:
              'Values supplied to the calculation.',
          },
          {
            id: 'process-target',
            label: 'Process',
            description:
              'The operation that transforms the inputs.',
          },
          {
            id: 'result-target',
            label: 'Result',
            description:
              'The new value produced by the operation.',
          },
        ],
        successMessage:
          'Excellent. You traced the complete input-to-result transformation.',
        failureMessage:
          'Separate the original values from the operation and the result produced after the operation.',
      },
    },

    {
      id: 'mc03-s06-operations-question',
      type: 'question',
      title: 'Expression checkpoint',
      description:
        'Check whether you understand how expressions transform data.',
      question: {
        id: 'mc03-s06-operations',
        type: 'single-choice',
        question:
          'What does the expression price * quantity represent?',
        options: [
          {
            id: 'multiply',
            text: 'It calculates the product of price and quantity',
            correct: true,
          },
          {
            id: 'text',
            text: 'It converts price into text',
            correct: false,
          },
          {
            id: 'boolean',
            text: 'It automatically creates a True or False value',
            correct: false,
          },
          {
            id: 'loop',
            text: 'It repeats the program forever',
            correct: false,
          },
        ],
        explanation:
          'The * operator performs multiplication, so price * quantity calculates the product of the two values.',
        hints: [
          'Look at the operator between the two values.',
          'The asterisk symbol represents multiplication in Python.',
        ],
      },
    },
  ],
}