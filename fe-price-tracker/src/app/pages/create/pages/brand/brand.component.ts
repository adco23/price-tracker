import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonBtnComponent } from '@shared/components/common-btn/common-btn.component';
import { BrandsService } from '@shared/services/brands.service';
import { ApiResponse } from 'src/app/core/models/apiResponse.model';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [ReactiveFormsModule, CommonBtnComponent],
  templateUrl: './brand.component.html'
})
export default class BrandComponent {
  brandForm: FormGroup;
  status: 0 | 1 | 2 | 3 = 0; // 0: agregar, 1: enviando, 2: ok, 3: error
  errorMessage?: string;

  private brandService = inject(BrandsService);

  constructor(private fb: FormBuilder, private router: Router) {
    this.brandForm = this.fb.group({
      name: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.brandForm.valid) {
      this.status = 1;
      this.brandService.createBrand(this.brandForm.value).subscribe({
        next: (res: ApiResponse) => {
          res.status === 'OK' ? this.status = 2 : this.status = 3;
          setTimeout(() => this.router.navigate(['/']), 3000);
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = err.error.message;
          this.status = 0;
          setTimeout(() => this.errorMessage = '', 3000);
        }
      })
    }
  }
}
