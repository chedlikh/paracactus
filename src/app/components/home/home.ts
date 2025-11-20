// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel } from '../carousel/carousel';
import { ProductSection} from '../product-section/product-section';
import { CategorySection } from '../category-section/category-section';

import { Product, Slide, Category } from '../../models/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    Carousel,
    ProductSection,
    CategorySection,
    
],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  slides: Slide[] = [
    {
      promoBadge: '-30% DE RÉDUCTION',
      title: 'Soins Visage Premium',
      description: 'Découvrez notre sélection de crèmes et sérums anti-âge',
      buttonText: 'Découvrir maintenant',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200',
      subtitle:'ok'
    },
    {
      promoBadge: 'NOUVEAUTÉ',
      title: 'Cosmétiques Bio & Naturels',
      description: '100% naturels, certifiés bio',
      buttonText: 'Voir la collection',
      image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=1200',
      subtitle:'ok'
    },
    {
      promoBadge: 'OFFRE SPÉCIALE',
      title: 'Compléments Alimentaires',
      description: 'Boostez votre santé naturellement',
      buttonText: "J'en profite",
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200',
      subtitle:'ok'
    }
  ];

  promotions: Product[] = [
    { badge: '-25%', badgeBg: 'bg-red-500', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600', category: 'Visage', name: 'Crème Hydratante Bio', rating: '★★★★★', priceCurrent: '45 DT', priceOld: '60 DT' },
    { badge: '-30%', badgeBg: 'bg-red-500', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600', category: 'Anti-âge', name: 'Sérum Vitamine C', rating: '★★★★★', priceCurrent: '35 DT', priceOld: '50 DT' },
    { badge: '-20%', badgeBg: 'bg-red-500', image: 'https://images.unsplash.com/photo-1591370869816-0cd65e4c70af?w=600', category: 'Corps', name: 'Beurre de Karité', rating: '★★★★★', priceCurrent: '28 DT', priceOld: '43 DT' },
    { badge: '-35%', badgeBg: 'bg-red-500', image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=600', category: 'Huiles', name: "Huile d'Argan", rating: '★★★★★', priceCurrent: '55 DT', priceOld: '79 DT' }
  ];

  bestSellers: Product[] = [
    { badge: 'Top', badgeBg: 'bg-primary', image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=600', category: 'Cheveux', name: 'Shampooing Aloe Vera', rating: '★★★★★', priceCurrent: '32 DT' },
    { badge: 'Top', badgeBg: 'bg-primary', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600', category: 'Santé', name: 'Multivitamines', rating: '★★★★★', priceCurrent: '55 DT' },
    { badge: 'Top', badgeBg: 'bg-primary', image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600', category: 'Corps', name: 'Gel Douche Bio', rating: '★★★★☆', priceCurrent: '25 DT' },
    { badge: 'Top', badgeBg: 'bg-primary', image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600', category: 'Solaire', name: 'Crème SPF50+', rating: '★★★★★', priceCurrent: '48 DT' }
  ];

  categories: Category[] = [
    { image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600', name: 'Soins Visage' },
    { image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600', name: 'Cheveux' },
    { image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600', name: 'Corps' },
    { image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600', name: 'Maquillage' },
    { image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600', name: 'Compléments' },
    { image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600', name: 'Bébé & Maman' },
    { image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=600', name: 'Bio' },
    { image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600', name: 'Parfumerie' }
  ];
}