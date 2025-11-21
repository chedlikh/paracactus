// product-detail.component.ts (with swipe support added)
import { Component, HostListener, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.scss']
})
export class ProductDetail implements OnInit {
  currentImageIndex = 0;
  isZoomed = false;
  zoomPosition = { x: 50, y: 50 };
  lightboxOpen = false;
  lightboxIndex = 0;

  // Touch swipe for gallery
  private touchStartX = 0;
  private touchEndX = 0;

  product = {
    name: 'Sérum Hydratant Intense à l\'Aloe Vera & Acide Hyaluronique',
    category: 'Soins Visage',
    brand: 'The Ordinary',
    priceCurrent: '65 DT',
    priceOld: '89 DT',
    rating: '4.9',
    reviews: 342,
    description: 'Un sérum ultra-hydratant enrichi en aloe vera bio et acide hyaluronique pur. Hydrate en profondeur, repulpe la peau et réduit les ridules en seulement 7 jours.',
    benefits: [
      'Hydratation intense 24h',
      'Réduit les ridules',
      'Apaise les irritations',
      'Texture légère non grasse',
      '99% d\'ingrédients naturels'
    ],
    promo: true,
     images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591370869816-0cd65e4c70af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    ]
  };

  ngOnInit() {}

  nextImage() { this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length; }
  prevImage() { this.currentImageIndex = (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length; }
  selectImage(i: number) { this.currentImageIndex = i; }

  onImageMouseMove(event: MouseEvent) {
    if (!this.isZoomed) return;
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    this.zoomPosition = { x, y };
  }

  // Touch swipe handlers
  onTouchStart(e: TouchEvent) { this.touchStartX = e.changedTouches[0].screenX; }
  onTouchMove(e: TouchEvent) { this.touchEndX = e.changedTouches[0].screenX; }
  onTouchEnd() {
    if (!this.touchStartX || !this.touchEndX) return;
    const diff = this.touchStartX - this.touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) this.nextImage();
      else this.prevImage();
    }
    this.touchStartX = 0;
    this.touchEndX = 0;
  }

  openLightbox(i: number) {
    this.lightboxIndex = i;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }
  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }
  nextLightboxImage() { this.lightboxIndex = (this.lightboxIndex + 1) % this.product.images.length; }
  prevLightboxImage() { this.lightboxIndex = (this.lightboxIndex - 1 + this.product.images.length) % this.product.images.length; }
  selectLightboxImage(i: number) { this.lightboxIndex = i; }

  @HostListener('document:keydown', ['$event'])
  handleKey(e: KeyboardEvent) {
    if (!this.lightboxOpen) return;
    if (e.key === 'Escape') this.closeLightbox();
    if (e.key === 'ArrowLeft') this.prevLightboxImage();
    if (e.key === 'ArrowRight') this.nextLightboxImage();
  }
}