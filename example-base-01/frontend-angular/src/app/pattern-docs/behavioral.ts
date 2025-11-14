import type { PatternDoc } from '../models';

export const BEHAVIORAL_DOCS: Record<string, PatternDoc> = {
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
      {
        language: 'javascript',
        code: `const strategy = new DiscountStrategy();
const price = strategy.apply(100);`,
      },
      {
        language: 'python',
        code: `strategy = DiscountStrategy()
price = strategy.apply(100)`,
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
      {
        language: 'javascript',
        code: `const agency = new NewsAgency();
agency.register(new MobileClient());
agency.register(new TabletClient());
agency.publish('Storm warning');`,
      },
      {
        language: 'python',
        code: `agency = NewsAgency()
agency.register(MobileClient())
agency.register(TabletClient())
agency.publish('Storm warning')`,
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
      {
        language: 'javascript',
        code: `const light = new Light();
const on = new ToggleCommand(light, true);
on.execute();`,
      },
      {
        language: 'python',
        code: `light = Light()
on = ToggleCommand(light, True)
on.execute()`,
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
      {
        language: 'javascript',
        code: `const level1 = new LevelHandler('Tier1', 1);
const level2 = new LevelHandler('Tier2', 2);
level1.next(level2);
level1.handle(2);`,
      },
      {
        language: 'python',
        code: `level1 = LevelHandler('Tier1', 1)
level2 = LevelHandler('Tier2', 2)
level1.next(level2)
level1.handle(2)`,
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
      {
        language: 'javascript',
        code: `const renderer = new CsvRenderer();
const output = renderer.render();`,
      },
      {
        language: 'python',
        code: `renderer = CsvRenderer()
output = renderer.render()`,
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
      {
        language: 'javascript',
        code: `const collection = new CustomCollection([1, 2, 3]);
const iterator = collection.iterator();
while (iterator.hasNext()) {
  iterator.next();
}`,
      },
      {
        language: 'python',
        code: `collection = CustomCollection([1, 2, 3])
iterator = iter(collection)
for value in iterator:
    _ = value`,
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
      {
        language: 'javascript',
        code: `const player = new AudioPlayer();
player.play();
player.pause();`,
      },
      {
        language: 'python',
        code: `player = AudioPlayer()
player.play()
player.pause()`,
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
      {
        language: 'javascript',
        code: `const room = new ChatRoom();
const alice = new User('Alice', room);
const bob = new User('Bob', room);
room.register(alice);
room.register(bob);
alice.send('Hi Bob');`,
      },
      {
        language: 'python',
        code: `room = ChatRoom()
alice = User('Alice', room)
bob = User('Bob', room)
room.register(alice)
room.register(bob)
alice.send('Hi Bob')`,
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
      {
        language: 'javascript',
        code: `const editor = new TextEditor();
editor.write('Hello');
const snapshot = editor.save();
editor.write(' World');
editor.restore(snapshot);`,
      },
      {
        language: 'python',
        code: `editor = TextEditor()
editor.write('Hello')
snapshot = editor.save()
editor.write(' World')
editor.restore(snapshot)`,
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
      {
        language: 'javascript',
        code: `const expression = new OrExpression(
  new LiteralExpression(true),
  new LiteralExpression(false)
);
const result = expression.interpret();`,
      },
      {
        language: 'python',
        code: `expression = OrExpression(
    LiteralExpression(True),
    LiteralExpression(False)
)
result = expression.interpret()`,
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
  },
};

