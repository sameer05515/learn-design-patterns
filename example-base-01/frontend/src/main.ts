import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { marked } from 'marked';
import { PATTERN_DOCS } from './patternDocs';
import type { Pattern, PatternCategory } from './types';

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080').replace(/\/$/, '');
const PATTERN_ENDPOINT = `${API_BASE_URL}/patterns`;

type FilterState = 'ALL' | PatternCategory;

type AppState = {
  patterns: Pattern[];
  loading: boolean;
  error: string | null;
  query: string;
  filter: FilterState;
  selected?: Pattern;
};

const state: AppState = {
  patterns: [],
  loading: false,
  error: null,
  query: '',
  filter: 'ALL',
};

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('Root element #app not found');
}

app.innerHTML = `
  <div class="container py-4 page">
    <header class="hero bg-dark text-white rounded-4 shadow-lg p-4 mb-4">
      <div>
        <p class="eyebrow text-uppercase">Design Patterns Explorer</p>
        <h1 class="display-6 fw-semibold">Visualize, learn, and test every pattern from the Spring Boot backend.</h1>
        <p class="subtitle lead">
          This frontend consumes <code>${PATTERN_ENDPOINT}</code> and enriches the response with curated documentation,
          decision guides, and live demo output straight from the backend services.
        </p>
        <div class="service-links d-flex flex-wrap gap-2 mt-3">
          <a class="btn btn-outline-light btn-sm rounded-pill" href="${API_BASE_URL}/patterns" target="_blank" rel="noreferrer">JSON API</a>
          <a class="btn btn-outline-light btn-sm rounded-pill" href="${API_BASE_URL}/swagger-ui/index.html" target="_blank" rel="noreferrer">Swagger UI</a>
          <a class="btn btn-outline-light btn-sm rounded-pill" href="${API_BASE_URL}/redoc.html" target="_blank" rel="noreferrer">ReDoc</a>
        </div>
      </div>
    </header>

    <section class="controls card border-0 shadow-sm p-4 mb-4">
      <div class="row gy-3 align-items-end">
        <div class="col-12 col-md">
          <label class="form-label text-uppercase small text-muted" for="search-input">Search by name or intent</label>
          <input id="search-input" type="search" class="form-control form-control-lg" placeholder="e.g. Observer, cache, workflow" />
        </div>
        <div class="col-12 col-md-auto">
          <div class="filters btn-group flex-wrap" role="group" aria-label="Filter by category">
            <button class="btn btn-outline-primary pill active" data-filter="ALL">All</button>
            <button class="btn btn-outline-primary pill" data-filter="CREATIONAL">Creational</button>
            <button class="btn btn-outline-primary pill" data-filter="STRUCTURAL">Structural</button>
            <button class="btn btn-outline-primary pill" data-filter="BEHAVIORAL">Behavioral</button>
          </div>
        </div>
      </div>
    </section>

    <section class="content row g-4">
      <aside class="col-12 col-lg-5">
        <div id="pattern-list" class="pattern-list list-group" aria-live="polite"></div>
      </aside>
      <article class="col-12 col-lg-7">
        <div id="pattern-details" class="pattern-details card border-0 shadow-lg p-4 rounded-4">
          <div class="placeholder text-center text-muted py-5">
            <h2 class="h4">Select a pattern</h2>
            <p>Choose a pattern on the left to view deep documentation, decision guidelines, and the live demo payload returned by the backend.</p>
          </div>
        </div>
      </article>
    </section>
    <p id="status" class="status text-center text-muted mt-3"></p>
  </div>
`;

const listEl = document.querySelector<HTMLDivElement>('#pattern-list')!;
const detailsEl = document.querySelector<HTMLElement>('#pattern-details')!;
const statusEl = document.querySelector<HTMLParagraphElement>('#status')!;
const searchInput = document.querySelector<HTMLInputElement>('#search-input')!;
const filterButtons = document.querySelectorAll<HTMLButtonElement>('.filters .pill');

const syncFilterButtons = () => {
  filterButtons.forEach((btn) => {
    const active = btn.dataset.filter === state.filter;
    btn.classList.toggle('active', active);
    btn.classList.toggle('btn-primary', active);
    btn.classList.toggle('btn-outline-primary', !active);
  });
};

searchInput.addEventListener('input', () => {
  state.query = searchInput.value.trim();
  renderList();
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.filter = button.dataset.filter as FilterState;
    syncFilterButtons();
    renderList();
  });
});

syncFilterButtons();

