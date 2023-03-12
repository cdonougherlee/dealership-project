import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent {
  currentPrefDealer!: string;

  username!: string | null;

  displayModal!: boolean;

  message!: string;

  showModalDialog() {
    this.displayModal = true;
  }

  constructor(private auth: AuthService, private http: HttpClient) {}

  ngOnInit() {
    this.username = this.auth.getUsername();

    this.http
      .get<any>(`http://localhost:3000/profile/${this.username}`)
      .subscribe({
        next: (response) => {
          if (response) {
            this.currentPrefDealer = response.user.prefDealer;
          }
        },

        // If there is an error
        error: (error) => {
          if (error.status === 401) {
            this.message =
              'You are not authorized to visit this route.  No data is displayed.';
          }
          console.log(error);
        },

        // When observable completes
        complete: () => {},
      });
  }

  updateDetails(newDetails: any) {
    this.username = newDetails.username;
    this.currentPrefDealer = newDetails.prefDealer;
  }
}
