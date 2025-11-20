// src/app/components/product-section.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/models';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [CommonModule, ProductCard],
  template: `
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-gray-800">{{title}} <span class="text-5xl">🌵</span></h2>
        <p class="text-xl text-gray-600 mt-3">{{subtitle}}</p>
      </div>
      <div class="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <app-product-card *ngFor="let p of products" [product]="p"></app-product-card>
      </div>
    </section>
  `
})
export class ProductSection {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() products: Product[] = [];
}