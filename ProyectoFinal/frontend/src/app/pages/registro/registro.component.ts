import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  @ViewChild('registroForm') registroForm!: NgForm;
  
  constructor(private registroService: RegistroService) {}

  registro() {
    const formData = new FormData();
    // Obtener valores del formulario
    const nombre = this.registroForm.value.nombre;
    const apellido = this.registroForm.value.apellido;
    const correo = this.registroForm.value.correo;
    const edad = this.registroForm.value.edad;
    const usuario = this.registroForm.value.usuario;
    const contrasena = this.registroForm.value.contrasena;

    // Preparar datos para enviar al backend
    formData.append('nombre', nombre);
    formData.append('apellido', apellido);
    formData.append('correo', correo);
    formData.append('edad', edad);
    formData.append('usuario', usuario);
    formData.append('contrasena', contrasena);

    // Enviar datos al backend usando el servicio ApiService
    this.registroService.registrarUsuario(formData).subscribe(
      (response:any) => {
        // Manejar la respuesta del servidor
        console.log('Registro exitoso:', response);
      },
      (error:any) => {
        // Manejar errores
        console.error('Error al registrar:', error);
      }
    );
  }
} 
