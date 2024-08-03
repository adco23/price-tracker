import { Component } from '@angular/core';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html'
})
export default class HomeComponent {
  products: Product[] = [
    { title: 'Product' },
    { title: 'Product' },
    { title: 'Product' },
    { title: 'Product' },
    { title: 'Product' },
    { title: 'Product' },
    { title: 'Product' },
    { title: 'Product' },
    { title: 'Product' },
    { title: 'Product' },
    { title: 'Product' },
    { title: 'Product' },
    { title: 'Product' },
    { title: 'Product' },
  ];
}
