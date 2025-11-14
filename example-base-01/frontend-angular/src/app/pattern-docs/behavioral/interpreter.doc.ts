import { PatternDoc } from '../../models';

export const INTERPRETER_DOC: PatternDoc = {
  overview: 'Defines a representation and evaluator for a simple language or grammar.',
  keyIdeas: [
    'Grammar mapped to class hierarchy of expressions',
    'Each node knows how to interpret itself',
    'Works best for small, frequently changed languages',
  ],
  whenToUse: [
    'Business rules expressed as DSLs.',
    'Feature flags or filters described in textual form.',
    'Need quick experimentation without writing a compiler.',
  ],
  exampleScenario: 'Evaluating alert rules like "A OR (B AND C)".',
  codeExamples: [
    {
      language: 'java',
      code: `Expression expression =
    new OrExpression(
        new LiteralExpression(true),
        new LiteralExpression(false));
boolean result = expression.interpret();`,
    },
    {
      language: 'javascript',
      code: `const expression = new OrExpression(
  new LiteralExpression(true),
  new LiteralExpression(false)
);
const result = expression.interpret();`,
    },
    {
      language: 'python',
      code: `expression = OrExpression(
    LiteralExpression(True),
    LiteralExpression(False)
)
result = expression.interpret()`,
    },
  ],
};
