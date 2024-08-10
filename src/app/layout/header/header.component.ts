// header.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../layout/header/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
navigateToSearchResult() {
throw new Error('Method not implemented.');
}
  userName: string | null = null;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getUserName().subscribe((userName: string | null) => {
      this.userName = userName;
    });
  }

  redirectToProfilePage(): void {
    if (this.userName) {
      this.router.navigate(['/companypfe']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
