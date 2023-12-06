import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap } from 'rxjs';
import { Katakana } from './katakana';

@Injectable({
  providedIn: 'root'
})
export class KatakanaService {
  private apiUrl = 'http://localhost:3000/katakana';

  constructor(private http: HttpClient) {}

  vizualizar(): Observable<Katakana[]> {
    return this.http.get<Katakana[]>(this.apiUrl);
  }

vizualizarByKana(kana: string): Observable<Katakana[]> {
  const url = `${this.apiUrl}/${kana}`;
  return this.http.get<Katakana[]>(url).pipe(
      map(response => [response] as unknown as Katakana[]),
      tap(response => console.log('Response from vizualizarByKana:', response))
  );
}
}
　