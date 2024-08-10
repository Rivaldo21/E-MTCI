import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../core/servises/user.service';

interface Munisipiu {
  id: number;
  naran: string;
}

@Component({
  selector: 'app-rejistu',
  templateUrl: './rejistu.component.html',
  styleUrls: ['./rejistu.component.scss']
})
export class RejistuComponent implements OnInit {
  name: string = '';
  businessName: string = '';
  municipalityId: number | null = null;
  phone: string = '';
  email: string = '';
  password: string = '';
  image: File | null = null;
  userId: number = 1; 
  locations: Munisipiu[] = [];
  step: number = 1; // Added to handle multi-step form

  private apiUrl = 'https://backendecomerce.apps06.tic.gov.tl/api/vizitor/utilizador/';
  private munisipiuApiUrl = 'https://backendecomerce.apps06.tic.gov.tl/api/vizitor/munisipiu/';

  constructor(private router: Router, private http: HttpClient, private userService: UserService) {}

  ngOnInit() {
    this.getLocations();
  }

  onFileSelected(event: any) {
    this.image = event.target.files[0];
  }

  getLocations() {
    let page = 1;
    const fetchPage = () => {
      this.http.get<{ count: number, next: string, results: Munisipiu[] }>(`${this.munisipiuApiUrl}?page=${page}`).subscribe(
        data => {
          if (data && data.results) {
            this.locations = [...this.locations, ...data.results];
            if (data.next) {
              page++;
              fetchPage(); // Fetch the next page
            }
          } else {
            console.error('Error: Results are missing in the response');
          }
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching Munisipiu:', error);
        }
      );
    };
    fetchPage(); // Start fetching from the first page
  }

  nextStep() {
    if (this.step === 1 && this.name && this.businessName && this.municipalityId) {
      this.step = 2;
    } else if (this.step === 2) {
      this.signUp();
    }
  }

  previousStep() {
    if (this.step === 2) {
      this.step = 1;
    }
  }

  signUp() {
    const formData = new FormData();
    formData.append('naran', this.name);
    formData.append('naran_emprezariu', this.businessName);
    formData.append('munisipiu', this.municipalityId!.toString());
    formData.append('telemovel', this.phone);
    formData.append('email', this.email);
    formData.append('password', this.password); // Add password to formData
    if (this.image) {
      formData.append('image', this.image);
    }
    formData.append('user', this.userId.toString());

    this.http.post(this.apiUrl, formData).subscribe(
      response => {
        console.log('Rejistu sukses!', response);
        alert('Rejistu sukses!');
        this.userService.setUserName(this.name);  // Save user name
        this.userService.setUserId(this.userId.toString()); // Save user ID
        this.router.navigate(['/companypfe']);
      },
      (error: HttpErrorResponse) => {
        console.error('Registrasi gagal:', error);
        let errorMsg = 'Registrasi gagal!';
        if (error.status === 500) {
          errorMsg += ' Internal Server Error. Please check the server logs for more details.';
        } else if (error.status === 400) {
          errorMsg += ' Bad Request. Please ensure all fields are filled correctly.';
        } else {
          errorMsg += ' ' + (error.message || JSON.stringify(error.error));
        }
        alert(errorMsg);
      }
    );
  }
}
