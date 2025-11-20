// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { App } from './app';
import { Panier } from './components/panier/panier';
import { Home } from './components/home/home';
import { ProductsComponent } from './components/products/products';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'panier', component: Panier},
    { path: 'products', component: ProductsComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];