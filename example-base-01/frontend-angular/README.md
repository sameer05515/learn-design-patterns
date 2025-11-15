## Frontend (Angular)

Angular 18 implementation of the design-pattern explorer UI. It mirrors the Vite/TS experience from `example-base-01/frontend`, but runs entirely offline by bundling `src/assets/patterns.json` so no backend is required at build or runtime.

### Getting started

```bash
cd example-base-01/frontend-angular
npm install
npm start         # dev server on http://localhost:4200
npm run build     # production build in dist/frontend-angular
```

### Features

- Loads pattern data from the bundled `assets/patterns.json`, with Bootstrap 5 styling.
- Search + category filters, live demo output, and deep documentation sourced from shared `pattern-docs` modules.
- Code examples per pattern rendered for Java, JavaScript, and Python using `marked`, with HTML sanitized for safe display.
# FrontendAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
