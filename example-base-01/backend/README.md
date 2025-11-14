# learn-design-patterns

Spring Boot project showcasing code-level examples for 24 classic design patterns.

## Getting Started

- Java 17+
- Apache Maven 3.9+ (wrapper optional if Maven already on path)

```powershell
mvn spring-boot:run
# or
mvn test
```

When the application is running:

- `http://localhost:8080/` renders a friendly welcome page with handy links.
- `http://localhost:8080/patterns` returns JSON describing every pattern and a short demo string.
- `http://localhost:8080/patterns/index.html` serves interactive static docs, with per-pattern views available via `view.html?name=...`.

### API Explorer / Docs

- Swagger UI: `http://localhost:8080/swagger-ui/index.html`
- OpenAPI JSON: `http://localhost:8080/v3/api-docs`
- ReDoc viewer: `http://localhost:8080/redoc.html`

## API Response

Each entry exposes:

- `name` – pattern name
- `category` – `CREATIONAL`, `STRUCTURAL`, or `BEHAVIORAL`
- `intent` – one-line summary
- `demo` – string produced by the example implementation

## Code Map

All implementations live under `src/main/java/com/example/designpatterns`.

- Creational (`creational` package): Singleton, Factory Method, Abstract Factory, Builder, Prototype, Object Pool
- Structural (`structural` package): Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy
- Behavioral (`behavioral` package): Strategy, Observer, Command, Chain of Responsibility, Template Method, Iterator, State, Mediator, Memento, Interpreter, Visitor

Shared abstractions used by the REST layer live in `shared`, while the web-facing code is inside `api`.

Feel free to extend the examples with richer domains, persistence, or CLI automation depending on how you want to explore the patterns further.
