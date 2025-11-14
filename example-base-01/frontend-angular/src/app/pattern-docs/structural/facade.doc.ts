import { PatternDoc } from '../../models';

export const FACADE_DOC: PatternDoc = {
  overview: 'Provides a simplified interface to a complex subsystem, shielding clients from internal details.',
  keyIdeas: [
    'Aggregates workflows across multiple services',
    'Reduces coupling between client and subsystem',
    'Can enforce sequencing/validation centrally',
  ],
  whenToUse: [
    'Subsystem exposes numerous fine-grained APIs.',
    'Consumers only need common happy paths.',
    'You want to decouple legacy modules behind a simpler entry point.',
  ],
  exampleScenario: 'Travel booking facade orchestrating flights, hotels, and cars with one call.',
  codeExamples: [
    {
      language: 'java',
      code: `TravelFacade facade = new TravelFacade();
facade.bookTrip("Tokyo");`,
    },
    {
      language: 'javascript',
      code: `const facade = new TravelFacade();
facade.bookTrip('Tokyo');`,
    },
    {
      language: 'python',
      code: `facade = TravelFacade()
facade.book_trip('Tokyo')`,
    },
  ],
};
