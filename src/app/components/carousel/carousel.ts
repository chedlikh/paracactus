// carousel.component.ts
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from '../../models/models';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss'
})
export class Carousel implements OnInit, OnDestroy {
  @Input() slides: Slide[] = [];
  current = 0;
  isAutoPlay = true;
  private autoPlayTimer: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    if (this.slides.length > 0) {
      this.autoPlayTimer = setInterval(() => {
        if (this.isAutoPlay && this.slides.length > 0) {
          this.current = (this.current + 1) % this.slides.length;
        }
      }, 5000);
    }
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }
  }

  next() {
    if (this.slides.length > 0) {
      this.current = (this.current + 1) % this.slides.length;
      this.isAutoPlay = false;
    }
  }

  prev() {
    if (this.slides.length > 0) {
      this.current = (this.current - 1 + this.slides.length) % this.slides.length;
      this.isAutoPlay = false;
    }
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.slides.length) {
      this.current = index;
      this.isAutoPlay = false;
    }
  }

  onMouseEnter() {
    this.isAutoPlay = false;
  }

  onMouseLeave() {
    this.isAutoPlay = true;
  }
}