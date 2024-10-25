import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  intervalId: any;

  quotes = [
    {
      text: "Si c'est cassé, répare-le. Si ce n'est pas cassé, rends-le meilleur.",
      author: 'Steve Jobs',
    },
    {
      text: "Il n'y a pas de bug, seulement des fonctionnalités imprévues.",
      author: 'Inconnu',
    },
    {
      text: "Le code parfait n'existe pas, mais cela ne doit pas nous empêcher de le chercher.",
      author: 'Robert C. Martin (Uncle Bob)',
    },
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.quotes.length;
  }

  setSlide(index: number) {
    this.currentSlide = index;
  }
}
