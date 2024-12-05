import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface StatisticItem {
  title: string;
  frontPercentage: number;
  backPercentage: number;
}

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
  currentCard = 'lastWeek';
  private intervalId: any;

  // Hardcoded data structure for future database integration
  milestones: StatisticItem = {
    title: 'MILESTONES',
    frontPercentage: 50,
    backPercentage: 70
  };

  deliverables: StatisticItem = {
    title: 'DELIVERABLES',
    frontPercentage: 30,
    backPercentage: 50
  };

  // Method to calculate conic gradient for circle progress
  calculateConicGradient(percentage: number): string {
    return `conic-gradient(#4CAF50 0% ${percentage}%, #333 ${percentage}% 100%)`;
  }

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
      this.currentCard = this.currentCard === 'lastWeek' ? 'thisWeek' : 'lastWeek';
    }, 2000);
  }
}