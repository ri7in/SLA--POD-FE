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
  @Input() projects: Project[] = [
    {
      department: 'Cabin Services',
      name: 'IBC RE Tool Modification',
      progress: 50,
      overdue: 50,
      start: 'Jan-15',
      due: 'Jun-30',
      issues: '90',
      risk: 'High'
    },
    {
      department: 'Cabin Services',
      name: 'New Flight Operations System',
      progress: 50,
      overdue: 50,
      start: 'Oct-01',
      due: 'May-01',
      issues: '10',
      risk: 'Med'
    },
    {
      department: 'Cabin Services',
      name: 'Baggage Handling Improvement Initiative',
      progress: 50,
      overdue: 50,
      start: 'Apr-05',
      due: 'Sep-15',
      issues: '20',
      risk: 'Low'
    },
    {
      department: 'Cargo',
      name: 'Safety Management System Update',
      progress: 50,
      overdue: 50,
      start: 'Mar-10',
      due: 'Jul-20',
      issues: '30',
      risk: 'Low'
    },
    {
      department: 'Cargo',
      name: 'Employee Training And Development Plan',
      progress: 50,
      overdue: 50,
      start: 'Jun-01',
      due: 'Oct-01',
      issues: '40',
      risk: 'Low'
    },
    {
      department: 'Cargo',
      name: 'Passenger Experience Optimization',
      progress: 50,
      overdue: 50,
      start: 'May-20',
      due: 'Aug-30',
      issues: '40',
      risk: 'Low'
    },
    {
      department: 'Engineering And Corporate Safety',
      name: 'Onboard Service Quality Assessment',
      progress: 50,
      overdue: 50,
      start: 'Jul-15',
      due: 'Dec-01',
      issues: '30',
      risk: 'Low'
    },
    {
      department: 'Engineering And Corporate Safety',
      name: 'Aircraft Maintenance Tracking System',
      progress: 50,
      overdue: 50,
      start: 'Dec-01',
      due: 'Jun-01',
      issues: '30',
      risk: 'Med'
    },
    {
      department: 'Finance',
      name: 'Marketing Campaign For Frequent Flyers',
      progress: 50,
      overdue: 50,
      start: 'Aug-10',
      due: 'Nov-30',
      issues: '30',
      risk: 'Low'
    },
    {
      department: 'Finance',
      name: 'In-Flight Connectivity Enhancement',
      progress: 50,
      overdue: 50,
      start: 'Sep-01',
      due: 'Jan-15',
      issues: '80',
      risk: 'High'
    },
    {
      department: 'Finance',
      name: 'Cargo Operations Performance Review',
      progress: 50,
      overdue: 50,
      start: 'Sep-20',
      due: 'Mar-15',
      issues: '10',
      risk: 'Med'
    }
  ];
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
    // If it's a high-risk project, return a red color
    if (department.projects[index].risk.toLowerCase() === 'high') {
      return '#8b0000';
    }

    // Alternate row color between #3F4445 and #313435
    return index % 2 === 0 ? '#3F4445' : '#313435';
  }

  // Get risk badge color based on risk level
  getRiskBadgeColor(risk: string): string {
    switch (risk.toLowerCase()) {
      case 'high':
        return '#ff0000';
      case 'med':
        return '#ffa500';
      default:
        return '#4caf50';
    }
  }
}