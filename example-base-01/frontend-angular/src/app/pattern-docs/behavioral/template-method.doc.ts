import { PatternDoc } from '../../models';

export const TEMPLATE_METHOD_DOC: PatternDoc = {
  overview: 'Defines the skeleton of an algorithm in a base class while deferring steps to subclasses.',
  keyIdeas: [
    'Base class implements non-overridable template method',
    'Hooks/abstract methods customize steps',
    'Promotes reuse for algorithms with invariant structure',
  ],
  whenToUse: [
    'Procedures share identical flow but differ in certain steps.',
    'You want consistent lifecycle with extension points.',
    'Need to enforce order of operations.',
  ],
  exampleScenario: 'File parsers that read, transform, and render data with different formats.',
  codeExamples: [
    {
      language: 'java',
      code: `DataRenderer renderer = new CsvRenderer();
String output = renderer.render();`,
    },
    {
      language: 'javascript',
      code: `const renderer = new CsvRenderer();
const output = renderer.render();`,
    },
    {
      language: 'python',
      code: `renderer = CsvRenderer()
output = renderer.render()`,
    },
  ],
};
