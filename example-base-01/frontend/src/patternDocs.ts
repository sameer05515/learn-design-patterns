import type { PatternDoc } from './types';

export const PATTERN_DOCS: Record<string, PatternDoc> = {
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
  },
  'Adapter': {
    overview: 'Bridges incompatible interfaces by translating requests between a client and a legacy or third-party service.',
    keyIdeas: [
      'Wraps an adapter around an existing implementation',
      'Can convert data formats or invocation styles',
      'Keeps client oblivious to legacy quirks',
    ],
    whenToUse: [
      'Migrating away from legacy APIs gradually.',
      'Integrating vendor SDKs with mismatched method names/signatures.',
      'Standardizing interfaces across modules.',
    ],
    exampleScenario: 'Adapting an old payment SOAP service to a modern REST contract.',
  },
  'Bridge': {
    overview: 'Separates abstractions from their implementations so both can vary independently.',
    keyIdeas: [
      'Abstraction composes an implementation reference',
      'Runtime binding allows mixing and matching',
      'Reduces class explosion from multiple dimensions of variation',
    ],
    whenToUse: [
      'You have orthogonal hierarchies (e.g., Remotes vs Devices).',
      'Need to swap implementations without recompiling clients.',
      'Expect independent evolution of features and platforms.',
    ],
    exampleScenario: 'Remote controls working with TVs, projectors, or speakers via the same abstraction.',
  },
  'Composite': {
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
  },
  'Decorator': {
    overview: 'Adds responsibilities to objects dynamically by wrapping them, avoiding monolithic inheritance.',
    keyIdeas: [
      'Decorator implements same interface as the wrapped component',
      'Multiple decorators can be stacked at runtime',
      'Great for cross-cutting concerns (logging, caching)',
    ],
    whenToUse: [
      'Behavioral changes must be composable per request.',
      'You need optional features without bloating base classes.',
      'Inheritance would create an explosion of subclasses.',
    ],
    exampleScenario: 'Coffee order builder that adds milk, syrup, or whipped cream decorators on demand.',
  },
  'Facade': {
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
  },
  'Flyweight': {
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
  },
  'Proxy': {
    overview: 'Acts as a placeholder controlling access to another object (lazy loading, security, caching, remoting).',
    keyIdeas: [
      'Implements same interface as the real subject',
      'Can defer instantiation or add cross-cutting behavior',
      'Variants: virtual, remote, protection, caching proxies',
    ],
    whenToUse: [
      'Heavy objects should load lazily.',
      'Need ACL checks before executing operations.',
      'Remote service calls should look like local ones.',
    ],
    exampleScenario: 'Virtual image viewer that loads the real image only when first displayed.',
  },
  'Strategy': {
    overview: 'Defines a family of algorithms encapsulated behind a common interface and interchangeable at runtime.',
    keyIdeas: [
      'Favors composition over inheritance for behavior',
      'Allows injecting behavior via configuration',
      'Eliminates long conditional chains for algorithm selection',
    ],
    whenToUse: [
      'Multiple rules/algorithms vary independently from the context.',
      'Behavior must switch dynamically (user segment, region).',
      'Testing different algorithms in isolation is important.',
    ],
    exampleScenario: 'Cart pricing strategies for retail campaigns (standard, discounted, wholesale).',
  },
  'Observer': {
    overview: 'Establishes a publish/subscribe relationship so observers react to subject state changes.',
    keyIdeas: [
      'Subjects maintain a list of observers',
      'Observers implement a notification method',
      'Promotes loose coupling for event propagation',
    ],
    whenToUse: [
      'Many components depend on shared state changes.',
      'Need runtime subscription/unsubscription.',
      'Implementing event buses or reactive UIs.',
    ],
    exampleScenario: 'News agency pushing alerts to multiple device clients.',
  },
  'Command': {
    overview: 'Encapsulates requests as objects, allowing queuing, logging, or undo/redo of operations.',
    keyIdeas: [
      'Command interface with execute method',
      'Invoker decoupled from concrete receiver',
      'Supports composite commands and history stacks',
    ],
    whenToUse: [
      'Need undoable operations or macro recording.',
      'Scheduling, retries, or queueing commands.',
      'Decouple UI actions from application logic.',
    ],
    exampleScenario: 'Smart home hub queuing device actions triggered by voice or automations.',
  },
  'Chain of Responsibility': {
    overview: 'Passes requests along a chain of handlers until one handles it, promoting flexible routing.',
    keyIdeas: [
      'Each handler decides to process or forward',
      'Supports dynamic chain composition',
      'Reduces large conditional blocks',
    ],
    whenToUse: [
      'Validation or approval workflows with multiple tiers.',
      'Logging/monitoring pipelines that may short-circuit.',
      'Event handling where multiple listeners may act.',
    ],
    exampleScenario: 'Support ticket escalation from Tier 1 to Tier N.',
  },
  'Template Method': {
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
  },
  'Iterator': {
    overview: 'Provides a uniform way to traverse aggregates without exposing their internal representation.',
    keyIdeas: [
      'Iterator tracks traversal state',
      'Multiple iterators can operate concurrently',
      'Supports custom iteration orders or filters',
    ],
    whenToUse: [
      'Custom collections that shouldn’t leak internals.',
      'Need lazy traversal across large data sets.',
      'Expose sequence-like APIs for complex structures.',
    ],
    exampleScenario: 'Streaming paginated API results while hiding cursor logic.',
  },
  'State': {
    overview: 'Lets an object alter its behavior when its internal state changes by delegating to state objects.',
    keyIdeas: [
      'Context holds reference to current state implementation',
      'State transitions swap out the delegate',
      'Avoids sprawling switch statements on state enums',
    ],
    whenToUse: [
      'Objects have well-defined finite states with distinct behavior.',
      'Transitions should be explicit and enforced.',
      'Helps model workflows (media player, order lifecycle).',
    ],
    exampleScenario: 'Audio player toggling between Playing, Paused, and Stopped states.',
  },
  'Mediator': {
    overview: 'Centralizes complex communication between objects, reducing direct dependencies.',
    keyIdeas: [
      'Colleagues interact only with the mediator',
      'Mediator encapsulates coordination logic',
      'Useful for chat rooms, UI dialogs, or workflow orchestration',
    ],
    whenToUse: [
      'Many-to-many object interactions cause tight coupling.',
      'You need to change interaction rules without touching colleagues.',
      'Helps visualize/log communication paths centrally.',
    ],
    exampleScenario: 'Chat room broadcasting messages between users without direct references.',
  },
  'Memento': {
    overview: 'Captures and externalizes an object’s internal state so it can be restored later without breaking encapsulation.',
    keyIdeas: [
      'Originator creates mementos snapshots',
      'Caretaker stores and restores when needed',
      'Supports undo/redo, checkpoints, transactional edits',
    ],
    whenToUse: [
      'Need to rollback complex objects to previous states.',
      'Implementing undo/redo in editors or workflows.',
      'Auditing versions without leaking internals.',
    ],
    exampleScenario: 'Text editor snapshots enabling ctrl+z functionality.',
  },
  'Interpreter': {
    overview: 'Defines a representation and evaluator for a simple language or grammar.',
    keyIdeas: [
      'Grammar mapped to class hierarchy of expressions',
      'Each node knows how to interpret itself',
      'Works best for small, frequently changed languages',
    ],
    whenToUse: [
      'Business rules expressed as DSLs.',
      'Feature flags or filters described in textual form.',
      'Need quick experimentation without writing a compiler.',
    ],
    exampleScenario: 'Evaluating alert rules like "A OR (B AND C)".',
  },
  'Visitor': {
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
  },
};

