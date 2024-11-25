import { Component } from '@angular/core';
import { ProjectTableComponent } from '../project-table/project-table.component';
import { StatisticsCardsComponent } from '../statistics-cards/statistics-cards.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [ProjectTableComponent, StatisticsCardsComponent] // Import child components here,
})
export class DashboardComponent {

}
