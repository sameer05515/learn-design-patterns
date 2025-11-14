import { PatternDoc } from '../../models';

export const ABSTRACT_FACTORY_DOC: PatternDoc = {
  overview: 'Produces families of related objects that are designed to be used together without specifying their concrete classes.',
  keyIdeas: [
    'Factory interface per product family',
    'Ensures compatible variants (e.g., Dark vs Light theme widgets)',
    'Eases switching entire families via configuration',
  ],
  whenToUse: [
    'UI or platform themes must stay consistent.',
    'You support multiple vendors/storage layers with shared contracts.',
    'Creation logic depends on high-level configuration (region, brand).',
  ],
  exampleScenario: 'Generating light or dark UI components for a design system.',
  codeExamples: [
    {
      language: 'java',
      code: `UiFactory factory = new DarkUiFactory();
factory.button().render();
factory.checkbox().render();`,
    },
    {
      language: 'javascript',
      code: `const factory = new DarkUiFactory();
factory.button().render();
factory.checkbox().render();`,
    },
    {
      language: 'python',
      code: `factory = DarkUiFactory()
factory.button().render()
factory.checkbox().render()`,
    },
  ],
};
