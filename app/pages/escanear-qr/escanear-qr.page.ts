import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQrPage {

  constructor(private menuCtrl: MenuController) { }

  mostrarMenu(){
    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');
  }
}

