import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc03Session04: SessionDefinition = {
  id: 'mc03-session-04',
  number: 4,
  stage: 'discover',
  title: 'Variables and Data',
  objective:
    'Understand how programs represent information using values and variables, and how stored values can be used and changed during execution.',
  experiences: [
    {
      id: 'mc03-s04-variable-lesson',
      type: 'lesson',
      title: 'How does a program remember information?',
      description:
        'Discover how variables give names to values so a program can store, retrieve and work with information.',
      lesson: {
        opening:
          'A useful program needs to work with information. A student name, a price, a score or a calculation result must be available while the program runs. Variables provide names that allow programs to work with values.',
        sections: [
          {
            heading: 'Programs work with values',
            explanation:
              'A value is a piece of information that a program can use during execution.',
            example:
              '42, "Avinash", 99.5 and True are examples of values that a program may work with.',
          },
          {
            heading: 'A variable gives a value a name',
            explanation:
              'A variable provides a meaningful name through which a program can refer to a value.',
            example:
              'age = 25 gives the value 25 the variable name age.',
          },
          {
            heading: 'Assignment connects a name with a value',
            explanation:
              'In Python, assignment is used to associate a variable name with a value.',
            example:
              'score = 90 associates the name score with the value 90.',
          },
          {
            heading: 'Variables can be used in calculations',
            explanation:
              'Once a value has a variable name, that variable can participate in expressions and other operations.',
            example:
              'price = 100 followed by total = price + 20 uses the stored value in a new calculation.',
          },
          {
            heading: 'A variable can be reassigned',
            explanation:
              'During program execution, a variable can be assigned a new value.',
            example:
              'score = 90 followed by score = 95 changes the value associated with score.',
          },
          {
            heading: 'Good names communicate intent',
            explanation:
              'Meaningful variable names make programs easier for humans to read and understand.',
            example:
              'student_score communicates more information than a generic name such as x.',
          },
        ],
        realWorldConnection:
          'Applications constantly store changing information such as user names, prices, counters, status values and configuration settings.',
        keyIdea:
          'Variables give programs meaningful names through which values can be stored, accessed, used and changed during execution.',
        recap: [
          'Programs work with values.',
          'Variables provide names for values.',
          'Assignment associates a variable with a value.',
          'Variables can participate in calculations.',
          'Variables can receive new values during execution.',
          'Meaningful names improve readability.',
        ],
      },
    },

    {
      id: 'mc03-s04-variable-animation',
      type: 'animation',
      title: 'Inside a variable',
      description:
        'Visualise how a variable name becomes associated with a value and how reassignment changes it.',
      animation: {
        opening:
          'Watch a variable move from an empty name to a stored value and then receive a new value.',
        parts: [
          {
            id: 'name',
            label: 'VARIABLE',
            explanation:
              'A meaningful name gives the program a way to refer to information.',
            example:
              'score',
          },
          {
            id: 'assignment',
            label: 'ASSIGN',
            explanation:
              'Assignment associates the variable with a value.',
            example:
              'score = 90',
          },
          {
            id: 'value',
            label: 'VALUE',
            explanation:
              'The program can now use the associated value.',
            example:
              '90',
          },
          {
            id: 'use',
            label: 'USE',
            explanation:
              'The variable can participate in another operation.',
            example:
              'score + 5',
          },
          {
            id: 'reassign',
            label: 'REASSIGN',
            explanation:
              'The variable can later receive another value.',
            example:
              'score = 95',
          },
        ],
        closing:
          'A variable is useful because the program can refer to changing information through a meaningful name.',
      },
    },

    {
      id: 'mc03-s04-variable-simulation',
      type: 'simulation',
      title: 'Build the variable flow',
      description:
        'Connect variable operations to the values they represent.',
      simulation: {
        instruction:
          'Match each variable operation with what it means during program execution.',
        items: [
          {
            id: 'assignment',
            label: 'score = 90',
            description:
              'Associate a value with a variable.',
            correctTargetId: 'assign-target',
          },
          {
            id: 'use',
            label: 'score + 5',
            description:
              'Use the current value in an expression.',
            correctTargetId: 'use-target',
          },
          {
            id: 'reassignment',
            label: 'score = 95',
            description:
              'Give the variable a new value.',
            correctTargetId: 'reassign-target',
          },
          {
            id: 'name',
            label: 'score',
            description:
              'The name used by the program to refer to the value.',
            correctTargetId: 'name-target',
          },
        ],
        targets: [
          {
            id: 'assign-target',
            label: 'Assignment',
            description:
              'Connect a variable name with a value.',
          },
          {
            id: 'use-target',
            label: 'Use',
            description:
              'Use the current value in an expression.',
          },
          {
            id: 'reassign-target',
            label: 'Reassignment',
            description:
              'Associate the variable with a new value.',
          },
          {
            id: 'name-target',
            label: 'Variable name',
            description:
              'The identifier used to refer to the value.',
          },
        ],
        successMessage:
          'Excellent. You can now trace how a variable is named, assigned, used and changed.',
        failureMessage:
          'Look carefully at whether the statement creates a value, uses it, changes it or simply names it.',
      },
    },

    {
      id: 'mc03-s04-variable-question',
      type: 'question',
      title: 'Variable fundamentals check',
      description:
        'Check whether you understand what a variable does.',
      question: {
        id: 'mc03-s04-variable',
        type: 'single-choice',
        question:
          'What is the main purpose of a variable in a program?',
        options: [
          {
            id: 'store',
            text: 'To provide a named way for the program to work with a value',
            correct: true,
          },
          {
            id: 'hardware',
            text: 'To physically store data outside the computer',
            correct: false,
          },
          {
            id: 'internet',
            text: 'To automatically connect the program to the internet',
            correct: false,
          },
          {
            id: 'screen',
            text: 'To control the physical size of the monitor',
            correct: false,
          },
        ],
        explanation:
          'A variable gives a program a meaningful name through which it can refer to and work with a value.',
        hints: [
          'Think about how code refers to information.',
          'A variable is a programming concept, not a physical hardware component.',
        ],
      },
    },
  ],
}