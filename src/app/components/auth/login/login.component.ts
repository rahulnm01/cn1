import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showModal: boolean = true;
  isAdminView: boolean = false;

  email: string = '';
  password: string = '';
  adminUsername: string = '';
  adminPassword: string = '';

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  toggleAdminView() {
    this.isAdminView = !this.isAdminView;
  }

  login() {
    console.log('User Login:', this.email, this.password);
    // Authentication logic here
  }

  adminLogin() {
    console.log('Admin Login:', this.adminUsername, this.adminPassword);
    // Authentication logic for Admin here
  }

  showSignup() {
    console.log('Redirecting to Signup Page...');
    // Implement signup logic
  }
}