import { PatternDoc } from '../../models';

export const VISITOR_DOC: PatternDoc = {
  overview: 'Separates operations from the object structure so new behaviors can be added without modifying the elements.',
  keyIdeas: [
    'Elements accept a visitor and call the appropriate method',
    'Double-dispatch selects the correct operation',
    'Great when element hierarchy is stable but behaviors change often',
  ],
  whenToUse: [
    'Need many unrelated operations over a fixed object graph.',
    'Prefer keeping data structures simple while extending functionality.',
    'Implementing exporters, validators, or analytics on ASTs.',
  ],
  exampleScenario: 'Calculating different metrics (area, perimeter, rendering) on a shape hierarchy.',
  codeExamples: [
    {
      language: 'java',
      code: `Visitor areaVisitor = new AreaVisitor();
new Circle().accept(areaVisitor);
new Square().accept(areaVisitor);`,
    },
    {
      language: 'javascript',
      code: `const areaVisitor = new AreaVisitor();
new Circle().accept(areaVisitor);
new Square().accept(areaVisitor);`,
    },
    {
      language: 'python',
      code: `area_visitor = AreaVisitor()
Circle().accept(area_visitor)
Square().accept(area_visitor)`,
    },
  ],
};
