// src/app/components/category-card/category-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Category {
  image: string;
  name: string;
  count?: string; // optionnel pour afficher "320+ produits"
}

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-card.html',
  styleUrl: './category-card.scss' // tu peux laisser vide ou ajouter des styles spécifiques
})
export class CategoryCard {
  @Input({ required: true }) category!: Category;
}