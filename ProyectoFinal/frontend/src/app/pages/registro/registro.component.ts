import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistroService } from './registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  @ViewChild('registroForm') registroForm!: NgForm;

  constructor(private registroService: RegistroService, private router: Router) {}

  registro() { 
    const formData = new FormData();
    const nombre = this.registroForm.value.nombre;
    const apellido = this.registroForm.value.apellido;
    const correo = this.registroForm.value.correo;
    const edad = this.registroForm.value.edad;
    const usuario = this.registroForm.value.usuario;
    const contrasena = this.registroForm.value.contrasena;

    this.registroService.registrarUsuario({nombre, apellido, correo, edad, usuario, contrasena}).subscribe(
      (response:any) => {
        console.log('Registro exitoso:', response);
        this.router.navigate(['/menu']);
      },
      (error:any) => {
        console.error('Error al registrar:', error);
      }
    );
  }
}
