import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonBtnComponent } from '@shared/components/common-btn/common-btn.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ReactiveFormsModule, CommonBtnComponent],
  templateUrl: './store.component.html'
})
export default class StoreComponent {
  storeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.storeForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.storeForm.value);
  }
}
