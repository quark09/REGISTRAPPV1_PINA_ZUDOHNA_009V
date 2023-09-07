import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(private fb: FormBuilder, private toastCtrl: ToastController, private router: Router) {
    this.formularioRegistro = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]],
      confirmPassword: ['', Validators.required],
      sede: [''],
      rol: ['estudiante', Validators.required],
      carrera: [''],
      escuela: [''],
    }, {
      validators: this.passwordMatchValidator // Usando el validador personalizado
    });
  }

  async mostrarToast() {
    const toast = await this.toastCtrl.create({
      message: 'Registro exitoso',
      duration: 2000,
      color: 'success',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'checkmark-circle-outline',
        },
      ],
    });
    toast.present();
  }

  // Validador personalizado para verificar que la contraseña y la confirmación coincidan
  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (passwordControl && confirmPasswordControl) {
      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;

      if (password !== confirmPassword) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  async registrar() {
    if (this.formularioRegistro.valid) {
      await this.mostrarToast();
      // Aquí puedes agregar la lógica para enviar los datos de registro al servidor

      // Redirige al usuario al formulario de inicio de sesión (login.page)
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {}
}
