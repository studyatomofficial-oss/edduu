import type {
  SessionDefinition,
} from '../../../masterclass-engine/types'

export const mc01Session01: SessionDefinition = {
  id: 'mc01-session-01',
  number: 1,
  stage: 'zero',
  title: 'Meet Your Computer',
  objective:
    'Understand the basic job of a computer and identify the roles of CPU, memory, storage and input/output.',

  experiences: [
    {
      id: 'mc01-s01-introduction',
      type: 'lesson',
      title: 'What is a computer?',

      lesson: {
        opening:
          'Let us start from zero. A computer is a machine that receives information, follows instructions, works with that information, and produces a result.',

        sections: [
          {
            heading: 'Start with something familiar',
            explanation:
              'Think about a calculator. You enter 25 + 17. The calculator receives the numbers, follows instructions for addition, and produces the answer 42.',
            example:
              'You type 25 + 17 -> the computer processes the numbers -> you see 42.',
          },

          {
            heading: 'Input: giving information to the computer',
            explanation:
              'Input is information or an instruction that we give to a computer. A keyboard, mouse, microphone, camera, or touchscreen can provide input.',
            example:
              'When you type your name using a keyboard, the keyboard is providing input to the computer.',
          },

          {
            heading: 'Processing: working with information',
            explanation:
              'After receiving information, the computer has to do something with it. It may add numbers, compare values, follow instructions, move information, or perform many other operations.',
            example:
              'When the calculator works out 25 + 17, it is processing the two numbers according to its instructions.',
          },

          {
            heading: 'Output: getting a result back',
            explanation:
              'Output is what the computer gives back to us after it has processed the information. A screen, speaker, or printer can provide output.',
            example:
              'When the calculator shows 42 on the screen, 42 is the output.',
          },

          {
            heading: 'The basic computer flow',
            explanation:
              'We can now describe the basic job of a computer with three simple steps: information goes in, the computer works with it, and a result comes out.',
            example:
              'Input -> Processing -> Output',
          },
        ],

        realWorldConnection:
          'The same basic pattern appears whenever you use a phone, laptop, ATM, smart TV, or calculator. You give the system information, the system works with it, and something comes back to you.',

        keyIdea:
          'A computer takes input, processes information by following instructions, and produces output.',

        recap: [
          'Input means giving information or an instruction to the computer.',
          'Processing means the computer works with the information it received.',
          'Output is the result the computer gives back.',
          'The basic computer flow is Input -> Processing -> Output.',
        ],
      },
    },

    {
      id: 'mc01-s01-computer-animation',
      type: 'animation',
      title: 'Meet the parts inside your computer',
      description:
        'We now know what a computer does. But what inside the computer makes all of this happen? Let us meet the main parts and the job each one has.',

      animation: {
        opening:
          'Think of a computer as a team. Different parts have different jobs, but they work together to complete a task.',

        parts: [
          {
            id: 'cpu',
            label: 'CPU',
            explanation:
              'The CPU is the part that follows instructions and performs the calculations and other actions needed by the computer.',
            example:
              'When you ask a calculator to work out 25 + 17, the CPU performs the calculation needed to produce 42.',
          },

          {
            id: 'ram',
            label: 'RAM',
            explanation:
              "RAM is the computer's short-term workspace. It holds programs and information that the computer is using right now.",
            example:
              'When you open a program, the information that the program needs is placed in RAM so the computer can work with it.',
          },

          {
            id: 'storage',
            label: 'Storage',
            explanation:
              "Storage is the computer's long-term place for keeping information. The information remains there even when the computer is turned off.",
            example:
              'When you save a photo on your computer, the photo stays in storage and can be opened again later.',
          },

          {
            id: 'input-output',
            label: 'Input / Output',
            explanation:
              'Input and output connect the computer with the outside world. Input brings information into the computer, while output sends information back to us.',
            example:
              'A keyboard gives input to the computer. A screen gives output back to us.',
          },
        ],

        closing:
          'These parts have different jobs. The CPU follows instructions and performs actions, RAM holds what the computer is using right now, storage keeps information for later, and input/output lets information move between the computer and the outside world.',
      },
    },

    {
      id: 'mc01-s01-computer-simulation',
      type: 'simulation',
      title: 'Where does each computer job belong?',
      description:
        'You have met the four main parts. Now let us see if you can connect each activity with the part that mainly handles it.',

      simulation: {
        instruction:
          'Select an activity, then select the computer component that best matches its job.',

        items: [
          {
            id: 'calculate',
            label: 'Calculate 25 + 17',
            description:
              'The computer needs to perform a calculation.',
            correctTargetId: 'cpu',
          },

          {
            id: 'running-program',
            label: 'Program being used right now',
            description:
              'A program is currently open and being used.',
            correctTargetId: 'ram',
          },

          {
            id: 'active-data',
            label: 'Information being used right now',
            description:
              'Information that the computer is currently working with.',
            correctTargetId: 'ram',
          },

          {
            id: 'saved-file',
            label: 'Saved photo',
            description:
              'Information that should still be available later.',
            correctTargetId: 'storage',
          },

          {
            id: 'keyboard',
            label: 'Keyboard',
            description:
              'A device used to give information to the computer.',
            correctTargetId: 'input-output',
          },
        ],

        targets: [
          {
            id: 'cpu',
            label: 'CPU',
            description:
              'Follows instructions and performs calculations and other actions.',
          },

          {
            id: 'ram',
            label: 'RAM',
            description:
              'Holds programs and information that the computer is using right now.',
          },

          {
            id: 'storage',
            label: 'Storage',
            description:
              'Keeps information for the long term so it can be used later.',
          },

          {
            id: 'input-output',
            label: 'Input / Output',
            description:
              'Lets information move between the computer and the outside world.',
          },
        ],

        successMessage:
          'Excellent. You connected each activity with the computer component that mainly handles it.',

        failureMessage:
          'Not quite. Read the description of each component again and think about its main job.',
      },
    },

    {
      id: 'mc01-s01-memory-question',
      type: 'question',
      title: 'Your first challenge',
      description:
        'Let us see whether you can use what you have learned about RAM, storage, and the CPU.',

      question: {
        id: 'mc01-s01-memory',
        type: 'single-choice',
        question:
          'You open a program and start using it. The computer needs a place to keep the program and the information it is using right now. Which component is mainly used for this?',

        options: [
          {
            id: 'storage',
            text: 'Storage',
            correct: false,
          },

          {
            id: 'memory',
            text: 'Memory (RAM)',
            correct: true,
          },

          {
            id: 'network',
            text: 'The network',
            correct: false,
          },

          {
            id: 'monitor',
            text: 'The monitor',
            correct: false,
          },
        ],

        explanation:
          "RAM is the computer's short-term workspace. It holds programs and information that the computer is actively using right now. Storage is used to keep information for the long term.",

        hints: [
          "Think about the computer's short-term workspace.",
          'The answer is not the screen and it is not the internet.',
        ],
      },
    },
  ],
}