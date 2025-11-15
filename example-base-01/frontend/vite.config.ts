import { defineConfig } from 'vite';

// Ensure assets use relative paths so the app can be deployed under any base URL (e.g., GitHub Pages)
export default defineConfig({
  base: './',
});

