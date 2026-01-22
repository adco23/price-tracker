import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonBtnComponent } from '@shared/components/common-btn/common-btn.component';

@Component({
  selector: 'app-unit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonBtnComponent],
  templateUrl: './unit.component.html'
})
export default class UnitComponent {
  unitForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.unitForm = this.fb.group({
      title: ['', Validators.required],
      symbol: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.unitForm.value);
  }
}
