import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { UiService } from 'src/app/services/ui.service';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginform', { static: false })
  loginForm!: NgForm;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private uiService: UiService,
    private breakpointService: BreakpointObserver
  ) {}

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

  errorMsg: String | null = null;

  isSmall: boolean = false;

  isXSmall: boolean = false;

  displaySidebar: boolean = true;

  displayRegister: boolean = false;

  faIdBadge = faIdBadge;

  displayRegisterClick() {
    this.displayRegister = true;
  }

  onLoginSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    const headers = new HttpHeaders({ 'Content-type': 'application/json' });

    const reqObject = {
      username: username,
      password: password,
    };

    this.http
      .post('http://localhost:3000/login', reqObject, {
        headers: headers,
      })
      .subscribe({
        // The response data
        // If successful
        next: (response) => {
          // If the user authenticates successfully, we need to store the JWT returned in localStorage
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
          this.uiService.updateUsername(username);
        },
      });
  }
}
