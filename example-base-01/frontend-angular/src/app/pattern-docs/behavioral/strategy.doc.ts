import { PatternDoc } from '../../models';

export const STRATEGY_DOC: PatternDoc = {
  overview: 'Defines a family of algorithms encapsulated behind a common interface and interchangeable at runtime.',
  keyIdeas: [
    'Favors composition over inheritance for behavior',
    'Allows injecting behavior via configuration',
    'Eliminates long conditional chains for algorithm selection',
  ],
  whenToUse: [
    'Multiple rules/algorithms vary independently from the context.',
    'Behavior must switch dynamically (user segment, region).',
    'Testing different algorithms in isolation is important.',
  ],
  exampleScenario: 'Cart pricing strategies for retail campaigns (standard, discounted, wholesale).',
  codeExamples: [
    {
      language: 'java',
      code: `PricingStrategy strategy = new DiscountStrategy();
double price = strategy.apply(100);`,
    },
    {
      language: 'javascript',
      code: `const strategy = new DiscountStrategy();
const price = strategy.apply(100);`,
    },
    {
      language: 'python',
      code: `strategy = DiscountStrategy()
price = strategy.apply(100)`,
    },
  ],
};
