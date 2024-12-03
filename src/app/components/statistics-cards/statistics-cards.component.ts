import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-statistics-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics-cards.component.html',
  styleUrl: './statistics-cards.component.scss',
  animations: [
    trigger('flipCard', [
      state('front', style({
        transform: 'rotateY(0deg)'
      })),
      state('back', style({
        transform: 'rotateY(180deg)'
      })),
      transition('front <=> back', [
        animate('0.6s ease-out')
      ])
    ])
  ]
})
export class StatisticsCardsComponent implements OnInit, OnDestroy {
  currentView = 'front';
  currentCard = 'lastWeek'; // Add this property
  private intervalId: any;

  ngOnInit() {
    this.startRotation();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startRotation() {
    this.intervalId = setInterval(() => {
      this.currentView = this.currentView === 'front' ? 'back' : 'front';
      // Optionally, toggle currentCard if needed
      this.currentCard = this.currentCard === 'lastWeek' ? 'thisWeek' : 'lastWeek';
    }, 10000);
  }

  getCircleProgress(percentage: number): string {
    const circumference = 2 * Math.PI * 15.9155;
    return `${circumference * percentage / 100} ${circumference}`;
  }
}