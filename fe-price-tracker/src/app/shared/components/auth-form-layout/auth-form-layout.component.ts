import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'auth-form-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './auth-form-layout.component.html',
})
export class AuthFormLayoutComponent implements OnInit {
  title: string = '';
  messagesByPage = {
    register: 'Create your account',
    login: 'Welcome, Login to continue',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    let route = this.router.url;

    if (route.includes('auth')) {
      this.title = route.includes('register')
        ? this.messagesByPage.register
        : route.includes('login')
          ? this.messagesByPage.login
          : '';
    }
  }
}
