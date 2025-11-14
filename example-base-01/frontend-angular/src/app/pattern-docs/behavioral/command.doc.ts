import { PatternDoc } from '../../models';

export const COMMAND_DOC: PatternDoc = {
  overview: 'Encapsulates requests as objects, allowing queuing, logging, or undo/redo of operations.',
  keyIdeas: [
    'Command interface with execute method',
    'Invoker decoupled from concrete receiver',
    'Supports composite commands and history stacks',
  ],
  whenToUse: [
    'Need undoable operations or macro recording.',
    'Scheduling, retries, or queueing commands.',
    'Decouple UI actions from application logic.',
  ],
  exampleScenario: 'Smart home hub queuing device actions triggered by voice or automations.',
  codeExamples: [
    {
      language: 'java',
      code: `Light light = new Light();
Command on = new ToggleCommand(light, true);
on.execute();`,
    },
    {
      language: 'javascript',
      code: `const light = new Light();
const on = new ToggleCommand(light, true);
on.execute();`,
    },
    {
      language: 'python',
      code: `light = Light()
on = ToggleCommand(light, True)
on.execute()`,
    },
  ],
};
