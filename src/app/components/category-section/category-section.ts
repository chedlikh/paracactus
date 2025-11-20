// src/app/components/category-section/category-section.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCard } from '../category-card/category-card';
import { Category } from '../../models/models';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [CommonModule, CategoryCard],
  templateUrl: './category-section.html',
  styleUrl: './category-section.scss'
})
export class CategorySection {
  @Input() categories: Category[] = [];
}