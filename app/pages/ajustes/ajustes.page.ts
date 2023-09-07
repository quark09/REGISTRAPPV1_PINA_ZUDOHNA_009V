import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage  {

  modoOscuro: boolean = false;

  constructor(private alertController: AlertController, private router: Router, private menuCtrl: MenuController) {}

  mostrarMenu(){
    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');
  }
  
  toggleModoOscuro() {
    document.body.classList.toggle('dark', this.modoOscuro);
  }

  cerrarSesion() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Estás seguro de que deseas cerrar sesión?', 
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/login']);
          },
        },
      ],
    });
  
    await alert.present();
  }
}