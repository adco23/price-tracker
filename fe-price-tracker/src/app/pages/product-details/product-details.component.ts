import { Component, inject, LOCALE_ID, OnInit, Signal, signal } from '@angular/core';
import { Product, ProductPrice } from '../../core/models/product.model';
import { AsyncPipe, CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ApiResponse } from 'src/app/core/models/apiResponse.model';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink, AsyncPipe],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  templateUrl: './product-details.component.html'
})
export default class ProductDetailsComponent implements OnInit {
  // priceList: ProductPrice[] = [
  //   {
  //     place: 'Chango Mas',
  //     price: 551400,
  //     date: '2024-02-22'
  //   },
  //   {
  //     place: 'Chango Mas',
  //     price: 551400,
  //     date: '2024-02-22'
  //   },
  //   {
  //     place: 'Chango Mas',
  //     price: 551400,
  //     date: '2024-02-22'
  //   },
  //   {
  //     place: 'Chango Mas',
  //     price: 551400,
  //     date: '2024-02-22'
  //   },
  //   {
  //     place: 'Chango Mas',
  //     price: 551400,
  //     date: '2024-02-22'
  //   },
  //   {
  //     place: 'Chango Mas',
  //     price: 551400,
  //     date: '2024-02-22'
  //   },
  // ];

  product$ = signal<Product>({
    id: 0,
    title: '',

  });
  isLoaded = signal(true);

  private productService = inject(ProductsService);

  constructor (private route: ActivatedRoute) {};

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.getProduct(Number(paramMap.get('id')));
    })
  }

  getColor (index: number) {
    return {
      'bg-primary-300': index % 3 === 0,
      'bg-secondary-300': index % 3 === 1,
      'bg-energy-yellow-300': index % 3 === 2,
    }
  }

  private getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: (res: ApiResponse) => this.product$.set(res.data),
      error: (err) => console.error(err),
      complete: () => this.isLoaded.set(false)
    })
  }
}
