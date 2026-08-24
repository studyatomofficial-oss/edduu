import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc03Session01: SessionDefinition = {
  id: 'mc03-session-01',
  number: 1,
  stage: 'discover',
  title: 'What Is Programming?',
  objective:
    'Understand what programming is, why computers need precise instructions, and how a program turns an idea into an executable sequence of actions.',
  experiences: [
    {
      id: 'mc03-s01-programming-lesson',
      type: 'lesson',
      title: 'What does it mean to program a computer?',
      description:
        'Start from an everyday instruction and discover how programming turns human intent into precise instructions a computer can execute.',
      lesson: {
        opening:
          'Imagine telling another person how to make a cup of tea. You can leave out many obvious details because another person can use common sense. A computer cannot. Programming is the process of expressing instructions precisely enough for a computer to execute them.',
        sections: [
          {
            heading: 'A program is a set of instructions',
            explanation:
              'A program is a collection of instructions that describes actions a computer should perform to accomplish a task.',
            example:
              'A program can contain instructions that read information, calculate a result, make a decision and display an answer.',
          },
          {
            heading: 'Computers follow instructions precisely',
            explanation:
              'Computers execute instructions according to the rules of the programming language and the program itself.',
            example:
              'If a program says to add two values, the computer performs that operation according to the instruction.',
          },
          {
            heading: 'Programming languages give us a way to express instructions',
            explanation:
              'Programming languages provide rules and vocabulary that allow humans to express computational instructions in a form that can be processed by computers.',
            example:
              'Python provides readable syntax that can be used to express calculations, decisions and repeated operations.',
          },
          {
            heading: 'The computer executes the program',
            explanation:
              'Writing code is only one part of programming. The instructions must be processed and executed so that the computer can produce a result.',
            example:
              'A Python program can receive an input, perform a calculation and produce an output.',
          },
          {
            heading: 'Programming connects intention to behaviour',
            explanation:
              'The programmer starts with a desired result and creates instructions that transform the available input into that result.',
            example:
              'If the goal is to calculate a student average, the program needs instructions for receiving marks, adding them and calculating the average.',
          },
        ],
        realWorldConnection:
          'Every software product depends on programs that translate human requirements into precise computational instructions.',
        keyIdea:
          'Programming is the process of expressing precise instructions that a computer can process and execute to produce a desired result.',
        recap: [
          'A program contains instructions.',
          'Computers execute instructions precisely.',
          'Programming languages provide a way to express those instructions.',
          'A program transforms inputs through processing into outputs.',
          'Programming connects human intent with computer behaviour.',
        ],
      },
    },

    {
      id: 'mc03-s01-programming-animation',
      type: 'animation',
      title: 'From idea to computer output',
      description:
        'Follow how a simple human goal becomes a program and finally produces a result.',
      animation: {
        opening:
          'Start with a human goal. Follow the idea as it becomes precise instructions, executable code and finally a computer-generated result.',
        parts: [
          {
            id: 'goal',
            label: 'GOAL',
            explanation:
              'The process begins with something we want the computer to accomplish.',
            example:
              'Calculate the total cost of three products.',
          },
          {
            id: 'instructions',
            label: 'INSTRUCTIONS',
            explanation:
              'The goal is broken into precise steps that can be executed.',
            example:
              'Read the three prices, add them and produce the total.',
          },
          {
            id: 'code',
            label: 'PROGRAM',
            explanation:
              'The instructions are represented using a programming language.',
            example:
              'Python code can express the required calculation.',
          },
          {
            id: 'execution',
            label: 'EXECUTION',
            explanation:
              'The computer processes the program instructions.',
            example:
              'The program performs the addition using the supplied values.',
          },
          {
            id: 'output',
            label: 'OUTPUT',
            explanation:
              'The execution produces a result that can be observed or used.',
            example:
              'The total price is displayed to the user.',
          },
        ],
        closing:
          'Programming connects a goal to a result through precise instructions and execution.',
      },
    },

    {
      id: 'mc03-s01-programming-simulation',
      type: 'simulation',
      title: 'Build the programming pipeline',
      description:
        'Connect the major stages between a human goal and the computer output.',
      simulation: {
        instruction:
          'Connect each programming stage with the role it performs.',
        items: [
          {
            id: 'goal',
            label: 'Calculate a student average',
            description:
              'The desired outcome that the program should achieve.',
            correctTargetId: 'goal-target',
          },
          {
            id: 'instructions',
            label: 'Read marks and calculate the average',
            description:
              'Precise steps describing what needs to happen.',
            correctTargetId: 'instructions-target',
          },
          {
            id: 'program',
            label: 'Python statements',
            description:
              'The instructions expressed using a programming language.',
            correctTargetId: 'program-target',
          },
          {
            id: 'result',
            label: 'Average = 82',
            description:
              'The result produced after execution.',
            correctTargetId: 'output-target',
          },
        ],
        targets: [
          {
            id: 'goal-target',
            label: 'Goal',
            description:
              'What we want the computer to accomplish.',
          },
          {
            id: 'instructions-target',
            label: 'Instructions',
            description:
              'Precise steps describing the required work.',
          },
          {
            id: 'program-target',
            label: 'Program',
            description:
              'Instructions expressed in a programming language.',
          },
          {
            id: 'output-target',
            label: 'Output',
            description:
              'The result produced by the program.',
          },
        ],
        successMessage:
          'Excellent. You connected the human goal to the final computer output.',
        failureMessage:
          'Start with what you want to achieve, then think about the instructions, the program and finally the result.',
      },
    },

    {
      id: 'mc03-s01-programming-question',
      type: 'question',
      title: 'Programming foundation check',
      description:
        'Check whether you understand the basic purpose of programming.',
      question: {
        id: 'mc03-s01-programming',
        type: 'single-choice',
        question:
          'What is the primary purpose of a program?',
        options: [
          {
            id: 'instructions',
            text: 'To provide instructions that a computer can execute',
            correct: true,
          },
          {
            id: 'hardware',
            text: 'To physically manufacture computer hardware',
            correct: false,
          },
          {
            id: 'internet',
            text: 'To automatically create an internet connection',
            correct: false,
          },
          {
            id: 'screen',
            text: 'To replace the computer screen',
            correct: false,
          },
        ],
        explanation:
          'A program contains instructions that a computer can process and execute to accomplish a task.',
        hints: [
          'Think about what a program actually tells the computer to do.',
          'A program is software, not physical hardware.',
        ],
      },
    },
  ],
}