import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Utils } from '../../utils/utils';

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

  displayLogin: boolean = false;

  prefDealer: string = 'Greenlane';

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService,
    private breakpointService: BreakpointObserver,
    private utils: Utils
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

  displayLoginClick() {
    this.displayLogin = true;
  }

  updatePrefDealer(prefDealer: string) {
    this.prefDealer = prefDealer;
  }

  // Submits a post request to the /users/register route of Express app
  onRegisterSubmit() {
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    const password2 = this.registerForm.value.password2;
    const prefDealer = this.prefDealer;

    const reqObject = {
      username: username,
      password: password,
      password2: password2,
      prefDealer: prefDealer,
    };
    return this.auth.register(reqObject).subscribe({
      next: (response) => {
        this.utils.setLocalStorage(response);
        this.errorMsg = null;
      },
      error: (error) => {
        this.errorMsg = error;
      },
      complete: () => {
        this.router.navigate([`/profile/${username}`]);
      },
    });
  }
}
