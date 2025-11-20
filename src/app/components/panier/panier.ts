// src/app/components/panier/panier.component.ts
import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface CartItem {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  oldPrice?: number;
  quantity: number;
  badge?: string;
  badgeColor?: string;
}

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './panier.html',
  styleUrl: './panier.scss'
})
export class Panier {
  // Signal réactif pour le panier
  cartItems = signal<CartItem[]>([
    {
      id: 1,
      name: 'Crème Hydratante Bio Aloe Vera',
      category: 'Soins Visage',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400',
      price: 45,
      oldPrice: 60,
      quantity: 2,
      badge: '-25%',
      badgeColor: 'from-rose-500 to-pink-500'
    },
    {
      id: 2,
      name: 'Sérum Vitamine C Éclat Intense',
      category: 'Anti-âge Premium',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400',
      price: 35,
      oldPrice: 50,
      quantity: 1,
      badge: '-30%',
      badgeColor: 'from-orange-500 to-amber-500'
    },
    {
      id: 3,
      name: 'Multivitamines Premium Complex',
      category: 'Compléments Santé',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400',
      price: 55,
      quantity: 1,
      badge: 'HOT 🔥',
      badgeColor: 'from-blue-500 to-indigo-500'
    }
  ]);

  promoCode = signal('');
  discount = signal(0);

  // Calculs réactifs
  subtotal = computed(() => this.cartItems().reduce((sum, item) => sum + item.price * item.quantity, 0));
  savings = computed(() => this.cartItems().reduce((sum, item) => sum + (item.oldPrice || 0 - item.price) * item.quantity, 0));
  total = computed(() => this.subtotal() - this.discount());

  constructor() {
    effect(() => {
      // Met à jour le badge panier dans la navbar quand le panier change
      const badge = document.getElementById('cartBadge');
      if (badge) badge.textContent = this.cartItems().length.toString();
    });
  }

  updateQuantity(item: CartItem, change: number) {
    const updated = this.cartItems().map(i =>
      i.id === item.id ? { ...i, quantity: Math.max(1, i.quantity + change) } : i
    );
    this.cartItems.set(updated);
  }

  removeItem(id: number) {
    this.cartItems.update(items => items.filter(i => i.id !== id));
  }

  applyPromo() {
    const code = this.promoCode().toUpperCase();
    if (code === 'CACTUS10') {
      this.discount.set(this.subtotal() * 0.10);
      this.showNotification('Code CACTUS10 appliqué ! -10%', 'success');
      this.confetti();
    } else if (code === 'WELCOME20') {
      this.discount.set(this.subtotal() * 0.20);
      this.showNotification('Bienvenue ! -20% avec WELCOME20 🎉', 'success');
      this.confetti();
    } else if (code) {
      this.showNotification('Code invalide', 'error');
    }
  }

  showNotification(message: string, type: 'success' | 'error') {
    const notif = document.createElement('div');
    notif.className = `fixed top-24 right-6 z-50 glass-effect px-6 py-4 rounded-2xl shadow-2xl animate-slide-in-right flex items-center gap-3 border ${type === 'success' ? 'border-emerald-400' : 'border-rose-400'}`;
    notif.innerHTML = `
      <i class="fas ${type === 'success' ? 'fa-check-circle text-emerald-500' : 'fa-times-circle text-rose-500'} text-2xl"></i>
      <span class="font-bold">${message}</span>
    `;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 4000);
  }

  confetti() {
    for (let i = 0; i < 60; i++) {
      const c = document.createElement('div');
      c.className = 'fixed pointer-events-none z-50 text-2xl';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.top = '-20px';
      c.style.animation = 'fall 3s linear forwards';
      c.innerHTML = ['🟢','🟩','🌵','✨','💚'][Math.floor(Math.random() * 5)];
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 3000);
    }
  }
}