// carousel.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from '../../models/models';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss'
})
export class Carousel {
  @Input() slides: Slide[] = [];
  current = 0;

  ngOnInit() {
    setInterval(() => this.current = (this.current + 1) % this.slides.length, 6000);
  }
}