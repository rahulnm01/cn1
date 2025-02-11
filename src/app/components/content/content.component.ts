import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, RouterOutlet],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  showStaticContent: boolean = true; // Default to showing static content

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Listen for route changes to toggle static content visibility
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log('Current Route:', event.urlAfterRedirects);  // Log the current route for debugging

      // Check if the current route matches the path where static content should be hidden
      if (event.urlAfterRedirects.includes('/')) {
        this.showStaticContent = false;  // Hide static content
      } else {
        this.showStaticContent = true;   // Show static content
      }
    });
  }
}
