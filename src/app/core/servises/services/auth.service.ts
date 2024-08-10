// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://172.16.102.102:8081/api/vizitor/login/';
  private profileUrl = 'http://172.16.102.102:8081/api/vizitor/utilizador/';
  private loggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  private userNameSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) { }

  private hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, { username, password }, { headers })
      .pipe(
        tap(response => {
          if (response && response.token) {
            localStorage.setItem('authToken', response.token);
            this.loggedInSubject.next(true);
            this.getProfile().subscribe(profile => {
              this.userNameSubject.next(profile.naran);
            });
          }
        }),
        catchError(this.handleError)
      );
  }

  getProfile(): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<any>(this.profileUrl, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  getUserName(): Observable<string | null> {
    return this.userNameSubject.asObservable();
  }

  private handleError(error: any) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error && error.error.detail) {
      errorMessage = error.error.detail;
    } else if (error.message) {
      errorMessage = error.message;
    }
    return throwError(errorMessage);
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.loggedInSubject.next(false);
    this.userNameSubject.next(null);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }
}
