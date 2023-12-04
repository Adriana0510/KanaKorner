import { Component, ViewChild } from '@angular/core';
import { NgForm, Validators,FormBuilder } from '@angular/forms';
import { AuthService } from './inicio-de-secion.service';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Component({
  selector: 'app-inicio-de-secion',
  templateUrl: './inicio-de-secion.component.html',
  styleUrls: ['./inicio-de-secion.component.scss']
})
export class InicioDeSecionComponent {

  
  usuario: Usuario = {
    usuario: '',
    contrasena: '',
  };
  loginForm: any;

  constructor(private authService: AuthService, private formBuilder: FormBuilder,private router: Router) {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }

  iniciarSesion() {
    const usuario = this.loginForm.value;
    console.log(this.usuario);
    this.authService.login(this.usuario).subscribe(
      (response) => {
        console.log('Inicio de sesión exitoso', response);
        this.router.navigate(['/menu']);
      },
      (error) => {
        console.error('Error en el inicio de sesión', error);
      }
    );
  }
}