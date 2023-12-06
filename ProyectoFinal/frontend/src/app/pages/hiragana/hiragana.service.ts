import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap } from 'rxjs';
import { Hiragana } from './hiragana';

@Injectable({
  providedIn: 'root'
})
export class HiraganaService {
  private apiUrl = 'http://localhost:3000/hiragana';

  constructor(private http: HttpClient) {}

  vizualizar(): Observable<Hiragana[]> {
    return this.http.get<Hiragana[]>(this.apiUrl);
  }

vizualizarByKana(kana: string): Observable<Hiragana[]> {
    const url = `${this.apiUrl}/${kana}`;
    return this.http.get<Hiragana[]>(url).pipe(
        map(response => [response] as unknown as Hiragana[]),
        tap(response => console.log('Response from vizualizarByKana:', response))
    );
}
}
　