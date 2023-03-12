import { Component } from '@angular/core';
import { Utils } from '../../utils/utils';
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
    private utils: Utils,
    private router: Router,
    private breakpointService: BreakpointObserver
  ) {}

  onLogout() {
    this.utils.logout();
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