const loadPatterns = async () => {
  state.loading = true;
  state.error = null;
  renderStatus();
  try {
    const response = await fetch(PATTERN_ENDPOINT);
    if (!response.ok) {
      throw new Error(`Backend responded with ${response.status}`);
    }
    const data: Pattern[] = await response.json();
    state.patterns = data;
    state.selected = data[0];
  } catch (error) {
    console.error(error);
    state.error = error instanceof Error ? error.message : 'Unknown error';
  } finally {
    state.loading = false;
    renderList();
    renderDetails();
    renderStatus();
  }
};

const applyFilters = (): Pattern[] => {
  return state.patterns.filter((pattern) => {
    const matchesCategory =
      state.filter === 'ALL' ? true : pattern.category === state.filter;
    const tokens = `${pattern.name} ${pattern.intent}`.toLowerCase();
    const matchesQuery = state.query
      ? tokens.includes(state.query.toLowerCase())
      : true;
    return matchesCategory && matchesQuery;
  });
};

const renderList = () => {
  const filtered = applyFilters();
  if (!filtered.length) {
    listEl.innerHTML = `<p class="empty">No patterns match your filters.</p>`;
    return;
  }
  listEl.innerHTML = '';
  filtered.forEach((pattern) => {
    const button = document.createElement('button');
    const isActive = state.selected?.name === pattern.name;
    button.className = `pattern-card list-group-item list-group-item-action d-flex justify-content-between align-items-center gap-3 rounded-3 mb-2 ${isActive ? 'active' : ''}`;
    button.innerHTML = `
      <div class="flex-grow-1">
        <p class="card-eyebrow mb-1">${pattern.category}</p>
        <h3 class="h5 mb-1">${pattern.name}</h3>
        <p class="card-intent mb-0">${pattern.intent}</p>
      </div>
      <span class="chevron display-6 mb-0" aria-hidden="true">›</span>
    `;
    button.addEventListener('click', () => {
      state.selected = pattern;
      renderList();
      renderDetails();
    });
    listEl.appendChild(button);
  });
};

const renderDetails = () => {
  if (!state.selected) {
    detailsEl.innerHTML = `
      <div class="placeholder">
        <h2>Select a pattern</h2>
        <p>Choose a pattern on the left to view deep documentation, decision guidelines, and the live demo payload returned by the backend.</p>
      </div>`;
    return;
  }

  const doc = PATTERN_DOCS[state.selected.name];
  const fallbackOverview = state.selected.intent;
  const keyIdeas = doc?.keyIdeas ?? ['See backend demo output for more details.'];
  const whenToUse = doc?.whenToUse ?? ['Model-driven guidance not available yet.'];
  const codeExamples = doc?.codeExamples ?? [];

  detailsEl.innerHTML = `
    <section class="detail-header">
      <p class="detail-category">${state.selected.category}</p>
      <h2>${state.selected.name}</h2>
      <p class="detail-overview">${doc?.overview ?? fallbackOverview}</p>
      <div class="demo">
        <p class="demo-label">Live demo output</p>
        <code>${state.selected.demo}</code>
      </div>
    </section>
    <section class="detail-grid">
      <div>
        <h3>Key ideas</h3>
        <ul>
          ${keyIdeas.map((idea) => `<li>${idea}</li>`).join('')}
        </ul>
      </div>
      <div>
        <h3>When to use it</h3>
        <ul>
          ${whenToUse.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      <div class="full-width">
        <h3>Example scenario</h3>
        <p>${doc?.exampleScenario ?? 'Example scenario coming soon.'}</p>
      </div>
      ${
        codeExamples.length
          ? `<div class="full-width code-examples">
              <h3>Code examples</h3>
              <div class="row g-3">
                ${codeExamples
                  .map(
                    (example) => {
                      const markdown = `\`\`\`${example.language}\n${example.code}\n\`\`\``;
                      const highlighted = marked.parse(markdown);
                      return `
                        <div class="col-12 col-md-6">
                          <div class="code-card border rounded-3 p-3 bg-dark text-light">
                            <p class="code-language text-uppercase small text-muted mb-2">${example.language}</p>
                            <div class="code-content">${highlighted}</div>
                          </div>
                        </div>
                      `;
                    }
                  )
                  .join('')}
              </div>
            </div>`
          : ''
      }
    </section>
  `;
};

const renderStatus = () => {
  if (state.loading) {
    statusEl.textContent = 'Loading design patterns from backend...';
    return;
  }
  if (state.error) {
    statusEl.textContent = `Failed to load patterns: ${state.error}. Ensure the backend is running on ${API_BASE_URL}.`;
    return;
  }
  statusEl.textContent = '';
};

loadPatterns();
