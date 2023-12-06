import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap } from 'rxjs';
import { Kanji } from './kanji';

@Injectable({
  providedIn: 'root'
})
export class KanjiService {
  private apiUrl = 'http://localhost:3000/kanji';

  constructor(private http: HttpClient) {}

  vizualizar(): Observable<Kanji[]> {
    return this.http.get<Kanji[]>(this.apiUrl);
  }

vizualizarByKana(kana: string): Observable<Kanji[]> {
  const url = `${this.apiUrl}/${kana}`;
  return this.http.get<Kanji[]>(url).pipe(
      map(response => [response] as unknown as Kanji[]),
      tap(response => console.log('Response from vizualizarByKana:', response))
  );
}
}
　