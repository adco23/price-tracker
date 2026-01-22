import { Component, inject, LOCALE_ID, OnInit, Signal, signal } from '@angular/core';
import { Product, ProductPrice } from '../../core/models/product.model';
import { AsyncPipe, CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ApiResponse } from 'src/app/core/models/apiResponse.model';
import { LoadingComponent } from '@shared/components/loading/loading.component';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink, AsyncPipe, LoadingComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  templateUrl: './product-details.component.html'
})
export default class ProductDetailsComponent implements OnInit {

  product$ = signal<Product>({
    id: 0,
    title: '',
  });
  isLoaded = signal(false);

  private productService = inject(ProductsService);

  constructor (private route: ActivatedRoute, private router: Router) {};

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
      complete: () => setTimeout(() => this.isLoaded.set(true), 3000)
      // complete: () => this.isLoaded.set(true)
    })
  }

  getUnitPrice(price: number, quantity: number): number {
    return price / quantity;
  }

  redirectTo() {
    this.router.navigate(['/create/price']);
  }
}
