import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

interface Componentes {
  icon: string;
  nombre: string;
  redirectTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componentes[] = [
    {
      icon: 'home',
      nombre: 'Home',
      redirectTo: '/home'
    },
    {
      icon: 'people',
      nombre: 'Nosotros',
      redirectTo: '/nosotros'
    },
    {
      icon: 'scan',
      nombre: 'Registrar Asistencia',
      redirectTo: '/escanear-qr'
    },
    {
      icon: 'settings',
      nombre: 'Ajustes',
      redirectTo: '/ajustes'
    },
  ]
}
