import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OneSignalService } from './one-signal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecomercemci';

  constructor(
    private oneSignalService: OneSignalService,
    private router: Router 
  ) {}

  navigateToSearchResult(): void {
    this.router.navigate(['/search-result']);
  }

  ngOnInit(): void {
    this.oneSignalService.subscribeUser();
  }

  getUserId(): void {
    this.oneSignalService.getUserId();
  }
}