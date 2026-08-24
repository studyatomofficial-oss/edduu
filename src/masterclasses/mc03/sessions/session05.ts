import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc03Session05: SessionDefinition = {
  id: 'mc03-session-05',
  number: 5,
  stage: 'discover',
  title: 'Working With Different Data',
  objective:
    'Understand why programs need different kinds of data and learn the role of numbers, strings and Boolean values in Python.',
  experiences: [
    {
      id: 'mc03-s05-data-lesson',
      type: 'lesson',
      title: 'Not all information is the same',
      description:
        'Discover why a program needs to distinguish between numbers, text and true-or-false information.',
      lesson: {
        opening:
          'A program can work with many kinds of information. A student score, a student name and whether a student passed are all data, but they represent different kinds of information and are used differently.',
        sections: [
          {
            heading: 'Numbers represent quantities',
            explanation:
              'Numbers can represent quantities that programs may calculate, compare or transform.',
            example:
              'A price such as 499, a score such as 85 and a quantity such as 3 can all be represented using numbers.',
          },
          {
            heading: 'Strings represent text',
            explanation:
              'A string represents a sequence of characters and is commonly used for names, messages, labels and other textual information.',
            example:
              'student_name = "Avinash"',
          },
          {
            heading: 'Boolean values represent two states',
            explanation:
              'A Boolean value represents either True or False and is useful when a program needs to represent a yes/no or on/off condition.',
            example:
              'is_logged_in = True',
          },
          {
            heading: 'The same-looking information can have different meanings',
            explanation:
              'The way information is represented affects what operations make sense for it.',
            example:
              '25 can be used in arithmetic, while "25" is text and should be treated as a string.',
          },
          {
            heading: 'Data types describe what kind of value we are working with',
            explanation:
              'A data type provides information about the kind of value represented and the operations that can meaningfully be performed with it.',
            example:
              'An integer, a string and a Boolean value serve different purposes in a program.',
          },
          {
            heading: 'Programs combine different kinds of information',
            explanation:
              'Real applications rarely work with only one type of data. They combine numbers, text and logical states to represent real-world information.',
            example:
              'A student record may contain a name, marks and a Boolean value indicating whether the student passed.',
          },
        ],
        realWorldConnection:
          'Applications work with mixed information such as names, prices, scores, dates, status flags and quantities.',
        keyIdea:
          'Different kinds of information need appropriate representations. Numbers, strings and Boolean values are fundamental building blocks for representing data in programs.',
        recap: [
          'Numbers represent quantities.',
          'Strings represent text.',
          'Boolean values represent True or False states.',
          'Different data types support different kinds of operations.',
          'Real applications combine multiple kinds of data.',
        ],
      },
    },

    {
      id: 'mc03-s05-data-animation',
      type: 'animation',
      title: 'Three kinds of information',
      description:
        'Watch the same real-world situation become different types of program data.',
      animation: {
        opening:
          'Take one student record and separate its information according to what each value represents.',
        parts: [
          {
            id: 'name',
            label: 'STRING',
            explanation:
              'Textual information is represented as a string.',
            example:
              'student_name = "Avinash"',
          },
          {
            id: 'score',
            label: 'NUMBER',
            explanation:
              'A measurable quantity can be represented using a number.',
            example:
              'score = 85',
          },
          {
            id: 'passed',
            label: 'BOOLEAN',
            explanation:
              'A yes-or-no state can be represented using True or False.',
            example:
              'passed = True',
          },
          {
            id: 'program',
            label: 'PROGRAM DATA',
            explanation:
              'The application can combine these values to represent a meaningful real-world record.',
            example:
              'Name + score + pass status',
          },
        ],
        closing:
          'Choosing an appropriate representation helps a program reason about information correctly.',
      },
    },

    {
      id: 'mc03-s05-data-simulation',
      type: 'simulation',
      title: 'Classify the data',
      description:
        'Match real-world information with the data representation that best describes it.',
      simulation: {
        instruction:
          'Connect each value with its appropriate data category.',
        items: [
          {
            id: 'score',
            label: '85',
            description:
              'A numerical student score.',
            correctTargetId: 'number-target',
          },
          {
            id: 'name',
            label: '"Avinash"',
            description:
              'A student name represented as text.',
            correctTargetId: 'string-target',
          },
          {
            id: 'passed',
            label: 'True',
            description:
              'A yes-or-no state.',
            correctTargetId: 'boolean-target',
          },
          {
            id: 'price',
            label: '499',
            description:
              'A numerical price.',
            correctTargetId: 'number-target',
          },
        ],
        targets: [
          {
            id: 'number-target',
            label: 'Number',
            description:
              'Used for numerical quantities.',
          },
          {
            id: 'string-target',
            label: 'String',
            description:
              'Used for textual information.',
          },
          {
            id: 'boolean-target',
            label: 'Boolean',
            description:
              'Used for True or False states.',
          },
        ],
        successMessage:
          'Excellent. You can now distinguish common kinds of program data.',
        failureMessage:
          'Ask what the value represents: a quantity, text or a True/False state.',
      },
    },

    {
      id: 'mc03-s05-data-question',
      type: 'question',
      title: 'Data types checkpoint',
      description:
        'Check whether you can identify common Python data categories.',
      question: {
        id: 'mc03-s05-data',
        type: 'single-choice',
        question:
          'Which representation is most appropriate for a student name such as Avinash?',
        options: [
          {
            id: 'string',
            text: 'A string',
            correct: true,
          },
          {
            id: 'boolean',
            text: 'A Boolean value',
            correct: false,
          },
          {
            id: 'number',
            text: 'A numerical value',
            correct: false,
          },
          {
            id: 'loop',
            text: 'A loop',
            correct: false,
          },
        ],
        explanation:
          'A student name is textual information, so a string is the appropriate representation.',
        hints: [
          'Ask whether the information is text, a quantity or a True/False state.',
          'Names are textual information.',
        ],
      },
    },
  ],
}