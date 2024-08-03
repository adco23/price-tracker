import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { ProductPrice } from '../../core/models/product.model';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  templateUrl: './product-details.component.html'
})
export default class ProductDetailsComponent {
  priceList: ProductPrice[] = [
    {
      place: 'Chango Mas',
      price: 551400,
      date: '2024-02-22'
    },
    {
      place: 'Chango Mas',
      price: 551400,
      date: '2024-02-22'
    },
    {
      place: 'Chango Mas',
      price: 551400,
      date: '2024-02-22'
    },
  ]
}
