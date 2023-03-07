import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  isXSmall: boolean = false;
  isSmall: boolean = false;

  username!: String | null;
  loggedIn: boolean = false;

  faSliders = faSliders;
  faIdBadge = faIdBadge;
  faUser = faUser;

  constructor(
    private breakpointService: BreakpointObserver,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((res) => {
        this.isXSmall = false;
        this.isSmall = false;

        this.isSmall = res.breakpoints[Breakpoints.Small];

        if (res.breakpoints[Breakpoints.XSmall]) {
          this.isXSmall = true;
        }
      });
    this.loggedIn = this.auth.isLoggedIn();
    this.username = this.auth.getUsername();
  }
}
