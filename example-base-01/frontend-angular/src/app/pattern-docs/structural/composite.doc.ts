import { PatternDoc } from '../../models';

export const COMPOSITE_DOC: PatternDoc = {
  overview: 'Treats individual objects and compositions uniformly, enabling tree structures to be processed recursively.',
  keyIdeas: [
    'Component interface implemented by leaf and composite nodes',
    'Allows clients to ignore hierarchical differences',
    'Pairs well with recursive algorithms (rendering, aggregation)',
  ],
  whenToUse: [
    'You model hierarchies like folders, UI trees, or org charts.',
    'Operations should apply to whole subtrees seamlessly.',
    'Need to mix simple and complex elements uniformly.',
  ],
  exampleScenario: 'File explorers aggregating folder sizes from nested children.',
  codeExamples: [
    {
      language: 'java',
      code: `Directory root = new Directory("root");
root.add(new FileLeaf("notes.txt"));
Directory nested = new Directory("images");
nested.add(new FileLeaf("logo.png"));
root.add(nested);
root.describe();`,
    },
    {
      language: 'javascript',
      code: `const root = new Directory('root');
root.add(new FileLeaf('notes.txt'));
const nested = new Directory('images');
nested.add(new FileLeaf('logo.png'));
root.add(nested);
root.describe();`,
    },
    {
      language: 'python',
      code: `root = Directory('root')
root.add(FileLeaf('notes.txt'))
nested = Directory('images')
nested.add(FileLeaf('logo.png'))
root.add(nested)
root.describe()`,
    },
  ],
};
