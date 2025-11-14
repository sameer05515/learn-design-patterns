import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Pattern } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatternService {
  private readonly baseUrl = environment.apiBaseUrl.replace(/\/$/, '');

  constructor(private readonly http: HttpClient) {}

  get apiBaseUrl(): string {
    return this.baseUrl;
  }

  fetchPatterns(): Observable<Pattern[]> {
    return this.http.get<Pattern[]>(`${this.baseUrl}/patterns`);
  }
}

