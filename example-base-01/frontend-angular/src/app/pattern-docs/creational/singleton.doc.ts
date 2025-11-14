import { PatternDoc } from '../../models';

export const SINGLETON_DOC: PatternDoc = {
  overview: 'Guarantees a single, globally accessible instance that encapsulates shared state such as configuration or caches.',
  keyIdeas: [
    'Private constructor with a static accessor',
    'Eager or lazy initialization depending on performance needs',
    'Thread-safe access if used in concurrent code',
  ],
  whenToUse: [
    'You must coordinate access to a single resource (e.g., connection manager).',
    'Creating multiple instances would lead to inconsistent state.',
    'You need a lightweight service locator for cross-cutting concerns.',
  ],
  exampleScenario: 'An application-wide feature flag registry pulled from remote config once and reused everywhere.',
  codeExamples: [
    {
      language: 'java',
      code: `Configuration config = Configuration.getInstance();
Configuration again = Configuration.getInstance();
assert config == again;`,
    },
    {
      language: 'javascript',
      code: `const config = Configuration.getInstance();
const again = Configuration.getInstance();
console.assert(config === again);`,
    },
    {
      language: 'python',
      code: `config = Configuration.get_instance()
again = Configuration.get_instance()
assert config is again`,
    },
  ],
};
