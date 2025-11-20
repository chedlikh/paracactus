// src/app/models/models.ts
export interface Slide {
  promoBadge?: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
  subtitle: string;
}

export interface Product {
  badge?: string;
  badgeBg?: string;
  image: string;
  category: string;
  name: string;
  rating: string;
  priceCurrent: string;
  priceOld?: string;
}

export interface Category {
  image: string;
  name: string;
}