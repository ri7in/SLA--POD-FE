import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-statistics-cards',
  templateUrl: './statistics-cards.component.html',
  standalone: true, // This makes it standalone
  styleUrls: ['./statistics-cards.component.scss'],
  animations: [
    trigger('flipAnimation', [
      state('lastWeek', style({ transform: 'rotateY(0deg)' })),
      state('thisWeek', style({ transform: 'rotateY(180deg)' })),
      transition('lastWeek <=> thisWeek', animate('0.6s ease-in-out')),
    ]),
  ],
})
export class StatisticsCardsComponent implements OnInit {
  lastWeekStats = { milestones: '50% Complete', deliverables: '30% Complete', tasksCompleted: '90%' };
  thisWeekStats = { milestones: '60% Complete', deliverables: '40% Complete', tasksCompleted: '95%' };
  currentCard = 'lastWeek';

  ngOnInit() {
    this.startAutoSwitch();
  }

  startAutoSwitch() {
    setInterval(() => {
      this.currentCard = this.currentCard === 'lastWeek' ? 'thisWeek' : 'lastWeek';
    }, 10000); // Flip every 10 seconds
  }
}