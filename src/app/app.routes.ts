// src/app/app.routes.ts
import { Routes } from '@angular/router';

import { MainLayout } from './layouts/main-layout/main-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';

import { Home } from './components/home/home';
import { Panier } from './components/panier/panier';
import { ProductsComponent } from './components/products/products';
import { ProductDetail } from './components/product-detail/product-detail';
import { LoginComponent } from './components/login.component/login.component';

export const routes: Routes = [

  // Pages WITH navbar + footer + newsletter + cactus
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'panier', component: Panier },
      { path: 'products', component: ProductsComponent },
      { path: 'product-details', component: ProductDetail },
      // all your normal pages here
    ]
  },

  // Pages WITHOUT anything (login, register, etc.)
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: 'login', component: LoginComponent },
    
    ]
  },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];