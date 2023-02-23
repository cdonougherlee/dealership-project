import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent {
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  message!: String;
  username!: String | null;
  index!: String | null;

  // Execute this HTTP request when the route loads
  ngOnInit() {
    this.username = this.activatedRoute.snapshot.paramMap.get('username');
    this.index = this.activatedRoute.snapshot.paramMap.get('index');

    this.http
      .get<any>(`http://localhost:3000/${this.username}/car/${this.index}`)
      .subscribe({
        next: (response) => {
          if (response) {
            this.message = response.msg;
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
