import { Component } from '@angular/core';

@Component({
  selector: 'app-project-table',
  standalone: true,
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss']
})
export class ProjectTableComponent {
  // Define the type inline as an array of objects
  projects: { 
    department: string; 
    name: string; 
    progress: number; 
    overdue: number; 
    start: string; 
    due: string; 
    issues: number; 
    risk: string; 
  }[] = [
    {
      department: 'Cabin Services',
      name: 'IBC RE Tool Modification',
      progress: 50,
      overdue: 50,
      start: 'Jan-15',
      due: 'Jun-30',
      issues: 90,
      risk: 'High'
    },
    {
      department: 'Cargo',
      name: 'Safety Management System Update',
      progress: 50,
      overdue: 50,
      start: 'Mar-10',
      due: 'Jul-20',
      issues: 30,
      risk: 'Low'
    }
    // Add more dummy data if needed
  ];
}