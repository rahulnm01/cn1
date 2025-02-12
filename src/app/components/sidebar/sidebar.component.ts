import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isCollapsed = false;

  dropdownStates: { [key: string]: boolean } = {
    gettingStarted: false,
    installation: false,
    guides: false,                                                                                                                                                                                         
    bestPractices: false,
    apiReference: false,
    support: false,
  };

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleDropdown(section: string) {
    this.dropdownStates[section] = !this.dropdownStates[section];
  }
  menuItems: any[] = [];

  ngOnInit() {
    this.menuItems = this.generateMenuData('Parent', 1, 5); // Adjust depth & child counts as needed
  }

 

  isDropdownOpen(key: string): boolean {
    return this.dropdownStates[key] || false;
  }

  generateMenuData(labelPrefix: string, depth: number, childCount: number): any[] {
    if (depth > 5) return []; // Base condition to prevent infinite recursion

    const menuItems = [];
    for (let i = 1; i <= childCount; i++) {
      const label = `${labelPrefix}-${i}`;
      const children = this.generateMenuData(label, depth + 1, childCount);
      menuItems.push({
        label: label,
        children: children,
      });
    }
    return menuItems;
  }

}


