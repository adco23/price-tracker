import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonBtnComponent } from '@shared/components/common-btn/common-btn.component';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonBtnComponent],
  templateUrl: './new-product.component.html'
})
export default class NewProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      brand: '',
      description: '',
    });
  };

  onSubmit () {
    console.info(this.productForm.value)
  }
}
