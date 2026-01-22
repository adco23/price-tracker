import { Routes } from '@angular/router';
import { MainLayoutComponent } from '@shared/components/main-layout/main-layout.component';
import { FormLayoutComponent } from '@shared/components/form-layout/form-layout.component';

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
    path: 'create',
    component: FormLayoutComponent,
    children: [
      { path: 'brand', loadComponent: () => import('./pages/create/pages/brand/brand.component') },
      { path: 'product', loadComponent: () => import('./pages/create/pages/product/product.component') },
      { path: 'store', loadComponent: () => import('./pages/create/pages/store/store.component') },
      { path: 'unit', loadComponent: () => import('./pages/create/pages/unit/unit.component') },
    ],
  },
  {
    path: 'auth',
    component: FormLayoutComponent,
    children: [
      { path: 'register', loadComponent: () => import('./pages/auth/pages/register/register.component') },
      { path: 'login', loadComponent: () => import('./pages/auth/pages/login/login.component') },
    ],
  },
  { path: '**', loadComponent: () => import('./pages/error-not-found/error-not-found.component') },
];
