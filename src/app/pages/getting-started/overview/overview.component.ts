import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'], // Fixed typo: styleUrls instead of styleUrl
})
export class OverviewComponent {
  hasChildRoute = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Check if the current route has child routes
        this.hasChildRoute = this.route.firstChild !== null;
      });
  }
}
