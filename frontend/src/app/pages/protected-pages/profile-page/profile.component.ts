import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  message!: String;
  username!: String | null;

  // Execute this HTTP request when the route loads
  ngOnInit() {
    this.username = this.activatedRoute.snapshot.paramMap.get('username');

    this.http
      .get<any>(`http://localhost:3000/profile/${this.username}`)
      .subscribe({
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
          console.log(error);
        },

        // When observable completes
        complete: () => {},
      });
  }
}
