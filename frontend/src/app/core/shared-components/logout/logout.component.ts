import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  faCircleXmark = faCircleXmark;

  isSmall: boolean = false;

  isXSmall: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private breakpointService: BreakpointObserver
  ) {}

  onLogout() {
    this.auth.logout();
    this.router.navigate([`/landing`]);
  }

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
}
