import { PatternDoc } from '../../models';

export const BUILDER_DOC: PatternDoc = {
  overview: 'Separates the construction of a complex object from its representation using a fluent API.',
  keyIdeas: [
    'Immutable result assembled step-by-step',
    'Fluent method chaining for clarity',
    'Validation deferred to build step',
  ],
  whenToUse: [
    'Objects have many optional or order-sensitive properties.',
    'You want readable test fixtures and DSL-like creation.',
    'Construction needs intermediate validation.',
  ],
  exampleScenario: 'Building PDF reports with optional sections based on user preferences.',
  codeExamples: [
    {
      language: 'java',
      code: `Report report = new Report.Builder()
    .title("Monthly")
    .author("Ops")
    .content("All systems go")
    .build();`,
    },
    {
      language: 'javascript',
      code: `const report = new ReportBuilder()
  .title('Monthly')
  .author('Ops')
  .content('All systems go')
  .build();`,
    },
    {
      language: 'python',
      code: `report = (ReportBuilder()
          .title('Monthly')
          .author('Ops')
          .content('All systems go')
          .build())`,
    },
  ],
};
