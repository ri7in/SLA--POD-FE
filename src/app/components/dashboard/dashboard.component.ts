import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectTableComponent } from '../project-table/project-table.component';
import { StatisticsCardsComponent } from '../statistics-cards/statistics-cards.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ProjectTableComponent, StatisticsCardsComponent],
  templateUrl: './dashboard.component.html',  // Reference to the HTML template
  styleUrls: ['./dashboard.component.scss']  // Reference to the SCSS stylesheet
})
export class DashboardComponent implements OnInit, OnDestroy {
  projects = [
    // Page 1 Projects
    [
      { department: 'Cabin Services', name: 'IBC RE Tool Modification', progress: 10, overdue: 50, start: 'Jan-15', due: 'Jun-30', issues: 90, risk: 'High' },
      { department: 'Cabin Services', name: 'New Flight Operations System', progress: 20, overdue: 50, start: 'Oct-01', due: 'May-01', issues: 10, risk: 'Med' },
      { department: 'Cabin Services', name: 'Baggage Handling Improvement Initiative', progress: 50, overdue: 50, start: 'Apr-05', due: 'Sep-15', issues: 20, risk: 'Low' },
      { department: 'Cargo', name: 'Safety Management System Update', progress: 90, overdue: 50, start: 'Mar-10', due: 'Jul-20', issues: 30, risk: 'Low' }
    ],
    // Page 2 Projects
    [
      { department: 'Cargo', name: 'Employee Training And Development Plan', progress: 50, overdue: 50, start: 'Jun-01', due: 'Oct-01', issues: 40, risk: 'Low' },
      { department: 'Cargo', name: 'Passenger Experience Optimization', progress: 50, overdue: 50, start: 'May-20', due: 'Aug-30', issues: 40, risk: 'Low' },
      { department: 'Engineering And Corporate Safety', name: 'Onboard Service Quality Assessment', progress: 50, overdue: 50, start: 'Jul-15', due: 'Dec-01', issues: 30, risk: 'Low' },
      { department: 'Engineering And Corporate Safety', name: 'Aircraft Maintenance Tracking System', progress: 50, overdue: 50, start: 'Dec-01', due: 'Jun-01', issues: 30, risk: 'Med' }
    ],
    // Page 3 Projects
    [
      { department: 'Finance', name: 'Marketing Campaign For Frequent Flyers', progress: 50, overdue: 50, start: 'Aug-10', due: 'Nov-30', issues: 30, risk: 'Low' },
      { department: 'Finance', name: 'In-Flight Connectivity Enhancement', progress: 50, overdue: 50, start: 'Sep-01', due: 'Jan-15', issues: 80, risk: 'High' },
      { department: 'Finance', name: 'Cargo Operations Performance Review', progress: 50, overdue: 50, start: 'Sep-20', due: 'Mar-15', issues: 10, risk: 'Med' }
    ]
  ];

  currentPage = 0;
  currentPageProjects: any[] = [];
  private pageInterval: any;

  ngOnInit() {
    this.currentPageProjects = this.projects[0];
    this.startPageRotation();
  }

  ngOnDestroy() {
    if (this.pageInterval) {
      clearInterval(this.pageInterval);
    }
  }

  private startPageRotation() {
    this.pageInterval = setInterval(() => {
      this.currentPage = (this.currentPage + 1) % 3;
      this.currentPageProjects = this.projects[this.currentPage];
    }, 10);
  }
}