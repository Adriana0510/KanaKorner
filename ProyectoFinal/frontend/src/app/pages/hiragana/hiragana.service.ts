// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Hiragana } from './hiragana';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  vizualizar(): Observable<Hiragana[]> {
    return this.http.get<Hiragana[]>(`${this.apiUrl}hiragana/`)
      .pipe(
        catchError(error => {
          console.error('Error fetching hiragana data:', error);
          throw error;
        })
      );
  }
}
