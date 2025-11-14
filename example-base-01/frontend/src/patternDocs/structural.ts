import type { PatternDoc } from '../types';

export const STRUCTURAL_DOCS: Record<string, PatternDoc> = {
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
      {
        language: 'javascript',
        code: `const processor = new PaymentGatewayAdapter(new LegacyPaymentGateway());
processor.pay(499.0);`,
      },
      {
        language: 'python',
        code: `processor = PaymentGatewayAdapter(LegacyPaymentGateway())
processor.pay(499.0)`,
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
      {
        language: 'javascript',
        code: `const remote = new AdvancedRemote(new TvDevice());
remote.togglePower();`,
      },
      {
        language: 'python',
        code: `remote = AdvancedRemote(TvDevice())
remote.toggle_power()`,
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
      {
        language: 'javascript',
        code: `const coffee = new MilkDecorator(new Espresso());
coffee.description();`,
      },
      {
        language: 'python',
        code: `coffee = MilkDecorator(Espresso())
coffee.description()`,
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
      {
        language: 'javascript',
        code: `const image = new ImageProxy('photo.jpg');
image.display();`,
      },
      {
        language: 'python',
        code: `image = ImageProxy('photo.jpg')
image.display()`,
      },
    ],
  },
};

