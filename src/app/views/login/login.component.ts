import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/servises/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/companypfe']); // Navigate to dashboard on success
      },
      error => {
        console.error(error);
        alert('Login failed. Please check your credentials.');
      }
    );
  }
}


// import { Component } from '@angular/core';
// import { AuthService } from '../../core/servises/services/auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })

