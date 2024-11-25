// project-table.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-project-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table [@tableAnimation]="currentPage">
      <thead>
        <tr>
          <th>DEPARTMENT</th>
          <th>PROJECT</th>
          <th>PROGRESS</th>
          <th>OVERDUE</th>
          <th>START</th>
          <th>DUE</th>
          <th>ISSUES</th>
          <th>RISK</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let project of projects">
          <td>{{ project.department }}</td>
          <td>{{ project.name }}</td>
          <td>
            <div class="progress-bar">
              <div [style.width.%]="project.progress" class="progress-fill"></div>
              <span>{{ project.progress }}%</span>
            </div>
          </td>
          <td>
            <div class="progress-bar overdue">
              <div [style.width.%]="project.overdue" class="progress-fill"></div>
              <span>{{ project.overdue }}%</span>
            </div>
          </td>
          <td>{{ project.start }}</td>
          <td>{{ project.due }}</td>
          <td>{{ project.issues }}</td>
          <td>
            <span [class]="'risk-badge ' + project.risk.toLowerCase()">
              {{ project.risk }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      background: #2a2a2a;
      border-radius: 8px;
      overflow: hidden;
      margin: 20px 0;
    }

    th {
      background: #333;
      color: white;
      padding: 15px;
      text-align: left;
      font-weight: bold;
    }

    td {
      padding: 12px 15px;
      border-bottom: 1px solid #444;
    }

    tr:last-child td {
      border-bottom: none;
    }

    .progress-bar {
      background: #444;
      height: 20px;
      border-radius: 10px;
      position: relative;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: #4CAF50;
      transition: width 0.3s ease;
    }

    .overdue .progress-fill {
      background: #f44336;
    }

    .progress-bar span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 12px;
    }

    .risk-badge {
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
    }

    .risk-badge.high {
      background: #f44336;
      color: white;
    }

    .risk-badge.med {
      background: #ff9800;
      color: white;
    }

    .risk-badge.low {
      background: #4CAF50;
      color: white;
    }
  `],
  animations: [
    trigger('tableAnimation', [
      transition('* => *', [
        style({ transform: 'rotateX(90deg)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'rotateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class ProjectTableComponent {
  @Input() projects: any[] = [];
  @Input() currentPage = 0;
}