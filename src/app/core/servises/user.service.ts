// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userNameSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  private userIdSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  setUserName(userName: string) {
    this.userNameSubject.next(userName);
  }

  getUserName(): Observable<string | null> {
    return this.userNameSubject.asObservable();
  }

  setUserId(userId: string) {
    this.userIdSubject.next(userId);
  }

  getUserId(): Observable<string | null> {
    return this.userIdSubject.asObservable();
  }
}
