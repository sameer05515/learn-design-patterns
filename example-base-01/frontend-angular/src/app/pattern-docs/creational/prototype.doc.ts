import { PatternDoc } from '../../models';

export const PROTOTYPE_DOC: PatternDoc = {
  overview: 'Creates new objects by cloning existing prototype instances instead of instantiating classes directly.',
  keyIdeas: [
    'Avoids the cost of reconfiguring complex objects',
    'Cloning can be shallow or deep depending on needs',
    'Useful for runtime object composition',
  ],
  whenToUse: [
    'Object creation is expensive and mostly identical.',
    'You want to decouple code from specific classes but still customize instances.',
    'Templates or drafts must be duplicated quickly.',
  ],
  exampleScenario: 'Duplicating design canvases or workflow templates with minor tweaks.',
  codeExamples: [
    {
      language: 'java',
      code: `Document template = new Document("invoice", 4);
Document copy = template.copy();`,
    },
    {
      language: 'javascript',
      code: `const template = new Document('invoice', 4);
const copy = template.copy();`,
    },
    {
      language: 'python',
      code: `template = Document('invoice', 4)
copy = template.copy()`,
    },
  ],
};
