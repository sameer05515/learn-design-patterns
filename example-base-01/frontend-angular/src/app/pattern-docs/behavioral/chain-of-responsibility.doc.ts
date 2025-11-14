import { PatternDoc } from '../../models';

export const CHAIN_OF_RESPONSIBILITY_DOC: PatternDoc = {
  overview: 'Passes requests along a chain of handlers until one handles it, promoting flexible routing.',
  keyIdeas: [
    'Each handler decides to process or forward',
    'Supports dynamic chain composition',
    'Reduces large conditional blocks',
  ],
  whenToUse: [
    'Validation or approval workflows with multiple tiers.',
    'Logging/monitoring pipelines that may short-circuit.',
    'Event handling where multiple listeners may act.',
  ],
  exampleScenario: 'Support ticket escalation from Tier 1 to Tier N.',
  codeExamples: [
    {
      language: 'java',
      code: `Handler level1 = new LevelHandler("Tier1", 1);
Handler level2 = new LevelHandler("Tier2", 2);
level1.next(level2);
level1.handle(2);`,
    },
    {
      language: 'javascript',
      code: `const level1 = new LevelHandler('Tier1', 1);
const level2 = new LevelHandler('Tier2', 2);
level1.next(level2);
level1.handle(2);`,
    },
    {
      language: 'python',
      code: `level1 = LevelHandler('Tier1', 1)
level2 = LevelHandler('Tier2', 2)
level1.next(level2)
level1.handle(2)`,
    },
  ],
};
