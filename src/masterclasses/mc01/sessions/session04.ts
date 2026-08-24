import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc01Session04: SessionDefinition = {
  id: 'mc01-session-04',
  number: 4,
  stage: 'guided',
  title: 'Programs, Processes & Memory',
  objective:
    'Understand the difference between a stored program and a running process, and how RAM and CPU participate when a program runs.',
  experiences: [
    {
      id: 'mc01-s04-process-lesson',
      type: 'lesson',
      title: 'What happens when a program starts running?',
      description:
        'We just learned that programs live in storage. Now let us connect that idea to what happens when you actually open one.',
      lesson: {
        opening:
          'Last session we saw that a program can be stored as a file. But a stored program is not the same thing as a program that is currently running.',
        sections: [
          {
            heading: 'A program can exist in storage',
            explanation:
              'A program can be stored on a computer so it is available when you need it.',
            example:
              'A browser application can remain installed on your computer even when it is not running.',
          },
          {
            heading: 'Opening a program starts active work',
            explanation:
              'When you open a program, the computer brings the information needed for the current work into memory.',
            example:
              'Opening a browser causes information needed by the browser to be loaded into RAM.',
          },
          {
            heading: 'A running program is a process',
            explanation:
              'A process is a running instance of a program. The stored program and the running process are related, but they are not the same thing.',
            example:
              'The browser application stored on your computer can create a running browser process when you open it.',
          },
          {
            heading: 'RAM is the active workspace',
            explanation:
              'The running process needs working information in RAM so the computer can actively use it.',
            example:
              'A program currently being used needs access to information in memory while it runs.',
          },
          {
            heading: 'The CPU executes instructions',
            explanation:
              'The CPU follows instructions and performs the operations required by the running process.',
            example:
              'When a program needs to calculate something, the CPU performs the required operations.',
          },
        ],
        realWorldConnection:
          'Every time you open an app on a phone or computer, the same basic idea appears: stored software becomes active work using memory and CPU resources.',
        keyIdea:
          'A stored program can be loaded into RAM and run as a process while the CPU executes its instructions.',
        recap: [
          'A program can be stored for later use.',
          'Opening a program starts active work.',
          'A running instance of a program is a process.',
          'RAM holds active program information.',
          'The CPU executes instructions for the running process.',
        ],
      },
    },
    {
      id: 'mc01-s04-process-animation',
      type: 'animation',
      title: 'From program to process',
      description:
        'Follow what changes when a stored program is opened.',
      animation: {
        opening:
          'Let us follow one program from its quiet state in storage to active work.',
        parts: [
          {
            id: 'stored-program',
            label: 'Stored program',
            explanation:
              'The program exists in storage and is available to be opened.',
            example:
              'A browser application is installed on the computer.',
          },
          {
            id: 'ram',
            label: 'RAM',
            explanation:
              'Information needed for current execution is brought into memory.',
            example:
              'The active program needs working space in RAM.',
          },
          {
            id: 'process',
            label: 'Process',
            explanation:
              'The running instance of the program is a process.',
            example:
              'Opening the browser creates active browser work.',
          },
          {
            id: 'cpu',
            label: 'CPU',
            explanation:
              'The CPU executes instructions and performs operations.',
            example:
              'The CPU performs the operations requested by the running program.',
          },
        ],
        closing:
          'The important distinction is simple: storage keeps the program, RAM supports active work, the process represents the running program, and the CPU executes instructions.',
      },
    },
    {
      id: 'mc01-s04-process-sequence',
      type: 'sequencing',
      title: 'Follow a program as it starts',
      description:
        'Build the journey from stored software to active execution.',
      sequencing: {
        instruction:
          'Use the arrows to arrange the steps in the order they happen.',
        items: [
          {
            id: 'stored',
            label: 'Program exists in storage',
            description: 'The program is available for use.',
            correctPosition: 0,
          },
          {
            id: 'loaded',
            label: 'Needed information is loaded into RAM',
            description: 'The computer prepares active working information.',
            correctPosition: 1,
          },
          {
            id: 'process',
            label: 'A process is running',
            description: 'The program is now active.',
            correctPosition: 2,
          },
          {
            id: 'cpu',
            label: 'CPU executes instructions',
            description: 'The computer performs the required operations.',
            correctPosition: 3,
          },
        ],
        successMessage:
          'Correct. You followed the journey from stored software to active execution.',
        failureMessage:
          'Think about where the program starts, where active information goes, and when execution happens.',
      },
    },
    {
      id: 'mc01-s04-process-question',
      type: 'question',
      title: 'Process check',
      description:
        'Let us check the difference between a program and a running process.',
      question: {
        id: 'mc01-s04-process',
        type: 'single-choice',
        question:
          'What best describes a process?',
        options: [
          {
            id: 'stored-file',
            text: 'A program stored on disk',
            correct: false,
          },
          {
            id: 'running',
            text: 'A running instance of a program',
            correct: true,
          },
          {
            id: 'folder',
            text: 'A folder containing files',
            correct: false,
          },
          {
            id: 'network',
            text: 'A connection between computers',
            correct: false,
          },
        ],
        explanation:
          'A process is a running instance of a program. The stored program is the software that can be started.',
        hints: [
          'Think about the difference between software that is stored and software that is currently running.',
        ],
      },
    },
  ],
}