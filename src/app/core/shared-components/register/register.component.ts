import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Utils } from '../../utils/utils';
import { RegisterObject } from '../../interfaces/RegisterObject';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService],
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerform', { static: false })
  registerForm!: NgForm;
  @Input() displaySidebar: boolean = false;
  faIdBadge = faIdBadge;
  isSmall: boolean = false;
  isXSmall: boolean = false;
  displayLogin: boolean = false;
  prefDealer: string = 'Greenlane';

  constructor(
    private router: Router,
    private auth: AuthService,
    private breakpointService: BreakpointObserver,
    private utils: Utils,
    private messageService: MessageService
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

  displayLoginClick() {
    this.displayLogin = true;
  }

  updatePrefDealer(prefDealer: string) {
    this.prefDealer = prefDealer;
  }

  // Submits a post request to the /users/register route of Express app
  onRegisterSubmit() {
    const username: string = this.registerForm.value.username;
    const password: string = this.registerForm.value.password;
    const password2: string = this.registerForm.value.password2;
    const prefDealer: string = this.prefDealer;

    const reqObject: RegisterObject = {
      username: username,
      password: password,
      password2: password2,
      prefDealer: prefDealer,
    };

    return this.auth.register(reqObject).subscribe({
      next: (response) => {
        this.utils.setLocalStorage(response);
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error,
        });
      },
      complete: () => {
        this.router.navigate([`/profile/${username}`]);
      },
    });
  }
}
