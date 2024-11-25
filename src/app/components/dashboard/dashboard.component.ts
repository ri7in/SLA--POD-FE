// dashboard.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectTableComponent } from '../project-table/project-table.component';
import { StatisticsCardsComponent } from '../statistics-cards/statistics-cards.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ProjectTableComponent, StatisticsCardsComponent],
  template: `
    <div class="dashboard-container">
      <div class="header">
        <h1>PROJECT OVERVIEW DASHBOARD (POD)</h1>
        <img src="assets/srilankan-airlines-logo.png" alt="Sri Lankan Airlines" />
      </div>
      
      <!-- Project Table Component -->
      <app-project-table [projects]="currentPageProjects" [currentPage]="currentPage"></app-project-table>
      
      <div class="statistics-section">
        <div class="progress-circle">
          <h2>OVERALL PROGRESS</h2>
          <div class="circle-container">
            <div class="circle">
              <div class="circle-value">90%</div>
              <div class="circle-label">On Track</div>
            </div>
          </div>
        </div>
        
        <!-- Statistics Cards Component -->
        <app-statistics-cards></app-statistics-cards>
      </div>
      
      <div class="page-indicators">
        <div 
          *ngFor="let dot of [0,1,2]; let i = index" 
          class="dot" 
          [class.active]="currentPage === i">
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      background-color: #1a1a1a;
      min-height: 100vh;
      padding: 20px;
      color: white;
    }

    .dashboard-container {
      max-width: 1920px;
      margin: 0 auto;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    h1 {
      color: #FFD700;
      font-size: 24px;
      font-weight: bold;
    }

    .statistics-section {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 20px;
      margin-top: 20px;
    }

    .progress-circle {
      background-color: #2a2a2a;
      padding: 20px;
      border-radius: 8px;
    }

    .circle-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
    }

    .circle {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 10px solid #4CAF50;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .circle::before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      border-radius: 50%;
      border: 10px solid #333;
      z-index: -1;
    }

    .circle-value {
      font-size: 32px;
      font-weight: bold;
      color: #4CAF50;
    }

    .circle-label {
      font-size: 14px;
      color: #888;
    }

    .page-indicators {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-top: 20px;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #555;
      transition: background-color 0.3s;
    }

    .dot.active {
      background-color: #4CAF50;
    }
  `]
})
export class DashboardComponent implements OnInit, OnDestroy {
  projects = [
    // Page 1
    [
      { department: 'Cabin Services', name: 'IBC RE Tool Modification', progress: 50, overdue: 50, start: 'Jan-15', due: 'Jun-30', issues: 90, risk: 'High' },
      { department: 'Cabin Services', name: 'New Flight Operations System', progress: 50, overdue: 50, start: 'Oct-01', due: 'May-01', issues: 10, risk: 'Med' },
      { department: 'Cabin Services', name: 'Baggage Handling Improvement Initiative', progress: 50, overdue: 50, start: 'Apr-05', due: 'Sep-15', issues: 20, risk: 'Low' },
      { department: 'Cargo', name: 'Safety Management System Update', progress: 50, overdue: 50, start: 'Mar-10', due: 'Jul-20', issues: 30, risk: 'Low' }
    ],
    // Page 2
    [
      { department: 'Cargo', name: 'Employee Training And Development Plan', progress: 50, overdue: 50, start: 'Jun-01', due: 'Oct-01', issues: 40, risk: 'Low' },
      { department: 'Cargo', name: 'Passenger Experience Optimization', progress: 50, overdue: 50, start: 'May-20', due: 'Aug-30', issues: 40, risk: 'Low' },
      { department: 'Engineering And Corporate Safety', name: 'Onboard Service Quality Assessment', progress: 50, overdue: 50, start: 'Jul-15', due: 'Dec-01', issues: 30, risk: 'Low' },
      { department: 'Engineering And Corporate Safety', name: 'Aircraft Maintenance Tracking System', progress: 50, overdue: 50, start: 'Dec-01', due: 'Jun-01', issues: 30, risk: 'Med' }
    ],
    // Page 3
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
    }, 10000);
  }
}