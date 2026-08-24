import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc03Session07: SessionDefinition = {
  id: 'mc03-session-07',
  number: 7,
  stage: 'discover',
  title: 'Making Decisions',
  objective:
    'Understand how programs make decisions by evaluating conditions and choosing different paths of execution.',
  experiences: [
    {
      id: 'mc03-s07-decision-lesson',
      type: 'lesson',
      title: 'How does a program make a decision?',
      description:
        'Learn how conditions allow software to choose what should happen next.',
      lesson: {
        opening:
          'Real programs constantly make decisions. A login system decides whether credentials are valid, a shopping application decides whether a discount applies, and a game decides what happens after a player action.',
        sections: [
          {
            heading: 'A decision starts with a condition',
            explanation:
              'A condition is an expression whose result can be evaluated as True or False.',
            example:
              'score >= 50 asks whether the score is at least 50.',
          },
          {
            heading: 'True and False create two possible paths',
            explanation:
              'A program can use the result of a condition to decide which instructions should execute.',
            example:
              'If the condition is True, execute one group of instructions; otherwise follow another path.',
          },
          {
            heading: 'if introduces a decision',
            explanation:
              'In Python, an if statement allows a program to execute instructions when a condition is True.',
            example:
              'if score >= 50: print("Pass")',
          },
          {
            heading: 'else provides an alternative',
            explanation:
              'An else block provides instructions for the alternative path when the if condition is False.',
            example:
              'if score >= 50: print("Pass") else: print("Try again")',
          },
          {
            heading: 'Conditions can compare values',
            explanation:
              'Comparison operators allow programs to evaluate relationships between values.',
            example:
              'age >= 18, score == 100 and price < 500 are examples of comparisons.',
          },
          {
            heading: 'Decisions create control flow',
            explanation:
              'The order in which instructions execute can change depending on the result of a condition.',
            example:
              'Input → condition → selected path → output.',
          },
        ],
        realWorldConnection:
          'Authentication, payments, recommendations, access control, games and business workflows all rely on conditional decisions.',
        keyIdea:
          'A condition produces a True or False result, and control-flow statements use that result to choose what the program does next.',
        recap: [
          'Programs often need to make decisions.',
          'A condition can evaluate to True or False.',
          'if executes a path when its condition is True.',
          'else provides an alternative path.',
          'Comparison operators help evaluate relationships between values.',
          'Conditions change the flow of program execution.',
        ],
      },
    },

    {
      id: 'mc03-s07-decision-animation',
      type: 'animation',
      title: 'Inside a program decision',
      description:
        'Watch a program evaluate a condition and choose an execution path.',
      animation: {
        opening:
          'Follow a student score through a simple pass-or-try-again decision.',
        parts: [
          {
            id: 'input',
            label: 'INPUT',
            explanation:
              'The program starts with information that must be evaluated.',
            example:
              'score = 72',
          },
          {
            id: 'condition',
            label: 'CONDITION',
            explanation:
              'The program compares the value against a rule.',
            example:
              'score >= 50',
          },
          {
            id: 'true',
            label: 'TRUE',
            explanation:
              'The condition evaluates to True, so the first path is selected.',
            example:
              '72 >= 50 → True',
          },
          {
            id: 'path',
            label: 'EXECUTE PATH',
            explanation:
              'The instructions belonging to the selected path execute.',
            example:
              'print("Pass")',
          },
          {
            id: 'output',
            label: 'OUTPUT',
            explanation:
              'The selected path produces an observable result.',
            example:
              'Pass',
          },
        ],
        closing:
          'Decision-making changes which instructions execute without changing the underlying program structure.',
      },
    },

    {
      id: 'mc03-s07-decision-simulation',
      type: 'simulation',
      title: 'Choose the correct path',
      description:
        'Trace conditions and determine which execution path the program should follow.',
      simulation: {
        instruction:
          'Match each condition with the path that should execute.',
        items: [
          {
            id: 'pass',
            label: 'score = 72, score >= 50',
            description:
              'The condition evaluates to True.',
            correctTargetId: 'true-target',
          },
          {
            id: 'fail',
            label: 'score = 35, score >= 50',
            description:
              'The condition evaluates to False.',
            correctTargetId: 'false-target',
          },
          {
            id: 'true-path',
            label: 'print("Pass")',
            description:
              'Instruction for the True path.',
            correctTargetId: 'true-target',
          },
          {
            id: 'false-path',
            label: 'print("Try again")',
            description:
              'Instruction for the False path.',
            correctTargetId: 'false-target',
          },
        ],
        targets: [
          {
            id: 'true-target',
            label: 'TRUE PATH',
            description:
              'Execute when the condition evaluates to True.',
          },
          {
            id: 'false-target',
            label: 'FALSE PATH',
            description:
              'Execute when the condition evaluates to False.',
          },
        ],
        successMessage:
          'Correct. You can now trace how a condition determines program flow.',
        failureMessage:
          'Evaluate the condition first. Then select the path that matches True or False.',
      },
    },

    {
      id: 'mc03-s07-decision-question',
      type: 'question',
      title: 'Decision-making checkpoint',
      description:
        'Check your understanding of conditional execution.',
      question: {
        id: 'mc03-s07-decision',
        type: 'single-choice',
        question:
          'What happens when the condition in an if statement evaluates to True?',
        options: [
          {
            id: 'execute',
            text: 'The instructions inside the if path can execute',
            correct: true,
          },
          {
            id: 'loop',
            text: 'The program automatically repeats forever',
            correct: false,
          },
          {
            id: 'delete',
            text: 'All program variables are deleted',
            correct: false,
          },
          {
            id: 'internet',
            text: 'The computer automatically connects to the internet',
            correct: false,
          },
        ],
        explanation:
          'When an if condition evaluates to True, the instructions associated with that if block are eligible to execute.',
        hints: [
          'Evaluate the condition first.',
          'An if statement controls which instructions execute.',
        ],
      },
    },
  ],
}