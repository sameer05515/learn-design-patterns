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
    codeExamples: [
      {
        language: 'java',
        code: `PaymentProcessor processor =
        new PaymentGatewayAdapter(new LegacyPaymentGateway());
processor.pay(499.0);`,
      },
    ],
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
    codeExamples: [
      {
        language: 'java',
        code: `RemoteControl remote = new AdvancedRemote(new TvDevice());
remote.togglePower();`,
      },
    ],
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
    ],
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
    codeExamples: [
      {
        language: 'java',
        code: `Coffee coffee = new MilkDecorator(new Espresso());
coffee.description();`,
      },
    ],
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
    codeExamples: [
      {
        language: 'java',
        code: `TravelFacade facade = new TravelFacade();
facade.bookTrip("Tokyo");`,
      },
    ],
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
    codeExamples: [
      {
        language: 'java',
        code: `ParticleFactory factory = new ParticleFactory();
Particle smokeA = factory.get("smoke");
Particle smokeB = factory.get("smoke");`,
      },
    ],
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
    codeExamples: [
      {
        language: 'java',
        code: `Image image = new ImageProxy("photo.jpg");
image.display();`,
      },
    ],
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
    codeExamples: [
      {
        language: 'java',
        code: `PricingStrategy strategy = new DiscountStrategy();
double price = strategy.apply(100);`,
      },
    ],
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
    codeExamples: [
      {
        language: 'java',
        code: `NewsAgency agency = new NewsAgency();
agency.register(new MobileClient());
agency.register(new TabletClient());
agency.publish("Storm warning");`,
      },
    ],
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
    codeExamples: [
      {
        language: 'java',
        code: `Light light = new Light();
Command on = new ToggleCommand(light, true);
on.execute();`,
      },
    ],
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
    codeExamples: [
      {
        language: 'java',
        code: `Handler level1 = new LevelHandler("Tier1", 1);
Handler level2 = new LevelHandler("Tier2", 2);
level1.next(level2);
level1.handle(2);`,
      },
    ],
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
    codeExamples: [
      {
        language: 'java',
        code: `DataRenderer renderer = new CsvRenderer();
String output = renderer.render();`,
      },
    ],
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
    codeExamples: [
      {
        language: 'java',
        code: `CustomCollection collection = new CustomCollection(new int[]{1,2,3});
Iterator<Integer> iterator = collection.iterator();
while (iterator.hasNext()) {
    iterator.next();
}`,
      },
    ],
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
    codeExamples: [
      {
        language: 'java',
        code: `AudioPlayer player = new AudioPlayer();
player.play();
player.pause();`,
      },
    ],
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
    codeExamples: [
      {
        language: 'java',
        code: `ChatRoom room = new ChatRoom();
User alice = new User("Alice", room);
User bob = new User("Bob", room);
room.register(alice);
room.register(bob);
alice.send("Hi Bob");`,
      },
    ],
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
    codeExamples: [
      {
        language: 'java',
        code: `TextEditor editor = new TextEditor();
editor.write("Hello");
Memento snapshot = editor.save();
editor.write(" World");
editor.restore(snapshot);`,
      },
    ],
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
    codeExamples: [
      {
        language: 'java',
        code: `Expression expression =
    new OrExpression(
        new LiteralExpression(true),
        new LiteralExpression(false));
boolean result = expression.interpret();`,
      },
    ],
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
    codeExamples: [
      {
        language: 'java',
        code: `Visitor areaVisitor = new AreaVisitor();
new Circle().accept(areaVisitor);
new Square().accept(areaVisitor);`,
      },
    ],
  },
};

