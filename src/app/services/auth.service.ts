import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(username: string, password: string) {
    console.log('User Login:', username, password);
  }

  adminLogin(username: string, password: string) {
    console.log('Admin Login:', username, password);
  }
}
