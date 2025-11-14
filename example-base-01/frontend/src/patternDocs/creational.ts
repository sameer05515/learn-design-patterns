import type { PatternDoc } from '../types';

export const CREATIONAL_DOCS: Record<string, PatternDoc> = {
  'Singleton': {
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
    ],
  },
  'Factory Method': {
    overview: 'Delegates object creation to subclasses or helper classes, allowing code to work with abstractions.',
    keyIdeas: [
      'Creator defines a method that subclasses override',
      'Client code depends on interfaces, not concrete classes',
      'Promotes open/closed principle for new product types',
    ],
    whenToUse: [
      'You need to extend creation logic without touching existing client code.',
      'Products share an interface but have different setups.',
      'You want to encapsulate complex creation steps.',
    ],
    exampleScenario: 'Notification service that picks SMS, Push, or Email senders at runtime.',
    codeExamples: [
      {
        language: 'java',
        code: `NotificationCreator creator = new SmsNotificationCreator();
Notification sms = creator.create();
sms.send("OTP 4321");`,
      },
    ],
  },
  'Abstract Factory': {
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
    ],
  },
  'Builder': {
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
    ],
  },
  'Prototype': {
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
    ],
  },
  'Object Pool': {
    overview: 'Maintains a set of reusable instances to minimize the cost of expensive creation/destruction cycles.',
    keyIdeas: [
      'Pool tracks available vs in-use objects',
      'Often paired with limits/backpressure',
      'Requires clear lifecycle for acquiring/releasing',
    ],
    whenToUse: [
      'Initializing an object (e.g., DB connection) is expensive.',
      'You have bounded concurrency and need throttling.',
      'Garbage pressure from frequent allocations hurts performance.',
    ],
    exampleScenario: 'Managing HTTP client connections for an API gateway.',
    codeExamples: [
      {
        language: 'java',
        code: `ConnectionPool pool = new ConnectionPool(2);
Connection first = pool.acquire();
pool.release(first);
Connection reused = pool.acquire();`,
      },
    ],
  },
};

