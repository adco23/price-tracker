import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonBtnComponent } from '../../../../shared/components/common-btn/common-btn.component';
import { PassEyeComponent } from '../../../../shared/components/pass-eye/pass-eye.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonBtnComponent, PassEyeComponent],
  templateUrl: './register.component.html',
})
export default class RegisterComponent {
  registerForm: FormGroup;
  showPassword = false;
  showPasswordMatch = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passMatch: ['', Validators.required],
    });
  }

  onTogglePassword() {
    this.showPassword = !this.showPassword;
  }

  onTogglePasswordMatch() {
    this.showPasswordMatch = !this.showPasswordMatch;
  }

  onSubmit () {
    console.info(this.registerForm.value)
  }
}
