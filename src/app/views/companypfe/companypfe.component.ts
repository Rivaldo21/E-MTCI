// companypfe.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../layout/header/auth.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-companypfe',
  templateUrl: './companypfe.component.html',
  styleUrls: ['./companypfe.component.scss']
})
export class CompanypfeComponent implements OnInit {
  userName: string | null = null;
  userId: number | null = null;
  naranEmprezariu: string | null = null;
  munisipiu: number | null = null;
  telemovel: string | null = null;
  email: string | null = null;
  image: string | null = null;
  showPostoadministrativu: boolean = false;
  postoadministrativu: any[] = [];
  isLoggedIn: boolean = false;
  isModalOpen = false;
  profileImageSrc: string = 'https://bootdey.com/img/Content/avatar/avatar7.png';
  cardOwnerId: any;

  constructor(
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.updateLoginStatus();
    window.scrollTo(0, 0);

    this.authService.getProfile().subscribe(
      profile => {
        this.userId = profile.id;
        this.userName = profile.naran;
        this.naranEmprezariu = profile.naran_emprezariu;
        this.munisipiu = profile.munisipiu;
        this.telemovel = profile.telemovel;
        this.email = profile.email;
        this.image = profile.image;
        this.profileImageSrc = this.image || 'https://bootdey.com/img/Content/avatar/avatar7.png'; // Use fallback value if image is null
        this.cdr.detectChanges();
      },
      error => {
        console.error('Error fetching profile data', error);
      }
    );
  }

  updateLoginStatus(): void {
    this.authService.isLoggedIn().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      this.cdr.detectChanges();
    });
  }

  onProfileImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImageSrc = reader.result as string;
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    }
  }

  openModal() {
    if (this.isLoggedIn) {
      this.isModalOpen = true;
    } else {
      console.log('User is not logged in. Cannot open modal.');
    }
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onLocationChange(event: any) {
    const selectedLocation = event.target.value;
    this.postoadministrativu = [];

    if (selectedLocation === 'location') {
      this.addPostoadministrativuOption('Postoadministrativu 1', 'postoadministrativu1');
      this.addPostoadministrativuOption('Postoadministrativu 2', 'postoadministrativu2');
    } else if (selectedLocation === 'location1') {
      this.addPostoadministrativuOption('Postoadministrativu 1', 'postoadministrativu1');
      this.addPostoadministrativuOption('Postoadministrativu 2', 'postoadministrativu2');
    } else if (selectedLocation === 'location2') {
      this.addPostoadministrativuOption('Postoadministrativu 1', 'postoadministrativu1');
      this.addPostoadministrativuOption('Postoadministrativu 2', 'postoadministrativu2');
    } else if (selectedLocation === 'location3') {
      this.addPostoadministrativuOption('Postoadministrativu 3', 'postoadministrativu1');
      this.addPostoadministrativuOption('Postoadministrativu 4', 'postoadministrativu2');
    }

    this.showPostoadministrativu = true;
  }

  addPostoadministrativuOption(text: string, value: string) {
    this.postoadministrativu.push({ text, value });
  }

  onSublocationChange(event: any) {
    const selectedSublocation = event.target.value;
  }
}
