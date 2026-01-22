import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'auth-form-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent],
  templateUrl: './form-layout.component.html',
})
export class FormLayoutComponent implements OnInit {
  title: string = '';
  messagesByPage = {
    register: 'Crea tu cuenta',
    login: 'Hola, inicia sesión para continuar',
    product: 'Nuevo producto',
    brand: 'Nueva marca',
    unit: 'Nueva unidad',
    store: 'Nueva tienda'
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.title = this.handleMessage(this.router.url);
  }

  handleMessage(route: string): string {
    let keys = route.split('/').filter(key => key !== '');

    if (keys.includes('auth')) {
      if (keys.includes('login')) return this.messagesByPage.login;
      if (keys.includes('register')) return this.messagesByPage.register;
    }

    if (keys.includes('create')) {
      if (keys.includes('product')) return this.messagesByPage.product;
      if (keys.includes('brand')) return this.messagesByPage.brand;
      if (keys.includes('store')) return this.messagesByPage.store;
      if (keys.includes('unit')) return this.messagesByPage.unit;
    }
    return '';
  }
}
