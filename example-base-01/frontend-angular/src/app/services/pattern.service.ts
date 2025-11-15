import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pattern } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PatternService {
  private readonly localAssetPath = 'assets/patterns.json';

  constructor(private readonly http: HttpClient) {}

  fetchPatterns() {
    return this.http.get<Pattern[]>(this.localAssetPath, { headers: { 'Cache-Control': 'no-store' } });
  }
}

