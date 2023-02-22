import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private http: HttpClient) {}

  message!: String;

  // Execute this HTTP request when the route loads
  ngOnInit() {
    this.http.get<any>('http://localhost:3000/cameron').subscribe({
      next: (response) => {
        if (response) {
          this.message = response.user.username;
        }
      },

      // If there is an error
      error: (error) => {
        if (error.status === 401) {
          this.message =
            'You are not authorized to visit this route.  No data is displayed.';
        }
      },

      // When observable completes
      complete: () => {
        console.log('HTTP request done');
      },
    });
  }
}
