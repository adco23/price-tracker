import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonBtnComponent } from '@shared/components/common-btn/common-btn.component';
import { DropdownComponent } from '@shared/components/dropdown/dropdown.component';
import { BrandsService } from '@shared/services/brands.service';
import { ApiResponse } from 'src/app/core/models/apiResponse.model';
import { Brand } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonBtnComponent, DropdownComponent],
  templateUrl: './product.component.html'
})
export default class ProductComponent {
  brands$ = signal<Brand[]>([]);
  private brandService = inject(BrandsService);

  ngOnInit(): void {
    this.getBrands();
  }

  private getBrands() {
    this.brandService.getAllBrands().subscribe({
      next: (res: ApiResponse) => this.brands$.set(res?.data),
      error: (err) => console.error(err)
    })
  }
}
