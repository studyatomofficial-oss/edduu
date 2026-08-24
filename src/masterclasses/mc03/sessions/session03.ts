import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc03Session03: SessionDefinition = {
  id: 'mc03-session-03',
  number: 3,
  stage: 'discover',
  title: 'From Instructions to Code',
  objective:
    'Understand how a problem-solving algorithm becomes executable code and begin connecting programming ideas with Python.',
  experiences: [
    {
      id: 'mc03-s03-code-lesson',
      type: 'lesson',
      title: 'How does an algorithm become a program?',
      description:
        'Move from plain-language instructions to code and understand why programming languages exist.',
      lesson: {
        opening:
          'An algorithm can describe a solution in ordinary language, but a computer needs instructions expressed according to the rules of a programming language. Coding is the process of turning those solution steps into executable instructions.',
        sections: [
          {
            heading: 'An algorithm describes the solution',
            explanation:
              'An algorithm focuses on the logical steps required to solve a problem without depending on one particular programming language.',
            example:
              'To calculate a total: receive the prices, add them together and display the total.',
          },
          {
            heading: 'Code expresses the algorithm',
            explanation:
              'Code represents the algorithm using the syntax and rules of a programming language.',
            example:
              'Python can express an addition operation using a simple mathematical expression.',
          },
          {
            heading: 'Syntax gives code its structure',
            explanation:
              'Programming languages have rules about how instructions must be written. These rules are called syntax.',
            example:
              'Python uses specific keywords, operators, indentation rules and punctuation patterns.',
          },
          {
            heading: 'Meaning matters more than memorising symbols',
            explanation:
              'A beginner should understand what the code is trying to accomplish instead of treating code as a collection of mysterious symbols.',
            example:
              'The expression 10 + 20 represents an addition operation whose result is 30.',
          },
          {
            heading: 'Python is our first implementation language',
            explanation:
              'Python is used in this masterclass as the first practical language for expressing programming concepts and building working programs.',
            example:
              'A Python statement can calculate a value and another statement can display that value.',
          },
          {
            heading: 'Execution turns code into behaviour',
            explanation:
              'Writing code defines instructions. Execution is when those instructions are processed and produce observable behaviour or output.',
            example:
              'A Python program containing a calculation can execute that calculation and display its result.',
          },
        ],
        realWorldConnection:
          'Every software application starts with requirements and logic that eventually have to be represented as executable code.',
        keyIdea:
          'An algorithm explains how to solve a problem; code expresses that solution using the rules of a programming language so it can be executed.',
        recap: [
          'An algorithm describes solution steps.',
          'Code expresses those steps in a programming language.',
          'Syntax defines how code must be written.',
          'Python will be our first practical programming language.',
          'Execution turns written instructions into observable behaviour.',
        ],
      },
    },

    {
      id: 'mc03-s03-code-animation',
      type: 'animation',
      title: 'Algorithm to executable code',
      description:
        'Watch a plain-language solution become code and then produce an output.',
      animation: {
        opening:
          'Follow one simple calculation through the complete journey from human reasoning to executable Python.',
        parts: [
          {
            id: 'problem',
            label: 'PROBLEM',
            explanation:
              'Start with a task that needs to be solved.',
            example:
              'Calculate the total of two prices.',
          },
          {
            id: 'algorithm',
            label: 'ALGORITHM',
            explanation:
              'Describe the logical steps independently of programming syntax.',
            example:
              'Take price one, take price two, add them and show the total.',
          },
          {
            id: 'code',
            label: 'PYTHON CODE',
            explanation:
              'Express the algorithm using Python syntax.',
            example:
              'total = 100 + 200',
          },
          {
            id: 'execution',
            label: 'EXECUTION',
            explanation:
              'The Python runtime processes the instruction.',
            example:
              'The addition operation is evaluated.',
          },
          {
            id: 'output',
            label: 'OUTPUT',
            explanation:
              'The program produces an observable result.',
            example:
              '300',
          },
        ],
        closing:
          'The syntax changes when we move from an algorithm to code, but the underlying problem-solving logic remains the same.',
      },
    },

    {
      id: 'mc03-s03-code-simulation',
      type: 'simulation',
      title: 'Match the algorithm to code',
      description:
        'Connect each programming concept with the representation that belongs to it.',
      simulation: {
        instruction:
          'Match the problem-solving idea with its programming representation.',
        items: [
          {
            id: 'algorithm',
            label: 'Add the two prices',
            description:
              'The logical operation required by the solution.',
            correctTargetId: 'algorithm-target',
          },
          {
            id: 'code',
            label: 'total = 100 + 200',
            description:
              'The solution expressed using Python syntax.',
            correctTargetId: 'code-target',
          },
          {
            id: 'execution',
            label: 'Python evaluates the expression',
            description:
              'The written instruction is processed.',
            correctTargetId: 'execution-target',
          },
          {
            id: 'output',
            label: '300',
            description:
              'The resulting value becomes observable.',
            correctTargetId: 'output-target',
          },
        ],
        targets: [
          {
            id: 'algorithm-target',
            label: 'Algorithm',
            description:
              'Logical steps used to solve the problem.',
          },
          {
            id: 'code-target',
            label: 'Code',
            description:
              'The algorithm expressed in a programming language.',
          },
          {
            id: 'execution-target',
            label: 'Execution',
            description:
              'Processing of the written instructions.',
          },
          {
            id: 'output-target',
            label: 'Output',
            description:
              'The result produced by execution.',
          },
        ],
        successMessage:
          'Correct. You can now see the path from logical solution to executable code.',
        failureMessage:
          'Separate the idea of the solution from the code that represents it, then from execution and output.',
      },
    },

    {
      id: 'mc03-s03-code-question',
      type: 'question',
      title: 'Algorithm and code check',
      description:
        'Check the difference between an algorithm and its implementation.',
      question: {
        id: 'mc03-s03-code',
        type: 'single-choice',
        question:
          'Which statement best describes the relationship between an algorithm and code?',
        options: [
          {
            id: 'correct',
            text: 'An algorithm describes the solution logic and code expresses that logic in a programming language',
            correct: true,
          },
          {
            id: 'same',
            text: 'An algorithm and code are always exactly the same thing',
            correct: false,
          },
          {
            id: 'hardware',
            text: 'An algorithm is a physical computer component',
            correct: false,
          },
          {
            id: 'output',
            text: 'Code is only the final output produced by a program',
            correct: false,
          },
        ],
        explanation:
          'An algorithm describes the logical solution, while code implements that solution using the rules of a programming language.',
        hints: [
          'Think about logic versus implementation.',
          'Code is something we write so the computer can execute the solution.',
        ],
      },
    },
  ],
}