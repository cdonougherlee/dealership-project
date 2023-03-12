import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() protected!: boolean;

  username!: String | null;

  loggedIn: boolean = false;

  faSliders = faSliders;
  faIdBadge = faIdBadge;
  faUser = faUser;

  isSmall: boolean = false;
  isXSmall: boolean = false;

  constructor(
    private breakpointService: BreakpointObserver,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
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

    this.loggedIn = this.auth.isLoggedIn();
    this.username = this.auth.getUsername();
  }
}
