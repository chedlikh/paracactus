// src/app/pages/products/products.component.ts
import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCard } from '../product-card/product-card';

import { Product } from '../../models/models'; // ← Ton modèle inchangé

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCard], // ← ProductCard importé
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class ProductsComponent {
  // === DONNÉES PRODUITS (compatible avec ton models.ts) ===
  allProducts = signal<Product[]>([
    { 
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600', 
      category: 'Soins Visage', 
      name: 'Crème Hydratante Bio', 
      rating: '★★★★★', 
      priceCurrent: '45 DT', 
      priceOld: '60 DT',
      badge: '-25%',
      badgeBg: 'from-rose-500 to-pink-500'
    },
    { 
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600', 
      category: 'Anti-âge', 
      name: 'Sérum Vitamine C', 
      rating: '★★★★★', 
      priceCurrent: '35 DT', 
      priceOld: '50 DT',
      badge: '-30%',
      badgeBg: 'from-orange-500 to-amber-500'
    },
    { 
      image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=600', 
      category: 'Huiles', 
      name: "Huile d'Argan Pure", 
      rating: '★★★★★', 
      priceCurrent: '55 DT', 
      priceOld: '79 DT',
      badge: '-35%',
      badgeBg: 'from-green-500 to-emerald-500'
    },
    { 
      image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=600', 
      category: 'Cheveux', 
      name: 'Shampooing Aloe Vera', 
      rating: '★★★★★', 
      priceCurrent: '32 DT'
    },
    { 
      image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600', 
      category: 'Solaire', 
      name: 'Crème Solaire SPF50+', 
      rating: '★★★★★', 
      priceCurrent: '48 DT'
    }
  ]);

  // === FILTRES ===
  searchTerm = signal('');
  selectedCategory = signal<string>('all');
  priceMin = signal(0);
  priceMax = signal(100);
  onlyPromo = signal(false);

  // === TRI & VUE ===
  sortBy = signal<'price-asc' | 'price-desc' | 'name' | 'rating'>('price-desc');
  viewMode = signal<'grid' | 'list'>('grid');

  // === PRODUITS FILTRES & TRIES ===
  filteredProducts = computed(() => {
    let filtered = this.allProducts();

    // Recherche
    if (this.searchTerm()) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(this.searchTerm().toLowerCase()));
    }

    // Catégorie
    if (this.selectedCategory() !== 'all') {
      filtered = filtered.filter(p => p.category === this.selectedCategory());
    }

    // Prix (on extrait le nombre du string "45 DT")
    const min = this.priceMin();
    const max = this.priceMax();
    filtered = filtered.filter(p => {
      const price = parseFloat(p.priceCurrent.replace(' DT', ''));
      return price >= min && price <= max;
    });

    // Promo
    if (this.onlyPromo()) {
      filtered = filtered.filter(p => !!p.priceOld);
    }

    // Tri
    filtered = [...filtered].sort((a, b) => {
      const priceA = parseFloat(a.priceCurrent.replace(' DT', ''));
      const priceB = parseFloat(b.priceCurrent.replace(' DT', ''));

      switch (this.sortBy()) {
        case 'price-asc': return priceA - priceB;
        case 'price-desc': return priceB - priceA;
        case 'name': return a.name.localeCompare(b.name);
        case 'rating': return b.rating.localeCompare(a.rating);
        default: return 0;
      }
    });

    return filtered;
  });

  categories = computed(() => {
    const cats = Array.from(new Set(this.allProducts().map(p => p.category)));
    return ['all', ...cats];
  });
}