import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

export const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
    { path: '', loadComponent: () => import('./pages/home/home.component') },
    { path: 'product/:id', loadComponent: () => import('./pages/product-details/product-details.component') },
  ]},
  // { path: 'register', component: },
  // { path: 'login', component: },
];
