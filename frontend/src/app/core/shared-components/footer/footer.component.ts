import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Utils } from '../../utils/utils';

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
  username!: string | null;
  loggedIn: boolean = false;
  faSliders = faSliders;
  faIdBadge = faIdBadge;
  faUser = faUser;

  constructor(
    private breakpointService: BreakpointObserver,
    private utils: Utils
  ) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((res) => {
        this.isXSmall = res.breakpoints[Breakpoints.Small];
        if (res.breakpoints[Breakpoints.XSmall]) {
          this.isXSmall = this.isXSmall = true;
        }
      });

    this.loggedIn = this.utils.isLoggedIn();
    this.username = this.utils.getUsername();
  }
}
