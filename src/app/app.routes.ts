// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { App } from './app';
import { Panier } from './components/panier/panier';
import { Home } from './components/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'panier', component: Panier},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];