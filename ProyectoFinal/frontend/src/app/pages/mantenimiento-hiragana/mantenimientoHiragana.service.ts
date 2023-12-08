import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HiraganaService {
  private apiUrl = 'http://localhost:3000/hiragana';

  constructor(private http: HttpClient) { }

  obtenerHiraganas(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  crearHiraganas(hiragana: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear`, hiragana);
  }
}
