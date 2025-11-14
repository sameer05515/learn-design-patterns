import { PatternDoc } from '../../models';

export const BRIDGE_DOC: PatternDoc = {
  overview: 'Separates abstractions from their implementations so both can vary independently.',
  keyIdeas: [
    'Abstraction composes an implementation reference',
    'Runtime binding allows mixing and matching',
    'Reduces class explosion from multiple dimensions of variation',
  ],
  whenToUse: [
    'You have orthogonal hierarchies (e.g., Remotes vs Devices).',
    'Need to swap implementations without recompiling clients.',
    'Expect independent evolution of features and platforms.',
  ],
  exampleScenario: 'Remote controls working with TVs, projectors, or speakers via the same abstraction.',
  codeExamples: [
    {
      language: 'java',
      code: `RemoteControl remote = new AdvancedRemote(new TvDevice());
remote.togglePower();`,
    },
    {
      language: 'javascript',
      code: `const remote = new AdvancedRemote(new TvDevice());
remote.togglePower();`,
    },
    {
      language: 'python',
      code: `remote = AdvancedRemote(TvDevice())
remote.toggle_power()`,
    },
  ],
};
