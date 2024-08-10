import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false; // Change this based on actual login logic

  constructor() { }

  isLoggedIn(): boolean {
    // Implement actual login check logic here
    return this.loggedIn;
  }

  getUserName(): Observable<string> {
    // Return the username as an observable
    return of('Sample User');
  }
}