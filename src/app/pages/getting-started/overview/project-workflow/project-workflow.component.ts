import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-workflow',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './project-workflow.component.html',
  styleUrl: './project-workflow.component.css'
})
export class ProjectWorkflowComponent {

}
