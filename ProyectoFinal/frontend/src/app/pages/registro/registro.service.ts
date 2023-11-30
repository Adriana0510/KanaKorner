import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  registrarUsuario(formData: object): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}usuario/crear`, formData);
  }
}
