import { PatternDoc } from '../../models';

export const DECORATOR_DOC: PatternDoc = {
  overview: 'Adds responsibilities to objects dynamically by wrapping them, avoiding monolithic inheritance.',
  keyIdeas: [
    'Decorator implements same interface as the wrapped component',
    'Multiple decorators can be stacked at runtime',
    'Great for cross-cutting concerns (logging, caching)',
  ],
  whenToUse: [
    'Behavioral changes must be composable per request.',
    'You need optional features without bloating base classes.',
    'Inheritance would create an explosion of subclasses.',
  ],
  exampleScenario: 'Coffee order builder that adds milk, syrup, or whipped cream decorators on demand.',
  codeExamples: [
    {
      language: 'java',
      code: `Coffee coffee = new MilkDecorator(new Espresso());
coffee.description();`,
    },
    {
      language: 'javascript',
      code: `const coffee = new MilkDecorator(new Espresso());
coffee.description();`,
    },
    {
      language: 'python',
      code: `coffee = MilkDecorator(Espresso())
coffee.description()`,
    },
  ],
};
