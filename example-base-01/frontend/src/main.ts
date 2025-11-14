import './style.css';
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
  <div class="page">
    <header class="hero">
      <div>
        <p class="eyebrow">Design Patterns Explorer</p>
        <h1>Visualize, learn, and test every pattern from the Spring Boot backend.</h1>
        <p class="subtitle">
          This frontend consumes <code>${PATTERN_ENDPOINT}</code> and enriches the response with curated documentation,
          decision guides, and live demo output straight from the backend services.
        </p>
        <div class="service-links">
          <a href="${API_BASE_URL}/patterns" target="_blank" rel="noreferrer">JSON API</a>
          <a href="${API_BASE_URL}/swagger-ui/index.html" target="_blank" rel="noreferrer">Swagger UI</a>
          <a href="${API_BASE_URL}/redoc.html" target="_blank" rel="noreferrer">ReDoc</a>
        </div>
      </div>
    </header>

    <section class="controls">
      <label class="search">
        <span>Search by name or intent</span>
        <input id="search-input" type="search" placeholder="e.g. Observer, cache, workflow" />
      </label>

      <div class="filters" role="group" aria-label="Filter by category">
        <button class="pill active" data-filter="ALL">All</button>
        <button class="pill" data-filter="CREATIONAL">Creational</button>
        <button class="pill" data-filter="STRUCTURAL">Structural</button>
        <button class="pill" data-filter="BEHAVIORAL">Behavioral</button>
      </div>
    </section>

    <section class="content">
      <aside id="pattern-list" aria-live="polite"></aside>
      <article id="pattern-details">
        <div class="placeholder">
          <h2>Select a pattern</h2>
          <p>Choose a pattern on the left to view deep documentation, decision guidelines, and the live demo payload returned by the backend.</p>
        </div>
      </article>
    </section>
    <p id="status" class="status"></p>
  </div>
`;

const listEl = document.querySelector<HTMLDivElement>('#pattern-list')!;
const detailsEl = document.querySelector<HTMLElement>('#pattern-details')!;
const statusEl = document.querySelector<HTMLParagraphElement>('#status')!;
const searchInput = document.querySelector<HTMLInputElement>('#search-input')!;
const filterButtons = document.querySelectorAll<HTMLButtonElement>('.filters .pill');

searchInput.addEventListener('input', () => {
  state.query = searchInput.value.trim();
  renderList();
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    state.filter = button.dataset.filter as FilterState;
    renderList();
  });
});

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
    button.className = `pattern-card${state.selected?.name === pattern.name ? ' active' : ''}`;
    button.innerHTML = `
      <div>
        <p class="card-eyebrow">${pattern.category}</p>
        <h3>${pattern.name}</h3>
        <p class="card-intent">${pattern.intent}</p>
      </div>
      <span class="chevron" aria-hidden="true">›</span>
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
