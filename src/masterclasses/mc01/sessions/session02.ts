import type {
  SessionDefinition,
} from '../../../masterclass-engine/types'

export const mc01Session02: SessionDefinition = {
  id: 'mc01-session-02',
  number: 2,
  stage: 'zero',
  title: 'How Does a Computer Run a Program?',
  objective:
    'Understand the basic journey of a program from storage into memory, through the CPU, and toward a result.',
  experiences: [
    {
      id: 'mc01-s02-sequence',
      type: 'sequencing',
      title: 'Follow the program',
      description:
        'Arrange the steps to show what happens when you open and use a program.',
      sequencing: {
        instruction:
          'Use the arrows to arrange these steps in the order they happen.',
        items: [
          {
            id: 'program-stored',
            label: 'Program is stored',
            description:
              'The program exists in storage so it can be used later.',
            correctPosition: 0,
          },
          {
            id: 'program-loaded',
            label: 'Program is loaded into RAM',
            description:
              'The information needed for the current work is brought into memory.',
            correctPosition: 1,
          },
          {
            id: 'cpu-works',
            label: 'CPU works with instructions and data',
            description:
              'The CPU processes the information it needs.',
            correctPosition: 2,
          },
          {
            id: 'result-produced',
            label: 'Result is produced',
            description:
              'The computer produces the result of the work.',
            correctPosition: 3,
          },
        ],
        successMessage:
          'Correct. You followed the basic journey from stored program to result.',
        failureMessage:
          'Not quite. Think about where the program starts, where active information goes, and when the CPU does its work.',
      },
    },
  ],
}
