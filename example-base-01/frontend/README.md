## Frontend – Design Pattern Explorer

Interactive UI built with Vite + TypeScript + Bootstrap 5 that runs entirely offline by bundling a `public/patterns.json` snapshot of all 24 design patterns.

### Scripts

```bash
npm install        # install deps
npm run dev        # start Vite dev server (defaults to http://localhost:5173)
npm run build      # create production build in dist/
npm run preview    # serve built assets locally
```

### Data loading

- Pattern data is loaded from `public/patterns.json` at runtime.
- Because the file lives alongside the compiled assets, the UI works on any static host (GitHub Pages, Netlify, S3, etc.) with no additional services.

### Deploying to GitHub Pages (or any static host)

1. `npm run build` – generates production assets in `dist/` using relative paths (see `vite.config.ts`).
2. Copy the contents of `dist/` into your pages repository (e.g., clone `https://github.com/sameer05515/design-patterns`, delete its contents, and paste `dist/*`).
3. Commit and push. In the GitHub repo, enable Pages → “Deploy from a branch” → choose the branch you pushed and the root folder.

Because the build contains `patterns.json`, no backend is required—just drop the `dist/` folder into your static host, and the UI will load instantly.

### UI highlights

- Filter patterns by category and search by name/intent.
- Click any pattern to see curated documentation sourced from `src/patternDocs`, including key ideas, when-to-use guidance, sample scenarios, and Java/JS/Python snippets.
- Each pattern has a shareable route using the URL hash (e.g. `/#singleton`); selecting a pattern updates the hash automatically, and loading a URL with a hash pre-selects the pattern.
- Live demo output shown in the detail panel is read directly from the sample data so you can verify example behavior.

