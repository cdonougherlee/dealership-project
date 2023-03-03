import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerform', { static: false })
  registerForm!: NgForm;

  @Input() displaySidebar: boolean = false;

  faIdBadge = faIdBadge;

  errorMsg: String | null = null;

  isSmall: boolean = false;

  isXSmall: boolean = false;

  dealerships!: Object[];

  displayLogin: boolean = false;

  currentlySelected = {
    location: 'Greenlane',
    coordinates: '-36.893870, 174.799226',
  };

  prefDealer!: String;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private breakpointService: BreakpointObserver
  ) {
    this.dealerships = [
      { location: 'Greenlane', coordinates: '-36.893870, 174.799226' },
      { location: 'North Shore', coordinates: '-36.778531, 174.746149' },
      { location: 'Botany', coordinates: '-36.927326, 174.898395' },
    ];
  }

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isSmall = false;
        this.isXSmall = false;

        this.isSmall = res.breakpoints[Breakpoints.Small];

        if (res.breakpoints[Breakpoints.XSmall]) {
          this.isXSmall = this.isSmall = true;
        }
      });
  }

  displayLoginClick() {
    this.displayLogin = true;
  }

  // Submits a post request to the /users/register route of Express app
  onRegisterSubmit() {
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    const password2 = this.registerForm.value.password2;
    const prefDealer = this.registerForm.value.prefDealer.location;

    const headers = new HttpHeaders({ 'Content-type': 'application/json' });

    const reqObject = {
      username: username,
      password: password,
      password2: password2,
      prefDealer: prefDealer,
    };

    this.http
      .post('http://localhost:3000/register', reqObject, {
        headers: headers,
      })
      .subscribe({
        // The response data
        // If successful
        next: (response) => {
          this.authService.setLocalStorage(response);
          console.log(reqObject);
          console.log(response);

          this.errorMsg = null;
        },
        // If there is an error
        error: (error) => {
          console.log(error);
          console.log(reqObject);

          this.errorMsg = error.error.msg;
        },
        // When observable completes
        complete: () => {
          console.log('done!');
          this.router.navigate([`/profile/${username}`]);
        },
      });
  }
}
