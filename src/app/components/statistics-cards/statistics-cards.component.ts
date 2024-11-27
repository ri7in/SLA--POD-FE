// statistics-cards.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-statistics-cards',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="statistics-section">
      <h2>LAST WEEK STATISTICS</h2>
      <div class="stats-grid">
        <!-- Milestones Card -->
        <div class="stat-card" [@flipCard]="currentView">
          <div class="card-face front" *ngIf="currentView === 'front'">
            <h3>MILESTONES</h3>
            <div class="circle-progress">
              <svg viewBox="0 0 36 36">
                <path d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#444"
                  stroke-width="3"/>
                <path d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#4CAF50"
                  stroke-width="3"
                  [attr.stroke-dasharray]="getCircleProgress(50)"/>
              </svg>
              <div class="circle-value">50%</div>
              <div class="circle-label">Completed</div>
            </div>
          </div>
          <div class="card-face back" *ngIf="currentView === 'back'">
            <h3>MILESTONES</h3>
            <div class="circle-progress">
              <svg viewBox="0 0 36 36">
                <path d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#444"
                  stroke-width="3"/>
                <path d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#4CAF50"
                  stroke-width="3"
                  [attr.stroke-dasharray]="getCircleProgress(70)"/>
              </svg>
              <div class="circle-value">70%</div>
              <div class="circle-label">Completed</div>
            </div>
          </div>
        </div>

        <!-- Deliverables Card -->
        <div class="stat-card" [@flipCard]="currentView">
          <div class="card-face front" *ngIf="currentView === 'front'">
            <h3>DELIVERABLES</h3>
            <div class="circle-progress">
              <svg viewBox="0 0 36 36">
                <path d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#444"
                  stroke-width="3"/>
                <path d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#4CAF50"
                  stroke-width="3"
                  [attr.stroke-dasharray]="getCircleProgress(30)"/>
              </svg>
              <div class="circle-value">30%</div>
              <div class="circle-label">Completed</div>
            </div>
          </div>
          <div class="card-face back" *ngIf="currentView === 'back'">
            <h3>DELIVERABLES</h3>
            <div class="circle-progress">
              <svg viewBox="0 0 36 36">
                <path d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#444"
                  stroke-width="3"/>
                <path d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#4CAF50"
                  stroke-width="3"
                  [attr.stroke-dasharray]="getCircleProgress(50)"/>
              </svg>
              <div class="circle-value">50%</div>
              <div class="circle-label">Completed</div>
            </div>
          </div>
        </div>

        <!-- Tasks Completed Section -->
        <div class="tasks-section">
          <h3>TASKS COMPLETED</h3>
          <div class="tasks-list" [@flipCard]="currentView">
            <div class="task-item" *ngIf="currentView === 'front'">
              <div class="task-name">IBC RE Tool Modification</div>
              <div class="task-progress">
                <div class="progress-bar">
                  <div class="progress-fill" [style.width]="'100%'"></div>
                </div>
                <span class="progress-text">100% (3/3)</span>
              </div>
            </div>
            <div class="task-item" *ngIf="currentView === 'front'">
              <div class="task-name">New Flight Operations System</div>
              <div class="task-progress">
                <div class="progress-bar">
                  <div class="progress-fill" [style.width]="'50%'"></div>
                </div>
                <span class="progress-text">50% (15/30)</span>
              </div>
            </div>
            <div class="task-item" *ngIf="currentView === 'front'">
              <div class="task-name">Baggage Handling Improvement Initiative</div>
              <div class="task-progress">
                <div class="progress-bar">
                  <div class="progress-fill" [style.width]="'10%'"></div>
                </div>
                <span class="progress-text">10% (9/90)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .statistics-section {
      background-color: #2a2a2a;
      padding: 20px;
      border-radius: 8px;
    }

    h2 {
      color: white;
      margin-bottom: 20px;
      font-size: 18px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    .stat-card {
      position: relative;
      min-height: 200px;
      perspective: 1000px;
    }

    .card-face {
      background: #333;
      padding: 20px;
      border-radius: 8px;
      backface-visibility: hidden;
    }

    h3 {
      color: #4CAF50;
      text-align: center;
      margin-bottom: 20px;
      font-size: 16px;
    }

    .circle-progress {
      position: relative;
      width: 120px;
      height: 120px;
      margin: 0 auto;
    }

    svg {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
    }

    .circle-value {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 24px;
      font-weight: bold;
      color: #4CAF50;
    }

    .circle-label {
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #888;
      font-size: 14px;
    }

    .tasks-section {
      background: #333;
      padding: 20px;
      border-radius: 8px;
    }

    .tasks-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .task-item {
      .task-name {
        color: white;
        margin-bottom: 5px;
        font-size: 14px;
      }

      .task-progress {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .progress-bar {
        flex: 1;
        height: 10px;
        background: #444;
        border-radius: 5px;
        overflow: hidden;
      }

      .progress-fill {
        height: 100%;
        background: #4CAF50;
        transition: width 0.3s ease;
      }

      .progress-text {
        color: #888;
        font-size: 12px;
        min-width: 80px;
      }
    }
  `],
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
    }, 10000);
  }

  getCircleProgress(percentage: number): string {
    const circumference = 2 * Math.PI * 15.9155;
    return `${circumference * percentage / 100} ${circumference}`;
  }
}