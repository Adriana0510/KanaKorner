import { Component } from '@angular/core';
import { EstudianteService } from './mantenimiento-estudiante.service'; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mantenimiento-estudiante',
  templateUrl: './mantenimiento-estudiante.component.html',
  styleUrls: ['./mantenimiento-estudiante.component.scss']
})
export class MantenimientoEstudianteComponent {
  estudiantes: any[] = [];
  nuevoEstudiante: any = {
    nombre: '',
    apellido: '',
    correoElectronico: '',
    edad: 0
  };

  constructor(private estudianteService: EstudianteService) {
    this.obtenerEstudiantes();
  }

  obtenerEstudiantes(): void {
    this.estudianteService.obtenerEstudiantes()
        .subscribe(
            response => {
                if (response && response.Estudiantes) {
                    this.estudiantes = response.Estudiantes;
                }
            },
            error => {
                console.error('Error al obtener estudiantes:', error);
               
            }
        );
}

  crearEstudiante(): void {
    this.estudianteService.crearEstudiante(this.nuevoEstudiante)
      .subscribe(() => {
        this.obtenerEstudiantes();
        this.limpiarFormulario();
      });
  }

  editarEstudiante(estudiante: any): void {
    this.estudianteService.editarEstudiante(estudiante)
        .subscribe(() => {
            this.obtenerEstudiantes(); 
        });
}

eliminarEstudiante(id: string): void {
  this.estudianteService.eliminarEstudiante(id)
      .subscribe(() => {
          this.obtenerEstudiantes();  
      });
}


  private limpiarFormulario(): void {
    this.nuevoEstudiante = {
      nombre: '',
      apellido: '',
      correoElectronico: '',
      edad: 0
    };
  }
}
