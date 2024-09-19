import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { AuthFormLayoutComponent } from './shared/components/auth-form-layout/auth-form-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./pages/home/home.component') },
      { path: 'product/:id', loadComponent: () => import('./pages/product-details/product-details.component') },
    ],
  },
  {
    path: 'auth',
    component: AuthFormLayoutComponent,
    children: [
      { path: 'register', loadComponent: () => import('./pages/auth/pages/register/register.component') },
      { path: 'login', loadComponent: () => import('./pages/auth/pages/login/login.component') },
    ],
  },
  { path: '**', loadComponent: () => import('./pages/error-not-found/error-not-found.component') },
];
