import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  // Variable intialisation
  isSmall: boolean = false;
  message!: string;
  username!: String | null;
  carIDs: any = [];
  user!: Object;

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService,
    private breakpointService: BreakpointObserver
  ) {}

  // Execute this HTTP request when the route loads
  ngOnInit() {
    this.username = this.auth.getUsername();

    this.http
      .get<any>(`http://localhost:3000/profile/${this.username}`)
      .subscribe({
        next: (response) => {
          if (response) {
            this.user = response.user;
            this.carIDs = response.user.cars;
          }
          // console.log(this.user);
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

    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isSmall = false;

        if (res.matches) {
          this.isSmall = true;
        }
      });
  }

  // loadCars() {
  //   this.message.forEach((element: any) => {
  //     this.http
  //       .get<any>(`http://localhost:3000/${this.username}/car/${{ element }}`)
  //       .subscribe({
  //         next: (response) => {
  //           console.log('RAN');
  //           console.log(response.car);
  //           if (response) {
  //             this.cars.push(response.car);
  //           }
  //           console.log(this.cars);
  //         },

  //         // If there is an error
  //         error: (error) => {
  //           if (error.status === 401) {
  //             this.message =
  //               'You are not authorized to visit this route.  No data is displayed.';
  //           }
  //           console.log(error);
  //         },

  //         // When observable completes
  //         complete: () => {},
  //       });
  //   });
  // }
}
