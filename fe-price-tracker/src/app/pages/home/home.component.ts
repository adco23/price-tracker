import { Component, signal, inject } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { RouterLink } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductsService } from '../../shared/services/products.service';
import { ApiResponse } from 'src/app/core/models/apiResponse.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, AsyncPipe],
  templateUrl: './home.component.html'
})
export default class HomeComponent {

  products$ = signal<Product[]>([]);

  private productService = inject(ProductsService);

  constructor () {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.productService.getAllProducts().subscribe({
      next: (res: ApiResponse) => this.products$.set(res?.data),
      error: (err) => console.error(err)
    })
  }

  getColor (index: number) {
    return {
      'bg-primary-300': index % 3 === 0,
      'bg-secondary-300': index % 3 === 1,
      'bg-energy-yellow-300': index % 3 === 2,
    }
  }
}
