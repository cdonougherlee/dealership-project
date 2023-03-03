import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
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
  username!: String | null;
  subscription!: Subscription;
  id = 1;
  loggedIn: boolean = false;

  faSliders = faSliders;
  faIdBadge = faIdBadge;
  faUser = faUser;

  isSmall: boolean = false;
  isXSmall: boolean = false;

  constructor(
    private uiService: UiService,
    private breakpointService: BreakpointObserver,
    private auth: AuthService
  ) {
    this.subscription = this.uiService
      .onLogin()
      .subscribe((value: String | null) => (this.username = value));
  }

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
  }

  isLoggedIn() {
    this.loggedIn = this.auth.isLoggedIn();
  }
}
