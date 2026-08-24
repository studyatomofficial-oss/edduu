import type { GuideDefinition } from '../../../masterclass-engine/types'

export const codeGuide03: GuideDefinition = {
  type: 'code',
  label: 'CODE GUIDE 03',
  title: 'First Python Program - Code Reference',
  objective:
    'Use these real Python examples while following MAP GUIDE 03.',
  steps: [
    {
      id: 'mc03-code-01',
      step: 1,
      title: 'First Python instruction',
      action:
        'Put this in main.py to create your first visible Python output.',
      mapStepId: 'mc03-map-05',
      code: `print("Hello from MC03")

print("I am learning Python.")`,
      explanation:
        'print sends information to the program output. Python executes these instructions in order, from top to bottom.',
    },
    {
      id: 'mc03-code-02',
      step: 2,
      title: 'Variables and different data',
      action:
        'Create variables that represent text, numbers and Boolean information.',
      mapStepId: 'mc03-map-06',
      code: `name = "Avinash"
score = 85
passed = True

print(name)
print(score)
print(passed)`,
      explanation:
        'Variables give names to values so the program can store and reuse information. The examples show a string, a number and a Boolean value.',
    },
    {
      id: 'mc03-code-03',
      step: 3,
      title: 'Transform and combine data',
      action:
        'Use expressions to create new values from existing variables.',
      mapStepId: 'mc03-map-07',
      code: `price = 200
quantity = 3

total = price * quantity

print(total)`,
      explanation:
        'The expression price * quantity combines two numerical values. The result is stored in total and can then be used by the program.',
    },
    {
      id: 'mc03-code-04',
      step: 4,
      title: 'Make a decision',
      action:
        'Use if and else to choose between two program paths.',
      mapStepId: 'mc03-map-08',
      code: `score = 72

if score >= 50:
    print("Pass")
else:
    print("Try again")`,
      explanation:
        'The condition score >= 50 is evaluated as True or False. Python executes the if path when the condition is True and the else path when it is False.',
    },
    {
      id: 'mc03-code-05',
      step: 5,
      title: 'Repeat work with a for loop',
      action:
        'Use a for loop to repeat an instruction for each value in a sequence.',
      mapStepId: 'mc03-map-09',
      code: `names = ["Asha", "Rahul", "Neha"]

for name in names:
    print(name)`,
      explanation:
        'The for loop takes each item from the names sequence and assigns it to name for one iteration. The print instruction then runs once for each item.',
    },
    {
      id: 'mc03-code-06',
      step: 6,
      title: 'Run the complete program',
      action:
        'Save main.py and run it from the VS Code terminal.',
      mapStepId: 'mc03-map-10',
      command: `python main.py`,
      details: [
        'Open the VS Code terminal.',
        'Make sure the terminal is inside the project folder.',
        'Run python main.py.',
        'Read the output produced by the program.',
      ],
      explanation:
        'The Python interpreter reads the instructions in main.py, evaluates them and executes the resulting program flow.',
    },
  ],
  finalResult:
    'The Python examples now form one small working program: instructions produce output, variables store data, expressions transform data, conditions make decisions and loops repeat work.',
}