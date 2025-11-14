import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';
import { Pattern, PatternCategory, PatternDoc } from './models';
import { PATTERN_DOCS } from './pattern-docs';
import { PatternService } from './services/pattern.service';

type FilterState = 'ALL' | PatternCategory;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  patterns: Pattern[] = [];
  filteredPatterns: Pattern[] = [];
  selected?: Pattern;
  loading = true;
  error: string | null = null;
  query = '';
  filter: FilterState = 'ALL';
  readonly filters: FilterState[] = ['ALL', 'CREATIONAL', 'STRUCTURAL', 'BEHAVIORAL'];

  constructor(
    private readonly patternService: PatternService,
    private readonly sanitizer: DomSanitizer,
  ) {}

  get apiBaseUrl(): string {
    return this.patternService.apiBaseUrl;
  }

  ngOnInit(): void {
    this.loadPatterns();
  }

  get statusMessage(): string {
    if (this.loading) {
      return 'Loading design patterns from backend...';
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
    this.selected = pattern;
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

  private loadPatterns(): void {
    this.loading = true;
    this.error = null;
    this.patternService.fetchPatterns().subscribe({
      next: (response) => {
        this.patterns = response ?? [];
        if (!this.selected && this.patterns.length) {
          this.selected = this.patterns[0];
        }
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
}
