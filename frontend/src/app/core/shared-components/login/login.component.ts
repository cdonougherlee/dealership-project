import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';
import { AuthService } from 'src/app/core/services/auth.service';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginform', { static: false })
  loginForm!: NgForm;

  errorMsg: String | null = null;
  isSmall: boolean = false;
  isXSmall: boolean = false;
  displaySidebar: boolean = true;
  displayRegister: boolean = false;
  faIdBadge = faIdBadge;

  constructor(
    private auth: AuthService,
    private router: Router,
    private breakpointService: BreakpointObserver,
    private utils: Utils
  ) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isXSmall = false;
        this.isSmall = res.breakpoints[Breakpoints.Small];

        if (res.breakpoints[Breakpoints.XSmall]) {
          this.isXSmall = this.isSmall = true;
        }
      });
  }

  displayRegisterClick() {
    this.displayRegister = true;
  }

  onLoginSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    const reqObject = {
      username: username,
      password: password,
    };

    return this.auth.login(reqObject).subscribe({
      next: (response) => {
        this.utils.setLocalStorage(response);
        this.errorMsg = null;
      },
      error: (error) => {
        this.errorMsg = error;
      },
      complete: () => {
        this.router.navigate([`/profile/${username}`]);
        this.utils.updateUsername(username);
      },
    });
  }
}
