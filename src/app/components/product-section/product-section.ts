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
    <section class="py-12 sm:py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-12">
    <h2 class="text-4xl sm:text-5xl font-black text-gradient mb-4">{{title}}</h2>
    <p class="text-lg sm:text-xl text-gray-600">{{subtitle}}</p>
  </div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <app-product-card *ngFor="let p of products; let i = index" [product]="p" [style.animation-delay.ms]="i * 100"></app-product-card>
  </div>
</section>
  `
})
export class ProductSection {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() products: Product[] = [];
}