import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface Project {
  department: string;
  name: string;
  progress: number;
  overdue: number;
  start: string;
  due: string;
  issues: string;
  risk: string;
}

interface DepartmentGroup {
  name: string;
  projects: Project[];
}

@Component({
  selector: 'app-project-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss'],
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
  @Input() projects: Project[] = [];
  @Input() currentPage = 0;

  // Group projects by department with explicit typing
  get groupedProjects(): DepartmentGroup[] {
    const grouped: DepartmentGroup[] = [];

    this.projects.forEach(project => {
      let departmentGroup = grouped.find(group => group.name === project.department);
      if (!departmentGroup) {
        departmentGroup = { name: project.department, projects: [] };
        grouped.push(departmentGroup);
      }
      departmentGroup.projects.push(project);
    });

    return grouped;
  }

  // Get row color based on risk and department
  getRowColor(index: number, department: DepartmentGroup): string {
    // If it's a high-risk project, return a darker color
    if (department.projects[index].risk.toLowerCase() === 'high') {
      return '#4F3F3F';
    }

    // Alternate row color between #3F4445 and #313435
    return index % 2 === 0 ? '#3F4445' : '#313435';
  }
}