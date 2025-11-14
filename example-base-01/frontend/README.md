## Frontend – Design Pattern Explorer

Interactive UI built with Vite + TypeScript + Bootstrap 5 that consumes the Spring Boot backend in `../backend`.

### Scripts

```bash
npm install        # install deps
npm run dev        # start Vite dev server (defaults to http://localhost:5173)
npm run build      # create production build in dist/
npm run preview    # serve built assets locally
```

### Backend integration

- The app fetches `GET /patterns` to populate the catalogue.
- Configure a custom backend base url via `VITE_API_BASE_URL` (defaults to `http://localhost:8080`).
- Helpful endpoints are surfaced inside the UI: JSON API, Swagger UI, and ReDoc.

### UI highlights

- Filter patterns by category and search by name/intent.
- Click any pattern to see curated documentation sourced from `src/patternDocs.ts`, including key ideas, when-to-use guidance, and sample scenarios.
- Live demo output shown in the detail panel is read directly from the backend response so you can verify example behavior.

