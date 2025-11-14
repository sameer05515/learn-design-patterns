import { PatternDoc } from '../../models';

export const FLYWEIGHT_DOC: PatternDoc = {
  overview: 'Shares intrinsic state across many light-weight objects, keeping extrinsic state outside the shared instance.',
  keyIdeas: [
    'Caches immutable objects keyed by intrinsic properties',
    'Minimizes memory usage for large object graphs',
    'Client supplies per-use extrinsic context',
  ],
  whenToUse: [
    'Millions of similar objects cause memory pressure.',
    'Most state can be shared (e.g., glyph shapes).',
    'Creation cost is high but state is reusable.',
  ],
  exampleScenario: 'Particle systems sharing sprite metadata while varying positions externally.',
  codeExamples: [
    {
      language: 'java',
      code: `ParticleFactory factory = new ParticleFactory();
Particle smokeA = factory.get("smoke");
Particle smokeB = factory.get("smoke");`,
    },
    {
      language: 'javascript',
      code: `const factory = new ParticleFactory();
const smokeA = factory.get('smoke');
const smokeB = factory.get('smoke');`,
    },
    {
      language: 'python',
      code: `factory = ParticleFactory()
smoke_a = factory.get('smoke')
smoke_b = factory.get('smoke')`,
    },
  ],
};
