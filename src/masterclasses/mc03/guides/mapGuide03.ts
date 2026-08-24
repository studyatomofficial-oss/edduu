import type { GuideDefinition } from '../../../masterclass-engine/types'

export const mapGuide03: GuideDefinition = {
  type: 'map',
  label: 'MAP GUIDE 03',
  title: 'Build Your First Python Program - Implementation Map',
  objective:
    'Follow this path from understanding programming instructions to writing and running a small Python program.',
  steps: [
    {
      id: 'mc03-map-01',
      step: 1,
      title: 'Install Python',
      action:
        'Install Python and verify that the Python interpreter is available on your computer.',
      details: [
        'Download and install Python.',
        'Enable the option that adds Python to PATH when available.',
        'Open a terminal after installation.',
        'Verify that Python responds to a version command.',
      ],
    },
    {
      id: 'mc03-map-02',
      step: 2,
      title: 'Install VS Code',
      action:
        'Install Visual Studio Code and prepare it for Python development.',
      details: [
        'Download and install VS Code.',
        'Open VS Code.',
        'Install the Python extension.',
        'Confirm that VS Code recognizes Python files.',
      ],
      mapStepId: 'mc03-map-01',
    },
    {
      id: 'mc03-map-03',
      step: 3,
      title: 'Create the project folder',
      action:
        'Create a folder named mc03-first-python-program.',
      details: [
        'Create the folder in a convenient location.',
        'Open the folder in VS Code.',
        'Keep the project files together inside this folder.',
      ],
    },
    {
      id: 'mc03-map-04',
      step: 4,
      title: 'Create the Python file',
      action:
        'Create a file named main.py.',
      details: [
        'Use the .py extension.',
        'Open main.py in VS Code.',
        'This file will contain the first Python instructions.',
      ],
      mapStepId: 'mc03-map-03',
    },
    {
      id: 'mc03-map-05',
      step: 5,
      title: 'Write the first instruction',
      action:
        'Write a simple Python instruction that produces visible output.',
      details: [
        'Use the print function.',
        'Write a short message.',
        'Save main.py.',
      ],
      mapStepId: 'mc03-map-04',
    },
    {
      id: 'mc03-map-06',
      step: 6,
      title: 'Create variables',
      action:
        'Store different kinds of information in named variables.',
      details: [
        'Create a variable containing a name.',
        'Create a variable containing a number.',
        'Create a Boolean variable.',
        'Use meaningful variable names.',
      ],
      mapStepId: 'mc03-map-05',
    },
    {
      id: 'mc03-map-07',
      step: 7,
      title: 'Transform the data',
      action:
        'Use Python expressions to combine and transform stored values.',
      details: [
        'Perform a simple numerical calculation.',
        'Combine values into a useful result.',
        'Store the result in another variable.',
      ],
      mapStepId: 'mc03-map-06',
    },
    {
      id: 'mc03-map-08',
      step: 8,
      title: 'Add a decision',
      action:
        'Use a condition to make the program choose between two paths.',
      details: [
        'Create a comparison.',
        'Use an if statement.',
        'Add an alternative using else.',
        'Run the program with different values.',
      ],
      mapStepId: 'mc03-map-07',
    },
    {
      id: 'mc03-map-09',
      step: 9,
      title: 'Repeat an operation',
      action:
        'Use a loop to perform an instruction more than once.',
      details: [
        'Create a simple for loop.',
        'Repeat an instruction over a small sequence.',
        'Observe how the same instruction executes multiple times.',
      ],
      mapStepId: 'mc03-map-08',
    },
    {
      id: 'mc03-map-10',
      step: 10,
      title: 'Run and trace the program',
      action:
        'Run main.py and trace how Python turns instructions into program behaviour.',
      details: [
        'Open the terminal in VS Code.',
        'Run the Python file.',
        'Observe the output.',
        'Connect the result to the instructions, variables, decisions and loop.',
      ],
      mapStepId: 'mc03-map-09',
    },
  ],
  finalResult:
    'You now have a working Python program and a practical mental model of how instructions, data, expressions, decisions and repetition work together.',
}