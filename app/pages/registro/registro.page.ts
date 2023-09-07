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
      validators: this.passwordMatchValidator 
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
      

      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {}
}
