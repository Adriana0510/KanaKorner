import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private apiUrl = 'http://localhost:3000/estudiante';

  constructor(private http: HttpClient) { }

  obtenerEstudiantes(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  crearEstudiante(estudiante: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear`, estudiante);
  }

  editarEstudiante(estudiante: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/editar`, estudiante);
  }

  eliminarEstudiante(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/borrar/${id}`);
}
}
