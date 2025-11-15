import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';
import { Pattern, PatternCategory, PatternDoc } from './models';
import { PATTERN_DOCS } from './pattern-docs';
import { PatternService } from './services/pattern.service';

type FilterState = 'ALL' | PatternCategory;
type Theme = 'light' | 'dark';
const THEME_KEY = 'pattern-theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  patterns: Pattern[] = [];
  filteredPatterns: Pattern[] = [];
  selected?: Pattern;
  loading = true;
  error: string | null = null;
  query = '';
  filter: FilterState = 'ALL';
  readonly filters: FilterState[] = ['ALL', 'CREATIONAL', 'STRUCTURAL', 'BEHAVIORAL'];
  theme: Theme = this.getInitialTheme();
  private readonly hashChangeHandler = () => this.syncSelectionFromHash();

  constructor(
    private readonly patternService: PatternService,
    private readonly sanitizer: DomSanitizer,
  ) {}

  get themeLabel(): string {
    return this.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
  }

  ngOnInit(): void {
    this.applyTheme(this.theme);
    window.addEventListener('hashchange', this.hashChangeHandler);
    this.loadPatterns();
  }

  ngOnDestroy(): void {
    window.removeEventListener('hashchange', this.hashChangeHandler);
  }

  get statusMessage(): string {
    if (this.loading) {
      return 'Loading design patterns...';
    }
    if (this.error) {
      return `Failed to load patterns: ${this.error}`;
    }
    return '';
  }

  onSearch(value: string): void {
    this.query = value.trim();
    this.applyFilters();
  }

  setFilter(filter: FilterState): void {
    if (this.filter === filter) {
      return;
    }
    this.filter = filter;
    this.applyFilters();
  }

  selectPattern(pattern: Pattern): void {
    if (this.selected?.name === pattern.name) {
      return;
    }
    this.selected = pattern;
    this.updateHashForPattern(pattern);
  }

  trackByName(_: number, pattern: Pattern): string {
    return pattern.name;
  }

  docFor(pattern: Pattern): PatternDoc | undefined {
    return PATTERN_DOCS[pattern.name];
  }

  renderCode(language: string, code: string): SafeHtml {
    const markdown = `\`\`\`${language}\n${code}\n\`\`\``;
    const rendered = marked.parse(markdown, { async: false }) as string;
    return this.sanitizer.bypassSecurityTrustHtml(rendered);
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.theme);
  }

  private loadPatterns(): void {
    this.loading = true;
    this.error = null;
    this.patternService.fetchPatterns().subscribe({
      next: (response) => {
        this.patterns = response ?? [];
        this.syncSelectionFromHash();
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.message ?? 'Unknown error';
        this.patterns = [];
        this.filteredPatterns = [];
        this.loading = false;
      },
    });
  }

  private applyFilters(): void {
    const queryLower = this.query.toLowerCase();
    this.filteredPatterns = this.patterns.filter((pattern) => {
      const matchesCategory =
        this.filter === 'ALL' ? true : pattern.category === this.filter;
      const matchesQuery = queryLower
        ? `${pattern.name} ${pattern.intent}`.toLowerCase().includes(queryLower)
        : true;
      return matchesCategory && matchesQuery;
    });

    if (this.filteredPatterns.length && (!this.selected || !this.filteredPatterns.find((p) => p.name === this.selected?.name))) {
      this.selected = this.filteredPatterns[0];
    }

    if (!this.filteredPatterns.length) {
      this.selected = undefined;
    }
  }

  private syncSelectionFromHash(): void {
    const slug = window.location.hash.replace(/^#/, '');
    if (slug) {
      const match = this.getPatternBySlug(slug);
      if (match) {
        this.selected = match;
        return;
      }
    }
    if (!this.selected && this.patterns.length) {
      this.selected = this.patterns[0];
      this.updateHashForPattern(this.selected);
    }
  }

  private getPatternBySlug(slug: string): Pattern | undefined {
    return this.patterns.find((pattern) => this.slugify(pattern.name) === slug);
  }

  private updateHashForPattern(pattern: Pattern): void {
    const slug = this.slugify(pattern.name);
    if (window.location.hash.slice(1) !== slug) {
      window.history.replaceState(null, '', `#${slug}`);
    }
  }

  private slugify(name: string): string {
    return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  private getInitialTheme(): Theme {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }
}
