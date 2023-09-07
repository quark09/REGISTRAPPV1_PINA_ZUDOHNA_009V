import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  formularioLogin: FormGroup;

  constructor(private fb: FormBuilder, private toastCtrl: ToastController) { 
      this.formularioLogin = this.fb.group({ 
        correo: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(18)])                
      })
    }

  async mostrarToast() {
    const toast = await this.toastCtrl.create({
      message: 'Inicio de sesión exitoso',
      duration: 2000, 
      color: 'success', 
      position: 'top',
      buttons: [
        {
          side: 'start', 
          icon: 'happy', 
        }
      ]
    });
    toast.present();
  }

  async ingresar() {
    if (this.formularioLogin.valid) {
      await this.mostrarToast();
    }
  }


  ngOnInit() {
  }


}
