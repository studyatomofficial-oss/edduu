import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc03Session02: SessionDefinition = {
  id: 'mc03-session-02',
  number: 2,
  stage: 'discover',
  title: 'Thinking Like a Programmer',
  objective:
    'Learn how to break a problem into smaller steps, identify inputs and outputs, and create a clear sequence of instructions before writing code.',
  experiences: [
    {
      id: 'mc03-s02-problem-lesson',
      type: 'lesson',
      title: 'How do programmers solve problems?',
      description:
        'Before writing code, learn how to turn a large problem into smaller, precise and manageable steps.',
      lesson: {
        opening:
          'A programmer does not begin every problem by typing code immediately. First, the problem needs to be understood. Good programming starts by breaking the problem into smaller pieces that can be described clearly.',
        sections: [
          {
            heading: 'Start with the problem',
            explanation:
              'Programming begins with understanding what needs to be solved and what result is expected.',
            example:
              'Instead of saying "build a marks system", define the exact result: calculate a student average and display it.',
          },
          {
            heading: 'Identify the input',
            explanation:
              'Input is the information a program needs in order to perform its work.',
            example:
              'Student marks can be the input for an average-calculation program.',
          },
          {
            heading: 'Identify the output',
            explanation:
              'Output is the information or result produced by the program after processing the input.',
            example:
              'The calculated average can be displayed as the output.',
          },
          {
            heading: 'Break the problem into steps',
            explanation:
              'A complex task becomes easier to reason about when it is divided into smaller operations that can be performed in sequence.',
            example:
              'Read marks, add marks, count marks, divide the total by the count and display the result.',
          },
          {
            heading: 'Create an algorithm before coding',
            explanation:
              'An algorithm is a defined sequence of steps for solving a problem. Thinking through the algorithm reduces ambiguity before implementation.',
            example:
              'A programmer can write the average-calculation steps in plain language before converting them into Python.',
          },
        ],
        realWorldConnection:
          'Professional software teams spend significant time understanding requirements and breaking large problems into smaller pieces before implementation.',
        keyIdea:
          'Programming starts with problem solving: understand the goal, identify inputs and outputs, break the work into steps and then turn those steps into code.',
        recap: [
          'Understand the problem before coding.',
          'Identify the required inputs.',
          'Define the expected output.',
          'Break complex work into smaller steps.',
          'An algorithm describes the steps used to solve the problem.',
        ],
      },
    },

    {
      id: 'mc03-s02-problem-animation',
      type: 'animation',
      title: 'Turn a Big Problem Into Small Steps',
      description:
        'Watch a large problem become smaller, clearer and ready to turn into code.',
      animation: {
        opening:
          'A programmer does not attack a large problem all at once. First, the problem is broken into smaller pieces, the pieces are arranged in order and the result becomes an algorithm.',
        parts: [
          {
            id: 'big-problem',
            label: 'BIG PROBLEM',
            explanation:
              'Start by clearly identifying what the program needs to accomplish.',
            example:
              'Calculate the average of three student marks.',
          },
          {
            id: 'break-down',
            label: 'BREAK IT DOWN',
            explanation:
              'Turn the large problem into smaller questions that can be solved one at a time.',
            example:
              'What information do we need? What calculation must happen? What result should appear?',
          },
          {
            id: 'input',
            label: 'INPUT',
            explanation:
              'Identify the information the program needs before it can perform the work.',
            example:
              'Mark 1, Mark 2 and Mark 3.',
          },
          {
            id: 'process',
            label: 'PROCESS',
            explanation:
              'Identify the operations that transform the input into the required result.',
            example:
              'Add the three marks and divide the total by three.',
          },
          {
            id: 'output',
            label: 'OUTPUT',
            explanation:
              'Define the result that the program should produce.',
            example:
              'Display the calculated average.',
          },
          {
            id: 'sequence',
            label: 'ORDER THE STEPS',
            explanation:
              'Arrange the smaller operations into a clear sequence that can be followed from beginning to end.',
            example:
              'Read marks → add marks → divide by three → display average.',
          },
          {
            id: 'algorithm',
            label: 'ALGORITHM',
            explanation:
              'The ordered sequence becomes an algorithm: a precise procedure for solving the problem.',
            example:
              'A step-by-step solution that can later be translated into Python code.',
          },
          {
            id: 'ready-to-code',
            label: 'READY TO CODE',
            explanation:
              'Once the algorithm is clear, the programmer can translate the steps into programming instructions.',
            example:
              'Problem solved on paper first, implementation comes next.',
          },
        ],
        closing:
          'Good programmers do not simply start typing code. They first understand the problem, break it down, identify inputs and outputs, arrange the work into steps and create an algorithm that is ready to implement.',
      },
    },

    {
      id: 'mc03-s02-problem-simulation',
      type: 'simulation',
      title: 'Arrange the solution',
      description:
        'Put the steps of a simple programming problem into the correct order.',
      simulation: {
        instruction:
          'Connect each stage to its role in solving the programming problem.',
        items: [
          {
            id: 'define',
            label: 'Define the required result',
            description:
              'Clarify what the program should produce.',
            correctTargetId: 'problem-target',
          },
          {
            id: 'input',
            label: 'Collect the three marks',
            description:
              'Obtain the information needed by the calculation.',
            correctTargetId: 'input-target',
          },
          {
            id: 'process',
            label: 'Add and divide the marks',
            description:
              'Perform the operations needed to solve the problem.',
            correctTargetId: 'process-target',
          },
          {
            id: 'output',
            label: 'Display the average',
            description:
              'Present the result produced by the solution.',
            correctTargetId: 'output-target',
          },
        ],
        targets: [
          {
            id: 'problem-target',
            label: 'Problem / Goal',
            description:
              'What the program needs to accomplish.',
          },
          {
            id: 'input-target',
            label: 'Input',
            description:
              'Information supplied to the program.',
          },
          {
            id: 'process-target',
            label: 'Process',
            description:
              'Operations performed on the input.',
          },
          {
            id: 'output-target',
            label: 'Output',
            description:
              'Result produced by the program.',
          },
        ],
        successMessage:
          'Excellent. You separated the problem, input, processing and output.',
        failureMessage:
          'Think about the order: what are we trying to achieve, what information do we have, what do we do with it, and what result should appear?',
      },
    },

    {
      id: 'mc03-s02-problem-question',
      type: 'question',
      title: 'Problem-solving check',
      description:
        'Check your understanding of algorithmic thinking.',
      question: {
        id: 'mc03-s02-problem',
        type: 'single-choice',
        question:
          'Why should a programmer break a complex problem into smaller steps before writing code?',
        options: [
          {
            id: 'clarity',
            text: 'To make the solution easier to understand, implement and verify',
            correct: true,
          },
          {
            id: 'hardware',
            text: 'To increase the physical memory of the computer',
            correct: false,
          },
          {
            id: 'internet',
            text: 'To make the internet connection faster',
            correct: false,
          },
          {
            id: 'screen',
            text: 'To automatically improve the display resolution',
            correct: false,
          },
        ],
        explanation:
          'Breaking a problem into smaller steps reduces complexity and makes the solution easier to reason about before and during implementation.',
        hints: [
          'Think about reducing complexity.',
          'The goal is clearer reasoning, not changing the hardware.',
        ],
      },
    },
  ],
}