import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc03Session08: SessionDefinition = {
  id: 'mc03-session-08',
  number: 8,
  stage: 'discover',
  title: 'Repeating Work',
  objective:
    'Understand why programs use loops and learn how repeated instructions can be controlled using for and while loops.',
  experiences: [
    {
      id: 'mc03-s08-loop-lesson',
      type: 'lesson',
      title: 'Why do programs need loops?',
      description:
        'Discover how loops allow software to repeat work without writing the same instructions again and again.',
      lesson: {
        opening:
          'Software frequently needs to perform the same kind of operation many times. A program may process every student, display several messages, examine items in a list or keep waiting until a condition changes. Loops provide a structured way to repeat work.',
        sections: [
          {
            heading: 'Repetition is everywhere',
            explanation:
              'Many real-world computing tasks require the same operation to be performed repeatedly.',
            example:
              'A program may need to process 1,000 student records using the same general operation.',
          },
          {
            heading: 'A loop avoids unnecessary duplication',
            explanation:
              'Instead of manually writing the same instruction many times, a loop describes the repetition once.',
            example:
              'A loop can print a message for each item rather than requiring a separate print statement for every item.',
          },
          {
            heading: 'for loops repeat over a sequence',
            explanation:
              'A for loop is commonly used when a program needs to process each item in a sequence or repeat a known pattern.',
            example:
              'for name in names: print(name)',
          },
          {
            heading: 'while loops repeat while a condition remains true',
            explanation:
              'A while loop continues executing its body while its condition evaluates to True.',
            example:
              'while count < 5: count = count + 1',
          },
          {
            heading: 'A loop has control flow',
            explanation:
              'Each repetition follows a defined execution path and eventually reaches a point where the loop stops.',
            example:
              'Check → execute → update → check again.',
          },
          {
            heading: 'Loops must have a stopping idea',
            explanation:
              'A useful loop needs a condition, sequence or other mechanism that determines when repetition should end.',
            example:
              'A counter can move toward a limit so a while loop eventually becomes False.',
          },
        ],
        realWorldConnection:
          'Data processing, search, reporting, automation, games and backend services all use repetition to process many items or respond to changing conditions.',
        keyIdea:
          'Loops allow a program to repeat instructions in a controlled way instead of duplicating the same code manually.',
        recap: [
          'Programs frequently need to repeat work.',
          'Loops reduce unnecessary code duplication.',
          'for loops commonly process sequences.',
          'while loops repeat while a condition remains True.',
          'Loop execution follows a control-flow pattern.',
          'A loop needs a way to stop or move toward termination.',
        ],
      },
    },

    {
      id: 'mc03-s08-loop-animation',
      type: 'animation',
      title: 'Inside a loop',
      description:
        'Watch one instruction execute repeatedly until the loop reaches its stopping point.',
      animation: {
        opening:
          'Follow a counter through repeated execution to see how a loop works.',
        parts: [
          {
            id: 'start',
            label: 'START',
            explanation:
              'The program begins with an initial state.',
            example:
              'count = 1',
          },
          {
            id: 'check',
            label: 'CHECK',
            explanation:
              'The loop evaluates whether another repetition should occur.',
            example:
              'count <= 3',
          },
          {
            id: 'execute',
            label: 'EXECUTE',
            explanation:
              'The instructions inside the loop run once.',
            example:
              'print(count)',
          },
          {
            id: 'update',
            label: 'UPDATE',
            explanation:
              'The program changes the state so the next iteration can be evaluated.',
            example:
              'count = count + 1',
          },
          {
            id: 'repeat',
            label: 'REPEAT',
            explanation:
              'Control returns to the condition and the process continues while the condition remains satisfied.',
            example:
              '1 → 2 → 3',
          },
        ],
        closing:
          'A loop is controlled repetition: execute, update and evaluate again until the stopping condition is reached.',
      },
    },

    {
      id: 'mc03-s08-loop-simulation',
      type: 'simulation',
      title: 'Build the loop flow',
      description:
        'Arrange the pieces of a loop into the correct execution sequence.',
      simulation: {
        instruction:
          'Match each loop operation with its position in the repetition cycle.',
        items: [
          {
            id: 'check',
            label: 'count <= 3',
            description:
              'Determine whether another iteration should happen.',
            correctTargetId: 'check-target',
          },
          {
            id: 'execute',
            label: 'print(count)',
            description:
              'Perform the repeated work.',
            correctTargetId: 'execute-target',
          },
          {
            id: 'update',
            label: 'count = count + 1',
            description:
              'Change the state before the next iteration.',
            correctTargetId: 'update-target',
          },
          {
            id: 'stop',
            label: 'Condition becomes False',
            description:
              'The repetition ends.',
            correctTargetId: 'stop-target',
          },
        ],
        targets: [
          {
            id: 'check-target',
            label: 'CHECK',
            description:
              'Evaluate whether repetition should continue.',
          },
          {
            id: 'execute-target',
            label: 'EXECUTE',
            description:
              'Run the repeated instructions.',
          },
          {
            id: 'update-target',
            label: 'UPDATE',
            description:
              'Change the state for the next iteration.',
          },
          {
            id: 'stop-target',
            label: 'STOP',
            description:
              'End the loop when its continuation condition is no longer satisfied.',
          },
        ],
        successMessage:
          'Excellent. You can now trace the basic execution cycle of a loop.',
        failureMessage:
          'Think in the order: check → execute → update → check again, until the condition becomes False.',
      },
    },

    {
      id: 'mc03-s08-loop-question',
      type: 'question',
      title: 'Loop checkpoint',
      description:
        'Check whether you understand the purpose of loops.',
      question: {
        id: 'mc03-s08-loop',
        type: 'single-choice',
        question:
          'Why are loops useful in programming?',
        options: [
          {
            id: 'repeat',
            text: 'They allow instructions to be repeated in a controlled way',
            correct: true,
          },
          {
            id: 'hardware',
            text: 'They physically increase computer memory',
            correct: false,
          },
          {
            id: 'syntax',
            text: 'They remove the need for programming language syntax',
            correct: false,
          },
          {
            id: 'internet',
            text: 'They automatically make every program an internet application',
            correct: false,
          },
        ],
        explanation:
          'Loops provide controlled repetition so programs can perform recurring work without duplicating the same instructions manually.',
        hints: [
          'Think about repeated work.',
          'A loop is a control-flow mechanism.',
        ],
      },
    },
  ],
}